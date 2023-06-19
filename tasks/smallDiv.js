function smallestDiv(num) {
    if (num === 1 || num === 2) {
        return num;
    }
    function iter(acc) {
        if (num % acc === 0) {
            return acc
        }
        else {
            return iter(acc + 1)
        }

    }
    return iter(2)
}
console.log(smallestDiv(7))