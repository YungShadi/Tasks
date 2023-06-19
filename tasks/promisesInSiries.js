
async function promisesInSeries(asyncFns) {
    if (asyncFns.length !== 0) {
        let result = []
        for (const promiseFn of asyncFns) {
            result = await promiseFn(result);
        }
        return result
    } else {
        return undefined
    }

}

const firstPromise = () =>
    new Promise((resolve) => setTimeout(() => resolve(300)), 300);

const secondPromise = () =>
    new Promise((resolve) => setTimeout(() => resolve(200)), 200);

const thirdPromise = () =>
    new Promise((resolve) => setTimeout(() => resolve(100)), 100);

console.log(promisesInSeries([firstPromise, secondPromise, thirdPromise]))