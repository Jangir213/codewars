/*
Description:
  Write a function to split a string and convert it into an array of words.

string_to_array("Robin Singh") => ["Robin", "Singh"]

string_to_array("I love arrays they are my favorite") => ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

function stringToArray(string) {
  return string.split(' ');
}