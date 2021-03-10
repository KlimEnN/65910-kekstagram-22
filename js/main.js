'use strict'

import {generateId, getRandomIndex, getRandomInteger, isEscEvent} from './util.js';


const INITIAL_POST_COUNT = 25; // по-умаолчанию надо 25, для теста поставил 2
const DESCRIPTION_LIST = [
  'Жить только для себя — есть злоупотребление.',
  'Приятно следовать внушениям совести.',
  'Глупость бывает двух родов: молчаливая и болтливая.',
  'Для людей работа является наслаждением.',
  'Честь дороже жизни.',
  'Целью общества является всеобщее счастье.',
  'Верная любовь помогает переносить все тяжести.',
  'Кто стал дружить с тобой для обретенья благ, Не друг надежный твой, а самый страшный враг.',
]
const NAMES_LIST = [
  'Сайвард "Беспощадный"',
  'Элвина "Безумный Глаз"',
  'Черноглазый Бизон',
  'Бодрая Ваделси',
  'Чудак Крoсли',
  'Энор Чандлер',
  'Кен Саймон',
  'Крофтон Мерсер',
  'Фэй Шортер',
  'Адисон Фишоп',
  'Симисола',
  'Ифунания',
  'Энитан',
  'Абена',
  'Анули',
  'Тлексиктли',
  'Зьянья',
  'Найт',
  'Ачкохтли',
  'Ихуикатл',
]
const MESSAGES_LIST = [
  'Всё отлично!',
  'Подтверждено: солнечных дней всё меньше',
  'В целом всё неплохо. Но не всё.',
  'Оказывается, средства индивидуальной защиты оказались бесполезны!',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Внезапно, герцог графства коронован',
  'Противоположная точка зрения подразумевает, что сделанные на базе интернет-аналитики выводы разоблачены.',
]



const userModalCloseElement= document.querySelector('.big-picture__cancel')
const miniPhotoList = document.querySelector('.pictures')
const templateMiniPhoto = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const clickPictureToOpen = document.querySelectorAll('.picture');
const bigPhotoModal = document.querySelector('.big-picture');
const img = bigPhotoModal.querySelector('.big-picture__img img')




const createComment = () => {
  const randomUrlIndex = getRandomInteger(1,6);
  return {
    id: generateId(),
    avatar: `img/avatar-${randomUrlIndex}.svg`,
    message: getRandomIndex(MESSAGES_LIST),
    name: getRandomIndex(NAMES_LIST),
  }
}

const createPost = (index) => {
  const commentInfo = new Array(getRandomInteger(1,5)).fill().map(createComment);
  return {
    id: index,
    url: `photos/${++index}.jpg`,
    description: getRandomIndex(DESCRIPTION_LIST),
    likes: getRandomInteger(15,200),
    comments: commentInfo,
  }
}


const pictureListFragment = document.createDocumentFragment();
const photoList = new Array(INITIAL_POST_COUNT).fill().map((_,i) => createPost(i));
photoList.forEach(({url, likes, comments}) => {
  const pictureElement = templateMiniPhoto.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;

  pictureListFragment.appendChild(pictureElement);
});
miniPhotoList.appendChild(pictureListFragment)




  clickPictureToOpen.forEach((picture) => {
  picture.addEventListener('click', () => {
      img.src = picture.querySelector('.picture__img').src;
      bigPhotoModal.classList.remove('hidden');
      document.addEventListener('keydown', (evt) => {
        if (isEscEvent(evt)) {
          evt.preventDefault();
          bigPhotoModal.classList.add('hidden');
        }
      });
    })
  });

userModalCloseElement.addEventListener('click', () => {
  bigPhotoModal.classList.add('hidden');
});

const comentsListInPhoto = document.querySelector('.social__comments');
const likesInPhoto = document.querySelector('.likes-count');
const commentsInPhoto = document.querySelector('.social__picture');

const comentsListFragment = document.createDocumentFragment();
const comentsList = new Array(getRandomInteger(1, 2)).fill().map(createComment);
comentsList.forEach(({url, likes, comments}) => {
  // document.querySelector('.big-picture__img').src ;
  // document.querySelector('.likes-count').textContent = likes;
  // document.querySelector('.comments-count').textContent = comments.length;
  //
  // comentsListFragment.appendChild(photoList);
});

comentsListInPhoto.appendChild(comentsListFragment)
