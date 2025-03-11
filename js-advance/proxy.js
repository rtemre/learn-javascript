// Define a user object with properties name and age
const user = { name: "John", age: 25 };

// Define a handler object with a get trap
const handler = {
  // The get trap intercepts property access
  get(target, prop) {
    // Return the property value if it exists, otherwise return a custom message
    return prop in target ? target[prop] : `Property ${prop} not found`;
  },
};

// Create a proxy for the user object using the handler
const proxyUser = new Proxy(user, handler);

// Access existing property 'name' through the proxy
console.log(proxyUser.name); // Output: John

// Access non-existing property 'gender' through the proxy
console.log(proxyUser.gender); // Output: Property gender not found
