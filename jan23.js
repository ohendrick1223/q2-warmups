
'use strict';
function factorial(num)
//Check if number is a positive integer, a factorial has to be a positive integer
//input: a number less than 0
//output: -1
{
  if (num < 0) {
      return -1;
  }
  //check if number is 0, a factorial of 0 is always 1
  //input: 0
  //output: 1
  else if (num === 0) {
      return 1;
  }
//multiply valid input by the number one less than itself. until reaching 0.
//input: num * num-1
//output: factorial result (if number is 5, code would run: 5*4*3*2*1=120).
  else {
      return (num * factorial(num - 1));
  }
}

var result = factorial(-1);
var result2 = factorial(0);
var result3 = factorial(8);

factorial(result);
factorial(result2);
factorial(result3);
