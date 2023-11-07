var subtractProductAndSum = function (n) {
    const arrayOfNum = Array.from(String(n), Number)
    const subSum = arrayOfNum.reduce((acc, curr) => acc * curr)
    const sum = arrayOfNum.reduce((acc, curr) => acc + curr)
    return subSum - sum
};
console.log(subtractProductAndSum(234));