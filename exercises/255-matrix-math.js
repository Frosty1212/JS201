// Write a function "matrixAdd" which is given two two-dimensional arrays, and
// returns a new two-dimensional array containing their matrix sum.
// Example:
// > matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]])
// [ [ 6, 5 ], [ 3, 4 ] ]

var firstArr = [[1, 2],[3, 4]]
var secondArr= [[4, 3],[2, 1]]
  
  function matrixAdd(arr1, arr2) {
      var newArr = []
      for(let i = 0; i < arr1.length; i++){
          for(let j = 0; j < 2; j++){
              newArr.push(arr1[i][j] + arr2[i][j]);
          }
      } return newArr
  }
console.log(matrixAdd(firstArr, secondArr))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "matrixMultiply" which is given two two-dimensional arrays;
// you can assume the matricies are of size 2x2.
// It should return the result of matrix multiplication of the two matricies.
// What is matrix multiplication? https://tinyurl.com/j6jgh2u
//
// Example:
// > matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]])
// [ [22,  8], [27, 10] ]

function matrixMultiply(arr1, arr2) {
    var newArr = []
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < 2; j++){
            newArr.push(arr1[i][j] * arr2[i][j]);
        }
    } return newArr
}
console.log(matrixMultiply(firstArr, secondArr))
