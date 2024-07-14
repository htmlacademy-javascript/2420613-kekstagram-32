import { getRandomInteger } from './utils.js';
import { userName, MESSAGE } from './data.js';

const createComment = () => ({
  id: getRandomInteger(1, 900),
  avarat: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: MESSAGE[getRandomInteger(0, MESSAGE.length - 1)],
  name: userName[getRandomInteger(0, userName.length - 1)],
});

const arrayComments = Array.from({ length: 30 }, createComment);

export { createComment };
// eslint-disable-next-line no-console
console.log('создание массива комментариев:', arrayComments);

