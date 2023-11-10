const background = document.querySelector('.container');
const bulb = document.querySelector('.bulb');

function handleClick(e) {
  if (bulb.classList.contains('bulb-on')) {
    bulb.classList.remove('bulb-on');
    bulb.classList.add('bulb-off');
    background.classList.remove('light-background');
    background.classList.add('dark-background');
  } else if (bulb.classList.contains('bulb-off')) {
    bulb.classList.remove('bulb-off');
    bulb.classList.add('bulb-on');
    background.classList.remove('dark-background');
    background.classList.add('light-background');
  }
}
bulb.addEventListener('click', handleClick);
