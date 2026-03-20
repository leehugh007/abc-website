import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "搞懂你的身體",
  description:
    "健檢紅字、減肥真相、瘦瘦針、飲食方法、學員故事——看完就知道為什麼以前的方法不管用。",
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
