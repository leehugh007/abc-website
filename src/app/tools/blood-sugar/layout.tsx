import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "吃飽就想睡？測測你的血糖穩定度",
  description:
    "10 個日常症狀勾選，2 分鐘評估你的血糖穩不穩。不需要抽血，用生活習慣就能看出端倪。",
  openGraph: {
    type: "website",
    title: "吃飽就想睡？測測你的血糖穩定度",
    description:
      "10 個日常症狀勾選，2 分鐘評估你的血糖穩不穩。吃飽想睡、下午想喝飲料、肚子特別大——這些可能都指向同一件事。",
    url: "https://abcmetabolic.com/tools/blood-sugar",
    images: [{ url: "https://abcmetabolic.com/images/og-default.png" }],
  },
};

export default function BloodSugarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
