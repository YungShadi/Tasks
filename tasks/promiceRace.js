
function promiseRace(promises) {
    return new Promise((resolve, reject) => {
        for (i = 0; i < promises.length; i++) {
            promises[i]
                .then((res) => resolve(res), (rej) => reject(rej))
        }
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
console.log(promiseRace([firstPromise, secondPromise, thirdPromise]))