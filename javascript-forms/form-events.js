function handleFocus(event) {
  console.log('focus event fired');
  console.log('focus event target name: ', event.target.name);
}
function handleBlur(event) {
  console.log('blur event was fired');
  console.log('blur event target name: ', event.target.name);
}
function handleInput(event) {
  console.log('input target name: ', event.target.name);
  console.log('input event target value: ', event.target.value);
}
const userName = document.querySelector('#user-name');
const email = document.querySelector('#user-email');
const message = document.querySelector('#user-message');

userName.addEventListener('focus', handleFocus);
userName.addEventListener('blur', handleBlur);
userName.addEventListener('input', handleInput);

email.addEventListener('focus', handleFocus);
email.addEventListener('blur', handleBlur);
email.addEventListener('input', handleInput);

message.addEventListener('focus', handleFocus);
message.addEventListener('blur', handleBlur);
message.addEventListener('input', handleInput);
