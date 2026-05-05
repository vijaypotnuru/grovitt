/**
 * Grovitt Blog MCP Server — stdio transport (local use)
 *
 * Run:  npx tsx mcp/server.ts
 * Connect via Claude Desktop, Cursor, Windsurf, etc.
 * See mcp/README.md for config snippets.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";
import { registerTools } from "./tools.js";

dotenv.config();

const prisma = new PrismaClient();

const server = new McpServer({
  name: "grovitt-blog",
  version: "1.0.0",
});

registerTools(server, prisma);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  process.stderr.write("Grovitt Blog MCP server running on stdio\n");
}

main().catch((err) => {
  process.stderr.write(`Fatal: ${err}\n`);
  process.exit(1);
});
