function order(words) {
    let result = [];
    const objectWithNumbers = {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: ""
    }
    const arrayOfWords = words.split(' ');
    for (word of arrayOfWords) {
        const wordArray = word.split('')
        const filterdArray = wordArray.filter(function (number) {
            return !isNaN(Number(number))
        })
        objectWithNumbers[Number(filterdArray)] = word
    }
    return result = Object.values(objectWithNumbers).join(" ")

}
console.log(order('is2 Thi1s T4est 3a'));