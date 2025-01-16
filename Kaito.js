// script.js
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

// メニューアイテムを選択
const menuItems = document.querySelectorAll(".menu a");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// メニューアイテムをクリックしたときにスクロールアニメーション
menuItems.forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault(); // リンクのデフォルトの動作を無効にする
    const targetId = e.target.getAttribute("href").slice(1); // #を取り除く
    const targetElement = document.getElementById(targetId);

    targetElement.scrollIntoView({
      behavior: 'smooth', // スムーズなスクロール
      block: 'start' // 上部に合わせてスクロール
    });

    menu.classList.remove("show"); // メニューを閉じる
  });
});
