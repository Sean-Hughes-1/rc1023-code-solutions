/* exported capitalizeWords */
/** Create a function that capitalizes the words in a given string
 * call the toLowerCase method on the string and store the result in a variable called toLowerCase
 * call the split method with a string containing a space as the argument and store the resulting array in a variable called stringArray
 * assign an empty string to a variable called firstChar
 * assing an empty string to a variable called output
 * loop through the string array, for each iteration access the stringArray at the index at the first chracter
 * concatenate the result of stringArray at index with the first character removed to the result of the first character being capitalized and store in output variable
 * to prevent a trailing space we will check if the index is on the last character of the word, if yes, we will skip that iteration else
 * we will concatenate a string containing just an empty space to the output string so each word has a space between it
 * after the loop is finished we will return the value of output
 */
function capitalizeWords(string) {
  const toLowerCase = string.toLowerCase();
  const stringArray = toLowerCase.split(' ');
  let firstChar = '';
  let output = '';
  for (let i = 0; i < stringArray.length; i++) {
    firstChar = stringArray[i][0];
    output += firstChar.toUpperCase() + stringArray[i].slice(1);
    if (i === stringArray.length - 1) {
      continue;
    } else {
      output += ' ';
    }
  }
  return output;
}
