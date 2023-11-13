var secondHighest = function (s) {
    const setOfNums = new Set();
    const arrayS = s.split('')
    for (letter of arrayS) {
        if (typeof Number(letter) === "number" && Number(letter) <= 10) {
            setOfNums.add(letter)
        }
    }
    const arrayOfNums = [...setOfNums.values()]
    arrayOfNums.sort((a, b) => a - b)
    return arrayOfNums[arrayOfNums.length - 2] || -1
};
console.log(secondHighest("abc1111"));