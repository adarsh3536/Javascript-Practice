console.log("Robust");

const details = {
  Fname: "Adarsh",
  age: "19",
  gender: "Male",
};

function printDetails({ Fname, gender, age }) {
  //   console.log(Fname);
  //   console.log(gender);
  //   console.log(age);
}

const info = printDetails(details);
// console.log("info");

console.log(
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
);

const numbers = [4, 5, 6, 7];

numbers.forEach(function (number, index) {
  console.log(`the value is ${number} and ${index}`);
});

const users = [
  { firstName: "Adarsh", age: 19 },
  { firstName: "Ram", age: 16 },
  { firstName: "Krishna", age: 22 },
];

// users.forEach(function (name) {
//   console.log(name.firstName);
// });

for (let user of users) {
  console.log(user.firstName);
}

const nams = [3, 5, 6, 3, 2];

nams.map((square, ind) => {
  console.log(square * square, ind);
});

const numb = [2, 32, 4, 54, 5, 44, 5];

const isEven = (num) => {
  return num % 2 === 0;
};

const even = numb.filter(isEven);
console.log(even);

/////////////////////////////////////////////////////////////////////////////////

const userCart = [
  { product: 1, name: "Phone", price: 1200 },
  { product: 2, name: "Laptop", price: 2200 },
  { product: 3, name: "TV", price: 1500 },
];

// const total = ([userCart.price(acc, sec)]) => {
//   return acc + sec;
// };

// const final = userCart.reduce(total);
// console.log(final);

const totalPrice = userCart.reduce((acc, curr) => {
  return acc + curr.price;
}, 0);

console.log(totalPrice);

const nn = [23, 34, 354, 545, 8];

const total = (acc, curr) => {
  return acc + curr;
};

const final = nn.reduce(total);
console.log(final);

console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

const products = [
  { productID: 1, productName: "p1", productPrice: 200 },
  { productID: 2, productName: "p2", productPrice: 3000 },
  { productID: 3, productName: "p3", productPrice: 400 },
  { productID: 4, productName: "p4", productPrice: 8000 },
  { productID: 5, productName: "p5", productPrice: 50 },
];

// const products = [233,34,43,435,5,66,7,3]

const asd = (a, b) => {
  return a.productPrice - b.productPrice;
};

const qaz = products.slice(0).sort(asd);
console.log(qaz);

// const tota = products.sort((a, b) => {
//   return a.productPrice - b.productPrice;
// });

// console.log(tota);

console.log(products);

console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

// const qqq = (some) => {
//   return information.length === 3;
// };

// const www = information.find(qqq);
// console.log(www);

const information = ["rabbit", "dog", "cat", "Lion"];

function isLength(string) {
  return string.length === 3;
}

const ans = information.find(isLength);
console.log(ans);

const numbe = [2, 39, 4, 6];

const finall = numbe.every((number) => {
  return number % 2 === 0;
});

console.log(finall);

const pro = [
  { productID: 1, productName: "p1", productPrice: 200 },
  { productID: 2, productName: "p2", productPrice: 3000 },
  { productID: 3, productName: "p3", productPrice: 400 },
  { productID: 4, productName: "p4", productPrice: 8000 },
  { productID: 5, productName: "p5", productPrice: 50 },
];

const answer = pro.some((input) => input.productPrice > 5000);

console.log(answer);

// const aww = nnuum.slice(0).fill(69, 1, 6);
// console.log(nnuum);
// console.log(aww);

// nnuum.splice(2, 2, 23);
// console.log(nnuum);

const nnuum = [2, 434, 35, 4, 54, 54, 5, 2, 5];

const sett = new Set(nnuum);
console.log(sett);

for (let num of sett) {
  length++;
}
console.log(length);

const person = new Map();
person.set("Name", "Adarsh");
person.set("Nae", "Mohan");
console.log(person);

const persone = { age: 19, gender: "male" };

const allInfo = new Map([
  ["Fname", "Adarsh"],
  ["Lname", "Gupta"],
  [5, "five"],
  [["i", "am"], "array"],
  [{ city: "Mum" }, "ObJeCt"],
]);
allInfo.set(persone);

console.log(typeof allInfo);

for (let af of allInfo) {
  console.log(typeof allInfo);
}

// console.log(allInfo.get(persone).Fname);

const uss = {
  firstName: "Adarsh",
  address: { houseNumber: 1234 },
};

console.log(uss?.LastName);

console.log("_______________________________________________________________");

function infor(hobby) {
  console.log(`The name is ${this.firstName} and age is ${this.age}`, hobby);
  // console.log(this);
}

const person1 = {
  firstName: "Adarsh",
  age: 19,
};
const person2 = {
  firstName: "Rohan",
  age: 29,
};

// infor.apply(person2, ["And is true"]);
const last = infor.bind(person1, "My hobby is to study");
last();
