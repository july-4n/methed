/* eslint-disable max-len */
const names = ['module.jsx', 'index.html', 'style.css', 'index.js', 'file.ts', 'library.css', 'my.plugin.js'];
const text = 'Здоровый (праздничный) ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды (по мнению моей мамы) являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты(например: личи, рамбутан, тамаринд). Здоровой может быть даже выпечка, если она приготовлена на пару.';
const url = 'http://site.ru';

// task1
export const getNames = (arr) => {
  const regexp = /\.(js|jsx|ts)$/;
  const fileExtensions = arr.filter(name => regexp.test(name));

  return fileExtensions;
};

console.log(getNames(names));


// task2
const validateEmail = (email) => {
  const regexp2 = /^\w+@[a-zA-Z]{3,}\.[a-zA-Z]{2,5}$/;
  return regexp2.test(email);
};

console.log(validateEmail('info@methed.ru'));
console.log(validateEmail('max24@mail.com'));
console.log(validateEmail('java_script@google.io'));
console.log(validateEmail('my-mail@yandex.ru'));
console.log(validateEmail('tom_yam@ya.ru'));
console.log(validateEmail('zero@mai1.xyz'));

// task3

const getBracketsText = (str) => {
  const regexp3 = /\((.*?)\)/g;
  return str.match(regexp3);
};

console.log(getBracketsText(text));

// task4
const replaceUrlWithLink = (str) => {
  const regexp4 = /(https?:\/\/[^\s]+)/g;
  return str.replace(regexp4, '<a href=\'$1\'>$1</a>');
};

console.log(replaceUrlWithLink(url));
