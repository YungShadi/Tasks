import {romanAndArabicError} from "./exceptionCalculater.mjs";

export function romanToArabic(s) {
    const numeralsObject = {
        "I": 1, 
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "XC": 90
    };
    let count = 0;

    for ( let i = 0; i < s.length; i++) {
        if (numeralsObject[s[i]+s[i+1]]) {
                count += numeralsObject[s[i]+s[i+1]];
                i++;
                continue;
        }
        count += numeralsObject[s[i]];
    }
    return count;
};
