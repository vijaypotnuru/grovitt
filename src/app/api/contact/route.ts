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
      to: "contact@grovitt.com",
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` — ${company}` : ""}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0b; color: #f5f1ea; padding: 40px; border-radius: 12px;">
          <div style="margin-bottom: 32px;">
            <svg width="180" height="56" viewBox="0 0 279 87" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32.0107 75.8474V82.7383H30.6286V77.9305L28.8615 82.7383H27.6571L25.8899 77.9502V82.7383H24.498V75.8474H26.1861L28.279 81.0304L30.3325 75.8474H32.0107ZM38.8095 75.6697C39.4611 75.6697 40.0501 75.8211 40.5766 76.1239C41.1097 76.4266 41.5276 76.8511 41.8304 77.3974C42.1397 77.9371 42.2944 78.5492 42.2944 79.2336C42.2944 79.9181 42.1397 80.5335 41.8304 81.0797C41.5276 81.626 41.1097 82.0505 40.5766 82.3533C40.0501 82.656 39.4611 82.8074 38.8095 82.8074C38.1579 82.8074 37.5656 82.656 37.0325 82.3533C36.506 82.0505 36.088 81.626 35.7787 81.0797C35.476 80.5335 35.3246 79.9181 35.3246 79.2336C35.3246 78.5492 35.476 77.9371 35.7787 77.3974C36.088 76.8511 36.506 76.4266 37.0325 76.1239C37.5656 75.8211 38.1579 75.6697 38.8095 75.6697ZM38.8095 76.9531C38.4014 76.9531 38.0427 77.0453 37.7334 77.2296C37.4241 77.4138 37.1806 77.6804 37.0029 78.0292C36.8317 78.3715 36.7462 78.7729 36.7462 79.2336C36.7462 79.6943 36.8317 80.0991 37.0029 80.4479C37.1806 80.7902 37.4241 81.0534 37.7334 81.2377C38.0427 81.422 38.4014 81.5141 38.8095 81.5141C39.2175 81.5141 39.5762 81.422 39.8856 81.2377C40.1949 81.0534 40.4351 80.7902 40.6062 80.4479C40.7839 80.0991 40.8728 79.6943 40.8728 79.2336C40.8728 78.7729 40.7839 78.3715 40.6062 78.0292C40.4351 77.6804 40.1949 77.4138 39.8856 77.2296C39.5762 77.0453 39.2175 76.9531 38.8095 76.9531Z" fill="white"/>
              <path d="M94.3778 24.3116C94.7068 24.2458 95.0359 24.2458 95.365 24.2458H104.513V36.4874H95.365C95.0359 36.4874 94.7068 36.4874 94.3778 36.5532C89.7707 37.0139 86.2167 40.897 86.2167 45.6357V69H74.0409V45.6357C74.0409 42.3449 74.7649 39.2516 76.0812 36.4874C79.3719 29.5768 86.2825 24.6407 94.3778 24.3116ZM137.647 26.3518C144.887 29.7742 149.889 37.0797 149.889 45.6357V47.6759C149.889 56.1661 144.887 63.5374 137.647 66.9597C134.883 68.276 131.789 69 128.499 69C125.274 69 122.115 68.276 119.35 66.9597C112.177 63.5374 107.175 56.1661 107.175 47.6759V45.6357C107.175 37.0797 112.177 29.7742 119.35 26.3518C122.115 25.0355 125.274 24.2458 128.499 24.2458C131.789 24.2458 134.883 25.0355 137.647 26.3518ZM137.647 47.6759V45.6357C137.647 43.0689 136.66 40.8312 135.014 39.12C133.369 37.4746 131.066 36.4874 128.499 36.4874C123.497 36.4874 119.35 40.5679 119.35 45.6357V47.6759C119.35 52.6779 123.497 56.8242 128.499 56.8242C131.066 56.8242 133.369 55.7712 135.014 54.1258C136.66 52.4804 137.647 50.1769 137.647 47.6759ZM175.621 54.1916L185.888 24.2458H198.788L183.453 69H167.789L152.52 24.2458H165.42L175.621 54.1916ZM209.23 3.90891C214.298 3.90891 218.378 8.05525 218.378 13.0572C218.378 18.125 214.298 22.2055 209.23 22.2055C204.162 22.2055 200.082 18.125 200.082 13.0572C200.082 8.05525 204.162 3.90891 209.23 3.90891Z" fill="white"/>
              <path d="M32.7773 0.558594C45.3218 0.297283 56.2985 7.02703 62.1787 17.0234L52.0518 22.9688C48.589 16.8273 41.9899 12.6457 34.4111 12.6455H32.4502C21.2779 12.6457 12.1963 21.728 12.1963 32.835V36.8203C12.1964 47.1868 20.0155 55.7507 30.0684 56.9326L20.501 66.5C8.56444 61.365 0.109375 49.3763 0.109375 35.6436V34.0107C0.109375 15.8473 14.6139 0.885274 32.7773 0.558594ZM49.9014 37.0996L32.3848 42.8965V30.8096H56.1924L49.9014 37.0996Z" fill="white"/>
              <path d="M65.3385 35.4503C52.3665 50.8199 34.9834 61.425 22.2266 64.96C41.8997 53.9553 56.5522 38.0375 61.4192 31.4541L57.3463 29.5329L71.771 24.4609L67.7208 39.5765L65.3385 35.4503Z" fill="#FD7919"/>
              <path d="M61.8057 58.1943C59.7442 60.6861 57.5429 62.684 55.2734 64.2715V48.6035C58.0023 46.2 60.2399 43.9922 61.8057 42.2871V58.1943Z" fill="#FD7919"/>
              <path d="M52.6543 65.6592C50.472 66.8716 48.2511 67.7439 46.0469 68.3408V55.6504C48.4112 53.9805 50.6318 52.2619 52.6543 50.5879V65.6592Z" fill="#FD7919"/>
              <path d="M43.4326 69.1475C41.1106 69.5618 38.8343 69.6938 36.6719 69.625V61.6875C38.998 60.451 41.2632 59.0842 43.4326 57.6543V69.1475Z" fill="#FD7919"/>
              <path d="M34.21 69.1797C31.707 68.921 29.4114 68.4117 27.4453 67.793V65.4131C29.7211 64.6639 31.9866 63.729 34.21 62.6582V69.1797Z" fill="#FD7919"/>
              <path d="M25.1445 66.9648C24.7081 66.7853 24.296 66.6065 23.9141 66.4229C24.3241 66.3255 24.7344 66.2203 25.1445 66.1094V66.9648Z" fill="#FD7919"/>
              <circle cx="209.609" cy="13" r="9.5" fill="#FD7919"/>
            </svg>
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
