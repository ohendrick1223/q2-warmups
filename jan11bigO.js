'use strict';
//TODO: unfinished
// Write a function that is O(1) constant time relative to input. Input could be any length, small or large, but still, only one step needs to happen

function displayChosenItemInArray(array) {
   return array[5];
}
console.log( displayChosenItemInArray([1, 2, 3, 4, 5, 67, 8, 9, 10]) );

// Write a function that is O(n) linear time-based on the input ex: if array has 10 items, print 10 times, if 1000 items, print 1000 times. n is the number of items in the array

function checkTheArrayForItem(array, itemIWant) {
  for (var i = 0; i < array.length; i++) {
    if ([i] === itemIWant) {
      return true;
    }
  }
  return false;
}
console.log( checkTheArrayForItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8) );

// Write a function that is O(n^2) quick sort, bubble sort, insertion sort, selection sort. Quadratic (exponential) time. Ex. two loops nested. Outerloop runs n number of times (number of items in an array for ex), inner loop runs n times for each iteration of the loop. If array has 10 items, print 100 times, 1,000 items, print 1,000,000 times.

// n can be the actual input (like an integer) or the size of the input (the number of items in an array, object etc..)


function bSort(array){
   var length = array.length;
   for (var i = length - 1; i >= 0; i--){
     for(var j = 1; j <= i; j++){
       if(array[j-1] > array[j]){
           var temp = array[j-1];
           array[j-1] = array[j];
           array[j] = temp;
        }
     }
   }
   return array;
}
bSort([7,5,2,4,3,9]); //[2, 3, 4, 5, 7, 9]
bSort([9,7,5,4,3,1]); //[1, 3, 4, 5, 7, 9]
bSort([1,2,3,4,5,6]); //[1, 2, 3, 4, 5, 6]
