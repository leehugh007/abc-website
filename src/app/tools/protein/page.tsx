"use client";

import { useState } from "react";
import Link from "next/link";
import { StickyLineCTA } from "@/app/sticky-line-cta";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type Goal = "maintain" | "fat-loss" | "intense";
type FoodType = "omnivore" | "lacto-ovo" | "vegan";
type BreakfastType = "skip" | "convenience" | "breakfast-shop" | "bread-coffee" | "home";
type LunchType = "skip" | "bento" | "buffet" | "noodle" | "home";
type DinnerType = "skip" | "bento-buffet" | "noodle-hotpot" | "home";

const GOAL_OPTIONS: {
  value: Goal;
  label: string;
  desc: string;
  min: number;
  max: number;
}[] = [
  { value: "maintain", label: "維持健康", desc: "一般日常活動，沒有特別運動", min: 1.0, max: 1.2 },
  { value: "fat-loss", label: "想瘦身", desc: "想減脂、同時不要掉肌肉", min: 1.2, max: 1.6 },
  { value: "intense", label: "有在重訓", desc: "每週運動 4 次以上", min: 1.6, max: 2.0 },
];

const BREAKFAST_OPTIONS: { value: BreakfastType; label: string; sub?: string }[] = [
  { value: "skip", label: "不吃早餐" },
  { value: "convenience", label: "超商", sub: "飯糰、三明治、茶葉蛋" },
  { value: "breakfast-shop", label: "早餐店", sub: "蛋餅、漢堡、三明治" },
  { value: "bread-coffee", label: "麵包＋咖啡或奶茶" },
  { value: "home", label: "自己做", sub: "煮蛋、鮮奶、豆漿" },
];

const LUNCH_OPTIONS: { value: LunchType; label: string; sub?: string }[] = [
  { value: "skip", label: "不吃午餐" },
  { value: "bento", label: "便當店" },
  { value: "buffet", label: "自助餐" },
  { value: "noodle", label: "麵店／小吃店", sub: "乾麵、湯麵、滷味" },
  { value: "home", label: "自己煮／帶便當" },
];

const DINNER_OPTIONS: { value: DinnerType; label: string; sub?: string }[] = [
  { value: "skip", label: "不吃晚餐" },
  { value: "bento-buffet", label: "便當／自助餐" },
  { value: "noodle-hotpot", label: "麵店／小吃／火鍋" },
  { value: "home", label: "自己煮" },
];

const FOOD_OPTIONS: { value: FoodType; label: string }[] = [
  { value: "omnivore", label: "什麼都吃" },
  { value: "lacto-ovo", label: "蛋奶素" },
  { value: "vegan", label: "全素" },
];

// 每種餐類型的估算蛋白質（克）
const BREAKFAST_PROTEIN: Record<BreakfastType, { g: number; desc: string }> = {
  skip: { g: 0, desc: "不吃早餐" },
  convenience: { g: 12, desc: "超商飯糰 + 茶葉蛋" },
  "breakfast-shop": { g: 10, desc: "早餐店蛋餅或漢堡" },
  "bread-coffee": { g: 5, desc: "麵包 + 咖啡" },
  home: { g: 15, desc: "自己做（蛋 + 豆漿）" },
};
const LUNCH_PROTEIN: Record<LunchType, { g: number; desc: string }> = {
  skip: { g: 0, desc: "不吃午餐" },
  bento: { g: 22, desc: "便當" },
  buffet: { g: 25, desc: "自助餐" },
  noodle: { g: 15, desc: "麵店或小吃" },
  home: { g: 25, desc: "自己煮" },
};
const DINNER_PROTEIN: Record<DinnerType, { g: number; desc: string }> = {
  skip: { g: 0, desc: "不吃晚餐" },
  "bento-buffet": { g: 22, desc: "便當或自助餐" },
  "noodle-hotpot": { g: 18, desc: "麵店或火鍋" },
  home: { g: 25, desc: "自己煮" },
};

const SUPABASE_URL = "https://fnlkhxnfaylhqhystmbr.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZubGtoeG5mYXlsaHFoeXN0bWJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0MTMwMTMsImV4cCI6MjA4ODk4OTAxM30.eELb0hFC9-cb5Y8OT6Ej4Qx1Bb_Y53yXV9cmIn4Jam4";
const SAFE_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function generateClaimCode(): string {
  return Array.from({ length: 4 }, () =>
    SAFE_CHARS[Math.floor(Math.random() * SAFE_CHARS.length)]
  ).join("");
}

function generateSessionId(): string {
  return "ps_" + Math.random().toString(36).slice(2, 10);
}

// 選項按鈕元件
function OptionButton({
  selected,
  onClick,
  label,
  sub,
}: {
  selected: boolean;
  onClick: () => void;
  label: string;
  sub?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded-xl border transition-colors ${
        selected
          ? "border-brand bg-surface-green"
          : "border-edge hover:border-edge-dark"
      }`}
    >
      <span className="text-sm font-medium">{label}</span>
      {sub && <span className="text-xs text-muted ml-2">{sub}</span>}
    </button>
  );
}

// 下拉選單選項
const AGE_OPTIONS = Array.from({ length: 51 }, (_, i) => i + 20); // 20-70
const HEIGHT_OPTIONS = Array.from({ length: 51 }, (_, i) => i + 140); // 140-190
const WEIGHT_OPTIONS = Array.from({ length: 81 }, (_, i) => i + 40); // 40-120

export default function ProteinPage() {
  // Step 1: 基本資料 + 目標
  const [age, setAge] = useState(40);
  const [height, setHeight] = useState(160);
  const [weight, setWeight] = useState(60);
  const [goal, setGoal] = useState<Goal>("fat-loss");
  const [error, setError] = useState("");

  // 基本結果
  const [basicResult, setBasicResult] = useState<{
    minG: number;
    maxG: number;
    avgG: number;
    eggs: number;
    bmi: number;
    ageNote: string | null;
  } | null>(null);

  // Step 2: 每餐選擇 + 葷素
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [breakfastType, setBreakfastType] = useState<BreakfastType>("convenience");
  const [lunchType, setLunchType] = useState<LunchType>("bento");
  const [dinnerType, setDinnerType] = useState<DinnerType>("home");
  const [foodType, setFoodType] = useState<FoodType>("omnivore");

  // LINE 領取
  const [claimCode, setClaimCode] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const track = (event: string, params?: Record<string, string>) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", event, params);
    }
  };

  // Step 1: 計算基本結果
  const handleCalc = () => {
    setError("");

    const w = weight;
    const h = height / 100; // cm → m
    const bmi = Math.round((w / (h * h)) * 10) / 10;

    const opt = GOAL_OPTIONS.find((o) => o.value === goal)!;
    // 40 歲以上肌肉流失加速，蛋白質建議量上調 10%
    const ageMultiplier = age >= 40 ? 1.1 : 1.0;
    const minG = Math.round(w * opt.min * ageMultiplier);
    const maxG = Math.round(w * opt.max * ageMultiplier);
    const avgG = Math.round((minG + maxG) / 2);
    const eggs = Math.round(avgG / 7);

    let ageNote: string | null = null;
    if (age >= 50) {
      ageNote = "50 歲以後肌肉流失速度加快，蛋白質需求比年輕時多 10-20%，你的建議量已經幫你調高了。";
    } else if (age >= 40) {
      ageNote = "40 歲以後肌肉每年流失 1-2%，代謝跟著慢下來。你的建議量已經幫你往上調了。";
    }

    setBasicResult({ minG, maxG, avgG, eggs, bmi, ageNote });
    setShowAdvanced(false);
    setClaimCode(null);

    track("protein_calculate", { goal, age: String(age), height: String(height) });

    setTimeout(() => {
      document
        .getElementById("basic-result")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  // Step 2: 產生代碼 + 存 Supabase
  const handleGetStrategy = async () => {
    if (!basicResult) return;
    setIsSaving(true);

    // 推導 diet_type 和 meal_count（向下相容舊欄位）
    const mealCount =
      [breakfastType, lunchType, dinnerType].filter((t) => t !== "skip").length;
    const derivedMealCount = mealCount <= 2 ? "2" : "3";
    const homeCount = [breakfastType, lunchType, dinnerType].filter(
      (t) => t === "home"
    ).length;
    const derivedDietType =
      homeCount === mealCount
        ? "home-cook"
        : homeCount === 0
          ? "eating-out"
          : "mixed";

    const code = generateClaimCode();
    const sessionId = generateSessionId();

    const payload = {
      id: sessionId,
      age,
      height,
      weight,
      goal,
      diet_type: derivedDietType,
      meal_count: derivedMealCount,
      food_type: foodType,
      protein_min: basicResult.minG,
      protein_max: basicResult.maxG,
      claim_code: code,
      breakfast_type: breakfastType,
      lunch_type: lunchType,
      dinner_type: dinnerType,
    };

    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/protein_sessions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Prefer: "return=minimal",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setClaimCode(code);
        track("protein_complete", {
          goal,
          breakfast: breakfastType,
          lunch: lunchType,
          dinner: dinnerType,
          food_type: foodType,
        });
      } else {
        // 代碼衝突重試
        const code2 = generateClaimCode();
        const res2 = await fetch(`${SUPABASE_URL}/rest/v1/protein_sessions`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: SUPABASE_ANON_KEY,
            Prefer: "return=minimal",
          },
          body: JSON.stringify({ ...payload, id: generateSessionId(), claim_code: code2 }),
        });
        if (res2.ok) {
          setClaimCode(code2);
          track("protein_complete", {
            goal,
            breakfast: breakfastType,
            lunch: lunchType,
            dinner: dinnerType,
            food_type: foodType,
          });
        }
      }
    } catch {
      // 靜默失敗
    } finally {
      setIsSaving(false);

      setTimeout(() => {
        document
          .getElementById("claim-section")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  // 選的餐數（給 Value Stack 用）
  const activeMeals = [breakfastType, lunchType, dinnerType].filter(
    (t) => t !== "skip"
  ).length;

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
          <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-brand text-white">
            蛋白質計算
          </span>
          <Link
            href="/tools/waist-hip"
            className="px-3 py-1.5 rounded-full text-sm font-medium border border-edge text-subtle hover:border-brand hover:text-brand transition-colors"
          >
            腰臀比
          </Link>
          <Link
            href="/tools/blood-sugar"
            className="px-3 py-1.5 rounded-full text-sm font-medium border border-edge text-subtle hover:border-brand hover:text-brand transition-colors"
          >
            血糖穩定度
          </Link>
          <Link
            href="/tools/fatty-liver"
            className="px-3 py-1.5 rounded-full text-sm font-medium border border-edge text-subtle hover:border-brand hover:text-brand transition-colors"
          >
            脂肪肝風險
          </Link>
        </div>

        <p className="text-sm font-semibold text-brand mb-4 tracking-wide">
          免費工具
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight mb-3">
          「我一天該吃多少蛋白質？」計算機
        </h1>
        <p className="text-subtle mb-8">
          輸入體重和目標，算出你每天需要多少蛋白質，以及怎麼用日常食物達標。
        </p>

        {/* ==================== Step 1: 基本資料 + 目標 ==================== */}
        <div className="rounded-2xl border border-edge bg-white p-6 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-bold mb-2">年齡</label>
              <select
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full px-2 py-3 rounded-xl border border-edge text-center text-lg focus:outline-none focus:border-brand transition-colors appearance-none bg-white"
              >
                {AGE_OPTIONS.map((v) => (
                  <option key={v} value={v}>{v} 歲</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">身高</label>
              <select
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full px-2 py-3 rounded-xl border border-edge text-center text-lg focus:outline-none focus:border-brand transition-colors appearance-none bg-white"
              >
                {HEIGHT_OPTIONS.map((v) => (
                  <option key={v} value={v}>{v} cm</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">體重</label>
              <select
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full px-2 py-3 rounded-xl border border-edge text-center text-lg focus:outline-none focus:border-brand transition-colors appearance-none bg-white"
              >
                {WEIGHT_OPTIONS.map((v) => (
                  <option key={v} value={v}>{v} kg</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">你的目標</label>
            <div className="space-y-2">
              {GOAL_OPTIONS.map((opt) => (
                <OptionButton
                  key={opt.value}
                  selected={goal === opt.value}
                  onClick={() => setGoal(opt.value)}
                  label={opt.label}
                  sub={opt.desc}
                />
              ))}
            </div>
          </div>

          {error && (
            <p className="text-sm text-danger text-center">{error}</p>
          )}

          <button
            onClick={handleCalc}
            className="w-full py-4 bg-brand text-white font-bold rounded-xl hover:shadow-md transition-shadow text-base"
          >
            看看我差多少 →
          </button>
        </div>

        {/* ==================== 基本結果 + The Gap ==================== */}
        {basicResult && (
          <div id="basic-result" className="mt-8 space-y-6 scroll-mt-20">
            <div className="rounded-2xl border border-edge bg-white p-6">
              <p className="text-sm text-muted mb-4">你的計算結果</p>

              <div className="text-center p-5 rounded-xl bg-surface-green mb-4">
                <p className="text-xs text-brand mb-1">每日蛋白質建議</p>
                <p className="text-3xl font-bold text-brand">
                  {basicResult.minG} - {basicResult.maxG}
                  <span className="text-sm font-normal text-muted ml-1">
                    克/天
                  </span>
                </p>
                <p className="text-sm text-subtle mt-2">
                  大約等於 {basicResult.eggs} 顆雞蛋的量
                </p>
              </div>

              {/* BMI + 分齡提醒 */}
              <div className="flex items-center justify-center gap-4 mb-4 text-sm text-subtle">
                <span>BMI <strong className="text-ink">{basicResult.bmi}</strong></span>
                <span className="text-edge">|</span>
                <span>{basicResult.bmi < 18.5 ? "偏輕" : basicResult.bmi < 24 ? "正常範圍" : basicResult.bmi < 27 ? "微超標" : "偏高"}</span>
              </div>

              {basicResult.ageNote && (
                <div className="p-4 rounded-xl bg-[#fff8f0] border border-[#f0e0c8] mb-4">
                  <p className="text-sm text-ink leading-relaxed">
                    ⚡ {basicResult.ageNote}
                  </p>
                </div>
              )}

              {/* The Gap */}
              <div className="p-5 rounded-xl bg-[#fef9f3] border border-[#f0e6d8] space-y-3">
                <p className="text-[15px] font-semibold text-ink">
                  但你知道嗎？
                </p>
                <p className="text-[15px] text-subtle leading-relaxed">
                  大多數人算出數字後覺得「好，我知道了」，然後繼續用原來的方式吃——
                </p>
                <p className="text-[15px] text-subtle leading-relaxed">
                  一份便當的蛋白質通常只有{" "}
                  <strong className="text-ink">20-24g</strong>，你以為吃了一頓就差不多了？
                  離目標還差 {basicResult.avgG - 22}g。
                </p>
                <p className="text-[15px] text-ink font-medium leading-relaxed">
                  問題不是「不知道要吃多少」，<br />
                  是「不知道每一餐怎麼湊到」。
                </p>
              </div>
            </div>

            {/* ==================== 進階問題入口 ==================== */}
            {!showAdvanced && !claimCode && (
              <div className="rounded-2xl border-2 border-brand bg-gradient-to-b from-surface-green to-white p-6 text-center shadow-md">
                <p className="text-xs font-bold text-brand tracking-widest mb-3">
                  免費領取
                </p>
                <p className="text-lg text-ink font-bold mb-2">
                  你的個人化蛋白質攻略
                </p>
                <p className="text-sm text-subtle mb-5">
                  告訴我你三餐都怎麼吃，<br />
                  我幫你<strong className="text-ink">診斷現在的蛋白質缺口在哪</strong>
                </p>

                <div className="bg-surface-green rounded-xl p-4 mb-5 text-left">
                  <p className="text-xs text-brand font-semibold mb-2">你會知道：</p>
                  <ul className="space-y-1.5 text-sm text-ink">
                    <li>✅ 你現在每餐差多少（大部分人差 30-50%，自己不知道）</li>
                    <li>✅ 最容易改的那一餐是哪一餐（不用全改，改一餐就有感）</li>
                    <li>✅ 改完長什麼樣（不用自己想，照著吃就好）</li>
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setShowAdvanced(true);
                    track("protein_start_advanced");
                    setTimeout(() => {
                      document
                        .getElementById("advanced-questions")
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 100);
                  }}
                  className="w-full py-4 bg-brand text-white font-bold rounded-xl hover:shadow-md transition-shadow text-base"
                >
                  告訴你我怎麼吃 →
                </button>
              </div>
            )}

            {/* ==================== Step 2: 每餐選擇 + 葷素 ==================== */}
            {showAdvanced && !claimCode && (
              <div
                id="advanced-questions"
                className="rounded-2xl border border-edge bg-white p-6 space-y-7 scroll-mt-20"
              >
                <p className="text-sm font-bold text-brand">
                  告訴我你三餐都怎麼吃
                </p>

                {/* 早餐 */}
                <div>
                  <label className="block text-sm font-bold mb-2">
                    ☀️ 早餐你通常吃什麼？
                  </label>
                  <div className="space-y-2">
                    {BREAKFAST_OPTIONS.map((opt) => (
                      <OptionButton
                        key={opt.value}
                        selected={breakfastType === opt.value}
                        onClick={() => setBreakfastType(opt.value)}
                        label={opt.label}
                        sub={opt.sub}
                      />
                    ))}
                  </div>
                </div>

                {/* 午餐 */}
                <div>
                  <label className="block text-sm font-bold mb-2">
                    🌤️ 午餐你通常吃什麼？
                  </label>
                  <div className="space-y-2">
                    {LUNCH_OPTIONS.map((opt) => (
                      <OptionButton
                        key={opt.value}
                        selected={lunchType === opt.value}
                        onClick={() => setLunchType(opt.value)}
                        label={opt.label}
                        sub={opt.sub}
                      />
                    ))}
                  </div>
                </div>

                {/* 晚餐 */}
                <div>
                  <label className="block text-sm font-bold mb-2">
                    🌙 晚餐你通常吃什麼？
                  </label>
                  <div className="space-y-2">
                    {DINNER_OPTIONS.map((opt) => (
                      <OptionButton
                        key={opt.value}
                        selected={dinnerType === opt.value}
                        onClick={() => setDinnerType(opt.value)}
                        label={opt.label}
                        sub={opt.sub}
                      />
                    ))}
                  </div>
                </div>

                {/* 葷素 */}
                <div>
                  <label className="block text-sm font-bold mb-2">
                    🥗 飲食類型
                  </label>
                  <div className="space-y-2">
                    {FOOD_OPTIONS.map((opt) => (
                      <OptionButton
                        key={opt.value}
                        selected={foodType === opt.value}
                        onClick={() => setFoodType(opt.value)}
                        label={opt.label}
                      />
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleGetStrategy}
                  disabled={isSaving}
                  className="w-full py-4 bg-line-green text-white font-bold rounded-xl hover:shadow-md transition-shadow text-base disabled:opacity-50"
                >
                  {isSaving ? "分析中..." : "幫我診斷蛋白質缺口 →"}
                </button>
              </div>
            )}

            {/* ==================== LINE 領取區 ==================== */}
            {claimCode && (
              <div id="claim-section" className="space-y-6 scroll-mt-20">
                <div className="relative rounded-2xl border border-edge bg-white overflow-hidden">
                  {/* 診斷預覽（根據她選的三餐動態計算） */}
                  <div className="p-6 pb-0">
                    <p className="text-sm font-bold text-brand mb-3">💡 根據你選的三餐：</p>
                    {(() => {
                      const bp = BREAKFAST_PROTEIN[breakfastType];
                      const lp = LUNCH_PROTEIN[lunchType];
                      const dp = DINNER_PROTEIN[dinnerType];
                      const currentTotal = bp.g + lp.g + dp.g;
                      const target = basicResult!.avgG;
                      const gap = target - currentTotal;
                      const gapPct = Math.round((gap / target) * 100);
                      // 找最低的那餐（排除 skip）
                      const meals = [
                        { name: "早餐", g: bp.g, desc: bp.desc, type: breakfastType },
                        { name: "午餐", g: lp.g, desc: lp.desc, type: lunchType },
                        { name: "晚餐", g: dp.g, desc: dp.desc, type: dinnerType },
                      ].filter((m) => m.type !== "skip");
                      const weakest = meals.length > 0 ? meals.reduce((a, b) => (a.g < b.g ? a : b)) : null;

                      return (
                        <div className="space-y-2 text-[15px] text-ink">
                          <p>
                            你目前每天大約吃到 <strong>{currentTotal}g</strong> 蛋白質
                          </p>
                          <p>
                            你的建議量是 <strong className="text-brand">{basicResult!.minG}-{basicResult!.maxG}g</strong>，
                            {gap > 0
                              ? <>你差了大約 <strong>{gap}g</strong>（差 {gapPct}%）</>
                              : <span className="text-brand">你已經達標了！</span>}
                          </p>
                          {weakest && gap > 0 && (
                            <p className="font-medium">
                              缺口主要在{weakest.name}——{weakest.desc}只有 {weakest.g}g
                            </p>
                          )}
                        </div>
                      );
                    })()}
                  </div>

                  {/* 模糊的部分（個人化建議預覽） */}
                  <div
                    className="px-6 pt-4 pb-44"
                    style={{ filter: "blur(4px)", pointerEvents: "none", userSelect: "none" }}
                  >
                    <div className="space-y-3 text-[15px] text-subtle">
                      <p>
                        {(() => {
                          const meals = [
                            { name: "早餐", g: BREAKFAST_PROTEIN[breakfastType].g, type: breakfastType },
                            { name: "午餐", g: LUNCH_PROTEIN[lunchType].g, type: lunchType },
                            { name: "晚餐", g: DINNER_PROTEIN[dinnerType].g, type: dinnerType },
                          ].filter((m) => m.type !== "skip");
                          const weakest = meals.length > 0 ? meals.reduce((a, b) => (a.g < b.g ? a : b)) : null;
                          return weakest
                            ? `最容易改的是${weakest.name}。${weakest.name === "早餐" ? "超商其實有很多高蛋白選擇，像是希臘優格 + 茶葉蛋，一餐就能到 20g 以上。" : weakest.name === "午餐" ? "便當多加一顆滷蛋或換成有雞腿的主菜，一餐就能多 15g。" : "自己煮的話加一塊板豆腐或多一份肉，輕鬆補上缺口。"}改完之後你的一天蛋白質攝取會變成……完整的三餐搭配範例和食物替換建議在報告裡。`
                            : "你的三餐搭配建議和食物替換表在報告裡。";
                        })()}
                      </p>
                    </div>
                  </div>

                  {/* Overlay CTA */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white from-60% to-white/0 p-6 pt-10 flex flex-col items-center">
                    <p className="text-[15px] font-semibold text-ink mb-1">你的個人化蛋白質攻略已準備好</p>
                    <p className="text-sm text-brand mb-3">在 LINE 領取三餐搭配 + 缺口診斷 👇</p>
                    <a
                      href={`https://line.me/R/oaMessage/%40sososo/?${encodeURIComponent(claimCode)}`}
                      className="w-full max-w-sm py-4 bg-line-green text-white font-bold rounded-xl hover:shadow-lg transition-shadow text-base text-center block"
                      onClick={() =>
                        track("click_line_protein", {
                          code: claimCode,
                          goal,
                          breakfast: breakfastType,
                          lunch: lunchType,
                          dinner: dinnerType,
                        })
                      }
                    >
                      一鍵開啟 LINE 領取 →
                    </a>
                    <div className="mt-3 space-y-1 text-center">
                      <p className="text-xs text-muted">
                        或手動複製代碼：
                        <button
                          onClick={(e) => {
                            navigator.clipboard?.writeText(claimCode);
                            const btn = e.currentTarget;
                            btn.textContent = "已複製！";
                            setTimeout(() => { btn.textContent = claimCode + " 📋"; }, 1500);
                          }}
                          className="ml-2 font-bold text-brand text-sm tracking-widest bg-surface-green border border-dashed border-brand rounded-lg px-3 py-1 cursor-pointer"
                        >
                          {claimCode} 📋
                        </button>
                      </p>
                      <p className="text-xs text-muted">代碼 24 小時內有效</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 測驗 CTA（次級） */}
            {!showAdvanced && !claimCode && (
              <div className="rounded-2xl border border-edge bg-white p-6 text-center">
                <p className="text-xs text-muted mb-2">或者</p>
                <p className="text-[15px] text-ink font-semibold leading-relaxed mb-4">
                  想更深入了解自己？
                </p>
                <a
                  href="/quiz"
                  className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-brand border-2 border-brand rounded-full hover:bg-brand hover:text-white transition-colors"
                  onClick={() =>
                    track("click_quiz_cta", { source: "protein" })
                  }
                >
                  30 秒測出你的代謝類型 →
                </a>
              </div>
            )}
          </div>
        )}

        {/* ==================== SEO 內容 ==================== */}
        <div className="mt-16 space-y-8">
          <h2 className="text-xl font-bold">為什麼蛋白質對減重這麼重要？</h2>
          <div className="space-y-4 text-[15px] text-subtle leading-relaxed">
            <p>蛋白質有三個對減重特別重要的特性：</p>
            <p>
              <strong className="text-ink">1. 飽足感最強</strong>
              ——同樣熱量的食物，蛋白質帶來的飽足感是碳水化合物的 2-3
              倍。吃夠蛋白質，你自然不會一直找東西吃。
            </p>
            <p>
              <strong className="text-ink">2. 食物熱效應最高</strong>
              ——消化蛋白質本身就需要消耗 20-30%
              的熱量（碳水只有 5-10%，脂肪只有 0-3%）。等於你吃下 100
              大卡的蛋白質，身體只吸收 70-80 大卡。
            </p>
            <p>
              <strong className="text-ink">3. 保住肌肉量</strong>
              ——減重過程中如果蛋白質不夠，身體會分解肌肉當能量。肌肉流失 →
              代謝下降 → 更難瘦 → 復胖。這是很多人越減越肥的根本原因。
            </p>
          </div>

          <h2 className="text-xl font-bold">常見蛋白質食物含量表</h2>
          <div className="rounded-2xl border border-edge bg-white overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface">
                  <th className="text-left px-4 py-3 font-bold">食物</th>
                  <th className="text-right px-4 py-3 font-bold">份量</th>
                  <th className="text-right px-4 py-3 font-bold">蛋白質（克）</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-edge">
                <tr><td className="px-4 py-2.5">雞蛋</td><td className="text-right px-4 py-2.5">1 顆</td><td className="text-right px-4 py-2.5 font-medium">7</td></tr>
                <tr><td className="px-4 py-2.5">雞胸肉</td><td className="text-right px-4 py-2.5">100g</td><td className="text-right px-4 py-2.5 font-medium">31</td></tr>
                <tr><td className="px-4 py-2.5">鮭魚</td><td className="text-right px-4 py-2.5">100g</td><td className="text-right px-4 py-2.5 font-medium">20</td></tr>
                <tr><td className="px-4 py-2.5">豆腐（板豆腐）</td><td className="text-right px-4 py-2.5">1 盒</td><td className="text-right px-4 py-2.5 font-medium">8-15</td></tr>
                <tr><td className="px-4 py-2.5">無糖豆漿</td><td className="text-right px-4 py-2.5">1 杯（260ml）</td><td className="text-right px-4 py-2.5 font-medium">7</td></tr>
                <tr><td className="px-4 py-2.5">希臘優格</td><td className="text-right px-4 py-2.5">1 杯</td><td className="text-right px-4 py-2.5 font-medium">10</td></tr>
                <tr><td className="px-4 py-2.5">毛豆</td><td className="text-right px-4 py-2.5">100g</td><td className="text-right px-4 py-2.5 font-medium">11</td></tr>
                <tr><td className="px-4 py-2.5">超商便當</td><td className="text-right px-4 py-2.5">1 份</td><td className="text-right px-4 py-2.5 font-medium">17-30</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold">素食者怎麼吃夠蛋白質？</h2>
          <div className="space-y-4 text-[15px] text-subtle leading-relaxed">
            <p>
              素食者最常見的問題是蛋白質來源比較分散，單一食物含量不如肉類高。但只要懂得搭配，一樣可以達標。
            </p>
            <p>
              <strong className="text-ink">推薦組合：</strong>
              豆腐 + 毛豆 + 無糖豆漿 + 蛋（蛋奶素）。如果是全素，可以加入天貝、鷹嘴豆、黑豆等豆類，搭配堅果補充。
            </p>
            <p>
              關鍵是<strong className="text-ink">每餐都要有</strong>
              ，不要集中在一餐補。身體一次能有效利用的蛋白質有限，分散到每餐吸收率更好。
            </p>
          </div>

          {/* 收尾 CTA */}
          <div className="text-center py-8 border-t border-edge">
            <p className="text-subtle mb-4">
              知道要吃多少只是第一步，
              <strong className="text-ink">知道怎麼吃才是關鍵</strong>。
            </p>
            <a
              href="/quiz"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand rounded-full shadow-lg hover:shadow-xl transition-shadow"
              onClick={() =>
                track("click_quiz_cta", { source: "protein_bottom" })
              }
            >
              測出你的代謝類型，找到適合你的吃法 →
            </a>
          </div>
        </div>
      </div>

      <StickyLineCTA />
    </section>
  );
}
