import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

async function isAdmin() {
  const jar = await cookies();
  return jar.get("grovitt_admin")?.value === process.env.ADMIN_SECRET;
}

type Ctx = { params: Promise<{ id: string }> };

export async function GET(_req: Request, { params }: Ctx) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const post = await prisma.post.findUnique({ where: { id: Number(id) } });
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(post);
}

export async function PATCH(req: Request, { params }: Ctx) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const body = await req.json();
  const { title, slug, excerpt, content, coverColor, category, readTime, published, publishedAt } = body;

  try {
    const post = await prisma.post.update({
      where: { id: Number(id) },
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
        updatedAt: new Date(),
      },
    });
    return NextResponse.json(post);
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Failed to update post";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: Ctx) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  try {
    await prisma.post.delete({ where: { id: Number(id) } });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete post" }, { status: 500 });
  }
}
