// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Complete the removeZAnimals function as described below:

function removeZAnimals () {
  // 1) declare an array with some strings
  const animals = ["alligator", "zebra", "crocodile", "giraffe", "gorillaz",];
    var animalsWithoutZ = animals.filter(function(element) {
      return element.charAt(0) !== 'z';
    })
    return animalsWithoutZ;
};
console.log(removeZAnimals());

  // 2) loop through "animals"

  // 3) add every item in "animals" to "animalsWithoutZ" unless the animal name
  //    contains the letter "z"
  //    HINT: remember you can search within a string

  // 4) return "animalsWithoutZ"


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "removeAnyWordWithZ" that takes 1 argument: an array of strings
// It should return a new array that has all of the items in the passed-in array minus
// any words that contain the letter 'z' or 'Z' (case-insensitive)


var removeAnyWordWithZ = animals2.filter(function(element) {
  return element !== 'z';
})
console.log(removeAnyWordWithZ(animals2));


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "removeWordsWithChar" that takes 2 arguments:
// 1) an array of strings
// 2) a string of length 1 (ie: a single character)
// It should return a new array that has all of the items in the first argument
// except those that contain a character in the second argument (case-insensitive).
//
// Examples:
// removeWordsWithChar(['aaa', 'bbb', 'ccc'], 'b') --> ['aaa', 'ccc']
// removeWordsWithChar(['pizza', 'beer', 'cheese'], 'E') --> ['pizza']

var animals2 = ["alligator", "zebra", "crocodile", "giraffe", "gorillaz",];
var removeAnyWordWithChar = (strArray, char) => {  var newArray = strArray.filter(
(word) => 
word.indexOf(char.toLowerCase()) == -1 && 
word.indexOf(char.toUpperCase()) == -1  );  
return newArray};
console.log(removeAnyWordWithChar(animals2, 'l'))