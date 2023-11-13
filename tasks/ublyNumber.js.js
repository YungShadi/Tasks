var wordPattern = function (pattern, s) {
    if (pattern.length === 1) return true;
    const sSplit = s.split(" ");
    const obj = new Set()
    console.log([...obj.keys()]);
};
console.log(wordPattern('abba', "dog dog dog dog"));