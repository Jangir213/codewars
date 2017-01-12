/*
Description:

You'll be given a list of two strings, and each will contain exactly one colon in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.
Python

tail_swap(['abc:123', 'cde:456']) == ['abc:456', 'cde:123']
tail_swap(['a:12345', '777:xyz']) == ['a:xyz', '777:12345']
Javascript

tailSwap(['abc:123', 'cde:456']) == ['abc:456', 'cde:123']
tailSwap(['a:12345', '777:xyz']) == ['a:xyz', '777:12345']
*/

function tailSwap(arr) {
  let aa = arr[0].split(':')[0];
  let ab = arr[0].split(':')[1];
  let ba = arr[1].split(':')[0];
  let bb = arr[1].split(':')[1];
  
  return Array.of(`${aa}:${bb}`, `${ba}:${ab}`);
}