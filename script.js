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

if (humanSelect === computerSelect){
    console.log('Tie')
}
else if ((humanSelect=== 'paper' && computerSelect === 'rock') || (humanSelect === 'rock' && computerSelect ==='scissors') || (humanSelect === 'scissors' && computerSelect === 'paper')){
    console.log('Human-wins!')
}
else{
    console.log('Computer-wins!')
}