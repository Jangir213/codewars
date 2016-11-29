/*
Description:
  Training JS #2:
  Basic data types--Number

In javascript, Number is one of basic data types. It can be positive: 1,2,3, negative:-1,-100 , integer:123,456, decimal:3.1415926,-8.88 etc..

Numbers can use operators such as + - * / %
*/

var v1 = 50; v2 = 100, v3 = 150, v4 = 200, v5 = 2, v6 = 250

function equal1() {
  var a = v1
  var b = v1
  return a + b;
}

function equal2() {
  var a = v3; 
  var b = v1; 
  return a - b;
}

function equal3() {
  var a = v1;
  var b = v5;
  return a * b;
}

function equal4() {
  var a = v4; 
  var b = v5;
  return a / b;
}

function equal5() {
  var a = v2;
  var b = v4;
  return a % b;
}