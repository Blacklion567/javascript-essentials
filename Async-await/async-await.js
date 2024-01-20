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
    getAsyncData().then(function (data) {
      resolve(data);
    });
  });
}

getAsyncData().then(function (data) {
  console.log(data);
});
