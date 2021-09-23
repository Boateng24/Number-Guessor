let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  return Math.floor(Math.random() * 9);
};
function compareGuesses(humanGuess, computerGuess, targetNumber, getAbsoluteDistance){
if (humanGuess < 0 || humanGuess > 9){
  alert("Your guess is out of range")
}
if (Math.abs(humanGuess-targetNumber) < Math.abs(computerGuess-targetNumber)) {
  console.log("You Wins!!!")
  return true
};
if(Math.abs(computerGuess-targetNumber)< Math.abs(humanGuess-targetNumber)){
  console.log("Computer Wins!!!")
  return false
}
else {
console.log("You Wins!!!");
return true
}
};

function updateScore(winner){
  if (winnner='human'){
    humanScore ++;
  }
  else if(winner = 'computer'){
    computerScore ++;
  }
}

function advanceRound(){
  currentRoundNumber ++;
}

function getAbsoluteDistance(){
  const humanDifference = Math.abs(targetNumber - humanGuess)
const computerDifference = Math.abs(targetNumber - computerGuess)
  console.log(humanDifference);
  console.log(computerDifference);
}

