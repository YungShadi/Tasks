function promiseAll(promises) {
    return new Promise((resolve) => {
        let arrayOfPromises = []
        if (promises.length === 0) {
            return resolve([])
        }
        let counter = 0;
        promises.forEach((promise, index) => {
            promise.then((result) => {
                arrayOfPromises[index] = result
                counter++;
                if (counter === promises.length) {
                    resolve(arrayOfPromises)
                }
            })
        })
    })
}

const firstPromise = new Promise((resolve) =>
    setTimeout(() => resolve(300), 300)
);

const secondPromise = new Promise((resolve) =>
    setTimeout(() => resolve(200), 200)
);

const thirdPromise = new Promise((resolve) =>
    setTimeout(() => resolve(100), 100)
);

promiseAll([firstPromise, secondPromise, thirdPromise])
    .then(console.log); // [300, 200, 100]