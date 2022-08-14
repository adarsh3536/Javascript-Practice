console.log("Hello World");

var firstName = "Adarsh";
console.log(firstName);

const pi = 3.14;
console.log(pi);

console.log(firstName[6]);

console.log(firstName.length);

let newString = firstName.trim();
console.log(newString.length);

console.log(firstName.toUpperCase());
console.log(firstName.toLocaleLowerCase());

let nnString = firstName.slice(1, 4);
console.log(nnString);

console.log(typeof firstName);
let num = 34;
console.log(typeof num);

allString = firstName + "  " + num;
console.log(allString);

console.log(firstName + " is my name and my age is " + num);

let aboutMe = `${firstName} is my name and ddg my age is ${num}`;
console.log(aboutMe);

let age = 16;

if (age > 18) {
  console.log("Can play the game");
} else {
  console.log("Can't play the game");
}

let nnuumm = 40;

if (nnuumm % 2 == 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

let aage = 16;
let drink = aage > 15 ? "Coffee" : "Milk";
console.log(drink);

if (firstName[0] === "A" || age === 6) {
  console.log("Valid");
} else {
  console.log("Invalid");
}

// let randonNum = 20;
// let userGuess = prompt("Guess the number");

// if (randomNum === userGuess) {
//   console.log("You guessed it right");
// } else if (randonNum > userGuess) {
//   prompt("The number is too high");
// } else if (randonNum < userGuess) {
//   prompt("The number is too low");
// } else {
//   end;
// }

let day = 22;

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}

// let i = 1;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

// let num1 = 10;
// let num2 = 0;

// while ((num1 < 10, num2 + 1)) {
//   console.log(num2);
// }

let num2 = 10;
let total = 0;
let q = 0;

while (q <= 10) {
  total = total + q;
  q++;
}

console.log(total);

for (let a = 0; a < 9; a++) {
  console.log(a);
}

for (let b = 0; b <= 10; b++) {
  if (b === 4) {
    continue;
  }
  console.log(b);
}

console.log("Tiger");

let w = 10;

do {
  console.log(w);
  w++;
} while (w <= 9);

console.log(typeof w);
console.log(w);
console.log("Lion");

let naame = "Adarsh , Gupta, Shiv";
console.log(naame[1]);

let nname = ["Adarsh", "Gupta", "Krishna"];
console.log(nname[1]);

console.log(typeof nname);
console.log(Array.isArray(nname));

let obj = {};
console.log(typeof nname);
console.log(Array.isArray(obj));

nname.push("Ram");
console.log(nname);

nname.pop();
console.log(nname);

nname.shift();
console.log(nname);

nname.unshift("Vithal");
console.log(nname);
