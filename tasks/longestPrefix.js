var longestCommonPrefix = function(strs) {
    let result = ``;
    let count = 0;
    if (strs.length === 1){
        return strs[0];
    }
    let shortWord = strs[0];

    for ( i = 0; i < strs.length; i++){
        if (strs[i].length < shortWord.length){
            shortWord = strs[i];
        }
    }
    for ( i = 0; i < shortWord.length; i++){
        for ( j = 0; j < strs.length; j++){
            if (shortWord.slice(``)[i] !== strs[j].slice(``)[i]){
                return result;
            }
        }
        result += shortWord.slice(``)[i];
    }
    return result;
}
