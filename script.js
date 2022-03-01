let numberOfFilms;

function start() {
   numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

   while (
      numberOfFilms == '' ||
      numberOfFilms == null ||
      isNaN(numberOfFilms)
   ) {
      numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
   }
}

start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};

function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', '');
      const b = +prompt('На сколько оцените его?', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         personalMovieDB.movies[a] = b;
      } else {
         i--;
      }
   }
}

rememberMyFilms();

function writeYourGenres() {
   for (let i = 0; i < 3; i++) {
      const genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
      personalMovieDB.genres[i] = genre;
   }
}

writeYourGenres();

function detectPersonalLevel() {
   if (personalMovieDB.count < 10) {
      console.log('просмотрено довольно мало фильмов');
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('вы классический зритель');
   } else if (personalMovieDB.count >= 30) {
      console.log('вы киноман');
   } else {
      console.log('произошла ошибка');
   }
}

detectPersonalLevel();

function showMyDB(hidden) {
   if (!hidden) {
      console.log(personalMovieDB);
   }
}

showMyDB(personalMovieDB.privat);
