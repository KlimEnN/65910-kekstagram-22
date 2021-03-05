import {INITIAL_POST_COUNT} from './data';
import {createPost} from './create-post';
import {createComment} from './create-comment';
import {getRandomInteger} from './util';

const comentsListInPhoto = document.querySelector('.social__comments');


const comentsListFragment = document.createDocumentFragment();
const comentsList = new Array(getRandomInteger(1,5)).fill().map(createComment);
comentsList.forEach(({url, likes, comments}) => {
  const commentsInPhoto = document.querySelector('.big-picture__img').src = url;
  const likesInPhoto = document.querySelector('.likes-count').textContent = likes;
  const commentsContInPhoto = document.querySelector('.comments-count').textContent = comments.length;

  comentsListFragment.appendChild(photoList);
});


comentsListInPhoto.appendChild(comentsListFragment)
