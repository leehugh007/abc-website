import type { Metadata } from "next";
import Image from "next/image";
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
          <p className="text-sm font-semibold text-[#2a9d6f] mb-4 tracking-wide">
            ABC 代謝力重建瘦身法
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight mb-6">
            你不是不努力
            <br />
            <span className="text-[#2a9d6f]">是代謝在扯你後腿</span>
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
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#2a9d6f] rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              30 秒測出你的代謝類型 →
            </a>
            <Link
              href="/method"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#6b6560] border border-[#eee9e5] rounded-full hover:bg-white transition-colors"
            >
              了解 ABC 是什麼
            </Link>
          </div>
        </div>
      </section>

      {/* 快速信任 — 一休 before/after */}
      <section className="pb-12 px-5">
        <div className="max-w-lg mx-auto">
          <div className="rounded-2xl overflow-hidden border border-[#eee9e5]">
            <Image
              src="/images/founder-transformation.png"
              alt="一休：89公斤到62公斤的對比"
              width={500}
              height={300}
              className="w-full h-auto"
            />
            <div className="p-4 text-center bg-white">
              <p className="text-sm text-[#6b6560]">
                一休，43 歲，從 <strong className="text-[#2a2520]">89 → 62 公斤</strong>。不靠節食、不靠藥物，靠的是理解代謝。
              </p>
            </div>
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
                className="flex items-start gap-3 py-3"
              >
                <span className="text-xl shrink-0">{item.emoji}</span>
                <span className="text-[15px] leading-relaxed text-[#6b6560]">{item.text}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-[#6b6560]">
            這些都跟<strong className="text-[#2a2520]">「代謝」</strong>
            有關，不是意志力的問題。
          </p>
        </div>
      </section>

      {/* 核心理念 — 先讓她知道 ABC 跟其他方法不一樣 */}
      <section className="py-20 px-5 bg-[#1a5e3f] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-12">
            ABC 代謝力重建，不是另一種節食法
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 text-left">
            {[
              { letter: "A", title: "理解代謝，不靠意志力", desc: "當你理解身體的運作方式，正確的選擇會變成本能，不需要每天跟自己打仗。" },
              { letter: "B", title: "增加好的，不限制壞的", desc: "不告訴你不能吃什麼，而是教你可以加什麼。加法思維，讓改變自然發生。" },
              { letter: "C", title: "陪伴，不是指導", desc: "我不是比你厲害，只是比你早犯錯 30 年。這裡沒有大師，只有一起走的人。" },
            ].map((item) => (
              <div key={item.letter}>
                <div className="w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center text-lg font-bold mb-3">{item.letter}</div>
                <div className="font-bold mb-2 text-lg">{item.title}</div>
                <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
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
              { emoji: "🔴", name: "高轉速型", desc: "你不是不健康，你是太拼了", slug: "high-rpm", color: "#e74c3c" },
              { emoji: "🟠", name: "燃燒殆盡型", desc: "你不是不在乎自己，你是把能量都給了別人", slug: "burnout", color: "#e67e22" },
              { emoji: "🟡", name: "雲霄飛車型", desc: "你不是意志力不夠，你的血糖一天坐三次大怒神", slug: "roller-coaster", color: "#f39c12" },
              { emoji: "🟢", name: "省電模式型", desc: "你不是吃太多，你是吃太少太久了", slug: "power-save", color: "#7f8c8d" },
              { emoji: "🔵", name: "穩定燃燒型", desc: "你的代謝引擎運轉得不錯，繼續保持", slug: "steady", color: "#27ae60" },
            ].map((type) => (
              <Link
                key={type.slug}
                href={`/types/${type.slug}`}
                className="flex items-center gap-4 p-5 rounded-r-2xl bg-white border border-[#eee9e5] border-l-4 hover:shadow-sm transition-all group"
                style={{ borderLeftColor: type.color }}
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
              className="text-[#2a9d6f] font-semibold hover:underline"
            >
              不確定？做個 30 秒測驗 →
            </a>
          </div>
        </div>
      </section>

      {/* 學員見證 — 重點故事 + 相似案例 */}
      <section className="py-16 px-5 bg-[#f3f9f5]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3">
            跟你一樣的人，後來怎麼了
          </h2>
          <p className="text-center text-[#6b6560] mb-12">
            最能給你信心的，不是最厲害的案例，是最像你的那個人
          </p>

          {/* 美美 — 重點故事（有照片） */}
          <div className="rounded-2xl border border-[#eee9e5] overflow-hidden mb-8">
            <Image
              src="/images/meimei-transformation.jpg"
              alt="美美的瘦身前後對比：差點破百到7字頭"
              width={700}
              height={400}
              className="w-full h-auto"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-lg">美美</span>
                <span className="text-sm text-[#a8a29e]">7年級生・業務+進修生</span>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#e74c3c]/10 text-[#e74c3c] font-medium">體重 -21.8kg</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#27ae60]/10 text-[#27ae60] font-medium">體脂 -16%</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#3498db]/10 text-[#3498db] font-medium">腰圍 -12.5cm</span>
              </div>
              <blockquote className="text-[15px] leading-relaxed text-[#6b6560] border-l-3 border-[#f39c12] pl-4 mb-4 italic">
                「我要選擇一個雖然速度比較慢，但是可以維持一輩子的方式，健康瘦下來。」
              </blockquote>
              <p className="text-sm leading-relaxed text-[#6b6560] mb-3">
                從差點破百到現在 7 字頭，歷經六期課程的堅持。不只是體重下降，血壓、血脂、糖化血色素全部恢復正常，內臟脂肪從中重度變成沒有脂肪肝。
              </p>
              <div className="bg-[#27ae60]/5 rounded-xl p-4">
                <p className="text-sm font-semibold text-[#27ae60]">
                  ✨ 找到了一種可以一輩子持續下去的生活方式，身體變聰明了，不再害怕復胖。
                </p>
              </div>
            </div>
          </div>

          {/* 慧敏 — 最強見證（自體免疫） */}
          <div className="rounded-2xl border border-[#eee9e5] overflow-hidden mb-8">
            <Image
              src="/images/autoimmune-student-before-after.jpeg"
              alt="慧敏的瘦身前後對比：84kg到63.4kg，自體免疫疾病停藥"
              width={700}
              height={400}
              className="w-full h-auto"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-lg">慧敏</span>
                <span className="text-sm text-[#a8a29e]">自體免疫疾病・重大傷病卡</span>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#e74c3c]/10 text-[#e74c3c] font-medium">84kg → 63.4kg</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#27ae60]/10 text-[#27ae60] font-medium">醫生同意停藥</span>
              </div>

              <div className="space-y-4 text-[15px] leading-relaxed text-[#6b6560]">
                <div className="bg-[#3498db]/5 rounded-xl p-4">
                  <p className="font-semibold text-[#3498db] text-sm mb-2">她的困境</p>
                  <p>她有自體免疫疾病，從年輕到現在嘗試無數次減肥都沒成功過。那時候的她，幾乎要放棄自己了。</p>
                  <p className="italic text-[#3498db] mt-2">「我是不是永遠都好不了？」</p>
                </div>

                <div className="bg-[#27ae60]/5 rounded-xl p-4">
                  <p className="font-semibold text-[#27ae60] text-sm mb-2">一年後</p>
                  <p>她瘦了 20 公斤。但更令人開心的是——她的醫生告訴她：<strong className="text-[#2a2520]">「血液檢查發炎指數有下降，可以先停藥，暫時不用再吃了。」</strong></p>
                  <p className="text-xs text-[#a8a29e] mt-1">（她是領有重大傷病卡那種嚴重的程度）</p>
                </div>

                <div className="bg-[#f39c12]/5 rounded-xl p-4">
                  <p className="font-semibold text-[#e67e22] text-sm mb-2">重獲新生</p>
                  <p>「手指關節也不再腫脹疼痛了！我以前都只能趁沒發作時，手指正常趕快彈彈我喜歡的鋼琴，<strong className="text-[#2a2520]">現在終於可以想彈就彈！</strong>」</p>
                </div>
              </div>

              <p className="mt-4 text-sm font-semibold text-[#e74c3c] text-center">
                「我相信我這次一定可以瘦一輩子，而且健康一輩子。」
              </p>
            </div>
          </div>

          {/* 溫溫 — 有前後對比照 */}
          <div className="rounded-2xl border border-[#eee9e5] overflow-hidden mb-8">
            <div className="grid grid-cols-2 gap-0">
              <div className="relative">
                <Image src="/images/wenwen-before.jpg" alt="溫溫減重前" width={350} height={400} className="w-full h-full object-cover" />
                <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">減重前</span>
              </div>
              <div className="relative">
                <Image src="/images/wenwen-after.jpg" alt="溫溫減重後" width={350} height={400} className="w-full h-full object-cover" />
                <span className="absolute bottom-2 left-2 bg-[#27ae60]/80 text-white text-xs px-2 py-1 rounded">減重後</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-lg">溫溫</span>
                <span className="text-sm text-[#a8a29e]">40 歲・文字工作者</span>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#e74c3c]/10 text-[#e74c3c] font-medium">80kg → 60kg</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#27ae60]/10 text-[#27ae60] font-medium">血壓恢復正常</span>
              </div>
              <blockquote className="text-[15px] leading-relaxed text-[#6b6560] border-l-3 border-[#f39c12] pl-4 mb-3 italic">
                「老公說我這樣剛剛好，我差點就信了！曾經被溫柔的安慰話術麻痺，直到有一天突然人間清醒——要為自己而瘦！」
              </blockquote>
              <p className="text-sm text-[#6b6560]">
                工作需要三不五時吃美食，體重一路來到近 80 公斤。高血壓前期，伴隨慢性身體各處發炎、頭痛、體力差。3 個月後，婚前的小裙子不僅僅穿下了，而且是「選擇繼續穿下」。
              </p>
            </div>
          </div>

          {/* 簡短卡片 — 不同類型的人 */}
          <div className="space-y-3 mt-8">
            {[
              { name: "小維", age: 35, tag: "上班族・胃食道逆流", quote: "減肥藥讓我胃酸逆流更嚴重，ABC 不但讓我瘦了，胃食道逆流也大幅改善了。", result: "胃食道逆流大幅改善" },
              { name: "小魚", age: 31, tag: "護理師・不規律作息", quote: "我每天照顧病人，卻連自己的健康都顧不好。終於找到適合醫護人員的方法。", result: "在不規律作息中維持健康" },
              { name: "Sam", age: 44, tag: "工程師・三高", quote: "體檢報告滿江紅，我害怕瘦瘦針的副作用。ABC 讓我安全地改善了健康指標。", result: "三高指標明顯改善" },
            ].map((t, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/80 border border-[#eee9e5]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold">{t.name}</span>
                  <span className="text-sm text-[#a8a29e]">{t.age} 歲</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#eee9e5] text-[#6b6560]">{t.tag}</span>
                </div>
                <p className="text-[15px] leading-relaxed text-[#6b6560] mb-2">「{t.quote}」</p>
                <p className="text-sm font-semibold text-[#27ae60]">✓ {t.result}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/about" className="text-[#2a9d6f] font-semibold hover:underline">
              看更多學員故事 →
            </Link>
          </div>

          {/* 團隊力量 */}
          <div className="mt-12 rounded-2xl overflow-hidden border border-[#eee9e5]">
            <Image
              src="/images/team-photo.png"
              alt="ABC 代謝力重建班長大合照"
              width={700}
              height={400}
              className="w-full h-auto"
            />
            <div className="p-5 text-center bg-[#faf9f7]">
              <p className="font-bold mb-1">這群人加在一起瘦超過 <span className="text-[#e74c3c]">300 公斤</span></p>
              <p className="text-sm text-[#6b6560]">
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
          <p className="text-[#6b6560] mb-8">
            8 個生活小問題，30 秒就能測出你的代謝類型
          </p>
          <a
            href="https://metabolism-quiz.vercel.app"
            className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-[#2a9d6f] rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            開始測驗 →
          </a>
        </div>
      </section>
    </>
  );
}
