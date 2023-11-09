var average = function (salary) {
    salary.sort((a, b) => a - b)
    const maxSalary = salary[salary.length - 1];
    salary[salary.length - 1] = 0;
    const minSalary = salary[0];
    salary[0] = 0
    const filterdSalary = salary.filter((num) => num !== 0)
    let result = 0;
    for (let i = 0; i < filterdSalary.length; i++) {
        result += filterdSalary[i]
    }
    return result / filterdSalary.length
};
console.log(average([4000,3000,1000,2000]));