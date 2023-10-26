/* exported oddOrEven */
function oddOrEven(numbers) {
  const outPut = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2) {
      outPut.push('odd');
    } else {
      outPut.push('even');
    }
  }
  return outPut;
}
