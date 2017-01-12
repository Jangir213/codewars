/*
Description:

You'll be given a string of characters as an input.

Create a function reverse_slice/reverseSlice that returns a list of strings: (a) in the reverse order of the original string, and (b) with each successive string starting one character further in from the end of the original string.

For example:

'123'  becomes  ['321','21','1']
and

'abcde'  becomes  ['edcba','dcba','cba', 'ba', 'a']
*/

function reverseSlice(str) {
  let result = [];
  str = str.split('').reverse().join('');
  for (let i = 0; i < str.length; i++)
    result.push(str.slice(i));  
  return result;  
}