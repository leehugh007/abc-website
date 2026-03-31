"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape 鍵關閉 menu
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <header className={`sticky top-0 z-50 bg-white/[0.97] backdrop-blur-md border-b border-edge transition-shadow ${scrolled ? "shadow-sm" : ""}`}>
      <nav className="max-w-3xl mx-auto px-5 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-tight">
          <span className="text-brand">ABC</span> 代謝力重建
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-subtle">
          <Link href="/method" className="hover:text-ink transition-colors">
            ABC 是什麼
          </Link>
          <Link href="/types" className="hover:text-ink transition-colors">
            代謝類型
          </Link>
          <Link href="/articles" className="hover:text-ink transition-colors">
            文章
          </Link>
          <Link href="/tools" className="hover:text-ink transition-colors">
            工具
          </Link>
          <Link href="/about" className="hover:text-ink transition-colors">
            關於一休
          </Link>
          <Link href="/program" className="text-brand hover:text-brand-dark transition-colors font-bold">
            課程
          </Link>
          <Link href="/quiz" className="inline-flex items-center px-4 py-2 text-sm font-bold text-white bg-brand rounded-full hover:shadow-md transition-shadow">
            做測驗
          </Link>
        </div>

        {/* Mobile: quiz CTA + hamburger */}
        <div className="flex sm:hidden items-center gap-3">
          <Link
            href="/quiz"
            className="text-xs font-bold text-white bg-brand px-3 py-1.5 rounded-full"
          >
            做測驗
          </Link>
          <button
            ref={toggleRef}
            onClick={() => setOpen(!open)}
            className="w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="選單"
            aria-expanded={open}
          >
            <span
              className={`block w-5 h-0.5 bg-ink transition-transform ${
                open ? "rotate-45 translate-y-1" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-ink transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-ink transition-transform ${
                open ? "-rotate-45 -translate-y-1" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile backdrop */}
      {open && (
        <div
          className="fixed inset-0 top-14 bg-black/30 z-40 sm:hidden"
          onClick={close}
        />
      )}

      {/* Mobile dropdown — 分組 */}
      {open && (
        <div ref={menuRef} className="sm:hidden border-t border-edge bg-white px-5 py-4 relative z-50 shadow-lg" role="menu">
          {/* 主要 */}
          <div className="space-y-1 pb-3">
            {[
              { href: "/method", label: "ABC 是什麼" },
              { href: "/types", label: "代謝類型" },
              { href: "/articles", label: "文章" },
              { href: "/testimonials", label: "學員見證" },
              { href: "/about", label: "關於一休" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="block text-base font-medium text-ink py-2" onClick={close}>
                {item.label}
              </Link>
            ))}
          </div>
          {/* 你的狀況 */}
          <div className="border-t border-edge py-3">
            <p className="text-xs text-muted mb-2 px-0">我的狀況比較像⋯</p>
            <div className="space-y-1">
              {[
                { href: "/for/postpartum", label: "產後瘦身" },
                { href: "/for/health-check", label: "健檢紅字" },
                { href: "/for/sedentary", label: "久坐上班族" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="block text-sm text-subtle py-1.5" onClick={close}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          {/* 學習 */}
          <div className="border-t border-edge py-3 space-y-1">
            {[
              { href: "/guide", label: "完全指南" },
              { href: "/concepts", label: "代謝科學" },
              { href: "/tools", label: "免費工具" },
              { href: "/faq", label: "大家都在問" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="block text-sm text-subtle py-1.5" onClick={close}>
                {item.label}
              </Link>
            ))}
          </div>
          {/* 行動 */}
          <div className="border-t border-edge pt-3 space-y-2">
            <Link href="/program" className="block text-base font-bold text-brand py-2" onClick={close}>
              課程介紹
            </Link>
            <a href="https://lin.ee/x41s2Su" target="_blank" rel="noopener noreferrer" className="block text-sm text-line-green font-medium py-1.5">
              加入 LINE →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
