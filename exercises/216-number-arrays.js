// Write a function "max" that takes an array of numbers returns the highest
// number in the array.

let bArray = [1, 2, 7, -3, -4, 5, 6];
function  max(bArray) { 
    var maxValue = bArray[0]; 
    for(let i = 1; i < bArray.length; i++ ){ 
      if(bArray[i] > maxValue){ 
         maxValue = bArray[i]; 
      } 
    } 
    return maxValue; 
  }
  console.log(max(bArray));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "sumNumbers" which is given an array of numbers and returns
// the sum of the numbers.
// Example:
// sumNumbers([1, 4, 8]) --> 13

function sumNumbers(arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  var myArr1 = [1, 2, 3, 4];

  console.log(sumNumbers(myArr1));


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positives" which is given an array of numbers and
// returns a new array containing only the positive numbers within the given array.
// Examples:
// positives([1, -3, 5, -3, 0]) --> [1, 5]
// positives([1, 2, 3]) --> [1, 2, 3]
// positives([-1, -2, -3]) --> []
// let arr2 = [1, 2, 3, -3, -4, 5]


function postitives(arr2) {
    let newArrPositive = [];
    for(let i = 0; i < arr2.length; i++) {
        if(arr2[i] >= 0) {
            newArrPositive += arr2[i];
        }
    }
    return newArrPositive;
}
console.log(postitives(arr2));



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "evens" which takes an array of numbers and returns a new
// array containing only the even numbers in the given array.
// Hint: you may want to re-use your "isEven" function from 01-predicate-functions.js

let arr1 = [1, 2, 3, -3, -4, 5, 6];
function evens(arr1) {
    let newArrayEven = [];
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] > 0) {
            if(arr1[i] % 2 == 0) {
                newArrayEven += arr1[i];
            }
        }
    }
    return newArrayEven;
}
console.log(evens(arr1));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "odds" which takes an array of numbers and returns a new
// array containing only the odd numbers in the given array.
// Hint: you may want to re-use your "isOdd" function from 01-predicate-functions.js

let arr1 = [1, 2, 3, -3, -4, 5, 6];
function odds(arr1) {
    let newArrayOdd = [];
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] > 0) {
            if(arr1[i] % 2 !== 0) {
                newArrayOdd += arr1[i];
            }
        }
    }
    return newArrayOdd;
}
console.log(odds(arr1));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "integers" which takes an array of numbers and returns a new
// array containing only the integers in the given array.
// Hint: Do you need a new predicate function for this?
//
// Example:
// integers([3.14, 2.4, 7, 8.1, 2]) --> [7, 2]

var mixedNum = [1.1, 3, 2.1, 4]
function integers(mixedNum) {
let notMixedNum = [];
for(let i = 0; i < mixedNum.length; i++) {
    if(mixedNum[i] % 1 == 0) {
         notMixedNum += mixedNum[i];
        }
    }
    return notMixedNum
}
console.log(integers(mixedNum));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "squareDance" which takes an array of numbers and returns a
// new array containing the result of squaring each of the numbers in the given array.
//
// Example:
// squareDance([1, 2, 3]) --> [1, 4, 9]

let arr1 = [1, 2, 3];
function squareDance(arr1) {
    let newArraySquared = [];
    for(let i = 0; i < arr1.length; i++) {
        newArraySquared += (Math.pow(arr1[i], 2)); 
    }
    return newArraySquared;
}
console.log(squareDance(arr1));