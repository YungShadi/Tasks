var addDigits = function (num) {
    const summOfNum = num.toString().split('').reduce((a, b) => Number(a) + Number(b))
    return summOfNum
};
console.log(addDigits(38));