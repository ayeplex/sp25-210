// Correct object creation using curly braces {}
const myObj = {};

// Defining the person object with properties and methods
const person = {
  name: "Ayaan who wants 2 yawn",
  age: 1527,
  vision: "no",
  canDevourSouls: true,

  // Method inside the object
  introduce: function () {
    console.log(`Hi, I'm ${this.name}, I'm ${this.age} years old.`);
  },

  // Another method to check soul-devouring ability
  devourSouls: function () {
    if (this.canDevourSouls) {
      console.log("Beware! I can devour souls. 👻");
    } else {
      console.log("I'm harmless... or am I? 🤔");
    }
  },

  // sayHello method (fixed syntax)
  sayHello: function () {
    console.log("Salutations, my dearest enemy;");
  }
};

// Logging the entire object
console.log(person);

// Accessing properties
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("Vision:", person.vision);
console.log("Can Devour Souls:", person.canDevourSouls);

// Calling methods
person.introduce();
person.devourSouls();
person.sayHello();
