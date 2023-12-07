interface Counts {
  [key: string]: number;
}
export function charCounts(word: string): Counts {
  const obj: Counts = {};
  for (let i = 0; i < word.length; i++) {
    const char = word[i].toLowerCase();
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
}
