// У меня 3 класса ошибок и функция
// Функция принимает функцию, ключь и число макс. кол-ва вызовов
// Функция, которую она принимает - получает данные из источника(?) и складывает с ключем
// Я должен проверить на
// 1. если выдает ошибку NotFoundError, то пробрасываем исключение
// 2. если TemporaryError то повторно вызываем getData
// 3. кол-во повторных вызовов не должно превышать maxRequestNumber, в противном случае
// выбрасыает ошибку AttemtsLimitExceeded
// Если ошибок не возникает, должна вернуть Key(?)

class AttemptsLimitExceeded extends Error {
  constructor() {
    super("Max attempts limit exceed");
    this.name = "AttemptsLimitExceeded";
  }
}

class NotFoundError extends Error {
  constructor() {
    super("Not found");
    this.name = "NotFoundError";
  }
}

class TemporaryError extends Error {
  constructor() {
    super("TemporaryError");
    this.name = "TemporaryError";
  }
}
function getRepeatableData(getData, key, maxRequestsNumber) {
  let number = 0;//кол-во отправленныхзапросов
  try { //в try, если все ок выводиться ключ
    return getData(key);
  } catch (error) { // в catxh перехватываем ошибку 
    if (error instanceof NotFoundError) { //если эта ошибка в истансе notFoundError, то прочто выводим
      throw error;
    }
    if (maxRequestsNumber && number < maxRequestsNumber - 1) { //далее проверка на кол-во запросов
      if (maxRequestsNumber !== number) { // если в этих запросах макс число не преывышено, то рекурсивно вызываю функцию
        return getRepeatableData(getData, key, maxRequestsNumber - 1);
      } else {
        throw new TemporaryError(); // если превышаеться, то TemporaryError
      }
    } else if (!maxRequestsNumber) { //Проверка на то, что у нас вообще есть макс-кол-во запросов
      return getRepeatableData(getData, key, maxRequestsNumber); // если такого нет, то функция вызываеться бесконечно
    } else if (maxRequestsNumber && number >= maxRequestsNumber - 1) { // если есть и число запросов больше или равно максимально
      // запрашиваемому, то выводим ошибку, о том что больше нельзя запрашивать
      throw new AttemptsLimitExceeded();
    }
  }
}
const getData = (key) => console.error(dgdfg);
console.log(getRepeatableData(getData, "NaN", 3));
