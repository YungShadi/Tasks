var canBeTypedWords = function (text, brokenLetters) {
    let result = 0;
    const words = text.split(' ');
    const letters = brokenLetters.split('');
    for (word of words) {
        for (letter of letters) {
            if (word.includes(letter)) {
                words[words.indexOf(word)] = false
            }
        }
    }
    return words.filter((word) => word !== false).length
};
console.log(canBeTypedWords('hello world', "ad"));