/* exported isUpperCased */
function isUpperCased(word) {
  let boolean;
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      boolean = false;
    } else {
      boolean = true;
    }
  }
  return boolean;
}
