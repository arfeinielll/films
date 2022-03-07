const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start() {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

      while (
         personalMovieDB.count == '' ||
         personalMovieDB.count == null ||
         isNaN(personalMovieDB.count)
      ) {
         personalMovieDB.count = +prompt(
            'Сколько фильмов вы уже посмотрели?',
            ''
         );
      }
   },
   rememberMyFilms() {
      for (let i = 0; i < 2; i++) {
         const a = prompt('Один из последних просмотренных фильмов?', '');
         const b = +prompt('На сколько оцените его?', '');

         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
         } else {
            i--;
         }
      }
   },
   writeYourGenres() {
      for (let i = 0; i < 3; i++) {
         const genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);

         if (genre !== '' && genre !== null) {
            personalMovieDB.genres[i] = genre;
         } else {
            i--;
         }
      }

      personalMovieDB.genres.forEach((movie, index) => {
         console.log(`Любимый жанр #${index + 1} - это ${movie}`);
      });
   },
   detectPersonalLevel() {
      if (personalMovieDB.count < 10) {
         console.log('Просмотрено довольно мало фильмов');
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
         console.log('Вы классический зритель');
      } else if (personalMovieDB.count >= 30) {
         console.log('Вы киноман');
      } else {
         console.log('Произошла ошибка');
      }
   },
   showMyDB(hidden) {
      if (!hidden) {
         console.log(personalMovieDB);
      }
   },
   toogleVisibleMyDB() {
      if (personalMovieDB.privat) {
         personalMovieDB.privat = false;
      } else {
         personalMovieDB.privat = true;
      }
   },
};