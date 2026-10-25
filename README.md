# omniall-skills

Skills for managing [OmniallAI](https://api.omniall.ai) resources — models, groups, tokens and balance.

## Installation

Use `npx` to install:

```bash
npx skills add https://github.com/aigo666/omniall-skills --skill omniall
```

## Configuration

Set the following variables before using the skill. **Recommended: export as environment variables** (e.g. in your shell profile):

```bash
export OMNIALL_BASE_URL=https://api.omniall.ai
export OMNIALL_ACCESS_TOKEN=your-access-token
export OMNIALL_USER_ID=1
```

`OMNIALL_BASE_URL` defaults to `https://api.omniall.ai` when unset. `OMNIALL_ACCESS_TOKEN` and `OMNIALL_USER_ID` are required.

Alternatively, you can create a `.env` file in the project root or the skill directory. Make sure `.env` is in your `.gitignore`.

## Usage

| Action | Usage | Description |
| ------ | ----- | ----------- |
| `models` | `/omniall models` | List available models |
| `groups` | `/omniall groups` | List user groups |
| `balance` | `/omniall balance` | Show account balance |
| `tokens` | `/omniall tokens` | List API tokens |
| `create-token` | `/omniall create-token <name> [--group=xxx]` | Create a new API token |
| `switch-group` | `/omniall switch-group <token_id> <group>` | Change a token's group |
| `copy-token` | `/omniall copy-token <token_id>` | Copy real key to clipboard (never shown) |
| `apply-token` | `/omniall apply-token <token_id> <file_path>` | Apply token key to a config file securely |
| `exec-token` | `/omniall exec-token <token_id> <command...>` | Execute a command with the token key securely substituted |
| `scan-config` | `/omniall scan-config <file_path>` | Inspect config structure with best-effort secret redaction |
| `help` | `/omniall help <question>` | Answer questions about OmniallAI |

## Requirements

One of the following JS runtimes (the skill auto-detects):

- [Bun](https://bun.sh) (preferred)
- Node.js >= 18
- Deno

## License

MIT
