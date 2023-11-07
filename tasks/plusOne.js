var plusOne = function (digits) {
    const numberFromArray = digits.reduce((acc, curr) => acc = acc + `${curr}`)
    if (numberFromArray <= Number.MAX_SAFE_INTEGER) {
        const numberFromArray = digits.reduce((acc, curr) => acc = acc + `${curr}`)
        const result = (Number(numberFromArray) + 1).toString().split('')
        return result
    } else {
        const result = (BigInt(numberFromArray) + BigInt(1)).toString().split('').map(digit => +digit)
        return result
    }
};
console.log(plusOne([5,2,2,6,5,7,1,9,0,3,8,6,8,6,5,2,1,8,7,9,8,3,8,4,7,2,5,8,9]));