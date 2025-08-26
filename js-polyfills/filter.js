const arr = [1, 2, 3, 4, 5]

function transformFunction(value, index, arr) {
    // console.log(this);

    return value % 2 === 0;
}

const obj = { name: "magic" }

const newArray = filterFunction(arr, transformFunction, obj);
console.log(newArray);

function filterFunction(dataArray, callbackFunction, thisArg) {
    const result = [];
    for (i = 0; i < dataArray.length; i++) {
        const value = dataArray[i]
        const needToAdd = callbackFunction(value, i, dataArray)
        needToAdd && result.push(value)
    }
    return result

}
