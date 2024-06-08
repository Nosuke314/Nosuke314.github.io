README.mdは説明を書いておきます

inde.htmlについて
<!DOCTYPE html><!--これはこのファイルがHTMLですと証言しているプログラム>
<html lang="en">
<head><!--これはサイトの情報を管理する場所、サイトタイトル、説明、管理など-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css"><!--ここに書いてあるのがHTMLにcssを読み込ませるためのプログラム-->
    <script src="script.js" defer></script><!--ここは詳細1を参考にしてください-->
</head>
<body><!--これはhtmlの中身になる部分(タイトル、サブタイトル、など新聞と同じと考えるべき）-->
    <h1></h1><!--これはタイトル-->
    <p></p><!--これはタイトルの見出しまたは本文的な？-->
    <script src="index.js"></script><!-- これがHTMLにJavascriptを読み込ませるプログラム -->
</body>
</html>

詳細
1 <script src="script.js" defer></script>
: script.jsという外部JavaScriptファイルを読み込みます。defer属性を使用すると、HTML文書が完全に解析されるまでスクリプトの実行を遅延させます。
<script src="index.js"></script>
: index.jsという外部javascriptファイルを読み取ります。別々にすることでわかりやすく設定することができる

style.cssについて
body {
    font-family: Arial, sans-serif;<!--フォント-->
    line-height: 1.6;
    background-color: #f4f4f4;<!--背景色-->
    color: #333;<!--色-->
    margin: 0;
    padding: 0;
}

書き方としては
主題{
    細かな設定
}
という書き方で、~~に対して{この中に設定}という流れです

scirpt.js & index.js　について
これはJavascriptになります。