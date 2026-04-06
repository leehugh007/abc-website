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
type DietType = "eating-out" | "home-cook" | "mixed";
type MealCount = "2" | "3" | "frequent";
type FoodType = "omnivore" | "lacto-ovo" | "vegan";

const GOAL_OPTIONS: {
  value: Goal;
  label: string;
  desc: string;
  min: number;
  max: number;
}[] = [
  { value: "maintain", label: "維持健康", desc: "一般日常活動", min: 1.0, max: 1.2 },
  { value: "fat-loss", label: "減脂增肌", desc: "想瘦身、同時保住肌肉", min: 1.2, max: 1.6 },
  { value: "intense", label: "高強度訓練", desc: "重訓或高強度運動每週 4 次以上", min: 1.6, max: 2.0 },
];

const DIET_OPTIONS: { value: DietType; label: string }[] = [
  { value: "eating-out", label: "外食為主" },
  { value: "home-cook", label: "自煮為主" },
  { value: "mixed", label: "混合（有時外食有時自煮）" },
];

const MEAL_OPTIONS: { value: MealCount; label: string }[] = [
  { value: "2", label: "一天兩餐" },
  { value: "3", label: "一天三餐" },
  { value: "frequent", label: "少量多餐（4 餐以上）" },
];

const FOOD_OPTIONS: { value: FoodType; label: string }[] = [
  { value: "omnivore", label: "什麼都吃" },
  { value: "lacto-ovo", label: "蛋奶素" },
  { value: "vegan", label: "全素" },
];

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

export default function ProteinPage() {
  // Step 1: 體重 + 目標
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState<Goal>("fat-loss");
  const [error, setError] = useState("");

  // 基本結果
  const [basicResult, setBasicResult] = useState<{
    minG: number;
    maxG: number;
    avgG: number;
    eggs: number;
  } | null>(null);

  // Step 2: 3 題進階問題
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [dietType, setDietType] = useState<DietType>("eating-out");
  const [mealCount, setMealCount] = useState<MealCount>("3");
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
    const w = parseFloat(weight);
    if (!w || w <= 0) {
      setError("請輸入體重");
      return;
    }
    if (w < 30 || w > 300) {
      setError("體重請輸入 30-300 公斤之間");
      return;
    }
    setError("");

    const opt = GOAL_OPTIONS.find((o) => o.value === goal)!;
    const minG = Math.round(w * opt.min);
    const maxG = Math.round(w * opt.max);
    const avgG = Math.round((minG + maxG) / 2);
    const eggs = Math.round(avgG / 7);

    setBasicResult({ minG, maxG, avgG, eggs });
    setShowAdvanced(false);
    setClaimCode(null);

    track("protein_calculate", { goal });

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

    const code = generateClaimCode();
    const sessionId = generateSessionId();

    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/protein_sessions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          id: sessionId,
          weight: parseFloat(weight),
          goal,
          diet_type: dietType,
          meal_count: mealCount,
          food_type: foodType,
          protein_min: basicResult.minG,
          protein_max: basicResult.maxG,
          claim_code: code,
        }),
      });

      if (res.ok) {
        setClaimCode(code);
        track("protein_complete", {
          goal,
          diet_type: dietType,
          food_type: foodType,
        });

        setTimeout(() => {
          document
            .getElementById("claim-section")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      } else {
        // 如果代碼衝突，重試一次
        const code2 = generateClaimCode();
        const res2 = await fetch(`${SUPABASE_URL}/rest/v1/protein_sessions`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: SUPABASE_ANON_KEY,
            Prefer: "return=minimal",
          },
          body: JSON.stringify({
            id: generateSessionId(),
            weight: parseFloat(weight),
            goal,
            diet_type: dietType,
            meal_count: mealCount,
            food_type: foodType,
            protein_min: basicResult.minG,
            protein_max: basicResult.maxG,
            claim_code: code2,
          }),
        });
        if (res2.ok) {
          setClaimCode(code2);
          track("protein_complete", {
            goal,
            diet_type: dietType,
            food_type: foodType,
          });
        }
      }
    } catch {
      // 靜默失敗，不影響用戶體驗
    } finally {
      setIsSaving(false);
    }
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
            href="/tools/insulin-check"
            className="px-3 py-1.5 rounded-full text-sm font-medium border border-edge text-subtle hover:border-brand hover:text-brand transition-colors"
          >
            胰島素阻抗自評
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

        {/* ==================== Step 1: 體重 + 目標 ==================== */}
        <div className="rounded-2xl border border-edge bg-white p-6 space-y-6">
          <div>
            <label className="block text-sm font-bold mb-2">體重</label>
            <div className="max-w-[200px]">
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

          <div>
            <label className="block text-sm font-bold mb-2">你的目標</label>
            <div className="space-y-2">
              {GOAL_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setGoal(opt.value)}
                  className={`w-full text-left px-4 py-3 rounded-xl border transition-colors ${
                    goal === opt.value
                      ? "border-brand bg-surface-green"
                      : "border-edge hover:border-edge-dark"
                  }`}
                >
                  <span className="text-sm font-medium">{opt.label}</span>
                  <span className="text-xs text-muted ml-2">{opt.desc}</span>
                  <span className="text-xs text-muted ml-2">
                    （{opt.min}-{opt.max}g/kg）
                  </span>
                </button>
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
            計算
          </button>
        </div>

        {/* ==================== 基本結果 + The Gap ==================== */}
        {basicResult && (
          <div id="basic-result" className="mt-8 space-y-6 scroll-mt-20">
            <div className="rounded-2xl border border-edge bg-white p-6">
              <p className="text-sm text-muted mb-4">你的計算結果</p>

              <div className="text-center p-5 rounded-xl bg-surface-green mb-6">
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

              {/* The Gap — Hormozi 結構 */}
              <div className="p-5 rounded-xl bg-[#fef9f3] border border-[#f0e6d8] space-y-3">
                <p className="text-[15px] font-semibold text-ink">
                  但你知道嗎？
                </p>
                <p className="text-[15px] text-subtle leading-relaxed">
                  大多數人算出數字後覺得「好，我知道了」，然後繼續用原來的方式吃——
                </p>
                <p className="text-[15px] text-subtle leading-relaxed">
                  一份便當的蛋白質通常只有{" "}
                  <strong className="text-ink">15-20g</strong>，你以為吃了一頓就差不多了？
                  離目標還差 {basicResult.avgG - 18}g。
                </p>
                <p className="text-[15px] text-ink font-medium leading-relaxed">
                  問題不是「不知道要吃多少」，<br />
                  是「不知道每一餐怎麼湊到」。
                </p>
              </div>
            </div>

            {/* ==================== 進階問題入口 ==================== */}
            {!showAdvanced && !claimCode && (
              <div className="rounded-2xl border-2 border-brand bg-white p-6 text-center">
                <p className="text-[15px] text-ink font-semibold mb-2">
                  想拿到你的個人化蛋白質攻略？
                </p>
                <p className="text-sm text-subtle mb-5">
                  再回答 3 個問題，我根據你的飲食習慣，幫你做一份
                  <strong className="text-ink">每餐搭配表 + 外食速查表</strong>
                </p>

                <div className="bg-surface-green rounded-xl p-4 mb-5 text-left">
                  <p className="text-xs text-brand font-semibold mb-2">你會拿到：</p>
                  <ul className="space-y-1.5 text-sm text-ink">
                    <li>✅ 你的每餐蛋白質分配表</li>
                    <li>✅ 外食族速查表（超商／自助餐／便當／火鍋）</li>
                    <li>✅ 7 天蛋白質搭配範例</li>
                    <li>✅ 一休提醒：最多人卡住的 3 個蛋白質迷思</li>
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
                  回答 3 題，30 秒搞定 →
                </button>
              </div>
            )}

            {/* ==================== Step 2: 3 題進階問題 ==================== */}
            {showAdvanced && !claimCode && (
              <div
                id="advanced-questions"
                className="rounded-2xl border border-edge bg-white p-6 space-y-6 scroll-mt-20"
              >
                <p className="text-sm font-bold text-brand">
                  再 3 題，幫你量身打造
                </p>

                {/* 飲食型態 */}
                <div>
                  <label className="block text-sm font-bold mb-2">
                    你平常怎麼吃？
                  </label>
                  <div className="space-y-2">
                    {DIET_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setDietType(opt.value)}
                        className={`w-full text-left px-4 py-3 rounded-xl border transition-colors ${
                          dietType === opt.value
                            ? "border-brand bg-surface-green"
                            : "border-edge hover:border-edge-dark"
                        }`}
                      >
                        <span className="text-sm font-medium">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 餐數 */}
                <div>
                  <label className="block text-sm font-bold mb-2">
                    一天吃幾餐？
                  </label>
                  <div className="space-y-2">
                    {MEAL_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setMealCount(opt.value)}
                        className={`w-full text-left px-4 py-3 rounded-xl border transition-colors ${
                          mealCount === opt.value
                            ? "border-brand bg-surface-green"
                            : "border-edge hover:border-edge-dark"
                        }`}
                      >
                        <span className="text-sm font-medium">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 葷素 */}
                <div>
                  <label className="block text-sm font-bold mb-2">
                    飲食類型
                  </label>
                  <div className="space-y-2">
                    {FOOD_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setFoodType(opt.value)}
                        className={`w-full text-left px-4 py-3 rounded-xl border transition-colors ${
                          foodType === opt.value
                            ? "border-brand bg-surface-green"
                            : "border-edge hover:border-edge-dark"
                        }`}
                      >
                        <span className="text-sm font-medium">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleGetStrategy}
                  disabled={isSaving}
                  className="w-full py-4 bg-line-green text-white font-bold rounded-xl hover:shadow-md transition-shadow text-base disabled:opacity-50"
                >
                  {isSaving ? "產生中..." : "產生我的蛋白質攻略 →"}
                </button>
              </div>
            )}

            {/* ==================== LINE 領取區 ==================== */}
            {claimCode && (
              <div
                id="claim-section"
                className="rounded-2xl border-2 border-line-green bg-white p-6 text-center scroll-mt-20"
              >
                <p className="text-lg font-bold text-ink mb-2">
                  你的蛋白質攻略已產生！
                </p>
                <p className="text-sm text-subtle mb-5">
                  加入一休的 LINE，一鍵領取你的個人化攻略
                </p>

                {/* Value Stack 再次提醒 */}
                <div className="bg-surface-green rounded-xl p-4 mb-5 text-left">
                  <ul className="space-y-1.5 text-sm text-ink">
                    <li>✅ 每餐蛋白質分配（根據你的{mealCount === "2" ? "兩餐" : mealCount === "3" ? "三餐" : "多餐"}習慣）</li>
                    <li>✅ {dietType === "eating-out" ? "外食" : dietType === "home-cook" ? "自煮" : "外食+自煮"}族的食材速查表</li>
                    <li>✅ 7 天搭配範例（{foodType === "omnivore" ? "葷食" : foodType === "lacto-ovo" ? "蛋奶素" : "全素"}版）</li>
                    <li>✅ 一休提醒：最多人卡住的 3 個蛋白質迷思</li>
                  </ul>
                </div>

                {/* LINE CTA */}
                <a
                  href={`https://line.me/R/oaMessage/%40sososo/?${encodeURIComponent(claimCode)}`}
                  className="inline-flex items-center justify-center w-full py-4 bg-line-green text-white font-bold rounded-xl hover:shadow-lg transition-shadow text-base gap-2"
                  onClick={() =>
                    track("click_line_protein", {
                      code: claimCode,
                      goal,
                      diet_type: dietType,
                      food_type: foodType,
                    })
                  }
                >
                  一鍵開啟 LINE 領取 →
                </a>

                <p className="text-xs text-muted mt-3">
                  點擊後會開啟 LINE，按送出就能領取你的攻略
                </p>
              </div>
            )}

            {/* 測驗 CTA（保留，不搶 LINE 的位置） */}
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
                  <th className="text-right px-4 py-3 font-bold">
                    蛋白質（克）
                  </th>
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
