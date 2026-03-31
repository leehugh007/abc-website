import type { Metadata } from "next";
import Link from "next/link";
import { StickyLineCTA } from "@/app/sticky-line-cta";

export const metadata: Metadata = {
  title: "坐整天腰越來越粗？不是你懶，是血糖在搞你",
  description:
    "久坐、外食、壓力大、下午手搖飲。你的血糖像坐雲霄飛車，代謝越來越差。ABC 代謝重建瘦身法，幫久坐上班族從根本解決。",
};

export default function SedentaryPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-12 px-5">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-[#2a9d6f] mb-4 tracking-wide">
            給久坐上班族
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight mb-6">
            坐整天腰越來越粗？
            <br />
            <span className="text-[#2a9d6f]">不是你懶，是血糖在搞你</span>
          </h1>
          <div className="text-lg text-[#6b6560] leading-relaxed mb-10 max-w-lg space-y-2">
            <p>下午三點一定要來杯手搖飲，不然撐不住。</p>
            <p>外食族，便當滷肉飯隨便吃，想煮也沒時間。</p>
            <p>
              壓力大的時候就想吃東西，
              <strong className="text-[#2a2520]">但吃完又更有罪惡感</strong>。
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#2a9d6f] rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              30 秒測出你的代謝類型 →
            </Link>
            <a
              href="https://lin.ee/x41s2Su"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#06C755] rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              加入一休的 LINE →
            </a>
          </div>
        </div>
      </section>

      {/* 你一定試過這些 */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">
            你一定試過這些
          </h2>
          <p className="text-[#6b6560] mb-8">
            每次都下定決心，每次都撐不過兩週。
          </p>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl border border-[#eee9e5]">
              <div className="font-bold mb-2">健身房辦年卡</div>
              <p className="text-[15px] text-[#6b6560] leading-relaxed">
                辦卡那天熱血沸騰，去了三次就開始找理由。加班太晚、今天太累、明天再去。一年後發現去的次數用手指數得出來。問題不在你沒毅力——下班已經累成狗了，還要逼自己去健身房，這本來就不合理。
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-[#eee9e5]">
              <div className="font-bold mb-2">168 斷食</div>
              <p className="text-[15px] text-[#6b6560] leading-relaxed">
                撐到中午不吃，結果午餐暴吃一頓。而且空腹太久，血糖掉到底，身體反而更渴望高糖高碳水的東西。你越忍，下午那杯手搖飲的癮就越強。168 對久坐族來說，常常是讓血糖雲霄飛車更劇烈的方法。
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-[#eee9e5]">
              <div className="font-bold mb-2">算卡路里</div>
              <p className="text-[15px] text-[#6b6560] leading-relaxed">
                外食族要算卡路里根本是不可能的任務。一碗滷肉飯多少卡？那杯拿鐵加糖多少卡？算到後來放棄，因為太累了。而且就算算對了，你的問題也不在卡路里——同樣 500 大卡的地瓜跟珍珠奶茶，對你身體的影響完全不同。
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-[#eee9e5]">
              <div className="font-bold mb-2">戒手搖飲</div>
              <p className="text-[15px] text-[#6b6560] leading-relaxed">
                用意志力戒手搖飲，跟用意志力戒菸一樣難。因為你下午想喝手搖飲不是因為嘴饞——是血糖崩盤了，身體在跟你求救。不處理血糖問題，光靠忍是忍不住的。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 問題不在你 */}
      <section className="py-16 px-5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">
            你的血糖，每天都在坐雲霄飛車
          </h2>
          <div className="space-y-5 text-base leading-[1.9]">
            <p>
              早上趕上班沒吃早餐（或隨便吃個麵包）。午餐吃個便當，飯吃完菜吃兩口。下午開始昏沉，來杯大珍奶撐一下。晚上加班到八九點，回家路上順手買個鹹酥雞配啤酒。
            </p>

            <p>
              聽起來是不是你的日常？
            </p>

            <div className="bg-[#f3f9f5] rounded-xl p-5 border-l-4 border-[#2a9d6f]">
              <p className="font-bold text-[#1a5e3f] text-sm mb-2">
                你的血糖在做什麼
              </p>
              <p className="text-[#6b6560]">
                早上空腹 → 血糖低。午餐大量碳水 → 血糖暴衝。胰島素緊急出動把血糖壓下來 → 血糖崩盤。下午昏沉想睡 → 身體叫你趕快補糖 → 你拿起手搖飲。晚上又是一輪暴衝。
                <strong className="text-[#2a2520]">
                  這就是血糖雲霄飛車，你的身體每天被它折騰三到四次。
                </strong>
              </p>
            </div>

            <div className="bg-[#fef9f0] rounded-xl p-5 border-l-4 border-[#e67e22]">
              <p className="font-bold text-[#e67e22] text-sm mb-2">
                久坐讓問題加倍嚴重
              </p>
              <p className="text-[#6b6560]">
                肌肉是處理血糖最大的器官——它會「吸收」血液中的葡萄糖。但久坐讓肌肉幾乎不活動，血糖沒地方去，只好讓胰島素加班把它全部轉成脂肪。再加上工作壓力大，
                <strong className="text-[#2a2520]">
                  皮質醇升高會讓脂肪特別容易堆在腰腹。
                </strong>
                這就是為什麼久坐的人最容易中廣型肥胖。
              </p>
            </div>

            <p>
              <strong>久坐 + 高壓 + 外食</strong>
              ——這個組合讓你的血糖坐雲霄飛車、胰島素過勞、代謝持續下降。不是你懶、不是你不自律，是你的工作和生活方式讓身體一直處於發炎狀態。
            </p>
          </div>

          <div className="mt-8 p-5 rounded-2xl bg-white border border-[#eee9e5]">
            <p className="text-xs font-semibold text-[#a8a29e] tracking-wider mb-3">
              延伸閱讀
            </p>
            <div className="space-y-2">
              <Link
                href="/concepts/blood-sugar-rollercoaster"
                className="block text-sm text-[#2a9d6f] font-medium hover:underline"
              >
                血糖雲霄飛車：你的疲倦和飢餓都跟它有關 →
              </Link>
              <Link
                href="/concepts/metabolic-flexibility"
                className="block text-sm text-[#2a9d6f] font-medium hover:underline"
              >
                代謝靈活性：讓身體學會燒脂肪當燃料 →
              </Link>
              <Link
                href="/concepts/cortisol"
                className="block text-sm text-[#2a9d6f] font-medium hover:underline"
              >
                皮質醇：讓你越忙越胖的壓力荷爾蒙 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABC 怎麼幫你 */}
      <section className="py-16 px-5 bg-[#1a5e3f] text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3 text-center">
            ABC 怎麼幫久坐上班族？
          </h2>
          <p className="text-center text-white/70 mb-12">
            外食可以、不用上健身房也可以。從你現在的生活裡開始改變。
          </p>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-white/10 border border-white/15">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-extrabold text-[#e74c3c]">A</span>
                <div>
                  <div className="font-bold text-lg">Add 加營養</div>
                  <div className="text-sm text-white/60">外食族的加法策略</div>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                便當多加一份燙青菜。超商午餐選有蛋白質的組合。不叫你不吃滷肉飯——
                <strong className="text-white">
                  先吃菜、再吃肉、最後才吃飯，光是這個順序就差很多。
                </strong>
                而且加了菜和肉，飯自然就吃少了，不用刻意控制。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 border border-white/15">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-extrabold text-[#f39c12]">B</span>
                <div>
                  <div className="font-bold text-lg">Behavior 調體質</div>
                  <div className="text-sm text-white/60">不需要額外時間的行為調整</div>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                午飯後走 15 分鐘回辦公室（不坐電梯走樓梯也行）。設鬧鐘每小時站起來倒杯水。
                <strong className="text-white">
                  這些「微行為」不佔額外時間，但可以讓你的血糖穩很多。
                </strong>
                下午就不會那麼想來杯手搖飲了。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 border border-white/15">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-extrabold text-[#27ae60]">C</span>
                <div>
                  <div className="font-bold text-lg">Clear 輕負擔</div>
                  <div className="text-sm text-white/60">用替代取代禁止</div>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                不說「戒手搖飲」，而是「先試無糖茶」。不說「不能吃消夜」，而是「如果真的餓，選蛋白質而不是碳水」。
                <strong className="text-white">
                  不跟你的慾望打仗，而是給身體一個更好的選擇。
                </strong>
                當血糖穩了，你會發現那些癮自然就淡了。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 學員故事 */}
      <section className="py-16 px-5 bg-[#f3f9f5]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3">
            跟你一樣坐辦公室的人，後來怎麼了
          </h2>
          <p className="text-center text-[#6b6560] mb-10">
            他們也曾經覺得外食族不可能瘦
          </p>

          {/* 俐臻 */}
          <div className="rounded-2xl border border-[#eee9e5] overflow-hidden mb-6 bg-white">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-lg">俐臻</span>
                <span className="text-sm text-[#a8a29e]">久坐生活・曾胖到 127kg</span>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#e74c3c]/10 text-[#e74c3c] font-medium">
                  127kg → 65kg
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#27ae60]/10 text-[#27ae60] font-medium">
                  瘦了 62 公斤
                </span>
              </div>
              <blockquote className="text-[15px] leading-relaxed text-[#6b6560] border-l-3 border-[#f39c12] pl-4 mb-3 italic">
                「胖到連穿襪子都要女兒幫忙，蹲不下去。現在我可以跟她一起跑步了。」
              </blockquote>
              <p className="text-sm text-[#6b6560] leading-relaxed">
                久坐的生活方式，體重一路飆到 127 公斤。胖到連穿襪子都要女兒幫忙。她沒有去健身房、沒有吃減肥藥，從改變飲食結構開始，一步一步瘦了 62 公斤。花了時間，但每一公斤都是扎實的。
              </p>
              <div className="mt-4">
                <Link
                  href="/articles/socks-story-62kg"
                  className="text-sm text-[#2a9d6f] font-medium hover:underline"
                >
                  看俐臻的完整故事 →
                </Link>
              </div>
            </div>
          </div>

          {/* 護理師 */}
          <div className="rounded-2xl border border-[#eee9e5] overflow-hidden bg-white">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-lg">小魚</span>
                <span className="text-sm text-[#a8a29e]">護理師・不規律作息</span>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#27ae60]/10 text-[#27ae60] font-medium">
                  在不規律作息中維持健康
                </span>
              </div>
              <blockquote className="text-[15px] leading-relaxed text-[#6b6560] border-l-3 border-[#f39c12] pl-4 mb-3 italic">
                「我每天照顧病人，卻連自己的健康都顧不好。終於找到適合醫護人員的方法。」
              </blockquote>
              <p className="text-sm text-[#6b6560] leading-relaxed">
                輪班制的護理師，作息不規律、壓力大、只能在醫院周邊外食。她以為自己的工作型態注定沒辦法好好控制體重。但 ABC 的核心是調整食物品質和進食順序——這在任何環境下都做得到。
              </p>
              <div className="mt-4">
                <Link
                  href="/testimonials"
                  className="text-sm text-[#2a9d6f] font-medium hover:underline"
                >
                  看更多學員故事 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 相關文章 */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">
            這些文章可能會改變你的想法
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/articles/eating-order-blood-sugar"
              className="block p-5 rounded-2xl border border-[#eee9e5] hover:shadow-sm transition-shadow"
            >
              <div className="font-bold mb-1">換個順序吃，血糖少飆 35%</div>
              <p className="text-sm text-[#6b6560]">
                不用改菜單，外食族也能輕鬆做到。先菜、再肉、最後飯。
              </p>
            </Link>

            <Link
              href="/articles/starch-rescue"
              className="block p-5 rounded-2xl border border-[#eee9e5] hover:shadow-sm transition-shadow"
            >
              <div className="font-bold mb-1">澱粉不是敵人</div>
              <p className="text-sm text-[#6b6560]">
                你不需要戒澱粉，你需要知道什麼澱粉可以吃、什麼時候吃最好。
              </p>
            </Link>

            <Link
              href="/articles/willpower-myth"
              className="block p-5 rounded-2xl border border-[#eee9e5] hover:shadow-sm transition-shadow"
            >
              <div className="font-bold mb-1">管不住嘴就是沒意志力？</div>
              <p className="text-sm text-[#6b6560]">
                讓科學來打臉這句話。你想吃甜食不是因為貪吃，是血糖在跟你求救。
              </p>
            </Link>

            <Link
              href="/articles/eat-less-move-more-myth"
              className="block p-5 rounded-2xl border border-[#eee9e5] hover:shadow-sm transition-shadow"
            >
              <div className="font-bold mb-1">「少吃多動」害了多少人？</div>
              <p className="text-sm text-[#6b6560]">
                少吃讓代謝變慢，多動讓壓力荷爾蒙更高。這四個字可能是最大的減肥謊言。
              </p>
            </Link>

            <Link
              href="/articles/abc-vs-intermittent-fasting"
              className="block p-5 rounded-2xl border border-[#eee9e5] hover:shadow-sm transition-shadow"
            >
              <div className="font-bold mb-1">ABC 跟 168 斷食有什麼不同？</div>
              <p className="text-sm text-[#6b6560]">
                168 處理的是「什麼時候吃」，ABC 處理的是「為什麼你吃了會胖」。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-5">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-lg text-[#6b6560] mb-2">
            你不需要辭職、不需要辦健身房卡、不需要自己煮。
          </p>
          <h2 className="text-xl font-bold mb-4">
            從你現在的生活開始，就可以改變
          </h2>
          <p className="text-[#6b6560] mb-8">
            8 個生活小問題，30 秒測出你的代謝類型
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-[#2a9d6f] rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              30 秒代謝測驗 →
            </Link>
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
            <p className="text-sm text-[#a8a29e] mb-4">想先多了解一些？</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/method"
                className="text-sm font-medium text-[#2a9d6f] hover:underline"
              >
                了解 ABC 是什麼 →
              </Link>
              <Link
                href="/program"
                className="text-sm font-medium text-[#2a9d6f] hover:underline"
              >
                12 週課程介紹 →
              </Link>
            </div>
          </div>
          <p className="mt-10 text-sm text-[#a8a29e]">
            我是一休，陪你健康的瘦一輩子
          </p>
        </div>
      </section>

      <StickyLineCTA />
    </>
  );
}
