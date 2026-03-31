@AGENTS.md

# ABC 代謝力重建官方網站

## 設計規則（不可跳過）

全站顏色使用 Tailwind v4 design token（定義在 `src/app/globals.css` 的 `@theme`）。
**不要用 hardcode hex，用 token name。** 例如 `text-brand` 而不是 `text-[#2a9d6f]`。

### Design Token 對照表

| Token | 色值 | 用途 |
|-------|------|------|
| `brand` | `#2a9d6f` | 主色翠綠（CTA、連結、強調） |
| `brand-dark` | `#1a5e3f` | 深綠（全寬背景區塊、文章粗體） |
| `surface` | `#f8faf7` | 頁面背景（微綠米白） |
| `surface-green` | `#f3f9f5` | 淺綠卡片/區塊背景 |
| `ink` | `#2a2520` | 主要文字 |
| `subtle` | `#6b6560` | 次要文字 |
| `muted` | `#78726e` | 輔助文字（WCAG AA 通過） |
| `edge` | `#eee9e5` | 邊框 |
| `edge-dark` | `#ddd5cf` | hover 邊框 |
| `danger` | `#e74c3c` | 紅色（痛點/警示） |
| `warning` | `#e67e22` | 橘色 |
| `line-green` | `#06C755` | LINE 品牌綠 |

### 品牌調性

- **品牌個性**：溫暖、聰明、活潑。像朋友聊天，不像教科書
- **目標受眾**：25-45 歲台灣女性，手機閱讀
- **不販賣焦慮**：恐懼當鉤子可以，但必須給出路
- **加法思維**：增加好的，不限制壞的
- **紅色只用在痛點/警示**，不是主色

## 內容上線前檢查（不可跳過）

把任何內容放到前台之前，必須：
1. **逐一讀過內容**，確認沒有內部備註（核心邏輯/分享動機/科學資料庫來源/提示詞/Hashtag）
2. **站在讀者角度看**：一個第一次來的 35 歲女性，會看到什麼？有沒有不該看到的？

## 網站架構（2026-03-22 更新）

| 路由 | 說明 |
|------|------|
| `/` | 首頁 |
| `/guide` | Pillar Page 代謝力重建完全指南（3500 字） |
| `/method` | ABC 是什麼 |
| `/about` | 一休的故事 + 為什麼做 ABC |
| `/program` | 課程頁（整合說明會內容） |
| `/quiz` | 代謝類型測驗（`public/quiz/index.html` 靜態 HTML） |
| `/tools` | TDEE 計算機 |
| `/articles` | 文章列表（43 篇，雙層篩選） |
| `/articles/[slug]` | 文章內頁 |
| `/concepts` | 代謝科學小百科（10 個概念） |
| `/concepts/[slug]` | 概念內頁 |
| `/types` | 五種代謝類型 |
| `/types/[slug]` | 類型內頁 |
| `/testimonials` | 學員見證牆 |
| `/for/postpartum` | 分眾：產後媽媽 |
| `/for/health-check` | 分眾：健檢紅字族 |
| `/for/sedentary` | 分眾：久坐上班族 |
| `/faq` | FAQ |
| `/not-found` | 自訂 404 |

## 技術備忘

- Next.js 16 App Router + Tailwind + TypeScript
- 動態路由 `params` 是 Promise，要 `await`
- 文章放 `src/content/*.md`，資料在 `src/lib/articles-data.ts`（43 篇）
- 概念放 `src/lib/concepts-data.ts`（10 個）
- 測驗是獨立靜態 HTML（`public/quiz/index.html`），搬靜態檔案記得改絕對路徑
- `src/lib/markdown.ts` 會自動過濾內部備註，但不能依賴它——新增文章仍要人工檢查
- push main = Vercel 自動部署
- GA: `G-GTDQP34BKC`

## 深度文章審查規則（寫新文章必遵守）

1. 不簡化科學機制（蛋白質≠不刺激胰島素，要講「不讓血糖飆高」）
2. 不用偽科學詞（毒素/排毒是紅線，用具體生理機制）
3. 生理通道要對（大腦 GLUT1/3 不靠胰島素、肌肉運動 GLUT4）
4. 成因不單一歸因
5. 研究引用要核實條件和數字
6. 台灣用語（不用「特別」當「很」、不用「你必須」）
7. 品牌規範（「ABC 代謝重建瘦身法」+ 結尾簽名）
8. 新名詞先解釋才用
