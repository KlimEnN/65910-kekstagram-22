// Функция, которое возвращает случайно число из диапозона, и вкючает крайние значения
// http://code.mu/ru/javascript/manual/math/Math.random/

function getRandomInRange(min, max) {
  if (min >= 0 && max >=1) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    // eslint-disable-next-line no-console
    console.log('error');
  }
}
// eslint-disable-next-line no-console
console.log(getRandomInRange(10, 100));

//Функция, которая будет считать количество символов в поле комментариев
//Переменная, которая задает допустимое количество символов в коммментрии. Логично использовать константу
const MAX_ALLOWED_COMMENT_LENGTH = 140;
//Переменная, которя используется для тестирования функции. Далее мы будем получать строку от пользователя
const COMMENT_STRING = 'Комментарий';

// Функция, которая проверяет длинну комментария
const isAllowedString = function(COMMENT_STRING, MAX_ALLOWED_COMMENT_LENGT) {
  if (COMMENT_STRING.length <= MAX_ALLOWED_COMMENT_LENGTH) {
    return true;
  } else {
    return false;
  }
}

