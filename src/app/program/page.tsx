import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ABC 代謝力重建瘦身｜12 週課程",
  description:
    "不算熱量、不餓肚子、不復胖。一休帶你用 ABC 代謝力公式，12 週重建代謝系統。每週直播課 + 每天營養師看餐 + 150 堂運動課。3500+ 學員，瘦超過 3 萬公斤。",
};

const SITE_URL = "https://abc-metabolism.vercel.app";

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
              href="https://metabolism-quiz.vercel.app"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#6b6560] border border-[#eee9e5] rounded-full hover:bg-white transition-colors"
            >
              先測代謝類型
            </a>
          </div>
        </div>
      </section>

      {/* 數據 — 自然段落，不用 AI 數字格子 */}
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

      {/* 核心問題 */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">
            你不是瘦不下來
          </h2>
          <p className="text-center text-[#6b6560] mb-10">
            你只是還沒學到一個可以用一輩子的方法
          </p>
          <div className="space-y-4">
            {[
              "試過少吃多動，前兩週有瘦，然後就卡住了",
              "試過 168、生酮、代餐，每次都復胖回去還多兩公斤",
              "考慮打瘦瘦針，但又擔心停針之後怎麼辦",
              "明明吃很少，身體就是不肯瘦",
              "先生說「少吃多動就好了幹嘛花錢」，但你知道那根本沒用",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#f8faf7]">
                <span className="text-[#e74c3c] font-bold shrink-0 mt-0.5">✗</span>
                <span className="text-[15px] text-[#6b6560]">{text}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-[#2a2520] font-semibold">
            問題不在你。問題在方法。
          </p>
        </div>
      </section>

      {/* ABC 四大系統 */}
      <section className="py-16 px-5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3">
            12 週，四大系統
          </h2>
          <p className="text-center text-[#6b6560] mb-12">
            不是給你一套菜單，是教你一套系統
          </p>

          <div className="space-y-6">
            {/* ABC 系統 */}
            <div className="rounded-2xl border border-[#eee9e5] overflow-hidden">
              <div className="bg-[#1a5e3f] text-white p-6">
                <p className="text-sm font-semibold text-white/70 mb-1">系統一</p>
                <p className="text-xl font-bold">ABC 代謝力公式</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#2a9d6f] text-lg shrink-0">A</span>
                  <div>
                    <p className="font-bold text-sm">Add 加營養</p>
                    <p className="text-sm text-[#6b6560]">不告訴你不能吃什麼，教你可以加什麼。加蛋白質、加蔬菜、加好的脂肪。吃對的東西吃夠了，你自然不想亂吃。</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#2a9d6f] text-lg shrink-0">B</span>
                  <div>
                    <p className="font-bold text-sm">Behavior 行為調體質</p>
                    <p className="text-sm text-[#6b6560]">透過飲食順序、睡眠、壓力管理，重新校準你的荷爾蒙系統。讓胰島素休息，讓代謝回到正軌。</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#2a9d6f] text-lg shrink-0">C</span>
                  <div>
                    <p className="font-bold text-sm">Clear 輕負擔</p>
                    <p className="text-sm text-[#6b6560]">減少讓身體發炎的食物和行為。不是什麼都不能吃，是讓身體不再超載。</p>
                  </div>
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
                  <span>外食族、自煮族都適用，沒有固定菜單</span>
                </div>
              </div>
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
                  <span>肌力、有氧、瑜珈、小腹、翹臀⋯各種類型</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2a9d6f] shrink-0">✓</span>
                  <span>每堂 30-60 分鐘，在家就能做</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2a9d6f] shrink-0">✓</span>
                  <span>全部可回放，時間自由安排</span>
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
                  <span>一休每週親自直播授課（12 堂 + 24 堂錄播）</span>
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
                  <span>班級制，一群人一起走，不是你一個人</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12 週時間線 */}
      <section className="py-16 px-5 bg-white">
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

      {/* 學員見證 — 簡短版，連到完整故事 */}
      <section className="py-16 px-5 bg-[#f3f9f5]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3">
            跟你一樣的人，後來怎麼了
          </h2>
          <p className="text-center text-[#6b6560] mb-10">
            他們不是天生瘦，他們只是比你早遇到我們
          </p>
          <div className="space-y-3">
            {[
              { name: "俐臻", result: "127 → 65 公斤", detail: "三寶媽，暴食症，把自己關在家裡六年。一年半瘦 62 公斤，沒有皮膚鬆弛。", link: "/articles/socks-story-62kg" },
              { name: "慧敏", result: "84 → 63 公斤", detail: "自體免疫疾病、重大傷病卡。一年後醫生說發炎指數下降，可以停藥了。", link: null },
              { name: "沛蓁", result: "85 → 67 公斤", detail: "被誤認為先生的媽媽。血壓正常了、鼻過敏消了、偏頭痛沒了。", link: "/articles/chicken-soup-love-story" },
              { name: "會嵐", result: "45 → 53 歲更年輕", detail: "美國大學教授，生過兩個小孩。三年後比七年前更年輕、體態更好。", link: null },
              { name: "阿肥", result: "瘦 20+ 公斤", detail: "特教老師，以前追學生跑都很吃力。現在體力比學生還好。", link: null },
            ].map((t, i) => (
              <div key={i} className="p-5 rounded-xl bg-white border border-[#eee9e5]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{t.name}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#e74c3c]/10 text-[#e74c3c] font-medium">{t.result}</span>
                  </div>
                  {t.link && (
                    <Link href={t.link} className="text-xs text-[#2a9d6f] font-medium hover:underline">
                      看完整故事 →
                    </Link>
                  )}
                </div>
                <p className="text-sm text-[#6b6560]">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 誰適合 */}
      <section className="py-16 px-5 bg-white">
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
      <section className="py-16 px-5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
            常見問題
          </h2>
          <div className="space-y-4">
            {[
              { q: "會給固定菜單嗎？", a: "不會。我們不給固定菜單，我們教你怎麼選擇食物。不管你是外食族還是自己煮，都可以用。" },
              { q: "海外可以參加嗎？", a: "可以。全世界各地都有學員——亞洲、歐洲、美洲都有。所有課程都可以回放，不受時差影響。" },
              { q: "不喜歡運動怎麼辦？", a: "我們大部分學員都不喜歡運動，你不是第一個。運動課從零開始，循序漸進，每堂 30-60 分鐘在家就能做。瘦身主要靠飲食，運動是讓你更健康。" },
              { q: "我很忙，沒時間上課怎麼辦？", a: "所有課程都有錄影回放，你可以在方便的時間看。營養師看餐只要拍照上傳就好，不用額外花時間。" },
              { q: "報名之後可以退費嗎？", a: "可以。上課前全額退（扣手續費），上課後依比例退。但我希望你是準備好要改變才來，不是抱著「試試看不行就退」的心態。" },
              { q: "每個月都有開班嗎？", a: "是的，每月開一次。加入 LINE 可以知道最新的開班時間和說明會資訊。" },
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
          <blockquote className="text-lg sm:text-xl leading-relaxed font-medium mb-6">
            「我走了十幾年的減肥彎路。從討厭自己到接受自己，從追求極端到找到平衡。我經歷過太多次那種又胖又瘦又瘦又胖的過程，所以我才這麼堅持——你值得學會一個可以瘦一輩子的方法，而不是一直在那個循環裡面掙扎。」
          </blockquote>
          <p className="text-white/70 text-sm">
            如果有這個緣分，這絕對會是你最後一次減肥。
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
    </>
  );
}
