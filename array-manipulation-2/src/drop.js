/* exported drop */
/** Create a function that accepts an array and a count parameter which returns a new array containing the elements of 'array' after the first count
 * elements.
 * create an empty array and assign it to a variable called output
 * check if the array is empty or if the count is larger than the length of the array. If, yes, return an empty array
 * else, loop through the array checking if the initializer variable for the loop is less than or equal to the count. if so, skip that
 * iteration.
 * otherwise, push the array at index to the output array
 * return the output array
 */
function drop(array, count) {
  const output = [];
  if (array === 0 || count > array.length) {
    return [];
  } else {
    for (let i = 0; i < array.length; i++) {
      if (i <= count - 1) {
        continue;
      } else {
        output.push(array[i]);
      }
    }
  }
  return output;
}
