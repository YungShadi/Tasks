function convertPalindromes(numbers) {
    let onesAndZeros = new Array()
    for (i = 0; i < numbers.length; i++) {
        let number = String(numbers[i]).split(``).reverse().join(``)
        if (number == numbers[i]) {
            onesAndZeros[i] = 1;
        } else {
            onesAndZeros[i] = 0;
        }
    } return onesAndZeros;
};
console.log(convertPalindromes([101, 23, 22, 84, 1488]))