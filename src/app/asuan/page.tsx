import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "認識阿算 — 記得你、陪你走到目標的 AI 夥伴",
  description:
    "阿算不是熱量計算機，不是通用 AI。它用 ABC 代謝力重建的方法，記住你的狀況、你的偏好、你的目標，陪你一步一步走到你想去的地方。",
};

export default function AsuanPage() {
  return (
    <>
      {/* 即將推出提示 */}
      <div className="bg-[#f3f9f5] border-b border-[#2a9d6f]/20 px-5 py-3 text-center">
        <p className="text-sm text-[#2a9d6f] font-medium">
          此服務即將推出，敬請期待
        </p>
      </div>

      {/* ── Hero ── */}
      <section className="pt-16 pb-12 px-5">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold text-[#2a9d6f] mb-4 tracking-wide">
            認識阿算
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight mb-6">
            不是幫你算熱量
            <br />
            <span className="text-[#2a9d6f]">是陪你走到目標</span>
          </h1>
          <p className="text-lg text-[#6b6560] leading-relaxed max-w-lg mx-auto">
            阿算是一休訓練出來的 AI 飲食夥伴。它用 ABC
            代謝力重建的方法，記住你的狀況、你的偏好、你走過的路，陪你一步一步改變。
          </p>
        </div>
      </section>

      {/* ── 現有方法的問題 ── */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3">
            你試過的方法，問題出在哪
          </h2>
          <p className="text-center text-[#6b6560] mb-12">
            不是你不夠努力，是工具本身就沒辦法幫你走完全程
          </p>

          <div className="space-y-5">
            {/* 熱量計算 app */}
            <div className="rounded-2xl border border-[#eee9e5] p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#e74c3c]/10 text-[#e74c3c] font-medium">
                  熱量計算 App
                </span>
              </div>
              <p className="text-[15px] text-[#6b6560] leading-relaxed mb-3">
                你有沒有用過那種要你一條一條輸入食物的
                app？光是一碗滷肉飯就要搜半天，最後也不知道輸的對不對。
              </p>
              <p className="text-[15px] text-[#6b6560] leading-relaxed">
                就算算出來了——<strong className="text-[#2a2520]">然後呢？</strong>
                它告訴你今天吃了 1,800 大卡，但不會告訴你蛋白質夠不夠、下一餐該怎麼調、你的代謝狀況適合什麼吃法。數字很精準，但對改變沒有幫助。
              </p>
            </div>

            {/* 限制性飲食 */}
            <div className="rounded-2xl border border-[#eee9e5] p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#e67e22]/10 text-[#e67e22] font-medium">
                  固定菜單 / 限制性飲食
                </span>
              </div>
              <p className="text-[15px] text-[#6b6560] leading-relaxed mb-3">
                給你一份菜單叫你照著吃。問題是：你要應酬的那天呢？帶小孩忙到沒時間煮的那天呢？出差只能吃便利商店的那天呢？
              </p>
              <p className="text-[15px] text-[#6b6560] leading-relaxed">
                <strong className="text-[#2a2520]">
                  不考慮你的生活，就不可能持續。
                </strong>
                而不能持續的方法，不管多有效都沒有意義。
              </p>
            </div>

            {/* 通用 AI */}
            <div className="rounded-2xl border border-[#eee9e5] p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#3498db]/10 text-[#3498db] font-medium">
                  通用 AI（ChatGPT 等）
                </span>
              </div>
              <p className="text-[15px] text-[#6b6560] leading-relaxed mb-3">
                ChatGPT
                可以幫你分析一餐，但它不記得你昨天吃了什麼、你的目標是什麼、你上次外食選了什麼。
              </p>
              <p className="text-[15px] text-[#6b6560] leading-relaxed">
                <strong className="text-[#2a2520]">
                  每次都像跟一個陌生人從頭說起。
                </strong>
                而且它用的是通用的營養知識，不是針對代謝重建設計的方法。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 阿算跟他們不一樣 ── */}
      <section className="py-16 px-5 bg-[#1a5e3f] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">阿算跟它們根本不一樣</h2>
          <p className="text-white/80 leading-relaxed max-w-lg mx-auto text-lg">
            阿算不是工具。它是唯一一個
            <strong className="text-white">
              記得你、在乎你、陪你走到目標
            </strong>
            的夥伴。
          </p>
        </div>
      </section>

      {/* ── 五層價值 ── */}
      <section className="py-16 px-5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3">
            阿算幫你做到的五件事
          </h2>
          <p className="text-center text-[#6b6560] mb-12">
            從「幫你看一餐」到「陪你走完整段旅程」
          </p>

          <div className="space-y-6">
            {[
              {
                num: "1",
                title: "即時確認",
                subtitle: "30 秒知道這餐怎麼樣",
                desc: "拍一張照片傳給阿算，馬上知道蛋白質夠不夠、蔬菜夠不夠、這餐可以怎麼調整。不用手動輸入、不用翻資料庫、不用猜。",
                feel: "「有人幫我看了，我知道方向對不對了。」",
              },
              {
                num: "2",
                title: "記得你是誰",
                subtitle: "只有阿算做得到",
                desc: "阿算知道你上週五外食吃了什麼、你說過膝蓋不好不能跑步、你的目標是 3 個月瘦 5 公斤。它不會給你制式建議，而是基於你的真實狀況來回應。",
                feel: "「這個人真的有在看我。」",
              },
              {
                num: "3",
                title: "看見進步",
                subtitle: "你自己看不到，阿算幫你看到",
                desc: "你覺得「好像沒什麼進步」，但阿算的數據說：你第一週蛋白質充足率 30%，現在 65%。它幫你看見那些你自己忽略的改變。",
                feel: "「原來我真的有在進步，只是自己沒注意到。」",
              },
              {
                num: "4",
                title: "支持，不是限制",
                subtitle: "陪你選擇，不是替你禁止",
                desc: "傳統的飲食方式習慣用「禁止」和「少吃」——你的意志力必須一直對抗慾望，直到撐不住。這條路，每個人都走過，每個人都失敗過。阿算不禁止你任何東西。它理解你的狀況，陪你在每一餐做更好的選擇，教你去選對身體更好的食物。不是批評，不是限制，是幫你做到。",
                feel: "「終於有人不是叫我不能吃什麼，而是告訴我可以怎麼選。」",
              },
              {
                num: "5",
                title: "你的健康存摺",
                subtitle: "讓累積可以被看見",
                desc: "健康通常是一個很模糊的概念——你知道自己「應該要健康」，但不知道自己走到哪了。阿算幫你建立一份專屬的健康存摺，你為身體做的每一個好選擇都被記下來。你的健康力增加了多少、代謝力改善了多少、走過的每一步，都看得見。你越來越能掌握自己的狀況，不用每次都從零開始。",
                feel: "「原來我已經為自己做了這麼多好事。」",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="rounded-2xl border border-[#eee9e5] p-6 bg-white"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#f3f9f5] text-[#2a9d6f] text-sm font-bold flex items-center justify-center shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p className="text-xs text-[#a8a29e]">{item.subtitle}</p>
                  </div>
                </div>
                <p className="text-[15px] text-[#6b6560] leading-relaxed mb-3">
                  {item.desc}
                </p>
                <p className="text-sm text-[#2a9d6f] font-medium italic">
                  {item.feel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 比較表 ── */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
            一張表看懂差異
          </h2>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-[#eee9e5]">
                  <th className="text-left py-3 pr-4 font-semibold text-[#6b6560] w-[28%]" />
                  <th className="text-center py-3 px-3 font-semibold text-[#a8a29e] w-[24%]">
                    熱量計算 App
                  </th>
                  <th className="text-center py-3 px-3 font-semibold text-[#a8a29e] w-[24%]">
                    通用 AI
                  </th>
                  <th className="text-center py-3 px-3 font-bold text-[#2a9d6f] w-[24%]">
                    阿算
                  </th>
                </tr>
              </thead>
              <tbody>
                <CompareRow
                  name="記錄一餐"
                  cal="手動輸入每項食物"
                  ai="可以，但要打很多字"
                  asuan="拍照 30 秒"
                />
                <CompareRow
                  name="記得你是誰"
                  cal="不會"
                  ai="不會（每次重來）"
                  asuan="記得所有歷史"
                />
                <CompareRow
                  name="個人化建議"
                  cal="統一的熱量目標"
                  ai="通用建議"
                  asuan="基於你的代謝類型和習慣"
                />
                <CompareRow
                  name="背後的方法"
                  cal="算熱量"
                  ai="沒有特定方法"
                  asuan="ABC 代謝力重建"
                />
                <CompareRow
                  name="看見進步"
                  cal="只有數字"
                  ai="不保存記錄"
                  asuan="週報 + 里程碑回顧"
                />
                <CompareRow
                  name="情緒支持"
                  cal="沒有"
                  ai="沒有"
                  asuan="懂你的感受，陪你走過"
                />
                <CompareRow
                  name="累積數據"
                  cal="只有熱量記錄"
                  ai="不保存"
                  asuan="完整旅程，越用越懂你"
                />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── ABC 方法論 ── */}
      <section className="py-16 px-5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3">
            阿算用的不是通用營養學
          </h2>
          <p className="text-center text-[#6b6560] mb-10">
            它用的是一休設計的 ABC 代謝力重建方法
          </p>

          <div className="rounded-2xl border border-[#eee9e5] overflow-hidden bg-white">
            <div className="p-6 space-y-4">
              {[
                {
                  letter: "A",
                  title: "Add 加營養",
                  desc: "不叫你少吃，教你加什麼。蛋白質、好的脂肪、足夠的營養——吃飽才能瘦。",
                },
                {
                  letter: "B",
                  title: "Behavior 行為調體質",
                  desc: "調整飲食順序、進食時間、生活行為，讓胰島素回到正常狀態。身體願意燃燒脂肪了，自然就瘦。",
                },
                {
                  letter: "C",
                  title: "Clear 清負擔",
                  desc: "減少慢性發炎、減輕身體負擔，讓細胞的能量工廠重新運轉。不是排毒，是讓身體回到平衡。",
                },
              ].map((item) => (
                <div key={item.letter} className="flex items-start gap-3">
                  <span className="font-bold text-[#2a9d6f] text-lg shrink-0 w-6">
                    {item.letter}
                  </span>
                  <div>
                    <p className="font-bold text-sm">{item.title}</p>
                    <p className="text-sm text-[#6b6560] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-[#6b6560] mt-6">
            阿算的每一個建議，都基於這套方法。不是隨便給你一個通用答案。
          </p>
          <div className="text-center mt-4">
            <Link
              href="/method"
              className="text-[#2a9d6f] font-semibold hover:underline text-sm"
            >
              了解更多 ABC 代謝力重建 →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 怎麼開始 ── */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
            怎麼開始？
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "做代謝類型測驗",
                desc: "8 個生活小問題，30 秒測出你的代謝類型。阿算會根據你的類型給你個人化的建議。",
              },
              {
                step: "2",
                title: "加入 LINE，認識阿算",
                desc: "阿算住在 LINE 裡。加入之後，它會自動知道你的代謝類型，開始跟你對話。",
              },
              {
                step: "3",
                title: "3 天免費體驗",
                desc: "你照平常吃就好，每天拍一餐給阿算看。不用改變任何事——阿算先幫你了解你的飲食長什麼樣。",
              },
              {
                step: "4",
                title: "覺得有用？繼續走",
                desc: "3 天之後，你可以選擇繼續免費使用，或訂閱讓阿算完整陪伴你。沒有壓力，你決定。",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#2a9d6f] text-white text-sm font-bold flex items-center justify-center shrink-0">
                    {item.step}
                  </div>
                  {item.step !== "4" && (
                    <div className="w-0.5 flex-1 bg-[#eee9e5] mt-2" />
                  )}
                </div>
                <div className={item.step !== "4" ? "pb-6" : ""}>
                  <p className="font-bold text-lg mb-1">{item.title}</p>
                  <p className="text-sm text-[#6b6560] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 一句話 ── */}
      <section className="py-12 px-5">
        <div className="max-w-xl mx-auto text-center">
          <div className="rounded-2xl bg-[#f3f9f5] border border-[#2a9d6f]/20 p-8">
            <p className="text-xl font-bold mb-3 leading-relaxed">
              「幫你確認方向對不對、
              <br className="sm:hidden" />
              陪你走到目標。」
            </p>
            <p className="text-sm text-[#6b6560]">
              這是阿算存在的理由。
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            第一步，了解你的代謝類型
          </h2>
          <p className="text-[#6b6560] mb-8">
            8 個生活小問題，30 秒就能測出來
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
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#6b6560] border border-[#eee9e5] rounded-full hover:bg-[#f8faf7] transition-colors"
            >
              直接加入 LINE
            </a>
          </div>
          <p className="text-sm text-[#a8a29e] mt-8">
            我是一休，陪你健康的瘦一輩子
          </p>
        </div>
      </section>
    </>
  );
}

/* ── 比較表輔助元件 ── */

function CompareRow({
  name,
  cal,
  ai,
  asuan,
}: {
  name: string;
  cal: string;
  ai: string;
  asuan: string;
}) {
  return (
    <tr className="border-b border-[#eee9e5]/60">
      <td className="py-3 pr-4 text-[#2a2520] font-medium">{name}</td>
      <td className="py-3 px-3 text-center text-[#a8a29e]">{cal}</td>
      <td className="py-3 px-3 text-center text-[#a8a29e]">{ai}</td>
      <td className="py-3 px-3 text-center text-[#2a2520] font-medium">
        {asuan}
      </td>
    </tr>
  );
}
