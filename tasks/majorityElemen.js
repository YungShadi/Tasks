var majorityElement = function (nums) {
    let numsObj = {};
    for (num of nums) {
        if (!Object.keys(numsObj).includes(`${num}`)) {
            numsObj[num] = 1
        } else {
            numsObj[num]++
        }
    }
    return Object.keys(numsObj).reduce((a, b) => numsObj[a] > numsObj[b] ? a : b);
};
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));