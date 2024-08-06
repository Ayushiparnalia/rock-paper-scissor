console.log('Hello, Welcome to the game!')
let options = ['rock', 'paper', 'scissors'];

// function to randomly select computer choice
function computerChoice() {
    let computerSelect = options[(Math.floor(Math.random() * options.length))];
    return computerSelect;}

// function to take human choice
function humanChoice(){
    let humanSelect = prompt('rock/ paper/ scissors');
    humanSelect = humanSelect.toLowerCase();
    return humanSelect;
}

 // Storing values for global access //
 let computerSelect = computerChoice();
 let humanSelect = humanChoice();

 console.log('computer chose: ' + computerSelect);
 console.log('human chose: ' + humanSelect);

 //function to play rounds
 let humanScore = 0;
 let computerScore = 0;
 function playGame(){
    if (humanSelect === computerSelect){
        console.log('Tie')
    }
    else if ((humanSelect=== 'paper' && computerSelect === 'rock') || (humanSelect === 'rock' && computerSelect ==='scissors') || (humanSelect === 'scissors' && computerSelect === 'paper')){
        console.log('Human-wins!')
        humanScore =+ 1;
        console.log(humanScore)
    }
    else{
        console.log('Computer-wins!')
        computerScore =+ 1;
        console.log(computerScore);
    }
 }
 function playRounds(){
    for (i=1; i<6; i++){
        console.log('round: ' + i);
        humanChoice();
        computerChoice();
        playGame();
        if (humanScore > computerScore){
            console.log('round ' + i + 'winner is human');
        }
        else{
            console.log('round ' + i + 'winner is computer');
        }
    }
}
playRounds()