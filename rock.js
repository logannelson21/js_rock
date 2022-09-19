/* Random Choice Function */
function getComputerChoice(){
let choices = ['rock', 'paper', 'scissors'];
return choices [Math.floor(Math.random()*choices.length)];
}

/* Player vs Computer Round 1 */

function playIt(playerSelection, computerSelection){
    
    if (playerSelection === 'rock') {
     if (computerSelection === 'paper'){
         log = 'You lose! Paper destroys rock.';
     } else if (computerSelection === 'scissors'){
         log = 'You win! Rock smashes scissors.';
         else {
             log = 'You tied!';
         }
     }
    }
} else if (playerSelection === 'paper'){
    if (computerSelection === 'rock'){
        log = 'You win! Paper destroys rock.';
    } else if (computerSelection === 'scissors'){
        log = 'You lose! Scissors slice paper';
        else {
            log = 'You tied!';
        }
    }
} else if (playerSelection === 'scissors'){
    if (computerSelection === 'rock'){
        log = 'You lose! Rock smashes scissors';
        else if (computerSelection === 'paper'){
            log = 'You win! Scissors slice paper';
            else {
                log = 'You tied!';
            }
        }
    }
}
