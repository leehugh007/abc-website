"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Testimonial {
  name: string;
  tag: string;
  result: string;
  resultColor: string;
  story: string;
  highlight?: string;
  articleLink?: string;
  image?: string;
  category: "大幅改變" | "健康逆轉" | "生活重建";
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "俐臻",
    tag: "三寶媽",
    result: "127 → 63 公斤",
    resultColor: "#e74c3c",
    story: "暴食症、憂鬱症，把自己關在家裡六年。甚至跟老公說可能這輩子都瘦不下來了，想去做減肥手術。後來聽了說明會，決定給自己最後一次機會。一年半瘦超過 60 公斤，體態維持得非常好，沒有大量皮膚下垂。",
    highlight: "你如果要減 5 公斤、8 公斤、10 公斤，其實都是她的零頭。",
    articleLink: "/articles/socks-story-62kg",
    image: "/images/student-lizhen.jpg",
    category: "大幅改變",
  },
  {
    name: "慧敏",
    tag: "自體免疫疾病・重大傷病卡",
    result: "84 → 63 公斤＋停藥",
    resultColor: "#27ae60",
    story: "類風濕性關節炎，關節腫到沒辦法彎曲，連最喜歡的鋼琴都沒辦法彈。加入後一年瘦了 20 公斤以上，醫生說發炎指數降下來了，可以暫時停藥。",
    highlight: "「手指關節不再腫脹疼痛了！現在終於可以想彈鋼琴就彈！」",
    image: "/images/autoimmune-student-before-after.jpeg",
    category: "健康逆轉",
  },
  {
    name: "慧蘭",
    tag: "53 歲・美國大學教授",
    result: "比 7 年前更年輕",
    resultColor: "#2a9d6f",
    story: "生過兩個小孩，個子嬌小，整年穿長袖外套遮肚子。在我們這邊近三年，從 45 歲到 53 歲——七年後變得比七年前更年輕、體態更好。最近還在練翹臀。",
    highlight: "一個 53 歲、生過兩個小孩的媽媽，只要用對方式，幾歲都可以。",
    image: "/images/student-huilan.jpg",
    category: "生活重建",
  },
  {
    name: "沛蓁",
    tag: "科技業",
    result: "85 → 67 公斤",
    resultColor: "#e74c3c",
    story: "在百貨公司被店員問：「小姐，這是你兒子嗎？」血壓正常了、鼻過敏消了、偏頭痛沒了。她不想當被照顧的那一方，想和先生並肩同行。",
    highlight: "那碗雞湯征服了他的胃，但她不想再被誤認為他媽媽。",
    articleLink: "/articles/chicken-soup-love-story",
    image: "/images/student-peizhen.jpg",
    category: "生活重建",
  },
  {
    name: "美美",
    tag: "7年級生・業務+進修生",
    result: "體重 -21.8kg・體脂 -16%",
    resultColor: "#e74c3c",
    story: "從差點破百到現在 7 字頭，歷經六期課程的堅持。血壓、血脂、糖化血色素全部恢復正常，內臟脂肪從中重度變成沒有脂肪肝。",
    highlight: "「我要選擇一個可以維持一輩子的方式，健康瘦下來。」",
    image: "/images/meimei-transformation.jpg",
    category: "大幅改變",
  },
  {
    name: "四寶媽",
    tag: "全職媽媽",
    result: "三個月瘦回產前肚子",
    resultColor: "#e67e22",
    story: "生了四個小孩之後肚子一直很大，試過很多方式都沒用。非常認真照著方法執行，三個月的時間，肚子像消風一樣。",
    highlight: "終於可以在家族旅遊開心拍照，成為一個辣媽。",
    image: "/images/student-four-kids-mom.jpg",
    category: "大幅改變",
  },
  {
    name: "溫溫",
    tag: "40 歲・產後媽媽",
    result: "體重 -20 公斤",
    resultColor: "#e74c3c",
    story: "產後五年體重慢慢爬到快 80 公斤。偏頭痛、唇炎、肚臍炎、尿道炎輪流來。兒子放學回家說：「媽媽，同學跟我說妳媽媽好胖喔。」那句童言把她從安逸的假象中敲醒。兩年後瘦了 20 公斤，不用再吃止痛藥，從躲鏡頭變成老公的專屬模特兒。",
    highlight: "「我只是好好吃飯，身體就把健康還給我了。」",
    articleLink: "/articles/wenwen-mom-story",
    image: "/images/student-wenwen.jpg",
    category: "生活重建",
  },
  {
    name: "小維",
    tag: "35 歲・上班族",
    result: "胃食道逆流大幅改善",
    resultColor: "#27ae60",
    story: "減肥藥讓胃酸逆流更嚴重，ABC 不但讓她瘦了，胃食道逆流也大幅改善了。肚子明顯消下去，整個人的線條完全不同。",
    image: "/images/student-xiaowei.jpg",
    category: "健康逆轉",
  },
  {
    name: "小魚",
    tag: "31 歲・護理師",
    result: "不規律作息中維持健康",
    resultColor: "#2a9d6f",
    story: "每天照顧病人，卻連自己的健康都顧不好。終於找到適合醫護人員不規律作息的方法。Before/After 對比驚人。",
    image: "/images/student-nurse.jpg",
    category: "生活重建",
  },
  {
    name: "腹部型學員",
    tag: "四肢瘦只有大肚子",
    result: "一年瘦 14 公斤",
    resultColor: "#e74c3c",
    story: "困擾他的不只是肚子，還有慢性發炎、鼻子過敏、蕁麻疹。完全沒有刻意減肥，透過 ABC 代謝力公式，過敏和發炎全部大幅改善。從水桶腰變螞蟻腰。",
    highlight: "完全沒刻意減肥，過敏和發炎全部大幅改善。",
    category: "健康逆轉",
  },
  {
    name: "阿肥",
    tag: "特教老師",
    result: "瘦 20+ 公斤・腰圍 -16cm",
    resultColor: "#e74c3c",
    story: "之前最胖到 100 多公斤，靠自己瘦了 30 幾公斤但又胖回去。在減重班不到一年，腰圍減 16 公分。以前追學生跑都吃力，現在體力比學生還好。",
    category: "大幅改變",
  },
  {
    name: "美國創業者",
    tag: "手肘皮膚問題 30 年",
    result: "意外痊癒",
    resultColor: "#27ae60",
    story: "手肘長期發炎、破皮、流血、發癢，看中醫西醫將近 30 年都無法改善。加入一年後忽然發現——手肘不癢了、不流血了、變得很光滑。",
    highlight: "那一刻他才感受到什麼叫「瘦是健康的附加價值」。",
    category: "健康逆轉",
  },
  {
    name: "Sam",
    tag: "44 歲・工程師",
    result: "三高指標明顯改善",
    resultColor: "#27ae60",
    story: "體檢報告滿江紅，害怕瘦瘦針的副作用。ABC 讓他安全地改善了健康指標。",
    category: "健康逆轉",
  },
];

const CATEGORIES = ["全部", "大幅改變", "健康逆轉", "生活重建"] as const;

export default function TestimonialsPage() {
  const [filter, setFilter] = useState<string>("全部");

  const filtered =
    filter === "全部"
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.category === filter);

  const withImage = filtered.filter((t) => t.image);
  const withoutImage = filtered.filter((t) => !t.image);

  return (
    <section className="pt-10 pb-16 px-5">
      <div className="max-w-2xl mx-auto">
        <p className="text-sm font-semibold text-[#2a9d6f] mb-4 tracking-wide">
          學員見證
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight mb-3">
          跟你一樣的人，後來怎麼了
        </h1>
        <p className="text-[#6b6560] mb-4">
          最能給你信心的，不是最厲害的案例，是最像你的那個人
        </p>
        <p className="text-sm text-[#a8a29e] mb-8">
          四年來超過 3,500 位學員，合計瘦超過 3 萬公斤。以下是部分學員的真實故事。
        </p>

        {/* 篩選 */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-sm px-4 py-2 rounded-full font-medium transition-colors ${
                filter === cat
                  ? "bg-[#2a9d6f] text-white"
                  : "bg-white border border-[#eee9e5] text-[#6b6560] hover:border-[#ddd5cf]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 有照片的 — 大卡片 */}
        <div className="space-y-5">
          {withImage.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#eee9e5] bg-white overflow-hidden"
            >
              <Image
                src={t.image!}
                alt={`${t.name}的改變`}
                width={700}
                height={400}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 700px"
              />
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-lg">{t.name}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#eee9e5] text-[#6b6560]">
                      {t.tag}
                    </span>
                  </div>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-bold shrink-0"
                    style={{
                      backgroundColor: `${t.resultColor}15`,
                      color: t.resultColor,
                    }}
                  >
                    {t.result}
                  </span>
                </div>
                <p className="text-[15px] text-[#6b6560] leading-relaxed mb-3">
                  {t.story}
                </p>
                {t.highlight && (
                  <p className="text-sm font-semibold text-[#2a9d6f] bg-[#f3f9f5] rounded-xl p-3">
                    {t.highlight}
                  </p>
                )}
                {t.articleLink && (
                  <Link
                    href={t.articleLink}
                    className="inline-block mt-3 text-sm text-[#2a9d6f] font-medium hover:underline"
                  >
                    看完整故事 →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 沒照片的 — 小卡片兩欄 */}
        {withoutImage.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-3 mt-5">
            {withoutImage.map((t, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white border border-[#eee9e5]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-8 h-8 rounded-full bg-[#2a9d6f] text-white text-xs flex items-center justify-center font-bold shrink-0">
                    {t.name[0]}
                  </span>
                  <div>
                    <span className="font-bold text-sm">{t.name}</span>
                    <span className="text-xs text-[#a8a29e] ml-1.5">
                      {t.tag}
                    </span>
                  </div>
                </div>
                <span
                  className="inline-block text-xs px-2 py-0.5 rounded-full font-bold mb-2"
                  style={{
                    backgroundColor: `${t.resultColor}15`,
                    color: t.resultColor,
                  }}
                >
                  {t.result}
                </span>
                <p className="text-sm text-[#6b6560] leading-relaxed">
                  {t.story}
                </p>
                {t.highlight && (
                  <p className="text-xs font-semibold text-[#2a9d6f] mt-2">
                    {t.highlight}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <p className="text-center text-[#a8a29e] py-12">
            這個分類還沒有見證
          </p>
        )}

        {/* 團隊合照 */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-[#eee9e5]">
          <Image
            src="/images/team-photo.png"
            alt="ABC 代謝力重建班長大合照"
            width={700}
            height={400}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 700px"
          />
          <div className="p-5 text-center bg-[#faf9f7]">
            <p className="font-bold mb-1">
              這群人加在一起瘦超過{" "}
              <span className="text-[#e74c3c]">300 公斤</span>
            </p>
            <p className="text-sm text-[#6b6560]">
              因為我們都胖過，我們懂胖過的苦。
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-[#2a2520] font-semibold">
            你不是瘦不下來，你只是還沒遇到我們
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/quiz"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white bg-[#2a9d6f] rounded-full shadow-md"
            >
              先測代謝類型 →
            </a>
            <Link
              href="/program"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-[#6b6560] border border-[#eee9e5] rounded-full hover:bg-white transition-colors"
            >
              了解課程
            </Link>
          </div>
          <p className="text-sm text-[#a8a29e]">
            我是一休，陪你健康的瘦一輩子
          </p>
        </div>
      </div>
    </section>
  );
}
