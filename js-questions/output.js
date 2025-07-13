async function test() {
  console.log(1);
  await Promise.resolve();
  console.log(2);
}
console.log(3);
test();
console.log(4);

// Output
// 3
// 1
// 4
// 2


Promise.resolve(1)
  .then(val => {
    console.log(val);
    return val * 2;
  })
  .then(val => {
    console.log(val);
    throw new Error('oops');
  })
  .catch(err => {
    console.log(err.message);
    return 10;
  })
  .then(val => console.log(val));
  
// Output
//   1
//   2
//   opps
//   10
  



 
const obj = {
  num: 100,
  regular: function() { return this.num; },
  arrow: () => this.num,
};
console.log(obj.regular()); // 100
console.log(obj.arrow()); // undefined
 
// Summary:
// regular method uses this correctly because it's a regular function.
// arrow method fails because arrow functions don’t bind their own this.
// Arrow functions do not have their own this.
// Instead, they inherit this from their lexical scope 
// (i.e., the scope where the function was defined).






const obj1 = Object.create({ a: 1 });
console.log(obj1);
obj1.b = 2;
console.log(obj1);
for (let key in obj1) {
  console.log(key);
}

// Output
// b
// a

// Using `Object.create({ a: 1 })` creates an object (`obj1`) with `a` as an inherited property via the prototype. 
// The `for...in` loop lists both own (`b`) and inherited (`a`) enumerable properties, 
// while `console.log(obj1)` shows only own properties.

