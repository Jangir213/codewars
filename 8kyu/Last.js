/*
Description:
  Find the last element of a list.

Example:
  last( [1,2,3,4] ) // => 4
  last( "xyz" )     // => z
  last( 1,2,3,4 )   // => 4
*/

function last(...arg) {
  var last = arg[arg.length - 1];
  return last[last.length - 1] || last;
}