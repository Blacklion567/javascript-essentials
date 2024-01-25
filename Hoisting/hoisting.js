console.log(x); //undefined --> because declaration of x is hoisted and initialized to undefined.
var x = "hoisted"; //only declaration is hoisted


console.log(x);    //ReferenceError: x is not defined

x = "not hoisted"; //variable x is not hoisted as we didn't declare it, here we just initialized undeclared variable.


console.log(x); //ReferenceError: x is not defined

function hoistingTest() {
  console.log(x); // undefined because x is hoisted inside the function

  var x = 10;     // hoisted in its own local (function) scope
}
hoistingTest();

console.log(x);

function hoistingTest() {
  var x;

  console.log(x);

  x = 10;
}
hoistingTest();

console.log(x); //undefined
console.log(y); //ReferenceError: y is not defined --> because y is undeclared variable and hoisting is applied to declaration not initialization
var x = y = 10;

console.log(x); //undefined
console.log(y); //undefined --> because y is now a declared variable
var x, y = 10;



// console.log(a); //ReferenceError: a is not defined
// console.log(b); //ReferenceError: b is not defined

// let a = 1;
// const b = 0;q


declarationFunc(); // "function declaration is hoisted" --> because function is hoisted

function declarationFunc() {
  console.log("function declaration is hoisted");
}
