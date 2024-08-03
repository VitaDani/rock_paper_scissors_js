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

// Create the ability to get human choice as a clickable button
let container = document.querySelector(".container");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

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

// Create the query that lets the user know who wins the current round
let winner = document.querySelector("#winner");

// Create the function that allows a round of the game to be played
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice;
    computerChoice = getComputerChoice();

    if (humanChoice == computerChoice) {
        winner.textContent = `This round is a draw. Both players picked ${humanChoice}`;        
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        winner.textContent = "The computer wins this round. Paper beats Rock!";        
        computerScore++;
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        winner.textContent = "The player wins this round. Rock beats Scissors!";        
        humanScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        winner.textContent = "The player wins this round. Paper beats Rock!";        
        humanScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        winner.textContent = "The computer wins this round. Scissors beats Paper!";        
        computerScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        winner.textContent = "The computer wins this round. Rock beats Scissors!";        
        computerScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        winner.textContent = "The player wins this round. Scissors beats Paper!";
        humanScore++;
    }
    h_score.textContent = humanScore;
    c_score.textContent = computerScore;

    if (humanScore == 5) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;

        winner.textContent = "The player has won the game with 5 points.";
        start.style.display = "block";
    } else if (computerScore == 5) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;

        winner.textContent = "The computer has won the game with 5 points. Better luck next time.";
        start.style.display = "block";
    }
}

// Create two variables to keep the score for each player
let humanScore = 0;
let computerScore = 0;

// Use querySelectors to have the page display the score
let human_score = document.querySelector("#human_score");
let computer_score = document.querySelector("#computer_score");
let h_score = document.createElement("p");
let c_score = document.createElement("p");

h_score.style.textAlign = "center";
c_score.style.textAlign = "center";


human_score.appendChild(h_score);
computer_score.appendChild(c_score);

// Creating the start button functionality
let start = document.querySelector("#start");
rock.disabled = true;
paper.disabled = true;
scissors.disabled = true;

function startGame() {
    start.addEventListener("click", () => {
        rock.disabled = false;
        paper.disabled = false;
        scissors.disabled = false;
        h_score.textContent = 0;
        c_score.textContent = 0;

        start.style.display = "none";
        winner.textContent = "The computer is ready to play.";
    });
}

startGame();