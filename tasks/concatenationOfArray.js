let getConcatenation = function(nums) {
    let ans = new Array(nums.length * 2);
    let middle = nums.length;
    for ( i = 0; i < nums.length; i++){
        ans[i] = nums[i];
        ans[middle] = nums[i];
        middle++;
    }
    return ans
};
console.log(getConcatenation([1,2,3,4]));


