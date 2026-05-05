/**
 * Grovitt Blog MCP — HTTP endpoint
 *
 * Deployed at: https://<your-domain>/api/mcp
 * Protocol:    MCP Streamable HTTP (stateless, works on Netlify serverless)
 * Auth:        Bearer token via MCP_API_KEY env var
 *              (skip auth in dev by leaving MCP_API_KEY unset)
 *
 * Connect any MCP-compatible agent to this URL.
 * See mcp/README.md for agent config examples.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { prisma } from "@/lib/prisma";
import { registerTools } from "../../../../mcp/tools";

// Re-used across warm invocations in the same Lambda container
const globalForMcp = globalThis as unknown as {
  mcpServer: McpServer | undefined;
};

function getServer(): McpServer {
  if (!globalForMcp.mcpServer) {
    const s = new McpServer({ name: "grovitt-blog", version: "1.0.0" });
    registerTools(s, prisma);
    globalForMcp.mcpServer = s;
  }
  return globalForMcp.mcpServer;
}

function unauthorized() {
  return new Response(
    JSON.stringify({ error: "Unauthorized — provide a valid Bearer token." }),
    { status: 401, headers: { "Content-Type": "application/json" } }
  );
}

function checkAuth(req: Request): boolean {
  const apiKey = process.env.MCP_API_KEY;
  if (!apiKey) return true; // auth disabled in dev
  const header = req.headers.get("authorization") ?? "";
  return header === `Bearer ${apiKey}`;
}

async function handle(req: Request): Promise<Response> {
  if (!checkAuth(req)) return unauthorized();

  const transport = new WebStandardStreamableHTTPServerTransport({
    sessionIdGenerator: undefined, // stateless — required for serverless
  });

  const server = getServer();
  await server.connect(transport);

  const response = await transport.handleRequest(req);
  return response;
}

export const GET  = handle;
export const POST = handle;
export const DELETE = handle;
