"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ARTICLES, getAllTags, type Tag } from "@/lib/articles-data";

const CATEGORY_COLORS: Record<string, string> = {
  健檢紅字: "bg-danger/10 text-danger",
  減肥真相: "bg-brand/10 text-brand",
  瘦瘦針: "bg-purple/10 text-purple",
  飲食方法: "bg-warning/10 text-warning",
  學員故事: "bg-info/10 text-info",
};

const CATEGORY_LABELS: Record<string, string> = {
  健檢紅字: "報告有紅字？",
  減肥真相: "怎麼減都瘦不下來？",
  瘦瘦針: "打針之前想知道⋯",
  飲食方法: "到底該怎麼吃？",
  學員故事: "跟你一樣的人",
};

const CATEGORIES = Object.keys(CATEGORY_LABELS);

const FEATURED_SLUGS = [
  "eating-order-blood-sugar",
  "huilan-reborn-at-53",
  "ozempic-complete-guide",
  "weight-plateau-not-failure",
  "eating-out-one-rule",
];

export default function ArticlesPage() {
  const [active, setActive] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<Tag | null>(null);
  const [showCount, setShowCount] = useState(12);

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
    setShowCount(12);
  };

  const handleTagClick = (tag: Tag) => {
    setActiveTag(activeTag === tag ? null : tag);
    setActive(null);
    setShowCount(12);
  };

  const sorted = [...ARTICLES].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const filtered = activeTag
    ? sorted.filter((a) => a.tags.includes(activeTag))
    : active
      ? sorted.filter((a) => a.category === active)
      : sorted;

  // When showing "all" articles, exclude featured ones since they're shown in FeaturedSection above
  const isShowingAll = !activeTag && !active;
  const displayArticles = isShowingAll
    ? filtered.filter((a) => !FEATURED_SLUGS.includes(a.slug))
    : filtered;

  const featured = displayArticles.filter((a) => a.featured);
  const rest = displayArticles.filter((a) => !a.featured);

  return (
    <section className="pt-10 pb-16 px-5">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold tracking-tight mb-3">
          搞懂你的身體
        </h1>
        <p className="text-subtle mb-8">
          看完就知道為什麼以前的方法不管用
        </p>

        {/* 精選文章 */}
        <FeaturedSection />

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => { handleCategoryClick(null); }}
            className={`text-sm px-4 py-2 rounded-full font-medium transition-colors ${
              active === null && activeTag === null
                ? "bg-brand text-white"
                : "bg-white border border-edge text-subtle hover:border-edge-dark"
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
                  ? "bg-brand text-white"
                  : "bg-white border border-edge text-subtle hover:border-edge-dark"
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
                  ? "bg-brand text-white"
                  : "bg-surface-green text-brand border border-brand/20 hover:bg-brand/10"
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
            <p className="text-xs font-semibold text-brand tracking-wider mb-4">
              推薦閱讀
            </p>
            <div className="space-y-4">
              {featured.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="block rounded-2xl bg-white border-2 border-brand/20 hover:border-brand/40 hover:shadow-sm transition-all group overflow-hidden"
                >
                  {article.coverImage && (
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      width={700}
                      height={400}
                      className="w-full h-auto"
                      sizes="(max-width: 768px) 100vw, 700px"
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
                      {article.depth === "快讀" && <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-brand/10 text-brand">⚡ 快讀</span>}
                      {article.depth === "深度" && <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-info/10 text-info">📖 深度</span>}
                      <span className="text-xs text-muted">
                        {article.readTime}
                      </span>
                    </div>
                    <h2 className="font-bold text-lg mb-1 group-hover:text-brand transition-colors leading-snug">
                      {article.title}
                    </h2>
                    <p className="text-sm text-subtle leading-relaxed line-clamp-2">
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
              <p className="text-xs font-semibold text-muted tracking-wider mb-4">
                所有文章
              </p>
            )}
            <div className="space-y-3">
              {rest.slice(0, showCount).map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="block rounded-2xl bg-white border border-edge hover:border-edge-dark hover:shadow-sm transition-all group overflow-hidden"
                >
                  {article.coverImage && (
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      width={700}
                      height={400}
                      className="w-full h-auto"
                      sizes="(max-width: 768px) 100vw, 700px"
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
                    {article.depth === "快讀" && <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-brand/10 text-brand">⚡ 快讀</span>}
                    {article.depth === "深度" && <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-info/10 text-info">📖 深度</span>}
                    <span className="text-xs text-muted">
                      {article.readTime}
                    </span>
                  </div>
                  <h2 className="font-bold text-lg mb-1 group-hover:text-brand transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-sm text-subtle leading-relaxed line-clamp-2">
                    {article.description}
                  </p>
                  </div>
                </Link>
              ))}
            </div>
            {rest.length > showCount && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowCount((c) => c + 12)}
                  className="px-8 py-3 text-sm font-semibold text-brand border border-brand/30 rounded-full hover:bg-surface-green transition-colors"
                >
                  顯示更多（還有 {rest.length - showCount} 篇）
                </button>
              </div>
            )}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-subtle mb-2">
              這個組合還沒有文章，換個條件看看？
            </p>
            <button
              onClick={() => { handleCategoryClick(null); }}
              className="text-sm text-brand font-medium hover:underline"
            >
              看全部文章 →
            </button>
          </div>
        )}

        <div className="mt-12 text-center space-y-4">
          <p className="text-subtle">想知道你是哪種代謝類型？</p>
          <Link
            href="/quiz"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white bg-brand rounded-full shadow-md"
          >
            30 秒代謝測驗 →
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturedSection() {
  const featuredArticles = FEATURED_SLUGS.map((s) =>
    ARTICLES.find((a) => a.slug === s)
  ).filter((a): a is (typeof ARTICLES)[number] => Boolean(a));

  if (featuredArticles.length === 0) return null;

  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-4">精選文章</h2>
      <div className="space-y-4">
        {featuredArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="block rounded-2xl border border-edge overflow-hidden hover:shadow-sm transition-shadow"
          >
            {article.coverImage && (
              <Image
                src={article.coverImage}
                alt={article.title}
                width={700}
                height={350}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 700px"
              />
            )}
            <div className="p-5">
              <div className="font-bold text-lg mb-2">{article.title}</div>
              <p className="text-sm text-subtle line-clamp-2">
                {article.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
