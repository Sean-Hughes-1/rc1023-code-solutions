/* exported truncate */
/** Create a function that accepts a length and a string as arguments and cuts that string down to at most the length of
 * characters and appends an elipses '...' at the end
 * Assign an empty string to a variable called output
 * loop through the string 'length' times each time concatenating the character at index to the empty string in output
 * after the loop is finished concatenate an elipsis to the end of the string
 * return the value of the output variable
 */
function truncate(length, string) {
  let output = '';
  for (let i = 0; i < length; i++) {
    output += string.charAt(i);
  }
  output += '...';
  return output;
}
