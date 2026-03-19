"use client";

import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/92 backdrop-blur-md border-b border-[#eee9e5]">
      <nav className="max-w-3xl mx-auto px-5 h-14 flex items-center justify-between">
        <a href="/" className="font-bold text-lg tracking-tight">
          <span className="text-[#2a9d6f]">ABC</span> 代謝力重建
        </a>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-[#6b6560]">
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

        {/* Mobile: quiz CTA + hamburger */}
        <div className="flex sm:hidden items-center gap-3">
          <a
            href="https://metabolism-quiz.vercel.app"
            className="text-xs font-bold text-white bg-[#2a9d6f] px-3 py-1.5 rounded-full"
          >
            做測驗
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="選單"
          >
            <span
              className={`block w-5 h-0.5 bg-[#2a2520] transition-transform ${
                open ? "rotate-45 translate-y-1" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#2a2520] transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#2a2520] transition-transform ${
                open ? "-rotate-45 -translate-y-1" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="sm:hidden border-t border-[#eee9e5] bg-white px-5 py-4 space-y-3">
          <a
            href="/types"
            className="block text-base font-medium text-[#2a2520] py-2"
            onClick={() => setOpen(false)}
          >
            代謝類型
          </a>
          <a
            href="/articles"
            className="block text-base font-medium text-[#2a2520] py-2"
            onClick={() => setOpen(false)}
          >
            文章
          </a>
          <a
            href="/about"
            className="block text-base font-medium text-[#2a2520] py-2"
            onClick={() => setOpen(false)}
          >
            關於一休
          </a>
          <a
            href="https://lin.ee/x41s2Su"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-base font-medium text-[#2a9d6f] py-2"
          >
            加入 LINE →
          </a>
        </div>
      )}
    </header>
  );
}
