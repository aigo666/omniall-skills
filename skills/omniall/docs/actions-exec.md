# Action: `exec-token`

Execute a shell command with a token key securely substituted via placeholder replacement. The real key never enters the AI conversation context.

Usage: `/omniall exec-token <token_id> <command...>`

## How it works

The AI constructs the full command but uses `__OMNIALL_TOKEN_{token_id}__` wherever the real key would go. The helper script replaces the placeholder with the real key and executes the command. Output from the child command is sanitized before returning to the AI.

```bash
EXEC_SCRIPT="${CLAUDE_SKILL_DIR}/scripts/exec-token.js"
$RUNTIME "$EXEC_SCRIPT" <token_id> -- <command with __OMNIALL_TOKEN_{id}__ placeholder>
```

## Example

To configure a CLI tool with a token:

```bash
$RUNTIME "$EXEC_SCRIPT" 42 -- some-cli config set provider.openai.apiKey __OMNIALL_TOKEN_42__
```

The script will:

1. Fetch the real key for token 42 from OmniallAI
2. Replace `__OMNIALL_TOKEN_42__` with the real key in the command string
3. Execute the command in a child shell
4. Sanitize stdout/stderr to redact any accidental key echoes
5. Return the sanitized output and the child command's exit code

## When to use `exec-token` vs `apply-token`

- Use **`exec-token`** when the target app expects the key via a CLI command (e.g. `app config set key <value>`)
- Use **`apply-token`** when the target app reads the key from a config file (e.g. `.env`, `config.json`, `config.yaml`)

## Security rules

- **NEVER** construct the command with a real `sk-` key. Only the placeholder is allowed.
- **NEVER** try to extract the real key from the sanitized command output.
- The placeholder format is strictly `__OMNIALL_TOKEN_{token_id}__` — no variations.
- Trust the sanitized output and exit code instead of re-running the command to verify.
- The child command's stdout/stderr are sanitized with the same rules as `scan-config` (sk- tokens, Bearer tokens, sensitive field values, connection strings).
