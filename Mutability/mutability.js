
var x = 1;

/*
Memory
-----
| 1 | x
-----
*/

x = 2;

/*
Memory
-----
| 1 |
-----
| 2 | x
-----
*/

var obj = {
  x: 1
};

/*
Stack          Heap (memory location 0101)
------         -------------
|0101| obj --> | { x : 1 } |
------         -------------
*/

obj.y = 2;

/*
Stack          Heap (memory location 0101)
------         -----------------
|0101| obj --> | { x:1 , y:2 } |
------         -----------------
*/

var x = 1;
var y = x;

x = 2;

console.log(x == y); //false --> because changing x to be equal to 2 created new memory location for it and kept the old value 1 as is saved in y.


var obj1 = {
  x: 1
};

var obj2 = JSON.parse(JSON.stringify(obj1)); //Deep copy

obj1.x = 2;

console.log(obj1); //{x: 2}
console.log(obj2); //{x: 1}
console.log(obj1 == obj2); //false

var arr1 = [1, 2, 3];

var arr2 = arr1.concat(); //use concat without any argument to clone arr1

arr1.push(4);

console.log(arr1); // [1,2,3,4]
console.log(arr2); // [1,2,3]
console.log(arr1 == arr2); //false
