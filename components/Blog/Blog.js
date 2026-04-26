"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { FaSearch, FaArrowRight, FaTimes } from "react-icons/fa";
import { getPosts, blogCategories as categories } from "@/services/blogService";

const allPosts = getPosts();

export default function Blog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return allPosts.filter(
      (card) =>
        (activeCategory === "All" || card.category === activeCategory) &&
        (!q || card.title.toLowerCase().includes(q) || card.desc.toLowerCase().includes(q))
    );
  }, [search, activeCategory]);

  return (
    <section className="w-full">
      <div className="relative bg-mesh py-20 sm:py-24 px-4 overflow-hidden border-b border-line">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
            Blog & News
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-fg mb-4">
            Automotive Insights
          </h1>
          <p className="text-soft text-sm md:text-base max-w-2xl mx-auto mb-8">
            Stay up to date with the latest trends, news, and expert advice from the world of
            automobiles — buying tips, maintenance guides, industry innovations and more.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-10 relative">
        <div className="bg-surface border border-line rounded-2xl shadow-card p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-faint text-sm pointer-events-none" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-elevated text-fg text-sm border border-line placeholder-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-faint hover:text-fg cursor-pointer"
                  aria-label="Clear search"
                >
                  <FaTimes className="text-sm" />
                </button>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  activeCategory === cat.label
                    ? "bg-accent text-on-accent border-accent shadow-soft"
                    : "bg-page text-soft border-line hover:border-accent/40 hover:text-accent"
                }`}
              >
                <span>{cat.emoji}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-soft">No articles match your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((card) => (
              <article
                key={card.title}
                className="group bg-surface rounded-2xl border border-line overflow-hidden flex flex-col shadow-soft hover:shadow-card hover:-translate-y-1 hover:border-accent/30 transition-all duration-300"
              >
                <div className="relative w-full h-48 overflow-hidden bg-elevated">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="px-2.5 py-1 rounded-full bg-accent-soft text-accent font-semibold">
                      {card.category}
                    </span>
                    <span className="text-faint">{card.readTime} read</span>
                  </div>
                  <h3 className="text-lg font-bold text-fg mb-2 group-hover:text-accent transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-soft text-sm flex-1 mb-4">{card.desc}</p>
                  <button className="inline-flex items-center gap-2 text-accent text-sm font-semibold hover:text-accent-hover transition-colors w-fit cursor-pointer">
                    Read More
                    <FaArrowRight className="text-xs group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
