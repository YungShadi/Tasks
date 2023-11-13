function isValidWalk(walk) {
    const obj = {};
    for (dir of walk) {
        if (obj[dir]) {
            obj[dir]++
        } else {
            obj[dir] = 1;
        }
    }
    if (obj["n"] && obj['s'] && obj["n"] + obj["s"] === 10) {
        return obj["n"] === obj['s']
    } else if (obj["e"] && obj['w'] && obj["e"] + obj["w"] === 10) {
        return obj["e"] === obj['w']
    } else return false
}
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));