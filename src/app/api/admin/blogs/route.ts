import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

async function isAdmin() {
  const jar = await cookies();
  return jar.get("grovitt_admin")?.value === process.env.ADMIN_SECRET;
}

export async function GET() {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
      category: true,
      published: true,
      publishedAt: true,
      createdAt: true,
    },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { title, slug, excerpt, content, coverColor, category, readTime, published, publishedAt } = body;

  if (!title || !slug || !content) {
    return NextResponse.json({ error: "title, slug and content are required" }, { status: 400 });
  }

  try {
    const post = await prisma.post.create({
      data: {
        title,
        slug,
        excerpt: excerpt || null,
        content,
        coverColor: coverColor || null,
        category: category || null,
        readTime: readTime ? Number(readTime) : null,
        published: Boolean(published),
        publishedAt: published && publishedAt ? new Date(publishedAt) : published ? new Date() : null,
      },
    });
    return NextResponse.json(post, { status: 201 });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Failed to create post";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
