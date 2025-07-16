// Hacker Rank Question: Dictonary and Maps (30 days of code)
 
function processData(input) {
    //Enter your code here
    let phoneBookList = [] 
    let query = []
    const pairCount = +input.split('\n')[0]
    const inputArr = input.split('\n').slice(1)
    inputArr.map((data, idx) => {
        if ( idx < pairCount ) {
            phoneBookList.push({
                name: data.split(" ")[0],
                phone: data.split(" ")[1]
            }) 
        } else {
            query.push(data)
        }
    })
    phoneBookList.map((item) => {
        if (query.includes(item.name)) {
            console.log(item.name+"="+item.phone)
        } else {
            console.log("Not found")
        }
    })
    
} 
// Above code implementation works, but it has multiple inefficiencies:

// 1. Repeated split('\n') and split(' ') — expensive and redundant.
// 2. Using arrays to store phone book entries and querying with .includes() — results in O(n*q) time complexity.
// 3. Mapping (.map) instead of using more suitable iteration methods like for or forEach. 

// ===================================================

// const input = `
// 3
// sam 99912222
// tom 11122222
// harry 12299933
// sam
// edward
// harry
// `

// processData(input)

// Output:
// sam=99912222
// Not found
// harry=12299933

// =================================================

// Optimized Version
// Use a Map (or object) for O(1) lookup when answering queries:

function processData(input) {
    const lines = input.trim().split('\n');
    const pairCount = +lines[0];
    
    const phoneBook = {};
    for (let i = 1; i <= pairCount; i++) {
        const [name, phone] = lines[i].split(' ');
        phoneBook[name] = phone;
    }

    for (let i = pairCount + 1; i < lines.length; i++) {
        const queryName = lines[i];
        if (phoneBook.hasOwnProperty(queryName)) {
            console.log(`${queryName}=${phoneBook[queryName]}`);
        } else {
            console.log("Not found");
        }
    }
}

// Key Improvements:
// 1. Map/object for lookup → much faster than array .includes.
// 2. Single split('\n') call → avoids redundant parsing.
// 3. Avoided .map for side-effects → cleaner and semantically correct with for loops.


// =================================================

// How It Works:
// The first line 3 → number of name-phone pairs.

// Next 3 lines → phone book entries: 
// {
//   sam: "99912222",
//   tom: "11122222",
//   harry: "12299933"
// }

// Remaining lines are queries:
// sam → found → prints sam=99912222
// edward → not in phone book → prints Not found
// harry → found → prints harry=12299933
