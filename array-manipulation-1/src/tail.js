/* exported tail */
function tail(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      continue;
    } else {
      output.push(array[i]);
    }
  }
  return output;
}
