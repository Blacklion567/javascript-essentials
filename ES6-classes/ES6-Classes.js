class Person {
  static sayHi(firstName, lastName) {
    console.log('Hi' + " " + firstName + " " + lastName);
  }
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  printName() {
    console.log(this.firstName + "" + this.lastName);
  }

}

//Class Engineer inherit from Person
class Engineer extends Person {
  constructor(firstName, lastName, job) {
    //Call base class constructor
    super(firstName, lastName);

    //add subclass job property
    this.job = job;
  }

  //class method -> note that this method is a prototype method not instance method
  printNameWithJob() {
    console.log(this.firstName + " " + this.lastName + ", " + this.job);
  }
}

let person1 = new Person("Blacklion567", "Proline");
let engineer = new Engineer("Blacklion567", "Proline", "Software Engineer");

person1.printName(); //Blacklion567 Proline
engineer.printName();//Blacklion567 Proline  ---> this method is inherited from base class Person
engineer.printNameWithJob();//Blacklion567 Proline, Software Engineer  ---> this method is defined in Engineer class
Person.sayHi("Blacklion567", "Proline");// Hi Blacklion567 Proline ----> this is a static utility function defined in Person class
Engineer.sayHi("Blacklion567", "Proline");//Hi Blacklion567 Proline ---> this is a static utility function defined in Person class and inherited in Engineer class
