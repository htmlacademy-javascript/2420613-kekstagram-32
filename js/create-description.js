import { getRandomInteger } from './utils.js';
import { DESCRIPTION, userName, MESSAGE } from './data.js';
import { arrayComments } from './main.js';


export const createDescription = () => ({
  id: getRandomInteger(1, 25),
  url: `photos/${getRandomInteger(1, 25)}.jpg`,
  description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)],
  likes: getRandomInteger(15, 200),
  comments: arrayComments[getRandomInteger(0, arrayComments.length - 1)],
});
