const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let guess = prompt("Guess a number between 1 and 10");
let guessAttempt = 1

//keep track of the number of guess attamepts 

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

// TODO: Use a loop to create a number guessing game
//  1) Ask the user to enter a number and assign that value to the `guess` variable


//  2) End the loop when the user's guess matches the random number

while(+guess !== randomNumber){
    guess = prompt("Guess a number between 1 and 10")
    guessAttempt++
}

//  3) Display a message letting the user know they guessed the number

main.innerHTML = `<h1>You guessed correctly! It was the number ${randomNumber} and it took ${guessAttempt} attempts to guess correctly.</h1>`