// Написать функцию, которая мемоизирует ответы другой функции
function memo(fn) {
    const obj = {};

    return function (...args) {

        if (args in obj) return obj[args];
        else return obj[args] = fn(...args);

    }
}

function plus(a, b) {
    console.log('call', a, b);
    return a + b;
}

const memoPlus = memo(plus);
console.log(memoPlus(1, 2)); // call 1 2 \n 3
console.log(memoPlus(1, 2)); // 3
console.log(memoPlus(3, 1)); // call 3 1 \n 4В
console.log(memoPlus(1, 2)); // 3
console.log(memoPlus(3, 1)); // 4


// ------------


plus("3", 1);
console.log(memoPlus("3", 1)); // call 3 1 \n 4

function getA(obj) {
    console.log('getA call', obj.a)
    return obj.a
}

const memoGetA = memo(getA);

const a1 = { a: 1 }
const a2 = { a: 2 }
const a3 = { a: 1 }

console.log(memoGetA(a1)); // getA call 1 \n 1
console.log(memoGetA(a2)); // getA call 2 \n 2
console.log(memoGetA(a1)); // 1
console.log(memoGetA(a3)); // 1
bs