/*
Description:

Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
*/

function findMissingLetter(array) {
  let result;
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const firstLetter = array[0].toLowerCase();
  const lastLetter = array[array.length - 1].toLowerCase();
  const isUpper = array[0] === array[0].toUpperCase();
  const begin = alphabet.indexOf(firstLetter);
  const end = alphabet.indexOf(lastLetter);
  const interval = isUpper ?
    alphabet.toUpperCase().slice(begin, end) :
    alphabet.slice(begin, end);

  interval
    .split('')
    .forEach(v => {
      if (!array.includes(v))
        result = v;
    });

  return result;
}