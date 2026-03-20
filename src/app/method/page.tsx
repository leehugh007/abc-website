"use client";

import { useState } from "react";
import Link from "next/link";

function MethodFaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#eee9e5] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-3 p-4 text-left hover:bg-[#f8faf7] transition-colors"
      >
        <span className={`mt-0.5 text-[#2a9d6f] font-bold text-lg shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
        <span className="font-bold text-[15px] leading-snug">{q}</span>
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${open ? "max-h-[500px]" : "max-h-0"}`}>
        <div className="px-4 pb-4 pl-10 text-[15px] text-[#6b6560] leading-[1.85] whitespace-pre-line">
          {a}
        </div>
      </div>
    </div>
  );
}

export default function MethodPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-12 pb-10 px-5">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-[#2a9d6f] mb-4 tracking-wide">
            ABC 代謝力重建瘦身法
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight mb-6">
            ABC 到底在做什麼？
          </h1>
          <p className="text-lg text-[#6b6560] leading-relaxed max-w-lg">
            ABC 不是另一種節食法。不叫你少吃、不叫你忍耐、不算卡路里。
            <br />
            <strong className="text-[#2a2520]">
              先搞懂你的身體怎麼運作，行為自然會改變。
            </strong>
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="https://metabolism-quiz.vercel.app"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-[#2a9d6f] rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              先做 30 秒測驗 →
            </a>
            <span className="text-sm text-[#a8a29e] self-center">
              或繼續往下看完整介紹
            </span>
          </div>
        </div>
      </section>

      {/* 問題的根源 */}
      <section className="py-12 px-5 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">
            為什麼試過的方法都沒用？
          </h2>
          <p className="text-[#6b6560] mb-8">
            答案不是你不夠努力，而是你一直在解決錯的問題。
          </p>

          <div className="space-y-6 text-base leading-[1.9]">
            <p>
              少吃、戒澱粉、168
              斷食、代餐、甚至瘦瘦針——這些方法都在處理「你吃了什麼」，但真正讓你瘦不下來的，是<strong>你的胰島素累壞了</strong>。
            </p>

            <div className="bg-[#f3f9f5] rounded-xl p-5 border-l-4 border-[#2a9d6f]">
              <p className="font-bold text-[#1a5e3f] mb-2">
                胰島素是什麼？
              </p>
              <p className="text-[#6b6560]">
                你可以把它想成身體裡的<strong>「交通警察」</strong>
                。每次你吃東西，血糖上升，胰島素就出來指揮交通，把血糖送到該去的地方。如果血糖穩穩地上升，它輕輕鬆鬆就能處理好。但如果血糖暴衝，胰島素就得緊急加班——「太多了太多了，趕快存起來！」存到哪裡？
                <strong>存成脂肪。</strong>
              </p>
            </div>

            <p>
              更糟的是，當胰島素長期過勞，你的細胞會對它「無感」——就像<strong>門鎖生鏽了</strong>。胰島素敲門，門打不開，身體只好派更多胰島素來撬門。胰島素越多，身體越容易囤積脂肪。
            </p>

            <p>
              <strong>這就是為什麼有些人明明吃得不多，還是瘦不下來。</strong>
              不是嘴饞，是身體在發炎，代謝系統出了問題。
            </p>

            <div className="bg-[#fef9f0] rounded-xl p-5 border-l-4 border-[#e67e22]">
              <p className="font-bold text-[#e67e22] mb-2 text-sm">
                你可能不知道的事
              </p>
              <p className="text-[#6b6560]">
                很多人健檢血糖「正常」就覺得沒事了。但那個「正常」，可能是你的胰島素用正常的兩倍、三倍在拼命加班換來的。它死撐，把血糖硬壓下來——這種狀態搞不好已經五年、十年了，你完全不知道。
              </p>
            </div>
          </div>

          {/* 延伸閱讀 — bg-white section 裡用 bg-[#f8faf7] */}
          <div className="mt-8 p-5 rounded-2xl bg-[#f8faf7] border border-[#eee9e5]">
            <p className="text-xs font-semibold text-[#a8a29e] tracking-wider mb-3">
              想了解更多？
            </p>
            <div className="space-y-2">
              <Link
                href="/articles/blood-sugar-insulin-overwork"
                className="block text-sm text-[#2a9d6f] font-medium article-link"
              >
                血糖過高？問題可能不是澱粉，而是你的胰島素累壞了 →
              </Link>
              <Link
                href="/articles/normal-blood-sugar-trap"
                className="block text-sm text-[#2a9d6f] font-medium article-link"
              >
                血糖正常，但下午老是昏沉、腰越來越粗？ →
              </Link>
              <Link
                href="/articles/cholesterol-not-eggs"
                className="block text-sm text-[#2a9d6f] font-medium article-link"
              >
                膽固醇過高？問題可能不是雞蛋，而是你的珍奶 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABC 是什麼 */}
      <section className="py-16 px-5 bg-[#1a5e3f] text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3 text-center">
            所以 ABC 是什麼？
          </h2>
          <p className="text-center text-white/70 mb-12">
            加營養、調體質、輕負擔。當身體不再發炎、胰島素不再過勞，瘦就是自然而然的事。
          </p>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-white/10 border border-white/15">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-extrabold text-[#e74c3c]">
                  A
                </span>
                <div>
                  <div className="font-bold text-lg">Add 加營養</div>
                  <div className="text-sm text-white/60">
                    加好的東西進來
                  </div>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                不是「不能吃什麼」，是「增加什麼」。增加蔬菜、增加蛋白質、增加好的碳水、增加活動量。
                <strong className="text-white">
                  不吃什麼比較難，但增加什麼容易得多。
                </strong>
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 border border-white/15">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-extrabold text-[#f39c12]">
                  B
                </span>
                <div>
                  <div className="font-bold text-lg">Behavior 行為調體質</div>
                  <div className="text-sm text-white/60">
                    透過行為調整，讓代謝回到正常
                  </div>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                調整進食順序、調整空腹節奏、調整睡眠和活動。不靠意志力硬撐，而是
                <strong className="text-white">
                  有意識地刻意練習，把不習慣變成習慣。
                </strong>
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 border border-white/15">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-extrabold text-[#27ae60]">
                  C
                </span>
                <div>
                  <div className="font-bold text-lg">Clear 輕負擔</div>
                  <div className="text-sm text-white/60">
                    減輕身體和心理的負擔
                  </div>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                減少含糖飲料、減少油炸物、減少精緻糖、減少體重焦慮。
                <strong className="text-white">
                  不是一輩子不能吃，是讓身體不要一直處於發炎狀態。
                </strong>
              </p>
            </div>
          </div>

          <p className="text-center text-white/50 text-sm mt-8">
            每週用 ABC 三個框架出任務，12 週把好習慣一層一層疊上去。
          </p>
        </div>
      </section>

      {/* 跟其他方法有什麼不同 */}
      <section className="py-12 px-5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">
            跟其他方法有什麼不同？
          </h2>

          <div className="grid sm:grid-cols-3 gap-4">
            {/* 節食 */}
            <div className="rounded-2xl border border-[#eee9e5] overflow-hidden">
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#e74c3c]/10 text-[#e74c3c] font-medium">
                    節食 / 少吃多動
                  </span>
                </div>
                <p className="text-[15px] text-[#6b6560] leading-relaxed mb-2">
                  你越少吃，身體越省電。代謝變慢、肌肉流失，最後「正常吃回來」的時候，長回來的都是脂肪。
                  <strong className="text-[#2a2520]">
                    快速瘦身一年後復胖體重的
                    75-80%，幾乎沒有快速方法不復胖的。
                  </strong>
                </p>
                <Link
                  href="/articles/eat-less-move-more-myth"
                  className="text-sm text-[#2a9d6f] font-medium article-link"
                >
                  「少吃多動」這四個字，害了多少人？ →
                </Link>
              </div>
            </div>

            {/* 瘦瘦針 */}
            <div className="rounded-2xl border border-[#eee9e5] overflow-hidden">
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#8e44ad]/10 text-[#8e44ad] font-medium">
                    瘦瘦針
                  </span>
                </div>
                <p className="text-[15px] text-[#6b6560] leading-relaxed mb-2">
                  瘦瘦針用外源性荷爾蒙壓抑你的食慾，表面問題被解決了，但深層原因沒有。停針後食慾像海嘯一樣湧回來——
                  <strong className="text-[#2a2520]">
                    打針是「租」一個瘦的身體，停了就要還。
                  </strong>
                </p>
                <Link
                  href="/articles/ozempic-alternative-abc"
                  className="text-sm text-[#2a9d6f] font-medium article-link"
                >
                  如果不想打針，還有什麼選擇？ →
                </Link>
              </div>
            </div>

            {/* ABC */}
            <div className="rounded-2xl border-2 border-[#2a9d6f]/30 overflow-hidden bg-[#f3f9f5]">
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#2a9d6f]/10 text-[#2a9d6f] font-medium">
                    ABC 代謝力重建
                  </span>
                </div>
                <p className="text-[15px] text-[#6b6560] leading-relaxed">
                  不壓抑食慾，而是讓胰島素休息、代謝回到正軌。
                  <strong className="text-[#2a2520]">
                    當你理解了身體怎麼運作，你就知道怎麼選擇——而且是心甘情願的。
                  </strong>
                  不靠意志力，因為搞懂了，你自然就會做。
                </p>
                <p className="text-sm font-semibold text-[#2a9d6f] mt-3">
                  學一次，瘦一輩子。
                </p>
              </div>
            </div>
          </div>

          {/* 意志力迷思 — 預設背景 section 裡用 bg-white */}
          <div className="mt-8 p-5 rounded-2xl bg-white border border-[#eee9e5]">
            <p className="text-xs font-semibold text-[#a8a29e] tracking-wider mb-3">
              關於意志力
            </p>
            <div className="space-y-2">
              <Link
                href="/articles/willpower-myth"
                className="block text-sm text-[#2a9d6f] font-medium article-link"
              >
                「管不住嘴就是沒意志力」？讓科學來打臉這句話 →
              </Link>
              <Link
                href="/articles/95-percent-regain-weight"
                className="block text-sm text-[#2a9d6f] font-medium article-link"
              >
                95% 的人都會復胖，但這 5% 做對了什麼？ →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 12 週概覽 */}
      <section className="py-12 px-5 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">
            12 週，學一次就夠了
          </h2>
          <p className="text-[#6b6560] mb-10">
            不求快，求的是一輩子都能用。投資自己三個月，得到一個可以實踐一輩子的健康技能。
          </p>

          <div className="space-y-6">
            {/* Phase 1 */}
            <div className="relative pl-8 border-l-2 border-[#2a9d6f]/20">
              <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-[#2a9d6f] border-2 border-white" />
              <div className="mb-1">
                <span className="text-xs font-semibold text-[#2a9d6f] tracking-wider">
                  第 1-4 週
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2">重啟期</h3>
              <p className="text-[15px] text-[#6b6560] leading-relaxed">
                讓胰島素開始休息。從最簡單的事開始——加蔬菜、調整進食順序、晚餐輕碳水。不用少吃任何東西，只是換個方式。很多學員第一週就回報：「早上起來肚子消了一點。」
              </p>
              <Link
                href="/articles/eating-order-blood-sugar"
                className="inline-block mt-2 text-sm text-[#2a9d6f] font-medium article-link"
              >
                研究證實：換個順序吃，血糖少飆 35% →
              </Link>
            </div>

            {/* Phase 2 */}
            <div className="relative pl-8 border-l-2 border-[#2a9d6f]/20">
              <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-[#f39c12] border-2 border-white" />
              <div className="mb-1">
                <span className="text-xs font-semibold text-[#f39c12] tracking-wider">
                  第 5-8 週
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2">強化期</h3>
              <p className="text-[15px] text-[#6b6560] leading-relaxed">
                深化飲食品質，加入運動習慣。補足蛋白質、練習八分飽、睡好覺、認識哪些食物讓身體發炎。你會開始理解——以前愛吃的那些東西，為什麼讓你越吃越胖。
              </p>
            </div>

            {/* Phase 3 */}
            <div className="relative pl-8 border-l-2 border-[#2a9d6f]/20">
              <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-[#27ae60] border-2 border-white" />
              <div className="mb-1">
                <span className="text-xs font-semibold text-[#27ae60] tracking-wider">
                  第 9-12 週
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2">內化期</h3>
              <p className="text-[15px] text-[#6b6560] leading-relaxed">
                這些習慣變成你的本能。你不再需要有人告訴你這週做什麼任務——你已經知道了。看到食物會自然地想：「這一餐有蛋白質嗎？有蔬菜嗎？」不是在忍耐，是你<strong>真的不想</strong>回到以前的方式。
              </p>
            </div>
          </div>

          {/* 成果 — 自然文字版 */}
          <div className="mt-10 p-6 rounded-2xl bg-[#f3f9f5] border border-[#2a9d6f]/15">
            <p className="text-[15px] text-[#6b6560] leading-relaxed">
              三年來，超過 <strong className="text-[#2a2520]">3000 位學員</strong>累計瘦身超過 <strong className="text-[#2a2520]">3 萬公斤</strong>。不算熱量，不靠意志力——因為食物品質比數字更重要。
            </p>
          </div>

          {/* 學員故事連結 — bg-white section 裡用 bg-[#f8faf7] */}
          <div className="mt-6 p-5 rounded-2xl bg-[#f8faf7] border border-[#eee9e5]">
            <p className="text-xs font-semibold text-[#a8a29e] tracking-wider mb-3">
              他們的故事
            </p>
            <div className="space-y-2">
              <Link
                href="/articles/socks-story-62kg"
                className="block text-sm text-[#2a9d6f] font-medium article-link"
              >
                胖到連穿襪子都要女兒幫忙——一年後，她瘦了 62 公斤 →
              </Link>
              <Link
                href="/articles/chicken-soup-love-story"
                className="block text-sm text-[#2a9d6f] font-medium article-link"
              >
                那碗雞湯征服了他的胃，但我卻被誤認為他媽媽 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 核心信念 */}
      <section className="py-12 px-5 bg-[#f3f9f5]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            一休相信的事
          </h2>
          <div className="space-y-4">
            {[
              {
                quote: "減肥這件事，如果你一直用意志力，你幾乎注定百分百失敗。",
                explain:
                  "意志力是用來撐住極限的，不是用來過日子的。每天壓抑不吃想吃的，就像每天逼自己舉最重的啞鈴——沒有人撐得了一輩子。",
              },
              {
                quote: "不吃什麼比較難，但增加什麼容易得多。",
                explain:
                  "我們不說「不能吃炸的」，而是「優先選滷燙煮蒸烤」。不說「戒掉澱粉」，而是「把白飯換成地瓜南瓜」。加法思維，讓改變自然發生。",
              },
              {
                quote: "最好的減肥就是沒事。你不覺得你在減肥，但所有行為都朝減肥在前進。",
                explain:
                  "當好習慣內化成生活的一部分，你根本不需要再「減肥」。因為你已經知道怎麼跟身體、跟食物好好相處了。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white border border-[#eee9e5]"
              >
                <p className="font-bold text-[#1a5e3f] mb-2 leading-snug">
                  「{item.quote}」
                </p>
                <p className="text-sm text-[#6b6560] leading-relaxed">
                  {item.explain}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — 大家都在問 */}
      <section className="py-12 px-5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">大家都在問</h2>
          <div className="space-y-3">
            <MethodFaqItem
              q="ABC 跟 168、生酮有什麼不一樣？"
              a="168、生酮都在處理「什麼時候吃」或「吃什麼」。ABC 處理更根本的問題——你的代謝系統為什麼失調。不需要戒掉任何食物，而是讓胰島素休息、代謝回到正軌。"
            />
            <MethodFaqItem
              q="需要算熱量嗎？"
              a="不用。我們關注食物品質和餐盤比例（三份蔬菜、兩份蛋白質、一份碳水），不盯數字。觀察身體變化比計算更重要。"
            />
            <MethodFaqItem
              q="外食族可以做 ABC 嗎？"
              a="完全可以。核心是「菜肉飯順序法」——先吃菜、再吃肉、最後吃飯。光是換順序，血糖波動就少了 35%。火鍋、便當、超商都能做。"
            />
            <MethodFaqItem
              q="12 週結束後會復胖嗎？"
              a="快速瘦身一年後復胖 75-80%。但 ABC 學的不是菜單，是生活方式。12 週後你已經內化了這些習慣，不是在忍耐，是真的不想回到以前。"
            />
            <MethodFaqItem
              q="減肥是不是就是靠意志力？"
              a="如果減肥靠意志力，你幾乎注定失敗。我們用「選擇」取代「控制」——搞懂為什麼要這樣吃，你就不需要意志力了。"
            />
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/faq"
              className="text-sm text-[#2a9d6f] font-medium article-link"
            >
              看全部 15 個問題 →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-5">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-lg text-[#6b6560] mb-2">
            你不需要準備好才開始。
          </p>
          <h2 className="text-xl font-bold mb-6">
            第一步，了解你的身體正在用哪種模式運轉
          </h2>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center mb-10">
            <a
              href="https://metabolism-quiz.vercel.app"
              className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-[#2a9d6f] rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              30 秒代謝測驗 →
            </a>
            <a
              href="https://lin.ee/x41s2Su"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-[#06C755] rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              加入一休的 LINE →
            </a>
          </div>

          <div className="border-t border-[#eee9e5] pt-8">
            <p className="text-sm text-[#a8a29e] mb-4">
              想先多了解一些？
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/articles"
                className="text-sm font-medium text-[#2a9d6f] article-link"
              >
                看更多文章 →
              </Link>
              <Link
                href="/types"
                className="text-sm font-medium text-[#2a9d6f] article-link"
              >
                了解五種代謝類型 →
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-[#2a9d6f] article-link"
              >
                關於一休 →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
