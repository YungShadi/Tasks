var isHappy = function (number) {
    let iterations = 0;
    function recursiveHappynes(number) {
        const numArray = number.toString().split('')
        const numAfterCalc = numArray.reduce((acc, curr) => acc = curr * curr + acc, 0)
        if (iterations >= 7) {
            return false
        }
        if (numAfterCalc !== 1) {
            iterations++
            return recursiveHappynes(numAfterCalc)
        } else {
            return true
        }
    }
    return recursiveHappynes(number)
};
console.log(isHappy(2));