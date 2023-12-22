let intervalTimer = null;

function updateHeading() {
  const heading = document.querySelector('h1');
  let countdown = heading.textContent;
  if (countdown === '0') {
    clearInterval(intervalTimer);
    heading.textContent = '~Earth Beeeelooowww Us~';
    return;
  }
  heading.textContent = --countdown;
}
intervalTimer = setInterval(updateHeading, 1000);
