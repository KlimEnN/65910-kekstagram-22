'use strict'
// Пишем утилитарные функции для реиспользования
const getRandomIndex = (array) => array[Math.floor(Math.random()*array.length)];
const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const generateId = () => Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
const isAllowedString = (string,maxLength) => (string.length <= maxLength) ? true : false;
// Выносим рендеринг в отельную функцию для 2 рендеринов, она принимает параметр  length в который передаем длину массива, а параметр cb это функция коллбек которую мы подставим что бы вызвать функции ниже
//const generateInfo = (length,cb) => new Array(length).fill().map(cb);

export {generateId, getRandomIndex, getRandomInteger, isAllowedString};
