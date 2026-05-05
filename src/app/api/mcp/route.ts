/**
 * Grovitt Blog MCP — HTTP endpoint
 *
 * Deployed at: https://<your-domain>/api/mcp
 * Protocol:    MCP Streamable HTTP (stateless, works on Netlify serverless)
 * Auth:        Bearer token via MCP_API_KEY env var
 *              (skip auth by leaving MCP_API_KEY unset)
 *
 * Connect any MCP-compatible agent to this URL.
 * See mcp/README.md for agent config examples.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { prisma } from "@/lib/prisma";
import { registerTools } from "../../../../mcp/tools";

function unauthorized() {
  return new Response(
    JSON.stringify({ error: "Unauthorized — provide a valid Bearer token." }),
    { status: 401, headers: { "Content-Type": "application/json" } }
  );
}

function checkAuth(req: Request): boolean {
  const apiKey = process.env.MCP_API_KEY;
  if (!apiKey) return true; // auth disabled when MCP_API_KEY is not set
  const header = req.headers.get("authorization") ?? "";
  return header === `Bearer ${apiKey}`;
}

async function handle(req: Request): Promise<Response> {
  if (!checkAuth(req)) return unauthorized();

  try {
    // Create a fresh server + transport per request (stateless, no session management)
    const mcpServer = new McpServer({ name: "grovitt-blog", version: "1.0.0" });
    registerTools(mcpServer, prisma);

    const transport = new WebStandardStreamableHTTPServerTransport({
      sessionIdGenerator: undefined,
    });

    await mcpServer.connect(transport);
    const response = await transport.handleRequest(req);
    return response;
  } catch (err) {
    console.error("MCP handler error:", err);
    return new Response(
      JSON.stringify({
        jsonrpc: "2.0",
        error: {
          code: -32603,
          message: "Internal server error",
          data: err instanceof Error ? err.message : String(err),
        },
        id: null,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }
}

export const GET  = handle;
export const POST = handle;
export const DELETE = handle;
