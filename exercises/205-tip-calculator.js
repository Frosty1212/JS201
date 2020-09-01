// Write a function "tipAmount" that is given the bill amount and the level of
// service (one of good, fair and poor) and returns the dollar amount for the tip.
//
// Based on:
// good --> 20%
// fair --> 15%
// poor --> 10%
//
// Examples:
// tipAmount(100, 'good') --> 20
// tipAmount(40, 'fair') --> 6



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "totalAmount" that takes the same arguments as "tipAmount"
// except it returns the total as the tip amount plus the bill amount.
// Hint: this function may use "tipAmount" internally
//
// Examples:
// totalAmount(100, 'good') --> 120
// totalAmount(40, 'fair') --> 46



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "splitAmount" that takes a bill amount, the level of service,
// and the number of people to split the bill between. It should return the final
// amount for each person.
//
// Examples:
// splitAmount(100, 'good', 5) --> 24
// splitAmount(40, 'fair', 2) --> 23

// function tipAmount(price, service, people) {
//     if(service === "good") {
//         return (price + price * .2)
//     } else if(service === "fair") {
//         return (price * .15) / people;
//     } else (service === "bad"); {
//         return (price * .10) / people;
//     }
// }
// console.log(tipAmount(100, "good", 2))

function tipAmount(price, service, people) {
    let total = 0;
    if(service === "good") {
        total += (price + price * .2)
    if(service === "fair") {
        total += (price + price * .2)
    if(service === "bad") {
        total += (price + price * .2)
        }
    }
}
    return total / people
}
console.log(tipAmount(100, "good", 2))
