var numJewelsInStones = function (jewels, stones) {
    const splitJ = jewels.split('');
    const splitS = stones.split('');
    let result = 0;
    splitS.map((j) => {
        for (i = 0; i < splitJ.length; i++) {
            if (j === splitJ[i]) {
                result++
            }
        }
    })
    return result
};
console.log(numJewelsInStones('aA', "aaAAbbbb"));