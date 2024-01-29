var globalName = "Ban";

function scopeFunction() {
  globalMessage = "Blacklion567"; //undeclared variable initialization without using var keyword thats why it's a global variable.

  var localName = "Proline"; //Scoped by the current function

  console.log(localName);  //Proline ->  local variable
}

scopeFunction();

console.log(globalName);       //amr  ->  global variable, defined in the global scope
console.log(globalMessage);    //hello -> global variable because it's defined without using var keyword
// console.log(localName);        //ReferenceError: localName is not defined  -> local variable because it's scoped by scopeFunction function


if (true) {
  var globalJob = "Software Engineer"; //block statement does not create new scope for variables
  let localTitle = "Mr"; //we can define local variables inside block statement using es6 let keyword
}
console.log(globalJob);  //Software Engineer -> global variable because it's defined inside a block statement
// console.log(localTitle); //ReferenceError: localTitle is not defined ->  local variable defined with let inside block statement


var x = 1;
function scopeFunc() {
  var x = 2;
  function innerScopeFunc() {
    var x = 3;
    console.log(x); //3 --> innermost scope
  }
  innerScopeFunc();
  console.log(x);    //2 -> second innermost scope
}

scopeFunc();
console.log(x); //1 global scope
