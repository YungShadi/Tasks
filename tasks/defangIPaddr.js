var defangIPaddr = function (address) {
    const result = [];
    for (char of address) {
        if (char === ".") {
            result.push("[.]")
        } else {
            result.push(char)
        }
    }
    return result.join("")
};
console.log(defangIPaddr("255.100.50.0"));