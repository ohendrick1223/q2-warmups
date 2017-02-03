'use strict';
//TODO:WORKS!
// A ramp number is a number whose digits from left to right either only rise or stay the same. 1234 is a ramp number as is 1124. 1032 is not.
//I: A positive integer, n.
//O: true if the input is a ramp number, false if it is not

// a for loop that iterates over an integer. It will compare each indice to the indice before it, and if the current index is less than the previous index, it will return false. if the current index is greater than or equal to the previous index it will return true.


function rampItUp(integer) {
  var stringNumber = integer.toString();
  for (var i = 0; i < stringNumber.length; i++) {
    if (stringNumber.charAt(i) < stringNumber.charAt(i-1)) {
      return false;
    }
  } return true;
}
console.log(rampItUp(1234)); //returns true
console.log(rampItUp(1243)); //returns false
console.log(rampItUp(1224)); //returns true
