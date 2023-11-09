var distributeCandies = function (candies, num_people) {
    let result = []
    for (i = 0; i < num_people; i++) {
        result.push(0)
    }
    let increment = 1;
    function decreaseCandies(candies) {
        for (let i = 0; i < result.length; i++) {
            if (increment > candies) increment = candies
            result[i] += increment
            candies -= increment
            increment++
        }
        if (candies <= 0) {
            return result
        }
        return decreaseCandies(candies)
    }
    return decreaseCandies(candies)
};
console.log(distributeCandies(10, 3));