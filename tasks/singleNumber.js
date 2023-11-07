var singleNumber = function(nums) {
    let numCount = new Map();

    for (let num of nums) {
        if (numCount.has(num)) {
            numCount.set(num, numCount.get(num) + 1);
        } else {
            numCount.set(num, 1);
        }
    }

    for (let [num, count] of numCount) {
        if (count === 1) {
            return num;
        }
    }
};

console.log(singleNumber([1,0,1]));