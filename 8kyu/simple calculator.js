/*
Description:
  You are required to create a simple calculator that returns the result of addition ,subtraction , multiplication and division of two numbers. 
  If the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

example:
  calculator(1,2,"+"); //=> result will be 3
  calculator(1,2,"&"); //=> result will be "unknown value"
  calculator(1,"k","*"); //=> result will be "unknown value"
*/

function calculator(a, b, sign) {
  if (isNaN(a) || isNaN(b) || /[^-\+\*\/]/.test(sign))
    return 'unknown value';
  switch(sign) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
  }
}