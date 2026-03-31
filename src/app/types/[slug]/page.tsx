import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTypeBySlug, getAllSlugs, TYPES } from "@/lib/types-data";
import { StickyLineCTA } from "@/app/sticky-line-cta";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const type = getTypeBySlug(slug);
  if (!type) return {};
  return {
    title: `${type.name} — ${type.tagline}`,
    description: `${type.description.slice(0, 120)}⋯ 了解${type.name}的科學原理和改善方法。`,
    openGraph: {
      title: `你是「${type.name}」代謝 — ${type.tagline}`,
      description: type.description.slice(0, 150),
    },
  };
}

export default async function TypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const type = getTypeBySlug(slug);
  if (!type) notFound();

  return (
    <>
      {/* Hero */}
      <section
        className={`pt-12 pb-16 px-5 bg-gradient-to-b ${type.gradient} text-white`}
      >
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-4xl mb-4 block">{type.emoji}</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            {type.name}
          </h1>
          <p className="text-lg opacity-90 leading-relaxed max-w-md mx-auto">
            {type.tagline}
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 px-5">
        <div className="max-w-2xl mx-auto">
          <p
            className="text-lg leading-relaxed text-[#2a2520] border-l-4 pl-5 font-semibold mb-8"
            style={{ borderLeftColor: type.color }}
          >
            {type.description}
          </p>
        </div>
      </section>

      {/* Science sections */}
      <section className="pb-12 px-5">
        <div className="max-w-2xl mx-auto space-y-12">
          {type.sections.map((section, i) => (
            <div key={i}>
              <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-[#eee9e5]">
                <span className="text-2xl">{section.icon}</span>
                <h2 className="text-xl font-bold">{section.title}</h2>
              </div>
              <div className="text-base leading-[1.8] text-[#2a2520] whitespace-pre-line">
                {section.text}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Highlight */}
      {type.highlight && (
        <section className="py-8 px-5">
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#fef8ee] border-l-4 border-[#f39c12] rounded-r-xl p-6 text-[17px] font-semibold leading-relaxed">
              {type.highlight}
            </div>
          </div>
        </section>
      )}

      {/* Suggestions */}
      <section className="py-12 px-5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold mb-6">
            💡 給{type.name.replace("型", "")}的你
          </h2>
          <div className="space-y-3">
            {type.suggestions.map((sug, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white border border-[#eee9e5] text-[15px] leading-relaxed"
              >
                <span
                  className="inline-flex items-center justify-center w-6 h-6 rounded-full text-white text-xs font-bold mr-2"
                  style={{ backgroundColor: type.color }}
                >
                  {i + 1}
                </span>
                {sug}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — 在其他類型之前 */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[#6b6560] mb-2">你不用一個人搞懂這些</p>
          <h2 className="text-xl font-bold mb-6">
            想了解更多{type.name}的調整方法？
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/quiz"
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
          <p className="text-xs text-[#a8a29e] mt-4">3,000+ 人已經透過 ABC 重建代謝</p>
        </div>
      </section>

      {/* Other types — 最底部 */}
      <section className="py-12 px-5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-lg font-bold mb-6 text-center">
            其他代謝類型
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {TYPES.filter((t) => t.slug !== type.slug).map((t) => (
              <Link
                key={t.slug}
                href={`/types/${t.slug}`}
                className="text-center p-4 rounded-xl border border-[#eee9e5] hover:border-[#ddd5cf] hover:shadow-sm transition-all"
              >
                <span className="text-2xl block mb-1">{t.emoji}</span>
                <span className="text-sm font-semibold">{t.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <StickyLineCTA />
    </>
  );
}
