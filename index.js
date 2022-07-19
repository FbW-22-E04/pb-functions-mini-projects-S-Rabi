// The Fortune Teller
function tellFortune(job, kids) {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let stringName = "";
  for (let i = 0; i < job; i++) {
    stringName += chars[Math.floor(Math.random() * chars.length)];
  }
  return stringName;
}
console.log("your", tellFortune(8), "is");

// ---------------------------------------------------

// 2: The Puppy Age Calculator
function calculateDogAge(humanAge) {
  let dogAge = humanAge * 7;
  return dogAge;
}
console.log(calculateDogAge(3));

function calcHumanAgeInDogYears(DogYears) {
  const HumanYears = DogYears / 7;
  return HumanYears;
}
console.log(calcHumanAgeInDogYears(21));
// ---------------------------------------------------

// 3: The Lifetime Supply Calculator
const maxAge = 99;
function calculateSupply(age, amountPerDay) {
  let total = (maxAge - age) * amountPerDay;
  console.log(" You need ", total, " snack for the rest of your life");
}
calculateSupply(24, 3);
calculateSupply(65, 4);
calculateSupply(11, 2);
// ---------------------------------------------------

// ---------------------------------------------------

// 5: The Temperature Converter
function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius / 5) * 9 + 32;
  return fahrenheit;
}
console.log(celsiusToFahrenheit(24).toFixed(2));
// b: Changing fahrenheit to celsius
function fahrenheitToCelsius(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}
console.log(fahrenheitToCelsius(75).toFixed(2));

console.log("---------------------------------------------------");
// 4: The Geometrizer
// const calcCircumfrence = (radius) =>
//   `The circumference is ${Math.PI * 2 * radius}`;
// const calcArea2 = (radius) => `The area is ${Math.Pi * radius ** 2}`;

// console.clear();
// console.log(calcCircumfrence(10));
// console.log(calcArea2(10));
const calcCircumference = (radius) =>
  `The circumference is ${Math.PI * 2 * radius}`;

const calcArea = (radius) => `The area is ${Math.PI * radius ** 2}`;

console.log(calcCircumference(10));
console.log(calcArea(10));
