/* exported getKeys */
/* create a fucntion that takes in an object and returns the keys of the object
in the function, create a new empty array and assign it to a variable called 'output'
loop through the keys in the object, pushing each key to the array being stored in output variable
return the value of the output variable */
function getKeys(object) {
  const output = [];
  for (const key in object) {
    output.push(key);
  }
  return output;
}
