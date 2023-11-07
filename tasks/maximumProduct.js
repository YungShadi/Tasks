var maximumProduct = function (nums) {
    let sordetNums = nums.sort((a, b) => a - b);
    sordetNums = sordetNums.splice(-3);
    const result = sordetNums.reduce((acc, curr) => acc = acc * curr, 1);
    return result;
};

console.log(maximumProduct([-100, -98, -1, 2, 3, 4]));