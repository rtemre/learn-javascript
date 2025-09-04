// const obj = { a: { b: { c: 1 } }, d: 2 };
// Expected output: { "a.b.c": 1, d: 2 }

// function flatObj(obj) {
//   let newObj = {};
//   for (let a in obj) {
//     if (typeof obj[a] === "object") {
//       let key = "";
//       let namekey = key.concat(a);
//       key = namekey;
//       console.log("aaa", a, "keyyy", key);
//       newObj[namekey] = newObj[obj[a]];

//       console.log(newObj[a]);
//     } else {
//       newObj[a] = obj[a];
//       console.log(newObj[a]);
//     }
//   }
//   return newObj;
// }

// console.log(flatObj(obj));

function flattenObject(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        flattenObject(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
}

// Example
const obj = { a: { b: { c: 1 } }, d: 2 };
console.log(flattenObject(obj));
// 👉 { "a.b.c": 1, d: 2 }
