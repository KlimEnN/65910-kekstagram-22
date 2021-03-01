'use strict'

import {INITIAL_POST_COUNT} from './data.js';
import {createPost} from './create-post.js';
import './mini-photo.js'




// финальная константа, в которую записываем полный обьект, и  в аномниной функции прокидываем счетчик(это встроено в метод map() в массиве)
const generatedPostList = new Array(INITIAL_POST_COUNT).fill().map((_,i) => createPost(i));


console.log(generatedPostList)


