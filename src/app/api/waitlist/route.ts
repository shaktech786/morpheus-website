import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

function getSupabase() {
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const { email, source = "website" } = await request.json();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Valid email address is required" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    // Insert into Supabase
    const supabase = getSupabase();
    const { error: dbError } = await supabase
      .from("waitlist_signups")
      .insert({
        email: normalizedEmail,
        source,
        early_bird: true,
        discount_percent: 50,
        ip_address: ip,
      });

    if (dbError) {
      // Duplicate email
      if (dbError.code === "23505") {
        return NextResponse.json(
          { error: "You're already on the list! We'll notify you when we launch." },
          { status: 409 }
        );
      }
      console.error("Supabase insert error:", dbError);
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    // Send welcome email via Resend
    try {
      const resend = getResend();
      await resend.emails.send({
        from: "Morpheus <noreply@getmorphe.us>",
        to: normalizedEmail,
        subject: "You're in. 50% early bird discount locked.",
        html: buildWelcomeEmail(),
      });
    } catch (emailError) {
      // Log but don't fail the signup if email fails
      console.error("Welcome email failed:", emailError);
    }

    return NextResponse.json({
      message: "Welcome to the early access list!",
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}

function buildWelcomeEmail(): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#0a0a0a;font-family:'Courier New',Courier,monospace;">
  <div style="max-width:600px;margin:0 auto;padding:40px 24px;">

    <div style="text-align:center;margin-bottom:32px;">
      <h1 style="color:#00ff88;font-size:28px;margin:0;text-shadow:0 0 10px rgba(0,255,136,0.5);">
        morpheus
      </h1>
    </div>

    <div style="background-color:#141414;border:1px solid #333;border-radius:12px;padding:32px;margin-bottom:24px;">
      <p style="color:#00ff88;font-size:14px;margin:0 0 16px 0;letter-spacing:2px;">
        &gt; ACCESS GRANTED
      </p>
      <h2 style="color:#ffffff;font-size:22px;margin:0 0 16px 0;font-weight:600;">
        You're on the early access list.
      </h2>
      <p style="color:#b0b0b0;font-size:15px;line-height:1.6;margin:0 0 24px 0;">
        Thanks for signing up. When Morpheus launches, you'll be the first to know &mdash; and you'll get an exclusive deal.
      </p>

      <div style="background-color:#0a0a0a;border:1px solid #00ff88;border-radius:8px;padding:24px;text-align:center;margin-bottom:24px;">
        <p style="color:#00cc00;font-size:13px;margin:0 0 8px 0;letter-spacing:1px;">
          EARLY BIRD DISCOUNT
        </p>
        <p style="color:#00ff88;font-size:48px;font-weight:bold;margin:0 0 8px 0;">
          50% OFF
        </p>
        <p style="color:#888;font-size:13px;margin:0;">
          Locked in for you at launch. No code needed.
        </p>
      </div>

      <p style="color:#b0b0b0;font-size:14px;line-height:1.6;margin:0;">
        Morpheus lets you control any machine from your phone &mdash; voice commands, encrypted pairing, and remote access from anywhere.
      </p>
    </div>

    <div style="text-align:center;padding:16px 0;border-top:1px solid #333;">
      <p style="color:#666;font-size:12px;margin:0;">
        &copy; ${new Date().getFullYear()} Morpheus &mdash; <a href="https://getmorphe.us" style="color:#004400;">getmorphe.us</a>
      </p>
    </div>

  </div>
</body>
</html>`;
}
