import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, company, service, budget, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Grovitt Studio Contact" <${process.env.SMTP_USER}>`,
      to: "vijaypotnuru123@gmail.com",
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` — ${company}` : ""}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0b; color: #f5f1ea; padding: 40px; border-radius: 12px;">
          <div style="margin-bottom: 32px;">
            <span style="font-family: serif; font-style: italic; font-size: 28px; color: #f5f1ea;">grovitt</span>
            <span style="display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: #ff6a1a; margin-left: 2px; vertical-align: super;"></span>
          </div>
          <h2 style="font-size: 22px; font-weight: 600; margin-bottom: 24px; color: #f5f1ea;">New project enquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(245,241,234,0.1); color: rgba(245,241,234,0.55); font-size: 13px; width: 140px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(245,241,234,0.1); font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(245,241,234,0.1); color: rgba(245,241,234,0.55); font-size: 13px;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(245,241,234,0.1); font-size: 15px;"><a href="mailto:${email}" style="color: #ff6a1a;">${email}</a></td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(245,241,234,0.1); color: rgba(245,241,234,0.55); font-size: 13px;">Company</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(245,241,234,0.1); font-size: 15px;">${company}</td>
            </tr>` : ""}
            ${service ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(245,241,234,0.1); color: rgba(245,241,234,0.55); font-size: 13px;">Service</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(245,241,234,0.1); font-size: 15px;">${service}</td>
            </tr>` : ""}
            ${budget ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(245,241,234,0.1); color: rgba(245,241,234,0.55); font-size: 13px;">Budget</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(245,241,234,0.1); font-size: 15px;">${budget}</td>
            </tr>` : ""}
          </table>
          <div style="margin-top: 28px;">
            <div style="color: rgba(245,241,234,0.55); font-size: 13px; margin-bottom: 10px;">Message</div>
            <div style="background: rgba(245,241,234,0.05); border: 1px solid rgba(245,241,234,0.1); border-radius: 8px; padding: 20px; font-size: 15px; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</div>
          </div>
          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid rgba(245,241,234,0.1); color: rgba(245,241,234,0.4); font-size: 12px;">
            Submitted via grovitt.com/contact
          </div>
        </div>
      `,
      text: `
New project enquiry from ${name}

Email: ${email}${company ? `\nCompany: ${company}` : ""}${service ? `\nService: ${service}` : ""}${budget ? `\nBudget: ${budget}` : ""}

Message:
${message}
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
