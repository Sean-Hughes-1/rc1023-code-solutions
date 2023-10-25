/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  return number < 5;
}
function isEven(number) {
  return number % 2 === 0;
}
function startsWithJ(string) {
  return string[0] === 'J';
}
function isOldEnoughToDrink(person) {
  return person.age >= 21;
}
function isOldEnoughToDrive(person) {
  return person.age >= 16;
}
function isOldEnoughToDrinkAndDrive(person) {
  return person.age >= 21;
}
function categorizeAcidity(pH) {
  if (pH >= 0 && pH <= 14) {
    if (pH === 7) {
      return 'neutral';
    } else if (pH < 7) {
      return 'acid';
    } else {
      return 'base';
    }
  } else {
    return 'invalid pH level';
  }
}
function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    console.log("We're the warner brothers!");
  } else if (name === 'dot') {
    console.log("I'm cute!");
  } else {
    console.log('Goodnight everybody!');
  }
}
function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      console.log('Die Hard');
      break;
    case 'comedy':
      console.log('Caddy Shack');
      break;
    case 'horror':
      console.log('Nightmare on Elm Street');
      break;
    case 'drama':
      console.log('A River Runs Through it');
      break;
    case 'musical':
      console.log('The Sound of Music');
      break;
    case 'sci-fi':
      console.log('Star Wars');
      break;
    default:
      console.log(
        'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi'
      );
  }
}
