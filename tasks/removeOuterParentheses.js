var removeOuterParentheses = function (s) {
    const brackets = [];
    let result = ""
    for (const bracket of s) {
        if (bracket === "(") {
            if (brackets.length) {
                result += bracket
            }
            brackets.push(bracket)
        } else {
            brackets.pop()
            if (brackets.length) {
                result += bracket
            }
        }
    }
    return result
};
console.log(removeOuterParentheses("(()())(())"));