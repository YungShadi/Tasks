const obj = {
    "a": {
        "b": {
            "c": {
                "d": {
                    "f": "hello"
                }
            }
        }
    }
}

const optionalChaning = function (obj, chain) {
    if (chain.length === 0) return obj;
    if (chain.length === 1) return obj[chain[0]];
    return optionalChaning(obj[chain[0]], chain.splice(1));
}

console.log(optionalChaning(obj, ["a", "b", "c", "d", "f"])); // "hello"
console.log(optionalChaning(obj, ["a", "b", "c", "f"])); // undefined
console.log(optionalChaning(obj, ["a", "b"])); // c: {}
console.log(optionalChaning(obj, ["a", "b", "c", "d"])); // "{f: hello}"
