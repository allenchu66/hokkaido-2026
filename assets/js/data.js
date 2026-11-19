/* ==========================================================================
   HOKKAIDO TRAVEL JOURNAL — 行程資料
   --------------------------------------------------------------------------
   內容依 Notion「2026北海道」頁面整理（2026/11/17 擷取）。
   想修改行程，只要改這個檔案，網站會自動更新。

   flag: 對應下方 checklist 的 id，會在行程旁顯示「出發前待辦」標記，點了跳到清單那一項。
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
     img: assets/img/ 底下的檔名，可省略；sample: true 代表示意照片，非該店實拍
     ---------------------------------------------------------------------- */
  places: {
    granbell: { name: "札幌グランベルホテル狸小路", zh: "GRANBELL HOTEL TANUKI, SAPPORO", kind: "stay", img: "tanuki", sample: true, sampleText: "狸小路示意",
      when: "12/17–12/22（5 晚）", note: "札幌市中央區南3条西8丁目10-1。", map: "札幌グランベルホテル狸小路" },
    noboriHotel: { name: "第一滝本館", zh: "Dai-ichi Takimotokan・登別溫泉", kind: "stay", img: "takimoto",
      when: "12/22（1 晚）", note: "登別市登別溫泉町55，離地獄谷很近。入住 14:00、退房 10:00。",
      mapUrl: "https://maps.app.goo.gl/qBdp9o2QTRVYTPav6", links: [{ t: "入住／寄存資訊", u: "https://takimotokan.co.jp/en/faq/" }] },

    station: { name: "JR 札幌站", zh: "Sapporo Station", kind: "spot", img: "station", map: "JR札幌駅" },
    tanuki: { name: "狸小路商店街", zh: "Tanukikoji", kind: "spot", img: "tanuki", note: "藥妝、便利商店都在這一帶。", map: "狸小路商店街" },
    surugaya: { name: "駿河屋 札幌ノルベサ店", zh: "動漫公仔・玩具・萬代扭蛋", kind: "shop",
      when: "12/17 飯後，可選・11:00–23:00",
      note: "南3条西5丁目1-1 NORBESA。3F 販售新品／二手公仔、動漫周邊、玩具與一番賞；1F 萬代扭蛋區合計 640 面。遊戲、偶像、卡牌與組裝模型區 22:00 先關；公仔購買前看清商品狀態。從大黑屋步行粗估 5–10 分鐘，雪地多留時間。",
      map: "駿河屋 札幌ノルベサ店", links: [{ t: "駿河屋官方資訊", u: "https://www.suruga-ya.jp/feature/realstore/sapporo/index.html" }, { t: "萬代扭蛋店舖資訊", u: "https://bandainamco-am.co.jp/others/gashapon-bandai-officialshop/store/sapporo_norbesa/" }] },
    cpla: { name: "#C-pla 狸小路4丁目店", zh: "兩層樓扭蛋專門店", kind: "shop",
      when: "12/17 飯後，可選・10:00–23:00",
      note: "南2条西4丁目10 清水ビル 1F・2F。官方列 1,063 個扭蛋箱位，設有大鈔兌幣機；機台款式與庫存依現場。導航請選 4 丁目店。",
      map: "C-pla 狸小路4丁目店", links: [{ t: "官方店舖資訊", u: "https://toshin.jpn.com/shop/狸小路4丁目店/" }] },
    taito: { name: "TAITO STATION 札幌狸小路4丁目店", zh: "夾娃娃・動漫景品・拍貼", kind: "shop",
      when: "12/17 飯後備選・10:00–24:00",
      note: "南2条西4丁目2-11 平成観光ビル。可玩夾娃娃、找動漫景品或拍貼；景品會更換，想直接買公仔可先逛駿河屋。",
      map: "タイトーステーション 札幌狸小路4丁目店", links: [{ t: "官方店頁", u: "https://www.taito.co.jp/store/00002254" }, { t: "官方營業時間", u: "https://www.taito.co.jp/store?sg=3" }] },
    donki: { name: "MEGA 唐吉訶德 札幌狸小路本店", zh: "零食・日用品・伴手禮", kind: "shop",
      when: "飯後自由採購・24 小時營業",
      note: "南3条西4丁目12-1，狸小路 4 丁目。可留到公仔、扭蛋店之後再逛；請選「本店」，與別館營業時間不同。",
      map: "MEGAドン・キホーテ 札幌狸小路本店", links: [{ t: "官方營業資訊", u: "https://www.donki.com/store/shop_detail.php?shop_id=555" }] },
    mybasket: { name: "まいばすけっと 南2条西8丁目店", zh: "飯店附近小型超市", kind: "shop",
      when: "回飯店前備選・07:00–23:00",
      note: "南2条西8丁目7番地，靠近狸小路飯店，可補買飲料、早餐或宵夜。想逛超市就提早結束遊樂／唐吉採購，23:00 前完成購物；折扣與剩餘商品以當天為準。",
      map: "まいばすけっと 南2条西8丁目店", links: [{ t: "官方營業資訊", u: "https://www.aeon-hokkaido.jp/mybasket/shop/minami2nishi8/" }] },
    baobaoParco: { name: "BAO BAO ISSEY MIYAKE 札幌PARCO", zh: "三宅一生・幾何包款", kind: "shop",
      when: "12/18 15:20–16:10 購物時段・10:00–20:00",
      note: "南1条西3丁目3，札幌 PARCO 1F。販售 BAO BAO 包袋與雜貨；喝完 5F nana's green tea、逛 7F 角色商品後順路下樓看包款。想看 PLEATS PLEASE 摺衣可續往三越 4F；款式、顏色與庫存以現場為準。",
      map: "BAO BAO ISSEY MIYAKE 札幌PARCO", links: [{ t: "PARCO 官方店頁", u: "https://sapporo.parco.jp/shop/detail/?cd=008074" }] },
    parcoCharacters: { name: "札幌PARCO 7F 角色商品", zh: "橡子共和國・JUMP SHOP・扭蛋", kind: "shop",
      when: "12/18 15:20–16:10 購物時段・10:00–20:00",
      note: "橡子共和國（どんぐり共和国）販售龍貓、魔女宅急便、神隱少女等吉卜力周邊；同層還有 JUMP SHOP、ナガノマーケット、mofusand 與 #C-pla。與 1F BAO BAO 合計抓 50 分鐘，依喜好挑店。第一天成吉思汗飯後已關店。",
      map: "どんぐり共和国 札幌パルコ店", links: [{ t: "7F 官方樓層指南", u: "https://sapporo.parco.jp/floor/detail/?f=7f&ft=type1" }, { t: "橡子共和國店頁", u: "https://sapporo.parco.jp/shop/detail/?cd=027886" }] },
    mitsukoshiIssey: { name: "三宅一生・札幌三越 本館4F", zh: "PLEATS PLEASE・me ISSEY MIYAKE", kind: "shop",
      when: "12/18 16:10–16:40・10:00–19:00",
      note: "南1条西3丁目8，本館 4F 有 PLEATS PLEASE 摺衣與 me 系列。從 PARCO 步行過來，半小時包含移動與選購；若需試穿，可縮短下一段市集停留。4F 19:00 關店，與本館 10F UNIQLO 的 20:00 不同。",
      map: "PLEATS PLEASE ISSEY MIYAKE 札幌三越", links: [{ t: "品牌官方門市", u: "https://www.isseymiyake.com/pages/stores" }, { t: "三越官方營業時間", u: "https://www.mitsukoshi.mistore.jp/sapporo.html" }] },
    daimaruIssey: { name: "三宅一生・大丸札幌店 5F", zh: "ISSEY MIYAKE 主線・PLEATS PLEASE・me", kind: "shop",
      when: "札幌站購物備選・10:00–20:00",
      note: "北5条西4丁目7，JR 札幌站旁的大丸 5F。官方列 ISSEY MIYAKE、PLEATS PLEASE 與 me 三個櫃點；想看主線服飾時優先考慮。作為 PARCO／三越購物的替代選擇，不把三處全部塞進第二天下午；12/18 燒肉 20:15 結束後已閉店。",
      map: "ISSEY MIYAKE 大丸札幌店", links: [{ t: "品牌官方門市", u: "https://www.isseymiyake.com/pages/stores" }, { t: "大丸官方營業時間", u: "https://www.daimaru.co.jp/sapporo/hours.html" }] },
    daiichi: { name: "ダイイチ COCONO SUSUKINO 店", zh: "B2 生鮮超市・熟食", kind: "shop",
      when: "12/20 花丸飯後有空再逛・10:00–21:00",
      note: "南4条西4丁目1-1，COCONO SUSUKINO B2。第一天 20:50 吃完大黑屋太趕，改在第四天同棟吃花丸時順逛；若用餐結束已近 21:00 就略過。官方未公布固定熟食降價時段，是否有折扣及剩餘品項依當天，不能保證買到半價商品。",
      map: "ダイイチ ココノススキノ店", links: [{ t: "商場各樓層營業時間", u: "https://cocono-susukino.jp/facility/detail/2" }, { t: "超市官方店頁", u: "https://cocono-susukino.jp/shop/detail/2F000001?tenant_cd=2F000001" }] },
    potapota: { name: "ぽたぽたいちご 本店", zh: "草莓大福・moyuk SAPPORO", kind: "food",
      when: "12/17（四）19:00–19:15", status: "現場購買", statusTone: "calm",
      note: "札幌市中央區南2条西3丁目20，moyuk SAPPORO 的 OMOTASE-HONPO 內。官網營業時間 10:00–21:00；逛完三越 UNIQLO 後順路買草莓大福，再走去大黑屋。口味、價格與供應以現場為準；若排隊較久，優先保留 19:30 晚餐訂位。",
      map: "ぽたぽたいちご モユクサッポロ オモタセホンポ", links: [{ t: "官方商品／店舖資訊", u: "https://www.potapota15.com/" }] },
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
      when: "12/18（五）18:15–20:15", status: "已訂位", statusTone: "ok", note: "18:15 已確認訂位，用餐至 20:15。JR 札幌站附近「カメイ札幌駅前ビル10F」，預計 18:05 抵達。",
      map: "焼肉 徳寿 K-place", links: [{ t: "官方線上訂位", u: "https://yoyaku.toreta.in/k-place/" }, { t: "官網", u: "https://www.tokuju.com/shop/k-place/" }] },
    pal: { name: "Parfaiteria PaL", zh: "札幌夜芭菲", kind: "food", img: "parfait", sample: true,
      when: "12/18（五）20:45", status: "不接受訂位", statusTone: "calm", note: "薄野、南4条西2丁目；18:00 開門；燒肉後預留約 30 分鐘交通，現場排隊，可能候位。",
      map: "Parfaiteria PaL 札幌", links: [{ t: "店家營業資訊", u: "https://yoru-parfait-gaku.com/parfait/shop-info/" }] },

    takinami: { name: "北のどんぶり屋 滝波食堂", zh: "三角市場・海鮮丼", kind: "food",
      when: "12/19（六）抵達小樽後，可選", status: "如果有時間有胃", statusTone: "calm",
      note: "小樽市稲穂3-10-16，三角市場內，JR 小樽站步行約 1 分鐘。07:00 起營業、17:00 結束入店受理（最後點餐 17:30、18:00 關店），元旦休。可選 3–4 種配料的海鮮丼，也有小碗。不接受預約，當日到店以機台登記候位；若會影響 11:30 的 CAFE' BAAL 午餐就略過。",
      map: "北のどんぶり屋 滝波食堂 小樽 三角市場", links: [{ t: "Google 店家資訊", u: "https://share.google/bkjHL0zEwMOQPXACn" }, { t: "官方營業／候位資訊", u: "https://www.otaru-takinami.com/fr/5" }] },
    baal: { name: "CAFE' BAAL", zh: "カフェバール・牛排飯", kind: "food", img: "steakdon", sample: true,
      when: "12/19（六）11:30–12:30", status: "不接受預約", statusTone: "calm",
      note: "小樽市稲穂3丁目8-10。週二至週日 11:30–14:30、17:30–21:00；週一公休。現場候位，營業時間如有異動以店家公告為準。",
      mapUrl: "https://maps.app.goo.gl/ekGmMSpPSbuvtrms5", links: [{ t: "營業資訊（Tabelog）", u: "https://tabelog.com/tw/hokkaido/A0106/A010601/1052877/" }] },
    otaruCanal: { name: "小樽運河", zh: "Otaru Canal", kind: "spot", img: "otaru-canal", note: "傍晚 18:00–18:40 看運河夜間點燈（依當年度活動與天氣）。", map: "小樽運河" },
    sakaimachi: { name: "堺町通", zh: "Sakaimachi Street", kind: "spot", img: "sakaimachi", map: "堺町通り 小樽" },
    musicbox: { name: "小樽音樂盒堂", zh: "Otaru Music Box Museum", kind: "spot", img: "musicbox", note: "同一帶還有北一硝子（玻璃小物）。角色商品店「夢之音」已搬入本館 3F，可在原本參觀時順逛。本館 09:00–18:00，2F／3F 提前於 17:45 關閉。", map: "小樽オルゴール堂 本館", links: [{ t: "官方店舖／夢之音搬遷資訊", u: "https://www.otaru-orgel.co.jp/shop" }] },
    letao: { name: "LeTAO 小樽洋菓子舖", zh: "起司蛋糕・下午茶", kind: "food", img: "letao",
      when: "12/19（六）午後", status: "現場購買", statusTone: "calm", note: "LeTAO 下午茶／起司蛋糕、買小樽伴手禮。", map: "小樽洋菓子舗ルタオ 本店" },
    potapotaOtaru: { name: "ぽたぽたいちご 小樽堺町通り店", zh: "草莓大福・小樽備選", kind: "food",
      when: "12/19（六）12:30–14:10 散步時，可選", status: "備選・有空再買", statusTone: "calm",
      note: "小樽市堺町2-17，官網營業時間 11:00–17:00。第一天沒買到或想再吃，可在堺町通散步時順路買草莓大福；口味、價格與供應以現場為準。17:00 關店，安排在上天狗山前，不等夜景後再買。",
      map: "ぽたぽたいちご 小樽堺町通り店 小樽市堺町2-17", links: [{ t: "官方商品／店舖資訊", u: "https://www.potapota15.com/" }] },
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
    jinguchaya: { name: "神宮茶屋", zh: "北海道神宮境內・點心休息", kind: "food",
      when: "12/21（一）13:20–13:40", status: "現場購買", statusTone: "calm",
      note: "札幌市中央區宮ケ丘474番地35，北海道神宮境內。冬季 11–2 月 09:00–16:00（最後點餐 15:45），依神宮閉門時間調整。參拜後可買現烤福レ餅、神宮茶屋餅或熱飲；若排隊較久，以 13:40 出發往白色戀人公園為優先。",
      mapUrl: "https://maps.app.goo.gl/SARPMKpcryXrdDB89", links: [{ t: "官方菜單／營業資訊", u: "https://jinguchaya.jp/" }] },
    shiroi: { name: "白色戀人公園", zh: "Shiroi Koibito Park", kind: "spot", img: "shiroi", when: "12/21（一）14:20–17:10",
      note: "付費區最晚入場 16:30；白色戀人霜淇淋。2026 聖誕燈飾官方點燈 16:00–19:00。", map: "白い恋人パーク",
      links: [{ t: "2026 點燈資訊", u: "https://www.shiroikoibitopark.jp/illumination/" }] },
    hachikyo: { name: "海味 はちきょう 本店", zh: "海鮮居酒屋・鮭魚卵飯「つっこ飯」", kind: "food", img: "ikura", sample: true,
      when: "12/21（一）19:00–20:30（暫排）", status: "尚未開放訂位", statusTone: "warn", flag: "hachikyo-book",
      note: "南3条西3丁目 1F，すすきの站步行約 1 分鐘，就在狸小路 3 丁目旁。Tabelog 3.67、居酒屋百名店 2025，全席禁菸。週一至週六 18:00–24:00（最後點餐 23:00），年末年始公休。可線上或電話訂位（050-5456-1219），超過預約時間 15 分鐘未到會被取消。Google 地圖的「預訂」（Toreta）只開放約 30 天內的日期：11/19 查看時最晚只能選到 12/18，預計 11/22 前後才能訂 12/21。",
      map: "海味はちきょう 本店 札幌市中央区南3条西3丁目", links: [{ t: "Tabelog（訂位）", u: "https://tabelog.com/hokkaido/A0101/A010103/1003784/" }] },

    nixe: { name: "登別尼克斯海洋公園", zh: "Noboribetsu Marine Park Nixe", kind: "spot", img: "nixe", note: "JR 登別站步行約 5 分鐘。12/22 入園時辦理行李直送第一滝本館，每件 ¥1,200；園區寄存每件 ¥500 作備案。",
      map: "登別マリンパークニクス", links: [{ t: "官方冬季表演時刻", u: "https://nixe-aqua.com/attractions/winter/" }, { t: "官方行李配送／寄存資訊", u: "https://nixe-aqua.com/guide/" }] },
    penguin: { name: "企鵝散步", zh: "11:00 首選／14:15 備案", kind: "spot", img: "penguin", sample: true, sampleText: "企鵝散步示意",
      note: "最重要行程，建議提前 10 分鐘到。企鵝可能因天氣／氣溫取消。" },
    jigoku: { name: "登別地獄谷", zh: "Jigokudani", kind: "spot", img: "jigoku", note: "下雪注意腳下，日落早。", map: "登別地獄谷" },
    onsen: { name: "登別溫泉街", zh: "Noboribetsu Onsen", kind: "spot", img: "onsen", map: "登別温泉" },
    cts: { name: "新千歲機場", zh: "New Chitose Airport", kind: "spot", img: "cts", note: "ROYCE'、白色戀人、六花亭、北海道牛奶點心等，視航廈店家。", map: "新千歳空港 国際線ターミナル" },

    okushiba: { name: "スープカレー 奥芝商店 実家店", zh: "鮮蝦湯底湯咖哩", kind: "food", img: "soupcurry", sample: true,
      when: "12/20（日）14:00 午餐", status: "現場排隊", statusTone: "calm",
      note: "南1条西5丁目16 プレジデント松井ビル B1F，面向電車通，市電「西4丁目」站旁。午餐 11:00–15:00，週一公休（12/20 週日有營業）；湯賣完就提早打烊。週日中午可能排隊，14:15 還沒入店就改吃附近其他店，以免錯過藻岩山日落。",
      map: "奥芝商店 実家店 札幌市中央区南1条西5丁目16 プレジデント松井ビル" },
    hanamaru: { name: "回転寿司 根室花まる ココノススキノ店", zh: "迴轉壽司", kind: "food", img: "sushi", sample: true,
      when: "12/20（日）晚餐", status: "不接受訂位", statusTone: "calm",
      note: "南4条西4丁目1番1 ココノススキノ地下1階，市電「すすきの」站旁。11:00–21:00（最後點餐 20:30）。客滿時在店門口發券機抽號碼牌，掃 QR code 可遠端看還剩幾組、用 LINE 或 email 叫號；叫號 15 分鐘內沒到會取消，全員到齊才帶位。",
      map: "回転寿司 根室花まる ココノススキノ店", links: [{ t: "官方店舖資訊", u: "https://www.sushi-hanamaru.com/store/details/cocono.html" }] }
  },

  /* 景點導讀：依官方／觀光協會資料撰寫，2026/11/17 查核。
     intro 直接顯示；story 放在可展開的背景介紹；sources 為內容出處。 */
  guides: {
    station: {
      intro: "札幌的交通與購物中心，JR 車站周邊連接地下街、APIA、札幌 STELLAR PLACE 與大丸百貨。冬天轉車或採買時，可利用室內與地下通道減少在雪地走路的時間。",
      sources: [{ t: "JR Tower 樓層與設施介紹", u: "https://www.jr-tower.jp/floor_map" }]
    },
    tanuki: {
      intro: "橫跨七個街區的拱廊商店街，老店、餐廳、藥妝和新店混在一起。大部分路段有遮棚，很適合冬季飯後散步，也能從飯店附近慢慢逛回去。",
      story: "這一帶在明治初期開始聚集商家，約 1873 年已有「狸小路」之名。逛街時可以留意新舊招牌，以及商店街內的本陣狸大明神社，看看這條老街如何把商業與地方信仰留在日常生活裡。",
      sources: [{ t: "狸小路商店街的歷史", u: "https://tanukikoji.or.jp/about-tanukikoji/" }]
    },
    suwa: {
      intro: "位於札幌站北側的社區神社，季節花手水是參拜時可留意的小風景：用花朵裝飾淨手的水盆，讓神社多了柔和的色彩。實際花材與冬季布置依現場。",
      story: "1882 年，從信濃移居的上島正迎請故鄉諏訪神社的分靈，在自家院內建小祠，成為札幌諏訪神社的起點。這段歷史也反映了移居者把故鄉信仰帶到北海道、重新建立生活的過程。",
      sources: [{ t: "札幌諏訪神社由緒", u: "https://www.sapporo-suwajinja.com/" }, { t: "札幌商工會議所・花手水介紹", u: "https://www.sapporo-cci.or.jp/web/tourism/daytime/details/post-152.html" }]
    },
    hokudai: {
      intro: "城市中的寬闊校園，中央草坪、老校舍與樹木讓散步有公園般的感覺。冬天適合欣賞雪景與建築；本次可在校園南側找克拉克博士胸像。",
      story: "北海道大學起源於 1876 年開校的札幌農學校，克拉克博士曾任教頭。今天行程中的時計台，也曾是農學校的設施，兩個景點其實連著同一段教育史。校內的克拉克像是胸像，與羊之丘那座伸手指向遠方的立像不同。",
      sources: [{ t: "北海道大學沿革", u: "https://www.hokudai.ac.jp/bureau/info-j/enkaku.html" }, { t: "北大校園與克拉克像說明", u: "https://www.hokudai.ac.jp/sub/inquiry/faq.html" }]
    },
    clock: {
      intro: "紅屋頂、白色外牆的小型木造建築，被現代市區包圍，是札幌早期城市風貌的代表。可留意鐘樓與屋頂細節，若有餘裕再入館看歷史展示。",
      story: "時計台於 1878 年建成，原名是「札幌農學校演武場」，原本服務於學校活動，後來也曾作為圖書館等公共設施使用。帶著這個背景看它，會發現眼前保存的是札幌教育與市民生活的一段歷史。",
      sources: [{ t: "札幌官方觀光・時計台", u: "https://www.sapporo.travel/spot/facility/clock_tower/" }]
    },
    akarenga: {
      intro: "以紅磚外牆與中央八角塔為特色的北海道廳舊本廳舍，1888 年落成。從前庭看建築正面最能感受對稱的立面，雪景也能襯托磚牆的顏色。",
      story: "建造時使用約 250 萬塊磚，主要由札幌白石一帶生產。1909 年火災燒毀內部，1911 年完成修復；如今的建築包含不同年代保存下來的材料與工藝，並非一次完工後就原封不動。",
      sources: [{ t: "紅磚廳舍的材料與歷史", u: "https://www.hokkaido-redbrick.jp/about_us/" }]
    },
    xmas: {
      intro: "大通公園冬季的節慶散步重點，聖誕市集可逛裝飾品、吃熱食，入夜再欣賞周邊燈飾。市集與白色燈樹節是不同活動，可在同一段市中心行程順路體驗。",
      story: "市集名稱中的「慕尼黑」來自札幌的德國姊妹城市。活動自 2002 年開始，將德國聖誕市集的氣氛帶到札幌；熱紅酒、節慶料理與工藝雜貨，都是這段城市交流在冬天的具體呈現。",
      sources: [{ t: "慕尼黑聖誕市集官方介紹", u: "https://www.sapporo.travel/white-illumination/event/munich/" }]
    },
    tvtower: {
      intro: "矗立在大通公園東端的札幌地標，從地面可把塔與公園一起入鏡；若想登塔，約 90 公尺高的展望台能俯看筆直延伸的大通公園與市區。",
      story: "電視塔在 1957 年開業，伴隨札幌電視放送的發展而誕生。現在醒目的大型電光鐘是 1961 年才加裝，官方記載其契機來自市民覺得「塔上有時鐘會很方便」的想法。",
      sources: [{ t: "電視塔的歷史", u: "https://www.tv-tower.co.jp/outline/history/" }, { t: "展望台介紹", u: "https://www.tv-tower.co.jp/guidance/" }]
    },
    takinami: {
      intro: "滝波食堂位在小樽站旁的三角市場，逛魚攤與吃海鮮丼可以安排在同一站。這次保留為「如果有時間有胃」的選項，感受市場氣氛也可以不另吃一餐。",
      story: "三角市場約在 1948 年由車站前的七、八家露天攤販開始發展。名字的由來很直觀：土地與屋頂的形狀像三角形；後來逐漸成為居民與外地人採買的朝市。",
      sources: [{ t: "三角市場的由來", u: "https://otaru-sankaku.com/about.html" }, { t: "滝波食堂介紹", u: "https://www.otaru-takinami.com/fr/5" }]
    },
    otaruCanal: {
      intro: "沿著水道散步，可以看見石造倉庫與港町留下的街景。白天適合觀察建築，傍晚則看水面與燈光；本次兩個時段經過，能感受同一條運河的不同表情。",
      story: "1923 年完成的小樽運河，曾供小船在貨輪與倉庫間搬運貨物。港口作業改變後，一度面臨填平計畫；1970 年代的市民保存運動讓歷史景觀受到重視，最後部分填埋並整建步道，1986 年形成今日熟悉的樣貌。",
      sources: [{ t: "小樽市・運河百年歷史", u: "https://www.city.otaru.lg.jp/docs/2023062000045/" }]
    },
    sakaimachi: {
      intro: "小樽的主要散步商圈，玻璃工藝、音樂盒、甜點與海產店聚在老街上。走路時也可以抬頭看建築：不少店面利用歷史建物，購物之外還能看見港町曾經的繁華。",
      story: "1983 年，北一硝子利用堺町的木骨石造倉庫開設三號館，成為這一帶觀光發展的重要起點。之後運河整建帶動旅遊，舊商業街逐漸轉變成今天的觀光商圈，老建築也有了新的用途。",
      sources: [{ t: "堺町通介紹", u: "https://otaru-sakaimachi.com/about/" }, { t: "商店街的發展背景", u: "https://otaru-sakaimachi.com/greeting/" }]
    },
    musicbox: {
      intro: "位於童話十字路口的音樂盒專門店，挑高大廳與不同材質的音樂盒營造懷舊氣氛。入口前的蒸氣鐘約每 15 分鐘鳴奏，可在逛店前後順便留意。",
      story: "本館原本是米穀商「共成」的辦公建築，店家官方記載建於 1915 年。門前蒸氣鐘則在 1994 年設置，由 Raymond Saunders 製作，與加拿大溫哥華 Gastown 的蒸氣鐘有姊妹關係。",
      sources: [{ t: "音樂盒堂本館與建築介紹", u: "https://www.otaru-orgel.co.jp/floorguide" }, { t: "蒸氣鐘的故事", u: "https://www.otaru-orgel.co.jp/steam-clock" }]
    },
    tengu: {
      intro: "搭纜車從山上俯看小樽街區、港口與日本海。這次安排傍晚到訪，可以先看城市與海岸的輪廓，再等街燈亮起，感受港町從日景轉入夜景。",
      story: "山頂除了展望台，也有天狗相關的設施與神社。「撫鼻天狗」是其中之一，園方介紹有撫摸鼻子祈願的習俗；可把它當作在地趣聞，是否順路參觀則看冬季開放與積雪狀況。",
      sources: [{ t: "天狗山官方散步提案", u: "https://tenguyama.ckk.chuo-bus.co.jp/spend/" }, { t: "山頂設施介紹", u: "https://tenguyama.ckk.chuo-bus.co.jp/ropeway/" }]
    },
    moai: {
      intro: "真駒內瀧野靈園內成排的 33 尊摩艾像，是園區醒目的景觀。可看石像大小與排列形成的遠近層次，冬季雪地也讓輪廓更突出；這裡同時是墓園，拍照時保持安靜。",
      sources: [{ t: "園方的摩艾像介紹", u: "https://www.takinoreien.com/pages/136?b_id=1253&detail=1&r_id=46" }, { t: "瀧野靈園導覽", u: "https://www.takinoreien.com/pages/315/" }]
    },
    atama: {
      intro: "安藤忠雄設計的禮拜空間，遠看只有佛像頭部露出山丘。穿過清水混凝土隧道後，才在開向天空的圓形空間仰望完整大佛，光線、風雪也成為參觀體驗的一部分。",
      story: "設計以園內原有的石佛為核心，安藤選擇用薰衣草丘包覆佛身，讓人經過迂迴動線與約 40 公尺的隧道後才與佛像相遇。園方說明，靈感來自石窟深處仰望佛像的感動；十二月看到的是冬季山丘景觀。",
      sources: [{ t: "頭大佛的建築理念", u: "https://www.takinoreien.com/pages/107/" }]
    },
    moiwa: {
      intro: "海拔約 531 公尺的山頂觀景點，可俯看札幌街區，天氣好時眺望石狩灣與遠山。纜車加上山腰到山頂的小纜車，讓這趟行程能直接把重點放在景色。",
      story: "札幌官方觀光資料介紹，藻岩山的愛努語名稱「Inkarushibe」有登高眺望四周之意，也記載它被愛努人視為珍重的山。沿山坡保留下來的藻岩原始林，則讓城市夜景背後多了一層自然與文化背景。",
      sources: [{ t: "札幌官方觀光・藻岩山", u: "https://www.sapporo.travel/zh-tw/spot/facility/mount_moiwayama/" }]
    },
    jogai: {
      intro: "緊鄰札幌中央卸賣市場的商店與食堂街區，魚攤、螃蟹、乾貨和海鮮料理集中在一起。除了吃早餐，也適合看看北海道食材如何進入城市的日常餐桌。",
      story: "旁邊的中央卸賣市場在 1959 年開場，場外商店每天從市場取得海產與農產。行程中逛的是一般旅客能購物用餐的場外街區，與負責批發交易的場內功能不同。",
      sources: [{ t: "北海道官方觀光・場外市場", u: "https://www.visit-hokkaido.jp/spot/detail_10005.html" }]
    },
    jingu: {
      intro: "位於圓山一帶、林木環繞的北海道代表性神社。從鳥居沿參道走向社殿，適合放慢腳步參拜；行程安排白天到訪，再到境內神宮茶屋稍作休息。",
      story: "神宮的創祀可追溯至 1869 年，1871 年在現在的圓山位置建成社殿，當時稱為「札幌神社」。1964 年增祀明治天皇後改稱「北海道神宮」，名稱的變化也連著北海道近代發展的歷史。",
      sources: [{ t: "北海道神宮由緒", u: "https://www.hokkaidojingu.or.jp/history.html" }]
    },
    shiroi: {
      intro: "以「白色戀人」餅乾與巧克力為主題的園區，適合逛建築庭園、買甜點與伴手禮。這次從白天下午待到點燈後，可以把園區日景與冬季燈飾一起看完。",
      story: "白色戀人於 1976 年推出，將白巧克力夾進薄脆貓舌餅乾，逐漸成為北海道伴手禮。園區前身「ISHIYA 巧克力工廠」在 1995 年完成，把製菓品牌的故事延伸成可以親自走訪的空間。",
      sources: [{ t: "ISHIYA・白色戀人的發展歷史", u: "https://shiroikoibito.ishiya.co.jp/history/" }, { t: "白色戀人公園的建築小故事", u: "https://www.shiroikoibitopark.jp/trivia/" }]
    },
    nixe: {
      intro: "以城堡水族館為中心的海洋公園，館內可看大型水槽、水下隧道與不同海域的魚類，戶外另有企鵝散步與動物表演。適合依表演時刻，在室內參觀與戶外活動間穿插。",
      story: "園區的尼克斯城以丹麥真實存在的 Egeskov 水上城堡為設計意象，呼應「北歐浪漫與海洋幻想」主題。進館後從二樓往上，再沿坡道逐層往下看水族展示，是這座城堡特別的參觀方式。",
      sources: [{ t: "尼克斯城與參觀動線", u: "https://nixe-aqua.com/castle/" }, { t: "園區表演介紹", u: "https://nixe-aqua.com/en/attraction/" }]
    },
    penguin: {
      intro: "企鵝從生活的企鵝館出發，在廣場上按自己的步調散步，有時停下、有時改變方向，近距離看牠們走路就是重點。依工作人員指示站在觀賞區，替牠們留出路線。",
      story: "園方介紹企鵝館飼養國王企鵝、非洲企鵝與巴布亞企鵝。看完散步回館內觀察時，可以比較牠們的體型、羽色和游泳姿態；當天參與散步的種類與隻數以現場為準。",
      sources: [{ t: "尼克斯企鵝館與散步介紹", u: "https://nixe-aqua.com/en/attraction/" }]
    },
    jigoku: {
      intro: "火山活動留下的爆裂火口地形，裸露的岩壁、噴氣孔與升起的白煙，是登別最有代表性的景觀。可沿開放的觀景路線感受地熱活動，冬季以現場開放範圍為準。",
      story: "谷地形成於俱多樂火山的活動，溫泉與蒸氣不斷湧出的模樣，讓人聯想到鬼居住的地獄，因此得名「地獄谷」。這些湧出的溫泉也供應附近旅館，下午看到的地景與晚上泡的湯其實緊密相連。",
      sources: [{ t: "登別觀光協會・地景與溫泉導覽（PDF）", u: "https://noboribetsu-spa.jp/files/yu-no-kuni-noboribetsu.pdf?v=20250514" }]
    },
    onsen: {
      intro: "旅館、餐飲與伴手禮店集中的溫泉小街，適合往返地獄谷時順路走走。街上的鬼與閻魔意象，延續了登別「地獄」地景的地方特色。",
      story: "登別地名源於愛努語，意思與「顏色濃的河川」有關。當地觀光協會也記載，瀧本金藏曾為妻子搭建溫泉小屋，成為日後溫泉旅宿發展的重要一頁；這段故事與本次入住的第一滝本館有淵源。",
      sources: [{ t: "登別市・地名由來", u: "https://www.city.noboribetsu.lg.jp/docs/2013012800108/" }, { t: "登別觀光協會・溫泉發展史", u: "https://noboribetsu-spa.jp/tw/history/" }]
    },
    cts: {
      intro: "北海道旅程的最後一站，除了搭機，也可以集中補買食品伴手禮。若報到前時間充裕，航廈三樓 Smile Road 的 ROYCE' Chocolate World 有巧克力展示、可隔玻璃觀看的製作區與限定商品。",
      sources: [{ t: "ROYCE' Chocolate World 官方介紹", u: "https://www.royce.com/brand/shop/detail/?no=111" }]
    }
  },

  /* ---------------------------------------------------------------------- */
  days: [
    {
      n: 1, date: "2026-12-17", md: "12.17", dow: "THU", dowZh: "四",
      title: "抵達札幌", sub: "UNIQLO・草莓大福・成吉思汗・狸小路購物",
      focus: "入住、UNIQLO 買保暖衣、ぽたぽたいちご 草莓大福、19:30 大黑屋、飯後公仔與扭蛋自由逛",
      cover: "tanuki",
      route: [
        { at: "cts", area: "新千歲機場" }, { at: "station", by: "train", pass: true, area: "札幌市區" }, { at: "granbell", by: "subway" },
        { at: "uniqlo", by: "walk" }, { at: "potapota", by: "walk" }, { at: "daikokuya", by: "walk" }, { at: "surugaya", by: "walk" },
        { at: "cpla", by: "walk" }, { at: "taito", by: "walk" }, { at: "granbell", by: "walk" }
      ],
      spots: ["station", "granbell", "potapota", "daikokuya", "tanuki", "surugaya", "cpla", "taito", "donki", "mybasket"],
      timeline: [
        { t: "08:30", title: "台中機場集合", note: "原行程", type: "move" },
        { t: "10:20", t2: "15:00", title: "台中 → 新千歲機場（JX318）", note: "原航班時間，仍以機票為準", type: "move" },
        { t: "15:00", t2: "16:30", title: "入境、領行李", note: "不排緊湊", type: "move" },
        { t: "16:30", t2: "17:30", title: "JR 快速 Airport 至札幌站，轉地鐵到すすきの", note: "JR 約 40 分到札幌站，轉地鐵南北線（往真駒內）2 站到すすきの，2 號出口步行約 8 分到飯店（狸小路 7 丁目旁）。札幌站走到飯店約 1.5 公里，拖行李走雪地太累；3 人也可以在札幌站搭計程車，約 10 分鐘。JR 自由席參考 ¥1,200，以實際票價為準", type: "move", place: "station" },
        { t: "17:30", t2: "18:10", title: "GRANBELL HOTEL TANUKI, SAPPORO Check-in", note: "先放行李、休息", type: "stay", place: "granbell" },
        { t: "18:10", t2: "19:00", title: "UNIQLO 札幌三越店（本館 10 樓）", note: "大通地區，通常至 20:00；先買 HEATTECH／手套／襪子。若入境延遲，可改在 12/18 去", type: "shop", map: "ユニクロ 札幌三越店" },
        { t: "19:00", t2: "19:15", title: "ぽたぽたいちご 本店：草莓大福", note: "從三越步行至 moyuk SAPPORO 的 OMOTASE-HONPO，買草莓大福；官網營業至 21:00。含移動與購買，若排隊較久就留到小樽店", type: "food", place: "potapota" },
        { t: "19:15", t2: "19:30", title: "步行前往大黑屋札幌2號店", note: "從狸小路往薄野，預留雪地步行與入店時間", type: "move" },
        { t: "19:30", t2: "20:50", title: "旭川成吉思汗 大黒屋 札幌2號店", note: "薄野附近，19:30 已訂位", type: "food", place: "daikokuya" },
        { t: "20:50", t2: "21:00", title: "步行前往 NORBESA", note: "往南3条西5丁目，預留雪地步行與上樓時間；累了可直接回飯店", type: "move" },
        { t: "21:00", t2: "21:40", title: "駿河屋公仔＋1F 萬代扭蛋（可選）", note: "NORBESA 3F 看主流動漫公仔、玩具與周邊，1F 約 640 面扭蛋。營業至 23:00，遊戲／卡牌／組裝模型等區域 22:00 先關", type: "shop", place: "surugaya" },
        { t: "21:45", t2: "22:10", title: "#C-pla 狸小路4丁目店（可選）", note: "從 NORBESA 步行到狸小路；兩層樓、官方列 1,063 個扭蛋箱位，營業至 23:00", type: "shop", place: "cpla" },
        { t: "22:10", t2: "後", title: "TAITO 夾娃娃／唐吉訶德，依體力擇一", note: "狸小路 4 丁目 TAITO 至 24:00、MEGA 唐吉本店 24 小時；第一天購物不必買太多。想回飯店前逛小型超市，需在 23:00 前完成購物", type: "shop", place: "taito", links: [{ t: "唐吉本店資訊", u: "https://www.donki.com/store/shop_detail.php?shop_id=555" }, { t: "飯店附近超市", u: "https://www.aeon-hokkaido.jp/mybasket/shop/minami2nishi8/" }] }
      ],
      notes: ["大黑屋札幌2號店地址「南5条西5丁目1-2 メイプル通りビル2F」。", "草莓大福排在晚餐前購買；若航班延誤或店內排隊，優先趕上 19:30 大黑屋訂位，12/19 小樽堺町通店可作備案。", "飯後購物全為可選，依體力挑 2–3 站即可。COCONO B2 ダイイチ超市 21:00 關店，第一晚不趕；飯店附近まいばすけっと南2条西8丁目店至 23:00。", "購物店家與營業時間於 2026/11/19 核對官方資料，臨時異動與商品庫存以店家公告／現場為準。"]
    },
    {
      n: 2, date: "2026-12-18", md: "12.18", dow: "FRI", dowZh: "五",
      title: "札幌北區＋市中心", sub: "諏訪神社・紅磚・SAMA・北大・燒肉・夜芭菲",
      focus: "諏訪神社、紅磚廳舍與時計台、11:30 SAMA、北海道大學、抹茶咖啡、吉卜力與三宅一生購物、18:15 德壽燒肉（已訂位）、夜芭菲",
      cover: "akarenga",
      route: [
        { at: "granbell" }, { at: "suwa", by: "subway" }, { at: "akarenga", by: "subway" }, { at: "clock", by: "walk" }, { at: "sama", by: "walk" },
        { at: "hokudai", by: "subway" }, { at: "parco", by: "subway" }, { at: "mitsukoshiIssey", by: "walk" }, { at: "xmas", by: "walk" },
        { at: "kplace", by: "subway" }, { at: "pal", by: "subway" }, { at: "granbell", by: "walk" }
      ],
      spots: ["suwa", "akarenga", "clock", "sama", "hokudai", "nanas", "parcoCharacters", "baobaoParco", "mitsukoshiIssey", "daimaruIssey", "xmas", "tvtower", "kplace", "pal"],
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
        { t: "15:20", t2: "16:10", title: "PARCO 7F 吉卜力／動漫＋1F BAO BAO", note: "喝完抹茶先上 7F 橡子共和國、JUMP SHOP 等角色店，再下 1F 看三宅一生 BAO BAO 包款；兩層合計約 50 分鐘，挑喜歡的店逛，營業至 20:00", type: "shop", place: "parcoCharacters", links: [{ t: "BAO BAO 1F 店頁", u: "https://sapporo.parco.jp/shop/detail/?cd=008074" }] },
        { t: "16:10", t2: "16:40", title: "札幌三越 4F：PLEATS PLEASE／me", note: "含從 PARCO 步行移動，看三宅一生摺衣與 me 系列；4F 營業至 19:00。若只想買包可略過，提早去市集；試穿較久則縮短市集停留", type: "shop", place: "mitsukoshiIssey" },
        { t: "16:40", t2: "17:30", title: "大通商圈、聖誕市集／白色燈樹節、札幌電視塔", note: "含步行到大通公園；市集 2026/11/20–12/25，11:00–21:00。看燈飾、電視塔外觀，購物若延遲就縮短停留；17:30 準時往札幌站", type: "spot", place: "xmas" },
        { t: "17:30", t2: "18:05", title: "地鐵到札幌站、前往 K-place", note: "預計 18:05 抵達カメイ札幌駅前ビル10F，預留訂位前 10 分鐘", type: "move" },
        { t: "18:15", t2: "20:15", title: "焼肉 徳寿 K-place", note: "18:15 已確認訂位，用餐至 20:15。JR 札幌站附近「カメイ札幌駅前ビル10F」", type: "food", place: "kplace" },
        { t: "20:15", t2: "20:45", title: "札幌站 → 薄野，前往夜芭菲", note: "地鐵南北線到すすきの，步行前往 PaL；預留出店與雪地步行時間", type: "move" },
        { t: "20:45", t2: "21:45", title: "Parfaiteria PaL 札幌夜芭菲", note: "薄野、南4条西2丁目；18:00 開門；不接受一般訂位，現場排隊，結束時間依候位狀況調整", type: "food", place: "pal" },
        { t: "21:45", t2: "後", title: "回狸小路飯店", note: "自由休息", type: "stay" }
      ],
      notes: ["三宅一生依系列選店：BAO BAO 包款在 PARCO 1F；PLEATS PLEASE／me 在三越 4F；ISSEY MIYAKE 主線另可去大丸札幌 5F（同層也有 PLEATS PLEASE／me，10:00–20:00）。", "大丸作為 PARCO／三越購物的替代選擇，需另留交通時間，不把三處全部塞入下午。燒肉結束後大丸已閉店；不論如何購物，都保留 18:05 抵達 K-place 的安排。"]
    },
    {
      n: 3, date: "2026-12-19", md: "12.19", dow: "SAT", dowZh: "六",
      title: "小樽一日遊", sub: "運河・堺町通・LeTAO・天狗山夕陽",
      focus: "11:30 CAFE' BAAL、運河、堺町通、LeTAO、天狗山夕陽及運河夜景",
      cover: "otaru-canal",
      route: [
        { at: "granbell", area: "札幌" }, { at: "station", by: "subway", pass: true }, { at: "takinami", by: "train", area: "小樽" }, { at: "baal", by: "walk" },
        { at: "otaruCanal", by: "walk" }, { at: "sakaimachi", by: "walk" }, { at: "letao", by: "walk" }, { at: "musicbox", by: "walk" },
        { at: "minamiOtaru", by: "walk", pass: true }, { at: "otaruSt", by: "train", pass: true }, { at: "tengu", by: "bus" }, { at: "otaruCanal", by: "bus" },
        { at: "otaruSt", by: "walk", pass: true }, { at: "station", by: "train", pass: true }, { at: "granbell", by: "subway" }
      ],
      spots: ["takinami", "baal", "otaruCanal", "sakaimachi", "musicbox", "letao", "potapotaOtaru", "tengu"],
      timeline: [
        { t: "09:30", title: "飯店出發", note: "薄野搭南北線到札幌，轉 JR 快速 Airport 或普通車到小樽", type: "move" },
        { t: "10:30", t2: "11:15", title: "三角市場、小樽街區散步（滝波食堂可選）", note: "如果有時間有胃，可到三角市場的滝波食堂吃海鮮丼；不接受預約，需現場登記候位。若候位或用餐會影響 BAAL 就略過，11:15 左右前往 CAFE' BAAL 等候開門", type: "spot", place: "takinami" },
        { t: "11:30", t2: "12:30", title: "CAFE' BAAL 牛排飯", note: "11:30 開門；午間營業至 14:30，不接受預約，現場候位", type: "food", place: "baal" },
        { t: "12:30", t2: "14:10", title: "小樽運河、堺町通、北一硝子、音樂盒堂、LeTAO", note: "LeTAO 下午茶／起司蛋糕、買小樽伴手禮。音樂盒堂本館 3F 可順逛已搬入的角色商品店「夢之音」（3F 至 17:45）。可選：ぽたぽたいちご 小樽堺町通り店（堺町2-17，11:00–17:00），第一天沒買到或想再吃草莓大福就順路買；若午餐候位較久，縮短逛街時間", type: "spot", place: "sakaimachi", links: [{ t: "草莓大福店舖資訊", u: "https://www.potapota15.com/" }, { t: "夢之音搬遷／音樂盒堂資訊", u: "https://www.otaru-orgel.co.jp/shop" }] },
        { t: "約 14:25", title: "南小樽 → 小樽", note: "原計畫 JR 搭 1 站；若時間趕改計程車或縮短商店時間", type: "move" },
        { t: "14:50", t2: "15:30", title: "小樽站 → 天狗山", note: "中央巴士 9 號，冬季班次另查", type: "move" },
        { t: "15:30", t2: "16:50", title: "天狗山纜車、夕陽及夜景", note: "日落約 16:04，纜車遇風雪可能停駛", type: "spot", place: "tengu" },
        { t: "17:00", t2: "18:00", title: "天狗山 → 小樽市區", note: "9 號巴士回本局前方向", type: "move" },
        { t: "18:00", t2: "18:40", title: "小樽運河夜間藍色點燈", note: "依當年度活動資訊與天氣", type: "spot", place: "otaruCanal" },
        { t: "19:00", t2: "後", title: "JR 回札幌＋晚餐", note: "晚餐待定，視體力安排壽司或拉麵", type: "food", flag: "dinner-1219" }
      ],
      notes: ["CAFE' BAAL 週二至週日 11:30–14:30、17:30–21:00，週一公休；午餐調整至 11:30，14:50 前往天狗山的安排不變。", "ぽたぽたいちご 小樽堺町通り店為草莓大福備選，官網營業時間 11:00–17:00；有空、有胃再買，安排在上天狗山前，保留原本的 LeTAO 與天狗山行程。"]
    },
    {
      n: 4, date: "2026-12-20", md: "12.20", dow: "SUN", dowZh: "日",
      title: "札幌南區", sub: "頭大佛・摩艾石像・藻岩山・根室花まる",
      focus: "頭大佛、摩艾石像、午餐奧芝商店湯咖哩、藻岩山（日落與夜景）、晚餐根室花まる迴轉壽司",
      cover: "moai",
      route: [
        { at: "granbell", area: "札幌市區" }, { at: "makomanai", by: "subway", pass: true }, { at: "moai", by: "bus", area: "滝野靈園" }, { at: "atama", by: "walk" },
        { at: "makomanai", by: "bus", pass: true }, { at: "okushiba", by: "subway" }, { at: "moiwa", by: "tram" }, { at: "moiwaTop", by: "ropeway" },
        { at: "hanamaru", by: "tram" }, { at: "tanuki", by: "walk" }, { at: "granbell", by: "walk" }
      ],
      spots: ["moai", "atama", "okushiba", "moiwa", "hanamaru", "daiichi"],
      timeline: [
        { t: "08:55", title: "從狸小路飯店出發", note: "南北線從薄野到「真駒內」終點站", type: "move" },
        { t: "09:40", t2: "10:10", title: "真駒內站等車", note: "找中央巴士真 108 乘車處", type: "move" },
        { t: "10:15", t2: "10:40", title: "真 108：真駒內站 → 頭大佛前", note: "冬季公車班次少；這班是參考時刻，出發前再核對", type: "move", warn: "出發前核對真 108 冬季班表" },
        { t: "10:40", t2: "11:15", title: "真駒內瀧野靈園：33 尊摩艾石像", note: "冬季雪景拍照，尊重墓園空間", type: "spot", place: "moai" },
        { t: "11:15", t2: "12:35", title: "安藤忠雄設計「頭大佛」", note: "大佛、混凝土隧道、園區咖啡／簡單休息；冬季開放約 10:00–15:00", type: "spot", place: "atama" },
        { t: "12:35", t2: "12:55", title: "返回頭大佛前巴士站", note: "提早候車", type: "move" },
        { t: "13:00", t2: "13:29", title: "真 108：頭大佛前 → 真駒內站", note: "錯過班次可能等一小時，務必注意", type: "move", warn: "錯過要等約一小時" },
        { t: "13:30", t2: "14:00", title: "南北線 真駒內 → 大通，步行到實家店", note: "不用轉車，約 20 分鐘；大通站往南1条西5丁目走約 5 分鐘", type: "move" },
        { t: "14:00", t2: "14:45", title: "午餐：スープカレー 奥芝商店 実家店", note: "鮮蝦湯底湯咖哩；午餐 11:00–15:00、湯賣完提早打烊。週日可能排隊，14:15 還沒入店就改吃附近其他店，以免趕不上日落", type: "food", place: "okushiba" },
        { t: "14:50", t2: "15:30", title: "市電 西4丁目 → ロープウェイ入口，轉纜車", note: "沿西線方向不用轉車，約 20 分鐘；再轉纜車山麓站接駁車或步行", type: "move" },
        { t: "15:30", t2: "17:30", title: "藻岩山纜車、山頂觀景台", note: "日落約 16:02，白天與夜景一次看；強風可能停駛", type: "spot", place: "moiwa" },
        { t: "18:00", title: "晚餐：回転寿司 根室花まる ココノススキノ店", note: "藻岩山下山後搭市電到「すすきの」站，店在 Cocono Susukino 地下 1 樓。不接受訂位，最後點餐 20:30；週日排隊可能很久，下山後直接過去抽號碼牌", type: "food", place: "hanamaru" },
        { t: "飯後", title: "COCONO B2 ダイイチ超市（21:00 前，可選）", note: "花丸同棟順路買水果、飲料或熟食；若用餐結束已近 21:00 就略過。折扣時段與剩餘品項依當天，不能保證半價", type: "shop", place: "daiichi" },
        { t: "飯後", title: "狸小路藥妝採購", note: "狸小路 4–5 丁目集中比價：藥品先看大國藥妝，北海道限定看札幌藥妝（サツドラ），保養彩妝比松本清、SUNDRUG。營業時間依各分店", type: "shop", place: "tanuki" }
      ],
      notes: []
    },
    {
      n: 5, date: "2026-12-21", md: "12.21", dow: "MON", dowZh: "一",
      title: "場外市場＋札幌西區", sub: "帝王蟹・Tokuichi 拉麵・北海道神宮・白色戀人公園",
      focus: "帝王蟹、Tokuichi 拉麵、北海道神宮與神宮茶屋、白色戀人公園、はちきょう海鮮居酒屋、藥妝採購",
      cover: "jingu",
      route: [
        { at: "granbell" }, { at: "crab", by: "subway" }, { at: "tokuichi", by: "walk" }, { at: "jingu", by: "subway" }, { at: "jinguchaya", by: "walk" },
        { at: "shiroi", by: "subway" }, { at: "hachikyo", by: "subway" }, { at: "tanuki", by: "walk" }, { at: "granbell", by: "walk" }
      ],
      spots: ["jogai", "crab", "tokuichi", "jingu", "jinguchaya", "shiroi", "hachikyo"],
      timeline: [
        { t: "08:20", title: "飯店出發", note: "大通搭東西線到二十四軒站，步行到場外市場", type: "move" },
        { t: "09:00", t2: "10:15", title: "札幌場外市場：帝王蟹海鮮早午餐", note: "根室杉山水產 UME堂；先問蟹種、重量、總價", type: "food", place: "crab" },
        { t: "10:15", t2: "11:00", title: "場外市場散步、排隊準備", note: "上午海鮮別吃得太撐", type: "spot", place: "jogai" },
        { t: "11:00", t2: "12:00", title: "NOUILLES JAPONAISE とくいち", note: "店就在場外市場區、二十四軒站步行約 6 分鐘；09:00–15:00、週三休、不接受預約，排隊時間不一定", type: "food", place: "tokuichi" },
        { t: "12:00", t2: "12:45", title: "地鐵往圓山公園站", note: "二十四軒 → 圓山公園（東西線）", type: "move" },
        { t: "12:45", t2: "13:20", title: "北海道神宮、圓山公園", note: "12 月日照短，參拜放白天，之後到境內神宮茶屋休息", type: "spot", place: "jingu" },
        { t: "13:20", t2: "13:40", title: "神宮茶屋：點心、熱飲休息", note: "神宮境內，可買現烤福レ餅或神宮茶屋餅；冬季 09:00–16:00、最後點餐 15:45。依食量點餐，若排隊較久則縮短停留", type: "food", place: "jinguchaya" },
        { t: "13:40", t2: "14:20", title: "前往白色戀人公園", note: "圓山公園搭東西線到宮之澤，步行 7–10 分鐘", type: "move" },
        { t: "14:20", t2: "16:00", title: "白色戀人公園、甜點、伴手禮", note: "付費區最晚入場 16:30；白色戀人霜淇淋", type: "spot", place: "shiroi" },
        { t: "16:00", t2: "17:10", title: "白色戀人公園 2026 聖誕燈飾", note: "官方點燈 16:00–19:00；先日景後夜景", type: "spot" },
        { t: "17:10", t2: "18:00", title: "宮之澤 → 大通", note: "東西線回市中心，先買伴手禮再吃晚餐", type: "move" },
        { t: "18:00", t2: "19:00", title: "伴手禮採購、前往晚餐", note: "大通百貨地下街或狸小路，買六花亭、ROYCE'、札幌農學校餅乾等。需要時先回飯店放重物，預留步行到薄野的時間；藥妝留飯後", type: "shop" },
        { t: "19:00", t2: "20:30", title: "晚餐：海味 はちきょう 本店（暫排）", note: "3 位大人，網路訂位約 11/22 前後才開放 12/21（只開放約 30 天內），開放後盡快訂。從大通走 Pole Town 地下街到すすきの站一帶約 5 分鐘，店在南3条西3丁目；名物是鮭魚卵飯「つっこ飯」，全席禁菸。超過預約時間 15 分鐘會被取消", type: "food", place: "hachikyo", flag: "hachikyo-book" },
        { t: "20:30", t2: "後", title: "狸小路藥妝採購、回飯店", note: "依體力及各分店營業時間採購，伴手禮已優先安排在飯前", type: "shop", place: "tanuki" }
      ],
      notes: ["場外市場與 Tokuichi 都吃很飽，可把 Tokuichi 改為 09:15 提前排隊／吃拉麵，帝王蟹之後再吃，依排隊與個人食量彈性調整。",
        "可選甜點備案：日本茶と和菓子 エフ（圓山公園站旁，週一一般 12:00 後），當天已經很滿，不強求排入。"]
    },
    {
      n: 6, date: "2026-12-22", md: "12.22", dow: "TUE", dowZh: "二",
      title: "札幌 → 登別", sub: "尼克斯水族館・企鵝散步・地獄谷・溫泉",
      focus: "尼克斯交行李直送飯店、企鵝 11:00 首選／14:15 備案、地獄谷、溫泉",
      cover: "jigoku",
      route: [
        { at: "granbell", area: "札幌" }, { at: "station", by: "taxi", pass: true }, { at: "noboribetsuSt", by: "train", pass: true, area: "登別" }, { at: "nixe", by: "walk" },
        { at: "noboribetsuSt", by: "walk", pass: true }, { at: "onsen", by: "bus" }, { at: "jigoku", by: "walk" }, { at: "noboriHotel", by: "walk" }
      ],
      spots: ["nixe", "penguin", "jigoku", "onsen", "noboriHotel"],
      timeline: [
        { t: "08:00", title: "札幌狸小路飯店退房，帶行李到札幌車站", note: "帶行李到札幌站：3 人搭計程車約 10 分鐘最省事，或走到すすきの站搭地鐵南北線 2 站。行李帶到尼克斯再辦理配送；護照、貴重品、電子設備、藥品及下午用品另裝隨身包", type: "stay" },
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
      route: [
        { at: "noboriHotel", area: "登別溫泉" }, { at: "onsen", by: "walk" }, { at: "cts", by: "bus", area: "新千歲機場" }
      ],
      spots: ["noboriHotel", "onsen", "cts"],
      timeline: [
        { t: "07:30", t2: "09:30", title: "飯店早餐、泡溫泉、整理行李", note: "第一滝本館。若昨天沒去地獄谷且天氣好，可在不趕車前提下散步", type: "stay", place: "noboriHotel" },
        { t: "10:00", t2: "11:20", title: "退房、最後買小伴手禮", note: "第一滝本館退房時間 10:00；至登別溫泉巴士站候車", type: "shop" },
        { t: "11:45", t2: "12:50", title: "預約制道南巴士：登別溫泉 → 新千歲機場國際線", note: "官方定期時刻，成人 ¥1,900–2,400 依上下車點不同；請事先預約，雪天可能延誤", type: "move", warn: "需事先預約",
          links: [{ t: "道南巴士時刻／預約", u: "https://www.donanbus.co.jp/map/noboribetsu_airport/" }] },
        { t: "12:50", t2: "13:15", title: "先辦退稅：海關免稅自助機台", note: "下巴士後、托運行李前，到國際線出境大廳的機台刷護照；綠色就完成，紅色到海關檢查處給海關看商品。所有退稅品要在身邊，托運後不能補辦", type: "move", warn: "托運前完成", links: [{ t: "退稅教學", u: "#taxfree" }] },
        { t: "13:15", t2: "14:00", title: "新千歲機場午餐、最後伴手禮", note: "ROYCE'、白色戀人、六花亭、北海道牛奶點心等，視航廈店家", type: "shop", place: "cts" },
        { t: "14:00", t2: "左右", title: "國際線報到、安檢、出境", note: "以航空公司截止時間為準", type: "move" },
        { t: "16:00", title: "搭機返台（JX319）", note: "已核對機票：16:00 新千歲起飛，19:55 抵達台中", type: "move" }
      ],
      notes: []
    }
  ],

  /* ---------------------------------------------------------------------- */
  shopping: [
    { where: "UNIQLO 札幌三越店（本館 10 樓）", when: "12/17 傍晚", what: "保暖衣、HEATTECH、襪子等；若航班晚點改 12/18" },
    { where: "ぽたぽたいちご 本店（moyuk SAPPORO）", when: "12/17 19:00", what: "草莓大福；官網營業時間 10:00–21:00，排在 UNIQLO 後、大黑屋晚餐前" },
    { where: "駿河屋 NORBESA 3F／萬代扭蛋 1F", when: "12/17 21:00，可選", what: "公仔、動漫周邊、新品／二手玩具；1F 扭蛋合計 640 面。11:00–23:00，遊戲／卡牌／組裝模型等區域 22:00 先關", place: "surugaya" },
    { where: "#C-pla 狸小路4丁目店", when: "12/17 21:45，可選", what: "兩層樓，官方列 1,063 個扭蛋箱位；10:00–23:00", place: "cpla" },
    { where: "TAITO STATION 狸小路4丁目店", when: "12/17 22:10 後，擇一", what: "夾娃娃、動漫景品、拍貼；10:00–24:00，與唐吉依體力擇一", place: "taito" },
    { where: "MEGA 唐吉訶德札幌狸小路本店", when: "飯後自由採購", what: "狸小路 4 丁目，24 小時；零食、日用品與伴手禮，可留到其他店關門後", place: "donki" },
    { where: "まいばすけっと南2条西8丁目店", when: "回飯店前，可選", what: "飯店附近的小型超市，07:00–23:00；補買飲料、早餐或宵夜，折扣依當天", place: "mybasket" },
    { where: "nana's green tea 札幌PARCO 5 樓", when: "12/18 14:20", what: "抹茶甜點、抹茶拿鐵；PARCO 一般至 20:00" },
    { where: "札幌PARCO 7F 橡子共和國／JUMP SHOP", when: "12/18 15:20–16:10", what: "吉卜力與主流動漫周邊，同層有ナガノマーケット、mofusand、#C-pla；10:00–20:00，與 1F BAO BAO 共用 50 分鐘購物時段", place: "parcoCharacters" },
    { where: "BAO BAO ISSEY MIYAKE 札幌PARCO 1F", when: "12/18 15:20–16:10", what: "三宅一生幾何包款與雜貨，逛完 7F 順路下樓；10:00–20:00，款式／顏色依庫存", place: "baobaoParco" },
    { where: "PLEATS PLEASE／me 札幌三越 本館4F", when: "12/18 16:10–16:40", what: "三宅一生摺衣與 me 系列；10:00–19:00，與 10F UNIQLO 的關店時間不同；只想看包款可略過", place: "mitsukoshiIssey" },
    { where: "ISSEY MIYAKE 大丸札幌店 5F", when: "札幌站購物備選", what: "主線服飾、PLEATS PLEASE、me；10:00–20:00。作為 PARCO／三越的替代選擇，需留交通時間，不排在 12/18 燒肉後", place: "daimaruIssey" },
    { where: "Parfaiteria PaL（薄野）", when: "12/18 20:45", what: "札幌夜芭菲，季節限定，不能預約；燒肉後預留交通與排隊時間" },
    { where: "LeTAO／北一硝子周邊", when: "12/19 小樽", what: "起司蛋糕、餅乾、玻璃小物" },
    { where: "夢之音・小樽音樂盒堂本館3F", when: "12/19 午後順逛", what: "角色商品店已搬入音樂盒堂本館，跟原本行程一起看；本館 09:00–18:00，2F／3F 至 17:45", place: "musicbox" },
    { where: "ぽたぽたいちご 小樽堺町通り店（備選）", when: "12/19 午後，可選", what: "堺町2-17，11:00–17:00；逛堺町通時順路買草莓大福，不延後前往天狗山" },
    { where: "狸小路藥妝店（4–5 丁目比價）", when: "12/20 或 12/21 晚上", what: "網友最常推：大國藥妝（感冒藥、胃藥、合利他命等藥品常最便宜）、札幌藥妝サツドラ（北海道限定商品）、松本清與 SUNDRUG（保養、彩妝）、MEGA 唐吉（24 小時）。各家都有優惠券，同一商品用手機比稅後價。11/1 起退稅改為出境時才退，藥妝拆封用掉就不能退（見下方退稅教學）", place: "tanuki" },
    { where: "ダイイチ COCONO SUSUKINO B2", when: "12/20 花丸飯後，可選", what: "生鮮、熟食超市 10:00–21:00；時間太晚就略過。未公布固定降價時段，折扣與剩餘品項依當天", place: "daiichi" },
    { where: "白色戀人公園", when: "12/21 下午", what: "白色戀人餅乾、限定商品、霜淇淋" },
    { where: "札幌市區百貨地下街", when: "12/21 晚上", what: "六花亭、ROYCE'、札幌農學校、北菓樓等伴手禮；百貨約晚上 8 點打烊，先逛" },
    { where: "新千歲機場", when: "12/23 中午", what: "最後補買食品、機場限定商品；保留報到時間" }
  ],

  /* 出發前需完成事項（Notion 待辦，皆尚未勾選） */
  checklist: [
    { id: "hachikyo-book", text: "11/22 前後上 Google 地圖「預訂」（Toreta）訂 12/21 19:00 はちきょう本店 3 位；網路只開放約 30 天內的日期，開放後盡快訂", link: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("海味はちきょう 本店"), linkText: "Google 地圖" },
    { id: "dinner-1219", text: "決定 12/19 小樽回札幌後的晚餐（目前未定，可視體力吃壽司或拉麵）" },
    { id: "seat", text: "48 小時前選座位" },
    { id: "yen", text: "領日幣" },
    { id: "insurance", text: "旅平險" },
    { id: "taxfree", text: "看懂 11/1 起的退稅新制：結帳先付含稅價，12/23 托運行李前到機場海關機台刷護照，確認後店家才退稅；在日本要吃要用的另外結帳", link: "#taxfree", linkText: "退稅教學" },
    { id: "suica", text: "西瓜卡" },
    { id: "daikokuya", done: true, text: "確認 12/17 19:30 大黑屋札幌2號店訂位", link: "https://yoyaku.toreta.in/daikokuya-sapporo2go", linkText: "官方預約頁" },
    { id: "sama", done: true, text: "確認 12/18 11:30 Soup Curry SAMA 大通店是否已訂位" },
    { id: "kplace-confirmed", done: true, text: "已確認 12/18 18:15–20:15 德壽 K-place 燒肉訂位", link: "https://www.tokuju.com/shop/k-place/", linkText: "餐廳官網" },
    { id: "crab", done: true, text: "確認 12/21 場外市場帝王蟹店家（根室杉山水產 UME堂）", link: "https://maps.app.goo.gl/PvbUW3zJbGQ2npHG7", linkText: "地圖" },
    { id: "ma108", text: "核對 12/20 頭大佛公車真 108 冬季班表、藻岩山纜車天候", link: "https://transfer.navitime.biz/chuo-bus/pc/map/Top", linkText: "中央巴士查詢" },
    { id: "nobori-delivery-prep", text: "12/22 已選尼克斯直送第一滝本館：準備住宿確認資料、另裝隨身物品與下午用品", link: "https://nixe-aqua.com/guide/", linkText: "配送／寄存資訊" },
    { id: "bus", text: "預訂 12/23 登別溫泉 → 新千歲機場直達巴士", link: "https://www.donanbus.co.jp/map/noboribetsu_airport/", linkText: "道南巴士官方資訊" },
    { id: "flight", done: true, text: "核對 12/23 回程航班時間（16:00 起飛，19:55 抵達）" },
    { id: "weather", text: "出發前一週看網站「天氣」區的預報（12/2 起陸續出現），並確認 JR 與巴士是否停駛" }
  ],

  links: [
    { t: "ぽたぽたいちご 草莓大福・札幌／小樽店舖資訊", u: "https://www.potapota15.com/" },
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

  /* ----------------------------------------------------------------------
     每日路線地圖：route 的 at 對應這裡的點；by 是「從上一站怎麼過來」
     by：walk 步行／subway 地鐵／train JR／tram 市電／bus 巴士／ropeway 纜車／taxi 計程車
     pass: true 只畫小圓點（轉乘車站），不編號
     ll 是 [緯度, 經度]；label 是地圖上的短名稱；不在 places 裡的點要另寫 name 與 kind
     ---------------------------------------------------------------------- */
  map: {
    pts: {
      cts: { ll: [42.788, 141.681], label: "新千歲機場" },
      station: { ll: [43.06866, 141.35079], label: "札幌站" },
      granbell: { ll: [43.05609, 141.34582], label: "飯店" },
      uniqlo: { ll: [43.05957, 141.35306], label: "三越 UNIQLO", name: "札幌三越 UNIQLO（本館 10F）", kind: "shop", map: "ユニクロ 札幌三越店" },
      potapota: { ll: [43.05763, 141.35353], label: "草莓大福" },
      daikokuya: { ll: [43.0541, 141.351], label: "大黑屋" },
      surugaya: { ll: [43.05608, 141.35098], label: "駿河屋" },
      cpla: { ll: [43.05735, 141.35175], label: "C-pla 扭蛋" },
      taito: { ll: [43.05748, 141.35262], label: "TAITO" },
      suwa: { ll: [43.07605, 141.35392], label: "諏訪神社" },
      akarenga: { ll: [43.06397, 141.34802], label: "紅磚廳舍" },
      clock: { ll: [43.06255, 141.35364], label: "時計台" },
      sama: { ll: [43.057, 141.3503], label: "SAMA 湯咖哩" },
      hokudai: { ll: [43.06962, 141.34344], label: "北海道大學" },
      parco: { ll: [43.05873, 141.35316], label: "PARCO", name: "札幌 PARCO（5F 抹茶・7F 吉卜力・1F BAO BAO）", kind: "shop", map: "札幌PARCO" },
      mitsukoshiIssey: { ll: [43.0598, 141.3527], label: "三越 4F" },
      xmas: { ll: [43.0607, 141.3547], label: "聖誕市集" },
      kplace: { ll: [43.06616, 141.35363], label: "德壽燒肉" },
      pal: { ll: [43.0551, 141.356], label: "夜芭菲" },
      otaruSt: { ll: [43.1974, 140.9942], label: "小樽站", name: "JR 小樽站", kind: "spot", map: "小樽駅" },
      minamiOtaru: { ll: [43.18708, 141.00764], label: "南小樽站", name: "JR 南小樽站", kind: "spot", map: "南小樽駅" },
      takinami: { ll: [43.19854, 140.99387], label: "三角市場" },
      baal: { ll: [43.19929, 140.99423], label: "BAAL 牛排飯" },
      otaruCanal: { ll: [43.19784, 141.00328], label: "小樽運河" },
      sakaimachi: { ll: [43.19435, 141.00607], label: "堺町通" },
      letao: { ll: [43.19131, 141.00744], label: "LeTAO" },
      musicbox: { ll: [43.19058, 141.00779], label: "音樂盒堂" },
      tengu: { ll: [43.17794, 140.97516], label: "天狗山纜車" },
      makomanai: { ll: [42.99117, 141.35843], label: "真駒內站", name: "地鐵真駒內站（轉真 108 巴士）", kind: "spot", map: "真駒内駅" },
      moai: { ll: [42.9227, 141.3655], label: "摩艾石像" },
      atama: { ll: [42.92054, 141.36274], label: "頭大佛" },
      okushiba: { ll: [43.0589, 141.35], label: "奧芝商店" },
      moiwa: { ll: [43.03161, 141.3331], label: "藻岩山纜車" },
      moiwaTop: { ll: [43.02224, 141.32245], label: "藻岩山山頂", name: "藻岩山山頂展望台", kind: "spot", map: "藻岩山 山頂展望台" },
      hanamaru: { ll: [43.05513, 141.35262], label: "根室花まる" },
      tanuki: { ll: [43.05718, 141.35211], label: "狸小路" },
      crab: { ll: [43.07059, 141.32033], label: "帝王蟹" },
      tokuichi: { ll: [43.07047, 141.32021], label: "とくいち" },
      jingu: { ll: [43.0548, 141.3083], label: "北海道神宮" },
      jinguchaya: { ll: [43.056, 141.3092], label: "神宮茶屋" },
      shiroi: { ll: [43.08869, 141.27168], label: "白色戀人公園" },
      hachikyo: { ll: [43.0566, 141.3548], label: "はちきょう" },
      noboribetsuSt: { ll: [42.45201, 141.1808], label: "登別站", name: "JR 登別站", kind: "spot", map: "登別駅" },
      nixe: { ll: [42.45506, 141.18276], label: "尼克斯" },
      onsen: { ll: [42.4928, 141.1462], label: "登別溫泉" },
      jigoku: { ll: [42.49824, 141.14798], label: "地獄谷" },
      noboriHotel: { ll: [42.49475, 141.14451], label: "第一滝本館" }
    }
  },

  /* ----------------------------------------------------------------------
     退稅教學：2026/11/1 起的「先付後退」（リファンド方式）
     ---------------------------------------------------------------------- */
  taxfree: {
    lead: "2026/11/1 起，日本免稅改成「先付後退」：結帳時先付含稅價，出境時讓海關確認東西真的帶出國，店家才把消費稅退給你。這趟 12/17–12/23 的購物全部適用新制。",
    steps: [
      { when: "購買時", where: "在店裡", title: "出示護照、付含稅價、登記退款方式", items: [
        "帶護照正本，結帳時說要免稅（Tax-free）。入境前後先登錄 Visit Japan Web 會更快。",
        "先付含稅價：多數商品 10%，食品 8%。",
        "照店員引導登記退款方式（信用卡、行動支付或退款帳戶），每家店不一樣。",
        "同一家店、同一天，稅前滿 ¥5,000 才能辦。收據收好，海關可能會看。"
      ] },
      { when: "出境時", where: "12/23 新千歲機場", title: "托運行李前，先到海關免稅自助機台", items: [
        "機台在國際線出境大廳、安檢前（非管制區），航空公司報到托運之前。",
        "放上護照，幾秒就判定：綠色＝完成；紅色＝到旁邊的海關檢查處，把商品拿給海關看。",
        "所有退稅品都要在身邊，包含還沒托運的行李箱。托運後就不能補辦，行李也拿不回來。",
        "也可以用 Visit Japan Web，在出境大廳專用 Wi-Fi 範圍內線上辦（安檢前）。",
        "購買後 90 天內出境才有效。"
      ] },
      { when: "退款", where: "海關確認後", title: "由免稅店或退款業者退回消費稅", items: [
        "退到購買時登記的方式；多久入帳、要不要手續費，依各店規定。",
        "唐吉訶德：退到信用卡、支付寶、微信支付免手續費；選機場領現金要手續費。",
        "大國、松本清、サツドラ等其他店，結帳時問清楚退款方式、手續費和入帳時間。"
      ] }
    ],
    trip: [
      "要帶回台灣的藥妝、零食：辦免稅，買完不要拆封，回飯店收進行李箱。",
      "在日本就要吃、要用的（零食、暖暖包、面膜）：另外結帳、不辦免稅。",
      "三個人各用自己的護照買、各自刷機台；誰的護照買的，東西就要跟著誰。",
      "12/23 12:50 巴士到機場 → 先刷退稅機台（行李還在身邊）→ 再報到托運 → 午餐、伴手禮。",
      "退稅品放在好打開的位置、收據集中一袋，抽到紅色比較快。"
    ],
    rules: [
      "拆封、吃掉、用掉就不能退。已經用掉的，不要刷機台，直接到海關窗口說明。",
      "一張收據一起算：同一張收據裡少一樣，整張都不退。",
      "托運後才想到，不能補辦。",
      "只能買自己出境時帶得走的數量。",
      "退的是消費稅，扣掉手續費可能更少；差一點才滿 ¥5,000 不用硬湊。"
    ],
    links: [
      { t: "觀光廳中文說明單（PDF）", u: "https://www.mlit.go.jp/kankocho/tax-free/content/002028627.pdf" },
      { t: "觀光廳中文說明影片", u: "https://youtu.be/GToXIc1i9VI" },
      { t: "觀光廳 出境與海關 Q&A", u: "https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00050.html" },
      { t: "各機場機台位置（日本海關）", u: "https://www.customs.go.jp/kaigairyoko/taxrefund/map.htm" },
      { t: "Visit Japan Web", u: "https://services.digital.go.jp/visit-japan-web/" },
      { t: "唐吉訶德免稅說明", u: "https://www.donki.com/service/tax_free/jp/tax_free.php" }
    ],
    source: "2026/11/19 依觀光廳、日本海關官方資料整理；各店退款方式與手續費以店家說明為準。"
  },

  /* ----------------------------------------------------------------------
     天氣：出發前約 16 天起，網站會自動抓 Open-Meteo 預報；還沒有預報的日子顯示氣象廳 12 月平年值
     ---------------------------------------------------------------------- */
  weather: {
    places: {
      sapporo: { name: "札幌", lat: 43.0618, lon: 141.3545, hi: 2.0, lo: -4.0, link: "https://tenki.jp/forecast/1/2/1400/1100/10days.html" },
      otaru: { name: "小樽", lat: 43.199, lon: 141.0026, hi: 1.6, lo: -3.8, link: "https://tenki.jp/forecast/1/2/1600/1203/10days.html" },
      noboribetsu: { name: "登別溫泉", lat: 42.4963, lon: 141.146, hi: 1.0, lo: -4.9, link: "https://tenki.jp/forecast/1/4/2100/1230/10days.html" }
    },
    days: { 1: "sapporo", 2: "sapporo", 3: "otaru", 4: "sapporo", 5: "sapporo", 6: "noboribetsu", 7: "noboribetsu" },
    normalNote: "平年值為氣象廳 1991–2020 年 12 月平均（登別取登別溫泉附近測站）。札幌、小樽 12 月平均約 28 天下雪。"
  },

  /* 冬季提醒：整理自 Notion 各日備註 */
  winterTips: [
    "12 月日照短，日落約 16:00，參拜與戶外行程放白天。",
    "天狗山、藻岩山纜車遇強風或風雪可能停駛。",
    "下雪注意腳下，天黑後別硬走雪地。",
    "真 108 冬季班次少，錯過可能要等一小時。",
    "道南巴士雪天可能延誤；出發前查 JR 與巴士是否停駛。",
    "藥妝伴手禮不要買超重；11/1 起退稅改為出境時在機場海關辦，退稅品別拆封、放好拿。"
  ]
};
