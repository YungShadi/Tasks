function digitalRoot(n) {
    const arrayOfInt = n.toString().split('')
    let summ = 0;
    for (i = 0; i < arrayOfInt.length; i++) {
        summ += Number(arrayOfInt[i])
    }
    if (summ.toString().split('').length !== 1) {
        return digitalRoot(summ)
    }
    return summ
}
console.log(digitalRoot(942));