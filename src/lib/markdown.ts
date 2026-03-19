import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const contentDir = path.join(process.cwd(), "src/content");

// Internal sections that should NOT appear on the website
const INTERNAL_SECTIONS = [
  "文章核心邏輯",
  "分享動機分析",
  "與 ABC 課程的連結",
  "姊妹篇",
  "封面圖 AI 提示詞",
  "科學依據來源",
  "Hashtag",
  "延伸閱讀建議",
  "版本紀錄",
  "投放建議",
  "預期效果",
];

export async function getArticleContent(slug: string) {
  const filePath = path.join(contentDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const lines = raw.split("\n");

  // Extract title from first # heading
  const titleLine = lines.find((l) => l.startsWith("# "));
  const title = titleLine ? titleLine.replace(/^#\s+/, "").trim() : slug;

  // Find the actual article content
  // Strategy: if "## FB 發文版" exists, content starts AFTER it
  // Otherwise, content starts after the title
  const fbStartIdx = lines.findIndex((l) => l.match(/^##\s*FB\s*發文版/));
  const startIdx = fbStartIdx !== -1 ? fbStartIdx + 1 : 0;

  // Filter lines
  const filtered: string[] = [];
  let skipSection = false;

  for (let i = startIdx; i < lines.length; i++) {
    const line = lines[i];

    // Skip the title line (already extracted)
    if (line === titleLine) continue;

    // Skip metadata blockquotes at the top (> 核心目的... etc)
    if (line.match(/^>\s*(核心目的|類型|底層情緒|分享動機|分類|策略定位|測試變數|狀態|科學資料庫)/)) continue;

    // Check if this is an internal section heading
    if (line.startsWith("## ")) {
      const sectionName = line.replace(/^##\s+/, "").trim();
      skipSection = INTERNAL_SECTIONS.some((s) => sectionName.includes(s));
      if (skipSection) continue;
    }

    // Skip lines within internal sections
    if (skipSection) {
      // Stop skipping when we hit the next ## heading that's NOT internal
      if (line.startsWith("## ")) {
        const sectionName = line.replace(/^##\s+/, "").trim();
        skipSection = INTERNAL_SECTIONS.some((s) => sectionName.includes(s));
        if (skipSection) continue;
      } else {
        continue;
      }
    }

    // Skip hashtag lines (lines that are mostly #tags)
    if (line.match(/^#[^\s#]/) && line.includes("#") && line.split("#").length > 3) continue;

    filtered.push(line);
  }

  const body = filtered.join("\n").trim();
  const result = await remark().use(html).process(body);

  return {
    title,
    html: result.toString(),
  };
}
