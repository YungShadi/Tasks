var removeDuplicates = function (nums) {
    const unicSet = new Set(nums);
    const result = [...unicSet.values()]
    return result.length
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));