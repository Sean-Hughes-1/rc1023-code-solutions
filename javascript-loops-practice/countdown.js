/* exported countdown */
function countdown(number) {
  if (number < 0) {
    return [];
  }
  const countdownArray = [];
  for (let i = number; i >= 0; i--) {
    countdownArray.push(i);
  }

  return countdownArray;
}
