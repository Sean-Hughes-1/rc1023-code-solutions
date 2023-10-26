/* exported includesSeven */
function includesSeven(array) {
  let boolean = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    } else {
      boolean = false;
    }
  }
  return boolean;
}
