var runningSum = function (nums) {
    const arrayOfNums = [];
    const result = []
    for (let i = 0; i < nums.length; i++) {
        arrayOfNums.push(nums[i])
        result.push(arrayOfNums.reduce((a, b) => a + b))
    }
    return result
};
console.log(runningSum([1, 2, 3, 4]));