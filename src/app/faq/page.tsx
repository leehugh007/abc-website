import Link from "next/link";
import { FAQ_DATA } from "@/lib/faq-data";
import { StickyLineCTA } from "@/app/sticky-line-cta";

export default function FaqPage() {
  return (
    <>
      <section className="pt-12 pb-16 px-5">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-brand mb-4 tracking-wide">
            大家都在問
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight mb-3">
            你想問的，別人都問過了
          </h1>
          <p className="text-subtle mb-10">
            這些問題來自真實的論壇討論，不是我們自己編的。
          </p>

          <div className="space-y-10">
            {FAQ_DATA.map((section, si) => (
              <div key={si}>
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-brand rounded-full inline-block" />
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.items.map((item, ii) => (
                    <details
                      key={ii}
                      className="group border border-edge rounded-xl overflow-hidden"
                    >
                      <summary className="flex items-start gap-3 p-5 cursor-pointer hover:bg-surface transition-colors list-none [&::-webkit-details-marker]:hidden">
                        <span className="mt-0.5 text-brand font-bold text-lg shrink-0 transition-transform group-open:rotate-45">
                          +
                        </span>
                        <span className="font-bold text-[15px] leading-snug">
                          {item.q}
                        </span>
                      </summary>
                      <div className="px-5 pb-5 pl-11">
                        <div className="text-[15px] text-subtle leading-[1.85] whitespace-pre-line">
                          {item.a}
                        </div>
                        {item.links && item.links.length > 0 && (
                          <div className="mt-4 pt-3 border-t border-edge">
                            <p className="text-xs text-muted mb-2">
                              延伸閱讀
                            </p>
                            {item.links.map((link, i) => (
                              <Link
                                key={i}
                                href={link.href}
                                className="block text-sm text-brand font-medium hover:underline mb-1"
                              >
                                {link.text} →
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center space-y-6">
            <p className="text-subtle">
              還有其他問題？直接問一休最快。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/quiz"
                className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white bg-brand rounded-full shadow-md"
              >
                先做代謝測驗 →
              </a>
              <a
                href="https://lin.ee/7xrRYez"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white bg-line-green rounded-full shadow-md"
              >
                加入一休的 LINE →
              </a>
            </div>
            <div className="flex gap-4 justify-center text-sm">
              <Link
                href="/method"
                className="text-brand font-medium hover:underline"
              >
                ABC 是什麼 →
              </Link>
              <Link
                href="/articles"
                className="text-brand font-medium hover:underline"
              >
                看更多文章 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StickyLineCTA />
    </>
  );
}
