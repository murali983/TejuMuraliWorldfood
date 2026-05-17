import { NextRequest, NextResponse } from "next/server";

import { buildAiSearchSummary } from "@/lib/ai";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q") || "";

  if (!query) {
    return NextResponse.json(
      { message: "Provide a search query with ?q=" },
      { status: 400 }
    );
  }

  const result = await buildAiSearchSummary(query);
  return NextResponse.json(result);
}
