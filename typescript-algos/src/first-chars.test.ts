import { firstChars } from './first-chars';

// Your code goes here
describe('firstChars', () => {
  it('returns only the first character of the string', () => {
    const length = 1;
    const string = 'React';
    const result = firstChars(length, string);
    expect(result).toEqual('R');
  });
  it('returns the first 4 characters of the string', () => {
    const length = 4;
    const string = 'JavaScript';
    const result = firstChars(length, string);
    expect(result).toEqual('Java');
  });
  it('returns the first twenty characters of the string', () => {
    const length = 20;
    const string = 'LearningFuze';
    const result = firstChars(length, string);
    expect(result).toEqual('LearningFuze');
  });
  it('returns an empty string even though length passed is positive integer', () => {
    const length = 5;
    const string = '';
    const result = firstChars(length, string);
    expect(result).toEqual('');
  });
});
