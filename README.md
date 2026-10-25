# omniall-skills

**English** | [中文](README.zh-CN.md)

Skills for managing [OmniallAI](https://omniall.ai) — models, groups, tokens and balance.

## Installation

```bash
npx skills add https://github.com/aigo666/omniall-skills --skill omniall
```

## Configuration

Export these variables in your shell profile (recommended):

```bash
export OMNIALL_BASE_URL=https://api.omniall.ai
export OMNIALL_ACCESS_TOKEN=your-access-token
export OMNIALL_USER_ID=1
```

- `OMNIALL_BASE_URL` — optional; defaults to `https://api.omniall.ai`
- `OMNIALL_ACCESS_TOKEN` — required (system access token from Personal Settings)
- `OMNIALL_USER_ID` — required

You may also use a `.env` file in the project root or skill directory. Keep `.env` out of git.

## Usage

| Action | Usage | Description |
| ------ | ----- | ----------- |
| `models` | `/omniall models` | List available models |
| `groups` | `/omniall groups` | List user groups |
| `balance` | `/omniall balance` | Show account balance |
| `tokens` | `/omniall tokens` | List API tokens |
| `create-token` | `/omniall create-token <name> [--group=xxx]` | Create an API token |
| `switch-group` | `/omniall switch-group <token_id> <group>` | Change a token's group |
| `copy-token` | `/omniall copy-token <token_id>` | Copy real key to clipboard (never shown) |
| `apply-token` | `/omniall apply-token <token_id> <file_path>` | Apply token key to a config file securely |
| `exec-token` | `/omniall exec-token <token_id> <command...>` | Run a command with the token key substituted securely |
| `scan-config` | `/omniall scan-config <file_path>` | Inspect config structure with best-effort secret redaction |
| `help` | `/omniall help <question>` | Answer questions about OmniallAI |

## Requirements

One of: [Bun](https://bun.sh) (preferred), Node.js >= 18, or Deno.

## License

MIT
