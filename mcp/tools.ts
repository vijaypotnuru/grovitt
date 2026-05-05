/**
 * Shared tool definitions — used by both the stdio server (local)
 * and the HTTP API route (deployed on Netlify).
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

export const COVER_GRADIENTS: Record<string, string> = {
  orange:  "linear-gradient(135deg,#ff8a3d,#c4400a)",
  navy:    "linear-gradient(135deg,#1b2a6b,#0a0a0b)",
  purple:  "linear-gradient(135deg,#2c42a8,#0a0a0b)",
  sunrise: "linear-gradient(135deg,#ff6a1a,#1b2a6b)",
  ember:   "linear-gradient(135deg,#ffb988,#ff6a1a)",
  ocean:   "linear-gradient(135deg,#1b2a6b,#ff6a1a)",
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function resolveColor(input: string | undefined): string | undefined {
  if (!input) return undefined;
  return COVER_GRADIENTS[input.toLowerCase()] ?? input;
}

export function registerTools(server: McpServer, prisma: PrismaClient) {

  // ── list_posts ──────────────────────────────────────────────
  server.tool(
    "list_posts",
    "List blog posts. Returns id, title, slug, category, published status, excerpt, and dates.",
    {
      published_only: z.boolean().optional()
        .describe("If true, return only published posts. Default: return all."),
      limit: z.number().int().min(1).max(100).optional()
        .describe("Max posts to return (default 20)."),
    },
    async ({ published_only, limit }) => {
      const posts = await prisma.post.findMany({
        where: published_only ? { published: true } : undefined,
        select: {
          id: true, title: true, slug: true, category: true,
          readTime: true, published: true, publishedAt: true,
          createdAt: true, excerpt: true,
        },
        orderBy: { createdAt: "desc" },
        take: limit ?? 20,
      });
      return { content: [{ type: "text" as const, text: JSON.stringify(posts, null, 2) }] };
    }
  );

  // ── get_post ────────────────────────────────────────────────
  server.tool(
    "get_post",
    "Fetch a single blog post by slug or numeric ID. Returns the full post including HTML content.",
    {
      slug: z.string().optional().describe("URL slug of the post."),
      id:   z.number().int().optional().describe("Numeric ID of the post."),
    },
    async ({ slug, id }) => {
      if (!slug && !id) {
        return { content: [{ type: "text" as const, text: "Error: provide either slug or id." }], isError: true };
      }
      const post = await prisma.post.findUnique({ where: slug ? { slug } : { id } });
      if (!post) {
        return { content: [{ type: "text" as const, text: `Post not found: ${slug ?? id}` }], isError: true };
      }
      return { content: [{ type: "text" as const, text: JSON.stringify(post, null, 2) }] };
    }
  );

  // ── create_post ─────────────────────────────────────────────
  server.tool(
    "create_post",
    `Create a new blog post.

Content must be HTML — use <h2>, <p>, <ul>, <li>, <blockquote>, <strong>, <em>.

cover_color accepts a CSS gradient string OR a preset name:
orange | navy | purple | sunrise | ember | ocean`,
    {
      title:       z.string().min(1).describe("Post title."),
      content:     z.string().min(1).describe("Full post body in HTML."),
      excerpt:     z.string().optional().describe("Short summary (1–2 sentences) shown in listings."),
      category:    z.string().optional().describe("e.g. 'Engineering', 'Growth Marketing', 'Strategy', 'AI'."),
      read_time:   z.number().int().min(1).optional().describe("Estimated read time in minutes."),
      cover_color: z.string().optional().describe("Preset name or CSS gradient. Default: orange."),
      slug:        z.string().optional().describe("URL slug. Auto-generated from title if omitted."),
      published:   z.boolean().optional().describe("Publish immediately? Default: false (draft)."),
    },
    async ({ title, content, excerpt, category, read_time, cover_color, slug, published }) => {
      const finalSlug    = slug ?? slugify(title);
      const resolvedColor = resolveColor(cover_color) ?? COVER_GRADIENTS.orange;

      try {
        const post = await prisma.post.create({
          data: {
            title,
            slug: finalSlug,
            excerpt:    excerpt    ?? null,
            content,
            coverColor: resolvedColor,
            category:   category   ?? null,
            readTime:   read_time  ?? null,
            published:  published  ?? false,
            publishedAt: published ? new Date() : null,
          },
        });

        return {
          content: [{
            type: "text" as const,
            text: `✓ Post created!\n\n${JSON.stringify({
              id:        post.id,
              title:     post.title,
              slug:      post.slug,
              published: post.published,
              url:       `https://grovitt.com/blogs/${post.slug}`,
            }, null, 2)}`,
          }],
        };
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        const friendly = msg.includes("Unique constraint")
          ? `A post with slug "${finalSlug}" already exists. Pass a different slug.`
          : msg;
        return { content: [{ type: "text" as const, text: `Error: ${friendly}` }], isError: true };
      }
    }
  );

  // ── update_post ─────────────────────────────────────────────
  server.tool(
    "update_post",
    "Update an existing blog post by slug. Only the fields you provide will change.",
    {
      slug:        z.string().describe("Current slug of the post to update."),
      title:       z.string().optional(),
      content:     z.string().optional().describe("Full post body in HTML."),
      excerpt:     z.string().optional(),
      category:    z.string().optional(),
      read_time:   z.number().int().min(1).optional(),
      cover_color: z.string().optional().describe("Preset name or CSS gradient."),
      new_slug:    z.string().optional().describe("Rename the slug (changes the public URL)."),
    },
    async ({ slug, title, content, excerpt, category, read_time, cover_color, new_slug }) => {
      const existing = await prisma.post.findUnique({ where: { slug } });
      if (!existing) {
        return { content: [{ type: "text" as const, text: `Post not found: "${slug}"` }], isError: true };
      }

      const resolvedColor = resolveColor(cover_color);

      try {
        const post = await prisma.post.update({
          where: { slug },
          data: {
            ...(title        !== undefined && { title }),
            ...(content      !== undefined && { content }),
            ...(excerpt      !== undefined && { excerpt }),
            ...(category     !== undefined && { category }),
            ...(read_time    !== undefined && { readTime: read_time }),
            ...(resolvedColor !== undefined && { coverColor: resolvedColor }),
            ...(new_slug     !== undefined && { slug: new_slug }),
          },
        });
        return {
          content: [{
            type: "text" as const,
            text: `✓ Post updated.\n\n${JSON.stringify({ id: post.id, title: post.title, slug: post.slug }, null, 2)}`,
          }],
        };
      } catch (e) {
        return { content: [{ type: "text" as const, text: `Error: ${e instanceof Error ? e.message : String(e)}` }], isError: true };
      }
    }
  );

  // ── publish_post ────────────────────────────────────────────
  server.tool(
    "publish_post",
    "Publish or unpublish (revert to draft) a blog post.",
    {
      slug:    z.string().describe("Slug of the post."),
      publish: z.boolean().describe("true = publish, false = revert to draft."),
    },
    async ({ slug, publish }) => {
      const existing = await prisma.post.findUnique({ where: { slug } });
      if (!existing) {
        return { content: [{ type: "text" as const, text: `Post not found: "${slug}"` }], isError: true };
      }
      const post = await prisma.post.update({
        where: { slug },
        data: {
          published:   publish,
          publishedAt: publish ? (existing.publishedAt ?? new Date()) : null,
        },
      });
      return {
        content: [{
          type: "text" as const,
          text: `✓ "${post.title}" is now ${post.published ? "published ✅" : "a draft 📝"}.`,
        }],
      };
    }
  );

  // ── delete_post ─────────────────────────────────────────────
  server.tool(
    "delete_post",
    "Permanently delete a blog post. Requires confirm: true.",
    {
      slug:    z.string().describe("Slug of the post to delete."),
      confirm: z.boolean().describe("Must be true to confirm permanent deletion."),
    },
    async ({ slug, confirm }) => {
      if (!confirm) {
        return {
          content: [{
            type: "text" as const,
            text: `Deletion cancelled. Pass confirm: true to permanently delete "${slug}".`,
          }],
        };
      }
      const existing = await prisma.post.findUnique({ where: { slug } });
      if (!existing) {
        return { content: [{ type: "text" as const, text: `Post not found: "${slug}"` }], isError: true };
      }
      await prisma.post.delete({ where: { slug } });
      return {
        content: [{ type: "text" as const, text: `✓ Post "${existing.title}" permanently deleted.` }],
      };
    }
  );
}
