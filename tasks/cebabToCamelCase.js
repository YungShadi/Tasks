function toCamelCase(str) {
    const splitedArr = str.split('');
    let result = [];
    if (splitedArr.length === 0) return "An empty string was provided but not returned"
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