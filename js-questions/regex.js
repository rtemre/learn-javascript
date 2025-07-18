function regexVarI() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    
    const re = /^(Mr|Mrs|Ms|Dr|Er)\.[a-zA-Z]+$/;
    
    /*
     * Do not remove the return statement
     */
    return re;
}

const reI = regexVarI();
console.log(reI.test("Mr.John"));    // true
console.log(reI.test("Mrs.Smith"));  // true
console.log(reI.test("Ms.Lee"));     // true
console.log(reI.test("Dr.Strange")); // true
console.log(reI.test("Er.Abc"));     // true

// Invalid cases
console.log(reI.test("Mr."));        // false
console.log(reI.test("Mr.John123")); // false
console.log(reI.test("Hello"));      // false


function regexVarII() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    
    const re = /\d+/g;
    
    /*
     * Do not remove the return statement
     */
    return re;
}

const reII = regexVarII();
console.log("I have 2 apples and 10 bananas.".match(reII));
// Output: ["2", "10"]
