import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24 px-5">
      <div className="max-w-md mx-auto text-center">
        <p className="text-6xl font-extrabold text-[#2a9d6f] mb-4">404</p>
        <h1 className="text-2xl font-bold mb-3">這頁面不存在</h1>
        <p className="text-[#6b6560] mb-8">
          可能網址打錯了，或是頁面已經搬家了。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-[#2a9d6f] rounded-full"
          >
            回首頁
          </Link>
          <Link
            href="/articles"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#6b6560] border border-[#eee9e5] rounded-full hover:bg-white transition-colors"
          >
            看文章
          </Link>
        </div>
      </div>
    </section>
  );
}
