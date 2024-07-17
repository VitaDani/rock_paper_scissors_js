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

console.log(getComputerChoice());