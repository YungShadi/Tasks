/* Функция принимает строку с комбинацией 
   скобок и возвращает валидна ли она */

function areValidBrackets(str) {
    const chars = [];
    const bracketPairs = {
        "{": "}",
        "[": "]",
        "(": ")"
    };

    for (const char of str) {
        if (char in bracketPairs) {
            chars.push(char);
        } else {
            if (chars.length === 0 || bracketPairs[chars.pop()] !== char) {
                return false;
            }
        }
    }

    return chars.length === 0;
}

console.log("1", areValidBrackets("[](){}")); // true
console.log("1", areValidBrackets("()([{()[]}])")); // true
console.log("2", areValidBrackets("[{]}")); // false
