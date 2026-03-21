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

const SITE_URL = "https://abc-metabolism.vercel.app";

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ABC 代謝力重建瘦身法",
  url: SITE_URL,
  description:
    "重建代謝力，瘦只是順便的事。科學方法、不挨餓、不復胖。",
  inLanguage: "zh-TW",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ABC 代謝力重建",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon-mflame-pack/apple-touch-icon.png`,
  founder: {
    "@type": "Person",
    name: "一休",
    description:
      "瘦身教練、ABC 代謝重建瘦身法創辦人。曾從 89 公斤瘦到 62 公斤，超過 10 年維持不復胖。",
    url: `${SITE_URL}/about`,
  },
  sameAs: [
    "https://www.facebook.com/yixiu12345",
    "https://lin.ee/x41s2Su",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;600&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
          {/* 品牌 */}
          <div className="col-span-2 sm:col-span-1">
            <p className="font-bold mb-3">
              <span className="text-[#2a9d6f]">ABC</span> 代謝力重建
            </p>
            <p className="text-sm text-[#a8a29e] leading-relaxed">
              重建代謝力，瘦只是順便的事
            </p>
          </div>

          {/* 探索 */}
          <div>
            <p className="font-semibold text-sm mb-3">探索</p>
            <div className="space-y-2 text-sm text-[#6b6560]">
              <a href="/method" className="block hover:text-[#2a2520] transition-colors">ABC 是什麼</a>
              <a href="/types" className="block hover:text-[#2a2520] transition-colors">代謝類型</a>
              <a href="/articles" className="block hover:text-[#2a2520] transition-colors">文章</a>
              <a href="/about" className="block hover:text-[#2a2520] transition-colors">關於一休</a>
            </div>
          </div>

          {/* 學習 */}
          <div>
            <p className="font-semibold text-sm mb-3">學習</p>
            <div className="space-y-2 text-sm text-[#6b6560]">
              <a href="/guide" className="block hover:text-[#2a2520] transition-colors">完全指南</a>
              <a href="/concepts" className="block hover:text-[#2a2520] transition-colors">代謝科學</a>
              <a href="/faq" className="block hover:text-[#2a2520] transition-colors">大家都在問</a>
            </div>
          </div>

          {/* 開始 */}
          <div>
            <p className="font-semibold text-sm mb-3">開始</p>
            <div className="space-y-2 text-sm">
              <a
                href="https://metabolism-quiz.vercel.app"
                className="block text-[#2a9d6f] font-medium hover:underline"
              >
                做代謝測驗 →
              </a>
              <a href="/tools" className="block text-[#6b6560] hover:text-[#2a2520] transition-colors">
                TDEE 計算機
              </a>
              <a href="/program" className="block text-[#6b6560] hover:text-[#2a2520] transition-colors">
                課程介紹
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
