/*
Description:

Little Annie is very excited for upcoming events. She want's to know how many days she have to wait for a specific event.

Your job is to help her out.

Task: Write a function which returns the number of days from today till the given date. The function will take a Date object as parameter. You have to round the amount of days.

If the event is in the past, return "The day is in the past!" 
If the event is today, return "Today is the day!" 
Else, return "x days"

PS: This is my first kata. I hope you have fun^^ 
*/

function countDays(d) {
  let result = '';
  const msInDay = 86400000;
  const now = new Date()
  let event = new Date(d);

  if (now - event > msInDay) result = 'The day is in the past!';
  else if (now - event > 0) result = 'Today is the day!';
  else result = Math.round((event - now) / msInDay) + ' days'; 

  return result;
}