const library = [
  {
    isbn: 1,
    title: 'How to Read',
    author: 'Billy Bookhead',
  },
  {
    isbn: 2,
    title: 'How to Math',
    author: 'Mark Mathison',
  },
  {
    isbn: 3,
    title: 'How to Ride a Bike',
    author: 'Ricky Rider',
  },
];
console.log('library: ', library);
console.log('typeof library: ', typeof library);
const stringifiedLibrary = JSON.stringify(library);
console.log('stringified library: ', stringifiedLibrary);
console.log('typeof stringified library: ', typeof stringifiedLibrary);
const student = '{"studentID":1,"studentName":"Jeff Hanks"}';
console.log('student JSON: ', student);
console.log('typeof student: JSON', typeof student);
const studentParsed = JSON.parse(student);
console.log('student parsed: ', studentParsed);
console.log('typeof student parsed: ', typeof studentParsed);
