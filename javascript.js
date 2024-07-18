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
function getHumanChoice() {
    let human_choice = prompt("Pick between rock, paper, and scissors.");
    return human_choice.toLowerCase();
}

// Create the function that allows a round of the game to be played
function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
}

// Create two variables to keep the score for each player
let humanScore = 0;
let computerScore = 0;

console.log(getComputerChoice());
let x = getHumanChoice();
console.log(x);