"use client";

import { useState } from "react";
import Link from "next/link";
import { StickyLineCTA } from "@/app/sticky-line-cta";

type Gender = "female" | "male";

type RiskLevel = "low" | "moderate" | "high";

function getRiskLevel(gender: Gender, whr: number): RiskLevel {
  if (gender === "female") {
    if (whr < 0.8) return "low";
    if (whr <= 0.85) return "moderate";
    return "high";
  }
  // male
  if (whr < 0.9) return "low";
  if (whr <= 0.95) return "moderate";
  return "high";
}

const RISK_CONFIG: Record<
  RiskLevel,
  { label: string; color: string; bg: string; border: string }
> = {
  low: {
    label: "低風險",
    color: "#2a9d6f",
    bg: "#f3f9f5",
    border: "#2a9d6f",
  },
  moderate: {
    label: "中等風險",
    color: "#d97706",
    bg: "#fffbeb",
    border: "#d97706",
  },
  high: {
    label: "高風險",
    color: "#dc2626",
    bg: "#fef2f2",
    border: "#dc2626",
  },
};

export default function WaistHipPage() {
  const [gender, setGender] = useState<Gender>("female");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [result, setResult] = useState<{
    whr: number;
    risk: RiskLevel;
  } | null>(null);

  const handleCalc = () => {
    const w = parseFloat(waist);
    const h = parseFloat(hip);
    if (!w || !h || w <= 0 || h <= 0) return;

    const whr = w / h;
    const risk = getRiskLevel(gender, whr);

    setResult({ whr: Math.round(whr * 100) / 100, risk });

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
            className="px-3 py-1.5 rounded-full text-sm font-medium border border-[#eee9e5] text-[#6b6560] hover:border-[#2a9d6f] hover:text-[#2a9d6f] transition-colors"
          >
            TDEE 計算
          </Link>
          <Link
            href="/tools/protein"
            className="px-3 py-1.5 rounded-full text-sm font-medium border border-[#eee9e5] text-[#6b6560] hover:border-[#2a9d6f] hover:text-[#2a9d6f] transition-colors"
          >
            蛋白質計算
          </Link>
          <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-[#2a9d6f] text-white">
            腰臀比
          </span>
          <Link
            href="/tools/insulin-check"
            className="px-3 py-1.5 rounded-full text-sm font-medium border border-[#eee9e5] text-[#6b6560] hover:border-[#2a9d6f] hover:text-[#2a9d6f] transition-colors"
          >
            胰島素阻抗自評
          </Link>
        </div>

        <p className="text-sm font-semibold text-[#2a9d6f] mb-4 tracking-wide">
          免費工具
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight mb-3">
          腰臀比計算機 — 你的脂肪囤在哪裡？
        </h1>
        <p className="text-[#6b6560] mb-8">
          量腰圍和臀圍，看你的脂肪分布是否代表代謝失調的風險。
        </p>

        {/* 計算表單 */}
        <div className="rounded-2xl border border-[#eee9e5] bg-white p-6 space-y-6">
          {/* 性別 */}
          <div>
            <label className="block text-sm font-bold mb-2">性別</label>
            <div className="flex gap-3">
              {(["female", "male"] as const).map((g) => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  className={`flex-1 py-3 rounded-xl text-sm font-medium transition-colors ${
                    gender === g
                      ? "bg-[#2a9d6f] text-white"
                      : "bg-[#f8faf7] text-[#6b6560] hover:bg-[#eee9e5]"
                  }`}
                >
                  {g === "female" ? "女性" : "男性"}
                </button>
              ))}
            </div>
          </div>

          {/* 腰圍 / 臀圍 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold mb-2">腰圍</label>
              <input
                type="number"
                placeholder="80"
                value={waist}
                onChange={(e) => setWaist(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#eee9e5] text-center text-lg focus:outline-none focus:border-[#2a9d6f] transition-colors"
              />
              <p className="text-xs text-[#a8a29e] text-center mt-1">公分</p>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">臀圍</label>
              <input
                type="number"
                placeholder="95"
                value={hip}
                onChange={(e) => setHip(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#eee9e5] text-center text-lg focus:outline-none focus:border-[#2a9d6f] transition-colors"
              />
              <p className="text-xs text-[#a8a29e] text-center mt-1">公分</p>
            </div>
          </div>

          {/* 計算按鈕 */}
          <button
            onClick={handleCalc}
            className="w-full py-4 bg-[#2a9d6f] text-white font-bold rounded-xl hover:shadow-md transition-shadow text-base"
          >
            計算
          </button>
        </div>

        {/* 結果 */}
        {result && (
          <div id="calc-result" className="mt-8 space-y-6 scroll-mt-20">
            <div className="rounded-2xl border border-[#eee9e5] bg-white p-6">
              <p className="text-sm text-[#a8a29e] mb-4">你的計算結果</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* 腰臀比數值 */}
                <div className="text-center p-5 rounded-xl bg-[#f8faf7]">
                  <p className="text-xs text-[#a8a29e] mb-1">你的腰臀比</p>
                  <p className="text-3xl font-bold text-[#2a2520]">
                    {result.whr.toFixed(2)}
                  </p>
                </div>

                {/* 風險等級 */}
                <div
                  className="text-center p-5 rounded-xl"
                  style={{ backgroundColor: RISK_CONFIG[result.risk].bg }}
                >
                  <p className="text-xs text-[#a8a29e] mb-1">風險等級</p>
                  <p
                    className="text-2xl font-bold"
                    style={{ color: RISK_CONFIG[result.risk].color }}
                  >
                    {RISK_CONFIG[result.risk].label}
                  </p>
                </div>
              </div>

              {/* 標準對照 */}
              <div className="p-4 rounded-xl bg-[#f8faf7] text-sm">
                <p className="font-bold mb-2">
                  WHO 標準（{gender === "female" ? "女性" : "男性"}）
                </p>
                <div className="space-y-1 text-[#6b6560]">
                  {gender === "female" ? (
                    <>
                      <p>
                        <span className="inline-block w-3 h-3 rounded-full bg-[#2a9d6f] mr-2 align-middle" />
                        低風險：&lt; 0.80
                      </p>
                      <p>
                        <span className="inline-block w-3 h-3 rounded-full bg-[#d97706] mr-2 align-middle" />
                        中等風險：0.80 - 0.85
                      </p>
                      <p>
                        <span className="inline-block w-3 h-3 rounded-full bg-[#dc2626] mr-2 align-middle" />
                        高風險：&gt; 0.85
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        <span className="inline-block w-3 h-3 rounded-full bg-[#2a9d6f] mr-2 align-middle" />
                        低風險：&lt; 0.90
                      </p>
                      <p>
                        <span className="inline-block w-3 h-3 rounded-full bg-[#d97706] mr-2 align-middle" />
                        中等風險：0.90 - 0.95
                      </p>
                      <p>
                        <span className="inline-block w-3 h-3 rounded-full bg-[#dc2626] mr-2 align-middle" />
                        高風險：&gt; 0.95
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* 一休的建議 — 手寫信風格 */}
            <div className="letter-style rounded-2xl border border-[#e8e0d8] p-6 sm:p-8 shadow-sm">
              <div
                className="flex items-center gap-2 mb-5"
                style={{ lineHeight: "normal" }}
              >
                <span
                  className="w-8 h-8 rounded-full bg-[#2a9d6f] text-white text-xs flex items-center justify-center font-bold"
                  style={{ fontFamily: "inherit" }}
                >
                  休
                </span>
                <span className="font-semibold text-[15px]">一休寫給你的</span>
              </div>
              <div className="space-y-1 text-[15px] text-[#3a3530]">
                <p>
                  腰臀比偏高代表脂肪集中在腹部，這是
                  <strong>代謝失調最明顯的外在指標</strong>。
                </p>
                <p>
                  腹部脂肪（內臟脂肪）會分泌發炎因子，推高
                  <Link
                    href="/concepts/insulin-resistance"
                    className="text-[#2a9d6f] underline decoration-[#2a9d6f]/35 hover:decoration-[#2a9d6f]"
                  >
                    胰島素阻抗
                  </Link>
                  。這不只是外觀問題，是代謝在發出訊號。
                </p>
                <p>
                  <Link
                    href="/concepts/cortisol"
                    className="text-[#2a9d6f] underline decoration-[#2a9d6f]/35 hover:decoration-[#2a9d6f]"
                  >
                    皮質醇
                  </Link>
                  （壓力荷爾蒙）會指揮脂肪往肚子集中。所以壓力大、睡不好的人，肚子通常特別大。
                </p>
                <p>
                  不是叫你去焦慮，是讓你知道——
                  <strong>「肚子大」背後有原因，而且這個原因是可以處理的。</strong>
                </p>
                <p>
                  想了解更多，可以看
                  <Link
                    href="/concepts/chronic-inflammation"
                    className="text-[#2a9d6f] underline decoration-[#2a9d6f]/35 hover:decoration-[#2a9d6f]"
                  >
                    慢性發炎
                  </Link>
                  和
                  <Link
                    href="/articles/belly-fat-stress-not-food"
                    className="text-[#2a9d6f] underline decoration-[#2a9d6f]/35 hover:decoration-[#2a9d6f]"
                  >
                    肚子大不一定是吃太多
                  </Link>
                  。
                </p>
              </div>
            </div>

            {/* 連結回痛點 + 主 CTA */}
            <div className="rounded-2xl border border-[#eee9e5] bg-white p-6 text-center">
              <p className="text-[15px] text-[#6b6560] leading-relaxed mb-2">
                腰臀比偏高代表脂肪往肚子集中——但這不只是外觀問題。
              </p>
              <p className="text-[15px] text-[#2a2520] font-semibold leading-relaxed mb-6">
                你的代謝類型決定了脂肪為什麼囤在那裡，以及怎麼處理。
              </p>

              {/* 主 CTA: 測驗 */}
              <a
                href="/quiz"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#2a9d6f] rounded-full shadow-lg hover:shadow-xl transition-shadow mb-4"
              >
                30 秒測出你的代謝類型 →
              </a>

              {/* 副 CTA: LINE 體驗預告 */}
              <div className="pt-4 border-t border-[#eee9e5]">
                <p className="text-xs text-[#a8a29e] mb-2">或者</p>
                <a
                  href="https://lin.ee/x41s2Su"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-[#06C755] text-[#06C755] hover:bg-[#06C755] hover:text-white transition-colors"
                >
                  加入一休的 LINE，之後開放體驗時優先通知你
                </a>
              </div>
            </div>

            {/* 輔助連結 */}
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <Link href="/guide" className="text-[#6b6560] hover:text-[#2a9d6f] transition-colors">
                完全指南 →
              </Link>
              <Link href="/concepts" className="text-[#6b6560] hover:text-[#2a9d6f] transition-colors">
                代謝科學 →
              </Link>
            </div>
          </div>
        )}

        {/* SEO 內容 */}
        <div className="mt-16 space-y-8">
          <h2 className="text-xl font-bold">什麼是腰臀比？為什麼比體重更重要？</h2>
          <div className="space-y-4 text-[15px] text-[#6b6560] leading-relaxed">
            <p>
              <strong className="text-[#2a2520]">腰臀比（WHR, Waist-Hip Ratio）</strong>
              是腰圍除以臀圍的數值。它反映的不是你胖不胖，而是你的脂肪「囤在哪裡」。
            </p>
            <p>
              同樣的體重，脂肪集中在腹部（蘋果型）和脂肪分布在臀腿（梨型），代謝風險完全不同。研究顯示，腰臀比偏高的人，罹患心血管疾病、第二型糖尿病的風險明顯更高。
            </p>
            <p>
              <strong className="text-[#2a2520]">BMI 看不出這件事</strong>
              。一個 BMI 正常但腰臀比偏高的人（俗稱「隱性肥胖」），代謝風險可能比 BMI 超標但脂肪分布均勻的人更大。
            </p>
          </div>

          <h2 className="text-xl font-bold">怎麼正確量腰圍和臀圍？</h2>
          <div className="space-y-4 text-[15px] text-[#6b6560] leading-relaxed">
            <p>
              <strong className="text-[#2a2520]">量腰圍：</strong>
              站立、正常呼氣後，在肚臍上方（肋骨下緣和髖骨上緣的中間）繞一圈。不要刻意縮肚子。
            </p>
            <p>
              <strong className="text-[#2a2520]">量臀圍：</strong>
              站立，在臀部最寬處繞一圈。皮尺要平行地面，不要歪斜。
            </p>
            <p>
              建議早上起床後、上完廁所、空腹時量，這時候數值最穩定。不同時間量可能差 2-3 公分。
            </p>
          </div>

          <h2 className="text-xl font-bold">腰臀比跟代謝症候群的關係</h2>
          <div className="space-y-4 text-[15px] text-[#6b6560] leading-relaxed">
            <p>
              <strong className="text-[#2a2520]">代謝症候群</strong>
              是一組代謝異常的指標組合，包含：腰圍過大、血壓偏高、血糖偏高、三酸甘油脂偏高、高密度膽固醇偏低。五項中有三項就符合。
            </p>
            <p>
              而腰臀比偏高，往往是最早出現、也最容易自己觀察到的指標。它代表內臟脂肪堆積，而內臟脂肪會分泌
              <Link
                href="/concepts/chronic-inflammation"
                className="text-[#2a9d6f] underline decoration-[#2a9d6f]/35 hover:decoration-[#2a9d6f]"
              >
                發炎因子
              </Link>
              ，推動胰島素阻抗、升高血壓和血脂。
            </p>
            <p>
              好消息是：內臟脂肪通常是最早減少的脂肪。當你開始調整飲食（尤其是減少精緻碳水），腰圍往往是最先有變化的地方。
            </p>
          </div>

          {/* 收尾 CTA */}
          <div className="text-center py-8 border-t border-[#eee9e5]">
            <p className="text-[#6b6560] mb-4">
              數字告訴你脂肪在哪裡，<strong className="text-[#2a2520]">代謝類型告訴你為什麼</strong>。
            </p>
            <a
              href="/quiz"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#2a9d6f] rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              測出你的代謝類型 →
            </a>
          </div>
        </div>
      </div>

      {/* Sticky LINE CTA */}
      <StickyLineCTA />
    </section>
  );
}
