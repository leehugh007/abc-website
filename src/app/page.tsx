import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ReturningVisitorBanner } from "./returning-visitor";
import { StickyLineCTA } from "@/app/sticky-line-cta";

export const metadata: Metadata = {
  title: "ABC 代謝力重建瘦身法 — 你的問題不是胖，是代謝失調",
  description:
    "重建代謝力，瘦只是順便的事。30 秒測出你的代謝類型，找到真正適合你的方式。",
};

export default function Home() {
  return (
    <>
      {/* Returning visitor personalized banner */}
      <ReturningVisitorBanner />

      {/* Hero — 文字 + 一休照片合併，人在 fold 內 */}
      <section className="pt-12 pb-16 px-5">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-brand mb-4 tracking-wide">
              ABC 代謝力重建瘦身法
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight mb-6">
              你不是不努力
              <br />
              <span className="text-brand">是代謝在扯你後腿</span>
            </h1>
            <p className="text-lg text-subtle leading-relaxed mb-8 max-w-lg mx-auto">
              吃很少還是瘦不下來？下午一定要來杯手搖飲？
              <br />
              試過無數方法，每次都復胖？
              <br />
              <strong className="text-ink">
                問題可能不在你，在你的代謝模式。
              </strong>
            </p>
          </div>

          {/* 一休 before/after — 在 CTA 之前，讓人先看到真人 */}
          <div className="max-w-md mx-auto mb-10 rounded-2xl overflow-hidden">
            <Image
              src="/images/founder-transformation.jpg"
              alt="一休：89公斤到62公斤的對比"
              width={500}
              height={300}
              className="w-full h-auto"
              sizes="(max-width: 512px) 100vw, 512px"
              priority
            />
            <div className="py-3 text-center">
              <p className="text-sm text-subtle">
                一休，43 歲，從 <strong className="text-ink">89 → 62 公斤</strong>。靠的是理解代謝。
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              30 秒測出你的代謝類型 →
            </Link>
            <Link
              href="/method"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-subtle border border-edge rounded-full hover:bg-white transition-colors"
            >
              了解 ABC 是什麼
            </Link>
          </div>
        </div>
      </section>

      {/* 痛點共鳴 — 讓人對號入座 */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-10">
            你是不是也<span className="text-danger">這樣</span>？
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: "✓", text: "下午三點一定要來杯手搖飲，不然撐不住" },
              { icon: "✓", text: "明明吃很少，體重就是不動" },
              { icon: "✓", text: "忙了一整天，晚上只想癱著吃東西" },
              { icon: "✓", text: "肚子越來越大，其他地方還好" },
              { icon: "✓", text: "試過 168、生酮、代餐⋯每次都復胖" },
              { icon: "✓", text: "吃完午餐就想睡，下午腦袋像當機" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 py-3"
              >
                <span className="w-5 h-5 rounded-full bg-danger/10 text-danger text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">{item.icon}</span>
                <span className="text-[15px] leading-relaxed text-subtle">{item.text}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-subtle">
            這些都跟<strong className="text-ink">「代謝」</strong>
            有關，不是意志力的問題。
          </p>
        </div>
      </section>

      {/* 核心理念 — 精簡版，不重複 /method 的完整說明 */}
      <section className="py-16 px-5 bg-brand-dark text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">
            ABC 代謝力重建，不是另一種節食法
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg mx-auto">
            不告訴你不能吃什麼，而是教你理解身體、跟它合作。<br />
            當你搞懂代謝，正確的選擇會變成本能。
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="px-4 py-2 rounded-full border border-white/30 text-sm font-medium">
              A 加營養
            </span>
            <span className="px-4 py-2 rounded-full border border-white/30 text-sm font-medium">
              B 調體質
            </span>
            <span className="px-4 py-2 rounded-full border border-white/30 text-sm font-medium">
              C 輕負擔
            </span>
          </div>
          <Link
            href="/method"
            className="text-white/90 font-semibold hover:text-white underline underline-offset-4 text-sm"
          >
            了解完整的 ABC 方法 →
          </Link>
        </div>
      </section>

      {/* 五種代謝類型入口 */}
      <section className="py-16 px-5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">
            五種代謝類型，你是哪一種？
          </h2>
          <p className="text-subtle mb-10">
            不同的代謝模式，需要不同的解法
          </p>
          <div className="space-y-3">
            {[
              { name: "高轉速型", desc: "你不是不健康，你是太拼了", slug: "high-rpm", color: "#e74c3c" },
              { name: "燃燒殆盡型", desc: "你不是不在乎自己，你是把能量都給了別人", slug: "burnout", color: "#e67e22" },
              { name: "雲霄飛車型", desc: "你不是意志力不夠，你的血糖一天坐三次大怒神", slug: "roller-coaster", color: "#f39c12" },
              { name: "省電模式型", desc: "你不是吃太多，你是吃太少太久了", slug: "power-save", color: "#7f8c8d" },
              { name: "穩定燃燒型", desc: "你的代謝引擎運轉得不錯，繼續保持", slug: "steady", color: "#27ae60" },
            ].map((type) => (
              <Link
                key={type.slug}
                href={`/types/${type.slug}`}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-edge hover:shadow-sm transition-all group overflow-hidden relative"
              >
                <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: type.color }} />
                <div
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: type.color }}
                />
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-base">{type.name}</div>
                  <div className="text-sm text-subtle truncate">{type.desc}</div>
                </div>
                <span className="text-muted group-hover:text-subtle transition-colors">→</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/quiz"
              className="text-brand font-semibold hover:underline"
            >
              不確定？做個 30 秒測驗 →
            </Link>
          </div>
        </div>
      </section>

      {/* 學員見證 — 重點故事 + 相似案例 */}
      <section className="py-16 px-5 bg-surface-green">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">
            跟你一樣的人，後來怎麼了
          </h2>
          <p className="text-subtle mb-12">
            最能給你信心的，不是最厲害的案例，是最像你的那個人
          </p>

          {/* 慧敏 — 最強見證（自體免疫）— 編輯式排版，不是卡片 */}
          <div className="mb-8">
            <div className="rounded-2xl overflow-hidden mb-6">
              <Image
                src="/images/autoimmune-student-before-after.jpeg"
                alt="慧敏的瘦身前後對比：84kg到63.4kg，自體免疫疾病停藥"
                width={700}
                height={400}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 700px"
              />
            </div>

            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold text-lg">慧敏</span>
              <span className="text-sm text-muted">自體免疫疾病・重大傷病卡</span>
            </div>
            <div className="flex gap-2 mb-6">
              <span className="text-xs px-2 py-0.5 rounded-full bg-danger/10 text-danger font-medium">84kg → 63.4kg</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-success/10 text-success font-medium">醫生同意停藥</span>
            </div>

            <div className="space-y-5 text-base leading-relaxed text-subtle">
              <p>
                她有自體免疫疾病，從年輕到現在嘗試無數次減肥都沒成功過。那時候的她，幾乎要放棄自己了。
              </p>

              <blockquote className="border-l-4 border-info pl-5 py-1 italic text-info">
                「我是不是永遠都好不了？」
              </blockquote>

              <p>
                一年後，她瘦了 20 公斤。但更令人開心的是——她的醫生告訴她：<strong className="text-ink">「血液檢查發炎指數有下降，可以先停藥，暫時不用再吃了。」</strong>
              </p>
              <p className="text-xs text-muted">（她是領有重大傷病卡那種嚴重的程度）</p>

              <p>
                「手指關節也不再腫脹疼痛了！我以前都只能趁沒發作時趕快彈彈鋼琴，<strong className="text-ink">現在終於可以想彈就彈！</strong>」
              </p>
            </div>

            <p className="mt-6 text-lg font-bold text-brand-dark text-center">
              「我相信我這次一定可以瘦一輩子，而且健康一輩子。」
            </p>
          </div>

          <div className="text-center mt-8">
            <Link href="/testimonials" className="text-brand font-semibold hover:underline">
              看更多學員故事 →
            </Link>
          </div>

          {/* 團隊力量 */}
          <div className="mt-12 rounded-2xl overflow-hidden border border-edge">
            <Image
              src="/images/team-photo.png"
              alt="ABC 代謝力重建班長大合照"
              width={700}
              height={400}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 700px"
            />
            <div className="p-5 text-center bg-surface">
              <p className="font-bold mb-1">這群人加在一起瘦超過 <span className="text-danger">300 公斤</span></p>
              <p className="text-sm text-subtle">
                因為我們都胖過，我們懂胖過的苦。用眾人的力量，陪你走一條不用獨自承受的路。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            第一步，了解你的身體正在用哪種模式運轉
          </h2>
          <p className="text-subtle mb-8">
            8 個生活小問題，30 秒就能測出你的代謝類型
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-brand rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            開始測驗 →
          </Link>
        </div>
      </section>

      <StickyLineCTA />
    </>
  );
}
