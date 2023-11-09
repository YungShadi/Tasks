var numWaterBottles = function (numBottles, numExchange) {
    let result = 0;
    function decreaseBottles(numBottles) {
        if (numBottles >= 1) {
            if (numBottles > numExchange) {
                result += numExchange;
            } else {
                result += numBottles
            }
            numBottles -= numExchange;
            numBottles++
            return decreaseBottles(numBottles);
        } else {
            return result;
        }
    }
    return decreaseBottles(numBottles)
};
console.log(numWaterBottles(15, 4));