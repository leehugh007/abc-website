import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "./header";

const GA_ID = "G-GTDQP34BKC";

export const metadata: Metadata = {
  title: {
    default: "ABC 代謝力重建瘦身法 — 你的問題不是胖，是代謝失調",
    template: "%s | ABC 代謝力重建",
  },
  description:
    "重建代謝力，瘦只是順便的事。科學方法、不挨餓、不復胖。了解你的代謝類型，找到適合你的方式。",
  keywords: ["代謝力重建", "ABC瘦身法", "代謝類型", "健康瘦身", "胰島素", "一休"],
  openGraph: {
    type: "website",
    locale: "zh_TW",
    siteName: "ABC 代謝力重建",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="h-full antialiased">
      <head>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-[#f8faf7] text-[#2a2520]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#eee9e5] bg-white py-12 px-5">
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {/* 品牌 */}
          <div>
            <p className="font-bold mb-3">
              <span className="text-[#2a9d6f]">ABC</span> 代謝力重建
            </p>
            <p className="text-sm text-[#a8a29e] leading-relaxed">
              重建代謝力，瘦只是順便的事
            </p>
          </div>

          {/* 導航 */}
          <div>
            <p className="font-semibold text-sm mb-3">探索</p>
            <div className="space-y-2 text-sm text-[#6b6560]">
              <a href="/method" className="block hover:text-[#2a2520] transition-colors">ABC 是什麼</a>
              <a href="/types" className="block hover:text-[#2a2520] transition-colors">代謝類型</a>
              <a href="/articles" className="block hover:text-[#2a2520] transition-colors">文章</a>
              <a href="/faq" className="block hover:text-[#2a2520] transition-colors">常見問題</a>
              <a href="/about" className="block hover:text-[#2a2520] transition-colors">關於一休</a>
            </div>
          </div>

          {/* CTA */}
          <div>
            <p className="font-semibold text-sm mb-3">開始</p>
            <div className="space-y-2 text-sm">
              <a
                href="https://metabolism-quiz.vercel.app"
                className="block text-[#2a9d6f] font-medium hover:underline"
              >
                做代謝測驗 →
              </a>
              <a
                href="https://lin.ee/x41s2Su"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#6b6560] hover:text-[#2a2520] transition-colors"
              >
                加入一休的 LINE
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#eee9e5] pt-6 text-center text-sm text-[#a8a29e]">
          <p className="mb-1">我是一休，陪你健康的瘦一輩子</p>
          <p>&copy; {new Date().getFullYear()} ABC 代謝力重建瘦身法</p>
        </div>
      </div>
    </footer>
  );
}
