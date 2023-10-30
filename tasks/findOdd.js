function findOdd(A) {
    let result = 0;
    for (i = 0; i < A.length; i++) {
        const currNum = A[i]
        let amountOfCurr = 0;
        for (j = 0; j < A.length; j++) {
            if (A[j] === currNum) {
                amountOfCurr++
            }
        }
        if (amountOfCurr % 2 !== 0) {
            return currNum
        }
    }
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));  