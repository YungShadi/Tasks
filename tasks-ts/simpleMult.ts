export function simpleMultiplication(num: number): number{
    const result :number = num % 2 === 0 ? num * 8 : num * 9;
    return result
  }
console.log(simpleMultiplication(2));
