/*
Description:

Given a string, swap the case for each of the letters.

e.g. CodEwArs --> cODeWaRS
*/

function swap(str) {
  return str
    .split('')
    .map(v =>
      (v == v.toUpperCase()
        ? v.toLowerCase()
        : v.toUpperCase()))
    .join('');
}