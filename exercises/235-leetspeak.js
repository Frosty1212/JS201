// Write a function "leetspeak" which is given a string, and returns the
// leetspeak equivalent of the string.
// To convert text to its leetspeak version, make the following substitutions:
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
//
// HINT: What is the best data structure to represent the substitutions?
//
// Examples:
// leetspeak('Leet') --> "l337"
// leetspeak('ORANGE') --> "0r4n63"

let leetSpeak = (str) => { //better way of writing the function =>
    //Deciphered reference letters
    let code = {
        A: 4, O: 0,
        E: 3, S: 5,
        G: 6, T: 7,
        L: 1,
    }
    str = str.toUpperCase();
    let decipher = ''; //takes the string and converts it
  for(let i = 0 ; i < str.length; i++){
    decipher += code[str[i]];
  }
  return decipher;
}        
console.log(leetSpeak('Leet'))//overall same concept as ceaser cipher