'use strict'

import { generateId, getRandomInteger, getRandomIndex } from './util.js';
import {INITIAL_POST_COUNT, DESCRIPTION_LIST, MESSAGES_LIST, NAMES_LIST} from './data.js';
import './mini-photo.js'

// createComment функция рендеринга обьекта с коментариями
const createComment = () => {

  /*
   Подставляем аватарки от 1 до 6
  */
  const randomUrlIndex = getRandomInteger(1,6);
  // А тут просто возвраем обьект
  return {
    id: generateId(),
    avatar: `img/avatar-${randomUrlIndex}.svg`,
    message: getRandomIndex(MESSAGES_LIST),
    name: getRandomIndex(NAMES_LIST),
  }
}


// createPost главная функция для рендеринга всего финального обьекта , в параметре прокидываем индекс который потом подставляем в фотки и id, из за чего мы получаем уникальные значения в каждом обьекте
const createPost = (index) => {
  //На каждой итерации вызываем эту функцию которая генерит нам обьекты с коментами от 1 до 5
  const commentInfo = new Array(getRandomInteger(1,5)).fill().map(createComment);

  return {
    id: index,
    url: `photos/${++index}.jpg`,
    description: getRandomIndex(DESCRIPTION_LIST),
    likes: getRandomInteger(15,200),
    comments: commentInfo,
  }
}

// финальная константа, в которую записываем полный обьект, и  в аномниной функции прокидываем счетчик(это встроено в метод map() в массиве)
const generatedPostList = new Array(INITIAL_POST_COUNT).fill().map((_,i) => createPost(i));


console.log(generatedPostList)




