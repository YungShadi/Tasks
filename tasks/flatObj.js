/*
Напишите функцию, которая возвращает новый объект,
в котором все примитивные элементы вложенных объектов были рекурсивно "подняты"(подняты = из вложенного объекта перемещены в текущий) до первого уровня.
Пример:
*/
const obj = {
    a: {
        b: {
            c: 1,
            d: 2,
            e: 3
        },
        f: {
            g: 4,
            h: 5
        }
    },
    i: 6,
    j: 7
};

const flatObject = (obj) => {
    const result = {};

    function recursiveFlat(obj) {

        Object.entries(obj).map((value) => {

            if (typeof value[1] === "object") {
                
                return recursiveFlat(value[1])
                
            }
            result[value[0]] = value[1]
        })

        return result
    }
    return recursiveFlat(obj)

};

console.log(flatObject(obj)) // { c: 1, d: 2, e: 3, g: 4, h: 5, i: 6, j: 7 };
