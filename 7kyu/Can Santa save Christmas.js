/*
Description:

Can Santa save Christmas?

Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own. 
But he has only 24 hours left. Can he do it?
Your job is to determine if Santa can distribute all the presents in 24 hours. 

Your Task:

You will get an array as input with time durations as string in the following format: 
"hh:mm:ss"

Return true or false whether he can do it or not. 
*/

function determineTime(durations) {
  const secPerDay = 24 * 60 * 60;
  const sum = durations
    .map(v => getSec(v))
    .reduce((p, c) => p + c, 0);
  return sum <= secPerDay;
}

function getSec(format) {
  const arr = format.split(':');
  return parseInt(arr[0] * 60 * 60) + parseInt(arr[1] * 60) + parseInt(arr[2]);
}