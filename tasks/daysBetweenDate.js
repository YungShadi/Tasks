//по сути простая задача, проблема возникает когда дата new Date(null) начинает ровняться не null и были проблемы с выкидыванием
//ошибки. Сначала проверяем даты на null и undef, потом на instanceof, затем выщитываем разницу

const getDaysBetweenDates = (date1, date2) => {
  let result = 0;
  if (date1 === undefined || date2 === undefined ||  date1 === null || date2 === null) {
    throw new TypeError();
  }
  if (!(date1 instanceof Date)) {
    date1 = new Date(date1);
  }

  if (!(date2 instanceof Date)) {
    date2 = new Date(date2);
  }
  let dateDifference = -0;
  dateDifference = date2 - date1;
  if (dateDifference < 86400000 && dateDifference > -86400000) {
    return 0;
  } else {
    result = dateDifference / 86400000;
  }
  if (result < 0) {
    return Math.ceil(result);
  } else {
    return Math.floor(result);
  }
};

console.log(getDaysBetweenDates(new Date(2011, 6, 2, 6, 0), new Date(2012, 6, 2, 18, 0)));
