"use client";

import { useState } from "react";
import Link from "next/link";
import { StickyLineCTA } from "@/app/sticky-line-cta";

type Gender = "female" | "male";
type ActivityLevel = "sedentary" | "light" | "moderate" | "active" | "very-active";

const ACTIVITY_OPTIONS: { value: ActivityLevel; label: string; desc: string; factor: number }[] = [
  { value: "sedentary", label: "久坐不動", desc: "整天坐辦公桌，幾乎不運動", factor: 1.2 },
  { value: "light", label: "輕度活動", desc: "每週運動 1-2 次，或日常走路較多", factor: 1.375 },
  { value: "moderate", label: "中度活動", desc: "每週運動 3-5 次", factor: 1.55 },
  { value: "active", label: "高度活動", desc: "每週運動 6-7 次，體力勞動工作", factor: 1.725 },
  { value: "very-active", label: "非常活躍", desc: "每天高強度訓練或重體力勞動", factor: 1.9 },
];

function calcBMR(gender: Gender, weight: number, height: number, age: number): number {
  // Mifflin-St Jeor
  if (gender === "male") {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  }
  return 10 * weight + 6.25 * height - 5 * age - 161;
}

function getProteinRange(weight: number): [number, number] {
  return [Math.round(weight * 1.0), Math.round(weight * 1.6)];
}

export default function ToolsPage() {
  const [gender, setGender] = useState<Gender>("female");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState<ActivityLevel>("sedentary");
  const [result, setResult] = useState<{
    bmr: number;
    tdee: number;
    protein: [number, number];
  } | null>(null);
  const [error, setError] = useState("");

  const handleCalc = () => {
    const a = parseInt(age);
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!a || !h || !w) {
      setError("請填寫年齡、身高和體重");
      return;
    }
    if (a < 10 || a > 100) {
      setError("年齡請輸入 10-100 之間");
      return;
    }
    if (h < 100 || h > 250) {
      setError("身高請輸入 100-250 公分之間");
      return;
    }
    if (w < 30 || w > 300) {
      setError("體重請輸入 30-300 公斤之間");
      return;
    }

    setError("");
    const bmr = calcBMR(gender, w, h, a);
    const factor = ACTIVITY_OPTIONS.find((o) => o.value === activity)!.factor;
    const tdee = bmr * factor;
    const protein = getProteinRange(w);

    setResult({ bmr: Math.round(bmr), tdee: Math.round(tdee), protein });

    // 滾動到結果區
    setTimeout(() => {
      document.getElementById("calc-result")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <section className="pt-10 pb-16 px-5">
      <div className="max-w-2xl mx-auto">
        {/* 工具導航 */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-brand text-white">TDEE 計算</span>
          <Link href="/tools/protein" className="px-3 py-1.5 rounded-full text-sm font-medium border border-edge text-subtle hover:border-brand hover:text-brand transition-colors">蛋白質計算</Link>
          <Link href="/tools/waist-hip" className="px-3 py-1.5 rounded-full text-sm font-medium border border-edge text-subtle hover:border-brand hover:text-brand transition-colors">腰臀比</Link>
          <Link href="/tools/insulin-check" className="px-3 py-1.5 rounded-full text-sm font-medium border border-edge text-subtle hover:border-brand hover:text-brand transition-colors">胰島素阻抗自評</Link>
        </div>

        <p className="text-sm font-semibold text-brand mb-4 tracking-wide">
          免費工具
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight mb-3">
          TDEE / BMR 計算機
        </h1>
        <p className="text-subtle mb-8">
          算出你每天需要多少熱量。但更重要的是——看完結果之後的那段建議。
        </p>

        {/* 計算表單 */}
        <div className="rounded-2xl border border-edge bg-white p-6 space-y-6">
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
                      ? "bg-brand text-white"
                      : "bg-surface text-subtle hover:bg-edge"
                  }`}
                >
                  {g === "female" ? "女性" : "男性"}
                </button>
              ))}
            </div>
          </div>

          {/* 年齡 / 身高 / 體重 */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-bold mb-2">年齡</label>
              <input
                type="number"
                placeholder="35"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-edge text-center text-lg focus:outline-none focus:border-brand transition-colors"
              />
              <p className="text-xs text-muted text-center mt-1">歲</p>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">身高</label>
              <input
                type="number"
                placeholder="160"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-edge text-center text-lg focus:outline-none focus:border-brand transition-colors"
              />
              <p className="text-xs text-muted text-center mt-1">公分</p>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">體重</label>
              <input
                type="number"
                placeholder="65"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-edge text-center text-lg focus:outline-none focus:border-brand transition-colors"
              />
              <p className="text-xs text-muted text-center mt-1">公斤</p>
            </div>
          </div>

          {/* 活動量 */}
          <div>
            <label className="block text-sm font-bold mb-2">日常活動量</label>
            <div className="space-y-2">
              {ACTIVITY_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setActivity(opt.value)}
                  className={`w-full text-left px-4 py-3 rounded-xl border transition-colors ${
                    activity === opt.value
                      ? "border-brand bg-surface-green"
                      : "border-edge hover:border-edge-dark"
                  }`}
                >
                  <span className="text-sm font-medium">{opt.label}</span>
                  <span className="text-xs text-muted ml-2">{opt.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 錯誤提示 */}
          {error && (
            <p className="text-sm text-danger text-center">{error}</p>
          )}

          {/* 計算按鈕 */}
          <button
            onClick={handleCalc}
            className="w-full py-4 bg-brand text-white font-bold rounded-xl hover:shadow-md transition-shadow text-base"
          >
            計算
          </button>
        </div>

        {/* 結果 */}
        {result && (
          <div id="calc-result" className="mt-8 space-y-6 scroll-mt-20">
            <div className="rounded-2xl border border-edge bg-white p-6">
              <p className="text-sm text-muted mb-4">你的計算結果</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 rounded-xl bg-surface">
                  <p className="text-xs text-muted mb-1">基礎代謝率（BMR）</p>
                  <p className="text-2xl font-bold text-ink">
                    {result.bmr}
                    <span className="text-sm font-normal text-muted ml-1">大卡/天</span>
                  </p>
                  <p className="text-xs text-subtle mt-1">躺著不動也會消耗的熱量</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-surface-green">
                  <p className="text-xs text-brand mb-1">每日總消耗（TDEE）</p>
                  <p className="text-2xl font-bold text-brand">
                    {result.tdee}
                    <span className="text-sm font-normal text-muted ml-1">大卡/天</span>
                  </p>
                  <p className="text-xs text-subtle mt-1">含日常活動的總消耗</p>
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-surface">
                <p className="text-xs text-muted mb-1">每日蛋白質建議量</p>
                <p className="text-2xl font-bold text-ink">
                  {result.protein[0]} - {result.protein[1]}
                  <span className="text-sm font-normal text-muted ml-1">克/天</span>
                </p>
                <p className="text-xs text-subtle mt-1">體重 × 1.0-1.6 倍</p>
              </div>
            </div>

            {/* 一休的建議 — 手寫信風格 */}
            <div className="letter-style rounded-2xl border border-[#e8e0d8] p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-5" style={{ lineHeight: "normal" }}>
                <span className="w-8 h-8 rounded-full bg-brand text-white text-xs flex items-center justify-center font-bold" style={{ fontFamily: "inherit" }}>休</span>
                <span className="font-semibold text-[15px]">一休寫給你的</span>
              </div>
              <div className="space-y-1 text-[15px] text-[#3a3530]">
                <p>
                  這些數字有參考價值，但<strong>不要被數字綁架。</strong>
                </p>
                <p>
                  很多人看到 TDEE 之後就開始算熱量、逼自己吃到某個數字以下。結果呢？吃得越少、代謝越慢、越難瘦。這就是
                  <Link href="/concepts/metabolic-adaptation" className="text-brand underline decoration-brand/35 hover:decoration-brand">代謝適應</Link>
                  的陷阱。
                </p>
                <p>
                  我在 ABC 代謝力重建裡面<strong>不教你算熱量</strong>。我教你的是：吃對的食物、吃夠的份量、用對的順序。
                  當你的
                  <Link href="/concepts/insulin-resistance" className="text-brand underline decoration-brand/35 hover:decoration-brand">胰島素</Link>
                  回到正常、
                  <Link href="/concepts/chronic-inflammation" className="text-brand underline decoration-brand/35 hover:decoration-brand">發炎</Link>
                  降下來，你的身體會自己找到平衡。
                </p>
                <p>
                  唯一要注意的數字是<strong>蛋白質</strong>。
                  你每天至少要吃到體重公斤數等量的蛋白質（{result.protein[0]} 克）。吃不夠，肌肉流失，代謝只會越來越差。
                </p>
              </div>
            </div>

            {/* 連結回痛點 + 主 CTA */}
            <div className="rounded-2xl border border-edge bg-white p-6 text-center">
              <p className="text-[15px] text-subtle leading-relaxed mb-2">
                知道 TDEE 有用，但更重要的是——你的身體用哪種模式在消耗這些熱量。
              </p>
              <p className="text-[15px] text-ink font-semibold leading-relaxed mb-6">
                不同的代謝類型，同樣的熱量攝取，結果完全不同。
              </p>

              {/* 主 CTA: 測驗 */}
              <a
                href="/quiz"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand rounded-full shadow-lg hover:shadow-xl transition-shadow mb-4"
              >
                30 秒測出你的代謝類型 →
              </a>

              {/* 副 CTA: LINE 體驗預告 */}
              <div className="pt-4 border-t border-edge">
                <p className="text-xs text-muted mb-2">或者</p>
                <a
                  href="https://lin.ee/x41s2Su"
                  target="_blank"
                  rel="noopener noreferrer"
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

        {/* SEO 內容 — 計算機下方的教育內容 */}
        <div className="mt-16 space-y-8">
          <h2 className="text-xl font-bold">什麼是 BMR 和 TDEE？</h2>
          <div className="space-y-4 text-[15px] text-subtle leading-relaxed">
            <p>
              <strong className="text-ink">BMR（基礎代謝率）</strong>
              是你躺在床上一整天不動，身體光是維持呼吸、心跳、體溫就會消耗的熱量。它大約佔你每天總消耗的 60-70%。
            </p>
            <p>
              <strong className="text-ink">TDEE（每日總消耗熱量）</strong>
              是你一整天實際消耗的熱量，包含 BMR + 日常活動 + 運動 + 食物消化。
            </p>
            <p>
              本計算機使用 <strong className="text-ink">Mifflin-St Jeor 公式</strong>，這是目前被認為最準確的 BMR 估算公式。但要注意：所有公式都是估算值，實際代謝會受到肌肉量、荷爾蒙狀態、睡眠品質等因素影響。
            </p>
          </div>

          <h2 className="text-xl font-bold">為什麼一休不教算熱量？</h2>
          <div className="space-y-4 text-[15px] text-subtle leading-relaxed">
            <p>
              帶學員這麼多年，我發現一件事：越認真算熱量的人，越容易陷入「吃太少 → 代謝下降 → 更難瘦」的惡性循環。
            </p>
            <p>
              因為生活是動態的，飲食也是動態的。一大盤健康的原型食物很難超過 500 大卡而且會飽；一杯手搖飲輕鬆超過 500 大卡卻不會飽。
            </p>
            <p>
              <strong className="text-ink">與其盯著數字，不如關注食物品質和餐盤比例</strong>——三份蔬菜、兩份蛋白質、一份碳水。比例對了，選什麼澱粉影響不大。
            </p>
            <p>
              觀察身體變化（精神、體態、心情）比計算更重要。想了解更多，可以看
              <Link href="/articles/eat-less-move-more-myth" className="text-brand underline decoration-brand/35 hover:decoration-brand">「少吃多動」這四個字，害了多少人？</Link>
            </p>
          </div>

          {/* 收尾 CTA */}
          <div className="text-center py-8 border-t border-edge">
            <p className="text-subtle mb-4">
              熱量只是數字，<strong className="text-ink">代謝類型才是關鍵</strong>。
            </p>
            <a
              href="/quiz"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              測出你的代謝類型，找到適合你的方法 →
            </a>
          </div>
        </div>
      </div>

      {/* Sticky LINE CTA */}
      <StickyLineCTA />
    </section>
  );
}
