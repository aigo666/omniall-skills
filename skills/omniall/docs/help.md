# Help & Reference

This file is the single entry point for all user questions about OmniallAI. Read this file, then follow the instructions below based on the question type.

---

## Type 1: Skill usage questions

Questions like "omniall 是什么", "怎么查余额", "copy-token 怎么用", "CONFIG_MISSING 怎么办" — answer directly from the content below.

### What is OmniallAI?

[OmniallAI](https://omniall.ai) is a unified AI gateway for aggregating and distributing model access. It can expose different providers through OpenAI-compatible, Claude-compatible, or Gemini-compatible interfaces, making it easier to integrate multiple model vendors behind one endpoint.

In addition to model access, OmniallAI provides token management, usage tracking, balance monitoring, and group-based access control.

This skill lets you manage your OmniallAI account directly from the AI coding assistant — no need to open the web console.

### FAQ

**Q: Why are token keys shown as `sk-xxxx**********xxxx`?**
A: For security. Token keys are always masked in output. Use `/omniall copy-token <id>` to copy the real key to your clipboard without displaying it in the conversation.

**Q: Can I ask the AI to show me my real token key?**
A: No. The AI is strictly prohibited from reading or displaying raw keys. The only supported way to retrieve a real key is `/omniall copy-token`, which copies it to your clipboard silently.

**Q: Where do I find my access token and user ID?**
A: Log in at [https://omniall.ai](https://omniall.ai) and open Personal Settings. Generate an access token there; your user ID is shown on the same page.

**Q: What's the difference between access token and API token?**
A: The **access token** (`OMNIALL_ACCESS_TOKEN`) authenticates this skill to the OmniallAI management API. **API tokens** (managed via `/omniall tokens`) are the `sk-xxx` keys used by applications to call models.

**Q: I get `[CONFIG_MISSING]` — what do I do?**
A: You haven't set the required environment variables. Run:

```bash
export OMNIALL_BASE_URL=https://api.omniall.ai
export OMNIALL_ACCESS_TOKEN=your-token
export OMNIALL_USER_ID=1
```

`OMNIALL_BASE_URL` can be omitted (defaults to `https://api.omniall.ai`). Alternatively, add them to a `.env` file in your project root.

**Q: Can I have the AI configure my token into another app?**
A: Yes. Use `/omniall apply-token <token_id> <file_path>`. The AI will update the config with a placeholder, then let a script replace that placeholder with the real key without ever exposing the key in the conversation.

**Q: I want to check a config file but it might have secrets in it.**
A: Use `/omniall scan-config <file_path>`. It shows the file structure with sensitive values such as passwords, tokens, API keys, and credential-bearing connection strings replaced by `<REDACTED>`, so neither you nor the AI accidentally expose secrets. Note that this is a best-effort heuristic — it is not a formal parser and may not catch every secret in every file format, so treat it as a risk-reduction measure rather than an absolute guarantee.

**Q: How do I configure a third-party CLI that needs `config set ... <key>`?**
A: Use `/omniall exec-token <token_id> <command...>`. Write the full command but use the placeholder `__OMNIALL_TOKEN_{id}__` where the real key would go. The script replaces the placeholder and executes the command — the real key never enters the AI conversation. For example: `/omniall exec-token 42 some-cli config set provider.openai.apiKey __OMNIALL_TOKEN_42__`.

**Q: How do I install or update this skill?**
A: Run `npx skills add https://github.com/aigo666/omniall-skills --skill omniall`. This fetches the latest version from the [omniall-skills repository](https://github.com/aigo666/omniall-skills).

---

## Type 2: API usage questions

Questions like "OmniallAI 怎么调用 Claude 格式", "怎么生成图片", "Seedance 怎么计费" — answer from OmniallAI product knowledge and the gateway's OpenAI / Claude / Gemini compatible endpoints on `https://api.omniall.ai`. Prefer:

1. Base URL: `https://api.omniall.ai` (or `https://api.omniall.ai/v1` for OpenAI-compatible clients)
2. Auth: `Authorization: Bearer sk-...` with an API token from `/omniall tokens`
3. If unsure about a specific model or route, tell the user to check the OmniallAI console documentation, or use `/omniall models` to list currently available models for their account
