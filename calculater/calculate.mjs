import { romanToArabic } from "./romanToArabic.mjs";
import { arabicToRoman } from "./ArabictoRoma.mjs";

function calculator(expression) {
	let sliceArr = String(expression).split(` `);
	let firstElement = sliceArr[0];
	let secondElement = sliceArr[2];
	let slicedOperation = sliceArr[1];

	if (sliceArr.length !== 3) {
		throw new Error(`Неверное кол-во операндов`)
	}

	let convertToRoma1 = romanToArabic(firstElement);
	let convertToRoma2 = romanToArabic(secondElement);
	let result = null;
	try {
		if (firstElement.includes(`I`) || firstElement.includes(`V`) || firstElement.includes(`X`)
			&& secondElement.includes(`I`) || secondElement.includes(`V`) || secondElement.includes(`X`)) {

			if ((convertToRoma1 > 0 && convertToRoma2 > 0) && (convertToRoma1 < 11 && convertToRoma2 < 11)) {
				result = compute(convertToRoma1, convertToRoma2, slicedOperation);
				// console.log(result);
				if (result < 0) {
					return ``;
				}
				result -= result % 1;
				result = arabicToRoman(result);
				return result.toString();
			}

		} else if ((firstElement > 0 && secondElement > 0) && (firstElement < 11 && secondElement < 11)) {
			let numberFirstElement = Number(firstElement);
			let numberSecondElement = Number(secondElement);
			result = compute(numberFirstElement, numberSecondElement, slicedOperation);
			result -= result % 1;
			return result.toString();
		} else {
			throw new Error(`Цифры должны быть меньше 10`)
		}
	} catch (error) {
		throw error
	}
	try {
		if (result === null) throw new Error(`Нельзя оперировать римскими и арабскими одновременно`)
	} catch (error) {
		throw error
	}
}
function compute(firstElement, secondElement, slicedOperation) {
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

	try {
		if (slicedOperation !== `+` && slicedOperation !== `-` && slicedOperation !== `*` && slicedOperation !== `/`) throw new Error(`Неверная опперация`);
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
	} catch (error) {
		throw error
	}

}

console.log(calculator('1 + 2')); // вернется строка '3'
console.log(calculator('VI / III')); // вернется строка 'II'
console.log(calculator('VII / III')); // вернётся строка II'
console.log(calculator('I + II')); // вернется строка 'III'
console.log(calculator('I - II')); // вернётся строка '' (пустая строка) т.к. в римской системе нет отрицательных чисел
console.log(calculator('I + 1')); // вернётся исключение (ошибка) throws Error т.к. используются одновременно разные системы счисления
console.log(calculator('I')); // вернётся исключение throws Error т.к. строка не является математической операцией
console.log(calculate('1 + 1 + 1')); // вернётся исключение throws Error т.к. формат математической операции не удовлетворяет заданию - два операнда и один оператор (+, -, /, *)