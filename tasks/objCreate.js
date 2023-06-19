// Нужно создать метод create для Object, куда передаеться протоип и данные обьекта
// Создаем новый обьект, проверяем является ли прототип обьектом, если да - задаем новому обьекту его прототи
// если нет выкидываем ошибку
// Потом проверяем передаваемы значения, если они не undef т.е не пустой обьект, и если он являеться обьектом
// передаем свойства в наш оьбект

Object.create = function(proto, propertiesObject) {
    const newObj = {};
    if(typeof proto === 'object'){
        Object.setPrototypeOf(newObj, proto)
    } else {
        throw new TypeError()
    }
    if(propertiesObject !== undefined && typeof propertiesObject === 'object') {
        Object.defineProperties(newObj, propertiesObject)
    }
    return newObj
};


const A = {
    objectName: 'Object A',
    getObjectName: function() {
      return `This is ${this.objectName}!`;
    },
  };
  
  const B = Object.create(A, {
    objectName: {
      value: 'Object B',
    },
  });
  
  console.log(A.getObjectName()) // This is Object A!
  console.log(B.getObjectName()) // This is Object B!
  
  console.log(A.hasOwnProperty('getObjectName')) // true
  console.log(A.hasOwnProperty('objectName')) // true
  
  console.log(B.hasOwnProperty('getObjectName')) // false
  console.log(B.hasOwnProperty('objectName')) // true