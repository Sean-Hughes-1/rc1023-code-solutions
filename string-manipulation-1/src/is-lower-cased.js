/* exported isLowerCased */
function isLowerCased(word) {
  let boolean;
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      boolean = false;
      return boolean;
    } else {
      boolean = true;
    }
  }
  return boolean;
}
