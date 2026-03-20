import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABC 代謝力重建是什麼？加營養、調體質、輕負擔",
  description:
    "不節食、不算卡路里、不靠意志力。ABC 代謝重建瘦身法透過加營養、調體質、輕負擔，讓胰島素休息、代謝回到正軌。12 週學一次，瘦一輩子。",
};

export default function MethodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
