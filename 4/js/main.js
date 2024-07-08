const DESCRIPTION = [
  'Город в котором мы побывали',
  'Хуан Себастьян какой-то человек',
  'Мария - красивая девушка',
  'Большая река',
  'Высокие горы',
  'Теплая вода',
  'Люпита',
  'Вашингтон',
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
  'black',
  'red',
  'blue',
  'yellow',
  'green',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
];

const userName = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
  'Дмитрий',
  'Николай',
  'Татьяна',
  'Алена',
  'Ольга',
  'Марина',
  'Стас',
  'Роналдо'
]

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];


const createComment = () => ({
  id: getRandomInteger(1, 200),
  avarat: 'img/avatar-' + getRandomInteger(1, 6) + '.svg',
  message: MESSAGE[getRandomInteger(0, MESSAGE.length - 1)],
  name: userName[getRandomInteger(0, userName.length - 1)]
});

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const arrayComments = Array.from({ length: 30 }, createComment);

const createDescription = () => ({
  id: getRandomInteger(1, 25),
  url: 'photos/' + getRandomInteger(1, 25) + '.jpg',
  description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)],
  likes: getRandomInteger(15, 200),
  comments: arrayComments[getRandomInteger(0, arrayComments.length - 1)],
});

const arrayPhotos = Array.from({ length: 25 }, createDescription);

