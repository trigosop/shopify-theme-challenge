function changeTab(event, tabId) {
  const tabItems = document.querySelectorAll('.tab-item');
  tabItems.forEach((item) => (item.style.display = 'none'));

  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach((button) => button.classList.remove('active'));

  const selectedTab = document.getElementById(tabId);
  selectedTab.style.display = 'block';

  event.target.classList.add('active');
}
