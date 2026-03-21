"use client";

import { useState } from "react";
import Link from "next/link";

interface FaqItem {
  q: string;
  a: string;
  links?: { text: string; href: string }[];
}

interface FaqSection {
  title: string;
  items: FaqItem[];
}

const FAQ_DATA: FaqSection[] = [
  {
    title: "關於 ABC 代謝力重建",
    items: [
      {
        q: "ABC 跟 168 斷食、生酮、低碳飲食有什麼不一樣？",
        a: "168、生酮、低碳都在處理「你吃了什麼」或「什麼時候吃」。ABC 處理的是更根本的問題——你的代謝系統為什麼失調。\n\n168 斷食不是萬能：品質差、總熱量超標，一樣不會瘦。生酮是讓身體進入低能耗狀態，只能瘦一陣子，長期會掉髮、停經、情緒不穩。\n\nABC 的核心是「加營養、調體質、輕負擔」——讓胰島素休息、代謝回到正軌。不需要戒掉任何食物，而是理解身體怎麼運作，然後做出選擇。搞懂了，行為自然會改變。",
        links: [
          {
            text: "「少吃多動」這四個字，害了多少人？",
            href: "/articles/eat-less-move-more-myth",
          },
        ],
      },
      {
        q: "ABC 需要算熱量嗎？",
        a: "不用。我們不算熱量。\n\n因為生活是動態的，飲食也是動態的。一大盤健康的原型食物很難超過 500 大卡而且會飽；一杯手搖飲輕鬆超過 500 大卡卻不會飽。\n\n與其盯著數字，不如關注食物品質和餐盤比例：三份蔬菜、兩份蛋白質、一份碳水。比例對了，選什麼澱粉影響不大。\n\n觀察身體變化（精神、體態、心情）比計算更重要。",
      },
      {
        q: "ABC 跟瘦瘦針比，哪個比較好？",
        a: "瘦瘦針用外源性荷爾蒙壓抑食慾——你會瘦，但你的身體並沒有學到任何東西。停針後食慾像海嘯湧回來，研究顯示停打一年後平均恢復原本減掉體重的三分之二。\n\n更深層的問題：長期注射外源性荷爾蒙，身體會慢慢減少自己分泌的量，就像健美選手打睪固酮導致睪丸萎縮一樣。\n\n打針是「租」一個瘦的身體，ABC 是「擁有」一個健康的身體。租的總有一天要還。",
        links: [
          {
            text: "如果不想打針，還有什麼選擇？",
            href: "/articles/ozempic-alternative-abc",
          },
          {
            text: "她打瘦瘦針瘦了 22 公斤，停針第 3 天海嘯就來了",
            href: "/articles/ozempic-bbc-tsunami",
          },
        ],
      },
      {
        q: "12 週結束後會復胖嗎？",
        a: "快速瘦身一年後復胖體重的 75-80%，幾乎沒有快速方法不復胖的。\n\n但 ABC 不一樣——因為你學的不是一套菜單，而是一種生活方式。12 週結束後你已經內化了這些習慣：看到食物自然會想「有蛋白質嗎？有蔬菜嗎？」。不是在忍耐，是你真的不想回到以前的方式。\n\n三年來超過 3000 位學員的成果，靠的就是這個邏輯：學一次，瘦一輩子。",
        links: [
          {
            text: "95% 的人都會復胖，但這 5% 做對了什麼？",
            href: "/articles/95-percent-regain-weight",
          },
        ],
      },
    ],
  },
  {
    title: "飲食相關",
    items: [
      {
        q: "不吃澱粉是不是瘦比較快？",
        a: "一週不吃澱粉，體重可能掉 2-3 公斤——但大部分是水分流失，不是脂肪。因為 1 克肝醣會夾帶 4 克水分，澱粉一斷，水就跟著走了。一回來吃就「復胖」，其實只是水分回來。\n\n長期不吃澱粉，大腦一天需要 120-140 克葡萄糖才能正常運作，供給不足會導致腦霧、疲勞、基礎代謝下降。\n\n碳水不是敵人，精緻碳水才是。把白飯換成地瓜、南瓜、糙米——血糖穩穩的，胰島素不用緊急加班，你也不會一直想亂吃。",
      },
      {
        q: "外食族可以做 ABC 嗎？我不太可能自己煮。",
        a: "完全可以。ABC 的很多學員都是外食族。\n\n核心就是「菜肉飯順序法」——不管吃什麼，先吃菜、再吃肉、最後吃飯。同樣的食物、同樣的份量，光是換順序，飯後血糖波動就少了 35%。\n\n火鍋是外食首選（一人一鍋可控制食材），便當先吃青菜再吃肉最後吃飯，超商買生菜沙拉加茶葉蛋加無糖豆漿。重點不是在哪裡吃，是你有沒有意識地做選擇。",
        links: [
          {
            text: "不用少吃，只要換順序：研究證實血糖少飆 35%",
            href: "/articles/eating-order-blood-sugar",
          },
        ],
      },
      {
        q: "蛋白質要吃多少？怎麼吃夠？",
        a: "簡單公式：你幾公斤，就吃幾克蛋白質（最低標準）。60 公斤的人，一天至少 60 克。\n\n一顆蛋大約 7 克蛋白質，一瓶豆漿約 15-17 克。所以每餐多加一顆蛋、一天多喝一杯豆漿、把豆干毛豆當零食，就很容易達標。\n\n蛋白質為什麼重要？因為減重最怕「降的都是肌肉，留的都是脂肪」。蛋白質吃不夠，身體會分解肌肉當能量，代謝越來越慢，之後更容易復胖。\n\n而且蛋白質的消化過程本身就消耗熱量——吃 100 大卡蛋白質，身體要花掉 25-30 大卡來處理它。",
      },
      {
        q: "偶爾吃大餐或放縱一下，會毀掉之前的努力嗎？",
        a: "不會。一餐不會毀掉你。\n\n隔天體重上升？那是水分和食物重量，不是脂肪。體重一天內正常波動 0.5-1 公斤。\n\n我們不說「破戒」——這只是一餐的選擇。每一餐都是重新開始的機會。真正危險的不是那一餐，是吃完後的罪惡感讓你想「反正都破功了」，然後整天失控。\n\n如果不小心吃多了：拉長下一餐空腹間隔、多走走路。不需要懲罰自己。",
      },
    ],
  },
  {
    title: "身體反應",
    items: [
      {
        q: "我吃很少了，為什麼還是瘦不下來？",
        a: "如果你吃很少還瘦不下來，問題通常不是你吃太多——是你吃太少太久了。\n\n長期低熱量，身體會啟動保護機制：代謝變慢、肌肉流失、荷爾蒙失調。你越少吃，身體越省電。這就是為什麼很多人越減越肥。\n\nABC 反過來——先加營養進來（蛋白質、蔬菜、好的碳水），讓代謝系統回到正常運作。你會發現，吃「對」的東西，比吃「少」更有效。\n\n天然原型食物體積大、纖維多、營養密度高——吃很飽但熱量不高。自然就產生熱量赤字，不需要刻意控制。",
        links: [
          {
            text: "「管不住嘴就是沒意志力」？讓科學來打臉這句話",
            href: "/articles/willpower-myth",
          },
        ],
      },
      {
        q: "減肥停滯期怎麼辦？體重卡了好幾週完全不動。",
        a: "停滯期其實是假議題。\n\n減重不是線性的，像爬山——有平坦、甚至小上坡。2-3 週體重不變是超級正常的。\n\n可能發生的事：體重沒變，但肌肉增加、脂肪減少，互相抵消了。肌肉密度比脂肪高——同樣重量，肌肉只有拳頭大小，脂肪卻有手掌那麼大。所以你可能體重一樣，但衣服鬆了、肚子小了。\n\n不要被體重數字綁架。你的體態、精神、穿衣服的感覺，比體重計上的數字重要太多了。",
      },
      {
        q: "運動了體重反而增加，正常嗎？",
        a: "正常。這在剛開始運動時很常見。\n\n運動後肌肉會儲存更多水分和肝醣來修復自己。這些水分會讓體重暫時上升，但不是脂肪。\n\n而且如果你在做肌力訓練，肌肉量增加本身就會讓體重不動或微升——但你的體型在變好。有學員三個月體重只差 1 公斤，但視覺上看起來至少瘦了 5-6 公斤。\n\n記住：運動的真正價值不是消耗熱量，是讓肌肉更有效率地吸收血糖、穩定胰島素、提升代謝。",
      },
      {
        q: "年紀大了代謝變差，還有可能瘦嗎？",
        a: "完全可以。ABC 的學員從二十幾歲到五十幾歲都有，年紀從來不是問題。\n\n代謝變慢的主因不是年齡本身，是肌肉流失。30 歲後每 10 年肌肉量會流失 3-5%，再加上荷爾蒙變化。但這是可以逆轉的——增加蛋白質攝取、保持活動量就能做到。\n\n而且說實話，40 歲的你比 20 歲的你更有優勢：你更有耐心、更能理解自己的身體、更不會追求「快速見效」。\n\n用三個月學會這件事，然後把剩下的人生拿去做你真正想做的事。",
      },
    ],
  },
  {
    title: "心態相關",
    items: [
      {
        q: "壓力大就想暴吃，怎麼辦？",
        a: "壓力大想吃甜食，不是你意志力不夠——是身體在求救。壓力大時皮質醇升高，身體本能想提升血清素，最快的方式就是吃甜的。你不是貪吃，是荷爾蒙在逼你吃。\n\n但食物帶來的舒壓非常短暫，吃完還會有罪惡感，狀態反而更糟。\n\n解法不是「忍住不吃」，而是找到其他讓身體放鬆的方式——運動、走路、整理房間、跟寵物玩。當生活中有更多紓壓管道，你就不需要靠食物來填補。",
      },
      {
        q: "每天量體重好焦慮，數字上升心情就崩。",
        a: "體重一天內正常波動 0.5-1.5 公斤。昨天多喝幾杯水，今天就可能重 0.5 公斤——但那不是脂肪。\n\n我帶過的學員裡，很多人到了第五週我會直接叫他們整週不站上體重計。不看體重計的時候，你才能真正感受到自己的變化：精神變好了嗎？下午不那麼想睡了嗎？衣服鬆了嗎？\n\n你的體態大於你的體重。你的感受好、看起來好，比你的體重多少還重要。體重計上的數字不能定義你是誰。",
      },
      {
        q: "減肥是不是就是靠意志力？我怎麼都堅持不了。",
        a: "如果減肥靠意志力，你幾乎注定百分百失敗。\n\n意志力是用來撐住極限的——運動員最後幾秒舉起最重的重量。但你每天壓抑不吃想吃的，等於每天逼自己到極限。沒有人撐得了一輩子。\n\n所以我們不用「控制」這個詞，我們用「選擇」。不是「我不能吃炸的」，而是「我知道滷排骨便當對我的身體比較好，所以我選這個」。\n\n你必須從邏輯上、從原理上去理解為什麼要做這個選擇。搞懂了，你就不需要意志力了——因為你根本不想回到以前的方式。",
        links: [
          {
            text: "「管不住嘴就是沒意志力」？讓科學來打臉這句話",
            href: "/articles/willpower-myth",
          },
        ],
      },
    ],
  },
];

function FaqAccordion({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#eee9e5] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-3 p-5 text-left hover:bg-[#f8faf7] transition-colors"
      >
        <span
          className={`mt-0.5 text-[#2a9d6f] font-bold text-lg shrink-0 transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
        <span className="font-bold text-[15px] leading-snug">{item.q}</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          open ? "max-h-[2000px]" : "max-h-0"
        }`}
      >
        <div className="px-5 pb-5 pl-11">
          <div className="text-[15px] text-[#6b6560] leading-[1.85] whitespace-pre-line">
            {item.a}
          </div>
          {item.links && item.links.length > 0 && (
            <div className="mt-4 pt-3 border-t border-[#eee9e5]">
              <p className="text-xs text-[#a8a29e] mb-2">延伸閱讀</p>
              {item.links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="block text-sm text-[#2a9d6f] font-medium hover:underline mb-1"
                >
                  {link.text} →
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQ_DATA.flatMap(section =>
              section.items.map(item => ({
                "@type": "Question",
                "name": item.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.a.replace(/\n/g, ' ')
                }
              }))
            )
          })
        }}
      />
      <section className="pt-12 pb-16 px-5">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-[#2a9d6f] mb-4 tracking-wide">
            大家都在問
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight mb-3">
            你想問的，別人都問過了
          </h1>
          <p className="text-[#6b6560] mb-10">
            這些問題來自真實的論壇討論，不是我們自己編的。
          </p>

          <div className="space-y-10">
            {FAQ_DATA.map((section, si) => (
              <div key={si}>
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-[#2a9d6f] rounded-full inline-block" />
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.items.map((item, ii) => (
                    <FaqAccordion key={ii} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center space-y-6">
            <p className="text-[#6b6560]">
              還有其他問題？直接問一休最快。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/quiz"
                className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white bg-[#2a9d6f] rounded-full shadow-md"
              >
                先做代謝測驗 →
              </a>
              <a
                href="https://lin.ee/x41s2Su"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white bg-[#06C755] rounded-full shadow-md"
              >
                加入一休的 LINE →
              </a>
            </div>
            <div className="flex gap-4 justify-center text-sm">
              <Link
                href="/method"
                className="text-[#2a9d6f] font-medium hover:underline"
              >
                ABC 是什麼 →
              </Link>
              <Link
                href="/articles"
                className="text-[#2a9d6f] font-medium hover:underline"
              >
                看更多文章 →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
