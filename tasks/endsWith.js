function endsWith(str, end) {
    for (i = 1; i <= end.length; i++) {
        if (str.charAt(str.length - i) !== end.charAt(end.length - i)) {
            return false;
        }

    }; return true;

};
console.log(endsWith(`abcd`, `cd`));