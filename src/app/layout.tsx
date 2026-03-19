import type { Metadata } from "next";
import "./globals.css";

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
      <body className="min-h-full flex flex-col bg-[#f8faf7] text-[#2a2520]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/92 backdrop-blur-md border-b border-[#eee9e5]">
      <nav className="max-w-3xl mx-auto px-5 h-14 flex items-center justify-between">
        <a href="/" className="font-bold text-lg tracking-tight">
          <span className="text-[#2a9d6f]">ABC</span> 代謝力重建
        </a>
        <div className="flex items-center gap-6 text-sm font-medium text-[#6b6560]">
          <a href="/types" className="hover:text-[#2a2520] transition-colors">
            代謝類型
          </a>
          <a href="/articles" className="hover:text-[#2a2520] transition-colors">
            文章
          </a>
          <a href="/about" className="hover:text-[#2a2520] transition-colors">
            關於一休
          </a>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#eee9e5] bg-white py-10 px-5">
      <div className="max-w-3xl mx-auto text-center text-sm text-[#a8a29e]">
        <p className="mb-2">我是一休，陪你健康的瘦一輩子</p>
        <p>&copy; {new Date().getFullYear()} ABC 代謝力重建瘦身法</p>
      </div>
    </footer>
  );
}
