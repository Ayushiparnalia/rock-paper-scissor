console.log('Hello, Welcome to the game!')

// array of options
let options = ['rock', 'paper', 'scissors'];

// function to randomly select computer choice
function computerChoice() {
    return options[(Math.floor(Math.random() * options.length))];
}

// function to take human choice
function humanChoice(){
    return prompt('rock/ paper/ scissors').toLowerCase();
}

// declaring human and computer score
let humanScore = 0;
let computerScore = 0;

// Function to play a round
function playARound(){
    for (i=1; i<6; i++){
        console.log('round '+ i);

        let computerSelect = computerChoice();
        let humanSelect = humanChoice();

        console.log('computer chose: ' + computerSelect);
        console.log('human chose: ' + humanSelect);

        if (humanSelect === computerSelect){
            console.log('Tie')
        }
        else if ((humanSelect=== 'paper' && computerSelect === 'rock') || (humanSelect === 'rock' && computerSelect ==='scissors') || (humanSelect === 'scissors' && computerSelect === 'paper')){
            console.log('Human-wins! round ' + i)
            humanScore = humanScore + 1;
        }
        else{
            console.log('Computer-wins! round ' + i)
            computerScore = computerScore + 1;
        }
    }
}

let play = playARound()

// Winner
console.log('Total computer score: ' + computerScore);
console.log('Total human score: '+ humanScore)
if (humanScore === computerScore){
    console.log("It's a Tie");
}
if (humanScore === computerScore){
    console.log("It's a Tie");
}
else if (humanScore > computerScore){
    console.log("Human is the ultimate Winner");
}
else {
    console.log("Computer is the ultimate Winner");
}


