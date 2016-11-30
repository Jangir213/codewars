/*
Description:
STORY:
  You are going to make toast fast, you think that you should make multiple pieces of toasts and once. So, you try to make 6 pieces of toast.

PROBLEM:
  You forgot to count the number of toast you put into there, you don't know if you put exactly six pieces of toast into the toasters.

WHAT TO DO: 
  Make a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.
*/

function sixToast(num) {
  return (num < 6) ? 6 - num : num - 6;
}