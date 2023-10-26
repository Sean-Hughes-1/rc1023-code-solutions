/* exported capitalizeWord */
/** Create a function that accepts a single word as a parameter which returns the word with its first character
 * uppercased and the rest of the character lower cased. any instance of JavaScript must be cased 'JavaScript'
 * convert the word to all lower case and store in a variable called lowerCaseWord
 * convert the first character of the word to uppercase and store that in a variable called upperCaseChar
 * check if the word is 'javascript' if yes, then return 'JavaScript' else
 * return the concatenated result of uppercaseChar to lowerCaseWOrd with the first chracter removed using the slice method
 */
function capitalizeWord(word) {
  const lowerCaseWord = word.toLowerCase();
  const upperCaseChar = word.charAt(0).toUpperCase();
  if (lowerCaseWord === 'javascript') {
    return 'JavaScript';
  } else {
    return upperCaseChar + lowerCaseWord.slice(1);
  }
}
