
import {isEscEvent} from './util.js';

const bigPhotoModal = document.querySelector('.big-picture');
const clickPictureToOpen = document.querySelector('.picture');
const userModalCloseElement= document.querySelector('.big-picture__cancel')


clickPictureToOpen.addEventListener('click', () => {
  bigPhotoModal.classList.remove('hidden');

  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      bigPhotoModal.classList.add('hidden');
    }
  });
})

userModalCloseElement.addEventListener('click', () => {
  bigPhotoModal.classList.add('hidden');
});


