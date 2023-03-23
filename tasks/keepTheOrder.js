function keepOrder(ary, val) {
    for (i = 0; i < ary.length; i++) {
        if (val <= ary[i]) {
            return i;
        } else if ((i === ary.length - 1) && ary[i] < val) {
            return i + 1;
        } else if ((i === ary.length - 1) && ary[i] > val) {
         return 0;
        }
    } return 0;
}
console.log(keepOrder([1, 2, 3, 4], 5))