var isSubsequence = function (s, t) {
    let sArray = s.split('');
    let tArray = t.split('');
    let result = [];
    let sIndex = 0;  // Индекс для отслеживания символов в строке s

    for (let j = 0; j < tArray.length; j++) {
        if (sArray[sIndex] === tArray[j]) {
            result.push(tArray[j]);
            sIndex++;
        }
    }

    return s === result.join('');
};


console.log(isSubsequence('acb', 'ahbgdc'));