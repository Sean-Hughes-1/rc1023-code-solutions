/* exported includes */
/** Create a function that accepts an array and a value as parameters which returns a boolean indicating whether
 * the value is found in the array.
 * loop through the array checking if the array at index is equal to the valule parameter, if it matches return 'True'
 * otherwise, after the loop finishes, if no match is found, return 'False'
 */
function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
