var rotateString = function (s, goal) {
    let counter = 0;
    const splitStr = s.split('')
    function rotateRec(s, goal) {
        counter++
        splitStr.push(splitStr.shift())
        if (counter > s.length) return false
        if (splitStr.join('') !== goal) return rotateRec(splitStr, goal)
        else return true
    }
    return rotateRec(s, goal)
};
console.log(rotateString("abcde", "cdeab"));