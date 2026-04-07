import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "脂肪肝風險自我檢測 — 你的肝在加班嗎？",
  description:
    "6 個生活習慣問題，2 分鐘評估你的脂肪肝風險。不是醫療檢查，是幫你觀察自己的飲食和身體變化。",
  openGraph: {
    type: "website",
    title: "脂肪肝風險自我檢測 — 你的肝在加班嗎？",
    description:
      "6 個生活習慣問題，2 分鐘評估你的脂肪肝風險。台灣每 2 人就有 1 人有脂肪肝，你是其中之一嗎？",
    url: "https://abcmetabolic.com/tools/fatty-liver",
    images: [{ url: "https://abcmetabolic.com/images/og-default.png" }],
  },
};

export default function FattyLiverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
