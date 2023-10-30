function createPhoneNumber(numbers) {
    const firstNumbers = numbers.slice(0, 3)
    const secondNumbers = numbers.slice(3, 6)
    const thirdNumbers = numbers.slice(6, 10)
    firstNumbers.push(") ")
    firstNumbers.unshift("(")
    secondNumbers.push("-")
    const result = firstNumbers.concat(secondNumbers).concat(thirdNumbers).join('')
    return result
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));