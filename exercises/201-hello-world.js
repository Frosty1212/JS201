// Write a function "hello" that takes one argument (a name), and returns a
// string that says hello to the name.
// Examples:
// - hello('Mustache') should return 'Hello, Mustache!'
// - hello('banana') should return 'Hello, banana!'
// - hello('DETROIT') should return 'Hello, DETROIT!'
//Hello, you!
function hello(name) {
    if(name.length == 0) {
        return 'Hello, World'
    }else {
    return `Hello, ${name}!`
    }
}
console.log(hello('John'))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "helloDefault" such that if no name is given it will return
// 'Hello, world!'
// Otherwise it behaves the same as the "hello" function.

//Hello, you!
function helloDefault(name) {
    if(name.length == 0) {
        return 'Hello, World'
    }else {
    return `Hello, ${name}!`
    }
}
console.log(helloDefault('John'))