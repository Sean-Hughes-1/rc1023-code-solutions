/* exported take */
/** Create a function that receives an array and a count parameter which returns a new array containing the first 'count'
 * elements of the given array.
 * Create an empty array and assign to a variable called output
 * loop through the array, iterating only 'count' many times
 * check if the array is empty, if empty return an empty array
 * push the array at index to the output variable for each iteration of the loop
 * return the output array
 */
function take(array, count) {
  const output = [];
  for (let i = 0; i < count; i++) {
    if (array.length === 0) {
      return output;
    }
    output.push(array[i]);
  }
  return output;
}
