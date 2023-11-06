/* exported lastChars */
function lastChars(length, string) {
  let output = '';
  if (length > string.length) {
    return string;
  }
  for (let i = string.length - length; i < string.length; i++) {
    output += string[i];
  }
  return output;
}
