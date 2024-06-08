
/*このプログラムはアニメーションやシステム動作など管理をする場所*/
// ページがロードされたときに実行される関数
function showGreeting() {
    alert("こんにちは！ページへようこそ！");
}

// ページが完全にロードされたときに関数を実行する
window.onload = showGreeting;
