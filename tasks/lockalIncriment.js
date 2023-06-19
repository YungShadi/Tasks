// Есть сторедж, в котором лежит обьект с ключом counter и велью число. Обьек в формате джсон
// Мне нужно поулчить значение счетсчика и увелисить его на 1, после чего обновить локал сторедж
// Беру имя счетсчика, из локалст достаю джейсон, перевожу его в обьект, ищу счетчик по имени
// После этого, увеличиваю его значение на 1 и возвращаю, переведя в джсон и перезаписв в локал сторедж
// При неверном занчении джсон перезаписываем данные, где у счетчика будет значение 1

function incrementCounter(counterName) {
  const localCounter = localStorage.getItem("counters");
  let counterObj = {};
  try {
    counterObj = JSON.parse(localCounter);
    let counterValues = counterObj[counterName] || 0;
    let newValue = counterValues + 1;
    counterObj[counterName] = newValue;
    localStorage.setItem("counters", JSON.stringify(counterObj));
    return newValue;
  } catch {
    let counterValues = counterObj[counterName] || 0;
    let newValue = counterValues + 1;  
    counterObj[counterName] = newValue;
    localStorage.setItem("counters", JSON.stringify(counterObj));
    return newValue;
  }
}

//   let counterValues = counterObj[counterName] || 0;
//   let newValue = counterValues + 1;
//   counterObj[counterName] = newValue;
//   localStorage.setItem("counters", JSON.stringify(counterObj));
//   return newValue;
// }
// function incrementCounter(counterName) {
//   let localCounter = localStorage.getItem("counters");
//   let counterObj = {};

//   if (localCounter) {
//     counterObj = JSON.parse(localCounter);
//   }

//   let counterValue = counterObj[counterName] || 0;
//   let newValue = counterValue + 1;
//   counterObj[counterName] = newValue;

//   localStorage.setItem("counters", JSON.stringify(counterObj));

//   return newValue;
// }

const obj = { bannerClick: 11 };
let objStringify = JSON.stringify(obj);
localStorage.setItem("bannerClick", objStringify);

incrementCounter("bannerClick");
