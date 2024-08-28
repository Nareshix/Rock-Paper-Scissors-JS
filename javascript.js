const getComputerChoice = () => {
    const choice= ['scissor', 'paper', 'stone'];
    const index = Math.round(Math.random() * 2)
    return choice[index];
}
const humanChoice = prompt().toLowerCase();
let humanScore = 0;
let computerScore  = 0;



// const won = {'paper': ['stone', 'scissor']}
// const playRound = (humanChoice, getComputerChoice()) => {
//     if (humanChoice)
// }   

