/* exported initial */
function initial(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      continue;
    } else {
      output.push(array[i]);
    }
  }
  return output;
}
