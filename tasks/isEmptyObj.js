//в первом случае вообще легко, просто принимаем входные данные, если они пустые === true
// в втором случае тяжелее, помимо проверки на пустоту, так же нужно проверить prototype
//сначала проверяем наличие ключей, если они есть false, потом прроверяем прототип
//если прототип равен null или Object.prototype

function isEmpty(obj) {
  const objEntries = Object.entries(obj);
  if (objEntries.length === 0) {
    return true;
  } else {
    return false;
  }
}

function isEmptyWithProtos(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  const proto = Object.getPrototypeOf(obj);
  if (proto === null || proto === Object.prototype) {
    return true;
  } else {
    return isEmptyWithProtos(proto);
  }
}

// const obj = Object.create(null);
// console.log(isEmpty(obj)); // -> true
// console.log(isEmpty({ prop: "value" })); // -> false

const protoObj = Object.create(null);
const obj = Object.create(Object.prototype);
console.log(isEmptyWithProtos(obj)); // -> true
console.log(isEmptyWithProtos({})); // -> false
