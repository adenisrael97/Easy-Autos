import { NextResponse } from "next/server";
import { getPosts, blogCategories } from "@/services/blogService";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") || "All";
  const search = searchParams.get("search") || "";

  const posts = getPosts({ category, search });
  return NextResponse.json({ posts, categories: blogCategories });
}
