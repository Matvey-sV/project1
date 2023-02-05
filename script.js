let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

  while (numberOfFilms == '' || == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных   фильмов?', ''),
    b = prompt('На сколько оцените его?', '');

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }

}


if (personalMovieDB.count < 10) {
  console.log("Просмотренно довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы класический зритель");
} else if (personalMovieDB.count > 30) {
  console.log("Вы киноман");
} else {
  console.log('error');
}


console.log(personalMovieDB);


function hi(num) {
  return [num * 2, num, num *5];
}

const a = hi(5);
console.log(a);

hi(5);