/* exported ransomCase */
/** Create a function that ransom cases a given string
 * call the toLowerCase method on the string and store that in a variable called toLowerCase
 * assign an empty string to a variable called output
 * loop thorugh the string
 * check if the index is odd, if so call the toUpperCase method on the toLowercase string at the index and concatenate the return value to
 * the output string else
 * concatenate the result of toLowerCase at index to the output string
 * retun the output string
 *
 */
function ransomCase(string) {
  const toLowerCase = string.toLowerCase();
  let output = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2) {
      output += toLowerCase[i].toUpperCase();
    } else {
      output += toLowerCase[i];
    }
  }
  return output;
}
