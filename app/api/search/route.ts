import { NextRequest, NextResponse } from "next/server";

import { deriveSearchFilters, searchRecipes } from "@/lib/search";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q") || "";
  const items = query ? searchRecipes(query) : [];

  return NextResponse.json({
    query,
    filters: deriveSearchFilters(query),
    items,
  });
}
