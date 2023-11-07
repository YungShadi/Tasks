var makeFancyString = function (s) {
    const splitedS = s.split('');
    let result = [];
    for (let i = 0; i < splitedS.length; i++) {
        if (splitedS[i] === splitedS[i + 1]) {
            if (splitedS[i] === splitedS[i + 2]) {
                continue
            } else {
                result.push(splitedS[i])
            }
        } else {
            result.push(splitedS[i])
        }
    }
    return result
};
console.log(makeFancyString('aaabaaaa'));