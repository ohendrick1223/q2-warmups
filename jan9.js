// Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each. Write tests
'use strict';
 var plusOneSum=[1, 2, 3, 4]; // 14
//
// function plusOne(arr) {
//   var total;
//   for (var i = 0; i<arr.length; i++) {
//     total.push(i + 1);
//   }
 //  arr.reduce()
 // totalSum.reduce(function(a, b) {
 //   }, 0);
 //   return a + b + 1;
 // }

 function plusOne(array) {
   return plusOneSum.reduce(function(a, b) {
     return a + b + 1;
     }, 0);
 } plusOne();

module.exports = plusOne;
