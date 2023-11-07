var containsDuplicate = function (nums) {
    const unicThings = new Set();
    let result = false;
    nums.map((num) => {
        unicThings.has(num) ? result = true : unicThings.add(num)
    });
    return result;
};

console.log(containsDuplicate([0,4,5,0,3,6]));