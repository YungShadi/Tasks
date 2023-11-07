function toCamelCase(str) {
    const splitedArr = str.split('');
    let result = [];
    for (i = 0; i < splitedArr.length; i++) {
        if (splitedArr[i] === "-" || splitedArr[i] === "_") {
            const c = splitedArr[i + 1]
            result.push(c.toUpperCase())
            i++
        } else {
            result.push(splitedArr[i])
        }
    }
    return result.join('')
}

console.log(toCamelCase("A-A-A"));