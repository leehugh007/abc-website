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
    if (
      line.match(
        /^>\s*(核心目的|類型|底層情緒|分享動機|分類|策略定位|測試變數|狀態|科學資料庫)/
      )
    )
      continue;

    // Check if this is an internal section heading
    if (line.startsWith("## ")) {
      const sectionName = line.replace(/^##\s+/, "").trim();
      skipSection = INTERNAL_SECTIONS.some((s) => sectionName.includes(s));
      if (skipSection) continue;
    }

    // Skip lines within internal sections
    if (skipSection) {
      if (line.startsWith("## ")) {
        const sectionName = line.replace(/^##\s+/, "").trim();
        skipSection = INTERNAL_SECTIONS.some((s) => sectionName.includes(s));
        if (skipSection) continue;
      } else {
        continue;
      }
    }

    // Skip hashtag lines (lines that are mostly #tags)
    if (
      line.match(/^#[^\s#]/) &&
      line.includes("#") &&
      line.split("#").length > 3
    )
      continue;

    // Convert FB-style #section headers (no space after #) to styled section breaks
    // e.g. #一個被誤解很久的真相 → HTML section break
    if (line.match(/^#([^#\s].{2,})$/) && !line.startsWith("##")) {
      const sectionTitle = line.replace(/^#/, "").trim();
      // Skip if it looks like a hashtag (short, or contains multiple #)
      if (sectionTitle.length > 3) {
        filtered.push(
          `<div class="article-section-break">${sectionTitle}</div>`
        );
        continue;
      }
    }

    filtered.push(line);
  }

  const body = filtered.join("\n").trim();
  const result = await remark().use(html, { sanitize: false }).process(body);

  // Inject mid-article CTA roughly in the middle
  const rawHtml = result.toString();
  const htmlWithCta = injectMidArticleCta(rawHtml);

  return {
    title,
    html: htmlWithCta,
  };
}

const MID_ARTICLE_CTA = `<div class="mid-article-cta">
<p class="mid-article-cta-label">ABC 代謝重建瘦身法</p>
<p class="mid-article-cta-text">想知道你的代謝類型？30 秒免費測驗，找到適合你的方式</p>
<a href="/quiz" class="mid-article-cta-btn">測出我的代謝類型 →</a>
</div>`;

function injectMidArticleCta(html: string): string {
  // Find all paragraph/heading break points
  const breakPoints: number[] = [];
  const tagPattern = /<\/(p|h2|h3|blockquote|div|ul|ol)>/gi;
  let match;
  while ((match = tagPattern.exec(html)) !== null) {
    breakPoints.push(match.index + match[0].length);
  }

  if (breakPoints.length < 4) return html; // Too short, skip

  // Insert around 45-55% through the content
  const targetIdx = Math.floor(breakPoints.length * 0.5);
  const insertPos = breakPoints[targetIdx];

  return html.slice(0, insertPos) + MID_ARTICLE_CTA + html.slice(insertPos);
}
