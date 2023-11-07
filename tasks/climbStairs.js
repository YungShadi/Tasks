var climbStairs = function (n) {
    let result = 0;
    const arrayOfNums = []
    for (i = 0; i <= n; i++) {
        arrayOfNums.push(i)
    }
    for (i = 0; i <= n; i++) {
        arrayOfNums[0] = 1;
        arrayOfNums[1] = 1;
        arrayOfNums[i] = arrayOfNums[i - 1] + arrayOfNums[i - 2]
        result = arrayOfNums[i]
    }
    return !isNaN(result) ? result : 0
};
console.log(climbStairs(1));