import type { Metadata } from "next";
import Link from "next/link";
import { TYPES } from "@/lib/types-data";
import { StickyLineCTA } from "@/app/sticky-line-cta";

export const metadata: Metadata = {
  title: "你的身體正在用哪種模式運轉？",
  description:
    "高轉速、燃燒殆盡、雲霄飛車、省電模式、穩定燃燒——了解你的代謝類型，找到真正適合你的瘦身方式。",
};

export default function TypesPage() {
  return (
    <section className="pt-10 pb-16 px-5">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold tracking-tight text-center mb-3">
          你的身體正在用哪種模式運轉？
        </h1>
        <p className="text-center text-subtle mb-8">
          不同的代謝模式，需要不同的解法
        </p>

        {/* Quiz CTA — 突出 */}
        <div className="bg-brand/5 border border-brand/20 rounded-2xl p-5 text-center mb-10">
          <p className="text-[15px] text-ink mb-3">
            還不知道你是哪種？<strong>30 秒測驗幫你找出來</strong>
          </p>
          <a
            href="/quiz"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-brand rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            開始測驗 →
          </a>
        </div>

        {/* Type cards — 只顯示 tagline，不顯示長描述 */}
        <div className="space-y-3">
          {TYPES.map((type) => (
            <Link
              key={type.slug}
              href={`/types/${type.slug}`}
              className="flex items-center gap-4 p-5 rounded-r-2xl bg-white border border-edge border-l-4 hover:shadow-sm transition-all group"
              style={{ borderLeftColor: type.color }}
            >
              <span className="text-2xl">{type.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-base group-hover:text-brand transition-colors">
                  {type.name}
                </div>
                <div className="text-sm text-subtle">{type.tagline}</div>
              </div>
              <span className="text-muted group-hover:text-subtle transition-colors">→</span>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-subtle mb-4">想知道你是哪一種？</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/quiz"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white bg-brand rounded-full shadow-md"
            >
              30 秒代謝測驗 →
            </a>
            <a
              href="https://lin.ee/x41s2Su"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-subtle border border-edge rounded-full hover:bg-white transition-colors"
            >
              加入一休的 LINE
            </a>
          </div>
        </div>
      </div>

      <StickyLineCTA />
    </section>
  );
}
