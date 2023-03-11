// import { romanToArabic } from "./romanToArabic.mjs";
// import { arabicToRoman } from "./ArabictoRoma.mjs";
// import * as exeption from "./exceptionCalculater.mjs";

function arabicToRoman(number) {
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

  function romanToArabic(s) {
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
if ( !s.includes(`I`) || !s.includes(`V`) || !s.includes(`X`)) {
    try {
        throw romanAndArabicError(`qwdjhqwidjas`)
    } catch(e) {
        console.log(e);
        return ` `;
    }
}
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

function notInTheRangeError(message = ``){
    this.name = `notInTheRangeError`;
    this.message = message;
}
notInTheRangeError.prototype = new Error();
notInTheRangeError.prototype.constructor = notInTheRangeError;

function romanAndArabicError(message = ``){
        this.name = `romanAndArabicError`;
        this.message = message;
} 
romanAndArabicError.prototype = new Error();
romanAndArabicError.prototype.constructor = romanAndArabicError;

function wrongOperatorError(message = ``){
    this.name = `wrongOperatorError`;
    this.message = message;
}
wrongOperatorError.prototype = new Error();
wrongOperatorError.prototype.constructor = wrongOperatorError;

 function romanBelowZeroError(message = ``){
    this.name = `romanBelowZeroError`;
    this.message = message;
}
romanBelowZeroError.prototype = new Error();
romanBelowZeroError.prototype.constructor = romanBelowZeroError;

 function wrongAmountOfElementsError(message = ``){
    this.name = `wrongAmountOfElementsError`;
    this.message = message;
}
wrongAmountOfElementsError.prototype = new Error();
wrongAmountOfElementsError.prototype.constructor = wrongAmountOfElementsError;

function main(expression) {
	let sliceArr = String(expression).split(` `);
	let firstElement = sliceArr[0];
	let secondElement = sliceArr[2];
	let slicedOperation = sliceArr[1];

	if (sliceArr.length !== 3) {
		try {
			throw new exeption.wrongAmountOfElementsError(`Неверное количество элементов`)
		} catch (e) {
			console.log(e);
			return ``;
		}
	}
	if (slicedOperation !== `+` && slicedOperation !== `-` && slicedOperation !== `*` && slicedOperation !== `/`) {
		try {
			throw new exeption.wrongOperatorError(`Неверный оператор`)
		} catch (e) {
			console.log(e);
			return ``;
		}
	}

	if (firstElement.includes(`I`) || firstElement.includes(`V`) || firstElement.includes(`X`)
		&& secondElement.includes(`I`) || secondElement.includes(`V`) || secondElement.includes(`X`)) {
		let convertToRoma1 = romanToArabic(firstElement);
		let convertToRoma2 = romanToArabic(secondElement);
		if ((convertToRoma1 > 0 && convertToRoma2 > 0) && (convertToRoma1 < 11 && convertToRoma2 < 11)) {
			let result = calculate(convertToRoma1, convertToRoma2, slicedOperation);
			console.log(result)
			return arabicToRoman(result);
		} else {
			try {
				throw new exeption.notInTheRangeError(`Числа должны быть от 1 до 10`)
			} catch (e) {
				console.log(e);
				return ``;
			}
		}

	} else if ((firstElement > 0 && secondElement > 0) && (firstElement < 11 && secondElement < 11)) {
		let numberFirstElement = Number(firstElement);
		let numberSecondElement = Number(secondElement)
		return calculate(numberFirstElement, numberSecondElement, slicedOperation);
	} else {
		try {
			throw new exeption.notInTheRangeError(`Числа должны быть от 1 до 10`)
		} catch (e) {
			console.log(e);
			return ``;
		}
	}

}
function calculate(firstElement, secondElement, slicedOperation) {
	let result = null;

	let operations = {
		sum: `+`,
		sub: `-`,
		mult: `*`,
		dev: `/`
	};

	function sum(firstElement, secondElement) {
		return firstElement + secondElement;
	}
	function sub(firstElement, secondElement) {
		return firstElement - secondElement;
	}
	function mult(firstElement, secondElement) {
		return firstElement * secondElement;
	}
	function dev(firstElement, secondElement) {
		return firstElement / secondElement;
	}


	switch (slicedOperation) {
		case operations.sum:
			result = sum(firstElement, secondElement);
			break;
		case operations.sub:
			result = sub(firstElement, secondElement);
			break;
		case operations.mult:
			result = mult(firstElement, secondElement);
			break;
		case operations.dev:
			result = dev(firstElement, secondElement);
			break;
	}
	return result;
}
console.log(main(`1 + 1`));