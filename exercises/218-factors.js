// Write a function "gcd" that returns the Greatest Common Divisor of two numbers
// If no GCD exists, return 1
// Greatest Common Divisor --> https://tinyurl.com/gr84qca
//
// Examples:
// gcd(5, 1) --> 1
// gcd(3, 15) --> 3
// gcd(50, 20) --> 10

var gcd = function(a, b) {
   if (!b) {
     return a;
   }
 
   return gcd(b, a % b);
 }
 console.log(gcd(20, 10))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "factors" which is given a number and returns an array
// containing all its factors.
// What are factors? --> https://tinyurl.com/gncg62o
//
// Examples:
// factors(1) --> [1]
// factors(12) --> [1, 2, 3, 4, 6, 12]
// factors(42) --> [1, 2, 3, 6, 7, 14, 21, 42]

function factors(num) {
    var arr = [], i;
    for (i = 1; i <= Math.floor(Math.sqrt(num)); i++)
     if (num % i === 0)  {
      arr.push(i);
      if (num  / i !== i)
       arr.push(num  / i);
     }
     arr.sort(function(x, y) {
        return x - y;});  // numeric sort
        return arr;
}
   console.log(factors(20))
