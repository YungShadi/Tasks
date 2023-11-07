function moveZeros(arr) {
    let result = [];
    let counter = 0;
    for (element of arr) {
        if (element !== 0) {
            result.push(element)
        }
        if (element === 0) {
            counter++
        }
    }
    for (i = 0; i < counter; i++) {
        result.push(0)
    }
    return result
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));