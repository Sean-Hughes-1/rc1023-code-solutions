function updateHeading() {
  const message = document.querySelector('.message');
  message.textContent = 'Hello There';
}

setTimeout(updateHeading, 2000);
