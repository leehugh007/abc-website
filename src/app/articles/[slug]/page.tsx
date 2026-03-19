import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllArticleSlugs } from "@/lib/articles-data";
import { getArticleContent } from "@/lib/markdown";

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

  return (
    <>
      {/* Article header */}
      <section className="pt-12 pb-8 px-5">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/articles"
            className="text-sm text-[#a8a29e] hover:text-[#6b6560] transition-colors mb-6 block"
          >
            ← 回到文章列表
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#eee9e5] text-[#6b6560] font-medium">
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

      {/* Article body */}
      <section className="pb-16 px-5">
        <div
          className="max-w-2xl mx-auto prose prose-lg prose-stone prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-[1.9] prose-p:text-[#2a2520] prose-li:text-[#2a2520] prose-blockquote:border-l-[#f39c12] prose-blockquote:text-[#6b6560] prose-blockquote:italic prose-strong:text-[#2a2520] prose-a:text-[#2a9d6f] prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: content.html }}
        />
      </section>

      {/* CTA after article */}
      <section className="py-12 px-5 bg-white border-t border-[#eee9e5]">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm text-[#a8a29e] mb-3">我是一休，陪你健康的瘦一輩子</p>
          <h2 className="text-xl font-bold mb-4">
            想知道你是哪種代謝類型？
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://metabolism-quiz.vercel.app"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white bg-[#2a9d6f] rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              30 秒代謝測驗 →
            </a>
            <a
              href="https://lin.ee/x41s2Su"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white bg-[#06C755] rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              加入一休的 LINE →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
