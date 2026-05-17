# AI-900 必考概念點讀

這是一個純前端靜態網站，用來練習 Microsoft AI-900 必考基本概念。

功能：

- 點選概念名稱後，朗讀英文名稱、中文名稱與中文說明
- 依五個模組整理 AI-900 考點
- 不需要後端、不需要資料庫
- 可部署到 GitHub Pages、Netlify、Vercel 或 Azure Static Web Apps

## 本機預覽

直接開啟 `index.html` 即可使用。若瀏覽器語音功能受限制，也可以用本機伺服器開啟。

## 分享給別人的最快方式：Netlify Drop

1. 前往 <https://app.netlify.com/drop>
2. 將整個資料夾或 `ai900-static-site.zip` 拖曳上去
3. Netlify 會產生一個公開網址，例如：

```text
https://your-site-name.netlify.app
```

## GitHub Pages 部署

1. 建立一個 GitHub repository
2. 上傳以下檔案到 repository 根目錄：
   - `index.html`
   - `styles.css`
   - `app.js`
   - `.nojekyll`
3. 到 repository 的 Settings > Pages
4. Source 選擇 `Deploy from a branch`
5. Branch 選擇 `main`，資料夾選擇 `/root`
6. 儲存後，GitHub 會產生公開網址：

```text
https://你的帳號.github.io/你的-repo-名稱/
```

## 檔案說明

- `index.html`：網站結構
- `styles.css`：版面與視覺樣式
- `app.js`：AI-900 概念資料與語音朗讀互動
- `.nojekyll`：讓 GitHub Pages 直接以靜態網站方式發布
