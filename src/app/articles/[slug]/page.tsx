import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllArticleSlugs, ARTICLES } from "@/lib/articles-data";
import { getArticleContent } from "@/lib/markdown";

const CATEGORY_COLORS: Record<string, string> = {
  代謝科學: "bg-[#2a9d6f]/10 text-[#2a9d6f]",
  飲食策略: "bg-[#e67e22]/10 text-[#e67e22]",
  瘦瘦針真相: "bg-[#e74c3c]/10 text-[#e74c3c]",
  學員故事: "bg-[#3498db]/10 text-[#3498db]",
};

const CATEGORY_CTA: Record<string, string> = {
  瘦瘦針真相: "想找不靠藥物的方法？",
  代謝科學: "想知道你的代謝類型？",
  飲食策略: "想知道怎麼吃最適合你？",
  學員故事: "想了解自己的代謝類型？",
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

  // Related articles: same category first, then others, exclude current
  const related = ARTICLES.filter((a) => a.slug !== slug)
    .sort((a, b) => {
      if (a.category === article.category && b.category !== article.category)
        return -1;
      if (a.category !== article.category && b.category === article.category)
        return 1;
      return 0;
    })
    .slice(0, 3);

  const ctaText =
    CATEGORY_CTA[article.category] || "想知道你是哪種代謝類型？";

  return (
    <>
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
          <p className="text-[#6b6560] leading-relaxed">
            {article.description}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="pb-12 px-5">
        <div
          className="max-w-2xl mx-auto prose prose-lg prose-stone prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-[1.9] prose-p:text-[#2a2520] prose-li:text-[#2a2520] prose-blockquote:border-l-[#f39c12] prose-blockquote:text-[#6b6560] prose-blockquote:italic prose-strong:text-[#2a2520] prose-a:text-[#2a9d6f] prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: content.html }}
        />
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
