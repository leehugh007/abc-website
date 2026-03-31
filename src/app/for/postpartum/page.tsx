import type { Metadata } from "next";
import Link from "next/link";
import { StickyLineCTA } from "@/app/sticky-line-cta";

export const metadata: Metadata = {
  title: "產後瘦不回來？不是你不努力，是荷爾蒙在扯後腿",
  description:
    "產後體重回不去、沒時間運動、帶小孩壓力大。問題不在你，是產後荷爾蒙變化讓代謝系統失調。ABC 代謝重建瘦身法，幫你從根本解決。",
};

export default function PostpartumPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-12 px-5">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-brand mb-4 tracking-wide">
            給產後媽媽
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight mb-6">
            產後瘦不回來？
            <br />
            <span className="text-brand">不是你不努力，是荷爾蒙在扯後腿</span>
          </h1>
          <div className="text-lg text-subtle leading-relaxed mb-10 max-w-lg space-y-2">
            <p>生完孩子半年了，體重還在原地不動。</p>
            <p>每天忙到連好好吃頓飯的時間都沒有，更別說運動。</p>
            <p>
              看著鏡子裡的自己，覺得
              <strong className="text-ink">這個身體不像自己的</strong>。
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              30 秒測出你的代謝類型 →
            </Link>
            <a
              href="https://lin.ee/x41s2Su"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-line-green rounded-full shadow-lg hover:shadow-xl transition-shadow"
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
          <p className="text-subtle mb-8">
            每一種都有人告訴你有效，但每一種都讓你更挫折。
          </p>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl border border-edge">
              <div className="font-bold mb-2">產後束腹帶</div>
              <p className="text-[15px] text-subtle leading-relaxed">
                束腹帶處理的是外觀，不是脂肪。就像用橡皮筋綁住水球——放開之後什麼都沒變。真正需要處理的是讓你囤脂肪的那個荷爾蒙機制。
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-edge">
              <div className="font-bold mb-2">少吃多動</div>
              <p className="text-[15px] text-subtle leading-relaxed">
                帶小孩已經累到不行了，哪來的時間運動？而且產後本來就需要營養恢復，少吃只會讓代謝更差、奶量更少。你越少吃，身體越進入省電模式，反而更難瘦。
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-edge">
              <div className="font-bold mb-2">代餐 / 酵素</div>
              <p className="text-[15px] text-subtle leading-relaxed">
                哺乳期不敢亂吃，但又想做點什麼。代餐的問題是——它讓你用假食物替代真食物，身體得不到需要的營養素。一停就全部胖回來，因為你的代謝完全沒有被修復。
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-edge">
              <div className="font-bold mb-2">等孩子大一點再說</div>
              <p className="text-[15px] text-subtle leading-relaxed">
                很多媽媽心想：等孩子上學了、等有時間了再來減。但代謝失調不會因為你等而自己好起來——拖越久，胰島素阻抗越嚴重，之後要花更多力氣。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 問題不在你 */}
      <section className="py-16 px-5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">
            問題不在你，在你的荷爾蒙
          </h2>
          <div className="space-y-5 text-base leading-[1.9]">
            <p>
              產後的身體經歷了巨大的荷爾蒙變化。雌激素和黃體素劇烈波動、泌乳激素升高、甲狀腺功能可能暫時失調。這些都是正常的——但它們會讓你的代謝系統進入「儲存模式」。
            </p>

            <div className="bg-[#fef9f0] rounded-xl p-5 border-l-4 border-warning">
              <p className="font-bold text-warning text-sm mb-2">
                產後媽媽的三重打擊
              </p>
              <div className="space-y-3 text-[15px] text-subtle">
                <p>
                  <strong className="text-ink">睡眠不足</strong>
                  ：半夜餵奶、哄睡，長期睡眠剝奪讓皮質醇（壓力荷爾蒙）居高不下。皮質醇一高，身體就進入「備戰模式」，拼命囤脂肪。
                </p>
                <p>
                  <strong className="text-ink">壓力大</strong>
                  ：照顧新生兒的焦慮、家庭責任、可能的產後情緒低落——這些壓力都會加重皮質醇分泌，進一步推升胰島素。
                </p>
                <p>
                  <strong className="text-ink">飲食混亂</strong>
                  ：有什麼吃什麼、隨便扒兩口、用甜食補充體力。血糖像坐雲霄飛車一樣忽上忽下，胰島素每天都在加班。
                </p>
              </div>
            </div>

            <p>
              當皮質醇和胰島素同時過高，你的身體會進入
              <strong>脂肪儲存模式</strong>
              ——不管你吃多少，它都傾向把能量存起來而不是燃燒掉。這不是意志力的問題，是生理機制。
            </p>
          </div>

          <div className="mt-8 p-5 rounded-2xl bg-white border border-edge">
            <p className="text-xs font-semibold text-muted tracking-wider mb-3">
              延伸閱讀
            </p>
            <div className="space-y-2">
              <Link
                href="/concepts/cortisol"
                className="block text-sm text-brand font-medium hover:underline"
              >
                皮質醇：讓你越忙越胖的壓力荷爾蒙 →
              </Link>
              <Link
                href="/concepts/insulin-resistance"
                className="block text-sm text-brand font-medium hover:underline"
              >
                胰島素阻抗：為什麼吃很少還是瘦不下來？ →
              </Link>
              <Link
                href="/concepts/ghrelin"
                className="block text-sm text-brand font-medium hover:underline"
              >
                飢餓素：為什麼你總是覺得餓？ →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABC 怎麼幫你 */}
      <section className="py-16 px-5 bg-brand-dark text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3 text-center">
            ABC 怎麼幫產後媽媽？
          </h2>
          <p className="text-center text-white/70 mb-12">
            不用額外擠時間運動，不用餓肚子，從你現在的生活開始調整就好。
          </p>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-white/10 border border-white/15">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-extrabold text-danger">A</span>
                <div>
                  <div className="font-bold text-lg">Add 加營養</div>
                  <div className="text-sm text-white/60">帶小孩也能做到的加法</div>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                不叫你少吃——你已經夠累了。先從增加蛋白質開始：早餐加顆蛋、午餐多一份肉。哺乳期更需要好的營養，
                <strong className="text-white">吃對的食物，奶量不會少，代謝反而會變好。</strong>
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 border border-white/15">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-extrabold text-amber">B</span>
                <div>
                  <div className="font-bold text-lg">Behavior 調體質</div>
                  <div className="text-sm text-white/60">不需要上健身房的行為調整</div>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                帶孩子散步就是運動。調整進食順序——先吃菜、再吃肉、最後吃飯。光是這個順序，血糖就少飆 35%。
                <strong className="text-white">
                  能在帶孩子的零碎時間裡做到的改變，才是真正可以持續的改變。
                </strong>
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 border border-white/15">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-extrabold text-success">C</span>
                <div>
                  <div className="font-bold text-lg">Clear 輕負擔</div>
                  <div className="text-sm text-white/60">減輕身體和心理的壓力</div>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                先減掉那杯安慰用的含糖飲料和宵夜。但更重要的是——
                <strong className="text-white">
                  放下「我應該馬上瘦回來」的壓力。
                </strong>
                你的身體剛完成一件偉大的事，給它時間，用對方法，它會回來的。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 學員故事 */}
      <section className="py-16 px-5 bg-surface-green">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3">
            跟你一樣的媽媽，後來怎麼了
          </h2>
          <p className="text-center text-subtle mb-10">
            她們也曾經覺得不可能，但她們做到了
          </p>

          {/* 溫溫 */}
          <div className="rounded-2xl border border-edge overflow-hidden mb-6 bg-white">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-lg">溫溫</span>
                <span className="text-sm text-muted">40 歲・文字工作者・媽媽</span>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="text-xs px-2 py-0.5 rounded-full bg-danger/10 text-danger font-medium">
                  80kg → 60kg
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-success/10 text-success font-medium">
                  偏頭痛消失
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-info/10 text-info font-medium">
                  唇炎改善
                </span>
              </div>
              <blockquote className="text-[15px] leading-relaxed text-subtle border-l-3 border-amber pl-4 mb-3 italic">
                「產後五年一直胖，偏頭痛和唇炎反覆發作。花了兩年的時間，用 ABC 的方式慢慢調整，瘦了 20 公斤，身體的毛病也跟著消失了。」
              </blockquote>
              <p className="text-sm text-subtle leading-relaxed">
                產後五年，體重一路來到將近 80 公斤。不只是胖，偏頭痛和唇炎反覆發作，身體到處都在發炎。她用了兩年的時間，不急不躁，一步一步跟著 ABC 的節奏走。最後不只瘦了 20 公斤，那些困擾她多年的身體問題也跟著好了。
              </p>
              <div className="mt-4">
                <Link
                  href="/articles/wenwen-mom-story"
                  className="text-sm text-brand font-medium hover:underline"
                >
                  看溫溫的完整故事 →
                </Link>
              </div>
            </div>
          </div>

          {/* 四寶媽 */}
          <div className="rounded-2xl border border-edge overflow-hidden bg-white">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-lg">四寶媽</span>
                <span className="text-sm text-muted">四個小孩的媽</span>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="text-xs px-2 py-0.5 rounded-full bg-success/10 text-success font-medium">
                  腹部明顯縮小
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-info/10 text-info font-medium">
                  不再需要甜食舒壓
                </span>
              </div>
              <blockquote className="text-[15px] leading-relaxed text-subtle border-l-3 border-amber pl-4 mb-3 italic">
                「已經失敗很多次了，我真的不想再這樣一直反覆復胖。這次一定要成功，為了孩子，也為了自己！」
              </blockquote>
              <p className="text-sm text-subtle leading-relaxed">
                四個小孩、沒有自己的時間、壓力大到只能用甜食舒壓。但她決定這是最後一次。跟著 ABC 調整飲食結構，腹部明顯縮小，更重要的是——她不再需要靠甜食來撐過每一天了。
              </p>
              <div className="mt-4">
                <Link
                  href="/testimonials"
                  className="text-sm text-brand font-medium hover:underline"
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
            先了解一下，不急
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/articles/willpower-myth"
              className="block p-5 rounded-2xl border border-edge hover:shadow-sm transition-shadow"
            >
              <div className="font-bold mb-1">管不住嘴就是沒意志力？</div>
              <p className="text-sm text-subtle">
                讓科學來打臉這句話。你的問題不是意志力，是荷爾蒙。
              </p>
            </Link>

            <Link
              href="/articles/rebound-weight-science"
              className="block p-5 rounded-2xl border border-edge hover:shadow-sm transition-shadow"
            >
              <div className="font-bold mb-1">為什麼每次瘦下來都會復胖？</div>
              <p className="text-sm text-subtle">
                復胖不是因為你不堅持，是因為方法在跟你的身體打仗。
              </p>
            </Link>

            <Link
              href="/articles/eating-order-blood-sugar"
              className="block p-5 rounded-2xl border border-edge hover:shadow-sm transition-shadow"
            >
              <div className="font-bold mb-1">換個順序吃，血糖少飆 35%</div>
              <p className="text-sm text-subtle">
                不用改菜單，光是調整吃飯順序就有明顯差異。帶孩子的媽媽最適合。
              </p>
            </Link>

            <Link
              href="/articles/ozempic-complete-guide"
              className="block p-5 rounded-2xl border border-edge hover:shadow-sm transition-shadow"
            >
              <div className="font-bold mb-1">瘦瘦針完整指南</div>
              <p className="text-sm text-subtle">
                在考慮瘦瘦針嗎？先了解它的原理、效果、和停針後會發生什麼。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-5">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-lg text-subtle mb-2">
            你已經為孩子付出了所有。
          </p>
          <h2 className="text-xl font-bold mb-4">
            現在，花 30 秒為自己做一件事
          </h2>
          <p className="text-subtle mb-8">
            測出你的代謝類型，了解你的身體現在需要什麼
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-brand rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              30 秒代謝測驗 →
            </Link>
            <a
              href="https://lin.ee/x41s2Su"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-line-green rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              加入一休的 LINE →
            </a>
          </div>
          <div className="border-t border-edge pt-8">
            <p className="text-sm text-muted mb-4">想先多了解一些？</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/method"
                className="text-sm font-medium text-brand hover:underline"
              >
                了解 ABC 是什麼 →
              </Link>
              <Link
                href="/program"
                className="text-sm font-medium text-brand hover:underline"
              >
                12 週課程介紹 →
              </Link>
            </div>
          </div>
          <p className="mt-10 text-sm text-muted">
            我是一休，陪你健康的瘦一輩子
          </p>
        </div>
      </section>

      <StickyLineCTA />
    </>
  );
}
