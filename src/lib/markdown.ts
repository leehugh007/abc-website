import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const contentDir = path.join(process.cwd(), "src/content");

export async function getArticleContent(slug: string) {
  const filePath = path.join(contentDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");

  const lines = raw.split("\n");
  const titleLine = lines.find((l) => l.startsWith("# "));
  const title = titleLine ? titleLine.replace("# ", "").trim() : slug;

  // Filter out: title line, metadata blockquotes (> 核心目的/類型/底層情緒/分享動機/分類/策略定位)
  const body = lines
    .filter((l) => l !== titleLine)
    .filter((l) => !l.match(/^>\s*(核心目的|類型|底層情緒|分享動機|分類|策略定位)/))
    .join("\n")
    .trim();

  const result = await remark().use(html).process(body);
  return {
    title,
    html: result.toString(),
  };
}
