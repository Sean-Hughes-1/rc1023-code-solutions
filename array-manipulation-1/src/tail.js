/* exported tail */
/** Create a function that accepts an array as its argument which returns all but the first element of the array
 * create an empty array and assign it to a variable called output
 * loop through the array first, checking if the index is at 0, if it is at zero, skip that iteration
 * else call the push method of the output array with the argument of the array at the current index
 * return the output array
 */
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
