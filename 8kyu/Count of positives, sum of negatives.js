/*
Description:
  Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
*/

function countPositivesSumNegatives(input) {
  if (!input || input.length === 0)
    return [];
  const countPositives = input
    .filter(v => v > 0)
    .length;
  const sumNegatives = input
    .filter(v => v < 0)
    .reduce((a, b) => a + b, 0);
  return [countPositives, sumNegatives];
}