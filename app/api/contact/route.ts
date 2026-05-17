import { NextRequest, NextResponse } from "next/server";

import { checkRateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || "contact-local";
  const rate = checkRateLimit(`contact:${ip}`, { limit: 4, windowMs: 60_000 });

  if (!rate.allowed) {
    return NextResponse.json(
      { message: "Too many submissions. Please wait a minute and try again." },
      { status: 429 }
    );
  }

  const body = await request.json();
  const requiredFields = ["name", "email", "subject", "message"] as const;

  for (const field of requiredFields) {
    if (!String(body[field] || "").trim()) {
      return NextResponse.json(
        { message: `The ${field} field is required.` },
        { status: 400 }
      );
    }
  }

  return NextResponse.json({
    message:
      "Message received. Connect this route to your database or support inbox provider before production deployment.",
  });
}
