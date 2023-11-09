var stringMatching = function (words) {
    const result = [];
    for (i = 0; i < words.length; i++) {
        const currWord = words[i]
        for (j = 0; j < words.length; j++) {
            if (currWord.includes(words[j]) && words[j].length < currWord.length && !result.includes(words[j])) {
                result.push(words[j])
            }
        }
    }
    return result
};
console.log(stringMatching(["leetcoder", "leetcode", "od", "hamlet", "am"]));