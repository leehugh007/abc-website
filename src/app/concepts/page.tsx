import type { Metadata } from "next";
import Link from "next/link";
import { CONCEPTS } from "@/lib/concepts-data";
import { StickyLineCTA } from "@/app/sticky-line-cta";

export const metadata: Metadata = {
  title: "代謝科學小百科｜用白話搞懂你的身體",
  description:
    "胰島素阻抗、代謝適應、慢性發炎、皮質醇、瘦體素、飢餓素⋯⋯這些聽起來很難的名詞，其實跟你瘦不下來有直接關係。用最簡單的方式讓你搞懂。",
  keywords: ["胰島素阻抗", "代謝適應", "慢性發炎", "皮質醇", "瘦體素", "飢餓素", "代謝科學"],
};

export default function ConceptsPage() {
  return (
    <section className="pt-10 pb-16 px-5">
      <div className="max-w-2xl mx-auto">
        <p className="text-sm font-semibold text-brand mb-4 tracking-wide">
          代謝科學小百科
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight mb-3">
          用白話搞懂你的身體
        </h1>
        <p className="text-subtle mb-10">
          這些聽起來很難的名詞，其實跟你瘦不下來有直接關係。每篇 3 分鐘，看完就懂。
        </p>

        <div className="space-y-3">
          {CONCEPTS.map((concept) => (
            <Link
              key={concept.slug}
              href={`/concepts/${concept.slug}`}
              className="block p-5 rounded-xl bg-white border border-edge hover:border-brand/40 hover:shadow-sm transition-all group"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl shrink-0">{concept.emoji}</span>
                <div>
                  <p className="font-bold text-base group-hover:text-brand transition-colors">
                    {concept.name}
                  </p>
                  <p className="text-sm text-subtle mt-0.5">
                    {concept.subtitle}
                  </p>
                  <p className="text-xs text-muted mt-2 line-clamp-2">
                    {concept.oneLiner}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-subtle mb-4">
            搞懂這些之後，下一步是了解你自己
          </p>
          <a
            href="/quiz"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white bg-brand rounded-full shadow-md"
          >
            測出我的代謝類型 →
          </a>
        </div>
      </div>

      <StickyLineCTA />
    </section>
  );
}
