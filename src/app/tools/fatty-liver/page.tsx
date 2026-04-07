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
  return "fl_" + Math.random().toString(36).slice(2, 10);
}

// ─── 題目資料 ───

interface Option {
  label: string;
  sub?: string;
  score: number;
}

interface Question {
  id: number;
  text: string;
  options: Option[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "你多常喝含糖飲料？（手搖飲、果汁、奶茶、汽水都算）",
    options: [
      { label: "每天至少一杯", score: 3 },
      { label: "一週 3-4 次", score: 2 },
      { label: "偶爾", sub: "一週不到 1 次", score: 1 },
      { label: "幾乎不喝", sub: "喝水、無糖茶為主", score: 0 },
    ],
  },
  {
    id: 2,
    text: "你的腰圍大概是多少？",
    options: [
      {
        label: "明顯超標",
        sub: "男 > 90cm、女 > 80cm",
        score: 3,
      },
      { label: "接近標準線", sub: "差不多在邊緣", score: 2 },
      { label: "低於標準", sub: "腰圍在安全範圍", score: 0 },
      { label: "不確定", sub: "沒量過", score: 1 },
    ],
  },
  {
    id: 3,
    text: "最近一次健檢，有沒有這些紅字？",
    options: [
      { label: "脂肪肝 + 三酸甘油脂偏高", sub: "兩個都有", score: 3 },
      { label: "其中一個有", sub: "脂肪肝或三酸甘油脂偏高", score: 2 },
      { label: "都正常", score: 0 },
      { label: "沒做過健檢", sub: "或超過一年沒做", score: 1 },
    ],
  },
  {
    id: 4,
    text: "你平常吃的東西偏哪一種？",
    options: [
      {
        label: "外食為主",
        sub: "麵包、便當、炸物、加工食品",
        score: 2,
      },
      { label: "混合", sub: "有時自煮，有時外食", score: 1 },
      {
        label: "原型食物為主",
        sub: "自己煮，少加工",
        score: 0,
      },
    ],
  },
  {
    id: 5,
    text: "下午三四點的時候，你通常？",
    options: [
      { label: "一定要來杯飲料或甜食", sub: "不吃就撐不下去", score: 2 },
      { label: "有點想但忍得住", score: 1 },
      { label: "不太會特別想吃", score: 0 },
    ],
  },
  {
    id: 6,
    text: "晚上回到家，你通常？",
    options: [
      { label: "常常忍不住吃宵夜或狂吃", sub: "冰箱一定要開", score: 2 },
      { label: "偶爾會多吃一點", score: 1 },
      { label: "正常吃完就不會想吃", score: 0 },
    ],
  },
];

// ─── 結果分級 ───

type RiskLevel = "low" | "moderate" | "high";

function getRiskLevel(score: number): RiskLevel {
  if (score <= 4) return "low";
  if (score <= 9) return "moderate";
  return "high";
}

const RISK_CONFIG: Record<
  RiskLevel,
  {
    label: string;
    color: string;
    bg: string;
    headline: string;
  }
> = {
  low: {
    label: "低風險",
    color: "#2a9d6f",
    bg: "#f3f9f5",
    headline: "你的肝目前還不錯",
  },
  moderate: {
    label: "中等風險",
    color: "#d97706",
    bg: "#fffbeb",
    headline: "你的肝可能正在加班",
  },
  high: {
    label: "高風險",
    color: "#dc2626",
    bg: "#fef2f2",
    headline: "你的肝需要你的注意了",
  },
};

// ─── The Gap：根據回答動態產生 open loop ───

interface GapLine {
  trigger: string;
  text: string;
}

// 每題高分選項對應的「打臉」文案
const GAP_LINES: Record<number, GapLine[]> = {
  0: [
    // Q1 含糖飲料
    {
      trigger: "每天至少一杯",
      text: "你每天下午那杯飲料，走進身體之後的路跟酒精幾乎一樣——全部直接塞給肝臟處理。",
    },
    {
      trigger: "一週 3-4 次",
      text: "一週 3-4 杯手搖飲，聽起來不多？但每一杯裡的高果糖糖漿都直接塞給肝臟處理，速度是一般糖的 5 到 10 倍。",
    },
  ],
  1: [
    // Q2 腰圍
    {
      trigger: "明顯超標",
      text: "腰圍超標代表內臟脂肪堆積——BMI 騙得了你，腰圍不會。",
    },
  ],
  2: [
    // Q3 健檢紅字
    {
      trigger: "脂肪肝 + 三酸甘油脂偏高",
      text: "你已經有健檢紅字了，但醫生可能只說了「少吃油」。問題是——如果少吃油就能解決，為什麼油炸戒了、宵夜戒了，脂肪肝還是年年都在？",
    },
    {
      trigger: "其中一個有",
      text: "你有一項健檢紅字。但很多人拿到報告只想到「少吃油」——其實真正養出脂肪肝的，很多時候不是油，是糖。",
    },
  ],
  4: [
    // Q5 下午想吃甜食
    {
      trigger: "一定要來杯飲料或甜食",
      text: "下午一定要來杯飲料？這不是嘴饞，是血糖在控制你——你中午吃的東西讓血糖掉了，大腦在跟你要糖。",
    },
  ],
  5: [
    // Q6 晚上暴食
    {
      trigger: "常常忍不住吃宵夜或狂吃",
      text: "晚上忍不住開冰箱？不是意志力差——你白天吃的蛋白質和纖維不夠，身體一整天沒拿到它需要的東西，到晚上就爆發了。",
    },
  ],
};

function buildTheGap(
  currentAnswers: (number | null)[],
  riskLevel: RiskLevel
): { lines: string[]; summary: string } {
  const lines: string[] = [];

  // 找出所有命中的 gap lines
  for (const [qIdxStr, gapLines] of Object.entries(GAP_LINES)) {
    const qIdx = parseInt(qIdxStr);
    const optIdx = currentAnswers[qIdx];
    if (optIdx === null) continue;
    const selectedLabel = QUESTIONS[qIdx].options[optIdx].label;
    for (const gl of gapLines) {
      if (selectedLabel === gl.trigger) {
        lines.push(gl.text);
      }
    }
  }

  // 總結語（根據風險等級）
  const summaries: Record<RiskLevel, string> = {
    low: "你現在的習慣還不錯，但脂肪肝初期完全沒感覺——台灣每 2 個人就有 1 個有脂肪肝。知道怎麼保持，比不知不覺滑下去重要。",
    moderate:
      "這些習慣加在一起，你的肝每天都在加班。好消息是——這個階段調整效果最好，而且不用大改，先改一個最關鍵的就有感。",
    high: "這些習慣加在一起，你的肝已經扛很久了。但脂肪肝是可以改善的——不一定要瘦，改變吃法就有用。問題是，從哪裡開始改？",
  };

  return { lines, summary: summaries[riskLevel] };
}

// ─── 選項按鈕元件 ───

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

export default function FattyLiverPage() {
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(QUESTIONS.length).fill(null)
  );
  const [result, setResult] = useState<{
    score: number;
    maxScore: number;
    risk: RiskLevel;
  } | null>(null);
  const [claimCode, setClaimCode] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const track = (event: string, params?: Record<string, string>) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", event, params);
    }
  };

  const selectAnswer = (questionIndex: number, optionIndex: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[questionIndex] = optionIndex;
      return next;
    });
  };

  const allAnswered = answers.every((a) => a !== null);

  const handleCheck = () => {
    const score = answers.reduce<number>((sum, optIdx, qIdx) => {
      if (optIdx === null) return sum;
      return sum + QUESTIONS[qIdx].options[optIdx].score;
    }, 0);
    const maxScore = QUESTIONS.reduce(
      (sum, q) => sum + Math.max(...q.options.map((o) => o.score)),
      0
    );
    const risk = getRiskLevel(score);
    setResult({ score, maxScore, risk });

    track("fatty_liver_complete", { risk, score: String(score) });

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

    // 把每題的選擇存下來（label + score）
    const answerDetails = answers.map((optIdx, qIdx) => ({
      question: QUESTIONS[qIdx].text,
      answer: optIdx !== null ? QUESTIONS[qIdx].options[optIdx].label : null,
      score: optIdx !== null ? QUESTIONS[qIdx].options[optIdx].score : 0,
    }));

    const payload = {
      id: sessionId,
      score: result.score,
      max_score: result.maxScore,
      risk_level: result.risk,
      answers: answerDetails,
      claim_code: code,
    };

    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/fatty_liver_sessions`, {
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
        track("fatty_liver_claim_generated", {
          risk: result.risk,
          score: String(result.score),
        });
      } else {
        // 代碼衝突重試
        const code2 = generateClaimCode();
        const res2 = await fetch(
          `${SUPABASE_URL}/rest/v1/fatty_liver_sessions`,
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
          track("fatty_liver_claim_generated", {
            risk: result.risk,
            score: String(result.score),
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
  const theGap = result ? buildTheGap(answers, result.risk) : null;

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
          <Link
            href="/tools/insulin-check"
            className="px-3 py-1.5 rounded-full text-sm font-medium border border-edge text-subtle hover:border-brand hover:text-brand transition-colors"
          >
            胰島素阻抗自評
          </Link>
          <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-brand text-white">
            脂肪肝風險
          </span>
        </div>

        <p className="text-sm font-semibold text-brand mb-4 tracking-wide">
          免費工具
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight mb-3">
          脂肪肝風險自我檢測 — 你的肝在加班嗎？
        </h1>
        <p className="text-subtle mb-4">
          6 個生活習慣問題，2 分鐘評估你的脂肪肝風險。
        </p>

        {/* 免責聲明 */}
        <div className="rounded-xl bg-[#fffbeb] border border-[#fde68a] px-4 py-3 mb-8">
          <p className="text-sm text-[#92400e]">
            這不是醫療檢查，是幫你觀察生活習慣對肝臟的影響。如果你已經有健檢紅字，建議搭配醫師追蹤。
          </p>
        </div>

        {/* ─── 問題區 ─── */}
        <div className="rounded-2xl border border-edge bg-white p-6 space-y-8">
          {QUESTIONS.map((q, qIdx) => (
            <div key={q.id}>
              <label className="block text-sm font-bold mb-3">
                <span className="text-brand mr-2">Q{q.id}</span>
                {q.text}
              </label>
              <div className="space-y-2">
                {q.options.map((opt, oIdx) => (
                  <OptionButton
                    key={oIdx}
                    selected={answers[qIdx] === oIdx}
                    onClick={() => selectAnswer(qIdx, oIdx)}
                    label={opt.label}
                    sub={opt.sub}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* 進度提示 */}
          <div className="text-center text-sm text-muted">
            已回答 {answers.filter((a) => a !== null).length} /{" "}
            {QUESTIONS.length} 題
          </div>

          {/* 查看結果 */}
          <button
            onClick={handleCheck}
            disabled={!allAnswered}
            className="w-full py-4 bg-brand text-white font-bold rounded-xl hover:shadow-md transition-shadow text-base disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {allAnswered ? "查看結果" : "請回答所有問題"}
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
                  <p className="text-xs text-muted mb-1">風險分數</p>
                  <p className="text-3xl font-bold text-ink">
                    {result.score}
                    <span className="text-lg font-normal text-muted">
                      {" "}
                      / {result.maxScore}
                    </span>
                  </p>
                </div>
                <div
                  className="text-center p-5 rounded-xl"
                  style={{ backgroundColor: config.bg }}
                >
                  <p className="text-xs text-muted mb-1">風險評估</p>
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

            {/* The Gap：用她的回答打臉 */}
            {theGap && (
              <div className="p-5 rounded-xl bg-[#fef9f3] border border-[#f0e6d8] space-y-3">
                <p className="text-[15px] font-semibold text-ink">
                  但你知道嗎？
                </p>
                {theGap.lines.map((line, i) => (
                  <p
                    key={i}
                    className="text-[15px] text-subtle leading-relaxed"
                  >
                    {line}
                  </p>
                ))}
                <p className="text-[15px] text-ink font-medium leading-relaxed pt-1">
                  {theGap.summary}
                </p>
              </div>
            )}

            {/* 領取按鈕 or LINE 領取區 */}
            {!claimCode ? (
              <div className="rounded-2xl border-2 border-brand bg-gradient-to-b from-surface-green to-white p-6 text-center shadow-md">
                <p className="text-xs font-bold text-brand tracking-widest mb-3">
                  免費領取
                </p>
                <p className="text-lg text-ink font-bold mb-2">
                  你的個人化護肝飲食建議
                </p>
                <p className="text-sm text-subtle mb-5">
                  根據你的回答，我幫你整理了
                  <strong className="text-ink">
                    最該優先調整的那一件事
                  </strong>
                </p>

                <div className="bg-surface-green rounded-xl p-4 mb-5 text-left">
                  <p className="text-xs text-brand font-semibold mb-2">
                    你會拿到：
                  </p>
                  <ul className="space-y-1.5 text-sm text-ink">
                    <li>✅ 根據你的回答，找出讓肝臟加班的主因</li>
                    <li>✅ 最該優先調整的那一件事（不用全改，先改一個）</li>
                    <li>✅ 具體的飲食替換建議</li>
                  </ul>
                </div>

                <button
                  onClick={handleGetReport}
                  disabled={isSaving}
                  className="w-full py-4 bg-brand text-white font-bold rounded-xl hover:shadow-md transition-shadow text-base disabled:opacity-50"
                >
                  {isSaving ? "產生中..." : "幫我找出最該改的那件事 →"}
                </button>
              </div>
            ) : (
              <div
                id="claim-section"
                className="rounded-2xl border-2 border-line-green bg-white p-6 text-center scroll-mt-20"
              >
                <p className="text-lg font-bold text-ink mb-2">
                  你的護肝飲食建議已產生！
                </p>
                <p className="text-sm text-subtle mb-5">
                  加入一休的 LINE，一鍵領取你的個人化報告
                </p>

                <div className="bg-surface-green rounded-xl p-4 mb-5 text-left">
                  <ul className="space-y-1.5 text-sm text-ink">
                    <li>✅ 根據你的回答，找出讓肝臟加班的主因</li>
                    <li>✅ 給你最該優先調整的那一件事</li>
                    <li>✅ 附上具體的飲食替換建議</li>
                  </ul>
                </div>

                <a
                  href={`https://line.me/R/oaMessage/%40sososo/?${encodeURIComponent(claimCode)}`}
                  className="inline-flex items-center justify-center w-full py-4 bg-line-green text-white font-bold rounded-xl hover:shadow-lg transition-shadow text-base gap-2"
                  onClick={() =>
                    track("click_line_fatty_liver", {
                      code: claimCode,
                      risk: result.risk,
                    })
                  }
                >
                  一鍵開啟 LINE 領取 →
                </a>

                <p className="text-xs text-muted mt-3 leading-relaxed">
                  點擊後會開啟 LINE，聊天框會自動帶入你的專屬代碼
                  <br />
                  按「送出」就能領取你的護肝飲食建議
                </p>
              </div>
            )}

            {/* 測驗 CTA（次級） */}
            {claimCode && (
              <div className="rounded-2xl border border-edge bg-white p-6 text-center">
                <p className="text-xs text-muted mb-2">想更深入了解自己？</p>
                <p className="text-[15px] text-ink font-semibold leading-relaxed mb-4">
                  脂肪肝的根源不在肝，在代謝。先搞清楚你的代謝狀態。
                </p>
                <a
                  href="/quiz"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border-2 border-brand text-brand hover:bg-brand hover:text-white transition-colors"
                  onClick={() =>
                    track("click_quiz_cta", { source: "fatty_liver" })
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
          <h2 className="text-xl font-bold">
            為什麼脂肪肝跟喝飲料有關？
          </h2>
          <div className="space-y-4 text-[15px] text-subtle leading-relaxed">
            <p>
              大多數人以為脂肪肝是「吃太油」造成的。但真正養出脂肪肝的，很多時候不是你盤子裡的油——
              <strong className="text-ink">是你手上那杯飲料</strong>。
            </p>
            <p>
              手搖飲裡的高果糖糖漿，走進你身體之後的路
              <strong className="text-ink">跟酒精幾乎一模一樣</strong>
              。一般的糖進到身體，全身的細胞會分著幫忙處理。但高果糖糖漿不是——它全部直接塞給肝臟，一個人扛。
            </p>
            <p>
              速度是一般糖的 5 到 10 倍，快到肝臟來不及消化，多出來的直接變成脂肪，裹在你的肝上面。
            </p>
          </div>

          <h2 className="text-xl font-bold">
            體重正常也會有脂肪肝嗎？
          </h2>
          <div className="space-y-4 text-[15px] text-subtle leading-relaxed">
            <p>
              <strong className="text-ink">會。</strong>
              台灣每 2 個人就有 1 個有脂肪肝，而且很多體重正常的人也有。
            </p>
            <p>
              研究發現，一群體重正常的年輕人連續 5 天吃高糖食物，體重沒變，但肝臟脂肪多了 64%。
              <strong className="text-ink">
                體重計量不到，但肝臟已經在裹油了。
              </strong>
            </p>
            <p>
              這就是為什麼腰圍比體重更重要。BMI 正常不代表內臟脂肪正常，量一下腰圍——男生超過 90 公分、女生超過 80 公分，脂肪肝風險就在那裡。
            </p>
          </div>

          <h2 className="text-xl font-bold">
            脂肪肝可以改善嗎？
          </h2>
          <div className="space-y-4 text-[15px] text-subtle leading-relaxed">
            <p>
              <strong className="text-ink">可以。</strong>
              而且不一定要瘦下來。
            </p>
            <p>
              關鍵不是少吃油，是改變你吃進去的東西。把含糖飲料換掉、讓蛋白質吃夠、減少精緻澱粉——你的肝就能從加班狀態慢慢恢復。
            </p>
            <p>
              很多學員在調整飲食之後，體重沒什麼太大變化，但再去照超音波的時候，脂肪肝改善了。不是因為瘦了，是因為
              <strong className="text-ink">吃對了</strong>。
            </p>
          </div>

          {/* 收尾 CTA */}
          <div className="text-center py-8 border-t border-edge">
            <p className="text-subtle mb-4">
              脂肪肝是結果，飲食是原因。
              <strong className="text-ink">
                了解你的代謝狀態，才知道怎麼調整。
              </strong>
            </p>
            <a
              href="/quiz"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand rounded-full shadow-lg hover:shadow-xl transition-shadow"
              onClick={() =>
                track("click_quiz_cta", { source: "fatty_liver_bottom" })
              }
            >
              測出你的代謝類型，找到適合你的吃法 →
            </a>
          </div>
        </div>

        {/* 底部免責聲明 */}
        <div className="mt-12 rounded-xl bg-surface border border-edge px-5 py-4">
          <p className="text-sm text-muted leading-relaxed">
            本檢測僅供生活習慣自我評估，不能取代醫療診斷。如果你已有脂肪肝或健檢紅字，建議搭配醫師追蹤。
          </p>
        </div>
      </div>

      <StickyLineCTA />
    </section>
  );
}
