# omniall-skills

[English](README.md) | **中文**

用于管理 [OmniallAI](https://omniall.ai) 的 Skill：模型、分组、令牌与余额。

## 安装

```bash
npx skills add https://github.com/aigo666/omniall-skills --skill omniall
```

## 配置

建议在 shell 配置中导出：

```bash
export OMNIALL_BASE_URL=https://api.omniall.ai
export OMNIALL_ACCESS_TOKEN=你的系统访问令牌
export OMNIALL_USER_ID=1
```

- `OMNIALL_BASE_URL` — 可选，默认 `https://api.omniall.ai`
- `OMNIALL_ACCESS_TOKEN` — 必填（控制台「个人设置」中的系统访问令牌）
- `OMNIALL_USER_ID` — 必填

也可在项目根目录或 skill 目录写 `.env`，请勿提交到 git。

## 用法

| 动作 | 用法 | 说明 |
| ------ | ----- | ----------- |
| `models` | `/omniall models` | 列出可用模型 |
| `groups` | `/omniall groups` | 列出用户分组 |
| `balance` | `/omniall balance` | 查看账户余额 |
| `tokens` | `/omniall tokens` | 列出 API 令牌 |
| `create-token` | `/omniall create-token <name> [--group=xxx]` | 创建 API 令牌 |
| `switch-group` | `/omniall switch-group <token_id> <group>` | 切换令牌分组 |
| `copy-token` | `/omniall copy-token <token_id>` | 复制真实密钥到剪贴板（对话中不展示） |
| `apply-token` | `/omniall apply-token <token_id> <file_path>` | 安全写入配置文件 |
| `exec-token` | `/omniall exec-token <token_id> <command...>` | 安全替换密钥后执行命令 |
| `scan-config` | `/omniall scan-config <file_path>` | 脱敏查看配置结构 |
| `help` | `/omniall help <question>` | OmniallAI 相关问答 |

## 运行环境

需安装其一：[Bun](https://bun.sh)（推荐）、Node.js >= 18，或 Deno。

## 许可证

MIT
