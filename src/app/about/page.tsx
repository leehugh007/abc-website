import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "關於一休與 ABC 代謝力重建",
  description:
    "一休，43 歲，從 89 公斤瘦到 62 公斤。不是天生瘦，是花了 30 年搞懂身體怎麼運作。ABC 代謝力重建瘦身法的故事。",
};

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero — 一休是誰 */}
      <section className="pt-12 pb-8 px-5">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 rounded-2xl overflow-hidden">
            <Image
              src="/images/founder-transformation.jpg"
              alt="一休的瘦身前後對比：89公斤到62公斤"
              width={800}
              height={400}
              className="w-full h-auto"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-4">
            我是一休
          </h1>
          <p className="text-lg leading-relaxed text-[#2a2520] border-l-4 border-[#2a9d6f] pl-5 font-semibold mb-6">
            43 歲，從 89 公斤瘦到 62 公斤。不是天生瘦，是花了 30
            年搞懂身體怎麼運作。而且那個天使，一陪就是 20 年。
          </p>
        </div>
      </section>

      {/* 2. 我的故事 — 精簡版 */}
      <section className="pb-8 px-5">
        <div className="max-w-2xl mx-auto space-y-5 text-base leading-[1.9]">
          <p>
            總覺得反正我就是個胖子，每天大吃大喝就是我宣洩壓力的方式。但心深處，我知道自己其實是不開心的。
          </p>

          <div className="bg-[#3498db]/5 rounded-xl p-5 border-l-4 border-[#3498db]">
            <p className="font-semibold text-[#3498db] text-sm mb-2">痛苦的循環</p>
            <p>
              市售減重產品讓我心悸失眠、針灸讓我身體虛弱、三餐蘋果讓我營養不良、激烈斷食讓我代謝更差。這些方式不但讓我反覆失敗，體重甚至變得更重！
            </p>
          </div>

          <div className="bg-[#27ae60]/5 rounded-xl p-5 border-l-4 border-[#27ae60]">
            <p className="font-semibold text-[#27ae60] text-sm mb-2">轉折點</p>
            <p>
              直到某天一個天使走進我的生命中。我半開玩笑地跟她說：如果能成功減到一定的數字，陪我吃一頓飯。
            </p>
            <p className="mt-3 text-lg font-bold text-[#2a9d6f]">
              沒想到！我做到了，而且一陪就是 20 年。
            </p>
          </div>

          <blockquote className="py-6 my-2">
            <p className="text-2xl sm:text-3xl font-extrabold leading-snug text-[#1a5e3f]">
              問題從來不是你不夠努力，<br />而是你一直在跟自己的身體打仗。
            </p>
            <p className="mt-3 text-base text-[#6b6560]">
              當你停止打仗，開始跟身體合作的時候，一切都改變了。
            </p>
          </blockquote>

          <div className="rounded-2xl overflow-hidden border border-[#eee9e5]">
            <Image
              src="/images/founder-story.png"
              alt="一休的瘦身歷程"
              width={800}
              height={400}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        </div>
      </section>

      {/* 2.5 為什麼做 ABC */}
      <section className="py-12 px-5">
        <div className="max-w-2xl mx-auto space-y-5 text-base leading-[1.9]">
          <h2 className="text-2xl font-bold mb-2">為什麼做 ABC？</h2>

          <p>
            我自己瘦下來之後，開始有人問我怎麼做到的。一個、兩個、十個、一百個。
          </p>

          <p>
            聽多了我發現，<strong>每個人的故事幾乎都一樣</strong>：試過節食、試過代餐、試過少吃多動、試過瘦瘦針。一開始有效，後來復胖，然後覺得是自己的問題。
          </p>

          <p>
            不是。是方法的問題。
          </p>

          <p>
            我花了很長的時間去研究，為什麼這些方法最終都會失敗。答案都指向同一件事：<strong>它們在跟身體打仗，而你的身體永遠會贏。</strong>
          </p>

          <p>
            你越少吃，身體越省電。你越壓抑食慾，荷爾蒙反撲越兇。你越激烈運動，壓力荷爾蒙越高。
          </p>

          <p>
            真正有效的方式不是對抗身體，是<strong>理解它、跟它合作</strong>。
          </p>

          <p>
            理解胰島素怎麼運作、理解代謝適應是什麼、理解你的飢餓不是因為貪吃而是荷爾蒙在推你。搞懂了這些，正確的選擇變成本能，不需要忍耐、不需要意志力。
          </p>

          <div className="bg-[#2a9d6f]/5 rounded-xl p-5 border-l-4 border-[#2a9d6f]">
            <p className="font-semibold text-[#2a9d6f] text-sm mb-2">ABC 存在的理由</p>
            <p className="font-bold">
              我不想再看到有人因為用了錯的方法而覺得是自己的問題。問題不在你，在方法。ABC 就是要給你一個不跟身體打仗的方法。
            </p>
          </div>
        </div>
      </section>

      {/* 3. ABC 是什麼 — 精簡版，詳細在 /method */}
      <section className="py-12 px-5 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">ABC 代謝力重建是什麼？</h2>
          <div className="space-y-5 text-base leading-[1.9]">
            <p>不是節食法、不是菜單、不是叫你少吃多動。</p>
            <p>
              ABC 的核心：<strong>理解你的代謝怎麼運作，然後跟它合作，而不是對抗它。</strong>你越少吃，身體越省電；你越激烈運動，壓力荷爾蒙越高。ABC 反過來——先理解你的身體正在用哪種模式運轉，然後讓代謝回到正常。<strong>瘦，只是順便的事。</strong>
            </p>
            <p className="text-lg font-bold text-[#1a5e3f]">
              <span className="text-[#e74c3c]">A</span> 加營養 · <span className="text-[#f39c12]">B</span> 調體質 · <span className="text-[#27ae60]">C</span> 輕負擔 — 三件事，12 週。
            </p>
          </div>
          <div className="mt-6">
            <Link href="/method" className="text-[#2a9d6f] font-semibold hover:underline text-sm">
              了解完整的 ABC 方法 →
            </Link>
          </div>
        </div>
      </section>

      {/* 4. 學員故事 — 跟你一樣的人 */}
      <section className="py-12 px-5 bg-[#f3f9f5]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3">跟你一樣的人，後來怎麼了</h2>
          <p className="text-center text-[#6b6560] mb-10">
            這些不是完美的成功案例，是真實的改變故事
          </p>

          {/* 慧敏 */}
          <div className="rounded-2xl border border-[#eee9e5] overflow-hidden mb-8 bg-white">
            <Image
              src="/images/autoimmune-student-before-after.jpeg"
              alt="慧敏：84kg到63.4kg，自體免疫疾病停藥"
              width={700}
              height={400}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 700px"
            />
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-lg">慧敏</span>
                <span className="text-sm text-[#a8a29e]">自體免疫疾病・重大傷病卡</span>
              </div>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#e74c3c]/10 text-[#e74c3c] font-medium">84kg → 63.4kg</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#27ae60]/10 text-[#27ae60] font-medium">醫生同意停藥</span>
              </div>
              <p className="text-[15px] text-[#6b6560] leading-relaxed">
                她有自體免疫疾病，嘗試無數次減肥都沒成功，幾乎要放棄自己。一年後瘦了 20 公斤，醫生說發炎指數下降可以停藥。手指關節不再腫脹，終於可以想彈鋼琴就彈。
              </p>
              <p className="text-sm font-semibold text-[#2a9d6f] text-center pt-2">
                「我相信我這次一定可以瘦一輩子，而且健康一輩子。」
              </p>
            </div>
          </div>

          {/* 單親媽媽 */}
          <div className="rounded-2xl border border-[#eee9e5] overflow-hidden mb-8 bg-white">
            <div className="grid grid-cols-2 gap-0">
              <div className="relative">
                <Image src="/images/student-success-1.jpeg" alt="單親媽媽減重前" width={350} height={400} className="w-full h-full object-cover" sizes="(max-width: 768px) 50vw, 350px" />
                <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">減重前</span>
              </div>
              <div className="relative">
                <Image src="/images/student-success-2.jpeg" alt="單親媽媽減重後" width={350} height={400} className="w-full h-full object-cover" sizes="(max-width: 768px) 50vw, 350px" />
                <span className="absolute bottom-2 left-2 bg-[#27ae60]/80 text-white text-xs px-2 py-1 rounded">減重後</span>
              </div>
            </div>
            <div className="p-6">
              <span className="font-bold text-lg">50 歲單親媽媽</span>
              <p className="text-sm text-[#6b6560] mt-2 leading-relaxed">
                生了兩胎後一直瘦不回來，先生突然去世後決定為了孩子找回健康。從只能穿又長又寬的衣服，到自信穿合身洋裝，成為孩子的驕傲。
              </p>
            </div>
          </div>

          {/* 四寶媽 */}
          <div className="rounded-2xl border border-[#eee9e5] overflow-hidden mb-8 bg-white">
            <div className="grid grid-cols-2 gap-0">
              <div className="relative">
                <Image src="/images/IMG_7574.jpeg" alt="四寶媽減重前" width={350} height={400} className="w-full h-full object-cover" sizes="(max-width: 768px) 50vw, 350px" />
                <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">減重前</span>
              </div>
              <div className="relative">
                <Image src="/images/IMG_7575.jpeg" alt="四寶媽減重後" width={350} height={400} className="w-full h-full object-cover" sizes="(max-width: 768px) 50vw, 350px" />
                <span className="absolute bottom-2 left-2 bg-[#27ae60]/80 text-white text-xs px-2 py-1 rounded">減重後</span>
              </div>
            </div>
            <div className="p-6">
              <span className="font-bold text-lg">四寶媽的最後一次瘦身</span>
              <blockquote className="text-[15px] text-[#6b6560] border-l-3 border-[#f39c12] pl-4 mt-2 italic leading-relaxed">
                「已經失敗很多次了，我真的不想再這樣一直反覆復胖。這次一定要成功，為了孩子，也為了自己！」
              </blockquote>
              <p className="text-sm font-semibold text-[#27ae60] mt-3">
                ✨ 腹部明顯縮小・不再需要甜食舒壓・不再擔心暴飲暴食
              </p>
            </div>
          </div>

          {/* 團隊 */}
          <div className="rounded-2xl overflow-hidden border border-[#eee9e5]">
            <Image src="/images/team-photo.png" alt="ABC 班長大合照" width={700} height={400} className="w-full h-auto" sizes="(max-width: 768px) 100vw, 700px" />
            <div className="p-5 text-center bg-white">
              <p className="font-bold mb-1">這群人加在一起瘦超過 <span className="text-[#e74c3c]">300 公斤</span></p>
              <p className="text-sm text-[#6b6560]">因為我們都胖過，我們懂胖過的苦</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 我相信的事 — 精簡到 3 條 */}
      <section className="py-16 px-5 bg-[#1a5e3f] text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">我相信的事</h2>
          <div className="space-y-4">
            {[
              {
                title: "理解了就會自然去做",
                desc: "不需要意志力。當你真的理解為什麼要這樣吃，正確的選擇會變成本能。",
              },
              {
                title: "加法比減法有效",
                desc: "不告訴你不能吃什麼，教你可以加什麼。增加好的，壞的自然被取代。",
              },
              {
                title: "瘦一輩子，而不是瘦一陣子",
                desc: "任何讓你痛苦的方法都撐不了一輩子。我們要的是一種你可以一直過下去的生活方式。",
              },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/10 border border-white/15">
                <div className="font-bold mb-2">{item.title}</div>
                <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA — 溫暖的邀請 */}
      <section className="py-16 px-5">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-lg text-[#6b6560] mb-6">
            你不需要準備好才開始。你只需要開始，然後慢慢變好。
          </p>
          <h2 className="text-xl font-bold mb-4">
            第一步，了解你的身體正在用哪種模式運轉
          </h2>
          <p className="text-[#6b6560] mb-8">
            8 個生活小問題，30 秒測出你的代謝類型
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/quiz"
              className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-[#2a9d6f] rounded-full shadow-lg hover:shadow-xl transition-shadow"
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
