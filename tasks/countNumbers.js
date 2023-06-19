function count(string) {
    let stringSplit = string.split(``);
    let map = new Map();
    let result = new Object();
    for (j = 0; j < stringSplit.length; j++) {
        if (isNaN(map.get(stringSplit[j]))) {
            map.set(stringSplit[j], 1)
        } else {
            map.set(stringSplit[j], map.get(stringSplit[j]) + 1)
        }
        stringSplit.splice(j, 1);
        j--;


    }
    let keys = Array.from(map.keys());
    for (i = 0; i < map.size; i++) {
        let keysIndex = keys[i]
        let obj = map.get(keys[i])
        let numberValue = Number(Object.assign(obj));
        Object.assign(result, { [keysIndex]: numberValue });

    }
    return result
}
console.log(count(`aaabcbbaaa`))