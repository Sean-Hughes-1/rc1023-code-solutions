const number1 = 10;
const number2 = 20;
const number3 = 5;
const maximumValue = Math.max(number1, number2, number3);
console.log('Maximum Value: ', maximumValue);
const heros = [
  'Super Man',
  'Captain America',
  'Greatest American Hero',
  'Spider Man',
];
let randomNumber = Math.random();
randomNumber = randomNumber * heros.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex: ', randomIndex);
const randomHero = heros[randomIndex];
console.log('randomHero: ', randomHero);
const library = [
  {
    title: 'Programming for Dummies',
    author: 'Dr. John Cobalt',
  },
  {
    title: 'Where the Red Fern Grows',
    author: 'Robert Maxwell',
  },
];
const lastBook = library.pop();
console.log('Last book: ', lastBook);
const firstBook = library.shift();
console.log('First Book: ', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
console.log('Library: ', library);
const fullName = 'Sean Hughes';
const firstAndLastName = fullName.split(' ');
console.log('First and Last Name: ', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName);
