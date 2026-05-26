import { NextRequest, NextResponse } from "next/server";

import { deriveSearchFilters, searchIndianArchive, searchRecipes } from "@/lib/search";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q") || "";
  const items = query ? searchRecipes(query) : [];
  const archiveItems = query ? searchIndianArchive(query).slice(0, 60) : [];

  return NextResponse.json({
    query,
    filters: deriveSearchFilters(query),
    items,
    archiveItems,
  });
}
