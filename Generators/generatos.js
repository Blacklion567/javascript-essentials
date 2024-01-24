let numberGenerator = function* (max) {
  let num = 0;
  while (num < max) {
    yield ++num;
  }
};
const numbersIterator = numberGenerator(6);
while (true) {
  const current = numbersIterator.next();
  console.log(current.value);
  if (current.done) {
    break;
  }
}

// function* delegateGenerator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// function* numberGenerator() {
//   yield* delegateGenerator();
// }

// const myIterator = numberGenerator();
// console.log(myIterator.next().value);
// console.log(myIterator.next().value);
// console.log(myIterator.next().value);

function* myGeneratorFunction() {
  const x = yield 1;
  console.log(`x = ${x}`);
  const y = yield 2;
  console.log(`y = ${y}`);
}

const myIterable = myGeneratorFunction();

console.log(myIterable.next());
console.log(myIterable.next());
console.log(myIterable.next());

// { value: 1, done: false}
// x = undefined
// { value: 2, done: false}
// y = undefined
// { value: undefined, done: true}


function* myGeneratorFunction() {
  const x = yield 1;
  console.log(`x = ${x}`);
  const y = yield 2;
  console.log(`y = ${y}`);
}

const myGenerator = myGeneratorFunction();

console.log(myGenerator.next(22));
console.log(myGenerator.next(33));
console.log(myGenerator.next(44));

// { value: 1, done: false}
// x = 33
// { value: 2, done: false}
// y = 44
// { value: undefined, done: true}


function* myGeneratorFunction() {
  yield yield yield;
}

const myIterables = myGeneratorFunction();

console.log(myIterables.next(22));
console.log(myIterables.next(33));
console.log(myIterables.next(44));

// { value: undefined, done: false}
// { value: 33, done: false}
// { value: 44, done: false}
// { value: undefined, done: true}
