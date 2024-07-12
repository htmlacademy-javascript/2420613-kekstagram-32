/* eslint-disable no-console */
const getlengthString = function (str, length) {
  return str.length <= length ? 'true' : 'false';
};

getlengthString('Какая-то строка', 30);
getlengthString('Какая-то строка', 3);
getlengthString('Какая-то строка', 15);
getlengthString('', 30);


const getPalindrome = function (str) {
  const normStr = str.replace(/ /g, '').toLowerCase();
  let newSrt = '';

  for (let i = normStr.length - 1; i >= 0; i--) {
    newSrt += normStr[i];
  }
  return normStr === newSrt ? 'true' : 'false';
};

getPalindrome(' То По  т');
getPalindrome('Тряпка');
getPalindrome('Лёша на полке клопа нашёл ');

