function getAsyncData() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve({
        name: 'Blacklion567',
        age: 21,
        gender: 'Male'
      });
    }, 2000);
  });
}


function getData() {
  return new Promise(function (resolve) {
// function getAsyncData() {
//   // return a new Promise object
//   return new Promise(function (resolve) {
//     // set a timeout of 2 seconds
//     setTimeout(function () {
//       // resolve the Promise object with an object containing the name, age and gender
//       resolve({
//         name: 'Blacklion567',
//         age: 21,
//         gender: 'Male'
//       });
//     }, 2000);
//   });
// }

// function getData() {
//   // return a new Promise object
//   return new Promise(function (resolve) {
//     // call the getAsyncData() function and then call the resolve function with the data returned from getAsyncData()
//     getAsyncData().then(function (data) {
//       resolve(data);
//     });
//   });
// }

// // call the getAsyncData() function and then call the console.log function with the data returned from getAsyncData()
getAsyncData().then(function (data) {
      resolve(data);
  console.log(data);
});
  });
}

getAsyncData().then(function (data) {
  console.log(data);
});
