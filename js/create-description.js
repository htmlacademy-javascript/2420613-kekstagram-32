import { getRandomInteger } from './utils.js';
import { DESCRIPTION } from './data.js';
import { createComment } from './create-comment.js';

export const createDescription = () => ({
  id: getRandomInteger(1, 25),
  url: `photos/${getRandomInteger(1, 25)}.jpg`,
  description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)],
  likes: getRandomInteger(15, 200),

  comments: Array.from(Array.from({ length: getRandomInteger(1, 30) }, () => Math.floor(Math.random() * 30)),createComment),
});
