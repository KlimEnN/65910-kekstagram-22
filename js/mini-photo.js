'use strict'
import {createPost} from './create-post.js';
import {INITIAL_POST_COUNT} from './data.js'


const miniPhotoList = document.querySelector('.pictures__title')
const templateMiniPhoto = document.querySelector('#picture')
  .content
  .querySelector('.picture');



const pictureListFragment = document.createDocumentFragment();
const photoList = new Array(INITIAL_POST_COUNT).fill().map((_,i) => createPost(i));
photoList.forEach(({url, likes, comments}) => {
  const pictureElement = templateMiniPhoto.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;

  pictureListFragment.appendChild(pictureElement)
});

miniPhotoList.appendChild(pictureListFragment)





