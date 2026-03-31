"use client";

import { useState } from "react";
import Link from "next/link";
import { StickyLineCTA } from "@/app/sticky-line-cta";

type Goal = "maintain" | "fat-loss" | "intense";

const GOAL_OPTIONS: {
  value: Goal;
  label: string;
  desc: string;
  min: number;
  max: number;
}[] = [
  {
    value: "maintain",
    label: "維持健康",
    desc: "一般日常活動",
    min: 1.0,
    max: 1.2,
  },
  {
    value: "fat-loss",
    label: "減脂增肌",
    desc: "想瘦身、同時保住肌肉",
    min: 1.2,
    max: 1.6,
  },
  {
    value: "intense",
    label: "高強度訓練",
    desc: "重訓或高強度運動每週 4 次以上",
    min: 1.6,
    max: 2.0,
  },
];

function getFoodExamples(minG: number, maxG: number) {
  const avgG = Math.round((minG + maxG) / 2);
  const eggs = Math.round(avgG / 7);
  const chickenPalms = Math.round(avgG / 31);
  const tofuBoxes = Math.round(avgG / 12);
  const soyMilkCups = Math.round(avgG / 7);
  const fishServings = Math.round(avgG / 20);

  return {
    avgG,
    eggs,
    chickenPalms,
    tofuBoxes,
    soyMilkCups,
    fishServings,
    perMeal: Math.round(avgG / 3),
  };
}

export default function ProteinPage() {
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState<Goal>("fat-loss");
  const [result, setResult] = useState<{
    minG: number;
    maxG: number;
    food: ReturnType<typeof getFoodExamples>;
  } | null>(null);

  const handleCalc = () => {
    const w = parseFloat(weight);
    if (!w || w <= 0) return;

    const opt = GOAL_OPTIONS.find((o) => o.value === goal)!;
    const minG = Math.round(w * opt.min);
    const maxG = Math.round(w * opt.max);
    const food = getFoodExamples(minG, maxG);

    setResult({ minG, maxG, food });

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
          <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-[#2a9d6f] text-white">
            蛋白質計算
          </span>
          <Link
            href="/tools/waist-hip"
            className="px-3 py-1.5 rounded-full text-sm font-medium border border-[#eee9e5] text-[#6b6560] hover:border-[#2a9d6f] hover:text-[#2a9d6f] transition-colors"
          >
            腰臀比
          </Link>
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
          「我一天該吃多少蛋白質？」計算機
        </h1>
        <p className="text-[#6b6560] mb-8">
          輸入體重和目標，算出你每天需要多少蛋白質，以及怎麼用日常食物達標。
        </p>

        {/* 計算表單 */}
        <div className="rounded-2xl border border-[#eee9e5] bg-white p-6 space-y-6">
          {/* 體重 */}
          <div>
            <label className="block text-sm font-bold mb-2">體重</label>
            <div className="max-w-[200px]">
              <input
                type="number"
                placeholder="65"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#eee9e5] text-center text-lg focus:outline-none focus:border-[#2a9d6f] transition-colors"
              />
              <p className="text-xs text-[#a8a29e] text-center mt-1">公斤</p>
            </div>
          </div>

          {/* 目標 */}
          <div>
            <label className="block text-sm font-bold mb-2">你的目標</label>
            <div className="space-y-2">
              {GOAL_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setGoal(opt.value)}
                  className={`w-full text-left px-4 py-3 rounded-xl border transition-colors ${
                    goal === opt.value
                      ? "border-[#2a9d6f] bg-[#f3f9f5]"
                      : "border-[#eee9e5] hover:border-[#ddd5cf]"
                  }`}
                >
                  <span className="text-sm font-medium">{opt.label}</span>
                  <span className="text-xs text-[#a8a29e] ml-2">
                    {opt.desc}
                  </span>
                  <span className="text-xs text-[#a8a29e] ml-2">
                    （{opt.min}-{opt.max}g/kg）
                  </span>
                </button>
              ))}
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

              {/* 每日蛋白質建議 */}
              <div className="text-center p-5 rounded-xl bg-[#f3f9f5] mb-6">
                <p className="text-xs text-[#2a9d6f] mb-1">每日蛋白質建議</p>
                <p className="text-3xl font-bold text-[#2a9d6f]">
                  {result.minG} - {result.maxG}
                  <span className="text-sm font-normal text-[#a8a29e] ml-1">
                    克/天
                  </span>
                </p>
              </div>

              {/* 食物換算 */}
              <div className="space-y-3 mb-6">
                <p className="text-sm font-bold">換算成食物大概是：</p>
                <div className="p-4 rounded-xl bg-[#f8faf7] space-y-2 text-[15px]">
                  <p>
                    🥚 大約等於{" "}
                    <strong>{result.food.eggs} 顆雞蛋</strong> +{" "}
                    <strong>
                      {result.food.chickenPalms} 塊手掌大的雞胸肉
                    </strong>
                  </p>
                  <p>
                    🫘 或是{" "}
                    <strong>{result.food.tofuBoxes} 盒豆腐</strong> +{" "}
                    <strong>{result.food.soyMilkCups} 杯無糖豆漿</strong> +{" "}
                    <strong>{result.food.fishServings} 份魚（100g）</strong>
                  </p>
                  <p>
                    🍳 或是混著吃：2 顆蛋 + 1 塊雞胸 + 1 份魚 + 1 杯豆漿
                  </p>
                </div>
              </div>

              {/* 每餐分配 */}
              <div className="text-center p-4 rounded-xl bg-[#f8faf7]">
                <p className="text-xs text-[#a8a29e] mb-1">
                  每餐分配建議（一天三餐）
                </p>
                <p className="text-2xl font-bold text-[#2a2520]">
                  每餐約 {result.food.perMeal}
                  <span className="text-sm font-normal text-[#a8a29e] ml-1">
                    克
                  </span>
                </p>
                <p className="text-xs text-[#6b6560] mt-1">
                  平均分配，每餐都要有蛋白質
                </p>
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
                  蛋白質是 ABC 代謝重建裡面<strong>最重要的營養素</strong>。
                </p>
                <p>
                  大部分人不是吃太多，是<strong>蛋白質吃太少</strong>
                  。尤其是習慣吃麵、吃飯、吃麵包當一餐的人，蛋白質幾乎都不夠。
                </p>
                <p>
                  蛋白質不會讓血糖飆高，飽足感是碳水的 2-3
                  倍。吃夠蛋白質，你自然不會一直想吃東西。
                </p>
                <p>
                  不用完美，先從「<strong>每餐都有一份蛋白質</strong>
                  」開始就好。
                </p>
                <p>
                  想了解更多，可以看
                  <Link
                    href="/concepts/insulin-resistance"
                    className="text-[#2a9d6f] underline decoration-[#2a9d6f]/35 hover:decoration-[#2a9d6f]"
                  >
                    胰島素阻抗
                  </Link>
                  和
                  <Link
                    href="/articles/eating-order-blood-sugar"
                    className="text-[#2a9d6f] underline decoration-[#2a9d6f]/35 hover:decoration-[#2a9d6f]"
                  >
                    吃飯順序怎麼影響血糖
                  </Link>
                  。
                </p>
              </div>
            </div>

            {/* 連結回痛點 + 主 CTA */}
            <div className="rounded-2xl border border-[#eee9e5] bg-white p-6 text-center">
              <p className="text-[15px] text-[#6b6560] leading-relaxed mb-2">
                知道要吃多少蛋白質只是第一步。
              </p>
              <p className="text-[15px] text-[#2a2520] font-semibold leading-relaxed mb-6">
                但「怎麼吃」要看你的代謝類型——<br />
                不同類型，吃法差很多。
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
          <h2 className="text-xl font-bold">為什麼蛋白質對減重這麼重要？</h2>
          <div className="space-y-4 text-[15px] text-[#6b6560] leading-relaxed">
            <p>
              蛋白質有三個對減重特別重要的特性：
            </p>
            <p>
              <strong className="text-[#2a2520]">1. 飽足感最強</strong>
              ——同樣熱量的食物，蛋白質帶來的飽足感是碳水化合物的 2-3
              倍。吃夠蛋白質，你自然不會一直想找東西吃。
            </p>
            <p>
              <strong className="text-[#2a2520]">2. 食物熱效應最高</strong>
              ——消化蛋白質本身就需要消耗 20-30%
              的熱量（碳水只有 5-10%，脂肪只有 0-3%）。等於你吃下 100
              大卡的蛋白質，身體只吸收 70-80 大卡。
            </p>
            <p>
              <strong className="text-[#2a2520]">3. 保住肌肉量</strong>
              ——減重過程中如果蛋白質不夠，身體會分解肌肉當能量。肌肉流失
              → 代謝下降 → 更難瘦 →
              復胖。這是很多人越減越肥的根本原因。
            </p>
          </div>

          <h2 className="text-xl font-bold">常見蛋白質食物含量表</h2>
          <div className="rounded-2xl border border-[#eee9e5] bg-white overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#f8faf7]">
                  <th className="text-left px-4 py-3 font-bold">食物</th>
                  <th className="text-right px-4 py-3 font-bold">份量</th>
                  <th className="text-right px-4 py-3 font-bold">
                    蛋白質（克）
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eee9e5]">
                <tr>
                  <td className="px-4 py-2.5">雞蛋</td>
                  <td className="text-right px-4 py-2.5">1 顆</td>
                  <td className="text-right px-4 py-2.5 font-medium">7</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5">雞胸肉</td>
                  <td className="text-right px-4 py-2.5">100g</td>
                  <td className="text-right px-4 py-2.5 font-medium">31</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5">鮭魚</td>
                  <td className="text-right px-4 py-2.5">100g</td>
                  <td className="text-right px-4 py-2.5 font-medium">20</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5">豆腐（板豆腐）</td>
                  <td className="text-right px-4 py-2.5">1 盒</td>
                  <td className="text-right px-4 py-2.5 font-medium">
                    8-15
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5">無糖豆漿</td>
                  <td className="text-right px-4 py-2.5">1 杯（260ml）</td>
                  <td className="text-right px-4 py-2.5 font-medium">7</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5">希臘優格</td>
                  <td className="text-right px-4 py-2.5">1 杯</td>
                  <td className="text-right px-4 py-2.5 font-medium">10</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5">毛豆</td>
                  <td className="text-right px-4 py-2.5">100g</td>
                  <td className="text-right px-4 py-2.5 font-medium">11</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold">素食者怎麼吃夠蛋白質？</h2>
          <div className="space-y-4 text-[15px] text-[#6b6560] leading-relaxed">
            <p>
              素食者最常見的問題是蛋白質來源比較分散，單一食物含量不如肉類高。但只要懂得搭配，一樣可以達標。
            </p>
            <p>
              <strong className="text-[#2a2520]">推薦組合：</strong>
              豆腐 + 毛豆 + 無糖豆漿 + 蛋（蛋奶素）。如果是全素，可以加入天貝、鷹嘴豆、黑豆等豆類，搭配堅果補充。
            </p>
            <p>
              關鍵是<strong className="text-[#2a2520]">每餐都要有</strong>
              ，不要集中在一餐補。身體一次能有效利用的蛋白質有限，分散到每餐吸收率更好。
            </p>
          </div>

          {/* 收尾 CTA */}
          <div className="text-center py-8 border-t border-[#eee9e5]">
            <p className="text-[#6b6560] mb-4">
              知道要吃多少只是第一步，<strong className="text-[#2a2520]">知道怎麼吃才是關鍵</strong>。
            </p>
            <a
              href="/quiz"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#2a9d6f] rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              測出你的代謝類型，找到適合你的吃法 →
            </a>
          </div>
        </div>
      </div>

      {/* Sticky LINE CTA */}
      <StickyLineCTA />
    </section>
  );
}
