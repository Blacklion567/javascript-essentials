/**
 * Compares values x and y using == and === to demonstrate the difference between abstract equality and strict equality in JavaScript.
 *
 * == performs abstract equality comparison and will coerce types if needed.
 * === performs strict equality comparison and does not coerce types.
 */
let a = 1;
let b = '1';

console.log(a == b); // true
console.log(a === b); // false


let c = 1;
let d = 1;
let e = 2;

console.log(c == d); //true
console.log(c == e); //false
