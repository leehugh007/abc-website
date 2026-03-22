import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "腰臀比計算機 — 你的脂肪囤在哪裡？",
  description:
    "量腰圍和臀圍，WHO 標準判斷你的脂肪分布是否代表代謝失調風險。腰臀比偏高不只是外觀問題。",
};

export default function WaistHipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
