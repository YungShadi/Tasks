export function arabicToRoman(number) {
  let roman = {
  
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1
  };
  let result = "";

  for (var i of Object.keys(roman)) {
    var repeat = Math.floor(number / roman[i]);
    number -= repeat * roman[i];
    result += i.repeat(repeat);
  }

  return result;
}