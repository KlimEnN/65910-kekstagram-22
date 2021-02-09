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
// console.log(getRandomInRange(10, 100));



//Функция, которая будет считать количество символов в поле комментариев
//Переменная, которая задает допустимое количество символов в коммментрии. Логично использовать константу
const MAX_ALLOWED_COMMENT_LENGTH = 140;
//Переменная, которя используется для тестирования функции. Далее мы будем получать строку от пользователя
// eslint-disable-next-line no-unused-vars
const COMMENT_STRING = 'Комментарий';

// Функция, которая проверяет длинну комментария
// eslint-disable-next-line no-unused-vars
const isAllowedString = function(COMMENT_STRING, MAX_ALLOWED_COMMENT_LENGT) {
  if (COMMENT_STRING.length <= MAX_ALLOWED_COMMENT_LENGTH) {
    return true;
  } else {
    return false;
  }
};

const ID = [1, 2]

const DESCRIPTIONS = [
  'описание фото #1',
  'описание фото #2',
  'описание фото #3',
  'описание фото #4',
  'описание фото #5'
  ];

const NAMES = [
  'Андрей',
  'Маша',
  'Максим',
  'Олег',
  'Оля'
]

const COMMENTS = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]

const createArr = () => {

  return  {
    id: getRandomInRange(1, 25),
    url: '',
    description: DESCRIPTIONS[getRandomInRange(0, DESCRIPTIONS.length)],
    likes: getRandomInRange(40, 500)
  }
}

console.log(createArr())





// const createArr2 = () => {
//
// }
