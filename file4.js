console.log("From 9 hrs");

// const user = {
//   firstName: "Harshit",
//   age: 19,
//   about: function () {
//     return `The name is ${this.firstName} and age is ${this.age}`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };

// console.log(user.is18());

const usersMethod = {
  about: function () {
    return `The name is ${this.firstName} and age is ${this.age}`;
  },
  is18: function () {
    return this.age >= 18;
  },
};

function Cuser(firstName, age) {
  const user = {};
  (user.firstName = firstName),
    (user.age = age),
    (user.about = usersMethod.about);
  user.is18 = usersMethod.is18;
  return user;
}

const user1 = Cuser("Adarsh", 19);
console.log(user1);

console.log("-----------------------------------------------------------");

const blue1 = {
  fname: "Adarsh",
  lname: "Gupta",
};

const blue2 = Object.create(blue1);

blue2.ffname = "Ada";

console.log(blue2.fname);

//////////////////////////////////////////////////////////////

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`The ${this.name} is eating `);
  }
  isCute() {
    return (this.age = 1);
  }
}

// const ani1 = new Animal("Tom", 8);
// console.log(ani1.eat());
// ani1.isCute();

class dog extends Animal {
  constructor(namee, age, speed) {
    super(name, age);
    this.namee = namee;
    this.speed = speed;
  }
  get run() {
    console.log(`The ${this.name} runs at ${this.speed} kmph`);
  }
}

const doggy = new dog("Spiky");
console.log(doggy.run);

function createUser(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}

const person1 = new createUser("Adarsh", "Gupta");
console.log(person1);
