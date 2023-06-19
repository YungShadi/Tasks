function countSmileys(arr) {
    let numericResult = 0;
    for (i = 0; i < arr.length; i++) {
        let splidetEle = arr[i].split('');
        if (splidetEle.length < 4) {
            if (splidetEle[0] === ';' || splidetEle[0] === ':') {
                if (splidetEle[1] === '-' || splidetEle[1] === '~') {
                    if (splidetEle[2] === ')' || splidetEle[2] === 'D') {
                        numericResult++
                    }
                } else {
                    if (splidetEle[1] === ')' || splidetEle[1] === 'D') {
                        numericResult++
                    }
                }
            }
        }
    }
    return numericResult;
}
console.log(countSmileys([";D", "))", ";~~D", ";D"]));