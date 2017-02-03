'use strict';

function array() {
  var newArray = {
    length: 0,
    add: function add(value) {
      [].push.call(this, value);
    },
    remove: function remove(val) {
      [].pop.call(this, val);
    }
  };
  newArray.add(1);
  console.log(newArray.length);
  newArray.add(76);
  console.log(newArray.length);
  newArray.add("String");
  console.log(newArray.length);
  newArray.add(true);
  console.log(newArray.length);
  newArray.add(false);
  console.log(newArray.length);
  newArray.remove();
  console.log(newArray.length);
  newArray.remove();
  console.log(newArray.length);
  newArray.remove();
  console.log(newArray.length);

console.log(newArray);

} array();




// Keegans version
(function(){

  function array() {
  var newArray = {};
  newArray.length = 0;
  //console.log(newArray)

  newArray.push = function (valueINP) {
    console.log("PUSH value is "+valueINP);
    var pushLength = newArray.length;
    newArray[pushLength] = valueINP;
    //console.log(newArray);
    newArray.length ++;
    //console.log(newArray);
    return newArray;
  };
  newArray.pop = function () {
   console.log("pop pop pop");
    var popLength = newArray.length - 1;
    delete newArray[popLength];
    newArray.length --;
    return newArray;
  };
  return newArray; //end of array()
}

// test area here
  var arr = array();
  arr.push("hello");
  arr.push("world");
  arr.push("worls");
  console.log(arr);
  arr.pop();
  console.log(arr);

})();
