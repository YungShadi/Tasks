var sumOfUnique = function (nums) {
    let result = 0;
    const set = new Set();
    const setOfDeleted = new Set();
    for (num of nums) {
        if (set.has(num) || setOfDeleted.has(num)) {
            setOfDeleted.add(num)
            set.delete(num)
        } else {
            set.add(num)
        }

    }
    if (set.size === 0) return 0
    return result = [...set.values()].reduce((a, b) => a + b)
};
console.log(sumOfUnique([1, 1, 1, 1, 1]));