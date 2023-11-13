function persistence(num) {
    if (num <= 10) return 0
    let iterations = 0;
    function recursivePers(num) {
        iterations++
        const splitedNum = String(num).split('')
        const newNum = splitedNum.reduce((acc, curr) => Number(acc) * Number(curr));
        if (newNum >= 10) {
            return recursivePers(newNum)
        }
        return iterations
    }
    return recursivePers(num)
}
console.log(persistence(999));