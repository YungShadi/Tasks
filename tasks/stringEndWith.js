let lengthOfLastWord = function(s) {
    s = s.split(` `);
    let lastWord = ``;
    for (i = 1; i <= s.length; i++){
        if ( s[s.length - i] !== ``){
            lastWord = s[s.length - i]
            break;
        }
    }
    let lastLength = lastWord.length;
    return lastLength;
};
console.log(lengthOfLastWord(`Bebrochka med sus`))