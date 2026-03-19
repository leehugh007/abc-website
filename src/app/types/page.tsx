import type { Metadata } from "next";
import Link from "next/link";
import { TYPES } from "@/lib/types-data";

export const metadata: Metadata = {
  title: "五種代謝類型",
  description:
    "高轉速、燃燒殆盡、雲霄飛車、省電模式、穩定燃燒——了解你的代謝類型，找到真正適合你的瘦身方式。",
};

export default function TypesPage() {
  return (
    <section className="py-16 px-5">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center mb-3 tracking-tight">
          五種代謝類型
        </h1>
        <p className="text-center text-[#6b6560] mb-4">
          不同的代謝模式，需要不同的解法
        </p>
        <div className="text-center mb-12">
          <a
            href="https://metabolism-quiz.vercel.app"
            className="text-[#2a9d6f] font-semibold hover:underline text-sm"
          >
            不確定你是哪種？做個 30 秒測驗 →
          </a>
        </div>
        <div className="space-y-4">
          {TYPES.map((type) => (
            <Link
              key={type.slug}
              href={`/types/${type.slug}`}
              className="block p-6 rounded-2xl bg-white border border-[#eee9e5] hover:border-[#ddd5cf] hover:shadow-sm transition-all group"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{type.emoji}</span>
                <div className="flex-1">
                  <div className="font-bold text-lg mb-1 group-hover:text-[#2a9d6f] transition-colors">
                    {type.name}
                  </div>
                  <div className="text-[#6b6560] text-sm mb-2">
                    {type.tagline}
                  </div>
                  <div className="text-[#a8a29e] text-sm line-clamp-2">
                    {type.description}
                  </div>
                </div>
                <span className="text-[#a8a29e] group-hover:text-[#6b6560] transition-colors mt-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
