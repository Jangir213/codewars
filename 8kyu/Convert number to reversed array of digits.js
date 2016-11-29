
/*
Description:
  Convert number to reversed array of digits

You have to return the digits of this number within an array in reverse order.

Example:
  348597 => [7,9,5,8,4,3]
*/

function digitize(n) {
    return n.toString()
        .split('')
        .map(v => +v)
        .reverse();
} 
