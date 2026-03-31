import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getConceptBySlug,
  getAllConceptSlugs,
  CONCEPTS,
} from "@/lib/concepts-data";
import { getArticleBySlug } from "@/lib/articles-data";
import { StickyLineCTA } from "@/app/sticky-line-cta";

export function generateStaticParams() {
  return getAllConceptSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const concept = getConceptBySlug(slug);
  if (!concept) return {};
  return {
    title: `${concept.name}｜代謝科學小百科`,
    description: concept.oneLiner,
    keywords: [concept.name, "代謝", "瘦身", "健康", "ABC代謝力重建"],
  };
}

const SITE_URL = "https://abcmetabolic.com";

export default async function ConceptPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const concept = getConceptBySlug(slug);
  if (!concept) notFound();

  const relatedArticles = concept.relatedArticles
    .map((s) => getArticleBySlug(s))
    .filter(Boolean);

  const relatedConcepts = concept.relatedConcepts
    .map((s) => CONCEPTS.find((c) => c.slug === s))
    .filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${concept.name}：${concept.subtitle}`,
    description: concept.oneLiner,
    author: {
      "@type": "Person",
      name: "一休",
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "ABC 代謝力重建",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/concepts/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section className="pt-12 pb-8 px-5">
        <div className="max-w-2xl mx-auto">
          <div className="text-sm text-muted mb-6">
            <Link
              href="/concepts"
              className="hover:text-subtle transition-colors"
            >
              代謝科學小百科
            </Link>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{concept.emoji}</span>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {concept.name}
              </h1>
              <p className="text-subtle">{concept.subtitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted">
            <Link
              href="/about"
              className="flex items-center gap-2 hover:text-subtle transition-colors"
            >
              <span className="w-6 h-6 rounded-full bg-brand text-white text-xs flex items-center justify-center font-bold shrink-0">
                休
              </span>
              <span className="font-medium text-subtle">一休</span>
            </Link>
            <span className="text-edge-dark">·</span>
            <span>瘦身教練・ABC 代謝重建創辦人</span>
            <span className="text-edge-dark">·</span>
            <span>3 分鐘閱讀</span>
          </div>
        </div>
      </section>

      {/* 一句話 */}
      <section className="pb-8 px-5">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl bg-surface-green border border-brand/20 p-5">
            <p className="text-[15px] text-ink leading-relaxed font-medium">
              {concept.oneLiner}
            </p>
          </div>
        </div>
      </section>

      {/* 內文 */}
      <article className="pb-12 px-5">
        <div className="max-w-2xl mx-auto space-y-10">
          {/* 為什麼重要 */}
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-brand rounded-full inline-block" />
              到底怎麼回事？
            </h2>
            <div className="text-[15px] text-ink leading-[1.9] whitespace-pre-line">
              {concept.why}
            </div>
          </div>

          {/* 跟瘦身的關係 */}
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-danger rounded-full inline-block" />
              跟你瘦不下來有什麼關係？
            </h2>
            <div className="text-[15px] text-ink leading-[1.9] whitespace-pre-line">
              {concept.weightConnection}
            </div>
          </div>

          {/* ABC 怎麼處理 */}
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-brand rounded-full inline-block" />
              ABC 怎麼處理這個問題？
            </h2>
            <div className="text-[15px] text-ink leading-[1.9] whitespace-pre-line">
              {concept.abcApproach}
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="pb-10 px-5">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl bg-surface-green border border-brand/20 p-6 text-center">
            <p className="text-xs font-semibold text-brand tracking-wide mb-1">
              ABC 代謝重建瘦身法
            </p>
            <p className="font-bold text-[15px] mb-3">
              想知道你的代謝狀況？30 秒免費測驗
            </p>
            <a
              href="/quiz"
              className="inline-block px-7 py-2.5 bg-brand text-white text-sm font-bold rounded-full hover:shadow-md transition-shadow"
            >
              測出我的代謝類型 →
            </a>
          </div>
        </div>
      </section>

      {/* 延伸閱讀 — 相關文章 */}
      {relatedArticles.length > 0 && (
        <section className="pb-10 px-5">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-lg font-bold mb-4">延伸閱讀</h2>
            <div className="space-y-2">
              {relatedArticles.map((article) =>
                article ? (
                  <Link
                    key={article.slug}
                    href={`/articles/${article.slug}`}
                    className="block p-4 rounded-xl bg-white border border-edge hover:border-edge-dark hover:shadow-sm transition-all group"
                  >
                    <p className="font-bold text-[15px] group-hover:text-brand transition-colors">
                      {article.title}
                    </p>
                    <p className="text-xs text-muted mt-1">
                      {article.readTime}
                    </p>
                  </Link>
                ) : null
              )}
            </div>
          </div>
        </section>
      )}

      {/* 相關概念 */}
      {relatedConcepts.length > 0 && (
        <section className="pb-16 px-5">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-lg font-bold mb-4">相關概念</h2>
            <div className="flex flex-wrap gap-2">
              {relatedConcepts.map((c) =>
                c ? (
                  <Link
                    key={c.slug}
                    href={`/concepts/${c.slug}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-edge hover:border-brand/40 transition-colors text-sm font-medium"
                  >
                    <span>{c.emoji}</span>
                    <span>{c.name}</span>
                  </Link>
                ) : null
              )}
            </div>
          </div>
        </section>
      )}

      {/* 收尾 CTA */}
      <section className="py-12 px-5 bg-white border-t border-edge">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-subtle mb-4">
            了解原理之後，下一步是<strong className="text-ink">找到你的代謝類型</strong>。
          </p>
          <a
            href="/quiz"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            30 秒測出你的代謝類型 →
          </a>
        </div>
      </section>

      <StickyLineCTA />
    </>
  );
}
