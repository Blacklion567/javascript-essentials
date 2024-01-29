
const obj = {
  name: 'Blacklion567',
  age: 20
};


function asyncIncrement() {
  return new Promise(function (resolve, reject) {
    try {
      setTimeout(function () {
        const newObject =
          resolve();
      }, 1000);
    }
    catch (error) {
      reject(error);
    }
  });
}

asyncIncrement().then(function (incrementedValue) {
  console.log(incrementedValue);
}).catch(function (error) {
  console.log(error);
});



var x = 1;


function asyncIncrementOne() {

  return new Promise(function (resolve, reject) {
    try {
      setTimeout(function () {
        x += 1;
        resolve(x);
      }, 1000);
    }
    catch (error) {
      reject(error);
    }
  });
}


function asyncIncrementTwo() {
  return new Promise(function (resolve, reject) {
    try {
      setTimeout(function () {
        x += 2;
        resolve(x);
      }, 1000);
    }
    catch (error) {
      reject(error);
    }
  });
}

function asyncIncrementThree() {
  return new Promise(function (resolve, reject) {
    try {
      setTimeout(function () {
        x += 3;
        resolve(x);
      }, 1000);
    }
    catch (error) {
      reject(error);
    }
  });
}

Promise.all([asyncIncrementOne(), asyncIncrementTwo(), asyncIncrementThree()])
  .then(function (results) {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch(function (error) {
    console.log(error);
  });

//result
//2
//4
//7
