import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "胰島素阻抗風險自評 — 10 個症狀檢查",
  description:
    "不需要抽血，10 個日常症狀勾選，評估你是否可能有胰島素阻抗。吃飽想睡、肚子特別大、下午想喝手搖飲——這些可能都是同一個原因。",
};

export default function InsulinCheckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
