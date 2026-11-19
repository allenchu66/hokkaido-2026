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
  function ext(u, t) {
    var inPage = String(u).charAt(0) === "#";
    return '<a class="text-link" href="' + esc(u) + '"' + (inPage ? "" : ' target="_blank" rel="noopener"') + ">" + esc(t) + "</a>";
  }

  /* 行程上的「出發前待辦」標記：對應 checklist 的 id，已勾選完成就不顯示 */
  var checkIndex = {};
  T.checklist.forEach(function (c) { checkIndex[c.id] = c; });
  function flag(id) {
    var c = checkIndex[id];
    if (!c) return "";
    var state = loadChecks();
    if (id in state ? state[id] : c.done) return "";
    return '<a class="flag flag--pending" href="#ck-' + esc(id) + '">出發前待辦</a>';
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
  function guideHtml(id) {
    var g = (T.guides || {})[id];
    if (!g) return "";
    var sources = (g.sources || []).map(function (s) { return ext(s.u, s.t); }).join("");
    return '<div class="spot-guide"><p class="spot-intro">' + esc(g.intro) + '</p>' +
      (g.story ? '<details class="spot-story"><summary>故事與背景</summary><p>' + esc(g.story) +
        '</p><div class="spot-sources">' + sources + '</div></details>' :
        '<div class="spot-sources">' + sources + '</div>') + '</div>';
  }

  function spotCard(id) {
    var p = T.places[id];
    if (!p) return "";
    var kind = p.kind === "food" ? "餐飲" : p.kind === "stay" ? "住宿" : p.kind === "shop" ? "購物" : "景點";
    return '<article class="spot reveal">' +
      (p.img ? '<div class="spot-img"><img src="' + IMG + p.img + '.jpg" alt="' + esc(p.name) + '" loading="lazy" decoding="async">' +
        '<span class="spot-kind">' + kind + "</span>" +
        (p.sample ? '<span class="spot-sample">' + esc(p.sampleText || "料理示意") + "</span>" : "") +
      "</div>" : "") +
      '<div class="spot-body">' +
        '<h5 class="spot-name">' + esc(p.name) + "</h5>" +
        (p.zh ? '<p class="spot-zh">' + esc(p.zh) + "</p>" : "") +
        guideHtml(id) +
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

  /* ---------- 每日路線地圖（Leaflet＋OpenStreetMap，不需要金鑰） ---------- */
  var MODE = {
    train: { t: "JR", color: "#4E6E8A", weight: 5 },
    subway: { t: "地鐵", color: "#7FA0BA", weight: 4 },
    tram: { t: "市電", color: "#7FA0BA", weight: 4, dash: "9 6" },
    bus: { t: "巴士", color: "#6F9A7A", weight: 4, dash: "11 7" },
    ropeway: { t: "纜車", color: "#A5694F", weight: 3, dash: "3 6" },
    taxi: { t: "計程車／地鐵", color: "#C9A24A", weight: 4, dash: "12 6" },
    walk: { t: "步行", color: "#8A6A50", weight: 3.5, dash: "1 7" }
  };
  var KIND_EMOJI = { food: "🍴", shop: "🛍️", stay: "🏨", spot: "📷" };

  function routePoint(id) {
    var pt = (T.map && T.map.pts[id]) || {};
    var pl = T.places[id] || {};
    return {
      id: id, ll: pt.ll, label: pt.label || pl.name || id, name: pt.name || pl.name || pt.label || id,
      kind: pt.kind || pl.kind || "spot",
      mapLink: pl.mapUrl || ((pt.map || pl.map) ? mapUrl(pt.map || pl.map) : (pt.ll ? mapUrl(pt.ll.join(",")) : ""))
    };
  }
  /* 把 route 整理成：有編號的地點、轉乘小點、每一段路 */
  function routeData(d) {
    var stops = [], byId = {}, legs = [], n = 0, prev = null;
    (d.route || []).forEach(function (r) {
      var p = routePoint(r.at);
      if (!p.ll) return;
      var s = byId[r.at];
      if (!s) {
        s = byId[r.at] = { p: p, pass: !!r.pass, n: r.pass ? 0 : ++n, area: r.area || "" };
        stops.push(s);
      } else if (!r.pass && s.pass) {
        s.pass = false; s.n = ++n;
      }
      if (r.area && !s.area) s.area = r.area;
      if (prev && r.by) legs.push({ a: prev.p.ll, b: p.ll, by: r.by });
      prev = s;
    });
    return { stops: stops, legs: legs };
  }
  function routeHtml(d) {
    if (!d.route || !T.map) return "";
    var R = routeData(d);
    var used = {};
    R.legs.forEach(function (l) { used[l.by] = true; });
    var legend = Object.keys(MODE).filter(function (k) { return used[k]; }).map(function (k) {
      return '<span><i class="rl" style="--c:' + MODE[k].color + (MODE[k].dash ? ";--s:dashed" : "") + (k === "walk" ? ";--s:dotted" : "") + '"></i>' + MODE[k].t + "</span>";
    }).join("");
    var list = R.stops.filter(function (s) { return !s.pass; }).map(function (s) {
      return '<li><button type="button" data-stop="' + esc(s.p.id) + '"><b class="rm-k rm-k--' + esc(s.p.kind) + '">' + s.n + "</b>" + esc(s.p.label) + "</button></li>";
    }).join("");
    return '<section class="route reveal" data-day="' + d.n + '" aria-label="Day ' + d.n + ' 路線地圖">' +
      '<div class="tl-head"><h4>ROUTE</h4><div class="tl-legend route-legend">' + legend + "</div></div>" +
      '<div class="route-views"></div>' +
      '<div class="route-map"><p class="route-loading">地圖載入中…</p></div>' +
      '<ol class="route-stops">' + list + "</ol>" +
      '<p class="route-note">線條是示意路線，不是實際行走路徑；點數字或地點名稱看詳細。</p>' +
      "</section>";
  }

  function curvePts(a, b, bend) {
    var k = Math.cos(a[0] * Math.PI / 180);
    var ax = a[1] * k, ay = a[0], bx = b[1] * k, by = b[0];
    var dx = bx - ax, dy = by - ay, len = Math.sqrt(dx * dx + dy * dy);
    if (len < 0.0006) return [a, b];
    var cx = (ax + bx) / 2 - dy * bend, cy = (ay + by) / 2 + dx * bend, out = [];
    for (var i = 0; i <= 24; i++) {
      var t = i / 24, u = 1 - t;
      var x = u * u * ax + 2 * u * t * cx + t * t * bx, y = u * u * ay + 2 * u * t * cy + t * t * by;
      out.push([y, x / k]);
    }
    return out;
  }
  function kmBetween(a, b) {
    var k = Math.cos(a[0] * Math.PI / 180);
    var dx = (a[1] - b[1]) * 111.32 * k, dy = (a[0] - b[0]) * 110.57;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function buildRouteMap(sec) {
    var L = window.L, d = null;
    T.days.forEach(function (x) { if (String(x.n) === sec.getAttribute("data-day")) d = x; });
    if (!L || !d) return;
    var R = routeData(d), el = sec.querySelector(".route-map");
    el.innerHTML = "";
    var touch = L.Browser.mobile || L.Browser.touch;
    var map = L.map(el, { scrollWheelZoom: false, dragging: !L.Browser.mobile, zoomSnap: 0.25 });
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'
    }).addTo(map);

    R.legs.forEach(function (l, i) {
      var m = MODE[l.by] || MODE.walk;
      L.polyline(curvePts(l.a, l.b, i % 2 ? -0.16 : 0.16), {
        color: m.color, weight: m.weight, opacity: 0.9, dashArray: m.dash || null, lineCap: "round", lineJoin: "round", interactive: false
      }).addTo(map);
    });

    var markers = {};
    R.stops.forEach(function (s) {
      var p = s.p;
      var pop = '<div class="rm-pop"><p class="rm-pop-t">' + (s.pass ? "🚉" : (KIND_EMOJI[p.kind] || "📍")) + " " + esc(p.label) + "</p>" +
        (p.name !== p.label ? '<p class="rm-pop-n">' + esc(p.name) + "</p>" : "") +
        (p.mapLink ? '<a href="' + esc(p.mapLink) + '" target="_blank" rel="noopener">Google 地圖</a>' : "") + "</div>";
      var mk = s.pass
        ? L.circleMarker(p.ll, { radius: 5, color: "#FFFDF9", weight: 2, fillColor: "#7F654F", fillOpacity: 1 })
        : L.marker(p.ll, { icon: L.divIcon({ className: "", html: '<span class="rm-pin rm-k--' + esc(p.kind) + '">' + s.n + "</span>", iconSize: [26, 26], iconAnchor: [13, 13], popupAnchor: [0, -12] }), riseOnHover: true, keyboard: true, title: p.label });
      mk.bindPopup(pop, { closeButton: false, offset: s.pass ? [0, -2] : [0, 0] }).addTo(map);
      markers[p.id] = mk;
    });

    /* 依距離分區（相距 10 km 以上算不同區），可切換視角 */
    var clusters = [];
    R.stops.forEach(function (s) {
      var c = null;
      clusters.forEach(function (x) { if (!c && kmBetween(x.seed, s.p.ll) < 10) c = x; });
      if (!c) { c = { seed: s.p.ll, pts: [], main: [], label: "", count: 0 }; clusters.push(c); }
      c.pts.push(s.p.ll);
      if (!s.pass) { c.count++; c.main.push(s.p.ll); }
      if (!c.label && s.area) c.label = s.area;
    });
    clusters.forEach(function (c) {
      if (!c.label) c.label = "區域";
      c.fit = c.main.length >= 2 ? c.main : c.pts;
    });
    var all = [];
    R.stops.forEach(function (s) { all.push(s.p.ll); });
    var span = 0;
    all.forEach(function (a) { all.forEach(function (b) { span = Math.max(span, kmBetween(a, b)); }); });
    function fit(pts) { map.fitBounds(L.latLngBounds(pts), { padding: [28, 28], maxZoom: 17 }); }
    var start = all, startIdx = -1;
    if (span > 20) {
      var big = clusters.slice().sort(function (x, y) { return y.count - x.count; })[0];
      if (big && big.count >= 3) { start = big.fit; startIdx = clusters.indexOf(big); }
    }
    fit(start);

    var views = sec.querySelector(".route-views");
    if (clusters.length > 1) {
      views.innerHTML = '<button type="button" data-v="-1">全部路線</button>' + clusters.map(function (c, i) {
        return '<button type="button" data-v="' + i + '">' + esc(c.label) + "</button>";
      }).join("");
      var setActive = function (v) {
        views.querySelectorAll("button").forEach(function (b) { b.classList.toggle("is-active", b.getAttribute("data-v") === String(v)); });
      };
      setActive(startIdx);
      views.addEventListener("click", function (e) {
        var b = e.target.closest("button");
        if (!b) return;
        var v = Number(b.getAttribute("data-v"));
        fit(v < 0 ? all : clusters[v].fit);
        setActive(v);
      });
    }

    sec.querySelector(".route-stops").addEventListener("click", function (e) {
      var b = e.target.closest("button[data-stop]");
      if (!b) return;
      var mk = markers[b.getAttribute("data-stop")];
      if (!mk) return;
      map.setView(mk.getLatLng(), Math.max(map.getZoom(), 15));
      mk.openPopup();
      views.querySelectorAll("button").forEach(function (x) { x.classList.remove("is-active"); });
    });
    if (touch) sec.classList.add("is-touch");
    setTimeout(function () { map.invalidateSize(); }, 400);
  }

  function initRouteMaps() {
    var secs = document.querySelectorAll(".route");
    if (!secs.length) return;
    var loading = null;
    function loadLeaflet(cb) {
      if (window.L) return cb();
      if (loading) return loading.push(cb);
      loading = [cb];
      var css = document.createElement("link");
      css.rel = "stylesheet";
      css.href = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css";
      document.head.appendChild(css);
      var js = document.createElement("script");
      js.src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js";
      js.onload = function () { var q = loading; loading = null; q.forEach(function (f) { f(); }); };
      js.onerror = function () {
        secs.forEach(function (s) { s.classList.add("route--nomap"); });
      };
      document.head.appendChild(js);
    }
    function start(sec) {
      if (sec.getAttribute("data-built")) return;
      sec.setAttribute("data-built", "1");
      loadLeaflet(function () { buildRouteMap(sec); });
    }
    if (!("IntersectionObserver" in window)) { secs.forEach(start); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { start(en.target); io.unobserve(en.target); } });
    }, { rootMargin: "300px 0px" });
    secs.forEach(function (s) { io.observe(s); });
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
            routeHtml(d) +
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
    var order = ["potapota", "daikokuya", "sama", "nanas", "kplace", "pal", "takinami", "baal", "letao", "potapotaOtaru", "okushiba", "hanamaru", "crab", "tokuichi", "jinguchaya", "hachikyo"];
    $("#foodGrid").innerHTML = order.map(function (id) {
      var p = T.places[id];
      if (!p) return "";
      return '<article class="food-card reveal">' +
        (p.img ? '<div class="spot-img"><img src="' + IMG + p.img + '.jpg" alt="' + esc(p.name) + '" loading="lazy" decoding="async">' +
          (p.sample ? '<span class="spot-sample">' + esc(p.sampleText || "料理示意") + "</span>" : "") + "</div>" : "") +
        '<div class="food-body">' +
          '<div class="food-top"><span class="food-cat">' + esc(p.zh) + "</span>" + chip(p.status, p.statusTone) + "</div>" +
          '<h3 class="food-name">' + esc(p.name) + "</h3>" +
          guideHtml(id) +
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
      var links = s.place ? placeLinks(T.places[s.place]) : "";
      return '<li class="shop-item reveal"><span class="shop-when">' + esc(s.when) + '</span><span class="shop-where">' + esc(s.where) +
        '</span><span class="shop-what">' + esc(s.what) + (links ? '<span class="tl-links">' + links + '</span>' : "") + "</span>" + (s.flag ? flag(s.flag) : "") + "</li>";
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
      return '<li class="check-item" id="ck-' + esc(c.id) + '"><label>' +
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

  /* ---------- 退稅教學 ---------- */
  function renderTaxFree() {
    var X = T.taxfree;
    if (!X || !$("#taxSteps")) return;
    function li(t) { return "<li>" + esc(t) + "</li>"; }
    $("#taxLead").textContent = X.lead;
    $("#taxSteps").innerHTML = X.steps.map(function (st, i) {
      return '<li class="tax-step reveal"><span class="tax-n">' + (i + 1) + "</span>" +
        '<div class="tax-body"><p class="tax-when">' + esc(st.when) + "<span>" + esc(st.where) + "</span></p>" +
        '<h3 class="tax-title">' + esc(st.title) + "</h3><ul>" + st.items.map(li).join("") + "</ul></div></li>";
    }).join("");
    $("#taxTrip").innerHTML = X.trip.map(li).join("");
    $("#taxRules").innerHTML = X.rules.map(li).join("");
    $("#taxLinks").innerHTML = '<span class="tl-links">' + X.links.map(function (l) { return ext(l.u, l.t); }).join("") + "</span>" +
      "<span>" + esc(X.source) + "</span>";
  }

  /* ---------- 天氣 ---------- */
  var WMO = {
    0: "晴", 1: "大致晴", 2: "晴時多雲", 3: "陰", 45: "霧", 48: "霧淞",
    51: "毛毛雨", 53: "毛毛雨", 55: "毛毛雨", 56: "凍毛毛雨", 57: "凍毛毛雨",
    61: "小雨", 63: "雨", 65: "大雨", 66: "凍雨", 67: "凍雨",
    71: "小雪", 73: "雪", 75: "大雪", 77: "細雪",
    80: "陣雨", 81: "陣雨", 82: "強陣雨", 85: "陣雪", 86: "強陣雪",
    95: "雷雨", 96: "雷雨夾冰雹", 99: "雷雨夾冰雹"
  };
  function deg(v, digits) { return (digits ? v.toFixed(digits) : String(Math.round(v))).replace("-", "−") + "°"; }
  function shiftDate(iso, n) {
    var p = iso.split("-").map(Number);
    var d = new Date(Date.UTC(p[0], p[1] - 1, p[2] + n));
    return (d.getUTCMonth() + 1) + "/" + d.getUTCDate();
  }

  function renderWeather() {
    var W = T.weather;
    if (!W || !$("#wxList")) return;
    var keys = Object.keys(W.places);
    var first = T.days[0].date, last = T.days[T.days.length - 1].date;
    var FORECAST_DAYS = 16;

    function draw(fc) {
      $("#wxList").innerHTML = T.days.map(function (d) {
        var key = W.days[d.n], pl = W.places[key];
        var f = fc && fc[key] && fc[key][d.date];
        var body;
        if (f) {
          var meta = [];
          if (f.pop != null) meta.push("降水 " + f.pop + "%");
          if (f.snow >= 0.5) meta.push("降雪 " + Math.round(f.snow) + " cm");
          if (f.sunset) meta.push("日落 " + f.sunset.slice(11, 16));
          body = '<p class="wx-desc">' + esc(WMO[f.code] || "—") + "</p>" +
            '<p class="wx-temp"><b>' + deg(f.hi) + "</b> / " + deg(f.lo) + "</p>" +
            '<p class="wx-meta">' + esc(meta.join("・")) + "</p>";
        } else {
          body = '<p class="wx-desc wx-desc--normal">平年值</p>' +
            '<p class="wx-temp"><b>' + deg(pl.hi, 1) + "</b> / " + deg(pl.lo, 1) + "</p>" +
            '<p class="wx-meta">' + (fc ? "預報還沒到這天" : "12 月平均") + "</p>";
        }
        return '<li class="wx-item' + (d.date === today ? " is-today" : "") + (f ? "" : " is-normal") + '">' +
          '<p class="wx-date"><span>' + esc(d.md) + "</span><small>" + esc(d.dowZh) + "・Day " + d.n + "</small></p>" +
          '<p class="wx-place">' + esc(pl.name) + "</p>" + body + "</li>";
      }).join("");
    }

    var links = keys.map(function (k) { return ext(W.places[k].link, W.places[k].name + " 2 週預報"); }).join("");
    $("#wxFoot").innerHTML = '<span class="tl-links">' + links + "</span>" +
      "<span>" + esc(W.normalNote) + ' 預報資料：<a class="text-link" href="https://open-meteo.com/" target="_blank" rel="noopener">Open-Meteo</a>（CC BY 4.0），以出發當天的官方預報為準。</span>';

    var untilStart = dayDiff(today, first), untilEnd = dayDiff(today, last);
    draw(null);
    if (untilEnd < 0) { $("#wxStatus").textContent = "旅程已結束，以下為 12 月平年值。"; return; }
    if (untilStart > FORECAST_DAYS - 1) {
      $("#wxStatus").textContent = "預報只看得到約 16 天後，" + shiftDate(first, -(FORECAST_DAYS - 1)) + " 起會自動出現第一天的預報，" +
        shiftDate(last, -(FORECAST_DAYS - 1)) + " 起七天都有。現在先看 12 月平年值。";
      return;
    }
    $("#wxStatus").textContent = "讀取最新預報中…";
    var url = "https://api.open-meteo.com/v1/forecast?latitude=" + keys.map(function (k) { return W.places[k].lat; }).join(",") +
      "&longitude=" + keys.map(function (k) { return W.places[k].lon; }).join(",") +
      "&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,snowfall_sum,sunset" +
      "&timezone=Asia%2FTokyo&forecast_days=" + FORECAST_DAYS;
    fetch(url).then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); }).then(function (data) {
      var list = Array.isArray(data) ? data : [data], fc = {};
      list.forEach(function (loc, i) {
        var dd = loc.daily, byDate = {};
        dd.time.forEach(function (t, j) {
          byDate[t] = { code: dd.weather_code[j], hi: dd.temperature_2m_max[j], lo: dd.temperature_2m_min[j],
            pop: dd.precipitation_probability_max[j], snow: dd.snowfall_sum[j], sunset: dd.sunset[j] };
        });
        fc[keys[i]] = byDate;
      });
      draw(fc);
      $("#wxStatus").textContent = "最新預報（" + today.slice(5).replace("-", "/") + " 更新）。越接近出發越準，山上（天狗山、藻岩山）會更冷、風更大。";
    }).catch(function () {
      $("#wxStatus").textContent = "預報暫時讀不到，先看平年值，或點下方 tenki.jp 連結。";
    });
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
  renderFlights();
  renderOverview();
  renderWeather();
  renderDays();
  initRouteMaps();
  renderFood();
  renderShopping();
  renderTaxFree();
  renderChecklist();
  renderLinks();
  interactions();

  /* 從其他頁面帶著 #day-3 之類的網址進來時，畫面渲染完再捲過去 */
  if (location.hash) {
    var target = document.getElementById(location.hash.slice(1));
    if (target) setTimeout(function () { target.scrollIntoView(); }, 60);
  }
})();
