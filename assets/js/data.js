/* ==========================================================================
   HOKKAIDO TRAVEL JOURNAL — 行程資料
   --------------------------------------------------------------------------
   內容依 Notion「2026北海道」頁面整理（2026/11/17 擷取）。
   想修改行程，只要改這個檔案，網站會自動更新。

   flag: 對應下方 confirms 的 id，會在行程旁顯示「需確認」標記。
   place: 對應 places 的 id，會顯示照片與地圖連結。
   type: move（交通）/ spot（景點）/ food（餐飲）/ stay（住宿）/ shop（購物）
   ========================================================================== */

window.TRIP = {
  meta: {
    title: "HOKKAIDO TRAVEL JOURNAL",
    titleZh: "北海道 冬日旅行手帳",
    start: "2026-12-17",
    end: "2026-12-23",
    dateText: "2026/12/17 — 12/23",
    lengthText: "7 天 6 夜",
    lengthEn: "7 Days 6 Nights",
    people: "3 位大人",
    transport: "JR・地鐵・市電・巴士（不自駕）",
    stays: "札幌 5 晚＋登別 第一滝本館 1 晚",
    route: "Sapporo · Otaru · Noboribetsu",
    source: "Notion「2026北海道」",
    plannedAt: "2026/11/17",
    intro: [
      "十二月的北海道，白天很短，下午四點左右就日落。這趟旅行以札幌為據點，住在狸小路旁的 GRANBELL HOTEL，用五個晚上慢慢走過札幌的神社、北海道大學、時計台與紅磚廳舍，傍晚到大通公園的聖誕市集看燈。",
      "其中一天到小樽，吃牛排飯、逛運河與堺町通，再上天狗山看夕陽；一天往南區，拜訪真駒內瀧野靈園的摩艾石像與安藤忠雄設計的頭大佛，最後在藻岩山把日景和夜景一次看完。",
      "第五天早上去場外市場吃帝王蟹和拉麵，下午參拜北海道神宮、到白色戀人公園看聖誕燈飾。最後一晚移到登別：看尼克斯海洋公園的企鵝散步、走地獄谷、泡溫泉，隔天從新千歲機場回台中。"
    ]
  },

  flights: [
    {
      no: "JX318", date: "2026/12/17（四）", from: "RMQ", fromName: "台中國際機場", fromTerm: "2 航廈",
      dep: "10:20", to: "CTS", toName: "新千歲機場", toTerm: "國際航廈", arr: "15:00",
      dur: "3 小時 40 分", plane: "Airbus A321neo", cabin: "經濟艙", tz: "時間皆為當地時間"
    },
    {
      no: "JX319", date: "2026/12/23（三）", from: "CTS", fromName: "新千歲機場", fromTerm: "國際航廈",
      dep: "16:00", to: "RMQ", toName: "台中國際機場", toTerm: "2 航廈", arr: "19:55",
      dur: "4 小時 55 分", plane: "Airbus A321neo", cabin: "經濟艙", tz: "時間皆為當地時間"
    }
  ],

  /* ----------------------------------------------------------------------
     景點・餐廳・住宿
     img: assets/img/ 底下的檔名；sample: true 代表照片為「料理示意」，非該店實拍
     ---------------------------------------------------------------------- */
  places: {
    granbell: { name: "札幌グランベルホテル狸小路", zh: "GRANBELL HOTEL TANUKI, SAPPORO", kind: "stay", img: "tanuki", sample: true, sampleText: "狸小路示意",
      when: "12/17–12/22（5 晚）", note: "札幌市中央區南3条西8丁目10-1。", map: "札幌グランベルホテル狸小路" },
    noboriHotel: { name: "第一滝本館", zh: "Dai-ichi Takimotokan・登別溫泉", kind: "stay", img: "takimoto",
      when: "12/22（1 晚）", note: "登別市登別溫泉町55，離地獄谷很近。入住 14:00、退房 10:00。",
      mapUrl: "https://maps.app.goo.gl/qBdp9o2QTRVYTPav6", links: [{ t: "入住／寄存資訊", u: "https://takimotokan.co.jp/en/faq/" }] },

    station: { name: "JR 札幌站", zh: "Sapporo Station", kind: "spot", img: "station", map: "JR札幌駅" },
    tanuki: { name: "狸小路商店街", zh: "Tanukikoji", kind: "spot", img: "tanuki", note: "藥妝、便利商店都在這一帶。", map: "狸小路商店街" },
    daikokuya: { name: "旭川成吉思汗 大黒屋 札幌2號店", zh: "成吉思汗烤羊肉", kind: "food", img: "jingisukan", sample: true,
      when: "12/17（四）19:30", status: "已訂位", statusTone: "ok",
      note: "南5条西5丁目1-2 メイプル通りビル2F（薄野附近）。12/17 19:30 已訂位。",
      map: "大黒屋 札幌2号店", links: [{ t: "官方預約頁", u: "https://yoyaku.toreta.in/daikokuya-sapporo2go" }] },

    suwa: { name: "札幌諏訪神社", zh: "Suwa Shrine", kind: "spot", img: "suwa", note: "神社參拜與御守，季節裝飾依現場。", map: "札幌諏訪神社" },
    hokudai: { name: "北海道大學 札幌校區", zh: "Hokkaido University", kind: "spot", img: "hokudai", note: "冬季雪景與克拉克像；博物館不強求。", map: "北海道大学 札幌キャンパス" },
    sama: { name: "Soup Curry SAMA 札幌大通店", zh: "湯咖哩", kind: "food", img: "soupcurry", sample: true,
      when: "12/18（五）11:30", status: "已訂位", statusTone: "ok", note: "11:30 已確認訂位。南3条西5丁目33 エリオ狸小路 2F。", map: "スープカレー SAMA 大通店" },
    clock: { name: "札幌市時計台", zh: "Sapporo Clock Tower", kind: "spot", img: "clock", note: "以外觀及拍照為主，室內視開放狀況。", map: "札幌市時計台" },
    akarenga: { name: "北海道廳舊本廳舍", zh: "紅磚廳舍", kind: "spot", img: "akarenga", note: "以外觀及拍照為主，室內視開放狀況。", map: "北海道庁旧本庁舎" },
    nanas: { name: "nana's green tea 札幌PARCO店", zh: "抹茶甜點", kind: "food", img: "matcha", sample: true,
      when: "12/18（五）14:20", status: "現場入座", statusTone: "calm", note: "PARCO 5F。抹茶拿鐵、抹茶聖代或甜點，以當季菜單為準；PARCO 一般至 20:00。",
      map: "nana's green tea 札幌パルコ店", links: [{ t: "店家資訊", u: "https://sapporo.parco.jp/shop/detail/?cd=007628" }] },
    xmas: { name: "慕尼黑聖誕市集・白色燈樹節", zh: "大通公園", kind: "spot", img: "xmas",
      when: "2026/11/20–12/25，11:00–21:00", note: "入夜拍燈飾。", map: "大通公園 ミュンヘン・クリスマス市",
      links: [{ t: "2026 聖誕市集", u: "https://www.sapporo.travel/white-illumination/event/munich/" }] },
    tvtower: { name: "札幌電視塔", zh: "Sapporo TV Tower", kind: "spot", img: "tvtower", map: "さっぽろテレビ塔" },
    kplace: { name: "焼肉 徳寿 K-place", zh: "燒肉", kind: "food", img: "yakiniku", sample: true,
      when: "12/18（五）18:30", status: "尚未訂位", statusTone: "warn", note: "JR 札幌站附近「カメイ札幌駅前ビル10F」，預計 3 位大人。",
      map: "焼肉 徳寿 K-place", links: [{ t: "官方線上訂位", u: "https://yoyaku.toreta.in/k-place/" }, { t: "官網", u: "https://www.tokuju.com/shop/k-place/" }] },
    pal: { name: "Parfaiteria PaL", zh: "札幌夜芭菲", kind: "food", img: "parfait", sample: true,
      when: "12/18（五）20:30", status: "不接受訂位", statusTone: "calm", note: "薄野、南4条西2丁目；18:00 開門；現場排隊，可能候位。",
      map: "Parfaiteria PaL 札幌", links: [{ t: "店家營業資訊", u: "https://yoru-parfait-gaku.com/parfait/shop-info/" }] },

    baal: { name: "CAFE' BAAL", zh: "カフェバール・牛排飯", kind: "food", img: "steakdon", sample: true,
      when: "12/19（六）11:30–12:30", status: "不接受預約", statusTone: "calm",
      note: "小樽市稲穂3丁目8-10。週二至週日 11:30–14:30、17:30–21:00；週一公休。現場候位，營業時間如有異動以店家公告為準。",
      mapUrl: "https://maps.app.goo.gl/ekGmMSpPSbuvtrms5", links: [{ t: "營業資訊（Tabelog）", u: "https://tabelog.com/tw/hokkaido/A0106/A010601/1052877/" }] },
    otaruCanal: { name: "小樽運河", zh: "Otaru Canal", kind: "spot", img: "otaru-canal", note: "傍晚 18:00–18:40 看運河夜間點燈（依當年度活動與天氣）。", map: "小樽運河" },
    sakaimachi: { name: "堺町通", zh: "Sakaimachi Street", kind: "spot", img: "sakaimachi", map: "堺町通り 小樽" },
    musicbox: { name: "小樽音樂盒堂", zh: "Otaru Music Box Museum", kind: "spot", img: "musicbox", note: "同一帶還有北一硝子（玻璃小物）。", map: "小樽オルゴール堂 本館" },
    letao: { name: "LeTAO 小樽洋菓子舖", zh: "起司蛋糕・下午茶", kind: "food", img: "letao",
      when: "12/19（六）午後", status: "現場購買", statusTone: "calm", note: "LeTAO 下午茶／起司蛋糕、買小樽伴手禮。", map: "小樽洋菓子舗ルタオ 本店" },
    tengu: { name: "天狗山纜車", zh: "夕陽與小樽夜景", kind: "spot", img: "tengu", when: "12/19（六）15:30–16:50",
      note: "日落約 16:04，纜車遇風雪可能停駛。小樽站搭中央巴士 9 號，冬季班次另查。", map: "小樽天狗山ロープウエイ" },

    moai: { name: "真駒內瀧野靈園 摩艾石像", zh: "33 尊摩艾", kind: "spot", img: "moai", note: "冬季雪景拍照，尊重墓園空間。", map: "真駒内滝野霊園 モアイ像" },
    atama: { name: "頭大佛", zh: "安藤忠雄設計", kind: "spot", img: "atama", when: "冬季開放約 10:00–15:00",
      note: "大佛、混凝土隧道、園區咖啡。", map: "頭大仏 真駒内滝野霊園", links: [{ t: "參觀資訊", u: "https://www.takinoreien.com/" }] },
    moiwa: { name: "藻岩山纜車・山頂觀景台", zh: "Mt. Moiwa", kind: "spot", img: "moiwa", when: "12/20（日）15:30–17:30",
      note: "日落約 16:02，白天與夜景一次看；強風可能停駛。", map: "もいわ山ロープウェイ 山麓駅", links: [{ t: "藻岩山纜車官網", u: "https://mt-moiwa.jp/" }] },

    jogai: { name: "札幌場外市場", zh: "Sapporo Curb Market", kind: "spot", img: "jogai", note: "東西線二十四軒站步行可到。", map: "札幌場外市場" },
    crab: { name: "根室杉山水產 UME堂", zh: "帝王蟹海鮮早午餐", kind: "food", img: "kingcrab", sample: true,
      when: "12/21（一）09:00", status: "店家已確認", statusTone: "calm",
      note: "札幌場外市場內（中央區北11条西22丁目）。先問蟹種、重量、總價。",
      mapUrl: "https://maps.app.goo.gl/PvbUW3zJbGQ2npHG7" },
    tokuichi: { name: "NOUILLES JAPONAISE とくいち", zh: "Tokuichi 拉麵", kind: "food", img: "ramen", sample: true,
      when: "12/21（一）11:00", status: "不接受預約", statusTone: "calm",
      note: "場外市場區、二十四軒站步行約 6 分鐘；09:00–15:00、週三休，排隊時間不一定。",
      map: "NOUILLES JAPONAISE とくいち", links: [{ t: "店家資訊（Tabelog）", u: "https://tabelog.com/hokkaido/A0101/A010105/1073732/" }] },
    jingu: { name: "北海道神宮", zh: "圓山公園", kind: "spot", img: "jingu", note: "12 月日照短，參拜放白天。", map: "北海道神宮" },
    shiroi: { name: "白色戀人公園", zh: "Shiroi Koibito Park", kind: "spot", img: "shiroi", when: "12/21（一）14:20–17:10",
      note: "付費區最晚入場 16:30；白色戀人霜淇淋。2026 聖誕燈飾官方點燈 16:00–19:00。", map: "白い恋人パーク",
      links: [{ t: "2026 點燈資訊", u: "https://www.shiroikoibitopark.jp/illumination/" }] },

    nixe: { name: "登別尼克斯海洋公園", zh: "Noboribetsu Marine Park Nixe", kind: "spot", img: "nixe", note: "JR 登別站步行約 5 分鐘。12/22 入園時辦理行李直送第一滝本館，每件 ¥1,200；園區寄存每件 ¥500 作備案。",
      map: "登別マリンパークニクス", links: [{ t: "官方冬季表演時刻", u: "https://nixe-aqua.com/attractions/winter/" }, { t: "官方行李配送／寄存資訊", u: "https://nixe-aqua.com/guide/" }] },
    penguin: { name: "企鵝散步", zh: "11:00 首選／14:15 備案", kind: "spot", img: "penguin", sample: true, sampleText: "企鵝散步示意",
      note: "最重要行程，建議提前 10 分鐘到。企鵝可能因天氣／氣溫取消。" },
    jigoku: { name: "登別地獄谷", zh: "Jigokudani", kind: "spot", img: "jigoku", note: "下雪注意腳下，日落早。", map: "登別地獄谷" },
    onsen: { name: "登別溫泉街", zh: "Noboribetsu Onsen", kind: "spot", img: "onsen", map: "登別温泉" },
    cts: { name: "新千歲機場", zh: "New Chitose Airport", kind: "spot", img: "cts", note: "ROYCE'、白色戀人、六花亭、北海道牛奶點心等，視航廈店家。", map: "新千歳空港 国際線ターミナル" },

    hanamaru: { name: "回転寿司 根室花まる ココノススキノ店", zh: "迴轉壽司", kind: "food", img: "sushi", sample: true,
      when: "12/20（日）晚餐", status: "不接受訂位", statusTone: "calm",
      note: "南4条西4丁目1番1 ココノススキノ地下1階，市電「すすきの」站旁。11:00–21:00（最後點餐 20:30）。客滿時在店門口發券機抽號碼牌，掃 QR code 可遠端看還剩幾組、用 LINE 或 email 叫號；叫號 15 分鐘內沒到會取消，全員到齊才帶位。",
      map: "回転寿司 根室花まる ココノススキノ店", links: [{ t: "官方店舖資訊", u: "https://www.sushi-hanamaru.com/store/details/cocono.html" }] }
  },

  /* ---------------------------------------------------------------------- */
  days: [
    {
      n: 1, date: "2026-12-17", md: "12.17", dow: "THU", dowZh: "四",
      title: "抵達札幌", sub: "UNIQLO＋成吉思汗",
      focus: "入住、UNIQLO 買保暖衣、19:30 大黑屋",
      cover: "tanuki",
      spots: ["station", "granbell", "daikokuya", "tanuki"],
      timeline: [
        { t: "08:30", title: "台中機場集合", note: "原行程", type: "move" },
        { t: "10:20", t2: "15:00", title: "台中 → 新千歲機場（JX318）", note: "原航班時間，仍以機票為準", type: "move" },
        { t: "15:00", t2: "16:30", title: "入境、領行李", note: "不排緊湊", type: "move" },
        { t: "16:30", t2: "17:30", title: "JR 快速 Airport 至札幌站，地鐵或步行至狸小路", note: "原先記錄 JR 自由席參考 ¥1,200，請以實際票價為準", type: "move", place: "station" },
        { t: "17:30", t2: "18:10", title: "GRANBELL HOTEL TANUKI, SAPPORO Check-in", note: "先放行李、休息", type: "stay", place: "granbell" },
        { t: "18:10", t2: "19:00", title: "UNIQLO 札幌三越店（本館 10 樓）", note: "大通地區，通常至 20:00；先買 HEATTECH／手套／襪子。若入境延遲，可改在 12/18 去", type: "shop", map: "ユニクロ 札幌三越店" },
        { t: "19:30", t2: "20:50", title: "旭川成吉思汗 大黒屋 札幌2號店", note: "薄野附近，19:30 已訂位", type: "food", place: "daikokuya" },
        { t: "21:00", t2: "後", title: "狸小路散步、便利商店或藥妝", note: "第一天主要休息，購物不必買太多", type: "shop", place: "tanuki" }
      ],
      notes: ["大黑屋札幌2號店地址「南5条西5丁目1-2 メイプル通りビル2F」。"]
    },
    {
      n: 2, date: "2026-12-18", md: "12.18", dow: "FRI", dowZh: "五",
      title: "札幌北區＋市中心", sub: "諏訪神社・紅磚・SAMA・北大・燒肉・夜芭菲",
      focus: "諏訪神社、紅磚廳舍與時計台、11:30 SAMA、北海道大學、抹茶咖啡、18:30 德壽燒肉、夜芭菲",
      cover: "akarenga",
      spots: ["suwa", "akarenga", "clock", "sama", "hokudai", "nanas", "xmas", "tvtower", "kplace", "pal"],
      timeline: [
        { t: "08:40", title: "飯店出發", note: "走到東豐線車站（大通），往北13條東", type: "move" },
        { t: "09:10", t2: "09:50", title: "札幌諏訪神社（Suwa Shrine）", note: "神社參拜與御守，季節裝飾依現場", type: "spot", place: "suwa" },
        { t: "09:50", t2: "10:20", title: "往北海道廳舊本廳舍", note: "東豐線 北13條東 → さっぽろ，步行到紅磚廳舍", type: "move" },
        { t: "10:20", t2: "11:10", title: "北海道廳舊本廳舍（紅磚）、札幌時計台", note: "以外觀及拍照為主，室內視開放狀況（原排 13:00，與北海道大學對調）", type: "spot", place: "akarenga" },
        { t: "11:10", t2: "11:30", title: "步行到 SAMA", note: "時計台 → 狸小路 5 丁目（南3条西5丁目），約 15 分鐘", type: "move" },
        { t: "11:30", t2: "12:40", title: "Soup Curry SAMA 札幌大通店", note: "11:30 已確認訂位；南3条西5丁目33 エリオ狸小路 2F", type: "food", place: "sama" },
        { t: "12:40", t2: "13:00", title: "往北海道大學", note: "地鐵南北線 大通 → 北12條，步行進校園", type: "move" },
        { t: "13:00", t2: "14:00", title: "北海道大學札幌校區", note: "走校園、冬季雪景與克拉克像；博物館不強求（原排 09:40，移到午餐後，白天光線正好）", type: "spot", place: "hokudai" },
        { t: "14:00", t2: "14:20", title: "往 PARCO", note: "南北線 北12條 → 大通，步行到札幌 PARCO", type: "move" },
        { t: "14:20", t2: "15:20", title: "nana's green tea 札幌PARCO店（5F）", note: "抹茶拿鐵、抹茶聖代或甜點，店家以當季菜單為準", type: "food", place: "nanas" },
        { t: "15:20", t2: "17:30", title: "大通商圈、聖誕市集／白色燈樹節、札幌電視塔", note: "市集 2026/11/20–12/25，11:00–21:00；入夜拍燈飾", type: "spot", place: "xmas" },
        { t: "17:30", t2: "18:20", title: "地鐵到札幌站", note: "前往 K-place，留候位時間", type: "move" },
        { t: "18:30", t2: "20:00", title: "焼肉 徳寿 K-place", note: "預計 3 位大人，未訂位。JR 札幌站附近「カメイ札幌駅前ビル10F」，官方線上訂位", type: "food", place: "kplace", flag: "c-reserve" },
        { t: "20:30", t2: "21:30", title: "Parfaiteria PaL 札幌夜芭菲", note: "薄野、南4条西2丁目；18:00 開門；不接受一般訂位，現場排隊，可能候位", type: "food", place: "pal" },
        { t: "21:30", t2: "後", title: "回狸小路飯店", note: "自由休息", type: "stay" }
      ],
      notes: []
    },
    {
      n: 3, date: "2026-12-19", md: "12.19", dow: "SAT", dowZh: "六",
      title: "小樽一日遊", sub: "運河・堺町通・LeTAO・天狗山夕陽",
      focus: "11:30 CAFE' BAAL、運河、堺町通、LeTAO、天狗山夕陽及運河夜景",
      cover: "otaru-canal",
      spots: ["baal", "otaruCanal", "sakaimachi", "musicbox", "letao", "tengu"],
      timeline: [
        { t: "09:30", title: "飯店出發", note: "薄野搭南北線到札幌，轉 JR 快速 Airport 或普通車到小樽", type: "move" },
        { t: "10:30", t2: "11:15", title: "小樽街區散步", note: "預留車次及積雪步行時間，11:15 左右前往 CAFE' BAAL 等候開門", type: "spot" },
        { t: "11:30", t2: "12:30", title: "CAFE' BAAL 牛排飯", note: "11:30 開門；午間營業至 14:30，不接受預約，現場候位", type: "food", place: "baal" },
        { t: "12:30", t2: "14:10", title: "小樽運河、堺町通、北一硝子、音樂盒堂、LeTAO", note: "LeTAO 下午茶／起司蛋糕、買小樽伴手禮；若午餐候位較久，縮短逛街時間", type: "spot", place: "sakaimachi" },
        { t: "約 14:25", title: "南小樽 → 小樽", note: "原計畫 JR 搭 1 站；若時間趕改計程車或縮短商店時間", type: "move" },
        { t: "14:50", t2: "15:30", title: "小樽站 → 天狗山", note: "中央巴士 9 號，冬季班次另查", type: "move" },
        { t: "15:30", t2: "16:50", title: "天狗山纜車、夕陽及夜景", note: "日落約 16:04，纜車遇風雪可能停駛", type: "spot", place: "tengu" },
        { t: "17:00", t2: "18:00", title: "天狗山 → 小樽市區", note: "9 號巴士回本局前方向", type: "move" },
        { t: "18:00", t2: "18:40", title: "小樽運河夜間藍色點燈", note: "依當年度活動資訊與天氣", type: "spot", place: "otaruCanal" },
        { t: "19:00", t2: "後", title: "JR 回札幌＋晚餐", note: "晚餐待定，視體力安排壽司或拉麵", type: "food", flag: "c-dinner" }
      ],
      notes: ["CAFE' BAAL 週二至週日 11:30–14:30、17:30–21:00，週一公休；午餐調整至 11:30，14:50 前往天狗山的安排不變。"]
    },
    {
      n: 4, date: "2026-12-20", md: "12.20", dow: "SUN", dowZh: "日",
      title: "札幌南區", sub: "頭大佛・摩艾石像・藻岩山・根室花まる",
      focus: "頭大佛、摩艾石像、藻岩山（日落與夜景）、晚餐根室花まる迴轉壽司",
      cover: "moai",
      spots: ["moai", "atama", "moiwa", "hanamaru"],
      timeline: [
        { t: "08:55", title: "從狸小路飯店出發", note: "南北線從薄野到「真駒內」終點站", type: "move" },
        { t: "09:40", t2: "10:10", title: "真駒內站等車", note: "找中央巴士真 108 乘車處", type: "move" },
        { t: "10:15", t2: "10:40", title: "真 108：真駒內站 → 頭大佛前", note: "冬季公車班次少；這班是參考時刻，出發前再核對", type: "move", warn: "出發前核對真 108 冬季班表" },
        { t: "10:40", t2: "11:15", title: "真駒內瀧野靈園：33 尊摩艾石像", note: "冬季雪景拍照，尊重墓園空間", type: "spot", place: "moai" },
        { t: "11:15", t2: "12:35", title: "安藤忠雄設計「頭大佛」", note: "大佛、混凝土隧道、園區咖啡／簡單休息；冬季開放約 10:00–15:00", type: "spot", place: "atama" },
        { t: "12:35", t2: "12:55", title: "返回頭大佛前巴士站", note: "提早候車", type: "move" },
        { t: "13:00", t2: "13:29", title: "真 108：頭大佛前 → 真駒內站", note: "錯過班次可能等一小時，務必注意", type: "move", warn: "錯過要等約一小時" },
        { t: "13:30", t2: "14:20", title: "真駒內站周邊午餐", note: "簡單吃，別排太遠", type: "food" },
        { t: "14:20", t2: "15:30", title: "前往藻岩山", note: "南北線返薄野／大通；搭市電至ロープウェイ入口，轉纜車山麓站接駁車或步行", type: "move" },
        { t: "15:30", t2: "17:30", title: "藻岩山纜車、山頂觀景台", note: "日落約 16:02，白天與夜景一次看；強風可能停駛", type: "spot", place: "moiwa" },
        { t: "18:00", title: "晚餐：回転寿司 根室花まる ココノススキノ店", note: "藻岩山下山後搭市電到「すすきの」站，店在 Cocono Susukino 地下 1 樓。不接受訂位，最後點餐 20:30；週日排隊可能很久，下山後直接過去抽號碼牌", type: "food", place: "hanamaru" },
        { t: "飯後", title: "狸小路藥妝採購", note: "可逛松本清、札幌藥妝等，實際分店營業時間現場確認", type: "shop", place: "tanuki" }
      ],
      notes: []
    },
    {
      n: 5, date: "2026-12-21", md: "12.21", dow: "MON", dowZh: "一",
      title: "場外市場＋札幌西區", sub: "帝王蟹・Tokuichi 拉麵・北海道神宮・白色戀人公園",
      focus: "帝王蟹、Tokuichi 拉麵、北海道神宮、白色戀人公園、藥妝採購",
      cover: "jingu",
      spots: ["jogai", "crab", "tokuichi", "jingu", "shiroi"],
      timeline: [
        { t: "08:20", title: "飯店出發", note: "大通搭東西線到二十四軒站，步行到場外市場", type: "move" },
        { t: "09:00", t2: "10:15", title: "札幌場外市場：帝王蟹海鮮早午餐", note: "根室杉山水產 UME堂；先問蟹種、重量、總價", type: "food", place: "crab" },
        { t: "10:15", t2: "11:00", title: "場外市場散步、排隊準備", note: "上午海鮮別吃得太撐", type: "spot", place: "jogai" },
        { t: "11:00", t2: "12:00", title: "NOUILLES JAPONAISE とくいち", note: "店就在場外市場區、二十四軒站步行約 6 分鐘；09:00–15:00、週三休、不接受預約，排隊時間不一定", type: "food", place: "tokuichi" },
        { t: "12:00", t2: "12:45", title: "地鐵往圓山公園站", note: "二十四軒 → 圓山公園（東西線）", type: "move" },
        { t: "12:45", t2: "13:40", title: "北海道神宮、圓山公園", note: "12 月日照短，參拜放白天", type: "spot", place: "jingu" },
        { t: "13:40", t2: "14:20", title: "前往白色戀人公園", note: "圓山公園搭東西線到宮之澤，步行 7–10 分鐘", type: "move" },
        { t: "14:20", t2: "16:00", title: "白色戀人公園、甜點、伴手禮", note: "付費區最晚入場 16:30；白色戀人霜淇淋", type: "spot", place: "shiroi" },
        { t: "16:00", t2: "17:10", title: "白色戀人公園 2026 聖誕燈飾", note: "官方點燈 16:00–19:00；先日景後夜景", type: "spot" },
        { t: "17:10", t2: "18:00", title: "宮之澤 → 大通，返回飯店", note: "東西線", type: "move" },
        { t: "18:00", t2: "20:00", title: "晚餐與藥妝、伴手禮採購", note: "札幌站或狸小路；買藥妝、六花亭、ROYCE'、札幌農學校餅乾等；百貨地下街伴手禮也排在今天；重物先放飯店", type: "shop", flag: "c-dinner" }
      ],
      notes: ["場外市場與 Tokuichi 都吃很飽，可把 Tokuichi 改為 09:15 提前排隊／吃拉麵，帝王蟹之後再吃，依排隊與個人食量彈性調整。",
        "可選甜點備案：日本茶と和菓子 エフ（圓山公園站旁，週一一般 12:00 後），當天已經很滿，不強求排入。"]
    },
    {
      n: 6, date: "2026-12-22", md: "12.22", dow: "TUE", dowZh: "二",
      title: "札幌 → 登別", sub: "尼克斯水族館・企鵝散步・地獄谷・溫泉",
      focus: "尼克斯交行李直送飯店、企鵝 11:00 首選／14:15 備案、地獄谷、溫泉",
      cover: "jigoku",
      spots: ["nixe", "penguin", "jigoku", "onsen", "noboriHotel"],
      timeline: [
        { t: "08:00", title: "札幌狸小路飯店退房，帶行李到札幌車站", note: "行李帶到尼克斯再辦理配送；護照、貴重品、電子設備、藥品及下午用品另裝隨身包", type: "stay" },
        { t: "08:43", t2: "09:54", title: "札幌 → JR 登別站", note: "原計畫 JR 特急參考班次，訂票時核對時刻", type: "move", place: "station" },
        { t: "09:54", t2: "10:20", title: "步行到尼克斯、辦理行李直送第一滝本館、入園", note: "JR 登別站步行約 5 分鐘；在入口館服務台（ゲート館インフォメーション）交件，每件 ¥1,200。現場核對收件飯店與送達安排，保留收據；若當日無法配送，改用園區寄存", type: "move", place: "nixe" },
        { t: "10:30", t2: "10:45", title: "海狗表演①", note: "如果順利入園可以看", type: "spot" },
        { t: "10:45", t2: "11:00", title: "海豹餵食時間", note: "如果想卡第一場企鵝位置可略過", type: "spot" },
        { t: "11:00", t2: "11:15", title: "企鵝散步①（首選）", note: "最重要行程，建議提前 10 分鐘到", type: "spot", place: "penguin", star: true },
        { t: "11:25", t2: "11:40", title: "海豚表演②", note: "推薦", type: "spot" },
        { t: "11:50", t2: "12:00", title: "沙丁魚群表演①", note: "推薦", type: "spot" },
        { t: "12:00", t2: "13:15", title: "園內午餐、水族館自由參觀", note: "看企鵝館、水族展示", type: "food" },
        { t: "13:15", t2: "13:40", title: "離園、步行至登別站前", note: "已辦配送，不需取回行李；只有使用園區寄存備案時，才到服務台領回行李", type: "move" },
        { t: "約 13:50", title: "道南巴士 登別站前 → 登別溫泉", note: "班次以當日公告為準，車程約 25–30 分鐘", type: "move" },
        { t: "14:30", t2: "15:30", title: "登別地獄谷、溫泉街散步", note: "行李由尼克斯配送，輕裝散步。若使用園區寄存備案，先到第一滝本館寄放行李，再視時間遊覽；下雪注意腳下", type: "spot", place: "jigoku" },
        { t: "15:30", t2: "16:00", title: "第一滝本館 Check-in、確認行李配送狀態", note: "入住 14:00 起；行李預計 15:30–17:00 送達，可能晚於入住。向櫃檯確認領取方式，交通或天候可能延誤", type: "stay", place: "noboriHotel" },
        { t: "16:00", t2: "後", title: "泡湯、飯店晚餐", note: "第一滝本館；以飯店用餐時間為主", type: "stay" }
      ],
      luggage: {
        title: "12/22 行李安排：直送飯店為主、園區寄存備用",
        rows: [
          { label: "主方案", title: "尼克斯 → 第一滝本館｜每件 ¥1,200", note: "當日住宿登別溫泉的旅客可用，第一滝本館在配送名單內。09:00–14:30 受理，預計 15:30–17:00 送達；行李箱不限制尺寸與重量。" },
          { label: "備案", title: "尼克斯園區寄存｜每件 ¥500", note: "大型或放不進置物櫃的行李可寄存。09:00–16:30 受理，最晚 17:00 前取回；離園時領回，自行帶到第一滝本館，先寄放再逛地獄谷。" }
        ],
        notes: [
          "兩種方式都在入口館服務台（ゲート館インフォメーション）辦理；本次預計約 10:00 交件。建議備妥住宿確認資料，現場核對飯店名稱、收件資料並保留收據。",
          "貴重品、易碎品、相機、電子設備、危險物及可能漏水的物品不受理；官網另註超過 ¥30,000 的物品不受理。護照、現金、藥品及下午會用到的物品請隨身攜帶。",
          "配送可能因交通或天候延遲，15:30 入住時不一定已到。若當日無法配送，改用園區寄存；第一滝本館可在入住前寄放行李。"
        ],
        foot: "依官方資訊整理（2026/11/17 查核）；費用與服務以當日公告為準。",
        links: [{ t: "尼克斯官方行李服務", u: "https://nixe-aqua.com/guide/" }, { t: "第一滝本館寄存／入住資訊", u: "https://takimotokan.co.jp/en/faq/" }]
      },
      backup: {
        title: "如果錯過第一場：14:15 企鵝散步備案",
        rows: [
          { t: "13:30–13:45", title: "海狗表演②", note: "留在園區看" },
          { t: "13:50–14:10", title: "前往企鵝散步區卡位", note: "以園方指示為準" },
          { t: "14:15–14:30", title: "企鵝散步②（備案）", note: "看完再離園" },
          { t: "14:45–15:00", title: "海豚表演③（可選）", note: "若還要看，會更晚到飯店" },
          { t: "15:00 之後", title: "離園、道南巴士至登別溫泉、飯店 Check-in", note: "已配送不需取行李，使用寄存備案才需領回。地獄谷縮短或取消，別在天黑後硬走雪地" }
        ]
      },
      shows: {
        title: "尼克斯官方冬季完整表演時刻（12/22 適用）",
        rows: [
          ["10:00–10:15", "海豚表演①"], ["10:30–10:45", "海狗表演①"], ["10:45–11:00", "海豹餵食"],
          ["11:00–11:15", "企鵝散步①（首選）", true], ["11:25–11:40", "海豚表演②"], ["11:50–12:00", "沙丁魚群表演①"],
          ["13:30–13:45", "海狗表演②"], ["14:15–14:30", "企鵝散步②（備案）", true], ["14:45–15:00", "海豚表演③"],
          ["15:10–15:20", "沙丁魚群表演②"], ["15:30–15:45", "海狗表演③"]
        ],
        foot: "資料：尼克斯官方冬季時刻。企鵝可能因天氣／氣溫取消，節目也可能臨時更改。",
        link: "https://nixe-aqua.com/attractions/winter/"
      },
      notes: []
    },
    {
      n: 7, date: "2026-12-23", md: "12.23", dow: "WED", dowZh: "三",
      title: "登別 → 新千歲 → 台灣", sub: "早餐泡湯・機場直達巴士・伴手禮",
      focus: "早餐泡湯、機場直達巴士、機場買伴手禮、返程",
      cover: "onsen",
      spots: ["noboriHotel", "onsen", "cts"],
      timeline: [
        { t: "07:30", t2: "09:30", title: "飯店早餐、泡溫泉、整理行李", note: "第一滝本館。若昨天沒去地獄谷且天氣好，可在不趕車前提下散步", type: "stay", place: "noboriHotel" },
        { t: "10:00", t2: "11:20", title: "退房、最後買小伴手禮", note: "第一滝本館退房時間 10:00；至登別溫泉巴士站候車", type: "shop" },
        { t: "11:45", t2: "12:50", title: "預約制道南巴士：登別溫泉 → 新千歲機場國際線", note: "官方定期時刻，成人 ¥1,900–2,400 依上下車點不同；請事先預約，雪天可能延誤", type: "move", warn: "需事先預約",
          links: [{ t: "道南巴士時刻／預約", u: "https://www.donanbus.co.jp/map/noboribetsu_airport/" }] },
        { t: "12:50", t2: "14:00", title: "新千歲機場午餐、最後伴手禮", note: "ROYCE'、白色戀人、六花亭、北海道牛奶點心等，視航廈店家", type: "shop", place: "cts" },
        { t: "14:00", t2: "左右", title: "國際線報到、安檢、出境", note: "以航空公司截止時間為準", type: "move" },
        { t: "16:00", title: "搭機返台（JX319）", note: "已核對機票：16:00 新千歲起飛，19:55 抵達台中", type: "move" }
      ],
      notes: []
    }
  ],

  /* ---------------------------------------------------------------------- */
  shopping: [
    { where: "UNIQLO 札幌三越店（本館 10 樓）", when: "12/17 傍晚", what: "保暖衣、HEATTECH、襪子等；若航班晚點改 12/18" },
    { where: "nana's green tea 札幌PARCO 5 樓", when: "12/18 14:20", what: "抹茶甜點、抹茶拿鐵；PARCO 一般至 20:00" },
    { where: "Parfaiteria PaL（薄野）", when: "12/18 20:30", what: "札幌夜芭菲，季節限定，不能預約；預留排隊時間" },
    { where: "LeTAO／北一硝子周邊", when: "12/19 小樽", what: "起司蛋糕、餅乾、玻璃小物" },
    { where: "狸小路藥妝店", when: "12/20 或 12/21 晚上", what: "松本清、札幌藥妝等；不要買超重，注意退稅、液體與行李" },
    { where: "白色戀人公園", when: "12/21 下午", what: "白色戀人餅乾、限定商品、霜淇淋" },
    { where: "札幌市區百貨地下街", when: "12/21 晚上", what: "六花亭、ROYCE'、札幌農學校、北菓樓等伴手禮；百貨約晚上 8 點打烊，先逛" },
    { where: "新千歲機場", when: "12/23 中午", what: "最後補買食品、機場限定商品；保留報到時間" }
  ],

  /* 出發前需完成事項（Notion 待辦，皆尚未勾選） */
  checklist: [
    { id: "seat", text: "48 小時前選座位" },
    { id: "yen", text: "領日幣" },
    { id: "insurance", text: "旅平險" },
    { id: "taxfree", text: "新退稅機制？" },
    { id: "suica", text: "西瓜卡" },
    { id: "daikokuya", done: true, text: "確認 12/17 19:30 大黑屋札幌2號店訂位", link: "https://yoyaku.toreta.in/daikokuya-sapporo2go", linkText: "官方預約頁" },
    { id: "sama", done: true, text: "確認 12/18 11:30 Soup Curry SAMA 大通店是否已訂位" },
    { id: "kplace", text: "預約 12/18 18:30 德壽 K-place 燒肉，3 位（尚未訂）", link: "https://yoyaku.toreta.in/k-place/", linkText: "官方預約頁" },
    { id: "crab", done: true, text: "確認 12/21 場外市場帝王蟹店家（根室杉山水產 UME堂）", link: "https://maps.app.goo.gl/PvbUW3zJbGQ2npHG7", linkText: "地圖" },
    { id: "ma108", text: "核對 12/20 頭大佛公車真 108 冬季班表、藻岩山纜車天候", link: "https://transfer.navitime.biz/chuo-bus/pc/map/Top", linkText: "中央巴士查詢" },
    { id: "nobori-delivery-prep", text: "12/22 已選尼克斯直送第一滝本館：準備住宿確認資料、另裝隨身物品與下午用品", link: "https://nixe-aqua.com/guide/", linkText: "配送／寄存資訊" },
    { id: "bus", text: "預訂 12/23 登別溫泉 → 新千歲機場直達巴士", link: "https://www.donanbus.co.jp/map/noboribetsu_airport/", linkText: "道南巴士官方資訊" },
    { id: "flight", done: true, text: "核對 12/23 回程航班時間（16:00 起飛，19:55 抵達）" },
    { id: "weather", text: "出發前查最新天氣、JR 與巴士是否停駛" }
  ],

  /* ----------------------------------------------------------------------
     需要你確認的地方（不擅自決定，只列出）
     level: conflict（資訊矛盾）/ tight（時間偏緊）/ pending（待確認・待補）
     ---------------------------------------------------------------------- */
  confirms: [
    { id: "c-reserve", level: "pending", title: "12/18 德壽 K-place 尚未訂位",
      body: "12/17 19:30 大黑屋、12/18 11:30 SAMA 都已確認訂位。剩下 12/18 18:30 德壽 K-place（3 位）在 Notion 寫「尚未訂」。", day: 2 },
    { id: "c-dinner", level: "pending", title: "晚餐待訂：12/19、12/21" }
  ],

  links: [
    { t: "徳寿 K-place 官網", u: "https://www.tokuju.com/shop/k-place/" },
    { t: "德壽 K-place 預約", u: "https://yoyaku.toreta.in/k-place/" },
    { t: "大黑屋札幌2號店官方預約", u: "https://yoyaku.toreta.in/daikokuya-sapporo2go" },
    { t: "CAFE' BAAL 營業資訊（週一公休）", u: "https://tabelog.com/tw/hokkaido/A0106/A010601/1052877/" },
    { t: "NOUILLES JAPONAISE とくいち 店家資訊（不接受訂位）", u: "https://tabelog.com/hokkaido/A0101/A010105/1073732/" },
    { t: "nana's green tea 札幌PARCO店", u: "https://sapporo.parco.jp/shop/detail/?cd=007628" },
    { t: "Parfaiteria PaL 店家營業資訊", u: "https://yoru-parfait-gaku.com/parfait/shop-info/" },
    { t: "2026 札幌慕尼黑聖誕市集", u: "https://www.sapporo.travel/white-illumination/event/munich/" },
    { t: "白色戀人公園 2026 點燈", u: "https://www.shiroikoibitopark.jp/illumination/" },
    { t: "頭大佛參觀資訊", u: "https://www.takinoreien.com/" },
    { t: "北海道中央巴士 真108 查詢", u: "https://transfer.navitime.biz/chuo-bus/pc/map/Top" },
    { t: "藻岩山纜車官網", u: "https://mt-moiwa.jp/" },
    { t: "尼克斯官方冬季表演時間", u: "https://nixe-aqua.com/attractions/winter/" },
    { t: "尼克斯行李直送飯店／園區寄存", u: "https://nixe-aqua.com/guide/" },
    { t: "第一滝本館入住與行李寄存資訊", u: "https://takimotokan.co.jp/en/faq/" },
    { t: "登別溫泉 → 新千歲機場 巴士時刻／預約", u: "https://www.donanbus.co.jp/map/noboribetsu_airport/" }
  ],

  /* 冬季提醒：整理自 Notion 各日備註 */
  winterTips: [
    "12 月日照短，日落約 16:00，參拜與戶外行程放白天。",
    "天狗山、藻岩山纜車遇強風或風雪可能停駛。",
    "下雪注意腳下，天黑後別硬走雪地。",
    "真 108 冬季班次少，錯過可能要等一小時。",
    "道南巴士雪天可能延誤；出發前查 JR 與巴士是否停駛。",
    "藥妝伴手禮不要買超重，注意退稅、液體與行李。"
  ]
};
