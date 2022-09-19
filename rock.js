/* Random Choice Function */
function getComputerChoice(){
let choices = ['rock', 'paper', 'scissors'];
return choices [Math.floor(Math.random()*choices.length)];
}

function playIt(playerSelection, computerSelection){
    
    if (playerSelection === 'rock') {
     if (computerSelection === 'paper') {
         log = 'You lose! Paper destroys rock.';
     } else if (computerSelection === 'scissors'){
         log = 'You win! Rock smashes scissors.';
         else {
             log = 'You tied!';
         }
     }
    }
} else if
