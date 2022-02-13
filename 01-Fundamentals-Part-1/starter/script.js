/*
let js = 'amazing';
console.log(30 + 43 - 23);
console.log('Jonas');
let firstname = 'Jonas';
console.log(firstname);


true;
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof 23);
console.log(typeof 'Jonas');


const ageMark = 2040 - 1978;
const ageMary = 2030 - 1990;

console.log(ageMark, ageMary);
//comparisons
console.log(ageMark > ageMary);
console.log(ageMary >= 18)

const isFullAge = (geMary >= 18);


const markMass = 95
const markHeight = 1.88
const johnMass = 85
const johnHeight = 1.76

console.log(markMass, markHeight, johnMass, johnHeight)

const markBMI = markMass / markHeight ** 2
console.log(markBMI)

const johnBMI = johnMass / johnHeight ** 2
console.log(johnBMI)

markHigherBMI = markBMI > johnBMI

console.log(markHigherBMI)


//Strings and Tempalte Literals
const firstname = "Jonas";
const job = "Teacher";
const birthyear = 1991;
const year = 2037;

const jonas = "I'm " + firstname + ", a " + (year - birthyear) + " years old " + job + "!";

console.log(jonas);

const jonasNew = `I'm ${firstname}, a ${year - birthyear} years old ${job} !`;
console.log(jonasNew);


//Decisions
const age = 15;

if (age >= 18) {
    console.log('Sarah can start driiving license 🚗');
}
else {
    const yearsleft = 18 - age;
    console.log(`Sarah is too young. wait another ${yearsleft} years `);
}

const markMass = 95
const markHeight = 1.88
const johnMass = 85
const johnHeight = 1.76

console.log(markMass, markHeight, johnMass, johnHeight)

const markBMI = markMass / markHeight ** 2
console.log(markBMI)

const johnBMI = johnMass / johnHeight ** 2
console.log(johnBMI)

markHigherBMI = markBMI > johnBMI

console.log(markHigherBMI)

if (markHigherBMI) {
    console.log("Mark's BMI is higher than John's");
}
else {
    console.log("John's BMI is higher than Mark's!");
}

if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
}
else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI}) BMI!`);
}

const age = 18;
if (age === 18) console.log('You just became an adult')


const favourite = Number(prompt("What is your favourite number?"));
console.log(favourite);
console.log(typeof favourite)
if (favourite === 23) {
    console.log("Cool! 23 is a cool number!");
}
else if (favourite === 7) {
    console.log("Cool! 7 is also a cool number");
}
else {
    console.log("Number is not 23 or 7");
}
// Coding Challenge three
const averageDolphinsScore = (97 + 112 + 80) / 3;
const averageKoalasScore = (109 + 95 + 50) / 3;

console.log(averageDolphinsScore, averageKoalasScore);

if (averageDolphinsScore > averageKoalasScore) {
    console.log("The Dolphins won")
}
else if (averageDolphinsScore === averageKoalasScore) {
    console.log("The match is draw")
}
else {
    console.log("The Koalas won")
}
const minimumScore = 100;
if (averageDolphinsScore > averageKoalasScore && averageDolphinsScore >= minimumScore) {
    console.log("The Dolphins won")
}
else if (averageKoalasScore > averageDolphinsScore && averageKoalasScore >= minimumScore) {
    console.log("The Koalas won")
}
else if (averageDolphinsScore === averageKoalasScore && averageDolphinsScore >= minimumScore && averageKoalasScore >= minimumScore) {
    console.log("Both teams win the trophy")
}
else { console.log("No team wins the trophy") }


//conditional (Ternerary) operator
const age = 15

const drink = age >= 18 ? 'wine' : "water";
console.log(drink);
*/

//coding challenge 4
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? 0.15 * bill : 0.2 * bill;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
