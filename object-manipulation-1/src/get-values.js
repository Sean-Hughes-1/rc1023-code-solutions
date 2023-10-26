/* exported getValues */
/* Create a function that gets the values of an object
within the function create a new empty array and assign it to a variable called output
loop through the object pushing the value of each key to the empty array
return the output array */
function getValues(object) {
  const output = [];
  for (const key in object) {
    output.push(object[key]);
  }
  return output;
}
