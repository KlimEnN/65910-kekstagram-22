// createComment функция рендеринга обьекта с коментариями
import {generateId, getRandomIndex, getRandomInteger} from './util.js';
import {DESCRIPTION_LIST, MESSAGES_LIST, NAMES_LIST} from './data.js';

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


export {createComment}
