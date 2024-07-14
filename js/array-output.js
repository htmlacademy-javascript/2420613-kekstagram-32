import { createDescription } from './create-description.js';

const arrayPhotos = Array.from({ length: 25 }, createDescription);

// для проверки
// eslint-disable-next-line no-console
console.log('итог: ', arrayPhotos);
