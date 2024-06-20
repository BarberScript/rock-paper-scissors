let humanScore = 0;
let computerScore = 0;
let computerChoice;
let humanChoice;
const maxScore = 5;

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
      return "rock";
    } else if (computerChoice === 1) {
      return "scissors";
    } else {
      return "paper";
    }
}

function getHumanChoice() {
    humanChoice = prompt("Rock, Paper, Scissors")
    humanChoice = humanChoice.toLowerCase()
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    return "Tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    return "You Win!";
  } else {
    computerScore++;
    return "Computer Wins!";
  }
}

function gameLoop() {
    while 
    (humanScore < maxScore && computerScore < maxScore) 
    {
      computerChoice = getComputerChoice();
      humanChoice = getHumanChoice();

      let roundResult = playRound(humanChoice, computerChoice);
      console.log(
        `You chose ${humanChoice}. Computer chose ${computerChoice}. Result: ${roundResult}`
      );
    }

    if (humanScore === maxScore) {
        alert ("You Win!")
    } else if (computerScore === maxScore) {
        alert ("Computer Wins!")
    }
}

gameLoop();