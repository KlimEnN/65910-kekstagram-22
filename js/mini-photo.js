'use strict'
import {createPost} from './create-post.js';
import {} from './data.js'

//Место, куда будем накидываьт мини фото
const miniPhotoList = document.querySelector('.pictures__title')


//Находим заготовленный шабло и достаем из него вложенную структуру
const templateMiniPhoto = document.querySelector('#picture')
  .content
  .querySelector('.picture');

//Создаем масив мини-фото, который будет вставлен на страницу
const miniPhotos = createPost();


//создаем
miniPhotos.forEach((photo) => {
  const miniPhotoElement = templateMiniPhoto.cloneNode(true);
  miniPhotoElement.querySelector('.picture__img').textContent = po
  miniPhotoList.appendChild(miniPhotoElement);

});




