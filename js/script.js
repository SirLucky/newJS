"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
      reitingFilm = prompt('На сколько его оцените?', ''),
      lastFilmSecond = prompt('Один из последних просмотренных фильмов?', ''),
      reitingFilmSecond = prompt('На сколько его оцените?', '');

personalMovieDB.movies[lastFilm] = reitingFilm;      
personalMovieDB.movies[lastFilmSecond] = reitingFilmSecond;      

console.log(personalMovieDB);