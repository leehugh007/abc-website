import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ABC 代謝力重建瘦身法 — 你的問題不是胖，是代謝失調",
  description:
    "重建代謝力，瘦只是順便的事。30 秒測出你的代謝類型，找到真正適合你的方式。",
};

export default function Home() {
  return (
    <>
      {/* Hero — 先講處境，不講品牌 */}
      <section className="pt-16 pb-20 px-5">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold text-[#e67e22] mb-4 tracking-wide">
            ABC 代謝力重建瘦身法
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight mb-6">
            你不是不努力
            <br />
            <span className="text-[#e74c3c]">是代謝在扯你後腿</span>
          </h1>
          <p className="text-lg text-[#6b6560] leading-relaxed mb-10 max-w-lg mx-auto">
            吃很少還是瘦不下來？下午一定要來杯手搖飲？
            <br />
            試過無數方法，每次都復胖？
            <br />
            <strong className="text-[#2a2520]">
              問題可能不在你，在你的代謝模式。
            </strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://metabolism-quiz.vercel.app"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-[#e74c3c] to-[#f39c12] rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              30 秒測出你的代謝類型 →
            </a>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#6b6560] border border-[#eee9e5] rounded-full hover:bg-white transition-colors"
            >
              了解 ABC 是什麼
            </Link>
          </div>
        </div>
      </section>

      {/* 痛點共鳴 — 讓人對號入座 */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
            你是不是也<span className="text-[#e74c3c]">這樣</span>？
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { emoji: "🧋", text: "下午三點一定要來杯手搖飲，不然撐不住" },
              { emoji: "⚖️", text: "明明吃很少，體重就是不動" },
              { emoji: "🛋️", text: "忙了一整天，晚上只想癱著吃東西" },
              { emoji: "😮‍💨", text: "肚子越來越大，其他地方還好" },
              { emoji: "🔄", text: "試過 168、生酮、代餐⋯每次都復胖" },
              { emoji: "😴", text: "吃完午餐就想睡，下午腦袋像當機" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-[#faf9f7] border border-[#eee9e5]"
              >
                <span className="text-xl shrink-0">{item.emoji}</span>
                <span className="text-[15px] leading-relaxed">{item.text}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-[#6b6560]">
            這些都跟<strong className="text-[#2a2520]">「代謝」</strong>
            有關，不是意志力的問題。
          </p>
        </div>
      </section>

      {/* 五種代謝類型入口 */}
      <section className="py-16 px-5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3">
            五種代謝類型，你是哪一種？
          </h2>
          <p className="text-center text-[#6b6560] mb-10">
            不同的代謝模式，需要不同的解法
          </p>
          <div className="space-y-3">
            {[
              { emoji: "🔴", name: "高轉速型", desc: "你不是不健康，你是太拼了", slug: "high-rpm" },
              { emoji: "🟠", name: "燃燒殆盡型", desc: "你不是不在乎自己，你是把能量都給了別人", slug: "burnout" },
              { emoji: "🟡", name: "雲霄飛車型", desc: "你不是意志力不夠，你的血糖一天坐三次大怒神", slug: "roller-coaster" },
              { emoji: "🟢", name: "省電模式型", desc: "你不是吃太多，你是吃太少太久了", slug: "power-save" },
              { emoji: "🔵", name: "穩定燃燒型", desc: "你的代謝引擎運轉得不錯，繼續保持", slug: "steady" },
            ].map((type) => (
              <Link
                key={type.slug}
                href={`/types/${type.slug}`}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#eee9e5] hover:border-[#ddd5cf] hover:shadow-sm transition-all group"
              >
                <span className="text-2xl">{type.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-base">{type.name}</div>
                  <div className="text-sm text-[#6b6560] truncate">{type.desc}</div>
                </div>
                <span className="text-[#a8a29e] group-hover:text-[#6b6560] transition-colors">→</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://metabolism-quiz.vercel.app"
              className="text-[#e74c3c] font-semibold hover:underline"
            >
              不確定？做個 30 秒測驗 →
            </a>
          </div>
        </div>
      </section>

      {/* 學員見證 — 放相似案例，不是最強案例 */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3">
            跟你一樣的人，後來怎麼了
          </h2>
          <p className="text-center text-[#6b6560] mb-10">
            最能給你信心的，不是最厲害的案例，是最像你的那個人
          </p>
          <div className="space-y-4">
            {[
              { name: "小雨", age: 41, tag: "反覆減肥 30 年", quote: "我試過減肥藥、極端節食，身體都出問題了。ABC 讓我第一次感受到健康瘦身的可能。", result: "終於找到不傷身體的可持續方法" },
              { name: "小維", age: 35, tag: "上班族・胃食道逆流", quote: "減肥藥讓我胃酸逆流更嚴重，ABC 不但讓我瘦了，胃食道逆流也大幅改善了。", result: "胃食道逆流大幅改善，睡眠品質變好" },
              { name: "小魚", age: 31, tag: "護理師・不規律作息", quote: "我每天照顧病人，卻連自己的健康都顧不好。終於找到適合醫護人員的方法。", result: "學會在不規律作息中維持健康" },
              { name: "Sam", age: 44, tag: "工程師・三高", quote: "體檢報告滿江紅，我害怕瘦瘦針的副作用。ABC 讓我安全地改善了健康指標。", result: "三高指標明顯改善" },
            ].map((t, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#faf9f7] border border-[#eee9e5]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-bold">{t.name}</span>
                  <span className="text-sm text-[#a8a29e]">{t.age} 歲</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#eee9e5] text-[#6b6560]">{t.tag}</span>
                </div>
                <p className="text-[15px] leading-relaxed text-[#6b6560] mb-2">「{t.quote}」</p>
                <p className="text-sm font-semibold text-[#27ae60]">✓ {t.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 核心理念 — 不是功能清單 */}
      <section className="py-16 px-5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-10">
            ABC 代謝力重建，不是另一種節食法
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="p-5 rounded-2xl bg-white border border-[#eee9e5]">
              <div className="text-2xl mb-3">🔬</div>
              <div className="font-bold mb-2">理解代謝，不靠意志力</div>
              <p className="text-sm text-[#6b6560] leading-relaxed">
                當你理解身體的運作方式，正確的選擇會變成本能，不需要每天跟自己打仗。
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#eee9e5]">
              <div className="text-2xl mb-3">➕</div>
              <div className="font-bold mb-2">增加好的，不限制壞的</div>
              <p className="text-sm text-[#6b6560] leading-relaxed">
                不告訴你不能吃什麼，而是教你可以加什麼。加法思維，讓改變自然發生。
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#eee9e5]">
              <div className="text-2xl mb-3">🤝</div>
              <div className="font-bold mb-2">陪伴，不是指導</div>
              <p className="text-sm text-[#6b6560] leading-relaxed">
                我不是比你厲害，只是比你早犯錯 30 年。這裡沒有大師，只有一起走的人。
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
          <p className="text-[#6b6560] mb-8">
            8 個生活小問題，30 秒就能測出你的代謝類型
          </p>
          <a
            href="https://metabolism-quiz.vercel.app"
            className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-gradient-to-r from-[#e74c3c] to-[#f39c12] rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            開始測驗 →
          </a>
        </div>
      </section>
    </>
  );
}
