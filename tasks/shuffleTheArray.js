// в массиве чет-ое кол-во чисел первая половина - x, вторая y, нужно передвинуть числа из y между x
// пример [1,2,3,4] => [1,3,2,4], [1,2,3,4,5,6] => [1,4,2,5,3,6]

let shuffle = function (nums, n) {

}
console.log(shuffle([1, 2, 3, 4], 2));


let fromIndex = 0;
let newIndex = fromIndex / 2;
n = newIndex
let arr2 = new Array(nums[n]);
for (i = 1; i < nums.length; i + 2) {
    arr2.splice(fromIndex);
    arr2.splice(newIndex, 0);
    return arr2;
}
