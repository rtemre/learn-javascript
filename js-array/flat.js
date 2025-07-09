// Write a function to flattern an array with 
// support of configuring depth level

const sampleData = [1, 2, [3, 4, [5, 6, [7, 8, 9, [10]]]]]

// There are 3 ways to flattern the sampleData array

// way 1 Easy peasy
console.log(sampleData.flat(4));

// way 2 That was clever move 
console.log(sampleData.toString().split(',').map(Number));


// way 3 This is what i am interested

// implement level argument for depth configuring
function flattern(array, level = 100) {
    const result = []

    array.forEach(element => {
        if (Array.isArray(element) && level > 0) {
            // Recursively call flattern function
            result.push(...flattern(element, level - 1))
        } else {
            result.push(element)
        }
    });

    return result
}

console.log(flattern(sampleData, 2));




