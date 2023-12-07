import { charCounts } from './charCounts';

// Your code goes here
describe('charCounts', () => {
  it('returns and object with the string characters as keys and the value being the number of times that character occured', () => {
    const word = 'pepper';
    const result = charCounts(word);
    expect(result).toEqual({ p: 3, e: 2, r: 1 });
  });
  it('returns uppercase and lowercase characters counted together', () => {
    const word = 'paSseNgEr';
    const result = charCounts(word);
    expect(result).toEqual({ p: 1, a: 1, s: 2, e: 2, n: 1, g: 1, r: 1 });
  });
  it('includes spaces as characters and counts their occurance', () => {
    const word = 'Hello World';
    const result = charCounts(word);
    expect(result).toEqual({
      h: 1,
      e: 1,
      l: 3,
      o: 2,
      ' ': 1,
      w: 1,
      r: 1,
      d: 1,
    });
  });
  it('returns an empty object if the string is empty', () => {
    const word = '';
    const result = charCounts(word);
    expect(result).toEqual({});
  });
});
