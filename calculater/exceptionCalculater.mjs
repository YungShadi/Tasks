export function notInTheRangeError(message = ``){
    this.name = `notInTheRangeError`;
    this.message = message;
}
notInTheRangeError.prototype = new Error();
notInTheRangeError.prototype.constructor = notInTheRangeError;

export function romanAndArabicError(message = ``){
        this.name = `romanAndArabicError`;
        this.message = message;
} 
romanAndArabicError.prototype = new Error();
romanAndArabicError.prototype.constructor = romanAndArabicError;

export function wrongOperatorError(message = ``){
    this.name = `wrongOperatorError`;
    this.message = message;
}
wrongOperatorError.prototype = new Error();
wrongOperatorError.prototype.constructor = wrongOperatorError;

export function romanBelowZeroError(message = ``){
    this.name = `romanBelowZeroError`;
    this.message = message;
}
romanBelowZeroError.prototype = new Error();
romanBelowZeroError.prototype.constructor = romanBelowZeroError;

export function wrongAmountOfElementsError(message = ``){
    this.name = `wrongAmountOfElementsError`;
    this.message = message;
}
wrongAmountOfElementsError.prototype = new Error();
wrongAmountOfElementsError.prototype.constructor = wrongAmountOfElementsError;