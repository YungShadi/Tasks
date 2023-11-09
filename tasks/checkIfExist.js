var checkIfExist = function (arr) {
    let findZeros = arr.filter((num) => num === 0)
    if (findZeros[0] === 0 && findZeros[1] === 0) return true
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] * 2 && arr[i] !== arr[j]) {
                return true
            }
        }
    }
    return false
};
console.log(checkIfExist([0, 0]));