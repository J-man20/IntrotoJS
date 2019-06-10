//My age
const myAge = 25;

//Early years
let earlyYears = 2;

//Multiply by 10.5
earlyYears *= 10.5;

//Later Years
let laterYears = myAge - 2;

//Multiply by 4
laterYears *= 4;

/*console.log(earlyYears);
console.log(laterYears);*/

//Age in dog years
let myAgeInDogYears = earlyYears + laterYears;

//My name
let myName = 'Joshua Mazza'.toLowerCase();

//Template literal
console.log(`My name is ${myName}. I am ${myAge} years old in 
human years which is ${myAgeInDogYears} years old in dog years.`)