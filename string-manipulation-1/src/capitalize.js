/* exported capitalize */
/* create a function that accepts one argument, a word and capitalizes the first character of the word and also makes sure that only
the first character is capitalized
call the toLowerCase method on the word and store that in a variable called wordToLowerCase
call the toUpperCase method on the first character of the word and store that in a variable called upperCasedChar
concatenate the upperCasedChar to the result of calling the slice method with the argument of 1 to wordToLowerCase
return upperCasedWord */
function capitalize(word) {
  const wordToLowerCase = word.toLowerCase();
  const upperCasedChar = word.charAt(0).toUpperCase();
  const upperCasedWord = upperCasedChar + wordToLowerCase.slice(1);
  return upperCasedWord;
}
