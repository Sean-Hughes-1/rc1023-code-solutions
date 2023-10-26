/* exported findIndex */
function findIndex(array, value) {
  let index;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      index = i;
      return index;
    } else {
      index = -1;
    }
  }
  return index;
}
