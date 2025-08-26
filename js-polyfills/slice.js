// Slice
// The returned array contains shallow copy of elements 



// Write polyfill for slice

Array.prototype.mySlice = function (start, end) {
    const length = this.length

    // Normalize the start
    if (start === undefined) {
        start = 0
    } else if (start < 0) {
        const newIndex = this.length + start
        start = Math.max(newIndex, 0)
    } else {
        start = Math.min(start, length)
    }

    // Normalize the end
    if (end === undefined) {
        end = length
    } else if (end < 0) {
        const newIndex = length + end
        end = Math.max(newIndex, 0)
    } else {
        end = Math.min(end, length)
    }

    const result = [];
    for (let i = start; i < end; i++) {
        const element = this[i];
        result.push(element)
    }

    return result
}


const arr = ['apple', 'banana', 'mango', 'orange', 'pinepal']

console.log(arr.slice(2));
console.log(arr.mySlice(2));

