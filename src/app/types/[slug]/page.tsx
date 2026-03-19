import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTypeBySlug, getAllSlugs, TYPES } from "@/lib/types-data";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const type = getTypeBySlug(params.slug);
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

export default function TypePage({ params }: { params: { slug: string } }) {
  const type = getTypeBySlug(params.slug);
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
          <p className="text-lg leading-relaxed text-[#2a2520] border-l-4 border-[#f39c12] pl-5 font-semibold mb-8">
            {type.description}
          </p>

          <div className="text-center mb-8">
            <a
              href="https://metabolism-quiz.vercel.app"
              className="text-[#e74c3c] font-semibold hover:underline text-sm"
            >
              還不確定你是哪種類型？做個 30 秒測驗 →
            </a>
          </div>
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

      {/* Other types */}
      <section className="py-12 px-5 bg-white">
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

      {/* CTA */}
      <section className="py-16 px-5">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-4">
            想了解更多{type.name}的調整方法？
          </h2>
          <p className="text-[#6b6560] mb-8">
            加入一休的 LINE，取得專屬你的代謝類型建議
          </p>
          <a
            href="https://lin.ee/x41s2Su"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-[#06C755] rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            加入一休的 LINE →
          </a>
        </div>
      </section>
    </>
  );
}
