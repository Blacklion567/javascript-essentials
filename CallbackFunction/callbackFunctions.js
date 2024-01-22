/**
 * This code demonstrates how to handle asynchronous operations and maintain proper scope
 * using callback functions in JavaScript.
 *
 * It shows:
 * - How asynchronous code like setTimeout can lead to unexpected scope issues
 * - Fixing scope issues by binding this or using Function.prototype.apply
 * - Chaining asynchronous operations with callbacks to ensure order of execution
 * - Passing data between asynchronous callbacks
 */
let x = 1;

function asyncIncrement() {
  setTimeout(() => {
    x += 1;
  }, 1000);
}

asyncIncrement();
console.log(x);

var obj = {
  x: 1,
  asyncIncrement: function (callback) {
    setTimeout(function () {
      this.x += 1; //in this line `this` value is bound to global window object, not the current object, thats why the result of this.x is undefined and undefined += 1 is NaN
      callback();
    }, 1000);
  },
};

obj.asyncIncrement(function () {
  console.log(this.x); //NaN
});

var obj = {
  x: 1,
  asyncIncrement: function (callback) {
    setTimeout(
      function () {
        this.x += 1;
        callback.apply(this); // notice how we called the callback function using apply to pass the correct `this` context
      }.bind(this),
      1000
    ); // notice how we bound the anonymous callback function of setTimeout using bind(this)
  },
};

obj.asyncIncrement(function () {
  console.log(this.x); //2  --> because `this` context now is bound correctly to obj
});

var y = 1;

function asyncIncrementOne(callback) {
  setTimeout(function () {
    y += 1;
    callback(y);
  }, 1000);
}

function asyncIncrementTwo(callback) {
  setTimeout(function () {
    y += 2;
    callback(y);
  }, 1000);
}

function asyncIncrementThree(callback) {
  setTimeout(function () {
    y += 3;
    callback(y);
  }, 1000);
}

function asyncIncrement() {
  asyncIncrementOne(function (oneIncrement) {
    console.log(oneIncrement);
    asyncIncrementTwo(function (twoIncrement) {
      console.log(twoIncrement);
      asyncIncrementThree(function (threeIncrement) {
        console.log(threeIncrement);
      });
    });
  });
}

asyncIncrement();

//result
// 2
// 4
// 7
