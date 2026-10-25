# omniall-skills

[English](README.md) | **中文**

[OmniallAI](https://omniall.ai) 官方 Skill — 在 AI 编码助手中管理模型、令牌、分组与余额，并提问使用问题，无需切换到浏览器。

## 概述

Skills 是一种轻量级扩展协议，让 AI 编辑器（如 Claude Code、Codex、OpenClaw、Cursor、Windsurf 等）能够在编码环境内直接与 OmniallAI 交互，无需打开浏览器或管理面板。

OmniallAI Skills 现已支持在 Claude Code、Codex、OpenClaw 等工具中直接执行查询模型、管理令牌、查看余额，以及提问 OmniallAI 使用问题等操作。

## 支持的 AI 编辑器

所有 Skills 均可在以下 AI 编码工具中使用：

| AI 编辑器 / 编码助手 | 类型 | 备注 |
| --- | --- | --- |
| Claude Code | 终端 AI 编程助手 | Anthropic 官方 CLI |
| OpenClaw | 自托管 AI 助手平台 | 支持 Skills，可在对话中直接调用 `/omniall` 指令 |
| Cursor | AI 原生代码编辑器 | 基于 VS Code |
| Windsurf | AI 代码编辑器 | Codeium 出品 |
| Cline | VS Code AI 扩展 | 开源 AI 编码代理 |
| Codex CLI | 终端 AI 编程助手 | OpenAI 官方 CLI |

> 任何支持 Skills 协议的 AI 工具都可以使用 OmniallAI Skills。

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
