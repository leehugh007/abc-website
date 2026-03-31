import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllArticleSlugs, ARTICLES } from "@/lib/articles-data";
import { getArticleContent } from "@/lib/markdown";
import { StickyLineCTA } from "@/app/sticky-line-cta";

const CATEGORY_COLORS: Record<string, string> = {
  健檢紅字: "bg-danger/10 text-danger",
  減肥真相: "bg-brand/10 text-brand",
  瘦瘦針: "bg-purple/10 text-purple",
  飲食方法: "bg-warning/10 text-warning",
  學員故事: "bg-info/10 text-info",
};

const CATEGORY_CTA: Record<string, string> = {
  健檢紅字: "想知道這些紅字背後的真正原因？",
  減肥真相: "想知道為什麼以前的方法不管用？",
  瘦瘦針: "想找不靠藥物的方法？",
  飲食方法: "想知道怎麼吃最適合你？",
  學員故事: "想知道你是哪種代謝類型？",
};

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const content = await getArticleContent(slug);
  if (!content) notFound();

  // Related articles: rank by shared tags, then same category
  const related = ARTICLES.filter((a) => a.slug !== slug)
    .map((a) => {
      const sharedTags = a.tags.filter((t) => article.tags.includes(t)).length;
      const sameCategory = a.category === article.category ? 1 : 0;
      return { ...a, score: sharedTags * 2 + sameCategory };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const ctaText =
    CATEGORY_CTA[article.category] || "想知道你是哪種代謝類型？";

  const SITE_URL = "https://abcmetabolic.com";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    image: article.coverImage
      ? `${SITE_URL}${article.coverImage}`
      : undefined,
    author: {
      "@type": "Person",
      name: "一休",
      description:
        "瘦身教練、ABC 代謝重建瘦身法創辦人。曾從 89 公斤瘦到 62 公斤，超過 10 年維持不復胖。",
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "ABC 代謝力重建",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/articles/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />
      {/* Header */}
      <section className="pt-12 pb-8 px-5">
        <div className="max-w-2xl mx-auto">
          <div className="text-sm text-muted mb-6">
            <Link href="/articles" className="hover:text-subtle transition-colors">文章</Link>
            <span className="mx-2">/</span>
            <span>{article.category}</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                CATEGORY_COLORS[article.category] || "bg-edge text-subtle"
              }`}
            >
              {article.category}
            </span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
              article.depth === "快讀" ? "bg-brand/10 text-brand" :
              article.depth === "深度" ? "bg-info/10 text-info" :
              "bg-edge text-subtle"
            }`}>
              {article.depth === "快讀" ? "⚡ 快讀" : article.depth === "深度" ? "📖 深度" : article.readTime}
            </span>
            {article.depth !== "指南" && <span className="text-xs text-muted">{article.readTime}</span>}
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight mb-4">
            {content.title}
          </h1>
          <p className="text-subtle leading-relaxed mb-4">
            {article.description}
          </p>
          {/* E-E-A-T: 作者 + 背景 + 日期 */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-sm text-muted">
            <Link href="/about" className="flex items-center gap-2 hover:text-subtle transition-colors">
              <span className="w-6 h-6 rounded-full bg-brand text-white text-xs flex items-center justify-center font-bold shrink-0">休</span>
              <span className="font-medium text-subtle">一休</span>
              <span className="text-edge-dark hidden sm:inline">·</span>
              <span className="hidden sm:inline">瘦身教練・ABC 代謝重建創辦人</span>
            </Link>
            <div className="flex items-center gap-2 pl-8 sm:pl-0">
              <span className="sm:hidden text-xs">瘦身教練・ABC 代謝重建創辦人</span>
              <span className="text-edge-dark">·</span>
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("zh-TW", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
          {article.coverImage && (
            <div className="mt-6 rounded-2xl overflow-hidden">
              <Image
                src={article.coverImage}
                alt={article.title}
                width={800}
                height={450}
                className="w-full h-auto"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          )}
        </div>
      </section>

      {/* Body */}
      <section className="pb-12 px-5">
        <div
          className="max-w-2xl mx-auto prose prose-lg prose-stone prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-[1.9] prose-p:text-ink prose-li:text-ink prose-blockquote:border-l-amber prose-blockquote:text-subtle prose-blockquote:italic prose-strong:text-ink prose-a:text-brand prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: content.html }}
        />
      </section>

      {/* Tags */}
      <section className="pb-8 px-5">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <Link
                key={tag}
                href={`/articles?tag=${encodeURIComponent(tag)}`}
                className="text-xs px-3 py-1.5 rounded-full bg-surface-green text-brand font-medium border border-brand/20 hover:bg-brand hover:text-white transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Share prompt */}
      <section className="pb-8 px-5">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-muted">
            覺得有幫助？傳給正在為體重煩惱的朋友
          </p>
        </div>
      </section>

      {/* CTA — 主次分明 */}
      <section className="py-12 px-5 bg-white border-t border-edge">
        <div className="max-w-xl mx-auto">
          <p className="text-sm text-muted mb-3">我是一休，陪你健康的瘦一輩子</p>
          <h2 className="text-xl font-bold mb-6">{ctaText}</h2>
          <a
            href="/quiz"
            className="flex items-center gap-4 p-5 rounded-2xl bg-surface-green border border-brand/20 hover:shadow-sm transition-all group mb-3"
          >
            <div className="flex-1">
              <span className="font-bold text-base group-hover:text-brand transition-colors block">30 秒測出你的代謝類型</span>
              <span className="text-sm text-subtle">免費，8 個生活小問題</span>
            </div>
            <span className="text-brand font-bold">→</span>
          </a>
          <div className="flex gap-3">
            <a
              href="https://lin.ee/x41s2Su"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-edge hover:border-line-green transition-colors text-sm"
            >
              <span className="text-line-green font-bold">LINE</span>
              <span className="text-subtle">問一休</span>
            </a>
            <Link
              href="/method"
              className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-edge hover:border-brand transition-colors text-sm"
            >
              <span className="text-brand font-bold">ABC</span>
              <span className="text-subtle">看方法介紹</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky LINE CTA */}
      <StickyLineCTA />

      {/* Related articles */}
      {related.length > 0 && (
        <section className="py-12 px-5">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-lg font-bold mb-6">繼續閱讀</h2>
            <div className="space-y-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/articles/${r.slug}`}
                  className="block p-4 rounded-xl bg-white border border-edge hover:border-edge-dark hover:shadow-sm transition-all group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        CATEGORY_COLORS[r.category] || ""
                      }`}
                    >
                      {r.category}
                    </span>
                    <span className="text-xs text-muted">{r.readTime}</span>
                  </div>
                  <div className="font-bold text-[15px] group-hover:text-brand transition-colors">
                    {r.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
