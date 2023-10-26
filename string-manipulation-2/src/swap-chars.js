/* exported swapChars */
function swapChars(firstIndex, secondIndex, inputString) {
  const chars = inputString.split('');
  const temp = chars[firstIndex];
  chars[firstIndex] = chars[secondIndex];
  chars[secondIndex] = temp;
  let output = '';
  for (let i = 0; i < chars.length; i++) {
    output += chars[i];
  }

  return output;
}
