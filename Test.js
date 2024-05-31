function submitAnswer() {
    var answer = document.getElementById('answer').value.toLowerCase(); // 回答を小文字に変換する
    var responseSpace = document.getElementById('response');

    // 正解の回答リスト
    var correctAnswers = ["槍投げ", "やり投げ", "槍投", "やりなげ", "ヤリナゲ", ];

    // 回答が正解のリストに含まれているかどうかを判定
    if (correctAnswers.includes(answer)) {
        responseSpace.textContent = "正解です！";
        showImage(); // 画像を表示する関数を呼び出す
        showNextButton();
    } else {
        responseSpace.textContent = "不正解です。もう一度挑戦してみてください。";
        freezeScreen(); // 画面をフリーズする関数を呼び出す
    }
}
