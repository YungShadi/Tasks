//В конструкторе указываем проверку на то что число !== андеф и не NaN. Если это так, то берем передоваемое 
//число, в противном случае 0
//Такую же проверку для кадого метода. В адд и саб создаем новый обьект класса, куда и передаем ответ


class Calc {
    constructor(number) {
        this.calc = number !== undefined && !isNaN(number) ? number : 0;
      }
  result(number) {
    if (number === undefined && isNaN(this.calc)) {
      this.calc = 0;
    } 
    return this.calc;
  }
  add(adding) {
    if (this.calc === undefined || isNaN(this.calc)) {
      this.calc = 0;
    }
    const newCalc = new Calc();
    newCalc.calc = this.calc + adding;
    return newCalc;
  }ы
  sub(subbing) {
    if (this.calc === undefined || isNaN(this.calc)) {
      this.calc = 0;
    }
    const newCalc = new Calc();
    newCalc.calc = this.calc - subbing;
    return newCalc;
  }
}

const calc = new Calc(3);

console.log(calc.add(5).result()); // 10 - 5 = 5
console.log(calc.result()); // 10
