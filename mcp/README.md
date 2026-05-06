# Grovitt Blog MCP Server

Two transports — **stdio** for local agents, **HTTP** for any remote agent.

**Live endpoint:** `https://grovitt.com/api/mcp` (open access, no auth required)

---

## Tools

| Tool | What it does |
|---|---|
| `list_posts` | List posts (all or published-only, with limit) |
| `get_post` | Fetch a full post by slug or ID |
| `create_post` | Write and optionally publish a new post |
| `update_post` | Edit any field without touching the rest |
| `publish_post` | Publish or revert to draft |
| `delete_post` | Permanently delete (requires `confirm: true`) |

### Cover colour presets

| Preset | Gradient |
|---|---|
| `orange` *(default)* | Orange → deep red |
| `navy` | Navy → black |
| `purple` | Royal blue → black |
| `sunrise` | Orange → navy |
| `ember` | Peach → orange |
| `ocean` | Navy → orange |

Or pass any raw CSS gradient string.

---

## Option A — Remote HTTP (deployed, any agent anywhere)

The MCP server is live at:

```
https://grovitt.com/api/mcp
```

No authentication required — any MCP-compatible agent can connect directly.

### Claude Desktop

Edit `%APPDATA%\Claude\claude_desktop_config.json`
(macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "grovitt-blog": {
      "url": "https://grovitt.com/api/mcp"
    }
  }
}
```

Restart Claude Desktop → 🔌 MCP icon appears in the chat bar.

### Claude.ai Projects

1. Open a Claude.ai Project
2. **Settings → Integrations → Add MCP server**
3. URL: `https://grovitt.com/api/mcp`

### Cursor (remote MCP)

`.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "grovitt-blog": {
      "url": "https://grovitt.com/api/mcp"
    }
  }
}
```

### Any other agent (Anthropic SDK, LangChain, custom)

```
POST https://grovitt.com/api/mcp
Content-Type: application/json
```

---

## Option B — Local stdio (no deploy needed)

Useful for development or when you want direct DB access without HTTP.

### Claude Desktop (local)

```json
{
  "mcpServers": {
    "grovitt-blog-local": {
      "command": "npx",
      "args": ["tsx", "mcp/server.ts"],
      "cwd": "D:/Grovitt-projects/grovitt",
      "env": {
        "DATABASE_URL": "mysql://u952752172_grovitt:oG%231h3oQoV@srv873.hstgr.io:3306/u952752172_grovitt"
      }
    }
  }
}
```

### Cursor / Windsurf (local)

```json
{
  "mcpServers": {
    "grovitt-blog-local": {
      "command": "npx",
      "args": ["tsx", "mcp/server.ts"],
      "cwd": "${workspaceFolder}"
    }
  }
}
```

---

## Example prompts once connected

> "Create a blog post titled 'Why TypeScript pays off' — navy cover,
>  category Engineering, ~500 words. Publish it immediately."

> "List all unpublished draft posts on Grovitt."

> "Update the Grovitt post 'ai-agents-finally-working' — change the category to Strategy."

> "Publish the post with slug 'my-draft' on grovitt.com."

> "Delete the Grovitt post 'old-test-post' — confirm deletion."
