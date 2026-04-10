"use client";

import { useState } from "react";
import Link from "next/link";
import { StickyLineCTA } from "@/app/sticky-line-cta";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// ─── Supabase ───

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
  return "sg_" + Math.random().toString(36).slice(2, 10);
}

// ─── 計算邏輯 ───

function calcSugarLimit(weight: number) {
  const tdee = Math.round(weight * 26);
  const limit10 = Math.round((tdee * 0.1) / 4);
  const limit5 = Math.round((tdee * 0.05) / 4);
  return { tdee, limit10, limit5 };
}

// ─── 選項常數 ───

const SWEETNESS_SUGAR: Record<string, { label: string; grams: number }> = {
  full: { label: "全糖", grams: 50 },
  less: { label: "少糖", grams: 38 },
  half: { label: "半糖", grams: 25 },
  slight: { label: "微糖", grams: 13 },
  none: { label: "無糖", grams: 0 },
};

const CUPS_OPTIONS = [
  { value: "3", label: "3 杯以上", num: 3 },
  { value: "2", label: "2 杯", num: 2 },
  { value: "1", label: "1 杯", num: 1 },
  { value: "0", label: "幾乎不喝", num: 0 },
];

const SWEETNESS_OPTIONS = [
  { value: "full", label: "全糖", sub: "不甜就沒味道" },
  { value: "less", label: "少糖", sub: "覺得半糖不夠" },
  { value: "half", label: "半糖", sub: "最常點的" },
  { value: "slight", label: "微糖", sub: "淡淡的甜就好" },
  { value: "none", label: "無糖", sub: "已經習慣無糖" },
];

const DRINK_TIME_OPTIONS = [
  { value: "afternoon", label: "下午", sub: "上班到一半來一杯" },
  { value: "lunch", label: "午餐配飲料", sub: "吃飯一定要配" },
  { value: "morning", label: "早上", sub: "醒來第一杯" },
  { value: "evening", label: "晚上", sub: "回家路上買" },
  { value: "anytime", label: "不一定", sub: "想喝就喝" },
];

const TOPPING_OPTIONS = [
  { value: "boba", label: "波霸 / 珍珠", sub: "156 卡" },
  { value: "cream", label: "奶蓋", sub: "203 卡" },
  { value: "pudding", label: "布丁 / 芋圓", sub: "110-128 卡" },
  { value: "jelly", label: "仙草 / 愛玉 / 蒟蒻", sub: "45-71 卡" },
  { value: "none", label: "不加配料", sub: "純喝" },
];

// 配料卡路里
const TOPPING_CAL: Record<string, { label: string; cal: number; greenAlt: string; greenCal: number }> = {
  boba: { label: "波霸", cal: 156, greenAlt: "蒟蒻", greenCal: 71 },
  cream: { label: "奶蓋", cal: 203, greenAlt: "仙草", greenCal: 57 },
  pudding: { label: "布丁/芋圓", cal: 119, greenAlt: "愛玉", greenCal: 45 },
  jelly: { label: "仙草/愛玉", cal: 57, greenAlt: "仙草/愛玉", greenCal: 57 },
  none: { label: "不加", cal: 0, greenAlt: "不加", greenCal: 0 },
};

// 基底卡路里
const BASE_CAL: Record<string, number> = {
  full: 575, // 全糖奶茶
  less: 475,
  half: 375,
  slight: 275,
  none: 0, // 無糖茶
};

const WEIGHT_OPTIONS = Array.from({ length: 81 }, (_, i) => i + 40);

// ─── 選項按鈕 ───

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

// ─── 主元件 ───

export default function SugarPage() {
  const [weight, setWeight] = useState(60);
  const [cupsPerDay, setCupsPerDay] = useState("");
  const [sweetnessLevel, setSweetnessLevel] = useState("");
  const [result, setResult] = useState<{
    tdee: number;
    limit10: number;
    limit5: number;
    dailySugar: number;
    overRate: number;
  } | null>(null);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [drinkTime, setDrinkTime] = useState("");
  const [topping, setTopping] = useState("");
  const [claimCode, setClaimCode] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const track = (event: string, params?: Record<string, string>) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", event, params);
    }
  };

  const canCalc = cupsPerDay !== "" && sweetnessLevel !== "";

  const handleCalc = () => {
    const r = calcSugarLimit(weight);
    const cups = CUPS_OPTIONS.find((c) => c.value === cupsPerDay)!.num;
    const sugarPerCup = SWEETNESS_SUGAR[sweetnessLevel]?.grams || 0;
    const dailySugar = cups * sugarPerCup;
    const overRate = r.limit10 > 0 ? Math.round((dailySugar / r.limit10) * 100) : 0;

    setResult({ ...r, dailySugar, overRate });
    setShowAdvanced(false);
    setClaimCode(null);

    track("sugar_complete", {
      weight: String(weight),
      cups: cupsPerDay,
      sweetness: sweetnessLevel,
      daily_sugar: String(dailySugar),
      over_rate: String(overRate),
    });

    setTimeout(() => {
      document
        .getElementById("calc-result")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  // 存 Supabase + 產生代碼
  const handleGetReport = async () => {
    if (!result) return;
    setIsSaving(true);

    const code = generateClaimCode();
    const sessionId = generateSessionId();

    const payload = {
      id: sessionId,
      weight,
      sugar_limit_10: result.limit10,
      sugar_limit_5: result.limit5,
      cups_per_day: cupsPerDay,
      sweetness_level: sweetnessLevel,
      drink_time: drinkTime,
      topping: topping,
      claim_code: code,
    };

    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/sugar_sessions`, {
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
        track("sugar_claim_generated", { cups: cupsPerDay, sweetness: sweetnessLevel });
      } else {
        const code2 = generateClaimCode();
        const res2 = await fetch(`${SUPABASE_URL}/rest/v1/sugar_sessions`, {
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
          track("sugar_claim_generated", { cups: cupsPerDay, sweetness: sweetnessLevel });
        }
      }
    } catch {
      // 靜默
    } finally {
      setIsSaving(false);
      setTimeout(() => {
        document
          .getElementById("claim-section")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  const sweetLabel = SWEETNESS_SUGAR[sweetnessLevel]?.label || "";
  const cupsNum = CUPS_OPTIONS.find((c) => c.value === cupsPerDay)?.num || 0;

  return (
    <section className="pt-10 pb-16 px-5">
      <div className="max-w-2xl mx-auto">
        {/* 工具導航 */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Link href="/tools" className="px-3 py-1.5 rounded-full text-sm font-medium border border-edge text-subtle hover:border-brand hover:text-brand transition-colors">TDEE 計算</Link>
          <Link href="/tools/protein" className="px-3 py-1.5 rounded-full text-sm font-medium border border-edge text-subtle hover:border-brand hover:text-brand transition-colors">蛋白質計算</Link>
          <Link href="/tools/waist-hip" className="px-3 py-1.5 rounded-full text-sm font-medium border border-edge text-subtle hover:border-brand hover:text-brand transition-colors">腰臀比</Link>
          <Link href="/tools/blood-sugar" className="px-3 py-1.5 rounded-full text-sm font-medium border border-edge text-subtle hover:border-brand hover:text-brand transition-colors">血糖穩定度</Link>
          <Link href="/tools/fatty-liver" className="px-3 py-1.5 rounded-full text-sm font-medium border border-edge text-subtle hover:border-brand hover:text-brand transition-colors">脂肪肝風險</Link>
          <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-brand text-white">每日糖攝取</span>
        </div>

        <p className="text-sm font-semibold text-brand mb-4 tracking-wide">免費工具</p>
        <h1 className="text-3xl font-extrabold tracking-tight mb-3">手搖飲怎麼點？算算差多少</h1>
        <p className="text-subtle mb-8">告訴我你怎麼喝，我算給你看——同樣三杯，換個點法差多少。</p>

        {/* ─── 第一階段：體重 + 杯數 + 甜度 ─── */}
        <div className="rounded-2xl border border-edge bg-white p-6 space-y-6">
          {/* 體重 */}
          <div>
            <label className="block text-sm font-bold mb-2">你的體重</label>
            <select
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-xl border border-edge text-center text-lg focus:outline-none focus:border-brand transition-colors appearance-none bg-white"
            >
              {WEIGHT_OPTIONS.map((v) => (
                <option key={v} value={v}>{v} 公斤</option>
              ))}
            </select>
          </div>

          {/* 一天幾杯 */}
          <div>
            <label className="block text-sm font-bold mb-2">你一天喝幾杯含糖飲料？</label>
            <div className="space-y-2">
              {CUPS_OPTIONS.map((opt) => (
                <OptionButton
                  key={opt.value}
                  selected={cupsPerDay === opt.value}
                  onClick={() => setCupsPerDay(opt.value)}
                  label={opt.label}
                />
              ))}
            </div>
          </div>

          {/* 甜度 */}
          <div>
            <label className="block text-sm font-bold mb-2">你通常點什麼甜度？</label>
            <div className="space-y-2">
              {SWEETNESS_OPTIONS.map((opt) => (
                <OptionButton
                  key={opt.value}
                  selected={sweetnessLevel === opt.value}
                  onClick={() => setSweetnessLevel(opt.value)}
                  label={opt.label}
                  sub={opt.sub}
                />
              ))}
            </div>
          </div>

          <button
            onClick={handleCalc}
            disabled={!canCalc}
            className="w-full py-4 bg-brand text-white font-bold rounded-xl hover:shadow-md transition-shadow text-base disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {canCalc ? "算算我喝了多少糖 →" : "請選擇杯數和甜度"}
          </button>
        </div>

        {/* ─── 結果區 ─── */}
        {result && (
          <div id="calc-result" className="mt-8 space-y-6 scroll-mt-20">
            {/* 數字結果 */}
            <div className="rounded-2xl border border-edge bg-white p-6">
              <p className="text-sm text-muted mb-4">你的糖額度</p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-5 rounded-xl bg-[#fef2f2]">
                  <p className="text-xs text-muted mb-1">每日上限</p>
                  <p className="text-3xl font-bold text-[#dc2626]">
                    {result.limit10}
                    <span className="text-sm font-normal text-muted ml-1">克</span>
                  </p>
                  <p className="text-xs text-subtle mt-1">WHO 建議 10%</p>
                </div>
                <div className="text-center p-5 rounded-xl bg-surface-green">
                  <p className="text-xs text-brand mb-1">理想值</p>
                  <p className="text-3xl font-bold text-brand">
                    {result.limit5}
                    <span className="text-sm font-normal text-muted ml-1">克</span>
                  </p>
                  <p className="text-xs text-subtle mt-1">WHO 建議 5%</p>
                </div>
              </div>

              {/* 她的喝法 vs 換個點法 */}
              {result.dailySugar > 0 ? (
                <div className="space-y-3">
                  {/* 現在的喝法 */}
                  <div className="bg-[#fef2f2] rounded-xl p-4">
                    <p className="text-xs text-[#dc2626] font-semibold mb-2">你現在的喝法</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-subtle">每天 {cupsNum} 杯{sweetLabel}</span>
                      <span className="text-lg font-bold text-[#dc2626]">{(BASE_CAL[sweetnessLevel as keyof typeof BASE_CAL] || 0) * cupsNum} 卡</span>
                    </div>
                    <p className="text-xs text-subtle mt-1">含糖 {result.dailySugar}g（每日上限 {result.limit10}g，{result.overRate > 100 ? `已超標` : `用掉 ${result.overRate}%`}）</p>
                  </div>
                  {/* 換個點法（用卡路里比，不用糖克數） */}
                  <div className="bg-surface-green rounded-xl p-4">
                    <p className="text-xs text-brand font-semibold mb-2">換個點法</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-subtle">每天 {cupsNum} 杯無糖茶 + 仙草</span>
                      <span className="text-lg font-bold text-brand">{57 * cupsNum} 卡</span>
                    </div>
                    <p className="text-xs text-subtle mt-1">
                      每天省 {(BASE_CAL[sweetnessLevel as keyof typeof BASE_CAL] || 0) * cupsNum - 57 * cupsNum} 卡，一個月 ≈ {Math.round(((BASE_CAL[sweetnessLevel as keyof typeof BASE_CAL] || 0) * cupsNum - 57 * cupsNum) * 30 / 7700 * 10) / 10} 公斤
                    </p>
                  </div>
                  <p className="text-center text-sm text-ink font-medium">
                    你沒有少喝，只是換了一個點法。
                  </p>
                </div>
              ) : (
                <p className="text-center text-sm text-brand">
                  你喝無糖，飲料這塊不用擔心 👍
                </p>
              )}
            </div>

            {/* The Gap */}
            {result.dailySugar > 0 && (
              <div className="p-5 rounded-xl bg-[#fef9f3] border border-[#f0e6d8] space-y-3">
                <p className="text-[15px] font-semibold text-ink">
                  但你知道嗎？
                </p>
                {sweetnessLevel === "half" && (
                  <p className="text-[15px] text-subtle leading-relaxed">
                    你覺得半糖已經很節制了——但半糖一杯還有 25g 糖。
                    你一天 {cupsNum} 杯 = {result.dailySugar}g，上限才 {result.limit10}g。
                  </p>
                )}
                <p className="text-[15px] text-subtle leading-relaxed">
                  而且 {result.dailySugar}g 只是飲料的部分。你早餐的麵包（10g）、午餐的醬料（5g）、下午的餅乾（15g）——
                  <strong className="text-ink">這些隱藏糖加起來，你每天實際吃的糖可能是上限的 2-3 倍。</strong>
                </p>
                <p className="text-[15px] text-ink font-medium leading-relaxed pt-1">
                  不是要你戒糖。是讓你知道額度在哪——知道了，你自己會決定怎麼分配。
                </p>
              </div>
            )}

            {/* 毛玻璃預覽 + 進階問題入口 */}
            {!claimCode && (
              <div className="relative rounded-2xl border border-edge bg-white overflow-hidden">
                {/* 看得到的部分 */}
                <div className="p-6 pb-0">
                  <p className="text-sm font-bold text-brand mb-3">
                    💡 配料紅綠燈：
                  </p>
                  <div className="space-y-2 text-[15px] text-ink">
                    <p>
                      同樣一杯手搖飲，全糖奶茶加波霸 = 575 大卡，無糖茶加仙草 = 57 大卡。
                      <strong>差了 10 倍。</strong>你不需要戒飲料，只需要知道怎麼點。
                    </p>
                  </div>
                </div>

                {/* 模糊的部分 */}
                <div
                  className="px-6 pt-4 pb-44"
                  style={{ filter: "blur(4px)", pointerEvents: "none", userSelect: "none" }}
                >
                  <div className="space-y-3 text-[15px] text-subtle">
                    <p>
                      紅燈（偶爾喝）：奶蓋 203 卡、波霸 156 卡、冰淇淋 160 卡。綠燈（放心加）：仙草 57 卡、愛玉 45 卡、寒天 42 卡。基底差距最大：全糖奶茶 575 卡 vs 無糖茶 0 卡。根據你的喝法，最該先調整的是...
                    </p>
                  </div>
                </div>

                {/* Overlay CTA */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white from-60% to-white/0 p-6 pt-10 flex flex-col items-center">
                  <p className="text-[15px] font-semibold text-ink mb-1">
                    你的個人化飲料建議已準備好
                  </p>
                  <p className="text-sm text-brand mb-3">
                    再回答 2 個問題，讓報告更準確 👇
                  </p>
                  {!showAdvanced && (
                    <button
                      onClick={() => {
                        setShowAdvanced(true);
                        track("sugar_start_advanced");
                        setTimeout(() => {
                          document.getElementById("advanced-questions")
                            ?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }, 100);
                      }}
                      className="w-full max-w-sm py-4 bg-brand text-white font-bold rounded-xl hover:shadow-md transition-shadow text-base"
                    >
                      告訴你我怎麼吃 →
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* ─── Step 2: 飲食習慣 ─── */}
            {showAdvanced && !claimCode && (
              <div id="advanced-questions" className="rounded-2xl border border-edge bg-white p-6 space-y-7 scroll-mt-20">
                <p className="text-sm font-bold text-brand">回答 2 個問題，讓報告更準確</p>

                {/* 什麼時候喝 */}
                <div>
                  <label className="block text-sm font-bold mb-2">你通常什麼時候喝飲料？</label>
                  <div className="space-y-2">
                    {DRINK_TIME_OPTIONS.map((opt) => (
                      <OptionButton key={opt.value} selected={drinkTime === opt.value} onClick={() => setDrinkTime(opt.value)} label={opt.label} sub={opt.sub} />
                    ))}
                  </div>
                </div>

                {/* 加什麼配料 */}
                <div>
                  <label className="block text-sm font-bold mb-2">你通常加什麼配料？</label>
                  <div className="space-y-2">
                    {TOPPING_OPTIONS.map((opt) => (
                      <OptionButton key={opt.value} selected={topping === opt.value} onClick={() => setTopping(opt.value)} label={opt.label} sub={opt.sub} />
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleGetReport}
                  disabled={isSaving || !drinkTime || !topping}
                  className="w-full py-4 bg-line-green text-white font-bold rounded-xl hover:shadow-md transition-shadow text-base disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {isSaving ? "分析中..." : "幫我看怎麼換個點法 →"}
                </button>
              </div>
            )}

            {/* ─── 個人化診斷預覽 + 模糊 + LINE 領取 ─── */}
            {claimCode && (
              <div id="claim-section" className="space-y-6 scroll-mt-20">
                <div className="relative rounded-2xl border border-edge bg-white overflow-hidden">
                  {/* 診斷預覽（清楚可見）：你的喝法 vs 換個點法 */}
                  <div className="p-6 pb-0">
                    <p className="text-sm font-bold text-brand mb-3">💡 根據你的點法：</p>
                    <div className="space-y-2 text-[15px] text-ink">
                      {(() => {
                        const tp = TOPPING_CAL[topping] || TOPPING_CAL.none;
                        const baseCal = BASE_CAL[sweetnessLevel] || 0;
                        const currentPerCup = baseCal + tp.cal;
                        const greenPerCup = 0 + tp.greenCal; // 無糖茶 + 綠燈配料
                        const currentDaily = currentPerCup * cupsNum;
                        const greenDaily = greenPerCup * cupsNum;
                        const savedDaily = currentDaily - greenDaily;
                        const savedMonthKg = Math.round((savedDaily * 30 / 7700) * 10) / 10;
                        return (
                          <>
                            <p>
                              你每天 {cupsNum} 杯{sweetLabel}
                              {tp.cal > 0 ? ` + ${tp.label}` : ""}
                              = <strong>{currentDaily} 卡 / 天</strong>
                            </p>
                            <p>
                              換成無糖茶
                              {tp.greenCal > 0 ? ` + ${tp.greenAlt}` : ""}
                              = <strong className="text-brand">{greenDaily} 卡 / 天</strong>
                            </p>
                            {savedDaily > 0 && (
                              <p className="font-medium">
                                差距：每天省 {savedDaily} 卡，一個月 ≈ {savedMonthKg} 公斤。
                                你沒有少喝，只是換了一個點法。
                              </p>
                            )}
                          </>
                        );
                      })()}
                    </div>
                  </div>

                  {/* 模糊的部分 */}
                  <div
                    className="px-6 pt-4 pb-44"
                    style={{ filter: "blur(4px)", pointerEvents: "none", userSelect: "none" }}
                  >
                    <div className="space-y-3 text-[15px] text-subtle">
                      <p>
                        {sweetnessLevel === "full"
                          ? `你現在點全糖，先從少糖開始就好。一杯省 100 卡，一天 ${cupsNum} 杯就省 ${cupsNum * 100} 卡。兩週後你會自然覺得全糖太甜——不是靠意志力，是味覺跟著身體一起改變了。`
                          : `配料從紅燈換綠燈：波霸 156 卡換仙草 57 卡，一杯差 99 卡。你不用少喝，只是換個料。`}
                        {drinkTime === "afternoon" ? "而且你下午喝的那杯，可能跟中午吃的東西有關——" : ""}
                        完整的個人化替換建議和配料紅綠燈表在報告裡。
                      </p>
                    </div>
                  </div>

                  {/* Overlay CTA */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white from-60% to-white/0 p-6 pt-10 flex flex-col items-center">
                    <p className="text-[15px] font-semibold text-ink mb-1">你的完整飲料建議已準備好</p>
                    <p className="text-sm text-brand mb-3">在 LINE 領取配料紅綠燈 + 個人化建議 👇</p>
                    <a
                      href={`https://line.me/R/oaMessage/%40sososo/?${encodeURIComponent(claimCode)}`}
                      className="w-full max-w-sm py-4 bg-line-green text-white font-bold rounded-xl hover:shadow-lg transition-shadow text-base text-center block"
                      onClick={() => track("click_line_sugar", { code: claimCode, cups: cupsPerDay, sweetness: sweetnessLevel })}
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

            {/* 測驗 CTA */}
            {claimCode && (
              <div className="rounded-2xl border border-edge bg-white p-6 text-center">
                <p className="text-xs text-muted mb-2">想更深入了解自己？</p>
                <p className="text-[15px] text-ink font-semibold leading-relaxed mb-4">
                  糖吃太多會讓血糖不穩、代謝變慢。先搞清楚你的代謝狀態。
                </p>
                <a href="/quiz" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border-2 border-brand text-brand hover:bg-brand hover:text-white transition-colors" onClick={() => track("click_quiz_cta", { source: "sugar" })}>
                  30 秒測出你的代謝類型 →
                </a>
              </div>
            )}
          </div>
        )}

        {/* ─── SEO 內容 ─── */}
        <div className="mt-16 space-y-8">
          <h2 className="text-xl font-bold">為什麼要在意糖？</h2>
          <div className="space-y-4 text-[15px] text-subtle leading-relaxed">
            <p>糖吃多了最直接的影響不是變胖——是<strong className="text-ink">血糖不穩</strong>。</p>
            <p>血糖飆高 → 胰島素大量分泌 → 血糖快速掉下來 → 你又餓了、又想吃甜的。這個循環一旦啟動，靠意志力擋不住。</p>
            <p>長期下來，身體對胰島素越來越不敏感（<Link href="/concepts/insulin-resistance" className="text-brand underline decoration-brand/35 hover:decoration-brand">胰島素阻抗</Link>），脂肪更容易堆積，代謝更容易下降。</p>
          </div>

          <h2 className="text-xl font-bold">手搖飲一定要戒嗎？</h2>
          <div className="space-y-4 text-[15px] text-subtle leading-relaxed">
            <p><strong className="text-ink">不用。</strong>差別在怎麼點。</p>
            <p>同樣一杯手搖飲，全糖奶茶加波霸 = 575 大卡，無糖茶加仙草 = 57 大卡。差了 10 倍。你沒有少喝，只是換了一個點法。</p>
            <p>而且味覺會跟著身體改變。很多學員調整飲食之後，自然覺得全糖太甜了，不是硬忍，是真的覺得甜到不舒服。</p>
          </div>

          <h2 className="text-xl font-bold">配料紅綠燈</h2>
          <div className="space-y-4 text-[15px] text-subtle leading-relaxed">
            <p><strong className="text-[#dc2626]">紅燈（超過 140 卡，偶爾喝）：</strong>奶蓋 203、草仔粿 168、西米露 165、冰淇淋 160、波霸 156、蜜地瓜 150、多多 144</p>
            <p><strong className="text-[#d97706]">黃燈（110-131 卡，注意頻率）：</strong>粉條 131、芋圓 128、Oreo 脆片 116、布丁 110</p>
            <p><strong className="text-brand">綠燈（80 卡以下，放心加）：</strong>椰果 76、蒟蒻 71、仙草 57、愛玉 45、寒天 42、蘆薈 31</p>
          </div>

          <div className="text-center py-8 border-t border-edge">
            <p className="text-subtle mb-4">糖只是表面，<strong className="text-ink">代謝狀態才是根源</strong>。</p>
            <a href="/quiz" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand rounded-full shadow-lg hover:shadow-xl transition-shadow" onClick={() => track("click_quiz_cta", { source: "sugar_bottom" })}>
              測出你的代謝類型，找到適合你的方法 →
            </a>
          </div>
        </div>

        <div className="mt-12 rounded-xl bg-surface border border-edge px-5 py-4">
          <p className="text-sm text-muted leading-relaxed">
            糖攝取建議基於 WHO 指南，實際需求因個人代謝、活動量、健康狀況而異。本工具僅供參考。
          </p>
        </div>
      </div>

      <StickyLineCTA />
    </section>
  );
}
