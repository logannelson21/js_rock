/* Random Choice Function */

const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
const choice = options [Math.floor(Math.random()* options.length)];
return choice;
}

/* Player vs Computer */

function checkWinner(playerSelection , computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    } else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper")||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    }
    else {
        return "Computer"
    }
}

function playRound(playerSelection , computerSelection){
    const result = checkWinner(playerSelection , computerSelection);
    if(result == "Tie"){
    return "It's a tie!"
    } else if(result == "Player"){
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }

}

function getPlayerChoice(){
    let validInput = false;
    while(validInput == false){
        const choice = prompt("Rock Paper Scissors");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validInput = true;
            return choiceInLower;
        }
    }
}

function game(){
    let scorePlayer = 0;
    let = scoreComputer = 0;
    for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection , computerSelection));
        if(checkWinner(playerSelection , computerSelection) == "Player"){
            scorePlayer++;
        }
        else if(checkWinner(playerSelection , computerSelection) == "Computer"){
            scoreComputer++;
        }
        if(scorePlayer > scoreComputer){
            console.log("You won, this is your biggest achievement to date");
        }
        else if(scorePlayer < scoreComputer){
          console.log("You lose, you should be ashamed.");  
        }
        else{
            console.log('You tied, try again.');
        }
    }
    console.log("Game Over")
}

game()