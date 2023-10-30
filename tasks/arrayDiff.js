function arrayDiff(a, b) {
    let result = []
    for (i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) {
            result.push(a[i])
        }
    }
    return result
}

console.log(arrayDiff([1, 2, 3], []))