"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ARTICLES, getAllTags, type Tag } from "@/lib/articles-data";

const CATEGORY_COLORS: Record<string, string> = {
  健檢紅字: "bg-[#e74c3c]/10 text-[#e74c3c]",
  減肥真相: "bg-[#2a9d6f]/10 text-[#2a9d6f]",
  瘦瘦針: "bg-[#8e44ad]/10 text-[#8e44ad]",
  飲食方法: "bg-[#e67e22]/10 text-[#e67e22]",
  學員故事: "bg-[#3498db]/10 text-[#3498db]",
};

const CATEGORY_LABELS: Record<string, string> = {
  健檢紅字: "報告有紅字？",
  減肥真相: "怎麼減都瘦不下來？",
  瘦瘦針: "打針之前想知道⋯",
  飲食方法: "到底該怎麼吃？",
  學員故事: "跟你一樣的人",
};

const CATEGORIES = Object.keys(CATEGORY_LABELS);

export default function ArticlesPage() {
  const [active, setActive] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<Tag | null>(null);

  const allTags = getAllTags();

  // Read ?tag= from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tagParam = params.get("tag") as Tag | null;
    if (tagParam && allTags.some((t) => t.tag === tagParam)) {
      setActiveTag(tagParam);
      setActive(null);
    }
  }, []);

  const handleCategoryClick = (cat: string | null) => {
    setActive(cat);
    setActiveTag(null);
  };

  const handleTagClick = (tag: Tag) => {
    setActiveTag(activeTag === tag ? null : tag);
    setActive(null);
  };

  const sorted = [...ARTICLES].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const filtered = activeTag
    ? sorted.filter((a) => a.tags.includes(activeTag))
    : active
      ? sorted.filter((a) => a.category === active)
      : sorted;

  const featured = filtered.filter((a) => a.featured);
  const rest = filtered.filter((a) => !a.featured);

  return (
    <section className="pt-10 pb-16 px-5">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold tracking-tight mb-3">
          搞懂你的身體
        </h1>
        <p className="text-[#6b6560] mb-8">
          看完就知道為什麼以前的方法不管用
        </p>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => { handleCategoryClick(null); }}
            className={`text-sm px-4 py-2 rounded-full font-medium transition-colors ${
              active === null && activeTag === null
                ? "bg-[#2a9d6f] text-white"
                : "bg-white border border-[#eee9e5] text-[#6b6560] hover:border-[#ddd5cf]"
            }`}
          >
            全部
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(active === cat ? null : cat)}
              className={`text-sm px-4 py-2 rounded-full font-medium transition-colors ${
                active === cat
                  ? "bg-[#2a9d6f] text-white"
                  : "bg-white border border-[#eee9e5] text-[#6b6560] hover:border-[#ddd5cf]"
              }`}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>

        {/* Tag filter pills */}
        <div className="flex flex-wrap gap-1.5 mb-10">
          {allTags.map(({ tag, count }) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
                activeTag === tag
                  ? "bg-[#2a9d6f] text-white"
                  : "bg-[#f3f9f5] text-[#2a9d6f] border border-[#2a9d6f]/20 hover:bg-[#2a9d6f]/10"
              }`}
            >
              {tag}
              <span className="ml-1 opacity-60">{count}</span>
            </button>
          ))}
        </div>

        {/* Featured */}
        {featured.length > 0 && (
          <div className="mb-10">
            <p className="text-xs font-semibold text-[#2a9d6f] tracking-wider mb-4">
              推薦閱讀
            </p>
            <div className="space-y-4">
              {featured.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="block rounded-2xl bg-white border-2 border-[#2a9d6f]/20 hover:border-[#2a9d6f]/40 hover:shadow-sm transition-all group overflow-hidden"
                >
                  {article.coverImage && (
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      width={700}
                      height={400}
                      className="w-full h-auto"
                    />
                  )}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          CATEGORY_COLORS[article.category] || ""
                        }`}
                      >
                        {article.category}
                      </span>
                      {article.depth === "快讀" && <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-[#2a9d6f]/10 text-[#2a9d6f]">⚡ 快讀</span>}
                      {article.depth === "深度" && <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-[#3498db]/10 text-[#3498db]">📖 深度</span>}
                      <span className="text-xs text-[#a8a29e]">
                        {article.readTime}
                      </span>
                    </div>
                    <h2 className="font-bold text-lg mb-1 group-hover:text-[#2a9d6f] transition-colors leading-snug">
                      {article.title}
                    </h2>
                    <p className="text-sm text-[#6b6560] leading-relaxed line-clamp-2">
                      {article.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Rest */}
        {rest.length > 0 && (
          <div>
            {featured.length > 0 && (
              <p className="text-xs font-semibold text-[#a8a29e] tracking-wider mb-4">
                所有文章
              </p>
            )}
            <div className="space-y-3">
              {rest.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="block rounded-2xl bg-white border border-[#eee9e5] hover:border-[#ddd5cf] hover:shadow-sm transition-all group overflow-hidden"
                >
                  {article.coverImage && (
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      width={700}
                      height={400}
                      className="w-full h-auto"
                    />
                  )}
                  <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        CATEGORY_COLORS[article.category] || ""
                      }`}
                    >
                      {article.category}
                    </span>
                    {article.depth === "快讀" && <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-[#2a9d6f]/10 text-[#2a9d6f]">⚡ 快讀</span>}
                    {article.depth === "深度" && <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-[#3498db]/10 text-[#3498db]">📖 深度</span>}
                    <span className="text-xs text-[#a8a29e]">
                      {article.readTime}
                    </span>
                  </div>
                  <h2 className="font-bold text-lg mb-1 group-hover:text-[#2a9d6f] transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-sm text-[#6b6560] leading-relaxed line-clamp-2">
                    {article.description}
                  </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <p className="text-center text-[#a8a29e] py-12">
            這個分類還沒有文章
          </p>
        )}

        <div className="mt-12 text-center space-y-4">
          <p className="text-[#6b6560]">想知道你是哪種代謝類型？</p>
          <a
            href="https://metabolism-quiz.vercel.app"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white bg-[#2a9d6f] rounded-full shadow-md"
          >
            30 秒代謝測驗 →
          </a>
        </div>
      </div>
    </section>
  );
}
