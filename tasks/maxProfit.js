var maxProfit = function (prices) {
    const lowestNumber = Math.min.apply(Math, prices)
    const lowestNumberIndex = prices.indexOf(lowestNumber)
    const newArray = prices.slice(lowestNumberIndex)
    if (newArray.length === 1) {
        prices.splice(lowestNumberIndex, 1)
        return maxProfit(prices)
    } else {
        const newArrayMaxNum = Math.max.apply(Math, newArray)
        return isFinite(newArrayMaxNum - lowestNumber) ? newArrayMaxNum - lowestNumber : 0
    }
};
console.log(maxProfit([3,2,6,5,0,3]));

// let lowestNum = prices[0];
// let indexOfLowest = 0;
// let highNum = 0;
// let result = 0;
// for (i = 0; i < prices.length; i++) {
//     if (prices[i] < lowestNum) {
//         lowestNum = prices[i]
//         indexOfLowest = prices.indexOf(prices[i])
//     }
// }
// for (i = indexOfLowest; i < prices.length; i++) {
//     if (prices[i] > lowestNum) {
//         highNum = prices[i]
//     }
// }
// result = highNum - lowestNum