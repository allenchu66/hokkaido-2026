/* ==========================================================================
   HOKKAIDO TRAVEL JOURNAL — 畫面渲染
   資料在 data.js；這個檔案只負責把資料畫成網頁。
   ========================================================================== */
(function () {
  "use strict";

  var T = window.TRIP;
  var CREDITS = window.PHOTO_CREDITS || {};
  var IMG = "assets/img/";
  var $ = function (s) { return document.querySelector(s); };

  /* ---------- 小工具 ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function mapUrl(q) { return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q); }
  function ext(u, t) { return '<a class="text-link" href="' + esc(u) + '" target="_blank" rel="noopener">' + esc(t) + "</a>"; }

  var confirmIndex = {};
  T.confirms.forEach(function (c, i) { confirmIndex[c.id] = { c: c, n: i + 1 }; });

  var LEVEL = {
    conflict: { label: "資訊矛盾", cls: "" },
    tight: { label: "時間偏緊", cls: " flag--tight" },
    pending: { label: "待確認", cls: " flag--pending" }
  };
  function flag(id) {
    var f = confirmIndex[id];
    if (!f) return "";
    var lv = LEVEL[f.c.level] || LEVEL.pending;
    return '<a class="flag' + lv.cls + '" href="#cf-' + esc(id) + '">' + lv.label + "・第 " + f.n + " 項</a>";
  }
  function chip(text, tone) {
    if (!text) return "";
    return '<span class="chip' + (tone ? " chip--" + tone : "") + '">' + esc(text) + "</span>";
  }
  function placeLinks(p, extraMap) {
    var out = [];
    if (p && p.mapUrl) out.push(ext(p.mapUrl, "地圖"));
    else if (p && p.map) out.push(ext(mapUrl(p.map), "地圖"));
    else if (extraMap) out.push(ext(mapUrl(extraMap), "地圖"));
    ((p && p.links) || []).forEach(function (l) { out.push(ext(l.u, l.t)); });
    return out.join("");
  }
  function placeByImg(img) {
    var fallback = null;
    for (var k in T.places) {
      var p = T.places[k];
      if (p.img !== img) continue;
      if (!p.sample) return p;
      fallback = fallback || p;
    }
    return fallback;
  }

  /* 日本時間的今天，用來顯示倒數或「今天是第幾天」 */
  function todayInJapan() {
    try {
      return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Tokyo", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
    } catch (e) {
      var d = new Date(); return d.toISOString().slice(0, 10);
    }
  }
  function dayDiff(a, b) {
    var pa = a.split("-").map(Number), pb = b.split("-").map(Number);
    return Math.round((Date.UTC(pb[0], pb[1] - 1, pb[2]) - Date.UTC(pa[0], pa[1] - 1, pa[2])) / 86400000);
  }
  var today = todayInJapan();
  var todayDay = null;
  T.days.forEach(function (d) { if (d.date === today) todayDay = d.n; });

  /* ---------- 主視覺 ---------- */
  function renderHero() {
    $("#heroZh").textContent = T.meta.titleZh;
    $("#heroMeta").innerHTML =
      '<span class="date">' + esc(T.meta.dateText) + "</span>" +
      "<span>" + esc(T.meta.lengthEn) + "</span>" +
      "<span>" + esc(T.meta.route) + "</span>";

    var pill = $("#heroPill");
    var until = dayDiff(today, T.meta.start);
    if (todayDay) {
      pill.href = "#day-" + todayDay;
      pill.innerHTML = "今天是 <b>Day " + todayDay + "</b> → 看今日行程";
    } else if (until > 0) {
      pill.innerHTML = "距離出發還有 <b>" + until + "</b> 天 → 看行程";
    } else {
      pill.innerHTML = "旅程回顧 → 看行程";
    }

    var c = CREDITS.hero;
    if (c) {
      $("#heroCredit").innerHTML = 'Photo: <a href="' + esc(c.source) + '" target="_blank" rel="noopener">' +
        esc(c.author) + "</a> · " + esc(c.license);
    }
  }

  /* ---------- 簡介與旅行資訊 ---------- */
  function renderPrologue() {
    $("#introText").innerHTML = T.meta.intro.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");

    var rows = [
      ["日期", "2026/12/17（四）— 12/23（三）"],
      ["天數", esc(T.meta.lengthText)],
      ["人數", esc(T.meta.people)],
      ["交通", "大眾運輸：JR・地鐵・市電・巴士<br><span style=\"color:var(--muted);font-size:13px\">不自駕</span>"],
      ["住宿", "札幌 GRANBELL HOTEL TANUKI<br><span style=\"color:var(--muted);font-size:13px\">12/17–12/22・5 晚</span><br>登別 第一滝本館<br><span style=\"color:var(--muted);font-size:13px\">12/22・1 晚</span>"],
      ["航班", "星宇航空 JX318 ／ JX319<br><span style=\"color:var(--muted);font-size:13px\">台中 RMQ ⇄ 新千歲 CTS</span>"],
      ["區域", "札幌・小樽・登別"]
    ];
    $("#facts").innerHTML = rows.map(function (r) {
      return '<div class="row"><dt>' + r[0] + "</dt><dd>" + r[1] + "</dd></div>";
    }).join("");

    var conflicts = T.confirms.filter(function (c) { return c.level === "conflict"; }).length;
    $("#confirmStrip").outerHTML = T.confirms.length ?
      '<a class="confirm-strip" id="confirmStrip" href="#confirm"><span class="ico">!</span><span>' +
      "目前還有 <b>" + T.confirms.length + " 項</b>待確認或待補" + (conflicts ? "，其中 <b>" + conflicts + " 項是資訊矛盾</b>" : "") +
      "。網站依 Notion 呈現，沒有擅自更改。" + '<br><span class="go">查看待確認清單</span></span></a>' : "";
    $("#confirmCount").textContent = T.confirms.length;
  }

  /* ---------- 航班 ---------- */
  function renderFlights() {
    $("#flightList").innerHTML = T.flights.map(function (f, i) {
      return '<article class="ticket reveal">' +
        '<div class="ticket-main">' +
          '<div class="ticket-top"><span class="ticket-no">' + esc(f.no) + '</span><span class="ticket-label">' + (i === 0 ? "去程 · OUTBOUND" : "回程 · RETURN") + "</span></div>" +
          '<p class="ticket-date">' + esc(f.date) + "</p>" +
          '<div class="ticket-route" style="margin-top:12px">' +
            '<div class="ticket-end"><div class="ticket-code">' + esc(f.from) + '</div><div class="ticket-time">' + esc(f.dep) + '</div><div class="ticket-place">' + esc(f.fromName) + "<br>" + esc(f.fromTerm) + "</div></div>" +
            '<div class="ticket-mid"><div class="plane">✈︎</div><div style="margin-top:4px">' + esc(f.dur) + '</div><div>直飛</div></div>' +
            '<div class="ticket-end"><div class="ticket-code">' + esc(f.to) + '</div><div class="ticket-time">' + esc(f.arr) + '</div><div class="ticket-place">' + esc(f.toName) + "<br>" + esc(f.toTerm) + "</div></div>" +
          "</div>" +
        "</div>" +
        '<div class="ticket-foot"><span>' + esc(f.plane) + "</span><span>" + esc(f.cabin) + "</span><span>" + esc(f.tz) + "</span>" + (f.flag ? flag(f.flag) : "") + "</div>" +
      "</article>";
    }).join("");
  }

  /* ---------- 總覽 ---------- */
  function renderOverview() {
    $("#overviewList").innerHTML = T.days.map(function (d) {
      return '<li class="ov-item reveal' + (d.n === todayDay ? " is-today" : "") + '"><a href="#day-' + d.n + '">' +
        '<img class="ov-thumb" src="' + IMG + d.cover + '.jpg" alt="" loading="lazy" decoding="async">' +
        '<div class="ov-text">' +
          '<div class="ov-day"><span class="ov-n">Day ' + d.n + '</span><span class="ov-date">' + d.md + " " + d.dow + "</span></div>" +
          '<p class="ov-title">' + esc(d.title) + "</p>" +
          '<p class="ov-focus">' + esc(d.focus) + "</p>" +
        "</div></a></li>";
    }).join("");
    $("#winterTips").innerHTML = T.winterTips.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("");
  }

  /* ---------- 每日行程 ---------- */
  function spotCard(id) {
    var p = T.places[id];
    if (!p) return "";
    var kind = p.kind === "food" ? "餐飲" : p.kind === "stay" ? "住宿" : "景點";
    return '<article class="spot reveal">' +
      '<div class="spot-img"><img src="' + IMG + p.img + '.jpg" alt="' + esc(p.name) + '" loading="lazy" decoding="async">' +
        '<span class="spot-kind">' + kind + "</span>" +
        (p.sample ? '<span class="spot-sample">' + esc(p.sampleText || "料理示意") + "</span>" : "") +
      "</div>" +
      '<div class="spot-body">' +
        '<h5 class="spot-name">' + esc(p.name) + "</h5>" +
        (p.zh ? '<p class="spot-zh">' + esc(p.zh) + "</p>" : "") +
        (p.when ? '<p class="spot-when">' + esc(p.when) + "</p>" : "") +
        (p.note ? '<p class="spot-note">' + esc(p.note) + "</p>" : "") +
        '<div class="spot-foot">' + (p.status ? chip(p.status, p.statusTone) : "") + (p.flag ? flag(p.flag) : "") + placeLinks(p) + "</div>" +
      "</div></article>";
  }

  function timeHtml(item) {
    var t = item.t, approx = /^約\s*/.test(t);
    t = t.replace(/^約\s*/, "");
    var sub = "";
    if (item.t2) sub = /^\d/.test(item.t2) ? "– " + item.t2 : item.t2;
    return '<div class="tl-time"><b>' + (approx ? '<i class="approx">約</i>' : "") + esc(t) + "</b>" + (sub ? "<span>" + esc(sub) + "</span>" : "") + "</div>";
  }

  function tlItem(item) {
    var p = item.place ? T.places[item.place] : null;
    var tags = [];
    if (p && p.kind === "food" && p.status) tags.push(chip(p.status, p.statusTone));
    if (item.warn) tags.push(chip(item.warn, "warn"));
    if (item.flag) tags.push(flag(item.flag));
    var links = placeLinks(p, item.map);
    (item.links || []).forEach(function (l) { links += ext(l.u, l.t); });
    return '<li class="tl-item' + (item.star ? " is-star" : "") + '" data-type="' + esc(item.type || "move") + '">' +
      '<span class="tl-dot" aria-hidden="true"></span>' +
      timeHtml(item) +
      '<div class="tl-body">' +
        (p && p.img ? '<img class="tl-thumb" src="' + IMG + p.img + '.jpg" alt="" loading="lazy" decoding="async">' : "") +
        '<p class="tl-title">' + esc(item.title) + "</p>" +
        (item.note ? '<p class="tl-note">' + esc(item.note) + "</p>" : "") +
        '<div class="tl-tags">' + tags.join("") + "</div>" +
        '<div class="tl-links">' + links + "</div>" +
      "</div></li>";
  }

  function extraHtml(d) {
    if (!d.luggage && !d.backup && !d.shows) return "";
    var html = '<div class="extra">';
    if (d.luggage) {
      html += '<section class="card extra-card luggage-card" aria-labelledby="luggage-' + d.n + '"><h5 id="luggage-' + d.n + '">' + esc(d.luggage.title) + '</h5><table class="mini-table"><tbody>' +
        d.luggage.rows.map(function (r) {
          return '<tr><th scope="row">' + esc(r.label) + '</th><td>' + esc(r.title) + '<span class="sub">' + esc(r.note) + '</span></td></tr>';
        }).join("") + '</tbody></table><ul class="luggage-notes">' +
        d.luggage.notes.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join("") +
        '</ul><p class="extra-foot">' + esc(d.luggage.foot) + '</p><div class="tl-links">' +
        d.luggage.links.map(function (l) { return ext(l.u, l.t); }).join("") + '</div></section>';
    }
    if (d.backup) {
      html += '<div class="card extra-card"><h5>' + esc(d.backup.title) + '</h5><table class="mini-table"><tbody>' +
        d.backup.rows.map(function (r) {
          return "<tr><td>" + esc(r.t) + "</td><td>" + esc(r.title) + '<span class="sub">' + esc(r.note) + "</span></td></tr>";
        }).join("") + "</tbody></table></div>";
    }
    if (d.shows) {
      html += '<div class="card extra-card"><h5>' + esc(d.shows.title) + '</h5><table class="mini-table"><tbody>' +
        d.shows.rows.map(function (r) {
          return "<tr" + (r[2] ? ' class="is-star"' : "") + "><td>" + esc(r[0]) + "</td><td>" + esc(r[1]) + "</td></tr>";
        }).join("") + '</tbody></table><p class="extra-foot">' + esc(d.shows.foot) + " " + ext(d.shows.link, "官方時刻") + "</p></div>";
    }
    return html + "</div>";
  }

  function renderDays() {
    $("#daybar").innerHTML = T.days.map(function (d) {
      return '<a href="#day-' + d.n + '" data-day="' + d.n + '"' + (d.n === todayDay ? ' class="is-today"' : "") + "><b>Day " + d.n + "</b><small>" + d.md + "</small></a>";
    }).join("");

    $("#dayList").innerHTML = T.days.map(function (d) {
      var coverPlace = placeByImg(d.cover);
      var dowZh = "星期" + d.dowZh;
      return '<article class="day" id="day-' + d.n + '" data-day="' + d.n + '">' +
        '<div class="wrap day-grid">' +
          '<div class="day-side">' +
            '<header class="day-head reveal">' +
              '<div class="day-num"><small>DAY</small><b>0' + d.n + "</b></div>" +
              '<div class="day-meta">' +
                '<p class="day-date">' + d.date.replace(/-/g, ".") + " · " + d.dow + " · " + dowZh +
                  (d.n === todayDay ? '<span class="today-tag">' + chip("今天", "blue") + "</span>" : "") + "</p>" +
                '<h3 class="day-title">' + esc(d.title) + "</h3>" +
                '<p class="day-sub">' + esc(d.sub) + "</p>" +
              "</div>" +
            "</header>" +
            '<figure class="cover reveal"><img src="' + IMG + d.cover + '.jpg" alt="' + esc(coverPlace ? coverPlace.name : d.title) + '" loading="lazy" decoding="async">' +
              (coverPlace ? "<figcaption>" + esc(coverPlace.name) + "</figcaption>" : "") + "</figure>" +
            '<p class="day-focus"><span>HIGHLIGHTS</span>' + esc(d.focus) + "</p>" +
            (d.notes && d.notes.length ? '<ul class="day-notes">' + d.notes.map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("") + "</ul>" : "") +
          "</div>" +
          '<div class="day-main">' +
            '<div class="tl-head"><h4>SCHEDULE</h4><div class="tl-legend">' +
              '<span><i style="background:var(--blue)"></i>景點</span><span><i style="background:var(--latte)"></i>餐飲</span>' +
              '<span><i style="background:var(--mocha)"></i>住宿</span><span><i style="border:1.5px solid var(--latte)"></i>交通</span></div></div>' +
            '<ol class="timeline">' + d.timeline.map(tlItem).join("") + "</ol>" +
            extraHtml(d) +
          "</div>" +
        "</div>" +
        '<div class="spots"><div class="spots-head"><h4>PLACES</h4><span>景點與餐廳' + (d.spots.length > 1 ? '<i class="swipe-hint">・可左右滑動</i>' : "") + "</span></div>" +
          '<div class="rail">' + d.spots.map(spotCard).join("") + "</div></div>" +
      "</article>";
    }).join("");
  }

  /* ---------- 美食 ---------- */
  function renderFood() {
    var order = ["daikokuya", "sama", "nanas", "kplace", "pal", "baal", "letao", "hanamaru", "crab", "tokuichi"];
    $("#foodGrid").innerHTML = order.map(function (id) {
      var p = T.places[id];
      if (!p) return "";
      return '<article class="food-card reveal">' +
        '<div class="spot-img"><img src="' + IMG + p.img + '.jpg" alt="' + esc(p.name) + '" loading="lazy" decoding="async">' +
          (p.sample ? '<span class="spot-sample">' + esc(p.sampleText || "料理示意") + "</span>" : "") + "</div>" +
        '<div class="food-body">' +
          '<div class="food-top"><span class="food-cat">' + esc(p.zh) + "</span>" + chip(p.status, p.statusTone) + "</div>" +
          '<h3 class="food-name">' + esc(p.name) + "</h3>" +
          '<p class="food-when">' + esc(p.when) + "</p>" +
          (p.note ? '<p class="food-note">' + esc(p.note) + "</p>" : "") +
          '<div class="spot-foot">' + (p.flag ? flag(p.flag) : "") + placeLinks(p) + "</div>" +
        "</div></article>";
    }).join("") +
    '<p class="food-extra" style="grid-column:1/-1">另外排入行程的甜點：白色戀人公園霜淇淋（12/21）。可選甜點備案：日本茶と和菓子 エフ（圓山公園站旁，週一一般 12:00 後），12/21 已經很滿，不強求。</p>';
  }

  /* ---------- 購物 ---------- */
  function renderShopping() {
    $("#shopList").innerHTML = T.shopping.map(function (s) {
      return '<li class="shop-item reveal"><span class="shop-when">' + esc(s.when) + '</span><span class="shop-where">' + esc(s.where) +
        '</span><span class="shop-what">' + esc(s.what) + "</span>" + (s.flag ? flag(s.flag) : "") + "</li>";
    }).join("");
  }

  /* ---------- 清單（存在瀏覽器） ---------- */
  var KEY = "hokkaido2026-checklist";
  function loadChecks() {
    try { return JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) { return {}; }
  }
  function saveChecks(v) {
    try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) { /* 無痕模式等情況存不了，畫面仍可勾選 */ }
  }
  function renderChecklist() {
    var state = loadChecks();
    var tick = '<svg viewBox="0 0 14 14" fill="none" stroke="#FAF6EF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 7.5l3 3 6-7"/></svg>';
    $("#checkList").innerHTML = T.checklist.map(function (c) {
      return '<li class="check-item"><label>' +
        '<input type="checkbox" data-id="' + esc(c.id) + '"' + ((c.id in state ? state[c.id] : c.done) ? " checked" : "") + ">" +
        '<span class="check-box">' + tick + "</span>" +
        '<span class="check-text">' + esc(c.text) + (c.link ? ext(c.link, c.linkText || "連結") : "") + "</span>" +
        "</label></li>";
    }).join("");

    function progress() {
      var boxes = document.querySelectorAll("#checkList input");
      var done = 0;
      boxes.forEach(function (b) { if (b.checked) done++; });
      var pct = Math.round(done / boxes.length * 100);
      $("#checkProgress").innerHTML = "<span>已完成 <b>" + done + "</b> / " + boxes.length + '</span><span class="progress-bar"><i style="width:' + pct + '%"></i></span>';
    }
    $("#checkList").addEventListener("change", function (e) {
      var t = e.target;
      if (!t.matches("input[type=checkbox]")) return;
      var s = loadChecks();
      s[t.getAttribute("data-id")] = t.checked;
      saveChecks(s);
      progress();
    });
    progress();
  }

  /* ---------- 待確認 ---------- */
  function renderConfirms() {
    $("#confirmList").innerHTML = T.confirms.map(function (c, i) {
      var lv = LEVEL[c.level] || LEVEL.pending;
      var tone = c.level === "conflict" ? "warn" : c.level === "tight" ? "calm" : "blue";
      return '<li class="cf reveal" id="cf-' + esc(c.id) + '">' +
        '<div class="cf-top"><span class="cf-n">' + (i + 1 < 10 ? "0" : "") + (i + 1) + "</span>" + chip(lv.label, tone) + "</div>" +
        "<h3>" + esc(c.title) + "</h3>" +
        (c.body ? "<p>" + esc(c.body) + "</p>" : "") +
        (c.day ? '<a class="text-link" href="#day-' + c.day + '">看 Day ' + c.day + " 行程</a>" : "") +
        "</li>";
    }).join("");
  }

  /* ---------- 連結與頁尾 ---------- */
  function renderLinks() {
    $("#linkList").innerHTML = T.links.map(function (l) {
      return '<li><a href="' + esc(l.u) + '" target="_blank" rel="noopener">' + esc(l.t) + "</a></li>";
    }).join("");
    $("#footerNote").textContent = "行程依 " + T.meta.source + " 整理（規劃日 " + T.meta.plannedAt + "）。固定班次、門票、營業時間、戶外表演及點燈，出發前再看官方最新公告；未有訂位證明的餐廳皆為「待預約／待確認」。";

    var names = { hero: "主視覺・小樽雪燈之路" };
    for (var k in T.places) { var p = T.places[k]; if (p.img && !names[p.img]) names[p.img] = p.name; }
    names.tanuki = "狸小路"; names.onsen = "登別溫泉街";
    $("#creditList").innerHTML = Object.keys(CREDITS).map(function (k) {
      var c = CREDITS[k];
      return "<li>" + esc(names[k] || k) + '：<a href="' + esc(c.source) + '" target="_blank" rel="noopener">' + esc(c.title) + "</a> — " +
        esc(c.author) + " · " + (c.licenseUrl ? '<a href="' + esc(c.licenseUrl) + '" target="_blank" rel="noopener">' + esc(c.license) + "</a>" : esc(c.license)) + "</li>";
    }).join("");
  }

  /* ---------- 互動 ---------- */
  function interactions() {
    var bar = $("#topbar");
    var hero = $(".hero");
    function onScroll() {
      var limit = hero ? hero.offsetHeight - 80 : 80;
      bar.classList.toggle("is-solid", window.scrollY > limit);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    var reveals = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      reveals.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    reveals.forEach(function (el) { io.observe(el); });

    /* 目前看到第幾天 → 日期列高亮 */
    var daybar = $("#daybar");
    var chips = daybar.querySelectorAll("a");
    var dayIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var n = en.target.getAttribute("data-day");
        chips.forEach(function (c) {
          var on = c.getAttribute("data-day") === n;
          c.classList.toggle("is-active", on);
          if (on) daybar.scrollTo({ left: c.offsetLeft - daybar.clientWidth / 2 + c.clientWidth / 2, behavior: "smooth" });
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll(".day").forEach(function (d) { dayIo.observe(d); });
  }

  renderHero();
  renderPrologue();
  renderFlights();
  renderOverview();
  renderDays();
  renderFood();
  renderShopping();
  renderChecklist();
  renderConfirms();
  renderLinks();
  interactions();

  /* 從其他頁面帶著 #day-3 之類的網址進來時，畫面渲染完再捲過去 */
  if (location.hash) {
    var target = document.getElementById(location.hash.slice(1));
    if (target) setTimeout(function () { target.scrollIntoView(); }, 60);
  }
})();
