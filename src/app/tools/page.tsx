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
  return "td_" + Math.random().toString(36).slice(2, 10);
}

// ─── 計算邏輯 ───

type Gender = "female" | "male";
type ActivityLevel =
  | "sedentary"
  | "light"
  | "moderate"
  | "active"
  | "very-active";

const ACTIVITY_OPTIONS: {
  value: ActivityLevel;
  label: string;
  desc: string;
  factor: number;
}[] = [
  {
    value: "sedentary",
    label: "久坐不動",
    desc: "整天坐辦公桌，幾乎不運動",
    factor: 1.2,
  },
  {
    value: "light",
    label: "輕度活動",
    desc: "每週運動 1-2 次，或日常走路較多",
    factor: 1.375,
  },
  {
    value: "moderate",
    label: "中度活動",
    desc: "每週運動 3-5 次",
    factor: 1.55,
  },
  {
    value: "active",
    label: "高度活動",
    desc: "每週運動 6-7 次，體力勞動工作",
    factor: 1.725,
  },
  {
    value: "very-active",
    label: "非常活躍",
    desc: "每天高強度訓練或重體力勞動",
    factor: 1.9,
  },
];

function calcBMR(
  gender: Gender,
  weight: number,
  height: number,
  age: number
): number {
  if (gender === "male") {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  }
  return 10 * weight + 6.25 * height - 5 * age - 161;
}

function getProteinRange(weight: number): [number, number] {
  return [Math.round(weight * 1.0), Math.round(weight * 1.6)];
}

// ─── 早餐蛋白質估算 ───

const BREAKFAST_PROTEIN: Record<string, { label: string; protein: number }> = {
  bread: { label: "麵包/蛋餅/三明治", protein: 8 },
  skip: { label: "不吃早餐", protein: 0 },
  cereal: { label: "牛奶/麥片/燕麥", protein: 10 },
  balanced: { label: "有意識搭配", protein: 20 },
};

const DIET_METHOD_LABELS: Record<string, string> = {
  "eat-less": "少吃/節食",
  exercise: "運動為主",
  both: "少吃+運動",
  none: "沒特別做",
};

// ─── 主元件 ───

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
    deficit1200: number;
    bmrAfter3m: number;
    tdeeAfter3m: number;
  } | null>(null);
  const [error, setError] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [dietMethod, setDietMethod] = useState("");
  const [breakfastHabit, setBreakfastHabit] = useState("");
  const [afternoonCraving, setAfternoonCraving] = useState("");
  const [claimCode, setClaimCode] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const track = (event: string, params?: Record<string, string>) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", event, params);
    }
  };

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

    // 代謝適應預測：如果吃 TDEE - 500（常見減肥建議）
    const deficit = Math.round(tdee - 500);
    // 少吃 3 個月，BMR 大約下降 10-15%（代謝適應）
    const bmrDrop = Math.round(bmr * 0.87);
    const tdeeDrop = Math.round(bmrDrop * factor);

    setResult({
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      protein,
      deficit1200: deficit,
      bmrAfter3m: bmrDrop,
      tdeeAfter3m: tdeeDrop,
    });

    track("tdee_complete", {
      gender,
      activity,
      bmr: String(Math.round(bmr)),
      tdee: String(Math.round(tdee)),
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
      gender,
      age: parseInt(age),
      height: parseFloat(height),
      weight: parseFloat(weight),
      activity_level: activity,
      bmr: result.bmr,
      tdee: result.tdee,
      protein_min: result.protein[0],
      protein_max: result.protein[1],
      diet_method: dietMethod,
      breakfast_habit: breakfastHabit,
      afternoon_craving: afternoonCraving,
      claim_code: code,
    };

    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/tdee_sessions`, {
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
        track("tdee_claim_generated", {
          gender,
          activity,
          tdee: String(result.tdee),
        });
      } else {
        const code2 = generateClaimCode();
        const res2 = await fetch(`${SUPABASE_URL}/rest/v1/tdee_sessions`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: SUPABASE_ANON_KEY,
            Prefer: "return=minimal",
          },
          body: JSON.stringify({
            ...payload,
            id: generateSessionId(),
            claim_code: code2,
          }),
        });
        if (res2.ok) {
          setClaimCode(code2);
          track("tdee_claim_generated", {
            gender,
            activity,
            tdee: String(result.tdee),
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

  return (
    <section className="pt-10 pb-16 px-5">
      <div className="max-w-2xl mx-auto">
        {/* 工具導航 */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-brand text-white">
            TDEE 計算
          </span>
          <Link
            href="/tools/protein"
            className="px-3 py-1.5 rounded-full text-sm font-medium border border-edge text-subtle hover:border-brand hover:text-brand transition-colors"
          >
            蛋白質計算
          </Link>
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

        {/* ─── 結果 ─── */}
        {result && (
          <div id="calc-result" className="mt-8 space-y-6 scroll-mt-20">
            {/* 數字結果 */}
            <div className="rounded-2xl border border-edge bg-white p-6">
              <p className="text-sm text-muted mb-4">你的計算結果</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 rounded-xl bg-surface">
                  <p className="text-xs text-muted mb-1">
                    基礎代謝率（BMR）
                  </p>
                  <p className="text-2xl font-bold text-ink">
                    {result.bmr}
                    <span className="text-sm font-normal text-muted ml-1">
                      大卡/天
                    </span>
                  </p>
                  <p className="text-xs text-subtle mt-1">
                    躺著不動也會消耗的熱量
                  </p>
                </div>
                <div className="text-center p-4 rounded-xl bg-surface-green">
                  <p className="text-xs text-brand mb-1">
                    每日總消耗（TDEE）
                  </p>
                  <p className="text-2xl font-bold text-brand">
                    {result.tdee}
                    <span className="text-sm font-normal text-muted ml-1">
                      大卡/天
                    </span>
                  </p>
                  <p className="text-xs text-subtle mt-1">
                    含日常活動的總消耗
                  </p>
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-surface">
                <p className="text-xs text-muted mb-1">每日蛋白質建議量</p>
                <p className="text-2xl font-bold text-ink">
                  {result.protein[0]} - {result.protein[1]}
                  <span className="text-sm font-normal text-muted ml-1">
                    克/天
                  </span>
                </p>
                <p className="text-xs text-subtle mt-1">體重 × 1.0-1.6 倍</p>
              </div>
            </div>

            {/* ─── The Gap：代謝適應陷阱 ─── */}
            <div className="p-5 rounded-xl bg-[#fef9f3] border border-[#f0e6d8] space-y-4">
              <p className="text-[15px] font-semibold text-ink">
                接下來你可能會想做的事：
              </p>
              <p className="text-[15px] text-subtle leading-relaxed">
                「好，我的 TDEE 是 {result.tdee} 卡，那我吃{" "}
                {result.deficit1200} 卡就能瘦了。」
              </p>
              <p className="text-[15px] text-subtle leading-relaxed">
                大多數人都是這樣想的。但你可能不知道——
              </p>
              <p className="text-[15px] text-ink font-medium leading-relaxed">
                你吃 {result.deficit1200} 卡的時候，身體做的第一件事不是燒脂肪，
                <br />
                是降代謝。
              </p>

              {/* 視覺化：3 個月後的代謝預測 */}
              <div className="bg-white rounded-xl p-4 space-y-3">
                <p className="text-xs font-bold text-[#92400e]">
                  如果你照「少吃 500 卡」的方式減肥，3 個月後：
                </p>
                <div className="space-y-2">
                  {/* BMR 對比 */}
                  <div>
                    <div className="flex justify-between text-xs text-muted mb-1">
                      <span>基礎代謝率</span>
                      <span className="text-[#dc2626] font-medium">
                        ↓ {result.bmr - result.bmrAfter3m} 卡
                      </span>
                    </div>
                    <div className="h-6 bg-surface rounded-full overflow-hidden relative">
                      <div
                        className="h-full bg-brand/30 rounded-full"
                        style={{ width: "100%" }}
                      />
                      <div
                        className="h-full bg-[#dc2626]/60 rounded-full absolute top-0 left-0"
                        style={{
                          width: `${(result.bmrAfter3m / result.bmr) * 100}%`,
                        }}
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-ink">
                        {result.bmr} → {result.bmrAfter3m}
                      </span>
                    </div>
                  </div>
                  {/* TDEE 對比 */}
                  <div>
                    <div className="flex justify-between text-xs text-muted mb-1">
                      <span>每日總消耗</span>
                      <span className="text-[#dc2626] font-medium">
                        ↓ {result.tdee - result.tdeeAfter3m} 卡
                      </span>
                    </div>
                    <div className="h-6 bg-surface rounded-full overflow-hidden relative">
                      <div
                        className="h-full bg-brand/30 rounded-full"
                        style={{ width: "100%" }}
                      />
                      <div
                        className="h-full bg-[#dc2626]/60 rounded-full absolute top-0 left-0"
                        style={{
                          width: `${(result.tdeeAfter3m / result.tdee) * 100}%`,
                        }}
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-ink">
                        {result.tdee} → {result.tdeeAfter3m}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-[#92400e] leading-relaxed">
                  到時候你要吃更少才能繼續瘦。吃更少 → 代謝更低 →
                  更難瘦。這就是為什麼「少吃多動」越做越沒效。
                </p>
              </div>

              <p className="text-[15px] text-ink font-medium leading-relaxed pt-1">
                問題不在吃幾卡。
                <br />
                是你吃的東西，讓身體進入「燃燒模式」還是「儲存模式」。
              </p>
            </div>

            {/* ─── 個人化預覽 + 模糊 + 進階問題入口 ─── */}
            {!claimCode && (
              <div className="relative rounded-2xl border border-edge bg-white overflow-hidden">
                {/* 看得到的部分：個人化分析預覽 */}
                <div className="p-6 pb-0">
                  <p className="text-sm font-bold text-brand mb-3">
                    💡 根據你的數據：
                  </p>
                  <div className="space-y-2 text-[15px] text-ink">
                    <p>
                      你的 BMR 是 {result.bmr} 卡，代表你躺一整天不動就會燒掉這麼多。
                      但如果你吃不到 {result.bmr} 卡，身體會以為你在挨餓——
                    </p>
                    <p className="font-medium">
                      代謝降速、肌肉流失、越來越難瘦。
                    </p>
                  </div>
                </div>

                {/* 模糊的部分：完整建議 */}
                <div
                  className="px-6 pt-4 pb-6"
                  style={{
                    filter: "blur(4px)",
                    pointerEvents: "none",
                    userSelect: "none",
                    maskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 100%)",
                  }}
                >
                  <div className="space-y-2 text-[15px] text-subtle">
                    <p>你吃 {result.deficit1200} 卡的時候，身體做的第一件事不是燒脂肪，是降代謝。3 個月後你的 BMR 可能從 {result.bmr} 降到 {result.bmrAfter3m}，到時候正常吃就復胖。</p>
                    <p>你每餐至少需要 {Math.round(result.protein[0] / 3)}g 蛋白質才能撐住代謝，但大多數人的早餐只有 5-10g。蛋白質不夠，肌肉流失，代謝只會越來越低。</p>
                    <p>不用算卡路里，照餐盤比例吃就好：蔬菜佔一半、蛋白質佔四分之一、原型碳水佔四分之一。告訴我你平常怎麼吃，我幫你看哪裡最該先調。</p>
                  </div>
                </div>

                {/* Overlay CTA */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-6 flex flex-col items-center">
                  <p className="text-[15px] font-semibold text-ink mb-1 text-center">
                    你的完整飲食模式分析已準備好
                  </p>
                  <p className="text-sm text-brand mb-4">
                    回答 3 個問題，讓報告更準確 👇
                  </p>
                  {!showAdvanced ? (
                    <button
                      onClick={() => {
                        setShowAdvanced(true);
                        track("tdee_start_advanced");
                        setTimeout(() => {
                          document
                            .getElementById("advanced-questions")
                            ?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }, 100);
                      }}
                      className="w-full max-w-sm py-4 bg-brand text-white font-bold rounded-xl hover:shadow-md transition-shadow text-base"
                    >
                      告訴你我怎麼吃 →
                    </button>
                  ) : null}
                </div>
              </div>
            )}

            {/* ─── Step 2: 飲食習慣問題 ─── */}
            {showAdvanced && !claimCode && (
              <div
                id="advanced-questions"
                className="rounded-2xl border border-edge bg-white p-6 space-y-7 scroll-mt-20"
              >
                <p className="text-sm font-bold text-brand">
                  回答 3 個問題，讓報告更準確
                </p>

                {/* Q1：減肥方法 */}
                <div>
                  <label className="block text-sm font-bold mb-2">
                    你之前減肥通常怎麼做？
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: "eat-less", label: "少吃", sub: "節食 / 跳餐 / 168 斷食" },
                      { value: "exercise", label: "運動為主", sub: "跑步、健身、有氧" },
                      { value: "both", label: "兩個都有", sub: "但效果不持久" },
                      { value: "none", label: "沒特別做", sub: "但體重一直上升" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setDietMethod(opt.value)}
                        className={`w-full text-left px-4 py-3 rounded-xl border transition-colors ${
                          dietMethod === opt.value
                            ? "border-brand bg-surface-green"
                            : "border-edge hover:border-edge-dark"
                        }`}
                      >
                        <span className="text-sm font-medium">{opt.label}</span>
                        <span className="text-xs text-muted ml-2">{opt.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Q2：早餐 */}
                <div>
                  <label className="block text-sm font-bold mb-2">
                    你早餐通常吃什麼？
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: "bread", label: "麵包 / 蛋餅 / 三明治" },
                      { value: "skip", label: "不吃早餐" },
                      { value: "cereal", label: "牛奶 / 麥片 / 燕麥" },
                      { value: "balanced", label: "蛋 + 蔬菜 + 澱粉", sub: "有意識搭配" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setBreakfastHabit(opt.value)}
                        className={`w-full text-left px-4 py-3 rounded-xl border transition-colors ${
                          breakfastHabit === opt.value
                            ? "border-brand bg-surface-green"
                            : "border-edge hover:border-edge-dark"
                        }`}
                      >
                        <span className="text-sm font-medium">{opt.label}</span>
                        {opt.sub && <span className="text-xs text-muted ml-2">{opt.sub}</span>}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Q3：下午 */}
                <div>
                  <label className="block text-sm font-bold mb-2">
                    下午三四點的時候，你通常？
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: "must", label: "一定要來杯飲料或甜食", sub: "不吃就撐不下去" },
                      { value: "sometimes", label: "有點想但忍得住" },
                      { value: "rarely", label: "不太會特別想吃" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setAfternoonCraving(opt.value)}
                        className={`w-full text-left px-4 py-3 rounded-xl border transition-colors ${
                          afternoonCraving === opt.value
                            ? "border-brand bg-surface-green"
                            : "border-edge hover:border-edge-dark"
                        }`}
                      >
                        <span className="text-sm font-medium">{opt.label}</span>
                        {opt.sub && <span className="text-xs text-muted ml-2">{opt.sub}</span>}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleGetReport}
                  disabled={isSaving || !dietMethod || !breakfastHabit || !afternoonCraving}
                  className="w-full py-4 bg-line-green text-white font-bold rounded-xl hover:shadow-md transition-shadow text-base disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {isSaving ? "分析中..." : "幫我診斷飲食模式 →"}
                </button>
              </div>
            )}

            {/* ─── 個人化診斷預覽 + 模糊 + LINE 領取 ─── */}
            {claimCode && (
              <div id="claim-section" className="space-y-6 scroll-mt-20">
                {/* 診斷預覽（清楚可見） */}
                <div className="relative rounded-2xl border border-edge bg-white overflow-hidden">
                  <div className="p-6 pb-0">
                    <p className="text-sm font-bold text-brand mb-3">
                      💡 根據你的回答：
                    </p>
                    <div className="space-y-2 text-[15px] text-ink">
                      <p>
                        你選了「{DIET_METHOD_LABELS[dietMethod] || dietMethod}」——
                        {dietMethod === "eat-less" && "這正是讓你代謝越來越低的原因。身體偵測到熱量不夠，第一反應是降代謝，不是燒脂肪。"}
                        {dietMethod === "exercise" && "但光靠運動消耗的卡路里遠比你想的少。跑步 30 分鐘大約 250 卡，一杯手搖飲就 500 卡。"}
                        {dietMethod === "both" && "少吃+運動會讓身體以為你在逃難，同時降代謝+增加飢餓感。不是意志力差，是身體在跟你打架。"}
                        {dietMethod === "none" && "體重一直上升通常代表代謝正在慢慢下降，可能是蛋白質長期不夠。"}
                      </p>
                      {breakfastHabit !== "balanced" && (
                        <p>
                          而且你的早餐「{BREAKFAST_PROTEIN[breakfastHabit]?.label}」，蛋白質只有約{" "}
                          <strong>{BREAKFAST_PROTEIN[breakfastHabit]?.protein || 0}g</strong>
                          ，目標是{" "}
                          <strong>{Math.round(result.protein[0] / 3)}g</strong>
                          ——差了{" "}
                          <strong>
                            {Math.max(0, Math.round(result.protein[0] / 3) - (BREAKFAST_PROTEIN[breakfastHabit]?.protein || 0))}g
                          </strong>。
                        </p>
                      )}
                      {afternoonCraving === "must" && (
                        <p className="font-medium">
                          你下午一定要喝飲料？這不是嘴饞——是早餐和中午蛋白質沒吃夠，血糖掉了，大腦在跟你要糖。
                        </p>
                      )}
                    </div>
                  </div>

                  {/* 模糊的部分：放真實內容，blur 讓她看不清但知道是真的 */}
                  <div
                    className="px-6 pt-4 pb-6"
                    style={{
                      filter: "blur(4px)",
                      pointerEvents: "none",
                      userSelect: "none",
                      maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 100%)",
                      WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 100%)",
                    }}
                  >
                    <div className="space-y-2 text-[15px] text-subtle">
                      {dietMethod === "eat-less" && (
                        <p>你選了少吃，但身體偵測到熱量不夠時，第一反應是降代謝不是燒脂肪。你越少吃，它越省著用。3 個月後你的 BMR 可能從 {result.bmr} 降到 {result.bmrAfter3m}，到時候正常吃就復胖。</p>
                      )}
                      {dietMethod === "exercise" && (
                        <p>你選了運動為主，但跑步 30 分鐘大約消耗 250 卡，一杯手搖飲就 500 卡。運動不是不做，但吃的東西不對，怎麼動都追不回來。真正的關鍵在你每餐吃了什麼。</p>
                      )}
                      {dietMethod === "both" && (
                        <p>你少吃又運動，但身體以為你在逃難——同時降代謝加增加飢餓感。這不是意志力差，是身體的生存本能在跟你打架。你需要的不是更努力，是換方法。</p>
                      )}
                      {dietMethod === "none" && (
                        <p>你體重一直上升，代表代謝正在慢慢下降。蛋白質長期不夠、精緻澱粉太多，身體一直在儲存模式。好消息是，調整吃法就能逆轉。</p>
                      )}
                      {breakfastHabit !== "balanced" && (
                        <p>你的早餐「{BREAKFAST_PROTEIN[breakfastHabit]?.label}」蛋白質只有 {BREAKFAST_PROTEIN[breakfastHabit]?.protein || 0}g，目標是 {Math.round(result.protein[0] / 3)}g。建議換成兩顆蛋加一片全麥吐司，蛋白質直接翻倍，而且更飽。</p>
                      )}
                      <p>不用算卡路里，照這個餐盤比例吃：蔬菜佔一半、蛋白質佔四分之一、原型碳水佔四分之一。每餐蛋白質至少 {Math.round(result.protein[0] / 3)}g，一個手掌大的肉或魚。</p>
                    </div>
                  </div>

                  {/* Overlay CTA */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-6 flex flex-col items-center">
                    <p className="text-[15px] font-semibold text-ink mb-1">
                      你的完整報告已準備好
                    </p>
                    <p className="text-sm text-brand mb-3">
                      在 LINE 領取個人化飲食建議 👇
                    </p>
                    <a
                      href={`https://line.me/R/oaMessage/%40sososo/?${encodeURIComponent(claimCode)}`}
                      className="w-full max-w-sm py-4 bg-line-green text-white font-bold rounded-xl hover:shadow-lg transition-shadow text-base text-center block"
                      onClick={() =>
                        track("click_line_tdee", {
                          code: claimCode,
                          tdee: String(result.tdee),
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
            {claimCode && (
              <div className="rounded-2xl border border-edge bg-white p-6 text-center">
                <p className="text-xs text-muted mb-2">想更深入了解自己？</p>
                <p className="text-[15px] text-ink font-semibold leading-relaxed mb-4">
                  同樣的 TDEE，不同的代謝類型，結果完全不同。
                </p>
                <a
                  href="/quiz"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border-2 border-brand text-brand hover:bg-brand hover:text-white transition-colors"
                  onClick={() =>
                    track("click_quiz_cta", { source: "tdee" })
                  }
                >
                  30 秒測出你的代謝類型 →
                </a>
              </div>
            )}
          </div>
        )}

        {/* ─── SEO 內容 ─── */}
        <div className="mt-16 space-y-8">
          <h2 className="text-xl font-bold">什麼是 BMR 和 TDEE？</h2>
          <div className="space-y-4 text-[15px] text-subtle leading-relaxed">
            <p>
              <strong className="text-ink">BMR（基礎代謝率）</strong>
              是你躺在床上一整天不動，身體光是維持呼吸、心跳、體溫就會消耗的熱量。它大約佔你每天總消耗的
              60-70%。
            </p>
            <p>
              <strong className="text-ink">TDEE（每日總消耗熱量）</strong>
              是你一整天實際消耗的熱量，包含 BMR + 日常活動 + 運動 + 食物消化。
            </p>
            <p>
              本計算機使用{" "}
              <strong className="text-ink">Mifflin-St Jeor 公式</strong>
              ，這是目前被認為最準確的 BMR
              估算公式。但要注意：所有公式都是估算值，實際代謝會受到肌肉量、荷爾蒙狀態、睡眠品質等因素影響。
            </p>
          </div>

          <h2 className="text-xl font-bold">為什麼一休不教算熱量？</h2>
          <div className="space-y-4 text-[15px] text-subtle leading-relaxed">
            <p>
              帶學員這麼多年，我發現一件事：越認真算熱量的人，越容易陷入「吃太少
              → 代謝下降 → 更難瘦」的惡性循環。
            </p>
            <p>
              因為生活是動態的，飲食也是動態的。一大盤健康的原型食物很難超過 500
              大卡而且會飽；一杯手搖飲輕鬆超過 500 大卡卻不會飽。
            </p>
            <p>
              <strong className="text-ink">
                與其盯著數字，不如關注食物品質和餐盤比例
              </strong>
              ——三份蔬菜、兩份蛋白質、一份碳水。比例對了，選什麼澱粉影響不大。
            </p>
            <p>
              觀察身體變化（精神、體態、心情）比計算更重要。想了解更多，可以看
              <Link
                href="/articles/eat-less-move-more-myth"
                className="text-brand underline decoration-brand/35 hover:decoration-brand"
              >
                「少吃多動」這四個字，害了多少人？
              </Link>
            </p>
          </div>

          {/* 收尾 CTA */}
          <div className="text-center py-8 border-t border-edge">
            <p className="text-subtle mb-4">
              熱量只是數字，
              <strong className="text-ink">代謝類型才是關鍵</strong>。
            </p>
            <a
              href="/quiz"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand rounded-full shadow-lg hover:shadow-xl transition-shadow"
              onClick={() =>
                track("click_quiz_cta", { source: "tdee_bottom" })
              }
            >
              測出你的代謝類型，找到適合你的方法 →
            </a>
          </div>
        </div>
      </div>

      <StickyLineCTA />
    </section>
  );
}
