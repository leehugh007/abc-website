import type { Metadata } from "next";
import { FAQ_DATA } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "常見問題 FAQ",
  description:
    "不吃澱粉真的會瘦嗎？外食族怎麼減肥？停滯期怎麼辦？從 PTT、Dcard 到 Reddit，大家最常問的瘦身問題，用 ABC 代謝力重建的科學角度一次回答。",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_DATA.flatMap((section) =>
    section.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a.replace(/\n/g, " "),
      },
    }))
  ),
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
