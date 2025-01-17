// タブデータ
const tabs = [
  {
    title: "12/21 窃盗1 取得物",
    images: [
      { src: "無題169_20250117083244.png", title: "予告状" },
      { src: "IMG_1548.png", title: "謎の紙1" },
      { src: "IMG_1550.png", title: "謎の紙2" },
      { src: "IMG_1551.png", title: "謎の紙3" },
      { src: "IMG_1552.png", title: "謎の紙4" },
      { src: "IMG_1553.png", title: "謎の紙5" },
    ],
  },
  {
    title: "12/22 窃盗2 取得物",
    images: [
      { src: "無題169_20250117083244.png", title: "予告状" },
      { src: "IMG_1548.png", title: "謎の紙1" },
      { src: "IMG_1550.png", title: "謎の紙2" },
      { src: "IMG_1551.png", title: "謎の紙3" },
      { src: "IMG_1552.png", title: "謎の紙4" },
      { src: "IMG_1553.png", title: "謎の紙5" },
    ],
  },
];

// タブ生成関数
function createTabs(tabs) {
  const container = document.getElementById("tab-container");

  tabs.forEach((tab, index) => {
    // タブボタン
    const tabButton = document.createElement("button");
    tabButton.className = "tab-button";
    tabButton.textContent = tab.title;
    tabButton.setAttribute("aria-expanded", "false");

    // タブコンテンツ
    const tabContent = document.createElement("div");
    tabContent.className = "tab-content";

    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";

    tab.images.forEach((image) => {
      const imageItem = document.createElement("div");
      imageItem.className = "image-item";

      const img = document.createElement("img");
      img.src = image.src;
      img.alt = image.title;

      const title = document.createElement("p");
      title.textContent = image.title;

      imageItem.appendChild(img);
      imageItem.appendChild(title);
      imageContainer.appendChild(imageItem);
    });

    tabContent.appendChild(imageContainer);

    // タブの開閉処理
    tabButton.addEventListener("click", () => {
      const isOpen = tabContent.classList.contains("open");
      document.querySelectorAll(".tab-content").forEach((content) => {
        content.classList.remove("open");
      });
      document.querySelectorAll(".tab-button").forEach((btn) => {
        btn.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        tabContent.classList.add("open");
        tabButton.setAttribute("aria-expanded", "true");
      }
    });

    // DOMに追加
    container.appendChild(tabButton);
    container.appendChild(tabContent);
  });
}

// タブを生成
createTabs(tabs);
