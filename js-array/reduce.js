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
