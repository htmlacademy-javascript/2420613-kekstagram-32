import './data.js';
import './utils.js';

import { createComment } from './create-comment.js';
import { createDescription } from './create-description.js';

export const arrayComments = Array.from({ length: 30 }, createComment);

const arrayPhotos = Array.from({ length: 25 }, createDescription);

// для проверки
// console.log(arrayComments, arrayPhotos);
