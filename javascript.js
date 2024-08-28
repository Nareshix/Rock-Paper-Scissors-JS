const getComputerChoice = () => {
    const choice= ['scissor', 'paper', 'stone'];
    const index = Math.round(Math.random() * 2)
    return choice[index];
}
const humanChoice = prompt().toLowerCase();
let humanScore = 0;
let computerScore  = 0;


const won = {
    'scissor': {'paper': true, 'stone': false},
    'paper': {'stone': true, 'scissor': false},
    'stone': {'scissor': true, 'paper':false},
};
const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice){
        ++humanScore;
        ++computerScore;
        return 'Its a TIE!';
    }
    if (won[humanChoice][computerChoice]){
        ++humanScore;
        return `You Won! ${humanChoice} beats ${computerChoice}`
    }
    else{
        ++computerScore;
        return `You Lost. ${computerChoice} beats ${humanChoice}`
    }

}  
