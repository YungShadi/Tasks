
const debounce = (fn, debounceTime) => {
    let timeout;
    function debouncedFn(...args) {
        let context = this;
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(function () {
            if (typeof fn === 'function') {
                fn.apply(context, args);
            }
        }, debounceTime);
    };
    return debouncedFn
};

let counter = 0;
const fn = () => {
    counter++;
};

const debouncedFn = debounce(fn, 200);
debouncedFn(); // первый вызов
setTimeout(debouncedFn, 100); // вызов через 100 мс после последнего вызова
// первый вызов был заблокирован, второй ожидает окончания таймера
setTimeout(debouncedFn, 200); // вызов через 100 мс после последнего вызова
// второй вызов был заблокирован, третий ожидает окончания таймера
setTimeout(debouncedFn, 300); // ...
setTimeout(debouncedFn, 400); // после этого вызова не следует других вызовов
// только этот вызов сработает, т.к. после него прошло 200 мс и других вызовов не было
console.log(counter); // 1