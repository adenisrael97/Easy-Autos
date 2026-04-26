import { blogPosts, blogCategories } from "@/data/blog";

export { blogCategories };

export function getPosts({ category = "All", search = "" } = {}) {
  const q = search.toLowerCase().trim();
  return blogPosts.filter((post) => {
    if (category !== "All" && post.category !== category) return false;
    if (q && !`${post.title} ${post.desc}`.toLowerCase().includes(q)) return false;
    return true;
  });
}

export function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug) || null;
}
