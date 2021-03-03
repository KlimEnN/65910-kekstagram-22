// createPost главная функция для рендеринга всего финального обьекта , в параметре прокидываем индекс который потом подставляем в фотки и id, из за чего мы получаем уникальные значения в каждом обьекте
import {getRandomIndex, getRandomInteger} from './util.js';
import {createComment} from './create-comment.js';
import {DESCRIPTION_LIST} from './data.js';


export const createPost = (index) => {
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


