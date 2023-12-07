import { fuzeBuzz } from './fuzeBuzz';

// Your code goes here
describe('fuzeBuzz', () => {
  it('returns an array of strings containing all numbers up to and including limit', () => {
    const limit = 2;
    const result = fuzeBuzz(limit);
    expect(result).toEqual(['1', '2']);
  });
  it('Learning gets added to the array if current number is divisible by 3', () => {
    const limit = 3;
    const result = fuzeBuzz(limit);
    expect(result).toEqual(['1', '2', 'Learning']);
  });
  it('Learning gets added to the array if current number is divisible by 3', () => {
    const limit = 3;
    const result = fuzeBuzz(limit);
    expect(result).toEqual(['1', '2', 'Learning']);
  });
  it('LearningFuze gets added to the array if current number is divisible by 15', () => {
    const limit = 15;
    const result = fuzeBuzz(limit);
    expect(result).toEqual([
      '1',
      '2',
      'Learning',
      '4',
      'Fuze',
      'Learning',
      '7',
      '8',
      'Learning',
      'Fuze',
      '11',
      'Learning',
      '13',
      '14',
      'LearningFuze',
    ]);
  });
});
