var kidsWithCandies = function (candies, extraCandies) {
    const result = [];
    for (let i = 0; i < candies.length; i++) {
        const currCandie = candies[i] + extraCandies;
        const currArr = candies.filter((c) => currCandie < c)
        if (currArr.length) {
            result.push(false)
        } else {
            result.push(true)
        }
    }
    return result

};
console.log(kidsWithCandies([4,2,1,1,2], 1));