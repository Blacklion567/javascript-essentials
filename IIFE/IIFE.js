function printName() {
  console.log("Blacklion567 Proline");
}

var printName = function () {
  console.log("Blacklion567 Proline");
};

(function () {
  console.log("this function is immediately invoked");
}()); // this function is immediately invoked

!function () {
  console.log("this function is immediately invoked");
}(); // this function is immediately invoked


true && function () {
  console.log("this function is immediately invoked");
}(); // this function is immediately invoked

// Wrong way
var x = 1;
var y = 2;
(function (x, y) {
  console.log(x + y);
}());
//NaN --> because x and y are both undefined


// The right way
var x = 1;
var y = 2;
(function (x, y) { //x and y here are just the function definition parameters
  console.log(x + y);
}(x, y)); //Here we pass actual values of x and y
// 3 --> because we passed x and y at the bottom of the function while invoking it.

// Better less confusing way
var x = 1;
var y = 2;
(function (num1, num2) { //changed funtion definition parameters names to make it clear that they are different from the actual passed values while invoking it at the bottom
  console.log(num1 + num2);
}(x, y)); //Here we pass actual values of x and y
// 3 --> because we passed x and y at the bottom of the function while invoking it.


var Module = (function () {
  //private variable and method can't be accessed using Module.increment
  var num = 1;
  var logNum = function () {
    console.log(num);
  };

  return {
    //public methods, we say they are public because we can access them using Module.increment or Module.decrement
    increment: function () {
      num++;
      logNum();
    },
    decrement: function () {
      num--;
      logNum();
    }
  };

})();

Module.increment(); //2
Module.increment(); //3
Module.decrement(); //2
// Module.logNum(); //TypeError Module.logNum is not a function --> because logNum is private method inside the module


var printValuesArr = [];
for (var i = 0; i < 10; i++) {
  printValuesArr.push((function (capturedI) {
    return function () {
      console.log(capturedI);
    };
  })(i)); //this is how we captured the i value by passing it to the IIFE in each iteration
}

printValuesArr[0](); //0
printValuesArr[5](); //5
printValuesArr[9](); //9
