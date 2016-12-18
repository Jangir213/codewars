/*
Description:

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.
*/

function getCount(str) {
  return (str.match(/[aeiou]/ig) || []).length;
}