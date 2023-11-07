/**
 * @return {Function}
 */
var createHelloWorld = function () {
    return function (...args) {
        return "Hello World"
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
const f = createHelloWorld();
console.log(f({}, null, 423)) // "Hello World"
console.log(createHelloWorld());