const width: number = 40;
const height: number = 20;
const area: number = width * height;
console.log('Area: ', area);
console.log('type of area: ', typeof area);
const bill: number = 50;
const payment: number = 75;
const change: number = payment - bill;
console.log('value of change: ', change);
console.log('type of change: ', typeof change);
const quizzes: number = 80;
const midterm: number = 75;
const final: number = 90;
const grade: number = (quizzes + midterm + final) / 3;
console.log('value of grade: ', grade);
console.log('type of grade: ', typeof grade);
const firstName: string = 'Barney';
const lastName: string = 'Rubble';
const fullName: string = firstName + ' ' + lastName;
console.log('full name: ', fullName);
console.log('type of fullName: ', typeof fullName);
const pH: number = 5;
const isAcidic: boolean = pH < 7;
console.log('value of isAcidic', isAcidic);
console.log('type of isAcidic: ', typeof isAcidic);
const headCount: number = 300;
const isSparta: boolean = headCount === 300;
console.log('value of isSparta: ', isSparta);
console.log('type of isSparta: ', typeof isSparta);
let motto: string = fullName;
motto += ' is the GOAT';
console.log(motto);
console.log('type of motto: ', typeof motto);
