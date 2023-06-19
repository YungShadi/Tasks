
const throttle = (fn, throttleTime) => {
    let isThrottle = false;
    function throttledFn(...args) {
        if (isThrottle) {
            currArgs = args;
            currThis = this;
            return;
        }
        fn.apply(this, args);
        isThrottle = true;
        setTimeout(function () {
            isThrottle = false;
            if (currArgs) {
                throttledFn.apply(currThis, currArgs);
            }
        }, throttleTime);
    }
    return throttledFn;
};

let counter = 0;
const fn = () => {
    counter++;
};

const throttledFn = throttle(fn, 500);

const intervalId = setInterval(throttledFn, 100);
setTimeout(() => clearInterval(intervalId), 1000);

console.log(counter); // 3