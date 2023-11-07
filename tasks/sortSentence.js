var sortSentence = function (string) {
    const splitedString = string.split(" ")
    let result = [];
    for (i = 1; i <= splitedString.length; i++) {
        splitedString.filter((word) => {
            if (word.includes(i)) {
                let splitWord = word.split('')
                splitWord.pop()
                result.push(splitWord.join(''))
            }
        })
    }
    return result.join(' ')

};
console.log(sortSentence("is2 sentence4 This1 a3"));