var num = 10; // allocates memory for number
var name = "Blacklion567"; // allocates memory for string

var obj = {
  name: "Blacklion567",
  job: "Software Engineer",
}; // allocates memory for object and contained values

var arr = ['a', 12]; // allocates memory for array and contained values

var obj = {
  innerObj: {
    name: 'Blacklion567',
  },
};
// { innerObj: { name: "Blacklion567" }} has 1 reference => obj
// { name: "Blacklion567" } has 1 reference => innerObj

// So far objects are still allocated in memory, none can be garbage-collected

var objNewRef = obj;
// { innerObj: { name: "Blacklion567" }} has 2 references => obj + objNewRef
// { name: "Blacklion567" } has 1 reference => innerObj

obj = 1;
// { innerObj: { name: "Blacklion567" }} has 1 reference => objNewRef
// { name: "Blacklion567" } has 1 reference => innerObj

var innerObjNewRef = objNewRef.innerObj;
// { innerObj: { name: "Blacklion567" }} has 1 reference => objNewRef
// { name: "Blacklion567" } has 2 reference => innerObj + innerObjNewRef

objNewRef = 1;

// { innerObj: { name: "Blacklion567" }} has 0 reference => can be garbage collected
// { name: "Blacklion567" } has 1 reference => innerObjNewRef

innerObjNewRef = 1;
// { name: "Blacklion567" } has 0 reference => can be garbage collected

function f() {
  var obj = {};
  var obj2 = {};
  obj.a = obj2; // obj references obj2
  obj2.a = obj; // obj2 references obj
}
f();


function temp() {
  tempVar = 1; // this is equivalent to window.tempVar = 1;
}
temp(); // function execution is done but tempVar is still saved in global object and will never be released! Leak!


function tempora() {
  this.tempVar = 1;
}

tempora(); // now `this` value inside tempora function is equal to global window object, which will result in
// creating tempVar inside global window object. Leak!
