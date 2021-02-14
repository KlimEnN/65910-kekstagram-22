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

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


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

const URL = [
  'photo/1.jpg',
  'photo/2.jpg',
  'photo/3.jpg',
  'photo/4.jpg',
  'photo/5.jpg',
  'photo/6.jpg',
  'photo/7.jpg',
  'photo/8.jpg',
  'photo/9.jpg',
  'photo/10.jpg',
  'photo/11.jpg',
  'photo/12.jpg',
  'photo/13.jpg',
  'photo/14.jpg',
  'photo/15.jpg',
  'photo/16.jpg',
  'photo/17.jpg',
  'photo/18.jpg',
  'photo/19.jpg',
  'photo/20.jpg',
  'photo/21.jpg',
  'photo/22.jpg',
  'photo/23.jpg',
  'photo/24.jpg',
  'photo/25.jpg'
]

const AVATARS = [
  'img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg'
]

const COMMENTS = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]

const FULL_INFO_MESSAGE = 1;


const getRandomArrayElement = (elements) => {
  return elements[getRandomInRange(0, elements.length -1)]
}

const createMessages= () => {

  const randomUrlIndex = getRandomInteger(1,6);

  return {
    id: getRandomInRange(1, 500),
    avatar: `img/avatar-${randomUrlIndex}.svg`,
    message: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(NAMES),
  }
}





const createFotoInfo = () => {


  return  {
    id: getRandomInRange(1, 25),
    url: getRandomArrayElement(URL),
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInRange(15, 200),
    comments: createMessages()
  }
}




const fullInfoMessage = new Array(FULL_INFO_MESSAGE).fill(null).map( () => createFotoInfo());

console.log(fullInfoMessage)
