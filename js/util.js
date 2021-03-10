'use strict'
// Пишем утилитарные функции для реиспользования
const getRandomIndex = (array) => array[Math.floor(Math.random()*array.length)];
const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const generateId = () => Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
const isAllowedString = (string,maxLength) => (string.length <= maxLength) ? true : false;

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

export {generateId, getRandomIndex, getRandomInteger, isAllowedString, isEscEvent};
