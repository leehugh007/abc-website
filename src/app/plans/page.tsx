import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "方案介紹 — 找到適合你的方式",
  description:
    "免費版、阿算訂閱、12 週課程。不管你想走多快、走多深，阿算都在。每天不到 17 元，讓你的改變不中斷。",
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
            選擇適合你的方式
          </h1>
          <p className="text-lg text-[#6b6560] leading-relaxed max-w-lg mx-auto">
            阿算會一直在。差別只是你想走多快、走多深。
          </p>
        </div>
      </section>

      {/* ── 三個方案卡片 ── */}
      <section className="pb-16 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-5">

            {/* 免費版 */}
            <div className="rounded-2xl border border-[#eee9e5] p-6 bg-white flex flex-col">
              <div>
                <p className="text-sm text-[#a8a29e] font-medium mb-2">免費版</p>
                <div className="mb-4">
                  <span className="text-3xl font-extrabold text-[#2a2520]">$0</span>
                </div>
                <p className="text-sm text-[#6b6560] mb-6 leading-relaxed">
                  想試試看阿算能幫你什麼，從這裡開始。沒有壓力，隨時可以用。
                </p>
                <ul className="space-y-3 text-sm text-[#6b6560]">
                  {[
                    "每天 2 次拍餐分析",
                    "基本營養建議",
                    "代謝類型結果保留",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="text-[#a8a29e] shrink-0 mt-0.5">✓</span>
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
                  開始使用
                </a>
              </div>
            </div>

            {/* 阿算訂閱 — 推薦 */}
            <div className="rounded-2xl border-2 border-[#2a9d6f] p-6 bg-white flex flex-col relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="text-xs font-bold text-white bg-[#2a9d6f] px-4 py-1 rounded-full">
                  推薦
                </span>
              </div>
              <div>
                <p className="text-sm text-[#2a9d6f] font-semibold mb-2">阿算訂閱</p>
                <div className="mb-1">
                  <span className="text-3xl font-extrabold text-[#2a2520]">$499</span>
                  <span className="text-sm text-[#6b6560] ml-1">/月</span>
                </div>
                <p className="text-xs text-[#a8a29e] mb-4">
                  季方案 $399/月（$1,197）
                </p>
                <p className="text-sm text-[#6b6560] mb-6 leading-relaxed">
                  阿算記住你、陪你走、幫你看見自己的進步。大部分人選這個。
                </p>
                <ul className="space-y-3 text-sm text-[#6b6560]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#2a9d6f] shrink-0 mt-0.5">✓</span>
                    <span><strong className="text-[#2a2520]">無限次</strong>拍餐分析</span>
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
                      <span className="text-[#2a9d6f] shrink-0 mt-0.5">✓</span>
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
                  開始訂閱 →
                </a>
              </div>
            </div>

            {/* 12 週課程 */}
            <div className="rounded-2xl border border-[#eee9e5] p-6 bg-white flex flex-col">
              <div>
                <p className="text-sm text-[#6b6560] font-medium mb-2">12 週課程</p>
                <div className="mb-1">
                  <span className="text-3xl font-extrabold text-[#2a2520]">$4,980</span>
                  <span className="text-sm text-[#6b6560] ml-1">/月</span>
                </div>
                <p className="text-xs text-[#a8a29e] mb-4">
                  一次繳清 $11,400
                </p>
                <p className="text-sm text-[#6b6560] mb-6 leading-relaxed">
                  一休親自帶你走完完整系統。想徹底改變，選這個。
                </p>
                <ul className="space-y-3 text-sm text-[#6b6560]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#2a9d6f] shrink-0 mt-0.5">✓</span>
                    <span><strong className="text-[#2a2520]">包含阿算訂閱所有功能</strong></span>
                  </li>
                  {[
                    "一休親授 12 堂直播課",
                    "24 堂錄播課程",
                    "營養師每日看餐",
                    "150+ 堂線上運動課",
                    "班級制社群 + 教練團隊",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="text-[#2a9d6f] shrink-0 mt-0.5">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto pt-8">
                <Link
                  href="/program"
                  className="block text-center py-3 rounded-full border border-[#eee9e5] text-sm font-semibold text-[#6b6560] hover:bg-[#f8faf7] transition-colors"
                >
                  了解課程詳情 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 功能比較表 ── */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
            功能比較
          </h2>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-[#eee9e5]">
                  <th className="text-left py-3 pr-4 font-semibold text-[#6b6560] w-[40%]" />
                  <th className="text-center py-3 px-3 font-semibold text-[#a8a29e] w-[20%]">免費版</th>
                  <th className="text-center py-3 px-3 font-bold text-[#2a9d6f] w-[20%]">
                    阿算訂閱
                  </th>
                  <th className="text-center py-3 px-3 font-semibold text-[#6b6560] w-[20%]">12 週課程</th>
                </tr>
              </thead>
              <tbody>
                {/* 阿算基本功能 */}
                <CategoryHeader label="阿算基本功能" />
                <Row name="拍餐分析" free="每天 2 次" sub="無限次" course="無限次" />
                <Row name="營養建議" free="基本" sub="個人化" course="個人化" />
                <Row name="代謝類型結果" free="✓" sub="✓" course="✓" />

                {/* 阿算陪伴功能 */}
                <CategoryHeader label="阿算陪伴功能" />
                <Row name="每週回顧報告" free="—" sub="✓" course="✓" />
                <Row name="目標設定與追蹤" free="—" sub="✓" course="✓" />
                <Row name="里程碑回顧" free="—" sub="✓" course="✓" />
                <Row name="記住飲食偏好" free="—" sub="✓" course="✓" />

                {/* 運動 */}
                <CategoryHeader label="運動" />
                <Row name="線上運動課" free="—" sub="✓" course="150+ 堂" />

                {/* 課程專屬 */}
                <CategoryHeader label="課程專屬" />
                <Row name="一休親授直播課" free="—" sub="—" course="12 堂" />
                <Row name="錄播課程" free="—" sub="—" course="24 堂" />
                <Row name="營養師每日看餐" free="—" sub="—" course="✓" />
                <Row name="班級制社群" free="—" sub="—" course="✓" />
                <Row name="教練團隊支持" free="—" sub="—" course="✓" />

                {/* 價格 */}
                <tr className="border-t-2 border-[#eee9e5]">
                  <td className="py-4 pr-4 font-bold text-[#2a2520]">月費</td>
                  <td className="py-4 px-3 text-center font-bold text-[#2a2520]">$0</td>
                  <td className="py-4 px-3 text-center font-bold text-[#2a9d6f]">$499</td>
                  <td className="py-4 px-3 text-center font-bold text-[#2a2520]">$4,980</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 12 週課程概覽 ── */}
      <section className="py-16 px-5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3">
            12 週課程包含什麼
          </h2>
          <p className="text-center text-[#6b6560] mb-10">
            不是給你一套菜單，是教你一套可以用一輩子的系統
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                num: "1",
                title: "一休親授課程",
                desc: "每週一堂直播課 + 24 堂錄播課，教你 ABC 代謝力公式的完整系統。花了十年學習整理成的科學方法。",
              },
              {
                num: "2",
                title: "營養師每日看餐",
                desc: "每天上傳飲食照片，國家高考合格營養師教你怎麼調整。外食也能瘦——有學員全外食瘦 12 公斤以上。",
              },
              {
                num: "3",
                title: "線上運動課",
                desc: "12 週超過 150 堂直播課：肌力、有氧、瑜珈、小腹、翹臀。每堂 30-60 分鐘，在家就能做。",
              },
              {
                num: "4",
                title: "團隊陪伴",
                desc: "班級制，一群人一起走。教練團隊 + 助教都是自己瘦過的學長姐。因為我們胖過，我們懂你。",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="rounded-xl border border-[#eee9e5] p-5 bg-white"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#f3f9f5] text-[#2a9d6f] text-xs font-bold flex items-center justify-center shrink-0">
                    {item.num}
                  </span>
                  <span className="font-bold text-sm">{item.title}</span>
                </div>
                <p className="text-sm text-[#6b6560] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/program"
              className="text-[#2a9d6f] font-semibold hover:underline text-sm"
            >
              看完整課程介紹 →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 心理帳戶轉移 ── */}
      <section className="py-16 px-5 bg-[#1a5e3f] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">每天不到 17 元</h2>
          <p className="text-white/80 leading-relaxed max-w-lg mx-auto mb-10">
            你可能每個月花在手搖飲、保健食品、健身房的錢加起來超過兩千。
            <br />
            更別提花在網路上找資訊——看了一堆 YouTube、文章、IG——最後什麼都沒改變的時間。
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { label: "手搖飲", amount: "$600-1,000/月" },
              { label: "保健食品", amount: "$500-1,000/月" },
              { label: "健身房", amount: "$800-1,500/月" },
              { label: "阿算", amount: "$499/月", highlight: true },
            ].map((item) => (
              <div
                key={item.label}
                className={`rounded-xl p-4 ${
                  item.highlight
                    ? "bg-white/20 border border-white/30"
                    : "bg-white/10"
                }`}
              >
                <p className="text-white/70 text-xs mb-1">{item.label}</p>
                <p
                  className={`font-bold text-sm ${
                    item.highlight ? "text-white" : "text-white/90"
                  }`}
                >
                  {item.amount}
                </p>
              </div>
            ))}
          </div>
          <p className="text-white/90 font-semibold text-lg leading-relaxed">
            你不是在多花錢，是用更有效率的方式
            <br className="sm:hidden" />
            花你本來就在花的錢和時間。
          </p>
        </div>
      </section>

      {/* ── 進階版預告 ── */}
      <section className="py-12 px-5">
        <div className="max-w-xl mx-auto text-center">
          <div className="rounded-2xl border border-dashed border-[#eee9e5] p-8 bg-white">
            <p className="font-bold mb-2">進階版即將推出</p>
            <p className="text-sm text-[#6b6560] leading-relaxed">
              阿算訂閱 + 營養師定期諮詢 + 一休每月直播。需要更多支持的你，敬請期待。
            </p>
          </div>
        </div>
      </section>

      {/* ── 最終 CTA ── */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">準備好了嗎？</h2>
          <p className="text-[#6b6560] mb-8">
            不管你選哪個方案，阿算都會在。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://lin.ee/x41s2Su"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-[#2a9d6f] rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              加入 LINE 開始 →
            </a>
            <a
              href="/quiz"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#6b6560] border border-[#eee9e5] rounded-full hover:bg-[#f8faf7] transition-colors"
            >
              先做代謝測驗
            </a>
          </div>
          <p className="text-sm text-[#a8a29e] mt-8">
            我是一休，陪你健康的瘦一輩子
          </p>
        </div>
      </section>
    </>
  );
}

/* ── 比較表輔助元件 ── */

function CategoryHeader({ label }: { label: string }) {
  return (
    <tr>
      <td
        colSpan={4}
        className="pt-6 pb-2 font-bold text-xs text-[#a8a29e] uppercase tracking-wider"
      >
        {label}
      </td>
    </tr>
  );
}

function Row({
  name,
  free,
  sub,
  course,
}: {
  name: string;
  free: string;
  sub: string;
  course: string;
}) {
  const renderCell = (value: string, isHighlight: boolean) => {
    if (value === "—")
      return <span className="text-[#a8a29e]">—</span>;
    if (value === "✓")
      return (
        <span className={isHighlight ? "text-[#2a9d6f] font-medium" : "text-[#2a9d6f]"}>
          ✓
        </span>
      );
    return (
      <span className={isHighlight ? "text-[#2a2520] font-medium" : "text-[#6b6560]"}>
        {value}
      </span>
    );
  };

  return (
    <tr className="border-b border-[#eee9e5]/60">
      <td className="py-3 pr-4 text-[#2a2520]">{name}</td>
      <td className="py-3 px-3 text-center">{renderCell(free, false)}</td>
      <td className="py-3 px-3 text-center">{renderCell(sub, true)}</td>
      <td className="py-3 px-3 text-center">{renderCell(course, false)}</td>
    </tr>
  );
}
