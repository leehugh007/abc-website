import type { Metadata } from "next";
import Link from "next/link";
import { StickyLineCTA } from "@/app/sticky-line-cta";

export const metadata: Metadata = {
  title: "代謝力重建完全指南：從原理到實踐，一篇搞懂",
  description:
    "什麼是代謝力重建？為什麼節食、少吃多動會失敗？胰島素怎麼影響你的體重？ABC 代謝重建瘦身法的科學原理、五種代謝類型、實際做法，全部寫在這裡。",
  keywords: [
    "代謝重建",
    "代謝力重建",
    "代謝力",
    "胰島素阻抗",
    "ABC瘦身法",
    "代謝類型",
    "健康瘦身",
    "不復胖",
  ],
};

const SITE_URL = "https://abcmetabolic.com";

export default function GuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "代謝力重建完全指南：從原理到實踐，一篇搞懂",
    description:
      "ABC 代謝重建瘦身法的科學原理、五種代謝類型、實際做法的完整指南。",
    author: {
      "@type": "Person",
      name: "一休",
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "ABC 代謝力重建",
      url: SITE_URL,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/guide` },
    datePublished: "2026-03-21",
    dateModified: "2026-03-21",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-14 pb-10 px-5">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-brand mb-4 tracking-wide">
            ABC 代謝重建瘦身法
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4">
            代謝力重建完全指南
          </h1>
          <p className="text-subtle leading-relaxed mb-4">
            從原理到實踐，一篇搞懂。不管你是第一次聽到「代謝重建」，還是已經試過很多方法都沒用，這篇會幫你理清楚：你的身體到底發生了什麼事，以及該怎麼做。
          </p>
          <div className="flex items-center gap-3 text-sm text-muted mb-8">
            <Link href="/about" className="flex items-center gap-2 hover:text-subtle transition-colors">
              <span className="w-6 h-6 rounded-full bg-brand text-white text-xs flex items-center justify-center font-bold shrink-0">休</span>
              <span className="font-medium text-subtle">一休</span>
            </Link>
            <span className="text-edge-dark">·</span>
            <span>瘦身教練・ABC 代謝重建創辦人</span>
            <span className="text-edge-dark">·</span>
            <span>閱讀 15 分鐘</span>
          </div>
        </div>
      </section>

      {/* 目錄 */}
      <section className="pb-10 px-5">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl border border-edge bg-white p-6">
            <p className="font-bold text-sm mb-4">本文目錄</p>
            <nav className="space-y-2 text-sm">
              {[
                { id: "why-fail", label: "一、為什麼你試過的方法都沒用？" },
                { id: "insulin", label: "二、真正的關鍵：胰島素" },
                { id: "what-is", label: "三、什麼是代謝力重建？" },
                { id: "abc", label: "四、ABC 代謝重建瘦身法怎麼做？" },
                { id: "types", label: "五、五種代謝類型" },
                { id: "12weeks", label: "六、12 週會經歷什麼？" },
                { id: "vs", label: "七、跟其他方法有什麼不同？" },
                { id: "faq", label: "八、最常被問的問題" },
                { id: "next", label: "九、下一步" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-subtle hover:text-brand transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* 內文 */}
      <article className="pb-16 px-5">
        <div className="max-w-2xl mx-auto prose prose-lg prose-stone prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-[1.9] prose-p:text-ink prose-li:text-ink prose-blockquote:border-l-brand prose-blockquote:bg-surface-green prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-strong:text-brand-dark">

          {/* 一、為什麼你試過的方法都沒用？ */}
          <h2 id="why-fail">一、為什麼你試過的方法都沒用？</h2>

          <p>先不聊方法，聊一個數字。</p>

          <p><strong>95% 的人減肥後會復胖。</strong>其中三分之二的人，最後會比減肥前更重。</p>

          <p>這不是你意志力不夠。這是方法的問題。</p>

          <p>你有沒有過這種經驗：少吃了、也動了，前兩週體重掉了一點，然後就卡住了。然後你更少吃、更拼命動，身體好像故意跟你作對，就是不動。最後你撐不住，回到正常吃，體重不但全部回來，還多了兩公斤。</p>

          <p>這不是你沒有毅力。這是你的身體啟動了「保護機制」。</p>

          <p>當你長期吃太少，身體會覺得：「糧食不夠了，要省電。」於是它降低你的基礎代謝率——你活著每天自然燒掉的熱量變少了。肌肉開始被分解當燃料，脂肪反而被保護起來。你越少吃，身體越省電，越不容易瘦。</p>

          <p>這個現象叫做<strong>代謝適應</strong>。它不是你的敵人，它是你的身體在保護你。問題是，「少吃多動」這個方法，<Link href="/articles/eat-less-move-more-myth" className="text-brand underline decoration-brand/35 hover:decoration-brand">從一開始就跟你的身體作對</Link>。</p>

          <blockquote>
            <p>減肥失敗不是因為你不夠努力，是因為你在跟自己的身體打仗。而你的身體，永遠比你有耐心。</p>
          </blockquote>

          <p>那要怎麼辦？不是跟身體對抗，而是<strong>跟身體合作</strong>。而合作的第一步，是搞懂一個大多數人不知道的關鍵角色。</p>

          {/* 二、真正的關鍵：胰島素 */}
          <h2 id="insulin">二、真正的關鍵：胰島素</h2>

          <p>你吃東西的時候，血糖會上升。身體會派出一個「交通警察」來指揮：把血糖送到肌肉當能量，或者存到脂肪裡。</p>

          <p>這個交通警察，就是<strong>胰島素</strong>。</p>

          <p>正常情況下，胰島素來、指揮完、走了。但如果你長期吃太多精緻碳水（白飯、麵包、手搖飲、零食），胰島素每天要出場太多次，細胞開始「不理它」了——就像一個天天按警報的人，大家最後都不當一回事了。</p>

          <p>這就是<Link href="/articles/dark-neck-insulin" className="text-brand underline decoration-brand/35 hover:decoration-brand"><strong>胰島素阻抗</strong></Link>。</p>

          <p>胰島素阻抗會發生三件事：</p>

          <ol>
            <li><strong>吃進去的能量更容易被存成脂肪</strong>——尤其是肚子周圍</li>
            <li><strong>你會一直想吃</strong>——因為細胞收不到能量信號，大腦以為你還沒吃飽</li>
            <li><strong>你的代謝變慢</strong>——身體進入「囤積模式」，拼命存而不是拼命燒</li>
          </ol>

          <p>所以你吃很少還是瘦不下來，下午一定要來杯手搖飲，<Link href="/articles/normal-blood-sugar-trap" className="text-brand underline decoration-brand/35 hover:decoration-brand">體檢數字看起來還行但腰圍一直增加</Link>——這些全都跟胰島素有關。</p>

          <p>帶學員這麼多年，我看到一個很明確的規律：<strong>把胰島素搞定了，體重自然就下來了。</strong>不用算熱量，不用挨餓，不用每天跟自己打仗。</p>

          {/* 中段 CTA */}
          <div className="not-prose my-10">
            <div className="rounded-2xl bg-surface-green border border-brand/20 p-6 text-center">
              <p className="text-xs font-semibold text-brand tracking-wide mb-1">ABC 代謝重建瘦身法</p>
              <p className="font-bold text-[15px] mb-3">想知道你的胰島素狀況？30 秒測出你的代謝類型</p>
              <a
                href="/quiz"
                className="inline-block px-7 py-2.5 bg-brand text-white text-sm font-bold rounded-full hover:shadow-md transition-shadow"
              >
                免費測驗 →
              </a>
            </div>
          </div>

          {/* 三、什麼是代謝力重建？ */}
          <h2 id="what-is">三、什麼是代謝力重建？</h2>

          <p>代謝力重建，一句話說完：<strong>讓你的代謝系統回到正常運作的狀態。</strong></p>

          <p>不是「加速代謝」（那是暫時的），不是「提高基礎代謝率」（那是結果不是方法），而是把那個被搞壞的代謝系統修回來。</p>

          <p>你的代謝系統怎麼被搞壞的？</p>

          <ul>
            <li>長期吃太多精緻碳水 → 胰島素過勞 → 胰島素阻抗</li>
            <li>長期節食 → 代謝適應 → 身體進入省電模式</li>
            <li>長期壓力大、睡不好 → 皮質醇偏高 → 脂肪往肚子堆</li>
            <li>長期身體發炎 → 細胞溝通出問題 → 代謝效率下降</li>
          </ul>

          <p>代謝力重建就是反過來：<strong>讓胰島素休息、讓代謝回溫、讓發炎降下來。</strong>當這些底層問題被處理了，你不用刻意節食，體重就會自然下降。</p>

          <p>這不是理論。三年來超過 3000 位學員的成果，靠的就是這個邏輯。</p>

          {/* 四、ABC */}
          <h2 id="abc">四、ABC 代謝重建瘦身法怎麼做？</h2>

          <p>ABC 不是一套菜單，是一種思考方式。三個字母代表三個方向：</p>

          <div className="not-prose my-8">
            <div className="rounded-2xl bg-brand-dark text-white p-8">
              <div className="space-y-6">
                <div>
                  <p className="text-2xl font-bold mb-1">A = Add 加營養</p>
                  <p className="text-white/80 text-[15px] leading-relaxed">不告訴你不能吃什麼，而是教你可以加什麼。加蛋白質、加蔬菜、加好的脂肪。當你吃對的東西吃夠了，你自然不想亂吃。</p>
                </div>
                <div className="border-t border-white/20 pt-6">
                  <p className="text-2xl font-bold mb-1">B = Behavior 行為調體質</p>
                  <p className="text-white/80 text-[15px] leading-relaxed">透過行為調整，讓代謝回到正常。<Link href="/articles/eating-order-blood-sugar" className="text-white underline decoration-white/40 hover:decoration-white">吃飯的順序</Link>（先菜再肉最後飯）、睡眠、壓力管理——這些「不起眼」的行為，對代謝的影響比你想像中大得多。</p>
                </div>
                <div className="border-t border-white/20 pt-6">
                  <p className="text-2xl font-bold mb-1">C = Clear 輕負擔</p>
                  <p className="text-white/80 text-[15px] leading-relaxed">減輕身體和心理的負擔。減少讓身體發炎的食物、減少壓力、減少罪惡感。不是「什麼都不能吃」，是「讓身體不再超載」。</p>
                </div>
              </div>
            </div>
          </div>

          <p>核心邏輯：<strong>加營養、調體質、輕負擔。</strong>當身體不再發炎、胰島素不再過勞，瘦就是自然而然的事。</p>

          <p>想更完整了解 ABC 方法的細節，可以看<Link href="/method" className="text-brand underline decoration-brand/35 hover:decoration-brand">方法介紹頁</Link>。</p>

          {/* 五、五種代謝類型 */}
          <h2 id="types">五、五種代謝類型</h2>

          <p>每個人的代謝問題不一樣，解法也不一樣。帶學員這麼多年，我歸納出五種常見的代謝模式：</p>

          <div className="not-prose my-8 space-y-3">
            {[
              { name: "高轉速型", desc: "壓力太大、皮質醇偏高，脂肪往肚子堆。你不是不健康，是太拼了。", slug: "high-rpm", color: "#e74c3c" },
              { name: "燃燒殆盡型", desc: "把能量都給了別人，自己的代謝引擎快熄火。你不是不在乎自己。", slug: "burnout", color: "#e67e22" },
              { name: "雲霄飛車型", desc: "血糖一天坐三次大怒神，精神和體重都跟著上上下下。", slug: "roller-coaster", color: "#f39c12" },
              { name: "省電模式型", desc: "長期節食把代謝拖慢，吃很少還是瘦不下來。你不是吃太多，是吃太少太久了。", slug: "power-save", color: "#7f8c8d" },
              { name: "穩定燃燒型", desc: "代謝引擎運轉得不錯，維持好習慣就好。", slug: "steady", color: "#27ae60" },
            ].map((type) => (
              <Link
                key={type.slug}
                href={`/types/${type.slug}`}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-edge hover:shadow-sm transition-all group no-underline overflow-hidden relative"
              >
                <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: type.color }} />
                <div
                  className="w-3 h-3 rounded-full shrink-0 mt-1"
                  style={{ backgroundColor: type.color }}
                />
                <div>
                  <p className="font-bold text-base text-ink group-hover:text-brand transition-colors">{type.name}</p>
                  <p className="text-sm text-subtle mt-0.5">{type.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <p>不確定自己是哪種？<a href="/quiz" className="text-brand underline decoration-brand/35 hover:decoration-brand">做個 30 秒測驗</a>，馬上知道。</p>

          {/* 六、12 週 */}
          <h2 id="12weeks">六、12 週會經歷什麼？</h2>

          <p>ABC 的完整課程是 12 週，分三個階段：</p>

          <h3>第 1-4 週：重啟期</h3>
          <p>讓胰島素休息，讓代謝開始回溫。這個階段你會感覺到：下午不那麼想睡了、不太需要手搖飲了、肚子有開始消一點。體重可能還沒有明顯變化，但身體內部已經在改變。</p>

          <h3>第 5-8 週：強化期</h3>
          <p>代謝引擎開始穩定運轉，體重和體脂開始明顯下降。你會發現自己「自然地」吃得比較健康，不是在忍耐，是真的不想吃那些東西了。很多學員在這個階段會說：「怎麼感覺身體變聰明了。」</p>

          <h3>第 9-12 週：內化期</h3>
          <p>把前面學到的東西變成習慣。出去吃飯自然會先看有沒有蛋白質和蔬菜，不是在「堅持」，是你的大腦已經重新設定了。結業的時候你帶走的不是一套菜單，是一種生活方式。</p>

          <p>三年來超過 3000 位學員走過這個流程。<Link href="/articles/socks-story-62kg" className="text-brand underline decoration-brand/35 hover:decoration-brand">有人瘦了 62 公斤</Link>，<Link href="/articles/chicken-soup-love-story" className="text-brand underline decoration-brand/35 hover:decoration-brand">有人血壓恢復正常</Link>，有人終於穿回婚前的裙子。每個人的起點不同，但邏輯是一樣的：搞懂代謝，瘦是順便的事。</p>

          {/* 七、比較 */}
          <h2 id="vs">七、跟其他方法有什麼不同？</h2>

          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-surface">
                  <th className="text-left p-3 font-bold border-b border-edge"></th>
                  <th className="text-left p-3 font-bold border-b border-edge">節食 / 少吃多動</th>
                  <th className="text-left p-3 font-bold border-b border-edge"><Link href="/articles/ozempic-alternative-abc" className="text-purple no-underline hover:underline">瘦瘦針</Link></th>
                  <th className="text-left p-3 font-bold border-b border-edge text-brand">ABC 代謝重建</th>
                </tr>
              </thead>
              <tbody className="text-subtle">
                <tr><td className="p-3 border-b border-edge font-medium text-ink">原理</td><td className="p-3 border-b border-edge">減少熱量攝取</td><td className="p-3 border-b border-edge">藥物壓抑食慾</td><td className="p-3 border-b border-edge text-ink font-medium">修復代謝系統</td></tr>
                <tr><td className="p-3 border-b border-edge font-medium text-ink">短期效果</td><td className="p-3 border-b border-edge">快（前 2 週）</td><td className="p-3 border-b border-edge">很快</td><td className="p-3 border-b border-edge text-ink">中等（4-6 週見效）</td></tr>
                <tr><td className="p-3 border-b border-edge font-medium text-ink">復胖率</td><td className="p-3 border-b border-edge">極高（95%）</td><td className="p-3 border-b border-edge">高（停藥後 2/3 回來）</td><td className="p-3 border-b border-edge text-ink font-medium">低（學會的就是你的）</td></tr>
                <tr><td className="p-3 border-b border-edge font-medium text-ink">需要忍耐嗎</td><td className="p-3 border-b border-edge">很需要</td><td className="p-3 border-b border-edge">不用（藥物代替）</td><td className="p-3 border-b border-edge text-ink font-medium">前 2 週需要，之後不用</td></tr>
                <tr><td className="p-3 font-medium text-ink">代謝影響</td><td className="p-3">代謝變慢</td><td className="p-3">不改善代謝</td><td className="p-3 text-ink font-medium">修復代謝</td></tr>
              </tbody>
            </table>
          </div>

          <p>簡單說：節食是跟身體打仗，瘦瘦針是<Link href="/articles/ozempic-bbc-tsunami" className="text-brand underline decoration-brand/35 hover:decoration-brand">租一個瘦的身體</Link>，ABC 是讓身體自己學會怎麼瘦。</p>

          {/* 中段 CTA 2 */}
          <div className="not-prose my-10">
            <div className="rounded-2xl bg-surface-green border border-brand/20 p-6 text-center">
              <p className="font-bold text-[15px] mb-3">你的身體適合哪種方式？先從了解代謝類型開始</p>
              <a
                href="/quiz"
                className="inline-block px-7 py-2.5 bg-brand text-white text-sm font-bold rounded-full hover:shadow-md transition-shadow"
              >
                30 秒免費測驗 →
              </a>
            </div>
          </div>

          {/* 八、FAQ */}
          <h2 id="faq">八、最常被問的問題</h2>

          <h3>ABC 需要算熱量嗎？</h3>
          <p>不用。我們關注食物品質和餐盤比例，不關注數字。三份蔬菜、兩份蛋白質、一份碳水——比例對了，選什麼澱粉影響不大。</p>

          <h3>外食族可以做嗎？</h3>
          <p>完全可以。核心就是<Link href="/articles/eating-order-blood-sugar" className="text-brand underline decoration-brand/35 hover:decoration-brand">「菜肉飯順序法」</Link>——不管吃什麼，先吃菜、再吃肉、最後吃飯。火鍋是外食首選，便當也可以。</p>

          <h3>年紀大了代謝變差，還有可能嗎？</h3>
          <p>ABC 的學員從二十幾歲到五十幾歲都有。代謝變慢的主因不是年齡，是肌肉流失。增加蛋白質攝取 + 保持活動量就能逆轉。</p>

          <h3>12 週結束後會復胖嗎？</h3>
          <p>你學的不是一套菜單，是一種生活方式。12 週結束後你已經內化了這些習慣，不是在忍耐，是你真的不想回到以前的方式。</p>

          <p>更多問題可以看<Link href="/faq" className="text-brand underline decoration-brand/35 hover:decoration-brand">完整 FAQ（15 題）</Link>。</p>

          {/* 九、下一步 */}
          <h2 id="next">九、下一步</h2>

          <p>如果你讀到這裡，你已經比 90% 的人更了解自己的身體了。</p>

          <p>下一步很簡單：</p>
        </div>
      </article>

      {/* 結尾 CTA */}
      <section className="pb-16 px-5">
        <div className="max-w-xl mx-auto">
          <a
            href="/quiz"
            className="flex items-center gap-4 p-5 rounded-2xl bg-surface-green border border-brand/20 hover:shadow-sm transition-all group mb-3"
          >
            <div className="flex-1">
              <span className="font-bold text-base group-hover:text-brand transition-colors block">30 秒測出你的代謝類型</span>
              <span className="text-sm text-subtle">免費，8 個生活小問題</span>
            </div>
            <span className="text-brand font-bold text-lg">→</span>
          </a>
          <div className="flex gap-3">
            <a
              href="https://lin.ee/x41s2Su"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-edge hover:border-line-green transition-colors text-sm"
            >
              <span className="text-line-green font-bold">LINE</span>
              <span className="text-subtle">問一休</span>
            </a>
            <Link
              href="/articles"
              className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-edge hover:border-brand transition-colors text-sm"
            >
              <span className="text-subtle">看更多文章</span>
              <span className="text-muted">→</span>
            </Link>
          </div>
          <p className="text-sm text-muted mt-8">我是一休，陪你健康的瘦一輩子</p>
        </div>
      </section>

      <StickyLineCTA />
    </>
  );
}
