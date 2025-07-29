// Hoisting Example

// hoisting of var  
console.log('my age is :', age) // undefined
var age = 20;
console.log("my age is :", age); // 20

// hoisting of let & const ==> Temporal dead zone

marks = 30
console.log('my marks is :', marks) // Error: Can not acces before initialization
let marks = 20;
console.log("my marks is :", marks); // 20

