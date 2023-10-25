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
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
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
