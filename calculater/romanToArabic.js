 /*   function romanToArabic(roman){
        if(roman == null)
            return -1;
            var value;
        for(var i=0;i<roman.length;i++){
            current = char_to_int(roman.charAt(i));
            next = char_to_int(roman.charAt(i+1));
            console.log("Current",current);
            console.log("Next",next);
            if(current >= next){
                value = current + next;
                console.log(value);
            }
            else {
                console.log(value);
                value = next - current;
            } 
        }
        return value;
    }
    
    function char_to_int(character) {
        switch(character){
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            default: return -1;
        }
    }
    
    console.log(romanToArabic('IIX'));
*/

    var romanToInt = function(s) {
    const numeralsObject = {
        "I": 1, 
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "XC": 90,
        "CD": 400,
        "CM": 900
    };

    count = 0

    for (i = 0; i < s.length; i++) {
        if (numeralsObject[s[i]+s[i+1]]) {
                count += numeralsObject[s[i]+s[i+1]];
                i++;
                continue;
        }
        count += numeralsObject[s[i]];
    }
    return count;
};
console.log(romanToInt(`VI`))