var maximum69Number = function (num) {
    const result = []
    if (num === 9999) return 9999
    for (i = 0; i < num.toString().length; i++) {
        const numArray = Array.from(String(num), Number)
        if (numArray[i] === 9) {
            result.push(numArray.join(""))
        } else {
            numArray[i] = 9
            result.push(numArray.join(""))

        }
    }
    return Math.max.apply(Math, result)
};
console.log(maximum69Number(9669));