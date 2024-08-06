console.log('Hello, Welcome to the game!')
let options = ['rock', 'paper', 'scissors'];
function computerChoice() {
    let computerSelect = options[(Math.floor(Math.random() * options.length))];
    return computerSelect;
}
console.log(computerChoice())

function humanChoice(){
    let humanSelect = prompt('Rock/Paper/Scissors');
}
humanChoice()
