"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function StickyLineCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling 600px, hide near bottom
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const nearBottom = scrollY + winHeight > docHeight - 200;
      setVisible(scrollY > 600 && !nearBottom);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom duration-300">
      <div className="max-w-2xl mx-auto px-4 pb-4">
        <a
          href="https://lin.ee/x41s2Su"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full text-white font-semibold text-[15px] shadow-lg transition-shadow hover:shadow-xl"
          style={{ background: "linear-gradient(135deg, #06C755, #04B34C)" }}
          onClick={() => {
            if (typeof window !== "undefined" && typeof window.gtag === "function") {
              window.gtag("event", "click_sticky_line", { page: window.location.pathname });
            }
          }}
        >
          <span>有問題？在 LINE 問一休</span>
          <span className="text-white/80">→</span>
        </a>
      </div>
    </div>
  );
}
