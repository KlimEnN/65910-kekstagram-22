// Функция, которое возвращает случайно число из диапозона, и вкючает крайние значения
// http://code.mu/ru/javascript/manual/math/Math.random/

function getRandomInRange(min, max) {
  if (min >= 0 && max >=1) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    // eslint-disable-next-line no-console
    console.log('error')
  }
}
// eslint-disable-next-line no-console
console.log(getRandomInRange(10, 100));
