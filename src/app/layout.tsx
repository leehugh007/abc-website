import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
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
    url: "https://abcmetabolic.com",
    description: "重建代謝力，瘦只是順便的事。科學方法、不挨餓、不復胖。了解你的代謝類型，找到適合你的方式。",
    images: [
      {
        url: "https://abcmetabolic.com/images/og-brand.png",
        width: 1200,
        height: 630,
        alt: "ABC 代謝力重建瘦身法",
      },
    ],
  },
};

const SITE_URL = "https://abcmetabolic.com";

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
  logo: `${SITE_URL}/favicon-mflame-pack/favicon_Mflame_512.png`,
  founder: {
    "@type": "Person",
    name: "一休",
    description:
      "瘦身教練、ABC 代謝重建瘦身法創辦人。曾從 89 公斤瘦到 62 公斤，超過 10 年維持不復胖。",
    url: `${SITE_URL}/about`,
  },
  sameAs: [
    "https://www.facebook.com/yixiu12345",
    "https://lin.ee/7xrRYez",
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
      <body className="min-h-full flex flex-col bg-surface text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="border-t border-edge bg-white py-12 px-5">
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
          {/* 品牌 */}
          <div className="col-span-2 sm:col-span-1">
            <p className="font-bold mb-3">
              <span className="text-brand">ABC</span> 代謝力重建
            </p>
            <p className="text-sm text-muted leading-relaxed">
              重建代謝力，瘦只是順便的事
            </p>
          </div>

          {/* 探索 */}
          <div>
            <p className="font-semibold text-sm mb-3">探索</p>
            <div className="space-y-2 text-sm text-subtle">
              <Link href="/method" className="block hover:text-ink transition-colors">ABC 是什麼</Link>
              <Link href="/types" className="block hover:text-ink transition-colors">代謝類型</Link>
              <Link href="/articles" className="block hover:text-ink transition-colors">文章</Link>
              <Link href="/testimonials" className="block hover:text-ink transition-colors">學員見證</Link>
              <Link href="/about" className="block hover:text-ink transition-colors">關於一休</Link>
              <Link href="/for/postpartum" className="block hover:text-ink transition-colors">產後瘦身</Link>
              <Link href="/for/health-check" className="block hover:text-ink transition-colors">健檢紅字</Link>
              <Link href="/for/sedentary" className="block hover:text-ink transition-colors">久坐上班族</Link>
            </div>
          </div>

          {/* 學習 */}
          <div>
            <p className="font-semibold text-sm mb-3">學習</p>
            <div className="space-y-2 text-sm text-subtle">
              <Link href="/guide" className="block hover:text-ink transition-colors">完全指南</Link>
              <Link href="/concepts" className="block hover:text-ink transition-colors">代謝科學</Link>
              <Link href="/faq" className="block hover:text-ink transition-colors">大家都在問</Link>
            </div>
          </div>

          {/* 開始 */}
          <div>
            <p className="font-semibold text-sm mb-3">開始</p>
            <div className="space-y-2 text-sm">
              <a
                href="/quiz"
                className="block text-brand font-medium hover:underline"
              >
                做代謝測驗 →
              </a>
              <Link href="/tools" className="block text-subtle hover:text-ink transition-colors">
                TDEE 計算機
              </Link>
              <Link href="/tools/protein" className="block text-subtle hover:text-ink transition-colors">
                蛋白質計算機
              </Link>
              <Link href="/tools/waist-hip" className="block text-subtle hover:text-ink transition-colors">
                腰臀比計算機
              </Link>
              <Link href="/tools/insulin-check" className="block text-subtle hover:text-ink transition-colors">
                胰島素阻抗自評
              </Link>
              <Link href="/program" className="block text-subtle hover:text-ink transition-colors">
                課程介紹
              </Link>
              <a
                href="https://lin.ee/7xrRYez"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-subtle hover:text-ink transition-colors"
              >
                加入一休的 LINE
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-edge pt-6 text-center text-sm text-muted">
          <p className="mb-1">我是一休，陪你健康的瘦一輩子</p>
          <p>&copy; {new Date().getFullYear()} ABC 代謝力重建瘦身法</p>
        </div>
      </div>
    </footer>
  );
}
