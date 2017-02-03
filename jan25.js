'use strict';
//What it does: Takes a random string as an input. Say "Ilovedogs1234NahNeyNewNo"
//It sets a variable equal to zero that will be used later in the function to store the final returned answer
//It iterates through the string input, and changes all characters to lower case if they're aren't already
//It stores the string at each iteration in the variable decoded1
//It stores the string at each iteration + 1 in the variable deocded2

function decodeString(string) {
  var returnValue = 0;

	for(var i = 0; i < string.toLowerCase().length; i++) {
		var decoded1 = decodeCharacter(string[i]);
		var decoded2 = decodeCharacter(string[i+1]);

		if(decoded1 < decoded2) {
			returnValue -= decoded1;
      console.log(returnValue);
      console.log(decoded1);
		}
		else {
			returnValue += decoded1;
		}
	}
  console.log(returnValue);
	return returnValue;
} decodeString("Ilovedogs1234NahNeyNewNo");
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ //

function decodeCharacter(character) {

	if(character === 'i') {
		return 1;
	}

	if(character === 'v') {
		return 5;
	}

	if(character === 'x') {
		return 10;
	}

	if(character === 'l') {
		return 50;
	}

	if(character === 'c') {
		return 100;
	}
}
