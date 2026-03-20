import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllArticleSlugs, ARTICLES } from "@/lib/articles-data";
import { getArticleContent } from "@/lib/markdown";

const CATEGORY_COLORS: Record<string, string> = {
  健檢紅字: "bg-[#e74c3c]/10 text-[#e74c3c]",
  減肥真相: "bg-[#2a9d6f]/10 text-[#2a9d6f]",
  瘦瘦針: "bg-[#8e44ad]/10 text-[#8e44ad]",
  飲食方法: "bg-[#e67e22]/10 text-[#e67e22]",
  學員故事: "bg-[#3498db]/10 text-[#3498db]",
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

  const SITE_URL = "https://abc-metabolism.vercel.app";

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
          <div className="text-sm text-[#a8a29e] mb-6">
            <Link href="/articles" className="hover:text-[#6b6560] transition-colors">文章</Link>
            <span className="mx-2">/</span>
            <span>{article.category}</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                CATEGORY_COLORS[article.category] || "bg-[#eee9e5] text-[#6b6560]"
              }`}
            >
              {article.category}
            </span>
            <span className="text-xs text-[#a8a29e]">{article.readTime}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight mb-4">
            {content.title}
          </h1>
          <p className="text-[#6b6560] leading-relaxed mb-4">
            {article.description}
          </p>
          {/* E-E-A-T: 作者 + 背景 + 日期 */}
          <div className="flex items-center gap-3 text-sm text-[#a8a29e]">
            <Link href="/about" className="flex items-center gap-2 hover:text-[#6b6560] transition-colors">
              <span className="w-6 h-6 rounded-full bg-[#2a9d6f] text-white text-xs flex items-center justify-center font-bold shrink-0">休</span>
              <span className="font-medium text-[#6b6560]">一休</span>
            </Link>
            <span className="text-[#ddd5cf]">·</span>
            <span>瘦身教練・ABC 代謝重建創辦人</span>
            <span className="text-[#ddd5cf]">·</span>
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString("zh-TW", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
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
              />
            </div>
          )}
        </div>
      </section>

      {/* Body */}
      <section className="pb-12 px-5">
        <div
          className="max-w-2xl mx-auto prose prose-lg prose-stone prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-[1.9] prose-p:text-[#2a2520] prose-li:text-[#2a2520] prose-blockquote:border-l-[#f39c12] prose-blockquote:text-[#6b6560] prose-blockquote:italic prose-strong:text-[#2a2520] prose-a:text-[#2a9d6f] prose-a:no-underline hover:prose-a:underline"
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
                className="text-xs px-3 py-1.5 rounded-full bg-[#f3f9f5] text-[#2a9d6f] font-medium border border-[#2a9d6f]/20 hover:bg-[#2a9d6f] hover:text-white transition-colors"
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
          <p className="text-sm text-[#a8a29e]">
            覺得有幫助？傳給正在為體重煩惱的朋友
          </p>
        </div>
      </section>

      {/* CTA — contextual */}
      <section className="py-12 px-5 bg-white border-t border-[#eee9e5]">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm text-[#a8a29e] mb-3">我是一休，陪你健康的瘦一輩子</p>
          <h2 className="text-xl font-bold mb-4">{ctaText}</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://metabolism-quiz.vercel.app"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white bg-[#2a9d6f] rounded-full shadow-md"
            >
              30 秒代謝測驗 →
            </a>
            <a
              href="https://lin.ee/x41s2Su"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white bg-[#06C755] rounded-full shadow-md"
            >
              加入一休的 LINE →
            </a>
          </div>
        </div>
      </section>

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
                  className="block p-4 rounded-xl bg-white border border-[#eee9e5] hover:border-[#ddd5cf] hover:shadow-sm transition-all group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        CATEGORY_COLORS[r.category] || ""
                      }`}
                    >
                      {r.category}
                    </span>
                    <span className="text-xs text-[#a8a29e]">{r.readTime}</span>
                  </div>
                  <div className="font-bold text-[15px] group-hover:text-[#2a9d6f] transition-colors">
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
