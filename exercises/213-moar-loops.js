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

function removeAnyWordWithZ() {
const animals2 = ["alligator", "zebra", "crocodile", "giraffe", "gorillaz",];
var wordsWithOutZ = animals2.filter(function(element) {
  for(let i = 0; i <= animals2.length; i++) {
    if (element.charAt(i) !== 'z' || "Z") {
      return element;
    }
  }
}) 
return wordsWithOutZ;
};
console.log(removeAnyWordWithZ());
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

function removeAnyWordWithZ(letter) {
  const animals2 = ["alligator", "zebra", "crocodile", "giraffe", "gorillaz",]
  let i = 0;
  var wordsWithOutZ = animals2.filter(function(element) {
    if (element.charAt(i) !== letter || letter.toUpperCase()) {
      i++;
        return element;
    }
  }) 
  return wordsWithOutZ;
  };
  console.log(removeAnyWordWithZ());