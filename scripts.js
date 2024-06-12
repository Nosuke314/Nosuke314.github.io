// script.js
function checkAnswer() {
    const correctAnswer = "テスト"; // 正しい答えをここに設定
    const userAnswer = document.getElementById("answerBox").value;
    const spinner = document.getElementById("spinner");
    const resultImage = document.getElementById("resultImage");

    // スピナーを表示
    spinner.style.display = "block";
    resultImage.style.display = "none"; // 結果画像は非表示

    // 1〜3秒後に正誤判定を行う
    setTimeout(() => {
        spinner.style.display = "none"; // スピナーを非表示
        if (userAnswer === correctAnswer) {
            // 正解の場合の画像を表示
            resultImage.innerHTML = '<img src="correct.png" alt="正解" class="correctImage">';
        } else {
            // 不正解の場合の画像を表示
            resultImage.innerHTML = '<img src="incorrect.png" alt="不正解" class="correctImage">';
        }
        resultImage.style.display = "block";
    }, 2000); // 2秒後に判定を行う
}
