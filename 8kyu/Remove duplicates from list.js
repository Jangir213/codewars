/*
Description:
  Write function distinct that removes duplicate from list of numbers.

The order of the sequence needs to stay the same.
*/

function distinct(a) {
  let result = [];
  a.forEach(v => {
    if (!~result.indexOf(v))
      result.push(v);
  });
  return result;
}