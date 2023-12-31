let count = 0;
const hotButton = document.querySelector('.hot-button');
const clickCount = document.querySelector('.click-count');
function handleClick(event) {
  count++;
  clickCount.textContent = 'Clicks:' + count;
  if (count < 4) {
    hotButton.className = 'hot-button cold';
  }
  if (count >= 4 && count < 7) {
    hotButton.className = 'hot-button cool';
  }
  if (count >= 7 && count < 10) {
    hotButton.className = 'hot-button tepid';
  }
  if (count >= 10 && count < 13) {
    hotButton.className = 'hot-button warm';
  }
  if (count >= 13 && count < 16) {
    hotButton.className = 'hot-button hot';
  }
  if (count >= 16) {
    hotButton.className = 'hot-button nuclear';
  }
}
hotButton.addEventListener('click', handleClick);
