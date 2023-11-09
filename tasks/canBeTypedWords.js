var canBeTypedWords = function (text, brokenLetters) {
    let words = text.split(" ");
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        let status = true;
        for (let j = 0; j < brokenLetters.length; j++) {
            if (words[i].includes(brokenLetters.charAt(j))) {
                status = false;
            }
        }
        status && count++;
    }
    return count;
};
console.log(canBeTypedWords('leet code', "lt"));