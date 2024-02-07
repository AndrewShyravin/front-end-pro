/*
count number of words in sentence
*/

function wordsCount(str) {
  return str.split(' ').length;
}

console.assert(wordsCount('hello world!') === 2);