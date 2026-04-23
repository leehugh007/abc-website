"use client";

import { useState } from "react";
import Link from "next/link";
import { StickyLineCTA } from "@/app/sticky-line-cta";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const SYMPTOMS = [
  "下午特別容易想喝手搖飲或吃甜食",
  "吃飽之後很容易想睡覺",
  "肚子（腰部）的肉特別多，四肢相對瘦",
  "脖子或腋下有暗沉洗不掉（黑棘皮症）",
  "健檢報告的三酸甘油脂偏高",
  "血壓偏高，或正在吃血壓藥",
  "怎麼少吃都瘦不下來",
  "經常覺得疲倦、沒精神",
  "女性：月經不規律或有多囊卵巢",
  "空腹血糖正常，但飯後容易覺得很餓",
];

type RiskLevel = "low" | "moderate" | "high" | "very-high";

function getRiskLevel(count: number): RiskLevel {
  if (count <= 2) return "low";
  if (count <= 5) return "moderate";
  if (count <= 8) return "high";
  return "very-high";
}

const RISK_CONFIG: Record<
  RiskLevel,
  { label: string; color: string; bg: string; desc: string }
> = {
  low: {
    label: "低風險",
    color: "#2a9d6f",
    bg: "#f3f9f5",
    desc: "目前看起來不錯，保持下去",
  },
  moderate: {
    label: "中等風險",
    color: "#d97706",
    bg: "#fffbeb",
    desc: "你的身體可能已經開始出現胰島素阻抗的早期跡象",
  },
  high: {
    label: "高風險",
    color: "#dc2626",
    bg: "#fef2f2",
    desc: "你的多個症狀都指向胰島素阻抗，建議認真處理",
  },
  "very-high": {
    label: "很高風險",
    color: "#991b1b",
    bg: "#fef2f2",
    desc: "強烈建議就醫檢查，同時開始調整飲食",
  },
};

export default function InsulinCheckPage() {
  const [checked, setChecked] = useState<boolean[]>(
    new Array(SYMPTOMS.length).fill(false)
  );
  const [result, setResult] = useState<{
    count: number;
    risk: RiskLevel;
  } | null>(null);

  const track = (event: string, params?: Record<string, string>) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", event, params);
    }
  };

  const toggleSymptom = (index: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const handleCheck = () => {
    const count = checked.filter(Boolean).length;
    const risk = getRiskLevel(count);
    setResult({ count, risk });

    track("insulin_check_complete", {
      score: String(count),
      risk_level: risk,
    });

    setTimeout(() => {
      document
        .getElementById("calc-result")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <section className="pt-10 pb-16 px-5">
      <div className="max-w-2xl mx-auto">
        {/* 工具導航 */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Link
            href="/tools"
            className="px-3 py-1.5 rounded-full text-sm font-medium border border-edge text-subtle hover:border-brand hover:text-brand transition-colors"
          >
            TDEE 計算
          </Link>
          <Link
            href="/tools/protein"
            className="px-3 py-1.5 rounded-full text-sm font-medium border border-edge text-subtle hover:border-brand hover:text-brand transition-colors"
          >
            蛋白質計算
          </Link>
          <Link
            href="/tools/blood-sugar"
            className="px-3 py-1.5 rounded-full text-sm font-medium border border-edge text-subtle hover:border-brand hover:text-brand transition-colors"
          >
            血糖穩定度
          </Link>
          <Link
            href="/tools/waist-hip"
            className="px-3 py-1.5 rounded-full text-sm font-medium border border-edge text-subtle hover:border-brand hover:text-brand transition-colors"
          >
            腰臀比
          </Link>
          <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-brand text-white">
            胰島素阻抗自評
          </span>
        </div>

        <p className="text-sm font-semibold text-brand mb-4 tracking-wide">
          免費工具
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight mb-3">
          胰島素阻抗風險自評 — 你的身體在「省電」嗎？
        </h1>
        <p className="text-subtle mb-4">
          10 個日常症狀勾選，評估你是否可能有胰島素阻抗。不需要抽血。
        </p>

        {/* 免責聲明 */}
        <div className="rounded-xl bg-[#fffbeb] border border-[#fde68a] px-4 py-3 mb-8">
          <p className="text-sm text-[#92400e]">
            ⚠️ 本自評僅供參考，不能取代醫療診斷。勾選結果不代表確診，僅作為初步風險評估。
          </p>
        </div>

        {/* 症狀勾選 */}
        <div className="rounded-2xl border border-edge bg-white p-6 space-y-6">
          <div>
            <label className="block text-sm font-bold mb-4">
              以下症狀，你有幾個？（勾選符合的）
            </label>
            <div className="space-y-2">
              {SYMPTOMS.map((symptom, i) => (
                <button
                  key={i}
                  onClick={() => toggleSymptom(i)}
                  className={`w-full text-left px-4 py-3 rounded-xl border transition-colors flex items-start gap-3 ${
                    checked[i]
                      ? "border-brand bg-surface-green"
                      : "border-edge hover:border-edge-dark"
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                      checked[i]
                        ? "bg-brand border-brand"
                        : "border-[#ccc5c0] bg-white"
                    }`}
                  >
                    {checked[i] && (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 6L5 9L10 3"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                  <span className="text-sm">
                    <span className="text-[#a8a29e] mr-2">{i + 1}.</span>
                    {symptom}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="text-center text-sm text-[#a8a29e]">
            已勾選 {checked.filter(Boolean).length} / {SYMPTOMS.length} 項
          </div>

          {/* 評估按鈕 */}
          <button
            onClick={handleCheck}
            className="w-full py-4 bg-brand text-white font-bold rounded-xl hover:shadow-md transition-shadow text-base"
          >
            查看評估結果
          </button>
        </div>

        {/* 結果 */}
        {result && (
          <div id="calc-result" className="mt-8 space-y-6 scroll-mt-20">
            <div className="rounded-2xl border border-edge bg-white p-6">
              <p className="text-sm text-[#a8a29e] mb-4">你的評估結果</p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* 符合項目數 */}
                <div className="text-center p-5 rounded-xl bg-surface">
                  <p className="text-xs text-[#a8a29e] mb-1">符合症狀</p>
                  <p className="text-3xl font-bold text-ink">
                    {result.count}
                    <span className="text-lg font-normal text-[#a8a29e]">
                      {" "}
                      / 10
                    </span>
                  </p>
                </div>

                {/* 風險等級 */}
                <div
                  className="text-center p-5 rounded-xl"
                  style={{ backgroundColor: RISK_CONFIG[result.risk].bg }}
                >
                  <p className="text-xs text-[#a8a29e] mb-1">風險評估</p>
                  <p
                    className="text-2xl font-bold"
                    style={{ color: RISK_CONFIG[result.risk].color }}
                  >
                    {RISK_CONFIG[result.risk].label}
                  </p>
                </div>
              </div>

              <p className="text-center text-sm text-subtle px-4">
                {RISK_CONFIG[result.risk].desc}
              </p>
            </div>

            {/* 一休的建議 — 手寫信風格（根據風險等級） */}
            <div className="letter-style rounded-2xl border border-[#e8e0d8] p-6 sm:p-8 shadow-sm">
              <div
                className="flex items-center gap-2 mb-5"
                style={{ lineHeight: "normal" }}
              >
                <span
                  className="w-8 h-8 rounded-full bg-brand text-white text-xs flex items-center justify-center font-bold"
                  style={{ fontFamily: "inherit" }}
                >
                  休
                </span>
                <span className="font-semibold text-[15px]">一休寫給你的</span>
              </div>
              <div className="space-y-1 text-[15px] text-[#3a3530]">
                {result.risk === "low" ? (
                  <>
                    <p>
                      你的代謝目前看起來不錯。
                    </p>
                    <p>
                      但代謝是動態的，壓力、睡眠、飲食習慣改變都可能影響。
                      <strong>現在的好狀態不是理所當然</strong>
                      ，是你的身體在告訴你：目前的方向是對的。
                    </p>
                    <p>
                      想保持下去，可以了解一下
                      <Link
                        href="/guide"
                        className="text-brand underline decoration-brand/35 hover:decoration-brand"
                      >
                        代謝是怎麼運作的
                      </Link>
                      。知道原理，你就不會被網路上各種矛盾的說法搞混。
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      這些症狀很多人都有，但大部分人不知道
                      <strong>它們之間有關聯</strong>。
                    </p>
                    <p>
                      下午想喝手搖飲、吃飽就想睡、肚子特別大、怎麼少吃都瘦不下來——它們的共同根源很可能就是
                      <Link
                        href="/concepts/insulin-resistance"
                        className="text-brand underline decoration-brand/35 hover:decoration-brand"
                      >
                        胰島素阻抗
                      </Link>
                      。
                    </p>
                    <p>
                      好消息是：
                      <strong>胰島素阻抗是可逆的。</strong>
                      透過飲食和生活習慣的調整可以改善，不一定需要吃藥。
                    </p>
                    <p>
                      第一步不難——調整吃東西的順序和選擇就好。可以看看
                      <Link
                        href="/articles/insulin-resistance-complete-guide"
                        className="text-brand underline decoration-brand/35 hover:decoration-brand"
                      >
                        胰島素阻抗完整指南
                      </Link>
                      和
                      <Link
                        href="/articles/normal-blood-sugar-trap"
                        className="text-brand underline decoration-brand/35 hover:decoration-brand"
                      >
                        空腹血糖正常的陷阱
                      </Link>
                      。
                    </p>
                    {(result.risk === "high" ||
                      result.risk === "very-high") && (
                      <p>
                        你的症狀比較多，建議也跟醫師聊聊，
                        <strong>
                          要求檢查空腹胰島素（不只是空腹血糖）
                        </strong>
                        。很多醫師不會主動檢查這個項目，你可以主動提出。
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* 連結回痛點 + 主 CTA */}
            <div className="rounded-2xl border border-edge bg-white p-6 text-center">
              <p className="text-[15px] text-subtle leading-relaxed mb-2">
                這些症狀背後可能有一個共同原因。
              </p>
              <p className="text-[15px] text-ink font-semibold leading-relaxed mb-6">
                你的代謝類型會告訴你，身體卡在哪裡、該怎麼調整。
              </p>

              {/* 主 CTA: 測驗 */}
              <a
                href="/quiz"
                onClick={() => track("click_quiz_cta", { source: "insulin_check" })}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand rounded-full shadow-lg hover:shadow-xl transition-shadow mb-4"
              >
                30 秒測出你的代謝類型 →
              </a>

              {/* 副 CTA: LINE 體驗預告 */}
              <div className="pt-4 border-t border-edge">
                <p className="text-xs text-[#a8a29e] mb-2">或者</p>
                <a
                  href="https://lin.ee/7xrRYez"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("click_line_cta", { source: "insulin_check" })}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-line-green text-line-green hover:bg-line-green hover:text-white transition-colors"
                >
                  加入一休的 LINE，之後開放體驗時優先通知你
                </a>
              </div>
            </div>

            {/* 輔助連結 */}
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <Link href="/guide" className="text-subtle hover:text-brand transition-colors">
                完全指南 →
              </Link>
              <Link href="/concepts" className="text-subtle hover:text-brand transition-colors">
                代謝科學 →
              </Link>
            </div>
          </div>
        )}

        {/* SEO 內容 */}
        <div className="mt-16 space-y-8">
          <h2 className="text-xl font-bold">什麼是胰島素阻抗？</h2>
          <div className="space-y-4 text-[15px] text-subtle leading-relaxed">
            <p>
              簡單說，<strong className="text-ink">胰島素阻抗</strong>
              就是你的細胞對胰島素「不敏感」了。
            </p>
            <p>
              胰島素是身體用來處理血糖的荷爾蒙。正常情況下，你吃東西 → 血糖上升 → 胰島素出來 → 把血糖送進細胞。但當細胞長期被太多胰島素轟炸（通常是因為吃太多精緻碳水），它們會開始「無視」胰島素的訊號。
            </p>
            <p>
              結果就是：身體需要分泌更多胰島素才能處理同樣的血糖。而高胰島素會促進脂肪儲存、抑制脂肪分解——這就是為什麼有些人怎麼少吃都瘦不下來。
            </p>
            <p>
              想深入了解，請看
              <Link
                href="/concepts/insulin-resistance"
                className="text-brand underline decoration-brand/35 hover:decoration-brand"
              >
                胰島素阻抗完整說明
              </Link>
              。
            </p>
          </div>

          <h2 className="text-xl font-bold">
            為什麼醫生不一定會告訴你？
          </h2>
          <div className="space-y-4 text-[15px] text-subtle leading-relaxed">
            <p>
              大部分常規健檢只看<strong className="text-ink">空腹血糖</strong>
              。空腹血糖正常（&lt; 100 mg/dL），報告就會顯示「正常」。
            </p>
            <p>
              但問題是：胰島素阻抗的早期，你的身體會用「加倍分泌胰島素」來維持血糖正常。所以空腹血糖可以正常好幾年，
              <strong className="text-ink">
                但你的胰島素早就在超時工作了
              </strong>
              。等到空腹血糖也開始偏高，通常已經是比較後期的狀態。
            </p>
            <p>
              如果你想早期發現，可以請醫師加驗
              <strong className="text-ink">空腹胰島素</strong>
              。這個項目通常不在常規健檢裡，但自費也不貴。
            </p>
          </div>

          <h2 className="text-xl font-bold">胰島素阻抗可以逆轉嗎？</h2>
          <div className="space-y-4 text-[15px] text-subtle leading-relaxed">
            <p>
              <strong className="text-ink">可以。</strong>
              而且不一定需要吃藥。
            </p>
            <p>
              飲食調整是最有效的方式：減少精緻碳水和添加糖、增加蛋白質和好的脂肪、注意吃東西的順序（先吃菜和肉，最後吃澱粉）。
            </p>
            <p>
              加上規律的運動（尤其是阻力訓練）、充足的睡眠、壓力管理，大部分人的胰島素敏感度都可以改善。
            </p>
            <p>
              ABC 代謝重建瘦身法的核心就是在處理這件事——不是教你少吃，是教你怎麼吃、讓代謝恢復正常運作。
            </p>
          </div>

          {/* 收尾 CTA */}
          <div className="text-center py-8 border-t border-edge">
            <p className="text-subtle mb-4">
              了解胰島素阻抗是第一步，<strong className="text-ink">找到你的代謝類型是第二步</strong>。
            </p>
            <a
              href="/quiz"
              onClick={() => track("click_quiz_cta", { source: "insulin_check_bottom" })}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              測出你的代謝類型，找到適合你的方法 →
            </a>
          </div>
        </div>

        {/* 底部免責聲明 */}
        <div className="mt-12 rounded-xl bg-surface border border-edge px-5 py-4">
          <p className="text-sm text-[#a8a29e] leading-relaxed">
            ⚠️
            本自評僅供參考，不能取代醫療診斷。如果你有多個症狀，建議諮詢醫師並要求檢查空腹胰島素。
          </p>
        </div>
      </div>

      {/* Sticky LINE CTA */}
      <StickyLineCTA />
    </section>
  );
}
