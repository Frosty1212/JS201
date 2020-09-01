// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****

function printSquare(row, col) {
    for(let i = 0; i < col; i++) {
        for(let j = 0; j < row; j++) {
            process.stdout.write(" * ");
        }
        console.log();
    }
}
printSquare(6, 6)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******

function printHallowBox(row, col) {        
    for (let i = 0; i < 1; i++) { //Top Row
        for (let j = 0; j < col; j++) {
                process.stdout.write(" * ");
            }
            console.log();
            for (let i = 0; i < row -2; i++) { //Inside Row
                for (let j = 0; j < 1; j++) {
                    process.stdout.write(" * ");
                }
                for (let j = 0; j < col; j++) { 
                    process.stdout.write("  ");
                }
                for (let j = 0; j < 1; j++) {
                    process.stdout.write(" * ")
                }
                console.log();
            }
        for (let i = 0; i < 1; i++) { //Bottom Row
            for (let j = 0; j < col; j++) {
                process.stdout.write(" * ")
            }
                console.log();
        }
    }    
}        
printHallowBox(6, 6);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************

function printBanner(text) {
    for (let i = 1; i <= text.length + 2; i++) {
        process.stdout.write("*");
    } console.log()
    console.log(`*${text}*`);
    for (let i = 1; i <= text.length + 2; i++) {
        process.stdout.write("*");
    }
}
printBanner("The Best Banner");
console.log()