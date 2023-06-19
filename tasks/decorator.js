// создаем функцию-декоратор, в которую передаем агрумент. В ней возвращаем функцию с аргументом, который будет 
// массивом с остаточными параметрами. Эта функция консоль логает каллед и возвращает fn, к которому
// мы аплаим this и это массив. после чего добавляем Addition прототип адд, который реализует функцию с тем, к чему мы передаем


class Addition {
    constructor (num) {
    	this.num = num;
    }
    
    add (...nums) {
    	const sum = (a, b) => a + b;
    	return this.num + nums.reduce(sum);
    }
}

function logDecorator(fn) {
    return function (...args) {
      console.log('called');
      return fn.apply(this, args);
    };
  }
  
Addition.prototype.add = logDecorator(Addition.prototype.add);


const startedValue = new Addition(5);
const result = startedValue.add(3,5,6) //В консоль выводится "called"
console.log(result) //В консоль выводится 19