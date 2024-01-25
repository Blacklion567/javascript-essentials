const myArray = [1, 2, 3];
for (const num of myArray) {
  console.log(num);
}

// 1
// 2
// 3


let numbersIterable = {};
// After implementing `Symbol.iterator` numbersIterable became iterable object
numbersIterable[Symbol.iterator] = function () {
  let number = 0;
  // This returned object is called iterator object
  return {
    next: function () {
      if (number < 10) {
        return { done: false, value: ++number };
      } else {
        return { done: true };
      }
    }
  };
};

// for..of is introduced in ES6 and it is a consumer to iterables, you can't use for..of on non iterable objects
// Since we change `numberIterable` to be iterable now we can use for..of
for (let num of numbersIterable) {
  console.log(num);
}


let numbersIterator = function (max) {
  let number = 0;
  return {
    next: function () {
      if (number < max) {
        return { done: false, value: ++number };
      } else {
        return { done: true };
      }
    }
  };
};
const myNumbersIterator = numbersIterator(6);
while (true) {
  const current = myNumbersIterator.next();
  console.log(current.value);
  if (current.done) {
    break;
  }
}

// 1 2 3 4 5 6 undefined
