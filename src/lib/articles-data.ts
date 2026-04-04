export type Tag =
  | "胰島素阻抗"
  | "血糖控制"
  | "復胖"
  | "瘦瘦針"
  | "荷爾蒙"
  | "代謝適應"
  | "健檢紅字"
  | "發炎"
  | "飲食方法"
  | "體重迷思"
  | "學員故事"
  | "外食族";

export type Depth = "快讀" | "指南" | "深度";

export interface Article {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  date: string;
  category: "健檢紅字" | "減肥真相" | "瘦瘦針" | "飲食方法" | "學員故事";
  readTime: string;
  featured?: boolean;
  coverImage?: string;
  tags: Tag[];
  depth: Depth;
}

export const ARTICLES: Article[] = [
  {
    slug: "95-percent-regain-weight",
    title: "95% 的人都會復胖，但這 5% 做對了什麼？",
    description:
      "如果你正處在減肥→復胖→再減肥的循環中，這不是你的問題。這是方法的問題。",
    date: "2025-07-15",
    category: "減肥真相",
    readTime: "8 分鐘",
    featured: true,
    coverImage: "/images/articles/cover-regain-truth.jpg",
    tags: ["復胖", "代謝適應", "體重迷思"],
    depth: "指南",
  },
  {
    slug: "ozempic-cost-and-regain",
    title: "花 10 萬打瘦瘦針，停藥後復胖...這真的是你要的瘦嗎？",
    description:
      "一位媽媽的無奈分享：3 個月瘦了 8 公斤，停藥半年後全部回來還多了 2 公斤。",
    date: "2025-07-20",
    category: "瘦瘦針",
    readTime: "6 分鐘",
    coverImage: "/images/articles/cover-ozempic-regain.jpg",
    tags: ["瘦瘦針", "復胖"],
    depth: "快讀",
  },
  {
    slug: "ozempic-body-disconnect",
    title: "瘦瘦針讓你瘦了，但你的身體還認識你嗎？",
    description:
      "「我現在吃一點點就飽了，但總覺得這種飽不是真的飽。」當身體失去飢餓的能力，你真的變健康了嗎？",
    date: "2025-07-25",
    category: "瘦瘦針",
    readTime: "7 分鐘",
    coverImage: "/images/articles/cover-ozempic-puppet.jpg",
    tags: ["瘦瘦針", "荷爾蒙"],
    depth: "指南",
  },
  {
    slug: "ozempic-doctor-warning",
    title: "醫生緊急警告：瘦瘦針讓你失去了什麼？",
    description:
      "37% 擔心營養不足，52% 每週跳過好幾次正餐，31% 根本不知道該吃什麼。",
    date: "2025-08-01",
    category: "瘦瘦針",
    readTime: "7 分鐘",
    coverImage: "/images/articles/cover-ozempic-80percent.jpg",
    tags: ["瘦瘦針", "荷爾蒙"],
    depth: "指南",
  },
  {
    slug: "starch-rescue",
    title: "澱粉吃多了？4 個方法馬上補救",
    description:
      "昨晚壓力太大不小心吃了三個餐包？不用恐慌、不用跑步兩小時。這樣處理就好。",
    date: "2025-10-01",
    category: "飲食方法",
    readTime: "5 分鐘",
    coverImage: "/images/articles/cover-starch-rescue.jpg",
    tags: ["飲食方法", "血糖控制", "外食族"],
    depth: "快讀",
  },
  {
    slug: "willpower-myth",
    title: "「管不住嘴就是沒意志力」？讓科學來打臉這句話",
    seoTitle: "為什麼一直想吃東西？食慾控制不住不是意志力問題",
    description:
      "你管不住嘴不是因為你軟弱，是因為你的飢餓素和瘦體素在背後操控你。科學幫你出一口氣。",
    date: "2026-02-15",
    category: "減肥真相",
    readTime: "6 分鐘",
    featured: true,
    coverImage: "/images/articles/cover-willpower-myth.jpg",
    tags: ["荷爾蒙", "體重迷思", "代謝適應"],
    depth: "快讀",
  },
  {
    slug: "dark-neck-insulin",
    title: "脖子暗暗的洗不乾淨？那不是髒，是你的代謝在求救",
    seoTitle: "脖子黑黑的洗不掉？黑棘皮症與胰島素阻抗的關係",
    description:
      "黑棘皮症是胰島素阻抗最明顯的外在徵兆。你的身體正在用皮膚跟你說話。",
    date: "2026-02-20",
    category: "健檢紅字",
    readTime: "6 分鐘",
    featured: true,
    coverImage: "/images/articles/cover-dark-neck.jpg",
    tags: ["胰島素阻抗", "健檢紅字"],
    depth: "快讀",
  },
  {
    slug: "normal-blood-sugar-trap",
    title: "血糖正常，但下午老是昏沉、腰越來越粗？你的身體可能在硬撐",
    description:
      "體檢數字正常不代表沒事。當胰島素加班加到爆肝，血糖還能撐住——但代價是你的腰圍。",
    date: "2026-03-01",
    category: "健檢紅字",
    readTime: "7 分鐘",
    featured: true,
    coverImage: "/images/articles/cover-blood-sugar-normal.jpg",
    tags: ["胰島素阻抗", "血糖控制", "健檢紅字"],
    depth: "指南",
  },
  {
    slug: "eating-order-blood-sugar",
    title: "不用少吃，只要換順序：研究證實這樣吃血糖少飆 35%",
    seoTitle: "進食順序怎麼吃？研究證實先吃菜再吃飯，血糖少飆 35%",
    description:
      "先菜、再肉、最後飯——同一餐食物，換個順序吃，血糖飆升幅度就能降 35%。",
    date: "2026-03-05",
    category: "飲食方法",
    readTime: "5 分鐘",
    featured: true,
    coverImage: "/images/articles/cover-eating-order.jpg",
    tags: ["飲食方法", "血糖控制", "外食族"],
    depth: "快讀",
  },
  {
    slug: "body-fat-scale-liar",
    title: "你家的體脂計，可能是減肥路上最準的「騙子」",
    description:
      "一個女生在運動中心因為體脂計數字當場哭了出來。但那個數字的變化，大部分是水分和血液循環的影響。",
    date: "2026-03-18",
    category: "減肥真相",
    readTime: "10 分鐘",
    coverImage: "/images/articles/cover-body-fat-scale.jpg",
    tags: ["體重迷思"],
    depth: "指南",
  },
  {
    slug: "cholesterol-not-eggs",
    title: "膽固醇過高？問題可能不是雞蛋，而是你的珍奶",
    seoTitle: "膽固醇過高原因與飲食：為什麼少吃蛋膽固醇還是高？",
    description:
      "為了降膽固醇不敢吃蛋，結果半年後還是高？因為真正的兇手不是雞蛋，是讓身體發炎的精緻食物。",
    date: "2026-01-10",
    category: "健檢紅字",
    readTime: "8 分鐘",
    featured: true,
    coverImage: "/images/articles/cover-cholesterol-inflammation.jpg",
    tags: ["健檢紅字", "發炎", "胰島素阻抗"],
    depth: "指南",
  },
  {
    slug: "blood-pressure-not-salt",
    title: "高血壓？問題可能不是鹽，而是你手上那包零食",
    seoTitle: "高血壓飲食怎麼吃？少鹽沒用，問題可能出在加工食品",
    description:
      "少吃鹽血壓還是降不下來？因為 65-78% 的高血壓是由肥胖引起的，不是鹽。",
    date: "2026-02-01",
    category: "健檢紅字",
    readTime: "12 分鐘",
    coverImage: "/images/articles/cover-blood-pressure.jpg",
    tags: ["健檢紅字", "發炎", "胰島素阻抗"],
    depth: "深度",
  },
  {
    slug: "blood-sugar-insulin-overwork",
    title: "血糖過高？問題可能不是澱粉，而是你的胰島素累壞了",
    seoTitle: "血糖過高怎麼辦？不是少吃澱粉就好，胰島素疲勞才是關鍵",
    description:
      "戒澱粉血糖還是降不下來？問題不是澱粉，是你的胰島素已經加班加到爆肝了。",
    date: "2026-02-10",
    category: "健檢紅字",
    readTime: "12 分鐘",
    coverImage: "/images/articles/cover-blood-sugar-overwork.jpg",
    tags: ["胰島素阻抗", "血糖控制", "健檢紅字"],
    depth: "深度",
  },
  {
    slug: "ozempic-bbc-tsunami",
    title: "她打瘦瘦針瘦了 22 公斤，停針第 3 天海嘯就來了",
    description:
      "BBC 專訪瘦瘦針使用者：停針後食慾像海嘯一樣湧回來。壓抑永遠會有反彈的一天。",
    date: "2026-03-02",
    category: "瘦瘦針",
    readTime: "5 分鐘",
    coverImage: "/images/articles/cover-ozempic-bbc.jpg",
    tags: ["瘦瘦針", "復胖", "荷爾蒙"],
    depth: "快讀",
  },
  {
    slug: "eat-less-move-more-myth",
    title: "「少吃多動」這四個字，害了多少人？",
    seoTitle: "少吃多動沒有瘦？減肥失敗不是你的錯，是荷爾蒙在搞鬼",
    description:
      "你的身體不是計算機。胰島素才是決定你胖不胖的關鍵，不是卡路里。少吃多動從一開始就少算了最關鍵的東西。",
    date: "2026-03-12",
    category: "減肥真相",
    readTime: "10 分鐘",
    featured: true,
    coverImage: "/images/articles/cover-eat-less-move-more.jpg",
    tags: ["體重迷思", "胰島素阻抗", "代謝適應"],
    depth: "指南",
  },
  {
    slug: "ozempic-alternative-abc",
    title: "如果不想打針，還有什麼選擇？",
    description:
      "打針是「租」一個瘦的身體，ABC 是「擁有」一個健康的身體。租的總有一天要還，擁有的才是你的。",
    date: "2026-03-08",
    category: "瘦瘦針",
    readTime: "10 分鐘",
    coverImage: "/images/articles/cover-ozempic-vs-abc.jpg",
    tags: ["瘦瘦針", "復胖", "飲食方法"],
    depth: "指南",
  },
  {
    slug: "socks-story-62kg",
    title: "胖到連穿襪子都要女兒幫忙｜一年後，她瘦了 62 公斤",
    description:
      "俐臻 127→65 公斤。從把自己關在家裡六年、暴食症、憂鬱症，到學會愛自己。如果她能瘦 62 公斤，你的目標可能只是她的零頭。",
    date: "2026-03-10",
    category: "學員故事",
    readTime: "15 分鐘",
    featured: true,
    coverImage: "/images/articles/cover-student-minus62kg.jpg",
    tags: ["學員故事", "體重迷思"],
    depth: "深度",
  },
  {
    slug: "chicken-soup-love-story",
    title: "那碗雞湯征服了他的胃，但我卻被誤認為他媽媽",
    description:
      "沛蓁 85→67 公斤。多年紅字的血壓正常了、鼻過敏消了、偏頭痛沒了。她不想當被照顧的那一方，想和他並肩同行。",
    date: "2026-03-15",
    category: "學員故事",
    readTime: "10 分鐘",
    coverImage: "/images/articles/cover-student-minus18kg.jpg",
    tags: ["學員故事", "健檢紅字", "發炎"],
    depth: "指南",
  },
  {
    slug: "wenwen-mom-story",
    title: "「媽媽，同學說妳好胖…」一句話，讓她從天堂掉到地獄",
    description:
      "溫溫，產後五年體重爬到快 80 公斤。偏頭痛、唇炎、肚臍炎、尿道炎輪流來。兩年後瘦了 20 公斤，不用再吃止痛藥，從躲鏡頭變成老公的專屬模特兒。",
    date: "2026-03-21",
    category: "學員故事",
    readTime: "8 分鐘",
    featured: true,
    coverImage: "/images/student-wenwen.jpg",
    tags: ["學員故事", "發炎", "健檢紅字"],
    depth: "指南",
  },
  {
    slug: "ozempic-complete-guide",
    title: "瘦瘦針完全指南：打之前，你需要知道的所有事",
    description:
      "GLP-1 機制、效果數據、停針復胖率、副作用完整清單、誰適合打、不打針的替代方案。搞懂了再做決定。",
    date: "2026-03-21",
    category: "瘦瘦針",
    readTime: "18 分鐘",
    featured: true,
    coverImage: "/images/articles/cover-ozempic-guide.jpg",
    tags: ["瘦瘦針", "復胖", "胰島素阻抗", "荷爾蒙"],
    depth: "深度",
  },
  {
    slug: "rebound-weight-science",
    title: "復胖的科學：為什麼你每次都胖回來，而且比上次更重？",
    description:
      "你的身體用五招同時把你拉回去：降代謝、改飢餓荷爾蒙、吃肌肉、改脂肪細胞、加重胰島素阻抗。搞懂這套系統，才能打破復胖循環。",
    date: "2026-03-21",
    category: "減肥真相",
    readTime: "18 分鐘",
    featured: true,
    coverImage: "/images/articles/cover-rebound-science.jpg",
    tags: ["復胖", "代謝適應", "荷爾蒙", "胰島素阻抗"],
    depth: "深度",
  },
  {
    slug: "insulin-resistance-complete-guide",
    title: "胰島素阻抗完全解析：為什麼你吃很少還是瘦不下來？",
    seoTitle: "胰島素阻抗是什麼？症狀、原因與飲食改善方法完整指南",
    description:
      "胰島素是脂肪的開關。當它一直鎖著，你吃再少也瘦不下來。從原理到自我檢測到修復方法，一篇搞懂。",
    date: "2026-03-21",
    category: "健檢紅字",
    readTime: "20 分鐘",
    featured: true,
    coverImage: "/images/articles/cover-insulin-guide.jpg",
    tags: ["胰島素阻抗", "血糖控制", "代謝適應", "健檢紅字"],
    depth: "深度",
  },
  {
    slug: "metabolism-reset-vs-ozempic",
    title: "代謝重建 vs 瘦瘦針：花錢買的瘦，跟自己學來的瘦，差在哪？",
    description:
      "打針是「租」一個瘦的身體，代謝重建是「擁有」一個健康的身體。原理、速度、復胖率、副作用、費用——逐項比給你看。",
    date: "2026-03-21",
    category: "瘦瘦針",
    readTime: "8 分鐘",
    featured: true,
    coverImage: "/images/articles/cover-reset-vs-ozempic.jpg",
    tags: ["瘦瘦針", "復胖", "胰島素阻抗"],
    depth: "指南",
  },
  {
    slug: "abc-vs-intermittent-fasting",
    title: "ABC 代謝重建 vs 168 間歇性斷食：為什麼你 168 斷食失敗了？",
    description:
      "168 只管「什麼時候吃」，ABC 處理的是「你的身體怎麼了」。一個是時間策略，一個是系統修復。差別在這裡。",
    date: "2026-03-21",
    category: "減肥真相",
    readTime: "8 分鐘",
    featured: true,
    coverImage: "/images/articles/cover-abc-vs-168.jpg",
    tags: ["代謝適應", "胰島素阻抗", "體重迷思"],
    depth: "指南",
  },
  {
    slug: "metabolism-reset-vs-dieting",
    title: "代謝重建 vs 節食：為什麼你越少吃，反而越難瘦？",
    description:
      "節食在跟你的身體打仗——代謝下降、肌肉流失、荷爾蒙反撲。ABC 代謝重建反過來：吃飽、修復代謝、讓身體自己願意瘦。",
    date: "2026-03-21",
    category: "減肥真相",
    readTime: "8 分鐘",
    featured: true,
    coverImage: "/images/articles/cover-reset-vs-dieting.jpg",
    tags: ["代謝適應", "復胖", "體重迷思", "胰島素阻抗"],
    depth: "指南",
  },
  {
    slug: "walking-breathless-lifespan",
    title: "走個路就喘？小心，你可能正在縮短壽命",
    description:
      "BMJ 追蹤 50 萬人發現：走路喘的人，就算體重正常，死亡風險是快走族群的兩倍。最簡單的改善方式：每天多走 5000 步。",
    date: "2026-03-21",
    category: "健檢紅字",
    readTime: "6 分鐘",
    featured: true,
    coverImage: "/images/articles/cover-walking-breathless.jpg",
    tags: ["健檢紅字", "胰島素阻抗", "發炎"],
    depth: "快讀",
  },
  {
    slug: "snack-waste-mindset",
    title: "「不吃完好像很浪費」——這個想法，可能讓你一直瘦不下來",
    description:
      "朋友送零食、拜拜的餅乾、飯店送的飲料。不吃好像浪費？多想一層：吃下去對身體好嗎？不吃，才不是浪費。",
    date: "2026-03-21",
    category: "飲食方法",
    readTime: "5 分鐘",
    coverImage: "/images/articles/cover-snack-waste.jpg",
    tags: ["飲食方法", "體重迷思"],
    depth: "快讀",
  },
  {
    slug: "body-fat-wont-drop",
    title: "體脂一直降不下來？你可能在看錯指標",
    description:
      "明明有瘦但體脂不降？體脂是相對數字，關鍵是肌肉量。飲食佔 7 成、運動佔 3 成，順序搞對了體脂自然往下走。",
    date: "2026-03-21",
    category: "減肥真相",
    readTime: "6 分鐘",
    coverImage: "/images/articles/cover-body-fat-wont-drop.jpg",
    tags: ["體重迷思", "飲食方法"],
    depth: "快讀",
  },
  {
    slug: "bento-vs-bubble-tea",
    title:
      "一杯全糖珍奶 700 大卡，一個滷雞腿便當也差不多 700 大卡。但只有一個會讓你胖",
    description:
      "同樣 700 大卡，一個讓你飽到晚餐，一個讓你餓了一下午還多存了脂肪。因為你的身體不是在算熱量，是在聽訊號。",
    date: "2026-03-21",
    category: "飲食方法",
    readTime: "7 分鐘",
    coverImage: "/images/articles/cover-bento-vs-bubbletea.jpg",
    tags: ["飲食方法", "血糖控制", "胰島素阻抗"],
    depth: "指南",
  },
  {
    slug: "triglycerides-not-fat",
    title: "三酸甘油脂偏高？問題不是油吃太多，是澱粉吃太多",
    seoTitle: "三酸甘油脂偏高原因：為什麼少油還是紅字？營養師沒告訴你的真相",
    description:
      "少吃油八年三酸甘油脂還是紅字？因為讓你三酸甘油脂飆高的不是油，是你的肝臟在把澱粉加工成油。20 年 2 萬人的數據跟你以為的完全相反。",
    date: "2026-03-21",
    category: "健檢紅字",
    readTime: "8 分鐘",
    coverImage: "/images/articles/cover-triglycerides.jpg",
    tags: ["健檢紅字", "胰島素阻抗", "血糖控制"],
    depth: "指南",
  },
  {
    slug: "ultra-processed-food",
    title: "你每天吃的東西，有一半以上不算食物",
    description:
      "超商三明治、調味優格、低卡餅乾——聽起來很正常，但翻到背面看成分表，你的身體收到的是一堆它不認識的東西。2026 年研究：心臟病風險高出 47%。",
    date: "2026-03-21",
    category: "飲食方法",
    readTime: "7 分鐘",
    coverImage: "/images/articles/cover-ultra-processed.jpg",
    tags: ["飲食方法", "發炎"],
    depth: "指南",
  },
  {
    slug: "dentist-weight-loss",
    title: "你瘦不下來，可能該去看牙醫",
    description:
      "牙周病讓你的身體 24 小時慢性發炎，發炎是胰島素阻抗的三大推手之一。我自己重度牙周病都不知道，處理之後明顯有感。",
    date: "2026-03-21",
    category: "健檢紅字",
    readTime: "8 分鐘",
    coverImage: "/images/articles/cover-dentist-weight.jpg",
    tags: ["發炎", "胰島素阻抗", "健檢紅字"],
    depth: "指南",
  },
  {
    slug: "whole-milk-kids-thinner",
    title: "喝全脂牛奶的小孩，反而比喝低脂的瘦",
    description:
      "2026 美國飲食指南 60 年最大改動：全脂回歸、超加工食品首度被點名。你怕了脂肪 60 年，但真正讓你胖的不是脂肪，是怕脂肪之後用什麼替代了它。",
    date: "2026-03-21",
    category: "飲食方法",
    readTime: "8 分鐘",
    coverImage: "/images/articles/cover-whole-milk.jpg",
    tags: ["飲食方法", "體重迷思", "血糖控制"],
    depth: "指南",
  },
  {
    slug: "carb-guilt-trap",
    title: "你吃的那碗飯，根本不會讓你變胖",
    description:
      "讓你變胖的不是那碗飯，是你吃完之後的罪惡感。罪惡感→壓力→皮質醇→血糖推高→胰島素鎖住脂肪→少吃補救→代謝下降→暴吃→更胖。循環的起點不是食物，是你對食物說的那句話。",
    date: "2026-03-21",
    category: "減肥真相",
    readTime: "8 分鐘",
    coverImage: "/images/articles/cover-carb-guilt.jpg",
    tags: ["體重迷思", "血糖控制", "荷爾蒙"],
    depth: "指南",
  },
  {
    slug: "soft-belly-fat-progress",
    title: "減到一半覺得肉變鬆了？先別放棄，你離突破可能只剩一步",
    description:
      "肉從硬變軟不是退步，是脂肪正在撤退。油被搬走了，身體先用水「佔位」。等它確認你是認真的，就會一口氣清掉——體重突然掉一到兩公斤，腰圍明顯縮小。",
    date: "2026-03-21",
    category: "減肥真相",
    readTime: "8 分鐘",
    tags: ["體重迷思", "代謝適應"],
    depth: "指南",
  },
  {
    slug: "over-40-belly-fat",
    title:
      "過了 40 歲，褲子越買越大件？不是你不夠努力，是你的身體換了一套規則",
    seoTitle: "40歲後肚子越來越大怎麼辦？中年發胖的真正原因與解法",
    description:
      "同一碗飯，在 30 歲和 45 歲的身體裡走了完全不同的路。荷爾蒙下降→胰島素敏感度降低→肌肉流失→脂肪往肚子搬家。你需要的不是更努力，是學會新的操作方式。",
    date: "2026-03-21",
    category: "減肥真相",
    readTime: "10 分鐘",
    tags: ["荷爾蒙", "胰島素阻抗", "代謝適應", "體重迷思"],
    depth: "指南",
  },
  {
    slug: "daily-weigh-in-trap",
    title:
      "她聽說每天量體重會瘦更快，認真照做了——結果越量越瘦不下來",
    description:
      "每天量體重不是問題，量完會焦慮才是問題。焦慮→皮質醇→鎖住脂肪→拆掉肌肉。越焦慮越難瘦，不是你不夠拼，是壓力把代謝鎖住了。",
    date: "2026-03-21",
    category: "減肥真相",
    readTime: "8 分鐘",
    tags: ["體重迷思", "荷爾蒙", "代謝適應"],
    depth: "指南",
  },
  {
    slug: "weight-down-body-fat-stuck",
    title:
      "她重訓三個月，體重有降，體脂完全不動——問題出在哪？",
    description:
      "體重降+體脂不動=肌肉跟脂肪一起掉=代謝被關機。吃太少+動太多+壓力大，身體進入保護模式。有時候少動一點、多吃一點，身體反而願意放開脂肪。",
    date: "2026-03-21",
    category: "減肥真相",
    readTime: "8 分鐘",
    tags: ["體重迷思", "代謝適應", "荷爾蒙"],
    depth: "指南",
  },
  {
    slug: "effort-rebound-paradox",
    title: "為什麼越努力減肥的人，反而越容易復胖？",
    description:
      "節食、168、低碳、代餐——聽起來不一樣，但你的身體經歷的都是「被剝奪」。它會記住你對它做過的事，每次復胖都比上次更胖，因為你的身體越來越不信任你了。",
    date: "2026-03-21",
    category: "減肥真相",
    readTime: "8 分鐘",
    tags: ["復胖", "代謝適應", "體重迷思"],
    depth: "指南",
  },
  {
    slug: "huilan-reborn-at-53",
    title: "先生突然離世，她做的第一件事不是哭泣",
    description:
      "慧蘭，53 歲，喪偶單親。從深夜暴食 12 個甜甜圈到班上的開心果，從夏天穿外套遮肚子到自信穿上紅色洋裝。53 歲看起來像 40 歲——不是奇蹟，是決心加上對的方法。",
    date: "2026-03-21",
    category: "學員故事",
    readTime: "12 分鐘",
    featured: true,
    coverImage: "/images/student-huilan-story.jpg",
    tags: ["學員故事"],
    depth: "深度",
  },
  {
    slug: "meimei-cosmetic-surgery-refused",
    title: "醫美診所拒絕幫她抽脂",
    description:
      "美美，168 公分差點破百。被醫美退貨、姊姊切胃爆瘦她沒有跟風。她選了一條慢的路，從 9 字頭到 7 字頭、健檢全部正常。慢路才是真正的快。",
    date: "2026-03-21",
    category: "學員故事",
    readTime: "10 分鐘",
    featured: true,
    coverImage: "/images/student-meimei.jpg",
    tags: ["學員故事", "健檢紅字"],
    depth: "指南",
  },
  {
    slug: "no-starving-eat-order-matters",
    title: "不用餓肚子也能瘦，研究證實重點不是幾點吃",
    description:
      "德國研究讓兩組人做 168 斷食、吃一樣的熱量。結果：忍了 16 小時，血糖、胰島素、血脂全部沒差。忍餓沒用，換個順序吃才有用。",
    date: "2026-03-22",
    category: "減肥真相",
    readTime: "7 分鐘",
    featured: true,
    coverImage: "/images/articles/cover-no-starving.jpg",
    tags: ["體重迷思", "血糖控制", "飲食方法", "代謝適應"],
    depth: "指南",
  },
  {
    slug: "belly-fat-stress-not-food",
    title: "肚子怎麼都消不掉？研究發現問題可能不在吃",
    description:
      "手臂瘦了、腿也細了，就是肚子不動？腹部是皮質醇受體最密集的地方。你越拼命減，身體越拼命往肚子存。問題不是吃太多，是壓力太大。",
    date: "2026-03-22",
    category: "減肥真相",
    readTime: "6 分鐘",
    featured: true,
    tags: ["荷爾蒙", "體重迷思", "代謝適應"],
    depth: "快讀",
  },
  {
    slug: "eating-out-one-rule",
    title: "三餐都外食也能瘦？記住一個原則就好",
    description:
      "超過一半的學員從頭到尾都是外食，照樣瘦下來。不是找特別的餐廳，是學會一個原則：每一餐，先確認蛋白質在哪裡。自助餐、超商、麵店、便當店實戰教學。",
    date: "2026-03-22",
    category: "飲食方法",
    readTime: "7 分鐘",
    featured: true,
    tags: ["飲食方法", "外食族", "血糖控制"],
    depth: "指南",
  },
  {
    slug: "weight-plateau-not-failure",
    title: "體重不動，不是你失敗了，是你的身體正在做一件重要的事",
    description:
      "停滯期不是失敗，是大腦在確認新的體重是不是真的。吃更少、動更多反而讓它更抵抗。你要做的是穩住，讓身體知道你是認真的。",
    date: "2026-03-22",
    category: "減肥真相",
    readTime: "8 分鐘",
    featured: true,
    tags: ["體重迷思", "代謝適應", "荷爾蒙"],
    depth: "指南",
  },
  {
    slug: "cant-spot-reduce",
    title: "大腿怎麼都瘦不下來？因為「局部瘦身」根本不存在",
    description:
      "你的身體決定脂肪從哪裡燒，不是你。但你可以改變整體體脂率——頑固的地方只是排在後面，不是永遠不會動。",
    date: "2026-03-22",
    category: "減肥真相",
    readTime: "5 分鐘",
    tags: ["體重迷思"],
    depth: "快讀",
  },
  {
    slug: "where-to-start",
    title: "想瘦但完全不知道從哪開始？從這一件事就好",
    description:
      "資訊太多反而不知道該做什麼？不用大改造，從今天午餐開始：每一餐，加一份蛋白質。這是 ABC 加法思維的第一步。",
    date: "2026-03-22",
    category: "飲食方法",
    readTime: "5 分鐘",
    tags: ["飲食方法", "外食族"],
    depth: "快讀",
  },
  {
    slug: "midnight-cravings-science",
    title: "明明不餓，但就是想吃——宵夜和嘴饞的真正原因",
    description:
      "晚上嘴饞不是意志力差。白天血糖坐雲霄飛車、壓力讓飢餓素暴走、情緒用食物止痛——三個原因搞懂，嘴饞自己會消失。",
    date: "2026-03-22",
    category: "減肥真相",
    readTime: "8 分鐘",
    tags: ["荷爾蒙", "血糖控制", "體重迷思"],
    depth: "指南",
  },
  {
    slug: "post-workout-eating",
    title: "運動完到底該不該吃？吃錯比不吃更可惜",
    description:
      "運動完不吃不是在省，是在浪費你練的。30-60 分鐘內肌肉最容易吸收營養，吃對東西讓訓練效果最大化。",
    date: "2026-03-22",
    category: "飲食方法",
    readTime: "5 分鐘",
    tags: ["飲食方法", "血糖控制"],
    depth: "快讀",
  },
  {
    slug: "period-weight-fluctuation",
    title: "生理期前體重突然多 2 公斤？先別崩潰，那不是脂肪",
    description:
      "黃體素讓身體留住水分，血清素下降讓你想吃甜的。這不是你的錯，是荷爾蒙在執行正常程序。不要在這時候逼自己吃更少。",
    date: "2026-03-22",
    category: "減肥真相",
    readTime: "6 分鐘",
    tags: ["荷爾蒙", "體重迷思"],
    depth: "快讀",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return ARTICLES.map((a) => a.slug);
}

export function getArticlesByTag(tag: Tag): Article[] {
  return ARTICLES.filter((a) => a.tags.includes(tag));
}

export function getAllTags(): { tag: Tag; count: number }[] {
  const tagMap = new Map<Tag, number>();
  for (const article of ARTICLES) {
    for (const tag of article.tags) {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
    }
  }
  return Array.from(tagMap.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}
