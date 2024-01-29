console.log('start');
const startTime = new Date();
setTimeout(function myCallbackFunction() {
  const endTime = new Date();
  const timeDiff = endTime.getTime() - startTime.getTime();
  console.log(`${timeDiff / 1000} seconds`);
  console.log('setTimeout callback is executed');
  ;
}, 1000);
console.log('end');

console.log('start');
const startime = new Date();
setTimeout(function myCallbackFunction() {
  const endTime = new Date();
  const timeDiff = endTime.getTime() - startime.getTime();
  console.log(`${timeDiff / 1000} seconds passed`);
  console.log('setTimeout callback is executed');
}, 1000);


let i = 0;
while (true) {
  if (i >= 10000000000) {
    break;
  }
  i++;
}
console.log('end');
