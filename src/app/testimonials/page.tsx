import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "學員見證｜跟你一樣的人，後來怎麼了",
  description:
    "3500+ 位學員，合計瘦超過 3 萬公斤。從三寶媽到工程師，從自體免疫到產後肥胖，他們不是天生瘦，只是比你早學會這套方法。",
};

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
    story: "暴食症、憂鬱症，把自己關在家裡六年。甚至跟老公說可能這輩子都瘦不下來了，想去做減肥手術。後來聽了說明會，決定給自己最後一次機會。一年半瘦超過 60 公斤，因為用健康的方式，搭配正確運動和蛋白質攝取，體態維持得非常好，沒有大量皮膚下垂。",
    highlight: "你如果要減 5 公斤、8 公斤、10 公斤，其實都是她的零頭。",
    articleLink: "/articles/socks-story-62kg",
    category: "大幅改變",
  },
  {
    name: "慧敏",
    tag: "自體免疫疾病・重大傷病卡",
    result: "84 → 63 公斤＋停藥",
    resultColor: "#27ae60",
    story: "類風濕性關節炎，關節腫到沒辦法彎曲、很痛，連最喜歡的鋼琴都沒辦法彈。從年輕到現在嘗試無數次減肥都沒成功過，幾乎要放棄自己了。加入後重新建立代謝系統、移除容易讓身體發炎的飲食內容，一年瘦了 20 公斤以上。更開心的是——醫生說血液中的發炎指數降下來了，可以暫時停藥。",
    highlight: "「手指關節不再腫脹疼痛了！現在終於可以想彈鋼琴就彈！」",
    image: "/images/autoimmune-student-before-after.jpeg",
    category: "健康逆轉",
  },
  {
    name: "沛蓁",
    tag: "科技業",
    result: "85 → 67 公斤",
    resultColor: "#e74c3c",
    story: "在百貨公司專櫃，店員笑著問：「小姐，這是你兒子嗎？」她愣住了，老公也愣住了。那個傷口從此就在那裡。血壓正常了、鼻過敏消了、偏頭痛沒了。她不想當被照顧的那一方，想和先生並肩同行。",
    highlight: "那碗雞湯征服了他的胃，但她不想再被誤認為他媽媽。",
    articleLink: "/articles/chicken-soup-love-story",
    category: "生活重建",
  },
  {
    name: "美美",
    tag: "7年級生・業務+進修生",
    result: "體重 -21.8kg・體脂 -16%",
    resultColor: "#e74c3c",
    story: "從差點破百到現在 7 字頭，歷經六期課程的堅持。不只是體重下降——血壓、血脂、糖化血色素全部恢復正常，內臟脂肪從中重度變成沒有脂肪肝。",
    highlight: "「我要選擇一個雖然速度比較慢，但是可以維持一輩子的方式，健康瘦下來。」",
    image: "/images/meimei-transformation.jpg",
    category: "大幅改變",
  },
  {
    name: "慧蘭",
    tag: "53 歲・美國大學教授",
    result: "比 7 年前更年輕",
    resultColor: "#2a9d6f",
    story: "生過兩個小孩，個子嬌小，在美國大家都覺得她很瘦。但她一直覺得肚子和臀部很大，整年穿長袖外套遮掩。用過很多方式，總是只能瘦一陣子又胖回來。在我們這邊近三年，從 45 歲到 53 歲——七年後變得比七年前更年輕、體態更好。最近還在練翹臀。",
    highlight: "一個 53 歲、生過兩個小孩的媽媽，只要用對方式，幾歲都可以。",
    category: "生活重建",
  },
  {
    name: "溫溫",
    tag: "40 歲・文字工作者",
    result: "80 → 60 公斤",
    resultColor: "#e74c3c",
    story: "工作需要三不五時吃美食，體重一路來到近 80 公斤。高血壓前期，伴隨慢性身體各處發炎、頭痛、體力差。老公說她這樣剛剛好，她差點就信了。直到有一天突然人間清醒——要為自己而瘦。3 個月後，婚前的小裙子不僅穿下了，而且是「選擇繼續穿下」。",
    highlight: "「曾經被溫柔的安慰話術麻痺，直到有一天突然人間清醒。」",
    image: "/images/wenwen-before.jpg",
    category: "生活重建",
  },
  {
    name: "四寶媽",
    tag: "全職媽媽",
    result: "三個月肚子消風",
    resultColor: "#e67e22",
    story: "生了四個小孩之後肚子一直很大，試過很多方式都沒用。非常認真照著方法執行，三個月的時間，肚子像消風一樣。以前家族旅遊都不敢拍照，只能躲最後一個。",
    highlight: "終於可以在家族旅遊開心拍照，成為一個辣媽。",
    category: "大幅改變",
  },
  {
    name: "腹部型學員",
    tag: "四肢瘦只有大肚子",
    result: "一年瘦 14 公斤",
    resultColor: "#e74c3c",
    story: "穿衣服看不太出來肥胖。困擾他的不只是肚子，還有慢性發炎、鼻子過敏、蕁麻疹、皮膚過敏。在完全沒有刻意減肥、沒有特別運動的情況下，透過 ABC 代謝力公式去加營養、調體質、清負擔，一年瘦了 14 公斤。蕁麻疹、皮膚問題、便秘、大肚子全部都改善。",
    highlight: "完全沒刻意減肥，從水桶腰變螞蟻腰。過敏和發炎全部大幅改善。",
    category: "健康逆轉",
  },
  {
    name: "阿肥",
    tag: "特教老師",
    result: "瘦 20+ 公斤・腰圍 -16cm",
    resultColor: "#e74c3c",
    story: "之前最胖到 100 多公斤，靠自己瘦了 30 幾公斤但又胖回去。說已經沒辦法像以前一樣靠瘋狂運動來減肥了。在減重班不到一年，腰圍減 16 公分。以前追學生跑都很吃力，現在體力比學生還好。",
    highlight: "想像身體背了十幾公斤的沙袋忽然被放開來了。",
    category: "大幅改變",
  },
  {
    name: "美國創業者",
    tag: "手肘皮膚問題 30 年",
    result: "意外痊癒",
    resultColor: "#27ae60",
    story: "隨著創業壓力體重增加，每一次復胖都比上一次更胖。手肘長期發炎、破皮、流血、發癢，看中醫西醫看了將近 30 年都無法改善，本來覺得一輩子都甩不掉。加入一年後有一天忽然發現——手肘不癢了、不流血了、變得很光滑。",
    highlight: "那一刻他才真正感受到什麼叫做「瘦是健康的附加價值」。",
    category: "健康逆轉",
  },
  {
    name: "小維",
    tag: "35 歲・上班族",
    result: "胃食道逆流大幅改善",
    resultColor: "#27ae60",
    story: "減肥藥讓胃酸逆流更嚴重，ABC 不但讓她瘦了，胃食道逆流也大幅改善了。",
    category: "健康逆轉",
  },
  {
    name: "小魚",
    tag: "31 歲・護理師",
    result: "不規律作息中維持健康",
    resultColor: "#2a9d6f",
    story: "每天照顧病人，卻連自己的健康都顧不好。終於找到適合醫護人員不規律作息的方法。",
    category: "生活重建",
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
        <p className="text-sm text-[#a8a29e] mb-10">
          四年來超過 3,500 位學員，合計瘦超過 3 萬公斤。以下是部分學員的真實故事。
        </p>

        {/* 見證卡片 */}
        <div className="space-y-4">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#eee9e5] bg-white overflow-hidden"
            >
              {t.image && (
                <Image
                  src={t.image}
                  alt={`${t.name}的改變`}
                  width={700}
                  height={400}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 700px"
                />
              )}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-lg">{t.name}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#eee9e5] text-[#6b6560]">{t.tag}</span>
                  </div>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-bold shrink-0"
                    style={{ backgroundColor: `${t.resultColor}15`, color: t.resultColor }}
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
              這群人加在一起瘦超過 <span className="text-[#e74c3c]">300 公斤</span>
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
              href="https://metabolism-quiz.vercel.app"
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
          <p className="text-sm text-[#a8a29e]">我是一休，陪你健康的瘦一輩子</p>
        </div>
      </div>
    </section>
  );
}
