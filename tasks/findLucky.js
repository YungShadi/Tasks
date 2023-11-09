var findLucky = function (arr) {
    const result = new Set();
    for (i = 0; i < arr.length; i++) {
        const filteredArr = arr.filter((num) => num === arr[i])
        if (filteredArr.length === arr[i]) result.add(arr[i])
    };
    if ([...result.keys()].length === 0) return -1
    return Math.max.apply(Math, [...result.keys()])
};
console.log(findLucky([2, 2, 3, 4]));