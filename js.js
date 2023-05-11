//This program plays rock, paper, scissors

//check if player or computer wins the game
//array of choices in the game
const choice = ["rock", "paper", "scissors"];

//this function gets a random item from array
function getComputerChoice(arr){
//get random index value
const randomComputerChoice = Math.floor(Math.random()*arr.length);
//get random item
const item = arr[randomComputerChoice];
//return that item
return item;
}

console.log(game())

//plays 5 games to see final score
function game(){
    //declare variables
    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;
    
    //loop 5 times
    for(let i=1; i<=5; i++) {
      //take player input and make it all lowercase
      let playerSelection = prompt("Choose rock, paper, or scissors: ").toLowerCase();
      //computer plays
      let computerSelection = getComputerChoice(choice);
  
      //output
      console.log("Round " + i + ":");
      console.log("Computer plays: " + computerSelection);
      console.log("Player plays: " + playerSelection);
      let result = playRound(playerSelection, computerSelection);
      console.log(result);

      //calculate winner here
      if (result.includes("win")) {
        playerWins++;
      } else if (result.includes("lose")) {
        computerWins++;
      } else {
        draws++;
      }
    }
    //output final winner result
    return "Game over! Final score: Player " + playerWins + " - Computer " + computerWins + " - Draws " + draws;
  }
  

//determine who is the winner based on choice made
function playRound(playerSelection, computerSelection){
if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){
    return ("Invalid Input, please re-enter");
}
else if ((playerSelection === "rock") && (computerSelection === "scissors")){
    return ("You win! Rock beats Scissors" + " | player score: " + " computer score: ");
}
else if ((playerSelection === "rock") && (computerSelection === "paper")){
    return ("You lose! Paper beats rock" + " | player score: " + " computer score: ");
}
else if ((playerSelection === "paper") && (computerSelection === "scissors")){
    return ("You lose! Scissors beats paper" + " | player score: " + " computer score: ");
}
else if ((playerSelection === "paper") && (computerSelection === "rock")){
    return ("You win! Paper beats rock" + " | player score: " + " computer score: ");
}
else if ((playerSelection === "scissors") && (computerSelection === "paper")){
    return ("You win! Scissor beats paper" + " | player score: " + " computer score: ");
}
else if ((playerSelection === "scissors") && (computerSelection === "rock")){
    return ("You lose! Rock beats scissors" + " | player score: " + " computer score: ");
}
else
    return ("Tie game! Play again" + " | player score: " + " computer score: ");
}