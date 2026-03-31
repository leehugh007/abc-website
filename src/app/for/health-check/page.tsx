import type { Metadata } from "next";
import Link from "next/link";
import { StickyLineCTA } from "@/app/sticky-line-cta";

export const metadata: Metadata = {
  title: "健檢紅字越來越多？吃藥只壓數字，沒解決根本問題",
  description:
    "膽固醇、血壓、血糖的紅字，根源都是慢性發炎和胰島素阻抗。ABC 代謝重建瘦身法，從代謝系統根本解決健康問題。",
};

export default function HealthCheckPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-12 px-5">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-brand mb-4 tracking-wide">
            給健檢報告開始亮紅燈的你
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight mb-6">
            健檢紅字越來越多？
            <br />
            <span className="text-brand">問題不在個別數字，在你的代謝系統</span>
          </h1>
          <div className="text-lg text-subtle leading-relaxed mb-10 max-w-lg space-y-2">
            <p>每年健檢，紅字比去年多了幾個。</p>
            <p>醫生說「要注意飲食」，但不知道具體要怎麼改。</p>
            <p>
              吃了藥數字壓下來了，但你知道
              <strong className="text-ink">根本問題還在那裡</strong>。
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
            醫生叫你注意，你也認真試了。但怎麼好像沒什麼用？
          </p>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl border border-edge">
              <div className="font-bold mb-2">少油少鹽飲食</div>
              <p className="text-[15px] text-subtle leading-relaxed">
                膽固醇高就不吃蛋、血壓高就少放鹽、三酸甘油酯高就少碰油。聽起來合理，但你的身體 70-80% 的膽固醇是自己做的，跟你吃了幾顆蛋關係不大。真正讓這些數字飆高的，是你的胰島素和慢性發炎。
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-edge">
              <div className="font-bold mb-2">吃保健食品</div>
              <p className="text-[15px] text-subtle leading-relaxed">
                魚油、紅麴、納豆激酶⋯吃了一堆，數字有動嗎？保健食品處理的是表面症狀，但如果你的代謝系統一直在發炎，靠保健食品就像用水桶接漏水——你需要的是修那個漏洞。
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-edge">
              <div className="font-bold mb-2">靠藥物控制</div>
              <p className="text-[15px] text-subtle leading-relaxed">
                降血壓藥、降血糖藥、降膽固醇的 statin——藥物可以壓數字，但它沒有在修你的代謝。就像儀表板上的警告燈亮了，你把燈泡拔掉。燈不亮了，但引擎的問題還在。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 問題不在你 */}
      <section className="py-16 px-5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">
            這些紅字，其實都指向同一件事
          </h2>
          <div className="space-y-5 text-base leading-[1.9]">
            <p>
              膽固醇偏高、血壓偏高、血糖偏高、三酸甘油酯偏高、尿酸偏高。看起來是五個問題，但它們的根源往往是同一件事：
              <strong>慢性發炎 + 胰島素阻抗</strong>。
            </p>

            <div className="bg-surface-green rounded-xl p-5 border-l-4 border-brand">
              <p className="font-bold text-brand-dark text-sm mb-2">
                什麼是胰島素阻抗？
              </p>
              <p className="text-subtle">
                你可以把胰島素想成身體裡的快遞員。每次你吃東西，血糖上升，胰島素就出來送貨——把血糖送進細胞。但如果你長期吃太多精緻碳水和含糖飲料，細胞收到太多貨，開始不想開門了。
                <strong className="text-ink">
                  胰島素敲門沒人應，身體只好派更多胰島素來硬敲。
                </strong>
                更多的胰島素帶來更多的發炎、更多的脂肪囤積、更多的紅字。
              </p>
            </div>

            <div className="bg-[#fef9f0] rounded-xl p-5 border-l-4 border-warning">
              <p className="font-bold text-warning text-sm mb-2">
                最可怕的是你可能已經撐了很多年
              </p>
              <p className="text-subtle">
                很多人健檢血糖「正常」就安心了。但那個正常，可能是你的胰島素用正常的兩倍、三倍拼命加班換來的。它死撐著把血糖壓下來，你完全不知道。
                <strong className="text-ink">
                  等到血糖真的壓不住了，通常胰島素已經過勞五到十年。
                </strong>
              </p>
            </div>

            <p>
              所以不是你的膽固醇有問題、你的血壓有問題、你的血糖有問題——
              <strong>是你的代謝系統有問題</strong>。解決了代謝，這些數字會自己回到正常。
            </p>
          </div>

          <div className="mt-8 p-5 rounded-2xl bg-white border border-edge">
            <p className="text-xs font-semibold text-muted tracking-wider mb-3">
              延伸閱讀
            </p>
            <div className="space-y-2">
              <Link
                href="/concepts/chronic-inflammation"
                className="block text-sm text-brand font-medium hover:underline"
              >
                慢性發炎：你看不見的身體大火 →
              </Link>
              <Link
                href="/concepts/insulin-resistance"
                className="block text-sm text-brand font-medium hover:underline"
              >
                胰島素阻抗：為什麼吃很少還是瘦不下來？ →
              </Link>
              <Link
                href="/concepts/blood-sugar-rollercoaster"
                className="block text-sm text-brand font-medium hover:underline"
              >
                血糖雲霄飛車：你的疲倦和飢餓都跟它有關 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABC 怎麼幫你 */}
      <section className="py-16 px-5 bg-brand-dark text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3 text-center">
            ABC 怎麼幫健檢紅字族？
          </h2>
          <p className="text-center text-white/70 mb-12">
            不是叫你少油少鹽，而是從根本修復你的代謝系統。
          </p>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-white/10 border border-white/15">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-extrabold text-danger">A</span>
                <div>
                  <div className="font-bold text-lg">Add 加營養</div>
                  <div className="text-sm text-white/60">加對的東西，讓身體修復</div>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                增加蔬菜纖維（幫助血糖穩定）、增加優質蛋白質（修復組織）、增加好的油脂（抗發炎）。
                <strong className="text-white">
                  不是少吃什麼，是先把缺的補回來。
                </strong>
                當身體得到足夠的營養，發炎自然會下降。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 border border-white/15">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-extrabold text-amber">B</span>
                <div>
                  <div className="font-bold text-lg">Behavior 調體質</div>
                  <div className="text-sm text-white/60">用行為改變代謝模式</div>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                調整進食順序讓血糖不暴衝。飯後散步 15 分鐘就能降低餐後血糖。
                <strong className="text-white">
                  不需要激烈運動，不需要算熱量。用小行為累積大改變。
                </strong>
                很多學員三個月後回去抽血，醫生都問「你做了什麼？」
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 border border-white/15">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-extrabold text-success">C</span>
                <div>
                  <div className="font-bold text-lg">Clear 輕負擔</div>
                  <div className="text-sm text-white/60">減少讓身體發炎的來源</div>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                減少含糖飲料、精緻碳水、加工食品——這些是慢性發炎的最大幫兇。
                <strong className="text-white">
                  不是一輩子不能吃，是先讓身體從發炎狀態裡走出來。
                </strong>
                等代謝修復了，偶爾享受完全沒問題。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 學員故事 */}
      <section className="py-16 px-5 bg-surface-green">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3">
            他們的紅字，後來怎麼了
          </h2>
          <p className="text-center text-subtle mb-10">
            不是奇蹟，是代謝修復後身體自然的反應
          </p>

          {/* 慧敏 */}
          <div className="rounded-2xl border border-edge overflow-hidden mb-6 bg-white">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-lg">慧敏</span>
                <span className="text-sm text-muted">自體免疫疾病・重大傷病卡</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-0.5 rounded-full bg-danger/10 text-danger font-medium">
                  84kg → 63.4kg
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-success/10 text-success font-medium">
                  發炎指數下降
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-info/10 text-info font-medium">
                  醫生同意停藥
                </span>
              </div>
              <blockquote className="text-[15px] leading-relaxed text-subtle border-l-3 border-amber pl-4 mb-3 italic">
                「醫生告訴我血液檢查發炎指數有下降，可以先停藥，暫時不用再吃了。」
              </blockquote>
              <p className="text-sm text-subtle leading-relaxed">
                她有自體免疫疾病，領有重大傷病卡，嘗試無數次減肥都沒成功。一年後瘦了 20 公斤，但最讓她開心的不是體重——是醫生說可以停藥了。手指關節不再腫脹，終於可以想彈鋼琴就彈。
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

          {/* 沛蓁 */}
          <div className="rounded-2xl border border-edge overflow-hidden bg-white">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-lg">沛蓁</span>
                <span className="text-sm text-muted">血壓偏高・鼻過敏・偏頭痛</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-0.5 rounded-full bg-danger/10 text-danger font-medium">
                  85kg → 67kg
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-success/10 text-success font-medium">
                  血壓恢復正常
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-info/10 text-info font-medium">
                  過敏消失
                </span>
              </div>
              <blockquote className="text-[15px] leading-relaxed text-subtle border-l-3 border-amber pl-4 mb-3 italic">
                「鼻過敏消了、偏頭痛沒了、血壓正常了。我以前以為這些是體質問題，沒想到都跟吃的東西有關。」
              </blockquote>
              <p className="text-sm text-subtle leading-relaxed">
                從 85 公斤瘦到 67 公斤，但她最驚訝的是那些困擾她多年的「老毛病」。血壓恢復正常、鼻過敏消了、偏頭痛也沒了。不是吃了什麼神藥，只是身體不再發炎了。
              </p>
              <div className="mt-4">
                <Link
                  href="/articles/chicken-soup-love-story"
                  className="text-sm text-brand font-medium hover:underline"
                >
                  看沛蓁的完整故事 →
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
            你的紅字，可能不是你以為的原因
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/articles/cholesterol-not-eggs"
              className="block p-5 rounded-2xl border border-edge hover:shadow-sm transition-shadow"
            >
              <div className="font-bold mb-1">膽固醇過高？問題可能不是雞蛋</div>
              <p className="text-sm text-subtle">
                你以為少吃蛋就會好，但真正推高膽固醇的是你每天喝的珍奶。
              </p>
            </Link>

            <Link
              href="/articles/blood-pressure-not-salt"
              className="block p-5 rounded-2xl border border-edge hover:shadow-sm transition-shadow"
            >
              <div className="font-bold mb-1">血壓高不是因為鹽</div>
              <p className="text-sm text-subtle">
                少鹽不一定能降血壓，但降低胰島素阻抗幾乎一定可以。
              </p>
            </Link>

            <Link
              href="/articles/blood-sugar-insulin-overwork"
              className="block p-5 rounded-2xl border border-edge hover:shadow-sm transition-shadow"
            >
              <div className="font-bold mb-1">血糖正常？你的胰島素可能累壞了</div>
              <p className="text-sm text-subtle">
                血糖正常不代表沒事。可能是胰島素用兩倍的力氣硬撐出來的。
              </p>
            </Link>

            <Link
              href="/articles/dark-neck-insulin"
              className="block p-5 rounded-2xl border border-edge hover:shadow-sm transition-shadow"
            >
              <div className="font-bold mb-1">脖子變黑洗不掉？這是身體的警報</div>
              <p className="text-sm text-subtle">
                黑色棘皮症是胰島素阻抗最明顯的外在徵兆之一。
              </p>
            </Link>

            <Link
              href="/articles/normal-blood-sugar-trap"
              className="block p-5 rounded-2xl border border-edge hover:shadow-sm transition-shadow"
            >
              <div className="font-bold mb-1">血糖正常的陷阱</div>
              <p className="text-sm text-subtle">
                下午老是昏沉、腰越來越粗？你可能早就是胰島素阻抗了。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-5">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-lg text-subtle mb-2">
            紅字不會自己消失，但它可以被修復。
          </p>
          <h2 className="text-xl font-bold mb-4">
            第一步，了解你的代謝現在是什麼狀態
          </h2>
          <p className="text-subtle mb-8">
            8 個生活小問題，30 秒測出你的代謝類型
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
