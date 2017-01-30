/*
Description:

Task:

Given an array arr of strings complete the function landPerimeter by calculating the total perimeter of all the islands. Each piece of land will be marked with 'X' while the water fields are represented as 'O'. Consider each tile being a perfect 1 x 1piece of land. Some examples for better visulatization:

['XOOXO',
 'XOOXO',
 'OOOXO',
 'XXOXO',
 'OXOOO']
*/

function landPerimeter(arr) {
  let perimeter = 0;

  arr.forEach((v, i, a) => {
    perimeter += checkLine(i, a);
  });

  return `Total land perimeter: ${perimeter}`;
}

function checkLine(idx, arr) {
  let res = 0;

  const lineArr = arr[idx].split('');
  const prevLineArr = arr[idx - 1] ? arr[idx - 1].split('') : [];
  const nextLineArr = arr[idx + 1] ? arr[idx + 1].split('') : [];

  lineArr.forEach((v, i) => {
    if (v === 'X')
      res += checkSym(i, prevLineArr, lineArr, nextLineArr);
  });

  return res;
}

function checkSym(symIdx, prevLineArr, lineArr, nextLineArr) {
  const maxPerimeter = 4;
  let res = maxPerimeter;

  if (lineArr[symIdx - 1] === 'X')
    res -= 1;
  if (lineArr[symIdx + 1] === 'X')
    res -= 1;
  if (prevLineArr[symIdx] === 'X')
    res -= 1;
  if (nextLineArr[symIdx] === 'X')
    res -= 1;

  return res;
}