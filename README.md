# 今日の和歌

ページを表示する度にランダムな和歌を表示するReactアプリです。

## 概要

古典和歌のデータベースからランダムに1首を選び、原文・読み仮名・作者情報を表示します。

## 使用技術

- [React](https://react.dev/)
- JavaScript (ES6+)
- CSS

## セットアップ手順

### 前提条件

- Node.js 18以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/hikotaro/waka-daily.git
cd waka-daily

# 依存パッケージをインストール
npm install

# 開発サーバーを起動
npm run dev
```

ブラウザで `http://localhost:5173` を開くとアプリが表示されます。

### ビルド

```bash
npm run build
```

## ディレクトリ構成

```
src/
├── components/
│   └── Waka.jsx        # 和歌表示コンポーネント
├── data/
│   └── wakaData.js     # 和歌データ
├── App.jsx
├── App.css
└── main.jsx
```

## ライセンス

MIT
