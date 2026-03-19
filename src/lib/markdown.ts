import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const contentDir = path.join(process.cwd(), "src/content");

export async function getArticleContent(slug: string) {
  const filePath = path.join(contentDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");

  // Split title (first # heading) from body
  const lines = raw.split("\n");
  const titleLine = lines.find((l) => l.startsWith("# "));
  const title = titleLine ? titleLine.replace("# ", "").trim() : slug;
  const body = lines
    .filter((l) => l !== titleLine)
    .join("\n")
    .trim();

  const result = await remark().use(html).process(body);
  return {
    title,
    html: result.toString(),
  };
}
