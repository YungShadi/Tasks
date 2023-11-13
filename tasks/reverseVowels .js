var removeStars = function (s) {
    const arrayFromS = s.split('')
    const result = [];
     arrayFromS.reduce((acc, curr) => {
        if (curr === "*") {
            return result.pop()
        } else {
            return result.push(curr)
        }
    }, 0)
    return result.join("")
};
console.log(removeStars("lee**tcode"));