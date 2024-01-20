let person = {
  firstName: 'Blacklion567',
  lastName: 'Bringcola',
  skills: ['HTML', 'CSS', 'JS', 'REACT'],
  job: function () {
    console.log(`${this.firstName} ${this.lastName} and my skills are ${this.skills}`);
  }
};

console.log(person.job);
person.job();

function Person(firstName, lastName, job) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.job = job;
  this.printName = function () {
    console.log(this.firstName + " " + this.lastName);
  };
}

var person1 = new Person("Blacklion567", "Bringcola", "Software Engineer");
var person2 = new Person("Proline", "CyCy", "Jamaica");

console.log(person1.job); //Software Engineer
person1.printName(); //Blacklion567 ringcola

console.log(person2.job); // Jamaica
person2.printName(); //Proline CyCy

var human = {
  isHuman: false,
  printDetails: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

var me = Object.create(human);

me.name = "Blacklion567"; // "name" is a property set on "me", but not on "human"
me.isHuman = true; // inherited properties can be overwritten

me.printDetails(); // My name is Blacklion567. Am I human? true
human.printDetails(); // My name is undefined. Am I human? false


Person.prototype.printName = function () {
  console.log(this.firstName);
};

var person1 = new Person("Blacklion567");
var person2 = new Person("Proline");

//Both instances share the same method printName
person1.printName(); //Blacklion567
person2.printName(); //Proline
