/* exported numVowels */
function numVowels(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case 'A':
        count++;
        break;
      case 'a':
        count++;
        break;
      case 'E':
        count++;
        break;
      case 'e':
        count++;
        break;
      case 'I':
        count++;
        break;
      case 'i':
        count++;
        break;
      case 'O':
        count++;
        break;
      case 'o':
        count++;
        break;
      case 'U':
        count++;
        break;
      case 'u':
        count++;
        break;
    }
  }
  return count;
}
