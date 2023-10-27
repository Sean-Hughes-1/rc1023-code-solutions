/* exported takeRight */
function takeRight(array, count) {
  const output = [];
  let startIndex = 0;
  if (count >= array.length) {
    startIndex = 0;
  } else {
    startIndex = array.length - count;
  }
  for (let i = startIndex; i < array.length; i++) {
    output.push(array[i]);
  }
  return output;
}
