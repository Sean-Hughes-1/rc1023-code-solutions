/* exported getWords */
/** Create a function that returns an array containig the words that are passed as a string
 * check to see that the string has any words by comparing the length of the tring to 0, if 0 then return an empty array
 * else return the value of calling the split method passing an empty space as the argument
 */
function getWords(string) {
  if (string.length === 0) {
    return [];
  } else {
    return string.split(' ');
  }
}
