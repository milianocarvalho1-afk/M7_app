let currentTab = 0;
const container = document.getElementById('swipeContainer');
const dockItems = document.querySelectorAll('.dock-item');

dockItems.forEach((item) => {
  item.addEventListener('click', () => {
    const tabIndex = item.getAttribute('data-tab');
    if (tabIndex !== null) {
      currentTab = parseInt(tabIndex);
      updateNavigation();
    }
  });
});

function updateNavigation() {
  if (container) {
    container.style.transform = `translateX(-${currentTab * 100}vw)`;
  }
  dockItems.forEach((btn, idx) => {
    btn.classList.toggle('active', idx === currentTab);
  });
}
