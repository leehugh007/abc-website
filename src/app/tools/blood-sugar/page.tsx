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
  return "bs_" + Math.random().toString(36).slice(2, 10);
}

// ─── 症狀資料 ───

const SYMPTOMS = [
  "吃飽之後很容易想睡覺",
  "下午特別容易想喝手搖飲或吃甜食",
  "肚子（腰部）的肉特別多，四肢相對瘦",
  "怎麼少吃都瘦不下來",
  "經常覺得疲倦、沒精神",
  "空腹血糖正常，但飯後容易覺得很餓",
  "健檢報告的三酸甘油脂偏高",
  "脖子或腋下有暗沉洗不掉",
  "血壓偏高，或正在吃血壓藥",
  "女性：月經不規律或有多囊卵巢",
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
  { label: string; color: string; bg: string; headline: string }
> = {
  low: {
    label: "穩定",
    color: "#2a9d6f",
    bg: "#f3f9f5",
    headline: "你的血糖目前看起來還算穩定",
  },
  moderate: {
    label: "有波動",
    color: "#d97706",
    bg: "#fffbeb",
    headline: "你的血糖可能已經開始不穩了",
  },
  high: {
    label: "明顯不穩",
    color: "#dc2626",
    bg: "#fef2f2",
    headline: "你的血糖波動已經在影響你的日常了",
  },
  "very-high": {
    label: "需要注意",
    color: "#991b1b",
    bg: "#fef2f2",
    headline: "你的身體正在發出很多警訊",
  },
};

// ─── 飲料/午餐常數 ───

const DRINK_OPTIONS = [
  { value: "sugar-tea", label: "手搖飲", sub: "大杯微糖 / 全糖" },
  { value: "juice", label: "果汁 / 優酪乳" },
  { value: "sugar-coffee", label: "咖啡加糖", sub: "拿鐵、三合一" },
  { value: "water", label: "水 / 無糖茶為主" },
];

const LUNCH_OPTIONS = [
  { value: "bento", label: "便當 / 自助餐" },
  { value: "noodle", label: "麵食 / 水餃 / 小吃" },
  { value: "homemade", label: "自己帶便當" },
  { value: "skip", label: "隨便吃 / 常跳過" },
];

const DRINK_LABELS: Record<string, string> = {
  "sugar-tea": "手搖飲",
  juice: "果汁/優酪乳",
  "sugar-coffee": "加糖咖啡",
  water: "水/無糖茶",
};

// ─── 主元件 ───

export default function BloodSugarPage() {
  const [checked, setChecked] = useState<boolean[]>(
    new Array(SYMPTOMS.length).fill(false)
  );
  const [result, setResult] = useState<{
    count: number;
    risk: RiskLevel;
    symptoms: string[];
  } | null>(null);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [drinkHabit, setDrinkHabit] = useState("");
  const [lunchHabit, setLunchHabit] = useState("");
  const [claimCode, setClaimCode] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

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
    const selectedSymptoms = SYMPTOMS.filter((_, i) => checked[i]);
    setResult({ count, risk, symptoms: selectedSymptoms });

    track("blood_sugar_complete", { risk, count: String(count) });

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
      symptom_count: result.count,
      symptoms: result.symptoms,
      risk_level: result.risk,
      drink_habit: drinkHabit,
      lunch_habit: lunchHabit,
      claim_code: code,
    };

    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/blood_sugar_sessions`, {
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
        track("blood_sugar_claim_generated", {
          risk: result.risk,
          count: String(result.count),
        });
      } else {
        const code2 = generateClaimCode();
        const res2 = await fetch(
          `${SUPABASE_URL}/rest/v1/blood_sugar_sessions`,
          {
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
          }
        );
        if (res2.ok) {
          setClaimCode(code2);
          track("blood_sugar_claim_generated", {
            risk: result.risk,
            count: String(result.count),
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

  const config = result ? RISK_CONFIG[result.risk] : null;

  // 找出她勾的前 2 個最有打臉力的症狀
  const topSymptoms = result?.symptoms.slice(0, 2) || [];

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
            href="/tools/waist-hip"
            className="px-3 py-1.5 rounded-full text-sm font-medium border border-edge text-subtle hover:border-brand hover:text-brand transition-colors"
          >
            腰臀比
          </Link>
          <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-brand text-white">
            血糖穩定度
          </span>
          <Link
            href="/tools/fatty-liver"
            className="px-3 py-1.5 rounded-full text-sm font-medium border border-edge text-subtle hover:border-brand hover:text-brand transition-colors"
          >
            脂肪肝風險
          </Link>
          <Link
            href="/tools/sugar"
            className="px-3 py-1.5 rounded-full text-sm font-medium border border-edge text-subtle hover:border-brand hover:text-brand transition-colors"
          >
            每日糖攝取
          </Link>
        </div>

        <p className="text-sm font-semibold text-brand mb-4 tracking-wide">
          免費工具
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight mb-3">
          吃飽就想睡？測測你的血糖穩定度
        </h1>
        <p className="text-subtle mb-4">
          10 個日常症狀勾選，2 分鐘看看你的血糖穩不穩。不需要抽血。
        </p>

        {/* 免責聲明 */}
        <div className="rounded-xl bg-[#fffbeb] border border-[#fde68a] px-4 py-3 mb-8">
          <p className="text-sm text-[#92400e]">
            這不是醫療檢查，是幫你觀察日常症狀跟血糖的關聯。如果你有多個症狀，建議搭配醫師追蹤。
          </p>
        </div>

        {/* ─── 症狀勾選 ─── */}
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
                    <span className="text-muted mr-2">{i + 1}.</span>
                    {symptom}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="text-center text-sm text-muted">
            已勾選 {checked.filter(Boolean).length} / {SYMPTOMS.length} 項
          </div>

          <button
            onClick={handleCheck}
            className="w-full py-4 bg-brand text-white font-bold rounded-xl hover:shadow-md transition-shadow text-base"
          >
            查看結果
          </button>
        </div>

        {/* ─── 結果區 ─── */}
        {result && config && (
          <div id="calc-result" className="mt-8 space-y-6 scroll-mt-20">
            {/* 分數 + 風險等級 */}
            <div className="rounded-2xl border border-edge bg-white p-6">
              <p className="text-sm text-muted mb-4">你的檢測結果</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-5 rounded-xl bg-surface">
                  <p className="text-xs text-muted mb-1">符合症狀</p>
                  <p className="text-3xl font-bold text-ink">
                    {result.count}
                    <span className="text-lg font-normal text-muted">
                      {" "}
                      / 10
                    </span>
                  </p>
                </div>
                <div
                  className="text-center p-5 rounded-xl"
                  style={{ backgroundColor: config.bg }}
                >
                  <p className="text-xs text-muted mb-1">血糖穩定度</p>
                  <p
                    className="text-2xl font-bold"
                    style={{ color: config.color }}
                  >
                    {config.label}
                  </p>
                </div>
              </div>
              <p className="text-center text-sm font-semibold text-ink">
                {config.headline}
              </p>
            </div>

            {/* The Gap */}
            {result.count >= 1 && (
              <div className="p-5 rounded-xl bg-[#fef9f3] border border-[#f0e6d8] space-y-3">
                <p className="text-[15px] font-semibold text-ink">
                  但你知道嗎？
                </p>
                <p className="text-[15px] text-subtle leading-relaxed">
                  你勾的這些症狀——{topSymptoms.map((s) => `「${s}」`).join("、")}
                  ——大部分人以為是個別問題，其實它們都指向同一件事。
                </p>
                <p className="text-[15px] text-subtle leading-relaxed">
                  你的血糖在餐後飆高、然後快速掉下來，身體就會用這些方式跟你求救。
                  不是你意志力差，是血糖在控制你。
                </p>
                <p className="text-[15px] text-ink font-medium leading-relaxed pt-1">
                  {result.risk === "low"
                    ? "你現在的狀態還不錯，但知道怎麼維持比不知不覺滑下去重要。"
                    : result.risk === "moderate"
                      ? "好消息是，血糖波動是可以調整的。不用吃藥，調整吃法就有用。問題是——從哪裡開始？"
                      : "你的身體已經在發出警訊了。但血糖問題是可逆的——調整吃法，這些症狀會一個一個消失。"}
                </p>
              </div>
            )}

            {/* 毛玻璃預覽 + 進階問題入口 */}
            {!claimCode && (
              <div className="relative rounded-2xl border border-edge bg-white overflow-hidden">
                {/* 看得到的部分 */}
                <div className="p-6 pb-0">
                  <p className="text-sm font-bold text-brand mb-3">
                    💡 根據你的症狀：
                  </p>
                  <div className="space-y-2 text-[15px] text-ink">
                    {result.symptoms.includes("吃飽之後很容易想睡覺") && (
                      <p>
                        你吃飽就想睡——這代表你的餐後血糖飆太高了。身體用大量胰島素把血糖壓下來，血糖一掉你就想睡。
                      </p>
                    )}
                    {result.symptoms.includes(
                      "下午特別容易想喝手搖飲或吃甜食"
                    ) && (
                      <p>
                        你下午想喝飲料不是嘴饞——是中午吃的東西讓血糖先飆後掉，大腦在跟你要糖。
                      </p>
                    )}
                    {result.symptoms.includes("怎麼少吃都瘦不下來") && (
                      <p>
                        你怎麼少吃都瘦不下來——因為高胰島素會鎖住脂肪，不讓身體燃燒。不是你不夠努力，是身體被鎖住了。
                      </p>
                    )}
                    {topSymptoms.length > 0 &&
                      !result.symptoms.includes("吃飽之後很容易想睡覺") &&
                      !result.symptoms.includes(
                        "下午特別容易想喝手搖飲或吃甜食"
                      ) &&
                      !result.symptoms.includes("怎麼少吃都瘦不下來") && (
                        <p>
                          你的 {result.count} 個症狀都跟血糖波動有關——它們不是個別問題，是同一個根源的不同表現。
                        </p>
                      )}
                  </div>
                </div>

                {/* 模糊的部分：給足高度讓內容露出來 */}
                <div
                  className="px-6 pt-4 pb-32"
                  style={{
                    filter: "blur(4px)",
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                >
                  <div className="space-y-3 text-[15px] text-subtle">
                    <p>
                      你的 {result.count} 個症狀背後的共同原因是血糖波動太大。當你吃了精緻碳水，血糖快速飆高，身體用大量胰島素壓下來，然後血糖掉得太快——你就會想睡、想吃甜、沒精神。
                    </p>
                    <p>
                      穩定血糖最重要的一步：改變吃東西的順序。先吃菜和肉，最後吃飯。同樣的食物，換個順序，血糖波動就能減少三成。
                    </p>
                    <p>
                      根據你的飲食習慣，你最該先調整的是午餐的碳水比例。具體做法是把白飯減半，多加一份蛋白質...
                    </p>
                    <p>
                      下午想喝飲料的時候，先吃一把堅果或一顆水煮蛋，血糖穩住了就不會想喝了...
                    </p>
                  </div>
                </div>

                {/* Overlay CTA：只蓋下半部，讓上面的模糊內容露出來 */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/95 to-white/0 p-6 pt-12 flex flex-col items-center">
                  <p className="text-[15px] font-semibold text-ink mb-1">
                    你的血糖穩定報告已準備好
                  </p>
                  <p className="text-sm text-brand mb-3">
                    再回答 2 個問題，讓報告更準確 👇
                  </p>
                  {!showAdvanced && (
                    <button
                      onClick={() => {
                        setShowAdvanced(true);
                        track("blood_sugar_start_advanced");
                        setTimeout(() => {
                          document
                            .getElementById("advanced-questions")
                            ?.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
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

            {/* ─── Step 2: 飲食習慣問題 ─── */}
            {showAdvanced && !claimCode && (
              <div
                id="advanced-questions"
                className="rounded-2xl border border-edge bg-white p-6 space-y-7 scroll-mt-20"
              >
                <p className="text-sm font-bold text-brand">
                  回答 2 個問題，讓報告更準確
                </p>

                {/* Q1：飲料 */}
                <div>
                  <label className="block text-sm font-bold mb-2">
                    你平常喝什麼飲料？
                  </label>
                  <div className="space-y-2">
                    {DRINK_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setDrinkHabit(opt.value)}
                        className={`w-full text-left px-4 py-3 rounded-xl border transition-colors ${
                          drinkHabit === opt.value
                            ? "border-brand bg-surface-green"
                            : "border-edge hover:border-edge-dark"
                        }`}
                      >
                        <span className="text-sm font-medium">{opt.label}</span>
                        {opt.sub && (
                          <span className="text-xs text-muted ml-2">
                            {opt.sub}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Q2：午餐 */}
                <div>
                  <label className="block text-sm font-bold mb-2">
                    你中午通常吃什麼？
                  </label>
                  <div className="space-y-2">
                    {LUNCH_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setLunchHabit(opt.value)}
                        className={`w-full text-left px-4 py-3 rounded-xl border transition-colors ${
                          lunchHabit === opt.value
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
                  onClick={handleGetReport}
                  disabled={isSaving || !drinkHabit || !lunchHabit}
                  className="w-full py-4 bg-line-green text-white font-bold rounded-xl hover:shadow-md transition-shadow text-base disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {isSaving ? "分析中..." : "幫我找出血糖不穩的原因 →"}
                </button>
              </div>
            )}

            {/* ─── 個人化診斷預覽 + 模糊 + LINE 領取 ─── */}
            {claimCode && (
              <div id="claim-section" className="space-y-6 scroll-mt-20">
                <div className="relative rounded-2xl border border-edge bg-white overflow-hidden">
                  {/* 診斷預覽（清楚可見） */}
                  <div className="p-6 pb-0">
                    <p className="text-sm font-bold text-brand mb-3">
                      💡 根據你的飲食習慣：
                    </p>
                    <div className="space-y-2 text-[15px] text-ink">
                      {drinkHabit !== "water" && (
                        <p>
                          你平常喝「{DRINK_LABELS[drinkHabit]}」——
                          {drinkHabit === "sugar-tea"
                            ? "手搖飲讓你的血糖在 30 分鐘內飆到最高點，然後快速掉下來。你下午想睡、想吃甜，就是這杯飲料造成的。"
                            : drinkHabit === "juice"
                              ? "果汁沒有纖維減速，果糖直接衝進身體，血糖波動跟喝手搖飲差不多。"
                              : "加糖咖啡的糖讓血糖先飆後掉，你以為是提神，其實兩小時後更累。"}
                        </p>
                      )}
                      {lunchHabit !== "homemade" && (
                        <p>
                          你中午吃「
                          {lunchHabit === "bento"
                            ? "便當"
                            : lunchHabit === "noodle"
                              ? "麵食"
                              : "隨便吃"}
                          」——
                          {lunchHabit === "bento"
                            ? "便當裡的白飯佔了大半，蛋白質不夠，血糖吃完就飆。"
                            : lunchHabit === "noodle"
                              ? "麵食幾乎全是碳水，血糖吃完直接衝上去。"
                              : "跳過午餐讓血糖先掉，下午反彈更想吃糖。"}
                        </p>
                      )}
                      <p className="font-medium">
                        {drinkHabit !== "water" && lunchHabit !== "homemade"
                          ? "午餐讓血糖飆上去，飲料讓它再飆一次——你的血糖一天坐兩次雲霄飛車。"
                          : "調整吃法，血糖穩了，這些症狀會一個一個消失。"}
                      </p>
                    </div>
                  </div>

                  {/* 模糊的部分：只露一行半 */}
                  <div
                    className="px-6 pt-4 pb-44"
                    style={{
                      filter: "blur(4px)",
                      pointerEvents: "none",
                      userSelect: "none",
                    }}
                  >
                    <div className="space-y-3 text-[15px] text-subtle">
                      <p>
                        穩定血糖最重要的一步：改變吃東西的順序。先吃菜和肉，最後吃飯。同樣的食物，換個順序，血糖波動就能減少三成。你的午餐和飲料具體該怎麼換、下午想吃甜食的時候怎麼處理，完整建議在報告裡。
                      </p>
                    </div>
                  </div>

                  {/* Overlay CTA */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white from-60% to-white/0 p-6 pt-10 flex flex-col items-center">
                    <p className="text-[15px] font-semibold text-ink mb-1">
                      你的完整報告已準備好
                    </p>
                    <p className="text-sm text-brand mb-3">
                      在 LINE 領取個人化血糖穩定建議 👇
                    </p>
                    <a
                      href={`https://line.me/R/oaMessage/%40sososo/?${encodeURIComponent(claimCode)}`}
                      className="w-full max-w-sm py-4 bg-line-green text-white font-bold rounded-xl hover:shadow-lg transition-shadow text-base text-center block"
                      onClick={() =>
                        track("click_line_blood_sugar", {
                          code: claimCode,
                          risk: result.risk,
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
                            setTimeout(() => {
                              btn.textContent = claimCode + " 📋";
                            }, 1500);
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
                  血糖不穩的背後通常是代謝問題。先搞清楚你的代謝類型。
                </p>
                <a
                  href="/quiz"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border-2 border-brand text-brand hover:bg-brand hover:text-white transition-colors"
                  onClick={() =>
                    track("click_quiz_cta", { source: "blood_sugar" })
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
          <h2 className="text-xl font-bold">為什麼吃飽會想睡？</h2>
          <div className="space-y-4 text-[15px] text-subtle leading-relaxed">
            <p>
              吃飽想睡不是正常的。它代表你的
              <strong className="text-ink">餐後血糖飆太高了</strong>。
            </p>
            <p>
              你吃了精緻碳水（白飯、麵、麵包），血糖快速飆高。身體緊急分泌大量胰島素把血糖壓下來，結果血糖掉得太快——你就想睡了。
            </p>
            <p>
              如果你每餐吃完都想睡，代表你的血糖波動很大。長期下來，身體需要分泌越來越多胰島素才能壓住血糖——這就是
              <Link
                href="/concepts/insulin-resistance"
                className="text-brand underline decoration-brand/35 hover:decoration-brand"
              >
                胰島素阻抗
              </Link>
              的開始。
            </p>
          </div>

          <h2 className="text-xl font-bold">
            下午想喝飲料，跟血糖有什麼關係？
          </h2>
          <div className="space-y-4 text-[15px] text-subtle leading-relaxed">
            <p>
              你中午吃了一個便當，白飯佔了大半。血糖在 30 分鐘內飆到最高點，然後胰島素把它壓下來。
            </p>
            <p>
              到了下午三四點，血糖掉到谷底——你的大腦開始跟你要糖。
              <strong className="text-ink">
                那個想喝手搖飲的衝動不是嘴饞，是血糖在控制你。
              </strong>
            </p>
            <p>
              解決方法不是靠意志力忍住，是讓中午的血糖不要飆那麼高。怎麼做？
              <strong className="text-ink">改變吃的順序</strong>
              ——先吃菜和肉，最後吃飯。同樣的東西，換個順序，血糖波動就能減少三成。
            </p>
          </div>

          <h2 className="text-xl font-bold">血糖不穩可以改善嗎？</h2>
          <div className="space-y-4 text-[15px] text-subtle leading-relaxed">
            <p>
              <strong className="text-ink">可以。</strong>
              而且不需要吃藥。
            </p>
            <p>
              飲食調整是最有效的方式：減少精緻碳水、增加蛋白質和纖維、注意吃東西的順序。
              大部分人調整兩週就能感受到差異——下午不再想喝飲料、吃飽不想睡、精神變好。
            </p>
            <p>
              ABC 代謝重建瘦身法的核心就是在處理這件事——不是教你少吃，是教你怎麼吃、讓血糖穩定、讓代謝恢復正常運作。
            </p>
          </div>

          {/* 收尾 CTA */}
          <div className="text-center py-8 border-t border-edge">
            <p className="text-subtle mb-4">
              血糖不穩是症狀，
              <strong className="text-ink">代謝類型才是根源</strong>。
            </p>
            <a
              href="/quiz"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand rounded-full shadow-lg hover:shadow-xl transition-shadow"
              onClick={() =>
                track("click_quiz_cta", { source: "blood_sugar_bottom" })
              }
            >
              測出你的代謝類型，找到適合你的方法 →
            </a>
          </div>
        </div>

        {/* 底部免責聲明 */}
        <div className="mt-12 rounded-xl bg-surface border border-edge px-5 py-4">
          <p className="text-sm text-muted leading-relaxed">
            本檢測僅供生活習慣自我評估，不能取代醫療診斷。如果你有多個症狀，建議諮詢醫師並要求檢查空腹胰島素。
          </p>
        </div>
      </div>

      <StickyLineCTA />
    </section>
  );
}
