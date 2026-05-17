import { NextRequest, NextResponse } from "next/server";

import { checkRateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || "newsletter-local";
  const rate = checkRateLimit(`newsletter:${ip}`, { limit: 6, windowMs: 60_000 });

  if (!rate.allowed) {
    return NextResponse.json(
      { message: "Too many newsletter requests. Please try again shortly." },
      { status: 429 }
    );
  }

  const body = await request.json();
  const email = String(body.email || "").trim().toLowerCase();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: "Enter a valid email address." }, { status: 400 });
  }

  return NextResponse.json({
    message:
      "Subscription captured. Connect this route to Mailchimp, ConvertKit, or your CRM before production launch.",
  });
}
