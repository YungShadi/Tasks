// есть массив nums, нам нужно из массива убрать все элементы, заданные в val

let removeElement = function (nums, val) {
    for (i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};
console.log(removeElement([0,1,2,2,3,0,4,2], 2))