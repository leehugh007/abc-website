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
      {/* Hero — 照片 + 核心定位 */}
      <section className="pt-16 pb-8 px-5">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 rounded-2xl overflow-hidden">
            <Image
              src="/images/founder-transformation.png"
              alt="一休的瘦身前後對比：89公斤到62公斤"
              width={800}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-4">
            我是一休
          </h1>
          <p className="text-lg leading-relaxed text-[#2a2520] border-l-4 border-[#f39c12] pl-5 font-semibold mb-6">
            43 歲，從 89 公斤瘦到 62 公斤。不是天生瘦，是花了 30
            年搞懂身體怎麼運作。而且那個天使，一陪就是 20 年。
          </p>
        </div>
      </section>

      {/* 我的故事 — 痛苦循環→轉折→覺醒 */}
      <section className="pb-12 px-5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">我的故事</h2>

          <div className="space-y-6 text-base leading-[1.9]">
            <p>
              總覺得反正我就是個胖子，每天大吃大喝就是我宣洩壓力的方式。但心深處，我知道自己其實是不開心的。
            </p>

            <div className="bg-[#3498db]/5 rounded-xl p-5 border-l-4 border-[#3498db]">
              <p className="font-semibold text-[#3498db] text-sm mb-2">痛苦的循環</p>
              <p>
                我曾經用過無數方法減肥——市售減重產品讓我心悸失眠、針灸讓我身體虛弱、三餐蘋果讓我營養不良、激烈斷食讓我代謝更差。這些錯誤的方式不但讓我反覆失敗，身體也受到很大傷害，體重甚至變得更重！
              </p>
            </div>

            <div className="bg-[#27ae60]/5 rounded-xl p-5 border-l-4 border-[#27ae60]">
              <p className="font-semibold text-[#27ae60] text-sm mb-2">轉折點</p>
              <p>
                直到某天一個天使走進我的生命中，讓我燃起認真減肥的動力。我半開玩笑地跟她說：如果能成功減到一定的數字，陪我吃一頓飯。
              </p>
              <p className="mt-3 text-lg font-bold text-[#e74c3c]">
                沒想到！我做到了，而且一陪就是 20 年。
              </p>
            </div>

            <p>
              我不是營養師，不是醫生，不是健身教練出身。我是一個胖過、瘦過、復胖過、再瘦回來的普通人。花了 30 年走過的彎路、犯過的錯，讓我終於搞懂一件事——
            </p>

            <p className="text-lg font-bold">
              問題從來不是你不夠努力，而是你一直在跟自己的身體打仗。當你停止打仗，開始跟身體合作的時候，一切都改變了。
            </p>
          </div>

          {/* founder story 圖 */}
          <div className="mt-8 rounded-2xl overflow-hidden border border-[#eee9e5]">
            <Image
              src="/images/founder-story.png"
              alt="一休的瘦身歷程"
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* 我的健康使命 */}
      <section className="py-12 px-5 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">我的健康使命</h2>

          <div className="space-y-6 text-base leading-[1.9]">
            <p>
              <strong className="text-[#e74c3c]">
                我創立 ABC 代謝力重建瘦身法，就是不想讓你們再走我走過的那些彎路。
              </strong>
              20 年的摸索，3000+ 人的驗證，就是為了讓你少走彎路，直接成功。
            </p>

            <p>
              我最不忍心看到的，就是有人還在用我 20 年前的錯誤方法折磨自己。我把所有的經驗都整理好了，就是希望你們不要再受那些苦。
            </p>

            <div className="bg-[#f39c12]/5 rounded-xl p-5 border-l-4 border-[#f39c12]">
              <p className="font-semibold text-[#2a2520]">
                💚 我承諾：絕不讓你走我走過的彎路，如果我的方法不適合你，我會誠實告訴你。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 為什麼我堅持健康瘦身 — 慧敏的故事 */}
      <section className="py-12 px-5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">為什麼我堅持健康瘦身？</h2>
          <p className="text-[#6b6560] mb-8">因為我看到了學員健康改變的感動</p>

          <div className="space-y-6 text-base leading-[1.9]">
            <p>
              在這個追求快速瘦身的時代，到處都是「一個月瘦 10 公斤」、「躺著就能瘦」的誘人廣告。很多人問我：「為什麼你不跟上潮流？為什麼還要堅持這麼『慢』的方法？」
            </p>

            <p>
              我的答案很簡單：<strong className="text-[#e74c3c]">因為我看到了真正健康改變的感動。</strong>
            </p>

            <p>讓我分享一個讓我深深感動的故事——</p>
          </div>

          {/* 慧敏故事 */}
          <div className="mt-8 rounded-2xl border border-[#eee9e5] overflow-hidden">
            <Image
              src="/images/autoimmune-student-before-after.jpeg"
              alt="慧敏的瘦身前後對比：84kg到63.4kg"
              width={700}
              height={400}
              className="w-full h-auto"
            />
            <div className="p-6 space-y-4">
              <div className="bg-[#3498db]/5 rounded-xl p-4">
                <p className="font-semibold text-[#3498db] text-sm mb-2">慧敏的困境</p>
                <p className="text-[15px] text-[#6b6560] leading-relaxed">
                  她有自體免疫疾病，從年輕到現在嘗試無數次減肥都沒成功過。那時候的她，幾乎要放棄自己了。
                </p>
                <p className="italic text-[#3498db] mt-2 text-[15px]">「我是不是永遠都好不了？」</p>
                <p className="text-[15px] text-[#6b6560] mt-2 leading-relaxed">
                  但是，當她聽了我們的說明會，相信這是一個健康的方式，決定給自己最後一次機會。
                </p>
              </div>

              <div className="bg-[#27ae60]/5 rounded-xl p-4">
                <p className="font-semibold text-[#27ae60] text-sm mb-2">一年後的奇蹟</p>
                <p className="text-[15px] text-[#6b6560] leading-relaxed">
                  <strong className="text-[#27ae60]">她瘦了 20 公斤。</strong>但更令人開心的是——她的醫生告訴她：<strong className="text-[#2a2520]">「血液檢查發炎指數有下降，可以先停藥，暫時不用再吃了。」</strong>
                </p>
                <p className="text-xs text-[#a8a29e] mt-1">（她是領有重大傷病卡那種嚴重的程度）</p>
              </div>

              <div className="bg-[#f39c12]/5 rounded-xl p-4">
                <p className="font-semibold text-[#e67e22] text-sm mb-2">重獲新生</p>
                <p className="text-[15px] text-[#6b6560] leading-relaxed">
                  「手指關節也不再腫脹疼痛了！我以前都只能趁沒發作時，手指正常趕快彈彈我喜歡的鋼琴，<strong className="text-[#2a2520]">現在終於可以想彈就彈！</strong>」
                </p>
                <p className="text-[15px] text-[#6b6560] mt-2 leading-relaxed">
                  現在的她，可以開心地跟家人合照，能穿喜歡的洋裝。
                </p>
              </div>

              <p className="text-center font-bold text-[#e74c3c]">
                「我相信我這次一定可以瘦一輩子，而且健康一輩子。」
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-4 text-base leading-[1.9]">
            <p>
              當我看到慧敏從絕望到重燃希望，從痛苦到重獲自由，我就知道：
            </p>
            <p className="text-xl font-bold text-center text-[#3498db] py-4">
              這才是我想做的事情。
            </p>
            <p>
              不是因為我不懂行銷，不是因為我跟不上時代。而是因為我知道，<strong>真正的改變，不只是體重數字的下降，而是整個人生的翻轉。</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ABC 代謝力重建是什麼 */}
      <section className="py-12 px-5 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">ABC 代謝力重建是什麼？</h2>

          <div className="space-y-5 text-base leading-[1.9]">
            <p>不是節食法。不是菜單。不是叫你少吃多動。</p>
            <p>
              ABC 的核心是一件事：<strong>理解你的代謝怎麼運作，然後跟它合作，而不是對抗它。</strong>
            </p>
            <p>
              大多數人減肥失敗，不是因為不努力，是因為方法在對抗身體的本能。你越少吃，身體越省電；你越激烈運動，壓力荷爾蒙越高。你在打一場注定輸的仗。
            </p>
            <p>
              ABC 的方法是反過來——先理解你的身體正在用哪種模式運轉，然後用對應的策略，讓代謝回到正常。<strong>瘦，只是順便的事。</strong>
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            <div className="p-6 rounded-2xl bg-[#faf9f7] border border-[#eee9e5] text-center">
              <div className="text-4xl font-extrabold text-[#e74c3c] mb-2">A</div>
              <div className="font-bold text-lg mb-2">Add 增加</div>
              <p className="text-sm text-[#6b6560] leading-relaxed">
                增加好的食物、好的習慣。不告訴你不能吃什麼，而是教你可以加什麼。壞的自然就會被好的取代。
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#faf9f7] border border-[#eee9e5] text-center">
              <div className="text-4xl font-extrabold text-[#f39c12] mb-2">B</div>
              <div className="font-bold text-lg mb-2">Build 建立</div>
              <p className="text-sm text-[#6b6560] leading-relaxed">
                建立可持續的習慣，不靠意志力撐。當你理解為什麼，正確的選擇會變成本能。
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#faf9f7] border border-[#eee9e5] text-center">
              <div className="text-4xl font-extrabold text-[#27ae60] mb-2">C</div>
              <div className="font-bold text-lg mb-2">Change 改變</div>
              <p className="text-sm text-[#6b6560] leading-relaxed">
                改變代謝模式，讓身體從省電模式、雲霄飛車模式回到穩定燃燒。瘦成為自然的結果。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 我相信的事 */}
      <section className="py-12 px-5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">我相信的事</h2>
          <div className="space-y-4">
            {[
              {
                title: "理解了就會自然去做",
                desc: "不需要意志力，不需要自律。當你真的理解為什麼要這樣吃，你會自然地做出正確的選擇。強迫自己做不了一輩子，但理解可以。",
              },
              {
                title: "加法比減法有效",
                desc: "不告訴你不能吃什麼，而是教你可以加什麼。增加好的，壞的自然就會被取代。你不需要跟食物當敵人。",
              },
              {
                title: "你的問題不是胖，是代謝失調",
                desc: "重建代謝力，瘦只是順便的事。當代謝恢復正常，你的身體會知道該怎麼做。不需要你來指揮它。",
              },
              {
                title: "我不是大師，只是比你早犯錯",
                desc: "我犯過的錯比你能想到的還多。30 年走過的彎路、花過的冤枉錢、傷過的身體——這些錯誤的價值，就是讓你不用再走一次。",
              },
              {
                title: "瘦一輩子，而不是瘦一陣子",
                desc: "任何讓你痛苦的方法都撐不了一輩子。我們要的不是三個月瘦 10 公斤然後復胖，而是找到一種你可以一直過下去的生活方式。",
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

      {/* 也許你還在猶豫 */}
      <section className="py-12 px-5 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold mb-6">也許你還在猶豫...</h2>
          <div className="space-y-4 text-base leading-[1.9] text-[#6b6560]">
            <p>也許你還在想：「我再自己試試看...」</p>
            <p>也許你還在考慮：「要不要用那些快速的方法...」</p>
          </div>
          <div className="mt-6 bg-[#e74c3c]/5 rounded-xl p-5 border-l-4 border-[#e74c3c]">
            <p className="font-semibold text-[#2a2520] mb-3">但我想告訴你：</p>
            <p className="text-[15px] text-[#6b6560] leading-relaxed mb-2">
              ⏰ <strong className="text-[#2a2520]">每多等一個月，就是多一個月的不快樂。</strong>
            </p>
            <p className="text-[15px] text-[#6b6560] leading-relaxed mb-2">
              💔 <strong className="text-[#2a2520]">每多用一種傷身方法，身體就多受一次傷害。</strong>
            </p>
            <p className="text-[15px] font-semibold text-[#3498db] mt-4">
              時間和健康，都是最珍貴的成本。而那些已經開始的人，已經在享受健康改變的快樂了。
            </p>
          </div>
        </div>
      </section>

      {/* CTA — 溫暖的行動呼籲 */}
      <section className="py-16 px-5">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-lg italic text-[#6b6560] mb-6">
            「你不需要再逼自己使用極端方法，也不需要再為一次又一次失敗羞愧。你需要的，是一次正確的開始。」
          </p>
          <h2 className="text-xl font-bold mb-4">
            第一步，了解你的身體正在用哪種模式運轉
          </h2>
          <p className="text-[#6b6560] mb-8">
            8 個生活小問題，30 秒測出你的代謝類型
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://metabolism-quiz.vercel.app"
              className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-gradient-to-r from-[#e74c3c] to-[#f39c12] rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              開始測驗 →
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
        </div>
      </section>
    </>
  );
}
