/* exported capitalize */
function capitalize(word) {
  const wordToLowerCase = word.toLowerCase();
  const upperCasedChar = word.charAt(0).toUpperCase();
  const upperCasedWord = upperCasedChar + wordToLowerCase.slice(1);
  return upperCasedWord;
}
