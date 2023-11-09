var duplicateZeros = function (arr) {
    const length = arr.length
    const copyArray = [...arr]
    arr = [];
    for (num of copyArray) {
        if (arr.length === length) {
            break
        }
        if (num === 0) {
            arr.push(0)
        }
        arr.push(num)
    }
    console.log(arr);
};
console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));