let removeElement = function (nums, val) {
    const result = [];
    for (i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            result.push(nums[i])
        }
    }
    return result
}
console.log(removeElement([2, 3, 2, 3], 3));