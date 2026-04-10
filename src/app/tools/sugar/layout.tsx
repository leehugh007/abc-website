import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "手搖飲怎麼點？算算差多少",
  description:
    "告訴我你怎麼喝，我算給你看——同樣三杯，換個點法差多少。不用戒飲料，只要換個點法。",
  openGraph: {
    type: "website",
    title: "手搖飲怎麼點？算算差多少",
    description:
      "同樣一杯手搖飲，全糖奶茶加波霸 575 卡，無糖茶加仙草 57 卡。差了 10 倍。你沒有少喝，只是換了一個點法。",
    url: "https://abcmetabolic.com/tools/sugar",
    images: [{ url: "https://abcmetabolic.com/images/og-default.png" }],
  },
};

export default function SugarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
