'use strict';
let words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
];

let word = words[Math.floor(Math.random() * words.length)];
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length;

while (remainingLetters > 0) {
    alert(answerArray.join(""));
    let guess = prompt("Guess a lette");
}