const arr = [1, 2, 3, 4, 5, 6, 7]

console.log(arr);


const sum = arr.reduce((acc, next) => {
    return acc + next
}, 0)

console.log(sum)

const sub = [1, 2].reduce((acc, next) => {
    console.log("acc", acc)
    console.log("next", next);
    return acc - next;
})

console.log(sub);

const one = [1].reduce(function (a, n) {
    console.log("a", a, "n", n);
    return a
})


console.log(one);

// TODO: Write a polyfill for reduce function

let add = 0;

for (let i = 0; i < arr.length; i++) {
    add = add + arr[i]
}

console.log(add);

Array.prototype.myReduce = function (callback, initialValue) {
    if (typeof callback !== "function")
        throw new Error("Callback is not function");

    if (this === null)
        throw new Error("Invalid Data");

    if (!this.length && !initialValue)
        throw new Error("Reduce of empty array with no initial value");

    const initValue = initialValue ? initialValue : this[0]
    const startIndex = initialValue ? 0 : 1

    let accumulator = initValue

    for (let i = startIndex; i < this.length; i++) {
        const nextValue = this[i];
        accumulator = callback(accumulator, nextValue, i, this)
    }
    return accumulator
}

let output = arr.myReduce((acc, next, index, array) => {
    return acc + next
}, 0)

console.log(output);
