import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "關於一休與 ABC 代謝力重建",
  description:
    "一休，43 歲，從 89 公斤瘦到 62 公斤。不是天生瘦，是花了 30 年搞懂身體怎麼運作。ABC 代謝力重建瘦身法的故事。",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-12 px-5">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 rounded-2xl overflow-hidden">
            <Image
              src="/images/founder-transformation.png"
              alt="一休的瘦身前後對比"
              width={800}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-6">
            我是一休
          </h1>
          <p className="text-lg leading-relaxed text-[#2a2520] border-l-4 border-[#f39c12] pl-5 font-semibold">
            43 歲，從 89 公斤瘦到 62 公斤。不是天生瘦，是花了 30
            年搞懂身體怎麼運作。
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="pb-12 px-5">
        <div className="max-w-2xl mx-auto space-y-6 text-base leading-[1.9]">
          <p>
            我不是營養師，不是醫生，不是健身教練出身。我是一個胖過、瘦過、復胖過、再瘦回來的普通人。
          </p>
          <p>
            我試過你能想到的所有方法——節食、代餐、瘋狂運動、計算每一口卡路里。有些方法讓我瘦了，但沒有一個讓我「維持住」。每次復胖都比上一次更絕望。
          </p>
          <p>
            直到我開始研究「代謝」這件事。我發現，問題從來不是我不夠努力，而是我一直在跟自己的身體打仗。當我停止打仗，開始跟身體合作的時候，一切都改變了。
          </p>
          <p>
            <strong>
              ABC 代謝力重建瘦身法，就是我把這 30
              年的錯誤、學習、和最後搞懂的事，整理成一套方法。
            </strong>
          </p>
        </div>
      </section>

      {/* What is ABC */}
      <section className="py-12 px-5 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">ABC 代謝力重建是什麼？</h2>

          <div className="space-y-6 text-base leading-[1.9]">
            <p>
              不是節食法。不是菜單。不是叫你少吃多動。
            </p>
            <p>
              ABC
              的核心是一件事：<strong>理解你的代謝怎麼運作，然後跟它合作，而不是對抗它。</strong>
            </p>
            <p>
              大多數人減肥失敗，不是因為不努力，是因為方法在對抗身體的本能。你越少吃，身體越省電；你越激烈運動，壓力荷爾蒙越高。你在打一場注定輸的仗。
            </p>
            <p>
              ABC
              的方法是反過來——先理解你的身體正在用哪種模式運轉，然後用對應的策略，讓代謝回到正常。瘦，只是順便的事。
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[#faf9f7] border border-[#eee9e5] text-center">
              <div className="text-3xl font-extrabold text-[#e74c3c] mb-1">
                A
              </div>
              <div className="font-bold mb-1">Add 增加</div>
              <p className="text-sm text-[#6b6560]">
                增加好的，而不是限制壞的
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#faf9f7] border border-[#eee9e5] text-center">
              <div className="text-3xl font-extrabold text-[#f39c12] mb-1">
                B
              </div>
              <div className="font-bold mb-1">Build 建立</div>
              <p className="text-sm text-[#6b6560]">
                建立可持續的習慣，不靠意志力
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#faf9f7] border border-[#eee9e5] text-center">
              <div className="text-3xl font-extrabold text-[#27ae60] mb-1">
                C
              </div>
              <div className="font-bold mb-1">Change 改變</div>
              <p className="text-sm text-[#6b6560]">
                改變代謝模式，讓瘦成為自然
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-12 px-5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">我相信的事</h2>
          <div className="space-y-4">
            {[
              {
                title: "理解了就會自然去做",
                desc: "不需要意志力，不需要自律。當你真的理解為什麼要這樣吃，你會自然地做出正確的選擇。",
              },
              {
                title: "加法比減法有效",
                desc: "不告訴你不能吃什麼，而是教你可以加什麼。增加好的，壞的自然就會被取代。",
              },
              {
                title: "你的問題不是胖，是代謝失調",
                desc: "重建代謝力，瘦只是順便的事。當代謝恢復正常，你的身體會知道該怎麼做。",
              },
              {
                title: "我不是大師，只是比你早犯錯",
                desc: "我犯過的錯比你能想到的還多。這些錯誤的價值，就是讓你不用再走一次。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white border border-[#eee9e5]"
              >
                <div className="font-bold mb-2">{item.title}</div>
                <p className="text-sm text-[#6b6560] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-4">
            想知道你的身體正在用哪種模式運轉？
          </h2>
          <p className="text-[#6b6560] mb-8">
            8 個生活小問題，30 秒測出你的代謝類型
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
