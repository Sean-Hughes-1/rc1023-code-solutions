/* exported dropRight */
function dropRight(array, count) {
  if (count >= array.length) {
    return [];
  }
  const output = [];
  for (let i = 0; i < array.length - count; i++) {
    output.push(array[i]);
  }
  return output;
}
