// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'
let rockPaperScissors = (player1, player2) => {
    if(player1 == 'paper' && player2 == 'paper' || player1 == 'scissors' && player2 == 'scissors' || player1 == 'rock' && player2 == 'rock' ) {
        return 'draw'
    }else if(player1 == 'scissors' && player2 == 'rock' || player1 == 'paper' && player2 == 'scissors' || player1 == 'rock' && player2 == 'paper') {
        return 'player 2 wins'
    }else if(player1 == 'scissors' && player2 == 'paper' || player1 == 'rock' && player2 == 'scissors' || player1 == 'paper' && player2 == 'rock') {
        return 'player 1 wins'
    }
}
console.log(rockPaperScissors('rock', 'rock'))
    