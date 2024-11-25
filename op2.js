const slides = document.querySelector('.slides');
let currentIndex = 0;
const totalSlides = slides.children.length;

let startX = 0;
let currentTranslate = 0;
let previousTranslate = 0;
let isDragging = false;

// タッチ開始イベント
slides.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

// タッチ移動イベント
slides.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const currentX = e.touches[0].clientX;
  const deltaX = currentX - startX;
  slides.style.transform = `translateX(${previousTranslate + deltaX}px)`;
});

// タッチ終了イベント
slides.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  const deltaX = endX - startX;

  if (deltaX > 50 && currentIndex > 0) {
    // 左にスワイプ（前のスライドへ）
    currentIndex--;
  } else if (deltaX < -50 && currentIndex < totalSlides - 1) {
    // 右にスワイプ（次のスライドへ）
    currentIndex++;
  }

  updateSlidePosition();
  isDragging = false;
});

// スライド位置を更新
function updateSlidePosition() {
  currentTranslate = -currentIndex * slides.offsetWidth;
  previousTranslate = currentTranslate;
  slides.style.transform = `translateX(${currentTranslate}px)`;
}
