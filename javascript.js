// Create the function to have the computer "pick" its choice
function getComputerChoice() {
    rand_num = Math.random();
    whole_num = rand_num * 3;
    int_num = Math.floor(whole_num);

    switch (int_num) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Create the function to get human choice as a prompt input
let container = document.querySelector(".container");

container.addEventListener('click', (event) => {
    let target = event.target;

    switch (target.id) {
        case 'rock':
            playRound(target.id);
            break;
        case 'paper':
            playRound(target.id);
            break;
        case 'scissors':
            playRound(target.id);
            break;
    }
});

// Create the function that allows a round of the game to be played
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice;
    computerChoice = getComputerChoice();

    if (humanChoice == computerChoice) {
        console.log("This round is a draw.");
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        console.log("The computer wins this round. Paper beats Rock!")
        computerScore++;
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log("The player wins this round. Rock beats Scissors!");
        humanScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log("The player wins this round. Paper beats Rock!");
        humanScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        console.log("The computer wins this round. Scissors beats Paper!");
        computerScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        console.log("The computer wins this round. Rock beats Scissors!");
        computerScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log("The player wins this round. Scissors beats Paper!");
        humanScore++;
    }
    console.log(`The computer has a score of ${computerScore} and the player has a score of ${humanScore}`);
}

// Create two variables to keep the score for each player
let humanScore = 0;
let computerScore = 0;