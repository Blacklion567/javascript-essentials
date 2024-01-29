var x = 1; //x is initialized by 1
var y = x; //y is initialized by 1


/*
Stack
-----
| 1 | x
-----
-----
| 1 | y
-----
*/


x += 1;  // x is incremented, and since numbers are immutable type, the variables x will be assigned to a new object and will keep the old value as is because it's immutable.


/*
Stack
-----
| 2 | x
-----
-----
| 1 | y
-----
*/

console.log(x); // 2
console.log(y); // 1 because y is still holding the old value.

var x = [1, 2, 3];
var y = x;

/*
Stack          Heap (memory location 0101)
------         -------------
|0101| x  ---> |           |
------         | [1,2,3]   |
------         |           |
|0101| y  ---> |           |
------         -------------
*/



x.push(4);


/*
Stack          Heap (memory location 0101)
------         -------------
|0101| x  ---> |           |
------         | [1,2,3,4] |
------         |           |
|0101| y  ---> |           |
------         -------------
*/

console.log(x); //[1,2,3,4]
console.log(y); //[1,2,3,4]

var x = 1;
var y = x;
var z = 1;

/*
Stack
-----
| 1 | x
-----
-----
| 1 | y
-----
-----
| 1 | z
-----
*/

console.log(x == y); //true ---> comparing 1 == 1
console.log(x == z); //true ---> comparing 1 == 1


var x = [1, 2, 3, 4];
var y = x;
var z = [1, 2, 3, 4];

/*
Stack          Heap (memory location 0101)
------         -------------
|0101| x  ---> |           |
------         | [1,2,3,4] |
------         |           |
|0101| y  ---> |           |
------         -------------

Heap (memory location 0110)
------         -------------
|0110| z  ---> | [1,2,3,4] |
------         -------------
*/

console.log(x == y); //true ---> comparing 2 identical memory locations 0101 == 0101 is true
console.log(x == z); //false ---> although both arrays are exactly the same but the result is false because we are comparing 2 different memory locations 0101 == 0110 is false


var x = 1;
var obj = { name: "Blacklion567" };

function changeValues(primitive, nonPrimitive) {
  primitive++;
  nonPrimitive.last = "Proline";

  console.log(primitive);     // 2
  console.log(nonPrimitive);  // {name: "Blacklion567", last: "Proline"}
}


changeValues(x, obj);

console.log(x);     //1 --> didn't change because it's immutable, value changed inside function created new memory location for it.
console.log(obj);   //{name: "Blacklion567", last: "Proline"} --> changed because it's mutable non primitive and obj passed to function by reference and the changed value is changed in referenced location
