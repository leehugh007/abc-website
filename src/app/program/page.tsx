import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ABC 代謝力重建瘦身｜12 週課程",
  description:
    "不算熱量、不餓肚子、不復胖。一休帶你用 ABC 代謝力公式，12 週重建代謝系統。每週直播課 + 每天營養師看餐 + 150 堂運動課。3500+ 學員，瘦超過 3 萬公斤。",
};

const SITE_URL = "https://abcmetabolic.com";

export default function ProgramPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "ABC 代謝力重建瘦身 12 週課程",
    description:
      "透過 ABC 代謝力公式，12 週重建代謝系統。包含一休直播課、營養師每日看餐、150+ 堂運動課、專業團隊陪伴。",
    provider: {
      "@type": "Organization",
      name: "ABC 代謝力重建",
      url: SITE_URL,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      duration: "P12W",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-16 pb-12 px-5">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold text-[#2a9d6f] mb-4 tracking-wide">
            ABC 代謝力重建瘦身
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight mb-6">
            人生中最後一次減肥
            <br />
            <span className="text-[#2a9d6f]">這次，瘦一輩子</span>
          </h1>
          <p className="text-lg text-[#6b6560] leading-relaxed max-w-lg mx-auto mb-8">
            不算熱量、不餓肚子、不靠意志力。
            <br />
            12 週學會一套可以用一輩子的方法。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://lin.ee/x41s2Su"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#06C755] rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              加入 LINE 了解課程方案 →
            </a>
            <a
              href="/quiz"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#6b6560] border border-[#eee9e5] rounded-full hover:bg-white transition-colors"
            >
              先測代謝類型
            </a>
          </div>
        </div>
      </section>

      {/* 數據 */}
      <section className="pb-12 px-5">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[#6b6560] leading-relaxed">
            四年來，超過 <strong className="text-[#2a2520]">3,500 位學員</strong>透過這套方法，
            合計瘦超過 <strong className="text-[#2a2520]">3 萬公斤</strong>。
            我們的學員維持率是 <strong className="text-[#2a9d6f]">70%</strong>——
            市場平均只有 10%。
          </p>
        </div>
      </section>

      {/* 靈魂拷問 */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">
            你想瘦一陣子，還是瘦一輩子？
          </h2>
          <p className="text-center text-[#6b6560] mb-10 max-w-lg mx-auto">
            在你選擇任何方法之前，先問自己一個問題——你到底有沒有辦法使用這個方法一輩子？
          </p>
          <div className="space-y-3 mb-8">
            {[
              "你可以打針打一輩子嗎？",
              "你要喝奶昔喝一輩子嗎？",
              "你要吃減肥餅乾吃一輩子嗎？",
              "你要每天大量運動一輩子嗎？",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-[#f8faf7]">
                <span className="text-[#e74c3c] font-bold shrink-0">?</span>
                <span className="text-[15px] text-[#6b6560] font-medium">{text}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-[#2a2520] font-semibold">
            如果你的回答都是「我不想」，那你就需要一個不一樣的方法。
          </p>
        </div>
      </section>

      {/* 意志力迷思 */}
      <section className="py-16 px-5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">
            減肥失敗，不是意志力的問題
          </h2>
          <div className="space-y-4 text-[15px] text-[#6b6560] leading-relaxed max-w-xl mx-auto">
            <p>很多人都說：「其實我過去那個方式很有效，只是我沒有意志力所以才失敗。」</p>
            <p><strong className="text-[#2a2520]">你搞錯方向了。根本不是意志力的問題。</strong></p>
            <p>減肥是一件用「月」甚至用「年」來計算的事。你可以用意志力撐三天、五天、十天——但你有辦法用意志力撐三個月嗎？撐半年嗎？</p>
            <p>問題的根源不是你有沒有意志力。問題的根源是<strong className="text-[#2a2520]">你的身體現在有問題</strong>——你可能正在慢性發炎、胰島素已經開始阻抗、細胞的粒線體功能低下。這些才是你失敗的原因。</p>
            <p>你的身體會想要回到「正常」。你用了錯誤的方法去壓一個有問題的身體，問題並沒有被解決。</p>
          </div>
        </div>
      </section>

      {/* 瘦是健康的附加價值 */}
      <section className="py-16 px-5 bg-[#1a5e3f] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">瘦，是健康的附加價值</h2>
          <p className="text-white/80 leading-relaxed max-w-xl mx-auto mb-6">
            你會變胖，很大的原因是你身體的健康出了問題。不是什麼大病，而是比較細節的——你的胰臟功能、細胞的粒線體功能、荷爾蒙系統，其實都不太正常。
          </p>
          <p className="text-white/80 leading-relaxed max-w-xl mx-auto mb-6">
            我設計了一套「ABC 代謝力公式」，讓你的身體進入代謝力重建的狀態。每一餐都能吃飽、心理舒服、身體也舒服，讓細胞功能回到正常。
          </p>
          <p className="text-lg font-bold">
            當身體變健康了，瘦就是自然的附加價值。
          </p>
        </div>
      </section>

      {/* 三不原則 */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
            我的三不原則
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { num: "1", title: "不吃瘦身產品", desc: "我自己有吃魚油、益生菌、肌酸。但這世界上沒有「吃了就會瘦」的產品。" },
              { num: "2", title: "不需要餓肚子", desc: "我出國 20 天，每一餐都吃得很飽。回來之後，比出國前還瘦。這是我過去從來沒遇過的。" },
              { num: "3", title: "不受時空限制", desc: "出國可以做、過年可以做、忙碌時可以做。馬來西亞、香港、日本的學員都在用。" },
            ].map((item) => (
              <div key={item.num} className="text-center">
                <div className="w-12 h-12 rounded-full border-2 border-[#2a9d6f]/30 bg-[#f3f9f5] flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-[#2a9d6f]">{item.num}</span>
                </div>
                <p className="font-bold mb-2">{item.title}</p>
                <p className="text-sm text-[#6b6560] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-[#2a2520] font-semibold">
            這才是一個可以跟你一輩子的方法。
          </p>
        </div>
      </section>

      {/* 加法不是減法 */}
      <section className="py-12 px-5">
        <div className="max-w-xl mx-auto">
          <div className="rounded-2xl bg-[#f3f9f5] border border-[#2a9d6f]/20 p-8 text-center">
            <p className="text-xl font-bold mb-3">瘦身應該是加法，不是減法</p>
            <p className="text-[15px] text-[#6b6560] leading-relaxed">
              最理想的瘦身，應該是你不覺得自己在減肥，但你自然就瘦下來了。我們教你的不是控制飲食——是學習調整跟重建一個新的飲食方式。
            </p>
          </div>
        </div>
      </section>

      {/* ABC 代謝力公式 */}
      <section className="py-16 px-5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3">
            ABC 代謝重建瘦身法
          </h2>
          <p className="text-center text-[#6b6560] mb-10">
            透過有策略的加營養、調體質、清負擔，讓身體回到健康平衡的狀態
          </p>

          <div className="rounded-2xl border border-[#eee9e5] overflow-hidden mb-8">
            <div className="bg-[#1a5e3f] text-white p-6">
              <p className="text-xl font-bold">ABC 代謝力公式</p>
            </div>
            <div className="p-6 space-y-5">
              <div className="flex items-start gap-3">
                <span className="font-bold text-[#2a9d6f] text-lg shrink-0">A</span>
                <div>
                  <p className="font-bold text-sm">Add 加營養</p>
                  <p className="text-sm text-[#6b6560]">增加代謝的關鍵不是少吃，反而是「吃」。用提升營養跟提升代謝的方式，你會發現每一餐都吃得很足夠，可是代謝很好，體重在不知不覺中就瘦下來了。</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-[#2a9d6f] text-lg shrink-0">B</span>
                <div>
                  <p className="font-bold text-sm">Behavior 行為調體質</p>
                  <p className="text-sm text-[#6b6560]">重置你的荷爾蒙狀態。很多人「吃很少還是瘦不下來」，是因為胰島素出了狀況——身體一直處在不願意燃燒脂肪、甚至不停合成脂肪的狀態。透過吃對的食物加上行為調整，讓身體進入有利於減重的代謝狀態。</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-[#2a9d6f] text-lg shrink-0">C</span>
                <div>
                  <p className="font-bold text-sm">Clear 清負擔</p>
                  <p className="text-sm text-[#6b6560]">慢性發炎對身體來說就像一把鈍刀——不會立即流很多血，但一直不停在割你。代謝變慢、細胞的能量工廠低下、體脂肪不願意燃燒。我們教你減輕身體負擔，讓身體自然進入代謝健康的狀態。</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-[#6b6560]">
            學一次，就可以受用一輩子。不是一套菜單，是一套系統。
          </p>
        </div>
      </section>

      {/* 四大系統 */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3">
            12 週，四大系統
          </h2>
          <p className="text-center text-[#6b6560] mb-12">
            不是給你一套菜單，是教你一套系統
          </p>

          <div className="space-y-6">
            {/* 飲食系統 */}
            <div className="rounded-2xl border border-[#eee9e5] p-6">
              <p className="text-sm font-semibold text-[#2a9d6f] mb-1">系統一</p>
              <p className="text-xl font-bold mb-4">一休親授課程</p>
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-[#6b6560]">
                <div className="flex items-start gap-2">
                  <span className="text-[#2a9d6f] shrink-0">✓</span>
                  <span>每週一堂直播課（12 堂），一休親自上課</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2a9d6f] shrink-0">✓</span>
                  <span>24 堂錄播課程，隨時回看</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2a9d6f] shrink-0">✓</span>
                  <span>教你 ABC 代謝力公式的完整系統</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2a9d6f] shrink-0">✓</span>
                  <span>花了十年學習整理成的科學方法</span>
                </div>
              </div>
            </div>

            {/* 營養系統 */}
            <div className="rounded-2xl border border-[#eee9e5] p-6">
              <p className="text-sm font-semibold text-[#2a9d6f] mb-1">系統二</p>
              <p className="text-xl font-bold mb-4">營養師每日看餐</p>
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-[#6b6560]">
                <div className="flex items-start gap-2">
                  <span className="text-[#2a9d6f] shrink-0">✓</span>
                  <span>每天上傳飲食照片，營養師教你怎麼調整</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2a9d6f] shrink-0">✓</span>
                  <span>~15 位國家高考合格營養師</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2a9d6f] shrink-0">✓</span>
                  <span>24 堂營養課（認識食物、營養標示、外食攻略）</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2a9d6f] shrink-0">✓</span>
                  <span>外食也能瘦：有學員全外食瘦 12 公斤以上</span>
                </div>
              </div>
              <p className="text-sm text-[#6b6560] mt-4 leading-relaxed bg-[#f8faf7] p-4 rounded-xl">
                一個健康的飲食，不是一份固定菜單叫你照著吃。而是在不同的時機、不同的狀況下，<strong className="text-[#2a2520]">你都懂得如何挑選好的飲食內容</strong>。這才是可以幫助你瘦一輩子的方式。
              </p>
            </div>

            {/* 運動系統 */}
            <div className="rounded-2xl border border-[#eee9e5] p-6">
              <p className="text-sm font-semibold text-[#2a9d6f] mb-1">系統三</p>
              <p className="text-xl font-bold mb-4">線上運動課</p>
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-[#6b6560]">
                <div className="flex items-start gap-2">
                  <span className="text-[#2a9d6f] shrink-0">✓</span>
                  <span>12 週超過 150 堂直播運動課</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2a9d6f] shrink-0">✓</span>
                  <span>肌力、有氧、瑜珈、小腹、翹臀⋯各種課程</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2a9d6f] shrink-0">✓</span>
                  <span>每堂 30-60 分鐘，在家就能做</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2a9d6f] shrink-0">✓</span>
                  <span>全部可回放，不用周車勞頓</span>
                </div>
              </div>
            </div>

            {/* 支持系統 */}
            <div className="rounded-2xl border border-[#eee9e5] p-6">
              <p className="text-sm font-semibold text-[#2a9d6f] mb-1">系統四</p>
              <p className="text-xl font-bold mb-4">團隊陪伴系統</p>
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-[#6b6560]">
                <div className="flex items-start gap-2">
                  <span className="text-[#2a9d6f] shrink-0">✓</span>
                  <span>班級制（不是一對一），一群人一起走</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2a9d6f] shrink-0">✓</span>
                  <span>專業教練團隊（國際認證）</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2a9d6f] shrink-0">✓</span>
                  <span>助教都是自己瘦過的學長姐</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2a9d6f] shrink-0">✓</span>
                  <span>班長、學養姐分享經驗，因為我們胖過，我們懂你</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12 週時間線 */}
      <section className="py-16 px-5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
            12 週的改變旅程
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#2a9d6f] text-white text-sm font-bold flex items-center justify-center shrink-0">1-4</div>
                <div className="w-0.5 flex-1 bg-[#eee9e5] mt-2" />
              </div>
              <div className="pb-8">
                <p className="font-bold text-lg mb-1">重啟期</p>
                <p className="text-sm text-[#6b6560] leading-relaxed">讓胰島素休息，代謝開始回溫。你會發現：下午不那麼想睡了、手搖飲的慾望變淡了、肚子開始消一點。體重可能還沒有大幅變化，但身體內部已經在改變。</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#2a9d6f] text-white text-sm font-bold flex items-center justify-center shrink-0">5-8</div>
                <div className="w-0.5 flex-1 bg-[#eee9e5] mt-2" />
              </div>
              <div className="pb-8">
                <p className="font-bold text-lg mb-1">強化期</p>
                <p className="text-sm text-[#6b6560] leading-relaxed">體重和體脂開始明顯下降。你會自然地吃得比較健康，不是在忍耐，是真的不想吃那些東西了。很多學員在這個階段會說：「怎麼感覺身體變聰明了。」</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#2a9d6f] text-white text-sm font-bold flex items-center justify-center shrink-0">9-12</div>
              </div>
              <div>
                <p className="font-bold text-lg mb-1">內化期</p>
                <p className="text-sm text-[#6b6560] leading-relaxed">把前面學到的東西變成習慣。出去吃飯自然會先看有沒有蛋白質和蔬菜——不是在「堅持」，是你的大腦已經重新設定了。結業時帶走的不是一套菜單，是一種生活方式。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 學員見證 — 8 位 */}
      <section className="py-16 px-5 bg-[#f3f9f5]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3">
            跟你一樣的人，後來怎麼了
          </h2>
          <p className="text-center text-[#6b6560] mb-10">
            你如果要減 5 公斤、8 公斤、10 公斤，其實都是零頭
          </p>
          <div className="space-y-3">
            {[
              { name: "俐臻", tag: "三寶媽", result: "127 → 63 公斤", detail: "暴食症、憂鬱症，把自己關在家裡六年。一年半瘦超過 60 公斤，因為用健康的方式，搭配正確運動和蛋白質攝取，體態維持得非常好，沒有大量皮膚下垂。", link: "/articles/socks-story-62kg" },
              { name: "慧敏", tag: "免疫疾病", result: "84 → 63 公斤", detail: "類風濕性關節炎，重大傷病卡。關節腫到沒辦法彈鋼琴。一年後醫生說發炎指數降下來了，可以暫時停藥。她才意識到，原來這些發炎並不是不可逆的。", link: null },
              { name: "慧蘭", tag: "53 歲・美國大學教授", result: "比 7 年前更年輕", detail: "生過兩個小孩，個子嬌小，整年穿長袖外套遮肚子。在我們這邊近三年，從 45 歲到 53 歲——七年後變得比七年前更年輕、體態更好，最近還在練翹臀。", link: null },
              { name: "沛蓁", tag: "科技業", result: "85 → 67 公斤", detail: "被專櫃店員問「這是你兒子嗎？」。血壓正常了、鼻過敏消了、偏頭痛沒了。不想當被照顧的那一方，想和先生並肩同行。", link: "/articles/chicken-soup-love-story" },
              { name: "四寶媽", tag: "全職媽媽", result: "三個月肚子消風", detail: "生了四個小孩，肚子一直很大。三個月的時間，肚子像消風一樣。終於可以在家族旅遊開心拍照，不用躲最後一個。", link: null },
              { name: "腹部型學員", tag: "四肢瘦只有大肚子", result: "一年瘦 14 公斤", detail: "困擾他的不只肚子，還有鼻子過敏、蕁麻疹、皮膚過敏。完全沒有刻意減肥、沒有特別運動，透過 ABC 代謝力公式，過敏和發炎全部大幅改善。從水桶腰變螞蟻腰。", link: null },
              { name: "阿肥", tag: "特教老師", result: "瘦 20+ 公斤", detail: "以前最胖到 100 多公斤，靠自己瘦了 30 幾公斤但又胖回去。在我們這邊不到一年，腰圍減 16 公分。以前追學生跑都吃力，現在體力比學生還好。", link: null },
              { name: "美國創業者", tag: "手肘皮膚問題 30 年", result: "意外痊癒", detail: "手肘長期發炎、破皮、流血、發癢，看中醫西醫將近 30 年都無法改善。加入一年後忽然發現——手肘不癢了、不流血了、變得很光滑。那一刻他才感受到什麼叫「瘦是健康的附加價值」。", link: null },
            ].map((t, i) => (
              <div key={i} className="p-5 rounded-xl bg-white border border-[#eee9e5]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold">{t.name}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#eee9e5] text-[#6b6560]">{t.tag}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#e74c3c]/10 text-[#e74c3c] font-medium">{t.result}</span>
                  </div>
                  {t.link && (
                    <Link href={t.link} className="text-xs text-[#2a9d6f] font-medium hover:underline shrink-0">
                      看完整故事 →
                    </Link>
                  )}
                </div>
                <p className="text-sm text-[#6b6560] leading-relaxed">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 市場比較 */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
            跟其他方法比一比
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-[#eee9e5] p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#8e44ad]/10 text-[#8e44ad] font-medium">瘦瘦針</span>
              </div>
              <p className="text-sm text-[#6b6560] leading-relaxed">
                透過外源性荷爾蒙讓你沒食慾。問題是：沒教你怎麼選食物、沒教你怎麼理解心態、沒教你壓力大時怎麼平衡。你總有不打針的時候，食慾回來你怎麼辦？美國和歐洲都已經提起大規模訴訟——胰臟發炎、視網膜問題、掉髮、嘔吐，甚至有不可逆的案例。
              </p>
            </div>
            <div className="rounded-xl border border-[#eee9e5] p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#e67e22]/10 text-[#e67e22] font-medium">直銷產品</span>
              </div>
              <p className="text-sm text-[#6b6560] leading-relaxed">
                因為運作模式的關係，必須讓你快速瘦下來，所以都比較極端。通常瘦很快、復胖也很快。費用從一個月 1 萬到 6 萬都有。
              </p>
            </div>
            <div className="rounded-xl border border-[#eee9e5] p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#e74c3c]/10 text-[#e74c3c] font-medium">減肥手術</span>
              </div>
              <p className="text-sm text-[#6b6560] leading-relaxed">
                最不建議嘗試。前面幾個方式失敗了算了，這個方式失敗是不可逆的。去年就有因減重手術導致死亡的案例。
              </p>
            </div>
            <div className="rounded-xl border-2 border-[#2a9d6f] p-5 bg-[#f3f9f5]">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#2a9d6f] text-white font-medium">ABC 代謝力重建</span>
              </div>
              <p className="text-sm text-[#2a2520] leading-relaxed font-medium">
                不用打針、不用吃產品、不用餓肚子、不受時空限制。學會之後就是你的，帶走的是一套可以用一輩子的系統。學員維持率 70%——因為我們從根本解決問題，不是壓住症狀。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 誰適合 */}
      <section className="py-16 px-5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
            誰適合參加？
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "不想再一直減肥又復胖",
              "不想靠打針或吃藥來瘦",
              "想學一套可以用一輩子的方法",
              "不想再跟意志力打仗",
              "每天都外食，不知道怎麼健康吃",
              "健檢紅字越來越多，想改善健康",
              "試過各種方法都失敗，不知道還能怎麼辦",
              "在海外也想參加（全球都可以上課）",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-2 p-3">
                <span className="text-[#2a9d6f] font-bold shrink-0">✓</span>
                <span className="text-[15px] text-[#6b6560]">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
            常見問題
          </h2>
          <div className="space-y-4">
            {[
              { q: "會給固定菜單嗎？", a: "不會。我們教你的是一個系統化的飲食方式——教你怎麼選擇飲食，而不是只能照著菜單吃。這個差很多。不管你是外食族還是自己煮，不管你在台灣還是海外，都可以用。" },
              { q: "海外可以參加嗎？", a: "可以。我們有來自全世界各地的學員——亞洲、歐洲、美洲、中東、非洲都有。所有課程都可以回放，不用擔心時差。我們也不會給固定菜單，會教你在你所在的地區用你喜歡的方式吃。" },
              { q: "不喜歡運動、沒有運動經驗怎麼辦？", a: "我們大部分的學員其實都不喜歡運動，你不是第一個。教學以初學者為主，循序漸進，很輕鬆。家裡只要有一個瑜伽墊和一雙室內鞋就可以。" },
              { q: "我很忙，沒時間上課怎麼辦？", a: "所有直播課都會錄影，可以在方便的時間回放。營養師看餐只要拍照上傳就好。我們很多學員都是忙碌的上班族和家庭主婦，15-30 分鐘就可以流汗一下。" },
              { q: "需要買器材嗎？", a: "不用。家裡有一個瑜伽墊和一雙室內鞋就夠了。" },
              { q: "報名之後可以退費嗎？", a: "可以。還沒上課前可以全額退（扣手續費）。開始上課後，當月不退，剩餘的可以退。但請不要抱著「反正可以退」的試試看心態來參加——如果你先預設自己會失敗，你就一定會失敗。你只要很認真，我就一定可以幫助你成功。" },
              { q: "每個月都有開班嗎？", a: "是的，每月開一次。加入 LINE 可以知道最新的開班時間和說明會資訊。我們每個月都有免費線上說明會，聽完再決定。" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-[#eee9e5] p-5">
                <p className="font-bold text-[15px] mb-2">{item.q}</p>
                <p className="text-sm text-[#6b6560] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 一休的話 */}
      <section className="py-16 px-5 bg-[#1a5e3f] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/70 text-sm mb-6">一休想跟你說</p>
          <div className="space-y-4 text-white/90 leading-relaxed max-w-xl mx-auto text-left text-[15px]">
            <p>我自己在減肥這條路上走了十幾年。胖瘦反覆、討厭自己、沒自信⋯⋯我一直在這個過程中掙扎跟循環。</p>
            <p>追求極端是不長久的。任何極端的方式一定都能讓你獲得一定的成果，但如果你心不快樂、身體不快樂，你注定無法持久。</p>
            <p>看到學員瘦下來之後散發出那種耀眼的光芒，是我很大的成就來源。其實我現在不開減重班也可以，我已經達到自己的財務自由了。但出於熱情、出於使命、出於看到別人改變的快樂，我還是覺得我應該繼續做這件事。</p>
          </div>
          <p className="text-white font-bold mt-8 text-lg">
            如果有這個緣分，這絕對會是你最後一次減肥。
          </p>
          <p className="text-white/60 text-sm mt-2">
            瘦下來之後，你就可以一直維持。
          </p>
        </div>
      </section>

      {/* 最終 CTA */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            準備好了嗎？
          </h2>
          <p className="text-[#6b6560] mb-3">
            加入 LINE 了解最新開班時間和課程方案
          </p>
          <p className="text-xs text-[#a8a29e] mb-8">
            每月一次免費線上說明會，聽完再決定
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://lin.ee/x41s2Su"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-[#06C755] rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              加入 LINE 了解方案 →
            </a>
          </div>
          <p className="text-sm text-[#a8a29e] mt-8">我是一休，陪你健康的瘦一輩子</p>
        </div>
      </section>

      {/* 浮動底部 CTA（手機） */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#eee9e5] px-4 py-3 safe-bottom">
        <a
          href="https://lin.ee/x41s2Su"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full py-3 bg-[#06C755] text-white text-sm font-bold rounded-full shadow-md"
        >
          加入 LINE 了解課程方案 →
        </a>
      </div>
      {/* 底部墊高，避免浮動 CTA 擋住內容 */}
      <div className="sm:hidden h-16" />
    </>
  );
}
