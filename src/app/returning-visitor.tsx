"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const TYPE_RECOMMENDATIONS: Record<
  string,
  { label: string; article: string; articleTitle: string; concept: string; conceptLabel: string }
> = {
  highRPM: {
    label: "高轉速型",
    article: "/articles/belly-fat-stress-not-food",
    articleTitle: "肚子怎麼都消不掉？問題可能不在吃",
    concept: "/concepts/cortisol",
    conceptLabel: "壓力荷爾蒙（皮質醇）",
  },
  burnout: {
    label: "燃燒殆盡型",
    article: "/articles/willpower-myth",
    articleTitle: "管不住嘴就是沒意志力？讓科學打臉",
    concept: "/concepts/leptin",
    conceptLabel: "瘦體素（飽足信號）",
  },
  rollerCoaster: {
    label: "雲霄飛車型",
    article: "/articles/eating-order-blood-sugar",
    articleTitle: "不用少吃，只要換順序：血糖少飆 35%",
    concept: "/concepts/blood-sugar-rollercoaster",
    conceptLabel: "血糖雲霄飛車",
  },
  powerSave: {
    label: "省電模式型",
    article: "/articles/metabolism-reset-vs-dieting",
    articleTitle: "為什麼你越少吃，反而越難瘦？",
    concept: "/concepts/metabolic-adaptation",
    conceptLabel: "代謝適應",
  },
  steady: {
    label: "穩定燃燒型",
    article: "/articles/over-40-belly-fat",
    articleTitle: "過了 40 歲，褲子越買越大件？",
    concept: "/concepts/metabolic-flexibility",
    conceptLabel: "代謝彈性",
  },
};

export function ReturningVisitorBanner() {
  const [info, setInfo] = useState<{
    typeName: string;
    typeId: string;
    visits: number;
  } | null>(null);

  useEffect(() => {
    try {
      // Track visits
      const prevVisits = parseInt(localStorage.getItem("abc_visit_count") || "0");
      const newCount = prevVisits + 1;
      localStorage.setItem("abc_visit_count", String(newCount));

      // Only show for returning visitors (2nd visit+)
      if (newCount < 2) return;

      const typeId = localStorage.getItem("abc_quiz_type");
      const typeName = localStorage.getItem("abc_quiz_type_name");

      if (typeId && typeName) {
        setInfo({ typeName, typeId, visits: newCount });
      }
    } catch {
      // localStorage not available
    }
  }, []);

  if (!info) return null;

  const rec = TYPE_RECOMMENDATIONS[info.typeId];
  if (!rec) return null;

  return (
    <section className="px-5 pb-6">
      <div className="max-w-2xl mx-auto">
        <div className="rounded-2xl border border-[#2a9d6f]/20 bg-[#f3f9f5] p-5">
          <p className="text-sm font-semibold text-[#2a9d6f] mb-2">
            歡迎回來 — 你是「{info.typeName}」代謝
          </p>
          <p className="text-sm text-[#6b6560] mb-4">
            上次測驗結果還在。根據你的類型，這些內容可能對你有幫助：
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Link
              href={rec.article}
              className="flex-1 px-4 py-2.5 rounded-xl bg-white border border-[#eee9e5] text-sm font-medium text-[#2a2520] hover:border-[#2a9d6f] transition-colors"
            >
              {rec.articleTitle} →
            </Link>
            <Link
              href={rec.concept}
              className="flex-1 px-4 py-2.5 rounded-xl bg-white border border-[#eee9e5] text-sm font-medium text-[#2a2520] hover:border-[#2a9d6f] transition-colors"
            >
              了解{rec.conceptLabel} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
