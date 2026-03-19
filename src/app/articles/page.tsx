import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLES } from "@/lib/articles-data";

export const metadata: Metadata = {
  title: "文章",
  description:
    "代謝科學、飲食策略、瘦瘦針真相——用科學理解你的身體，做出正確的選擇。",
};

const CATEGORY_COLORS: Record<string, string> = {
  代謝科學: "bg-[#2a9d6f]/10 text-[#2a9d6f]",
  飲食策略: "bg-[#e67e22]/10 text-[#e67e22]",
  瘦瘦針真相: "bg-[#e74c3c]/10 text-[#e74c3c]",
  學員故事: "bg-[#3498db]/10 text-[#3498db]",
};

export default function ArticlesPage() {
  const sorted = [...ARTICLES].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featured = sorted.filter((a) => a.featured);
  const rest = sorted.filter((a) => !a.featured);

  return (
    <section className="py-16 px-5">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold tracking-tight mb-3">文章</h1>
        <p className="text-[#6b6560] mb-12">
          用科學理解你的身體，做出正確的選擇
        </p>

        {/* Featured */}
        {featured.length > 0 && (
          <div className="mb-10">
            <p className="text-xs font-semibold text-[#2a9d6f] uppercase tracking-wider mb-4">
              推薦閱讀
            </p>
            <div className="space-y-4">
              {featured.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="block p-5 rounded-2xl bg-white border-2 border-[#2a9d6f]/20 hover:border-[#2a9d6f]/40 hover:shadow-sm transition-all group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        CATEGORY_COLORS[article.category] || ""
                      }`}
                    >
                      {article.category}
                    </span>
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
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Rest */}
        {rest.length > 0 && (
          <div>
            {featured.length > 0 && (
              <p className="text-xs font-semibold text-[#a8a29e] uppercase tracking-wider mb-4">
                所有文章
              </p>
            )}
            <div className="space-y-3">
              {rest.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="block p-5 rounded-2xl bg-white border border-[#eee9e5] hover:border-[#ddd5cf] hover:shadow-sm transition-all group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        CATEGORY_COLORS[article.category] || ""
                      }`}
                    >
                      {article.category}
                    </span>
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
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-sm text-[#a8a29e]">更多文章持續新增中</p>
        </div>
      </div>
    </section>
  );
}
