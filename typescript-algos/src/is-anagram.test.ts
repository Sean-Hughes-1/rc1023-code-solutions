import { isAnagram } from './is-anagram';

// Your code goes here
describe('isAnagram', () => {
  it('returns a boolean indicating whether the strings are anagrams', () => {
    const firstString = 'astronomer';
    const secondString = 'moon starer';
    const result = isAnagram(firstString, secondString);
    expect(result).toBe(true);
  });
  it('returns a boolean indicating whether the strings are anagrams', () => {
    const firstString = 'listen';
    const secondString = 'silent';
    const result = isAnagram(firstString, secondString);
    expect(result).toBe(true);
  });
  it('returns a boolean indicating whether the strings are anagrams', () => {
    const firstString = 'programmer';
    const secondString = 'poor gamer';
    const result = isAnagram(firstString, secondString);
    expect(result).toBe(false);
  });
  it('returns a boolean indicating whether the strings are anagrams', () => {
    const firstString = 'red dad';
    const secondString = 'rad ede';
    const result = isAnagram(firstString, secondString);
    expect(result).toBe(false);
  });
});
