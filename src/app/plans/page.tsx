import type { Metadata } from "next";
import Link from "next/link";
import { StickyLineCTA } from "@/app/sticky-line-cta";

export const metadata: Metadata = {
  title: "方案介紹 — 你的代謝重建旅程",
  description:
    "搞清楚你的代謝問題，用吃的修回來。首月 NT$99 開始，30 天不滿意全額退費。",
};

export default function PlansPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-12 px-5">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold text-[#2a9d6f] mb-4 tracking-wide">
            ABC 代謝力重建
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight mb-6">
            搞清楚你的代謝問題
            <br />
            用吃的修回來
          </h1>
          <p className="text-lg text-[#6b6560] leading-relaxed max-w-lg mx-auto">
            阿算不是幫你算熱量的工具。
            <br className="hidden sm:block" />
            他是陪你從代謝失調走到穩定燃燒的夥伴。
          </p>
        </div>
      </section>

      {/* ── 阿算會幫你做什麼（場景描述，不是功能清單） ── */}
      <section className="pb-16 px-5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-8">
            加入後，你會經歷什麼
          </h2>
          <div className="space-y-4">
            {[
              {
                day: "第 0 天",
                title: "知道自己的代謝類型",
                desc: "原來你不是吃太多，是代謝出了問題。",
              },
              {
                day: "第 1 天",
                title: "看見早餐怎麼影響你的下午",
                desc: "原來那杯拿鐵加麵包，讓你下午三點想喝手搖。",
              },
              {
                day: "第 3 天",
                title: "感受到身體開始不一樣",
                desc: "蛋白質從 15g 拉到 25g，下午真的沒那麼餓了。",
              },
              {
                day: "第 7 天",
                title: "收到第一份週回顧",
                desc: "阿算幫你看見這一週的變化——你正在從雲霄飛車型往穩定燃燒型走。",
              },
              {
                day: "第 30 天",
                title: "回頭看，原來改變已經開始",
                desc: "不是靠意志力撐，是代謝開始幫你了。",
              },
            ].map((item) => (
              <div
                key={item.day}
                className="flex gap-4 p-4 rounded-xl border border-[#eee9e5] bg-white"
              >
                <div className="shrink-0 w-16 text-center">
                  <span className="text-xs font-bold text-[#2a9d6f] bg-[#f3f9f5] px-2 py-1 rounded-full">
                    {item.day}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-sm text-[#2a2520] mb-1">
                    {item.title}
                  </p>
                  <p className="text-sm text-[#6b6560] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 兩個方案 ── */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3">
            選擇你的開始方式
          </h2>
          <p className="text-center text-[#6b6560] mb-10">
            不管哪個方案，阿算都會在。差別是他能陪你走多深。
          </p>

          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {/* 免費版 */}
            <div className="rounded-2xl border border-[#eee9e5] p-6 flex flex-col">
              <div>
                <p className="text-sm text-[#a8a29e] font-medium mb-2">
                  免費版
                </p>
                <div className="mb-4">
                  <span className="text-3xl font-extrabold text-[#2a2520]">
                    $0
                  </span>
                </div>
                <p className="text-sm text-[#6b6560] mb-6 leading-relaxed">
                  想先認識阿算，從這裡開始。
                  <br />
                  沒有壓力，隨時可以用。
                </p>
                <ul className="space-y-3 text-sm text-[#6b6560]">
                  {[
                    "每天 2 次拍餐分析",
                    "基本營養建議",
                    "代謝類型結果保留",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="text-[#a8a29e] shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto pt-8">
                <a
                  href="https://lin.ee/x41s2Su"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 rounded-full border border-[#eee9e5] text-sm font-semibold text-[#6b6560] hover:bg-[#f8faf7] transition-colors"
                >
                  加入 LINE 開始
                </a>
              </div>
            </div>

            {/* 完整版 — 推薦 */}
            <div className="rounded-2xl border-2 border-[#2a9d6f] p-6 flex flex-col relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="text-xs font-bold text-white bg-[#2a9d6f] px-4 py-1 rounded-full">
                  推薦
                </span>
              </div>
              <div>
                <p className="text-sm text-[#2a9d6f] font-semibold mb-2">
                  阿算完整版
                </p>
                <div className="mb-1">
                  <span className="text-3xl font-extrabold text-[#2a2520]">
                    $699
                  </span>
                  <span className="text-sm text-[#6b6560] ml-1">/月</span>
                </div>
                <p className="text-sm font-semibold text-[#2a9d6f] mb-4">
                  首月 $99 體驗
                </p>
                <p className="text-sm text-[#6b6560] mb-6 leading-relaxed">
                  阿算記住你、陪你走、幫你看見改變。
                  <br />
                  30 天不滿意，全額退費。
                </p>
                <ul className="space-y-3 text-sm text-[#6b6560]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#2a9d6f] shrink-0 mt-0.5">✓</span>
                    <span>
                      <strong className="text-[#2a2520]">無限次</strong>
                      拍餐分析
                    </span>
                  </li>
                  {[
                    "個人化飲食建議",
                    "每週回顧報告",
                    "目標設定與追蹤",
                    "里程碑回顧",
                    "阿算記住你的飲食偏好",
                    "線上運動課",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="text-[#2a9d6f] shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto pt-8">
                <a
                  href="https://lin.ee/x41s2Su"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 rounded-full bg-[#2a9d6f] text-sm font-bold text-white hover:shadow-md transition-shadow"
                >
                  $99 開始代謝重建 →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 阿算的房租 ── */}
      <section className="py-16 px-5 bg-[#1a5e3f] text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">
            為什麼是這個價格
          </h2>
          <p className="text-center text-white/70 text-sm mb-10">
            我們想讓你知道，阿算的品質是有成本的
          </p>

          <div className="grid grid-cols-2 gap-3 mb-10">
            {[
              { icon: "🧠", label: "記住你的飲食歷史", desc: "每一餐都不會忘" },
              { icon: "📊", label: "每天分析你的餐食", desc: "不是套公式，是看你的狀況" },
              { icon: "📝", label: "每週為你寫回顧", desc: "你的進步，阿算幫你整理" },
              { icon: "🎯", label: "持續調整你的方向", desc: "隨著你的改變，建議也跟著變" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl bg-white/10 p-4"
              >
                <p className="text-lg mb-1">{item.icon}</p>
                <p className="text-sm font-semibold text-white mb-1">
                  {item.label}
                </p>
                <p className="text-xs text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-white/90 leading-relaxed mb-6">
              $699/月 = 阿算一個月的生活費。
              <br />
              你的支持讓他住得好、學得多，才能繼續好好陪你。
            </p>
            <p className="text-sm text-white/60">
              首月只要 $99——不到一杯星巴克的錢，就能完整體驗一個月。
              <br />
              30 天內不滿意，全額退費，不問原因。
            </p>
          </div>
        </div>
      </section>

      {/* ── 心理帳戶轉移 ── */}
      <section className="py-16 px-5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">你每個月花在這些上面的錢</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { label: "手搖飲", amount: "$600-1,000" },
              { label: "保健食品", amount: "$500-1,000" },
              { label: "健身房", amount: "$800-1,500" },
              {
                label: "阿算首月",
                amount: "$99",
                highlight: true,
                sub: "之後 $699/月",
              },
            ].map((item) => (
              <div
                key={item.label}
                className={`rounded-xl p-4 ${
                  "highlight" in item && item.highlight
                    ? "bg-[#f3f9f5] border-2 border-[#2a9d6f]"
                    : "bg-white border border-[#eee9e5]"
                }`}
              >
                <p className="text-xs text-[#a8a29e] mb-1">{item.label}</p>
                <p
                  className={`font-bold text-sm ${
                    "highlight" in item && item.highlight
                      ? "text-[#2a9d6f]"
                      : "text-[#2a2520]"
                  }`}
                >
                  {item.amount}
                </p>
                {"sub" in item && (
                  <p className="text-xs text-[#a8a29e] mt-0.5">{item.sub}</p>
                )}
              </div>
            ))}
          </div>
          <p className="text-[#6b6560] leading-relaxed">
            你不是在多花錢，是把本來花在不確定的地方的錢，
            <br className="hidden sm:block" />
            換到一個真的會幫你改變的地方。
          </p>
        </div>
      </section>

      {/* ── 30 天退費保證 ── */}
      <section className="py-12 px-5">
        <div className="max-w-xl mx-auto">
          <div className="rounded-2xl border border-[#2a9d6f]/20 bg-[#f3f9f5] p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛡</span>
            </div>
            <h3 className="text-lg font-bold mb-2">30 天不滿意，全額退費</h3>
            <p className="text-sm text-[#6b6560] leading-relaxed">
              你只需要試 30 天。如果覺得阿算不適合你，
              <br className="hidden sm:block" />
              跟阿算說一聲就好，我們全額退費，不問原因。
            </p>
          </div>
        </div>
      </section>

      {/* ── 12 週課程入口 ── */}
      <section className="py-12 px-5 bg-white">
        <div className="max-w-xl mx-auto">
          <div className="rounded-2xl border border-[#eee9e5] p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-xs text-[#a8a29e] font-medium mb-1">
                  想要更深入？
                </p>
                <p className="font-bold text-[#2a2520] mb-1">
                  一休親帶 12 週課程
                </p>
                <p className="text-sm text-[#6b6560]">
                  包含阿算完整版 + 營養師每日看餐 + 直播課 + 班級制社群
                </p>
              </div>
              <Link
                href="/program"
                className="shrink-0 text-sm font-semibold text-[#2a9d6f] hover:underline"
              >
                了解課程 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 最終 CTA ── */}
      <section className="py-16 px-5">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">
            代謝重建，從今天開始
          </h2>
          <p className="text-[#6b6560] mb-8">
            先用免費版認識阿算，或者 $99 開始完整體驗。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://lin.ee/x41s2Su"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-[#2a9d6f] rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              $99 開始代謝重建 →
            </a>
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#6b6560] border border-[#eee9e5] rounded-full hover:bg-[#f8faf7] transition-colors"
            >
              先做代謝測驗
            </Link>
          </div>
          <p className="text-sm text-[#a8a29e] mt-8">
            我是一休，陪你健康的瘦一輩子
          </p>
        </div>
      </section>

      <StickyLineCTA />
    </>
  );
}
