import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "蛋白質計算機 — 我一天該吃多少蛋白質？",
  description:
    "輸入體重，算出你每天需要多少蛋白質。附食物換算和每餐分配建議。",
  openGraph: {
    title: "蛋白質計算機 — 我一天該吃多少蛋白質？",
    description: "輸入體重，算出你每天需要多少蛋白質。附食物換算和每餐分配建議。",
    url: "https://abcmetabolic.com/tools/protein",
    images: [{ url: "https://abcmetabolic.com/images/og-default.png" }],
  },
};

export default function ProteinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
