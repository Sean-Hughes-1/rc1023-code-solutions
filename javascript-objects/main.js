const student = {
  firstName: 'Sean',
  lastName: 'Hughes',
  age: 49,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('fullName: ', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Chief Operating Officer';
console.log('student object: ', student);
const vehicle = {
  make: 'Harley Davidson',
  model: 'Road Glide',
  year: '2018',
};
vehicle['isConvertable'] = false;
console.log('vehicle object: ', vehicle);
const pet = {
  name: 'Ruby',
  type: 'Dog',
};
delete pet.name;
delete pet.type;
console.log('pet object: ', pet);
