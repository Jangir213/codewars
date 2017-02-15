/*
Description:

Adding values of arrays in a shifted way

You have to write a method, that gets two parameter:

1. An array of arrays with int-numbers
2. The shifting value
The method should add the values of the arrays to one new array.

The arrays in the array will all have the same size and this size will always be greater than 0.
The shifting value is always a value from 0 up to the size of the arrays.
There are always arrays in the array, so you do not need to check for null or empty.
*/

function addingShifted(arrayOfArrays, shift) {
  let shiftArr = new Array(shift).fill(0);
  let result = [...arrayOfArrays[0]];

  for (let i = 1; i < arrayOfArrays.length; i++) {
    const indent = shift * i;
    const curArr = arrayOfArrays[i];
    let tmpArr = [...result, ...shiftArr];

    result = tmpArr.map((v, idx) =>
      (idx < indent) ? v : v + curArr[idx - indent]
    );
  }

  return result;
}