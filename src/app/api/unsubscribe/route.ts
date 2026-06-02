import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }

  // TODO: persist unsubscribe to database / email provider suppression list
  console.log(`[unsubscribe] ${email}`);

  return NextResponse.json({ ok: true });
}
