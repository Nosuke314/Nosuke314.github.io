document.addEventListener('DOMContentLoaded', function () {
  const tabButton = document.querySelector('.tab-button');
  const tabContent = document.querySelector('.tab-content');

  tabButton.addEventListener('click', () => {
    if (tabContent.style.maxHeight) {
      // タブを閉じる
      tabContent.style.maxHeight = null;
    } else {
      // タブを開く
      tabContent.style.maxHeight = tabContent.scrollHeight + 'px';
    }
  });
});
