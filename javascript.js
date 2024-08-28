const getComputerChoice = () => {
    const choice= ['scissor', 'paper', 'stone'];
    const index = Math.round(Math.random() * 2)
    return choice[index];
}
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
        return `You Won! ${humanChoice} beats ${computerChoice}`;
    }
    else{
        ++computerScore;
        return `You Lost. ${computerChoice} beats ${humanChoice}`;
    }

}  

for (let  i =0; i < 5; ++i){
    const getHumanChoice = prompt().toLowerCase();
    console.log(playRound(getHumanChoice, getComputerChoice()));
}

if (humanScore > computerScore){
    console.log(`You won with ${humanScore} points. The computer got ${computerScore} points`);
}
else if (humanScore < computerScore){
    console.log(`You lost with ${humanScore} points. The computer got ${computerScore} points`);
}
else{
    console.log(`It's a tie of ${humanScore} points`);
}