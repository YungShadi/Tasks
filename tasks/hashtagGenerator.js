function generateHashtag(str) {
    let trimStr = str.split(' ')
    trimStr = trimStr.filter(function (str) {
        return /\S/.test(str);
    });
    const result = ["#"]
    let removeSpace = str.replace(/\s+/g, '')
    if (trimStr.length < 1 || removeSpace.length >= 140) return false
    for (word of trimStr) {
        if (word !== '') {
            result.push(word.charAt(0).toUpperCase() + word.slice(1))
        }
    }
    return result.join('')
}
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"))
console.log(generateHashtag("    Hello     World   "))
console.log(generateHashtag(""))

