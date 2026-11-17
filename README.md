# HOKKAIDO TRAVEL JOURNAL

2026/12/17–12/23 北海道（札幌・小樽・登別）旅行手帳網站。
純靜態網站（HTML／CSS／JavaScript），不需要安裝任何套件，可以直接放到 GitHub Pages。

## 檔案結構

```
index.html            網站頁面
assets/css/style.css  樣式（顏色、字體、版面）
assets/js/data.js     ★ 行程資料：要改行程、餐廳、時間，只改這個檔案
assets/js/credits.js  照片來源與授權
assets/js/app.js      把資料畫成網頁的程式（一般不用動）
assets/img/           景點與料理照片
.nojekyll             告訴 GitHub Pages 不要用 Jekyll 處理（保留即可）
```

---

## 部署到 GitHub Pages（第一次）

> ⚠️ **先想一下隱私**：免費帳號的 GitHub Pages 需要公開（public）儲存庫，網址任何人都打得開。
> 網站上有航班號碼、日期、飯店名稱與地址。如果不想公開，可以改用私人儲存庫＋GitHub Pro，或不要放飯店地址。

### 方法 A：用網頁上傳（不用打指令，最簡單）

1. 登入 [github.com](https://github.com)，右上角 **＋ → New repository**。
2. Repository name 填英文，例如 `hokkaido-2026`；選 **Public**；其他不用勾，按 **Create repository**。
3. 在新的儲存庫頁面點 **uploading an existing file**。
4. 打開電腦裡的 `北海道旅遊` 資料夾，把裡面的 **`index.html`、`README.md`、`assets` 資料夾** 一起拖進網頁。
   - `.nojekyll` 是隱藏檔，Finder 預設看不到：在 Finder 按 `⌘ + Shift + .` 就會顯示，把它也拖進去。
   - `.claude` 資料夾是本機預覽用的，**不用上傳**。
5. 下方按 **Commit changes**。
6. 到儲存庫的 **Settings → Pages**：
   - Source 選 **Deploy from a branch**
   - Branch 選 **main**，資料夾選 **/ (root)**，按 **Save**。
7. 等 1–2 分鐘，重新整理 Settings → Pages，上方會出現網址，例如：
   `https://你的帳號.github.io/hokkaido-2026/`

### 方法 B：用終端機（之後更新比較快）

在「終端機」依序執行（把 `你的帳號` 換成你的 GitHub 帳號；先在 GitHub 建好空的 `hokkaido-2026` 儲存庫，**不要**勾 Add a README）：

```bash
cd ~/develop/北海道旅遊
```

```bash
git init -b main
```

```bash
git add .
```

```bash
git commit -m "北海道旅行手帳網站"
```

```bash
git remote add origin https://github.com/你的帳號/hokkaido-2026.git
```

```bash
git push -u origin main
```

推上去之後，同樣到 **Settings → Pages** 選 `main` / `/ (root)` 並儲存。
（`.gitignore` 已經排除 `.claude/`，不會被上傳。）

第一次 `git push` 時，GitHub 會要求登入；密碼欄要貼的是 **Personal Access Token**，不是登入密碼。
建立方式：GitHub 右上頭像 → Settings → Developer settings → Personal access tokens。
或安裝 [GitHub Desktop](https://desktop.github.com/) 用圖形介面推送，最省事。

---

## 之後要修改行程

1. 打開 `assets/js/data.js`，找到要改的那一天（`n: 3` 就是 Day 3），直接改文字或時間。
2. 照片：把新照片放進 `assets/img/`，在 `places` 裡把 `img` 改成檔名（不含 `.jpg`）。
3. 改完後：
   - 方法 A：到 GitHub 儲存庫點該檔案 → 鉛筆圖示編輯，或重新上傳覆蓋。
   - 方法 B：
     ```bash
     git add . && git commit -m "更新行程" && git push
     ```
4. 1–2 分鐘後網站會自動更新。手機若還看到舊內容，可以把 `index.html` 裡 `?v=3` 改成 `?v=4` 強迫重新載入。

## 在自己電腦預覽

```bash
cd ~/develop/北海道旅遊 && python3 -m http.server 8000
```

然後用瀏覽器打開 <http://localhost:8000>。

## 照片授權

景點與料理照片來自 Wikimedia Commons，依各自的創用 CC 授權使用（作者與授權列在網站頁尾「照片來源與授權」）。
餐廳卡片的照片標示「料理示意」，不是該店實拍。如果之後有自己拍的照片，直接替換 `assets/img/` 內同名檔案即可。
