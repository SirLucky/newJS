"use strict";

// const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
//       reitingFilm = prompt('На сколько его оцените?', ''),
//       lastFilmSecond = prompt('Один из последних просмотренных фильмов?', ''),
//       reitingFilmSecond = prompt('На сколько его оцените?', '');

// personalMovieDB.movies[lastFilm] = reitingFilm;      
// personalMovieDB.movies[lastFilmSecond] = reitingFilmSecond;      

// console.log(personalMovieDB);

// let result = '';
// const length = 7;
// for(let i=1; i < length; i++) {
//     for(let j=0; j < i; j++) {
//     result +='*';
//     }
//     result +='\n';
// }
// console.log(result);

// task1

// let i = 5;
// while ( i <= 10) {
//     console.log(i);
//     i++;
// }

// task 2

for (let i = 20; i >= 10; i--) {
    
    if (i === 13) {
        break;
    }
    
    console.log(i);
    
}

// task3

for ( let i = 2; i <= 10; i += 2) {
    console.log(i);
}

for ( let i = 2; i <= 10; i += 2) {

    if (i % 2 !== 0) {

        continue;
    }

    else {

        console.log(i);

    }
}
// task4

let i = 2;
while (i <= 16) {
    
    if (i % 2 === 0) {
        
        continue;

    } else {

        console.log(i);
        
    }
    i++;
}

// task4

// let arr = [];
// for (let i = 5; i <= 10; i++) {
    
//     arr.push(i);

// }
// console.log(arr);

// task11
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i]);
// }


// task22
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 0; i < data.length; i++) {
//     if(typeof(data[i]) === "number") {
//        result.push(data[i]*2);
//     }
//     else {
//         result.push(data[i] + ' -done');

//     }   
// }

// task22

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = data.length - 1; i >= 0; i--) {
    
//        result.push(data[i]);
   
// }
// console.log(result);

// task22

// const lines = 5;
// let result = '';
// for(let i = lines; i <= 0; i--) {
//     for (let j = 0; j < i; j++) {
//         result +='*';
//     }
//     result += '\n';

// }
// console.log(result);

// let result = '';
// const length = 5;
// for(let i = 0; i < length; i++) {
//     const spase1 = '   ';
//     const spase2 = '   ';
//     result +='*';
//     result +='\n';
    
// }
// console.log(result);

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);

const line = 6;
let res = '';
for (let i = 1; i <= line * 2; i++) {
    if (i % 2 === 0) continue;
    const stars     = '*'.repeat(i);
    const halfEmpty = ' '.repeat((line - i / 2));
    res += halfEmpty + stars + halfEmpty + '\n';
}
console.log(res);
