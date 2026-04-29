@AGENTS.md

# ABC 代謝力重建官方網站

## 🚨 轉換系統規則（不可跳過）

**改事件命名 / 漏斗階段 / Supabase `_sessions` schema / 個人化字典 / CTA 階層之前，先讀 `契約_轉換系統.md`。**

那份是 abc-website 轉換系統的真相來源（7 工具事件矩陣 + 5 個 sessions 表 schema + 兩處字典同步規則 + LINE 端對應）。本檔（CLAUDE.md）跟契約衝突時以契約為準。

## 設計規則（不可跳過）

**做任何視覺/排版/元件決定之前，先讀 `DESIGN.md`（設計架構說明書）。**

快速提醒（完整規範在 DESIGN.md）：

- 顏色用 design token（`text-brand`），不用 hardcode hex（`text-[#2a9d6f]`）
- Token 定義在 `src/app/globals.css` 的 `@theme`
- CTA 要主次分明（主大副小），不要三欄對稱
- 連結到 `/quiz` 用 `<a>` 不用 `<Link>`（quiz 是靜態 HTML）
- 不觸發 AI slop 黑名單（DESIGN.md 第 6 節）
- 新增頁面走 checklist（DESIGN.md 第 10 節）

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
| `/tools` | TDEE 計算機（工具首頁） |
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

## 改完程式碼之後（不可跳過）

- `npx next build` 通過才 commit
- 如果改了設計相關的東西（新頁面、新元件、改色彩、改排版、改 CTA、改導覽），同步更新 `DESIGN.md` 對應的章節
- 如果新增了頁面，更新下方的網站架構表 + `DESIGN.md` 第 4 節 + `sitemap.ts`

## 轉換優化系統（2026-04-03 更新）

### 全站 CTA 架構
- **StickyLineCTA**（`src/app/sticky-line-cta.tsx`）：全站 20 頁都有，滾動 600px 後出現，接近底部隱藏。文案：「加 LINE 免費領你的代謝報告」
- **工具頁 CTA 模式**：結果區 → 痛點連結文案 → 測驗主 CTA → LINE 副 CTA → 輔助連結 → SEO 底部收尾 CTA
- **測驗結果頁**：社會證明（1,200+）+ 隨機見證卡片（5類型×3人）+ 學習路徑（3步驟）+ 科學深入頁
- **首頁**：每個 section 都有轉換出口（痛點區/類型區/見證區/底部各有 CTA）

### GA4 事件追蹤

#### 工具漏斗事件（看結果 → 領代碼 → 點 LINE）
每個工具的 4 階段事件（命名 `<tool>_<stage>` + LINE 點擊 `click_line_<tool>`）：

| 工具 | 看結果 complete | 進階 start_advanced | 領代碼 claim_generated | 點 LINE click_line_X |
|------|---|---|---|---|
| TDEE `/tools` | ✅ `tdee_complete` | ✅ `tdee_start_advanced` | ✅ `tdee_claim_generated` | ✅ `click_line_tdee` |
| 蛋白質 `/tools/protein` | ⚠️ `protein_calculate`（命名歷史包袱，語意=complete）| ✅ `protein_start_advanced` | ⚠️ `protein_complete`（同名複用為 claim_generated）| ✅ `click_line_protein` |
| 腰臀比 `/tools/waist-hip` | ❌ 無 | — 無代碼流程 | — | ⚠️ generic `click_line_cta` + source=`waist_hip` |
| 血糖穩定度 `/tools/blood-sugar` | ✅ `blood_sugar_complete` | ✅ `blood_sugar_start_advanced` | ✅ `blood_sugar_claim_generated` | ✅ `click_line_blood_sugar` |
| 脂肪肝 `/tools/fatty-liver` | ✅ `fatty_liver_complete` | 🟫 已停用（2026-04-29 拿掉進階） | ✅ `fatty_liver_claim_generated`（看結果直接觸發）| ✅ `click_line_fatty_liver` |
| 胰島素阻抗 `/tools/insulin-check` | ✅ `insulin_check_complete` | — 無代碼流程 | — | ⚠️ generic `click_line_cta` + source=`insulin_check` |
| 每日糖攝取 `/tools/sugar` | ✅ `sugar_complete` | ✅ `sugar_start_advanced` | ✅ `sugar_claim_generated` | ✅ `click_line_sugar` |

> 🟫 `fatty_liver_start_advanced` 自 2026-04-29 為 dead event（fatty-liver 拿掉進階兩題，看結果直接 await `generateClaim`）。GA4 後台保留歷史資料供 04-29 前對照

#### 共用 CTA 事件
| 事件 | 觸發位置 | 參數 |
|------|---------|------|
| `click_quiz_cta` | 各工具頁推 quiz | source: protein/tdee/waist_hip/insulin_check/fatty_liver/sugar/blood_sugar + _bottom |
| `click_line_cta` / `click_line_cta_bottom` | 工具頁 LINE 副 CTA（沒 claim_code 流程的工具用 generic）| source: 同上 |
| `click_sticky_line` | 全站 sticky bar | page: 當前路徑 |
| `click_line_deeplink` | 測驗結果頁 LINE 一鍵 | metabolism_type |
| `click_learning_path` | 測驗結果頁學習路徑 | metabolism_type, step, label |
| `quiz_start` / `quiz_complete` | 測驗頁 | metabolism_type |
| `click_explore_type` | ~~已移除（4/4，0點擊，分散LINE CTA注意力）~~ | — |

### UTM 追蹤
- **abc-line-bot**：`utm_source=line&utm_medium=bot&utm_campaign=asuan`（welcome.js/ai.js/user.js/route.js）
- **official-yihugh-line-bot**：`utm_source=line&utm_medium=bot&utm_campaign=official`（keywords.js/config.js）+ `utm_campaign=report`（報告後類型頁連結）
- GA 裡可區分：`line/bot/asuan` vs `line/bot/official` vs `line/bot/report`

### 見證卡片（測驗結果頁）
- 5 類型 × 3 人 = 15 個化名見證，隨機顯示
- 人設對齊受眾：12 女 3 男，年齡 35-47 歲，混合職業
- 受眾數據來源：LINE 好友統計（85% 女性、核心 40-44 歲）

## 技術備忘

- Next.js 16 App Router + Tailwind v4 + TypeScript
- 動態路由 `params` 是 Promise，要 `await`
- 文章放 `src/content/*.md`，資料在 `src/lib/articles-data.ts`（43 篇）
- 概念放 `src/lib/concepts-data.ts`（10 個）
- 測驗是獨立靜態 HTML（`public/quiz/index.html`），搬靜態檔案記得改絕對路徑
- `src/lib/markdown.ts` 會自動過濾內部備註，但不能依賴它——新增文章仍要人工檢查
- push main = Vercel 自動部署
- GA: `G-GTDQP34BKC`
- Design token 定義在 `src/app/globals.css` 的 `@theme`，設計架構在 `DESIGN.md`

## 深度文章審查規則（寫新文章必遵守）

1. 不簡化科學機制（蛋白質≠不刺激胰島素，要講「不讓血糖飆高」）
2. 不用偽科學詞（毒素/排毒是紅線，用具體生理機制）
3. 生理通道要對（大腦 GLUT1/3 不靠胰島素、肌肉運動 GLUT4）
4. 成因不單一歸因
5. 研究引用要核實條件和數字
6. 台灣用語（不用「特別」當「很」、不用「你必須」）
7. 品牌規範（「ABC 代謝重建瘦身法」+ 結尾簽名）
8. 新名詞先解釋才用
