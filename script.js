"use strict";


// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };


// for (let i = 0; i < 2; i++){
//   const a = prompt('Один из последних просмотренных фильмов', ''),
//         b = prompt('На сколько оцените его?', '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//           console.log('error');
//           i--;
//         }

// if (personalMovieDB.count < 10) {
//   console.log('Просмотренно мало');
// } else if (personalMovieDB.count >- 10 && personalMovieDB.count > 30) {
//   console.log('Вы обычный зритель');
// } else if (personalMovieDB.count > 30) {
//   comsole.log('Вы киноман');
// } else {
//   console.log('Произошла ошибка');
// }

// }

// console.log(personalMovieDB);



// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 2;

// while (i <= 15) {
//   i++;
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// } 


// function first() {
//   // Do something
//   setTimeout(function () {
//     console.log(1);
//   }, 500);
// }

// function second() {
//   console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//   console.log(`Я учу: ${lang}`);
//   callback();
// }

// function done() {
//   console.log('Я прошел этот урок');
// }

// learnJS('JavaScript', done);

// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red'
//   },
//   makeTest: function () {
//     console.log('Test');
//   }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//   if (typeof(options[key]) === 'object') {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//       counter++;
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//   }
  
// }

// console.log(counter);

// const arr = [1, 23, 34, 6, 8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//   return a - b;
// }
// // arr[99] = 0;

// // console.log(arr.length);
// // console.log(arr);


// arr.forEach(function(item, i, arr) {
//   console.log(`${i}: ${item} внутри массива ${arr}`);
// })

// arr.pop(); - удаляет последний эллемент массива
// arr.push(10); - добавляет в конец эллемент массива


// console.log(arr);

// for ( let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }


// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));


// function getMathResult(num, times) {
//   if (typeof (times) !== 'number' || times <= 0) {
//     return num;
//   }

//   let str = '';

//   for (let i = 1; i <= times; i++) {
//     if (i === times) {
//       str += `${num * i}`;
//       // Тут без черточек в конце
//     } else {
//       str += `${num * i}---`;
//       // Это тоже самое, что и
//       // str = str + num * i + "---"
//     }
//   }

//   return str;
// }

// getMathResult(10, 5);


// function calculateVolumeAndArea(a) {
//   if(typeof(a) !== 'number' || a < 0 || !Number.isInteger(a)){
//     return "При вычислении произошла ошибка";
//   }

//   let volume = 0,
//       area = 0;
  
// volume = a * a * a;
// area = 6 * (a * a);

// return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
  
// }

// const res = calculateVolumeAndArea(5);

// calculateVolumeAndArea(5);

// console.log(res);

// ????????????????????????????????

// function numberOFCoupe(num) {
//   if(typeof(num) !== "number" || num < 0 || !Number.isInteger(num)){
//     return "Ошибка. Проверьте правильность введенного номера места";
//   }
  
//   if(num === 0 || num > 36){
//     return "Таких мест в вагоне не существует";
//   }

//   return Math.ceil(num / 4);

// }

// const res = numberOFCoupe();

// numberOFCoupe();

// console.log(res);


// function findMaxNumber(a, b, c, d) {
//   if (typeof(a) !== 'number' ||
//      typeof (b) !== 'number' ||
//      typeof (c) !== 'number' ||
//      typeof (d) !== 'number') {
//       return 0;
//     } else {
//       return Math.max(a, b, c, d);
//     }
// }

// const res = findMaxNumber(1, 5, 6.6, 11);

// findMaxNumber(1, 5, 6.6, 11);

// console.log(res);



// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//   let objCopy = {};

//   let key;
//   for(key in mainObj){
//     objCopy[key] = mainObj[key];
//   }

//   return objCopy;
// }

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4
//   }
// };

// const numbers = copy{}


// let a = 5;
//     b = a;

// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//   a: 5,
//   b: 1
// };

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//   let objCopy = {};

//   for (let key in mainObj){
//     objCopy[key] = mainObj[key];
//   }

//   return objCopy;
// }

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4
//   }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;


// // console.log(newNumbers);
// // console.log(numbers);

// const add = {
//   d: 17,
//   e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// // console.log(add);
// // console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'asdasd';
// console.log(newArray);
// console.log(oldArray);


// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);


// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ["a", "b"];

// const newAarray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};

//  


// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red'
//   }
// };


// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);


// console.log(options.name);

// delete options.name;

// console.log(options);

// for (let key in options) {
//   if (typeof(options[key]) === 'object'){
//     for (let i in options[key]) {
//       console.log(`свойство ${i} имеет значение ${options[key][i]}`);
      
//     }
//   } else { 
//      console.log(`свойство ${key} имеет значение ${options[key]}`);
//   ;
//   }
// }


// const personalPlanPeter = {
//   name: "Peter",
//   age: "29",
//   skills: {
//     languages: ['ru', 'eng'],
//     programmingLangs: {
//       js: '20%',
//       php: '10%'
//     },
//     exp: '1 month'
//   },
//   showAgeLang: function(personalPlanPeter) {
    
//     const {age} = personalPlanPeter;
//     const {languages} = personalPlanPeter.skills;
//     let str = `Мне ${age} и я владею языками:`;
      
//     languages.forEach(function(lang) {
//       str += `${lang.toUpperCase()}`;
//     });

//     return str;
//   }
// };

// const a = personalPlanPeter.showAgeLang(personalPlanPeter);

// personalPlanPeter.showAgeLang(personalPlanPeter);

// console.log(a);
//Задача N2

// function showProgrammingLang(personalPlanPeter) {
//   // const {js, php} = personalPlanPeter.skills.programmingLangs;
//   // let str = `"Язык изучен на ${js} Язык php изучен на ${php}"`;
//   // return str
//   let str = '';
//   const {programmingLangs} = personalPlanPeter.skills;
//   for (let key in programmingLangs){
//     str += `Язык ${key} изучен на ${programmingLangs[key]} \n`
//   }

//   return str;
// }

// const a = showProgrammingLang(personalPlanPeter);
// showProgrammingLang(personalPlanPeter);

// console.log(a);


//Задача N1
// function showExperience(plan) {
//   const{exp} = personalPlanPeter.skills;
//   let str = `'${exp}'`;
//   return str
// }

// const a = showExperience();
// showExperience(personalPlanPeter);

// console.log(a);

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//   let str = '';

//   arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

        
//   arr.forEach(member => {
//     str += `${member} `
//   });

//   arr.forEach(function member() {
    
//   })

//   return str;
// }

// const a = showFamily(family);
// showFamily(family);

// console.log(a);

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//   let str = '';

//   if (arr.length === 0) {
//     str = 'Семья пуста';
// } else { 
//   str = 'Семья состоит из: ';
// };

// arr.forEach(function member() {
//   str += `${member}`;
// });

// return str;

// };

// const a = function showFamily();
// function showFamily();
// console.log(a);

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
  let str = '';

  // arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

  if(arr.length === 0) {
    str = 'Семья пуста';
  } else {
    str = 'Семья состоит из: ';
  };

  // arr.forEach(member => {
  //   str += `${member} `
  // });

  arr.forEach(function(member) {
    str += ` ${member}`;
  });

  return str;
}

showFamily(family);

const a = showFamily(family);

console.log(a);