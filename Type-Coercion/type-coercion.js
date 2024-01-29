// Explicit conversion to string
String(123);                   // '123'
String(-12.3);                 // '-12.3'
String(null);                  // 'null'
String(undefined);             // 'undefined'
String(true);                  // 'true'
String(false);                 // 'false'

// Implicit conversion to string
123 + '';                      // '123'
// Explicit conversion to string
Boolean(2);        // true

// Implicit conversion to string
if (2) { }       // if condition will return true
!2;                // false
2 || 'hello';      // this will return 2


Number('123')   // explicit
  + '123';          // implicit
123 != '456';    // implicit
4 > '5';         // implicit
5 / null;          // implicit
true | 0;        // implicit


Number(null);                   // 0
Number(undefined);              // NaN
Number(true);                   // 1
Number(false);                  // 0
null == false;                  // false -> because the false is coerced to 0 so the comaprison is null == 0
undefined == false;             // false -> because the false is coerced to 0 so the comparison is undefined == 0
"1" == true;                    // true  -> because the true is coerced to 1 and then the "1" is coerced to 1 so the comparison is 1 == 1
"0" == false;                   // true  -> because the false is coerced to 0 and then the "0" is coerced to 0 so the comparison is 0 == 0
3 + "1";                        // "31" -> 3 will be coerced to "3"
3 + +"1";                       // 4 -> the right unary + will convert "1" to 1 and it will be 3 + 1 = 4
3 + true;                       // 4 -> true is coerced to 1 so it will be 3 + 1
3 + false;                      // 3 -> false is coerced to 0
true + false;                   // 1 -> true is coerced to 1 and false is coerced to 0
