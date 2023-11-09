const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const messageData = {};
  for (let i = 0; i < contactForm.elements.length; i++) {
    const element = contactForm.elements[i];
    messageData[element.name] = element.value;
  }
  console.log(messageData);
}
