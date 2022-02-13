/*strict mode
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive')
*/
/*Functions declaration
function logger() {
    console.log('My name is Jonas');
}
//calling / running / invkoking function
logger();

function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`; return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
//console.log(fruitProcessor(5, 0));same as the previous line

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//function Declaration
function calcAge1(birthyear) {
    return 2037 - birthyear;
}
const age1 = calcAge1(1991);

//function expression
const calcAge2 = function (birthyear) {
    return 2037 - birthyear;
}
const age2 = calcAge2(1991)
console.log(age1, age2);

//Arrow function
const calcage3 = birthyear => 2037 - birthyear;
const age3 = calcage3(1991);
console.log(age3);
*/
/*
//calling functions
const calcAge = function (birthyear) {
    return 2037 - birthyear;
}

const yearsUntilRetirement = function (birthyear, firstname) {
    const age = calcAge(birthyear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstname} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstname} has already retired 🎉`)
        return -1;
    }

}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));
*/

/*
//coding challlenge 1
const CalcAverage = (a, b, c) => (a + b + c) / 3;

let ScoreDolphins = CalcAverage(44, 23, 71);
let ScoreKoalas = CalcAverage(65, 54, 49);
console.log(ScoreDolphins, ScoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}
checkWinner(ScoreDolphins, ScoreKoalas);

checkWinner(576, 111);

//Test 2 different dolphin and koalas score. had to change (const dolphin, koalas to let dolphin, koalas to allow new values
ScoreDolphins = CalcAverage(85, 54, 41);
ScoreKoalas = CalcAverage(23, 34, 27);
console.log(ScoreDolphins, ScoreKoalas);

checkWinner(ScoreDolphins, ScoreKoalas);
*/
/*
//Arrays
const friend1 = "Michael";
const friend2 = 'steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter']
console.log(friends);

const y = new Array(1991, 1984, 2000, 2003);
console.log(y)

//Exercise
const calcAge = function (birthyear) {
    return 2037 - birthyear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);
*/
/*
//add elements
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(newLength);

friends.unshift('John');
console.log(friends);

//Remove Elements
friends.pop(); // Last
const popped = friends.pop();
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); // returns -1 because bob is not in the array

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));
console.log(friends.includes(23));
*/
/*
//coding challenge 2 calc the tip using arrays
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);
*/
/*
//Dot vs Bracket Notation
const jonas = {
    firstName: 'Jonas',
    lastName: 'Appiah',
    age: 2037 - 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName'])

const namekey = 'Name';
console.log(jonas['first' + namekey]);
console.log(jonas['last' + namekey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends')

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);

} else {
    console.log('Wrong request! Choose between firstName, lastName, age, Job, and friends')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@shksks';
console.log(jonas);

//challenge
//'Jonas has 3 friends and his best friend is called Michael'

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.['friends'][0]}`);
*/

/*
//Object Methods
const jonas = {
    firstName: 'Jonas',
    lastName: 'Appiah',
    birthYear: 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,

    // calcAge: function (birthyear) {
    //    return 2037 - birthyear;
    //}

    //calcAge: function () {
    //console.log(this)
    //  return 2037 - this.birthYear;
    //}


    calcAge: function () {
        this.age = 2037 - this.birthYear
        return this.age;
    },
    getsummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
    }

};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);


//Challenge
//"Jonas is a 46-year old teacher, and has a driver's License"
console.log(jonas.getsummary());
*/

/*

//Coding Challenge #3 ---------
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)

} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)

}
*/
/*
//Iteration: The For Loop
//For loop keeps running while the condition is TRUE

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋🏻‍♂️`)
}
*/
/*
//Loooping Arrays, Breaking and COntinuing

const jonas = [
    'Jonas',
    'Appiah',
    2037 - 1991,
    'Teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
    //Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    //filling types array
    //types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

//Continue and Break.  --CONTINUE--
console.log('-- ONLY STRINGS --');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log('-- BREAK WITH NUMBER --');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}
*/
/*
//Looping backwards and loops in Loops
const jonas = [
    'Jonas',
    'Appiah',
    2037 - 1991,
    'Teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
// 0, 1 , ..., 4
// 4, 3 ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise} Lifting weight repitition ${rep}🏋🏻‍♂️`);
    }
}
*/
/*
// The while Loop
let rep = 1;
while (rep <= 10) {
    //  console.log(`WHILE: Lifting weights repetition ${rep} 🏋🏻‍♂️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;

    if (dice === 6) console.log('Loop is about to end...');
}
*/

//Coding Challenge #4  -----
const calcTip = function (bill) {
    return bills >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        //sum = sum + arr[i];
        sum += arr[i];
    }
    console.log(sum)
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));