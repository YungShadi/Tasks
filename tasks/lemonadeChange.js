var lemonadeChange = function (bills) {
    let billsCollected = {
        5: 0,
        10: 0,
        20: 0
    };
    for (bill of bills) {
        billsCollected[bill]++
        if (bill === 10 && billsCollected[5] === 0) return false
        if (bill === 20 && billsCollected[5] === 0) return false
        if (bill === 10) {
            billsCollected[5]--
        }
        if (bill === 20) {
            if (billsCollected[10] >= 1) {
                billsCollected[10]--
                billsCollected[5]--
            } else if (billsCollected[10] === 0 && billsCollected[5] >= 3) {
                billsCollected[5]--
                billsCollected[5]--
                billsCollected[5]--
            } else {
                return false
            }
        }
    }
    return true
};
console.log(lemonadeChange([5, 5, 5, 5, 20, 20, 5, 5, 20, 5]));