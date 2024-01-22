/**
 * testClosure creates a closure that increments a counter each time it is called.
 * testClosure2 creates a closure that logs a counter value.
 * printValuesArr creates an array of closures that log the value of i from the loop.
 * Due to the closures, i remains 10 for each function call.
 */
const testClosure = function () {
  let counter = 1;
  return function () {
    return (counter += 1);
  };
};

let add = testClosure();

add();
add();
console.log(add());

const testClosure2 = function () {
  let counter = 1;
  const addingClosure = function () {
    console.log(counter);
  };
  counter++;

  return addingClosure;
};

const closureAddding = testClosure2();

closureAddding();

const printValuesArr = [];
for (let i = 0; i < 10; i++) {
  printValuesArr.push(function () {
    console.log(i);
  });
}

printValuesArr[0](); //10
printValuesArr[5](); //10
printValuesArr[9](); //10
