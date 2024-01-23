function multiply(a, b) {
  return a * b;
}

multiply(10, 2);

function square(n) {
  return multiply(n, n);
}

function printSquare(n) {
  let squared = square(n);
  console.log(squared);
}

printSquare(4);

function foo(i) {
  var a = 'hello';
  var b = function privateB() {
  };
  function c() {

  }
}

foo(22);
