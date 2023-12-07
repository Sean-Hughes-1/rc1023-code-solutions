import { evenNumbers, toDollars, divideBy, multiplyBy, } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1,2,3,4,5];
    const result = evenNumbers(numbers);
    expect(result).toEqual([2,4]);
  })
})

describe('toDollars', () => {
  it('returns a number formatted in dollars and cents ', () => {
    const number = 52
    const result = toDollars(number);
    expect(result).toEqual('$52.00');
  })
  it('returns formatted number rounded up to the second decimal', () => {
    const number = 54.59999
    const result = toDollars(number);
    expect(result).toEqual('$54.60');
  })
})
describe('divideBy', () => {
  it('returns array of numbers multiplied by divisor', () => {
    const numbers:number[] = [6,12,24,48];
    const divisor:number = 2;
    const result = divideBy(numbers,divisor);
    expect(result).toEqual([3,6,12,24]);
  })
  it('does not modify the original array', () => {
    const inputArray = [10,20,30,40];
    const originalArrayCopy = [...inputArray];
    const resultArray = divideBy(inputArray, 2);
    expect(resultArray).toEqual([5,10,15,20]);
    expect(inputArray).toEqual(originalArrayCopy);
    expect(originalArrayCopy).toEqual([10,20,30,40]);
  })
})
