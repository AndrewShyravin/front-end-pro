/*
count number of words in sentence
*/

function wordsCount(str) {
  return str.split(' ').length;
}

console.assert(wordsCount('hello world!') === 2);
console.assert(wordsCount('hello world everyone!') === 3);
