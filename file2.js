console.log("Hare Krishna");

let array1 = ["i1", "i2", "i3"];
let array2 = ["i1", "i2", "i3"];

console.log(array1, array2);

array1.push("i4");
console.log(array1);
console.log(array2);

let array3 = array1.slice(0);

console.log(array3);
console.log(array1);
console.log(array2);

console.log(array1.unshift("15"));

console.log("HK");
console.log(array3);
console.log(array1);
console.log(array2);

// let array4 = [].concat(array1);
// console.log(array4);

let array5 = array1;

console.log(array1 === array5);

let array6 = [...array1, "16"];
console.log(array6);
console.log("Hii    ");

let array4 = [].concat(array1, "i8", ["i9", "i10"]);
console.log(array4);

let fruits = ["Apple", "Mango", "Grapes", "Litchi"];

let fruits2 = [];
for (let l = 0; l < fruits.length; l++) {
  fruits2.push(fruits[l].toUpperCase());
}

console.log(fruits2);

for (let fruit of fruits) {
  console.log(fruit);
}

for (let index in fruits) {
  console.log(fruits[index]);
}

let [f1, f2, ...fruits3] = fruits;
console.log(f1);
console.log(fruits3);

const person = { name: "Adarsh", age: 19, hobbies: ["Studying", "Writing"] };
console.log(person.hobbies[1]);

person.gender = "male";
console.log(person);

let email = "adarshgupta2003@gmail.com";

person[email] = email;
console.log(person);
console.log(person);

console.log(Object.keys(person));
console.log("Break");

for (let per in person) {
  console.log(`${per} :- ${person[per]}`);
}

for (let robo of Object.keys(person)) {
  console.log(person[robo]);
}

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

const objict = {
  [key1]: value1,
  [key2]: value2,
};

console.log(objict);

const newObj = { ..."asdfgh" };
console.log(newObj);

const band = {
  bandName: "One Direction",
  famousSong: "Night changes",
  Year: 2008,
};

console.log("-----------------------------------------------------------");

let { bandName, famousSong, ...restProps } = band;
console.log(bandName);
// console.log(info);
console.log(restProps);

const list = [
  { firstName: "Adarsh", age: 19, gender: "male" },
  { firstName: "Rani", age: 15, gender: "female" },
  { firstName: "Raj", age: 14, gender: "male" },
];

const iinfo = ([{ firstName: f1, age: a1 }, , { gender: g3 }] = list);
console.log(f1);
console.log(a1);

console.log(g3);

function sumOf(num1, num2) {
  return num1 + num2;
}

const qwe = sumOf(12, 4);
console.log(qwe);

///////////////////////////////////////////////////////Function Decleration

function isEven(numm) {
  if (numm % 2 === 0) {
    console.log("The num is even num");
  } else {
    console.log("The num is odd num");
  }
}

let eo = isEven(2);

function nnn(name) {
  console.log(name[0]);
}

const aaa = nnn("Rahul");

const find = (array, target) => {
  for (i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};

let array = [2, 5, 7, 9];
const target = find(array, 45);
console.log(target);

///////////////////////////////////////////////////////Arrow Function

const hk = () => {
  console.log("Hare Krishna");
};
hk();

const Addition = (numb) => {
  console.log(numb);
};

const web = Addition(5);

let qaz = "Robo";

console.log(qaz);

{
  const wsx = "Bot";
  console.log(wsx);
}

{
  const wsx = "Top";
  console.log(wsx);
}

//////////////////////////////////////////////////Function Expression
const sing = function () {
  console.log("Happy bd 2 u");
};

sing();

const myVar = "value1";

function myApp() {
  const myFunc = function () {
    // const myVar = "Value34";
    console.log("Inside myFunc", myVar);
  };

  myFunc();
}
myApp();

{
  var nnaammee = "Adarsh";
}

{
  var nnaammee = "Gupta";
}

console.log(nnaammee);

const add2 = (num1, num2) => {
  if (typeof num2 === "undefined") {
    num2 = 6;
  }
  return num1 + num2;
};

const vvar = add2(4);
console.log(vvar);

// const andAll = (...num) {
//   let total = 0;
//   for( let number of num){
//     num = total + number;
//     return total;
//   }
// }

// const ans = andAll(3,434,34,);
// console.log(ans);

console.log("////////////////////////////////////////////////////////////////");

const andAll = (...num) => {
  let total = 0;
  for (let number of num) {
    total = total + number;
  }
  return total;
};

const ans = andAll(3, 34, 89, 98);
console.log(ans);
