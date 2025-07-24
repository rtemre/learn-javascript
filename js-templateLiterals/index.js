// Multiline String
const multiLineString = `This is a
multiline
string.`;
console.log(multiLineString);

// ==================================

// String Interpolation
const user = "Alice";
const age = 30;
const greeting = `Hello, ${user}! You are ${age} years old.`;
console.log(greeting); // Output: Hello, Alice! You are 30 years old.


// ==================================

// Tagged Template Literals
function customTag(strings, ...values) {
    // Example: Capitalize interpolated values
    let result = "";
    strings.forEach((str, i) => {
        result += str;
        if (values[i]) {
            result += String(values[i]).toUpperCase();
        }
    });
    return result;
}

const item = "apple";
const price = 2.50;
const message = customTag`The ${item} costs $${price}.`;
console.log(message); // Output: The APPLE costs $2.5.