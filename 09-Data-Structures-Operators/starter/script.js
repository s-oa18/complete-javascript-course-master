'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};
/*

// Destructuring Objects
restaurant.orderDelivery({
  time: '22:30',
  address: 'Vis del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Vis del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);


//Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// The spread operator (...)
// Without destructuring

const arr = [7, 8, 9];
const badNewAray = [1, 6, arr[0], arr[(1, arr[2])]];
console.log(badNewAray);

// With destructuring
const newArr = [1, 2, ...arr];
console.log(newArr);
// unpacks all individual elements of an array
console.log(...arr);

//Using the Spread Operator on strings
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);

// Real world example
//using Spread operator on functions
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingredients);

// Without using The Spread Operator
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// Using The Spread Operator
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantcopy = { ...restaurant };
restaurantcopy.name = 'Ristorante Roma';
console.log(restaurantName);


// REST PATTERN AND PARAMETERS

// Destructuring Arrays

//SPREAD, because on the RIGHT side of =
//const arr = [1, 2, ...[3, 4]];

//REST, because on the LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherfood);

// Destructuring Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Destructuring Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');


//Short Circuiting (&& and ||)
// OR Operator

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 23 || null);

//restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

//With Shortcircuiting,
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

//AND Operator
// Works as the exact opposite of OR operator
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

//Pratical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

//Using && Operator
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');


restaurant.numGuests = 0;
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

//Nullish: null and undefined (Not 0 or '')
const questCorrect = restaurant.numGuests ?? 10;
console.log(questCorrect);



const rest1 = {
  name: 'Capri',
  //numGuest: 20,
  numGuest: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//OR assignment operator
//rest1.numGuest = rest1.numGuest || 10;
//rest2.numGuest = rest2.numGuest || 10;
//rest1.numGuest ||= 10;
//rest2.numGuest ||= 10;

//nullish assignment operator null or undefined()
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

// AND assignment operator
//rest1.owner = rest1.owner && '<ANONYMOUS>';
//rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

*/

// Coding Challenge #1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Destructuring
const [player1, player2] = game.players;
console.log(player1, player2);

//REST parameter
const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

//The spread operator
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//Nested destructuring
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski');
printGoals(...game.scored);

/*
if (team1 < team2) {
  console.log('team 1 is likely to win');
} else console.log('team 2 is likely to win');
*/

team1 < team2 && console.log('Team 1 is more likely to win');
/*
//mysolution
const player1 = game.players[0];
const player2 = game.players[1];

const gk = 'Neuer';
const fieldsPlayers = [
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman,Muller',
  'Gnarby',
  'Lewandowski',
];

const allPlayers = [...game.players[0], ...game.players[1]];

const players1Final = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic'];

const team1 = { ...game.odds };
console.log(team1);
*/
