/* exported chunk */
function chunk(array, size) {
  const output = [];
  let chunk = [];
  for (let i = 0; i < array.length; i++) {
    chunk.push(array[i]);
    if (chunk.length === size || i === array.length - 1) {
      const chunkCopy = [];
      for (let j = 0; j < chunk.length; j++) {
        chunkCopy[j] = chunk[j];
      }
      output.push(chunkCopy);
      chunk = [];
    }
  }
  return output;
}
