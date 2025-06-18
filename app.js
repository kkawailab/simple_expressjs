// Express.jsの初心者向けサンプルアプリケーション
// このファイルは「こんにちはセカイ」と表示するWebアプリケーションです

// 必要なモジュールを読み込み
// express - Webアプリケーションフレームワーク
const express = require('express');
// path - ファイルパスを扱うためのNode.js標準モジュール
const path = require('path');

// Expressアプリケーションのインスタンスを作成
// これがWebサーバーの中心となるオブジェクトです
const app = express();

// サーバーが動作するポート番号を設定
// 環境変数PORTが設定されていればそれを使用、なければ3000番を使用
const PORT = process.env.PORT || 3000;

// テンプレートエンジンの設定
// EJS（Embedded JavaScript）を使用してHTMLテンプレートを処理
app.set('view engine', 'ejs');
// テンプレートファイルが格納されるディレクトリを指定
app.set('views', path.join(__dirname, 'views'));

// 静的ファイル（CSS、画像、JavaScriptなど）を配信するディレクトリを設定
// 現在は使用していませんが、将来的にスタイルシートなどを追加する場合に備えて設定
app.use(express.static(path.join(__dirname, 'public')));

// ルーティングの設定
// ルーティングとは、特定のURLにアクセスされた時にどの処理を実行するかを決める仕組みです

// メインページ（トップページ）のルーティング
// URL: http://localhost:3000/
app.get('/', (req, res) => {
    // req: リクエストオブジェクト（ブラウザからの要求情報）
    // res: レスポンスオブジェクト（サーバーからの応答情報）
    
    // index.ejsテンプレートを使ってHTMLを生成し、ブラウザに送信
    // 第2引数のオブジェクトはテンプレートに渡すデータ
    res.render('index', {
        title: 'Express.js サンプルアプリ',
        message: 'こんにちはセカイ！',
        description: 'これはExpress.jsを使った初心者向けのサンプルアプリケーションです。'
    });
});

// 「こんにちは」ページのルーティング
// URL: http://localhost:3000/hello
app.get('/hello', (req, res) => {
    // hello.ejsテンプレートを使ってHTMLを生成
    res.render('hello', {
        title: 'こんにちはページ',
        message: 'こんにちは！',
        description: 'このページは挨拶を表示します。'
    });
});

// 「おやすみ」ページのルーティング
// URL: http://localhost:3000/goodnight
app.get('/goodnight', (req, res) => {
    // goodnight.ejsテンプレートを使ってHTMLを生成
    res.render('goodnight', {
        title: 'おやすみページ',
        message: 'おやすみ！',
        description: 'このページは就寝の挨拶を表示します。'
    });
});

// 404エラーハンドリング
// 上記のルーティングにマッチしないURLにアクセスされた場合の処理
app.use((req, res) => {
    // HTTPステータスコード404（Not Found）を設定
    res.status(404);
    // エラーページを表示
    res.render('404', {
        title: 'ページが見つかりません',
        message: 'お探しのページは見つかりませんでした。',
        url: req.originalUrl
    });
});

// サーバーを起動
// 指定されたポート番号でサーバーを開始し、接続を待機
app.listen(PORT, () => {
    // サーバー起動時にコンソールにメッセージを表示
    console.log(`サーバーが起動しました: http://localhost:${PORT}`);
    console.log('アプリケーションを停止するには Ctrl+C を押してください');
});

// このファイルの主な流れ：
// 1. 必要なモジュールを読み込み
// 2. Expressアプリケーションを作成
// 3. テンプレートエンジンを設定
// 4. ルーティング（URL毎の処理）を定義
// 5. エラーハンドリングを設定
// 6. サーバーを起動