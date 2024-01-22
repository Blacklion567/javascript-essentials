/**
 * Demonstrates 'this' binding in JavaScript and how it can be explicitly set
 * using call(), apply(), and bind().
 *
 * Shows global, object, and nested function scopes.
 * Prints 'this' to console to illustrate binding.
 * Binds 'this' to objects and passes arguments to demonstrate usage.
 */
function globalFunction() {
  console.log(this); //this = window --> because called by global window object
}

globalFunction(); //this line is equivalent to window.globalFunction
let myObject = {
  myFunc: function () {
    console.log(this);
  },
};

myObject.myFunc(); //this = MyObject --> because the function is called on myObject

let temp = myObject.myFunc;
temp(); //this = window --> because the function is called and executed from global window object

let obj = {
  first: 'Blacklion567',
  second: 'Proline',
};

function printName() {
  console.log(this.first + ' ' + this.second, arguments[0], arguments[1]);
}

printName(); // undefined undefined undefined undefined  --> because `this` is bound to global window object, also we don't have any argument passed to the function

let boundPrintName = printName.bind(obj); // will return a new function with `this` bound to obj

let boundPrintNameWithArgument = printName.bind(obj, 'argument 1'); //will return new function with `this` bound to obj and first argument set to "argument 1"

boundPrintNameWithArgument('argument 2'); //Blacklion567 Proline argument 1 argument 2

printName.call(obj); // Blacklion567 Proline undefined undefined
printName.call(obj, 'argument 1', 'argument 2'); //Blacklion567 Proline argument 1 argument 2

printName.apply(obj); // Blacklion567 Proline undefined undefined
printName.apply(obj, ['argument 1', 'argument 2']); //Blacklion567 Proline argument 1 argument 2

let Name = function () {
  this.first = 'Blacklion567';
  this.last = 'Proline';
};

let obj1 = new Name(); //this == Name Object

console.log(obj1.first);

var numbers = [
  {
    number: {
      value: 1,
    },
  },
  {
    number: {
      value: 2,
    },
  },
  {
    number: {
      value: 3,
    },
  },
];

for (var i = 0; i < numbers.length; i++) {
  (function () {
    console.log(this);
  }).call(numbers[i].number);
}

// {value: 1}
// {value: 2}
// {value: 3}
