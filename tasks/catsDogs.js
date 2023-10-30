let string = "кошка,собака,лошадь,корова,кошка";

const arrayOfStrings = string.split(",");
let result = [...new Set(arrayOfStrings)];
console.log(result.join());
