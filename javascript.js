const getComputerChoice = () => {
    const choice= ['scissor', 'paper', 'stone'];
    const index = Math.floor(Math.random() * 3)
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

const body = document.querySelector('body');

const scissor = document.createElement('button');
const paper = document.createElement('button');
const stone = document.createElement('button');

scissor.textContent = 'scissor';
paper.textContent = 'paper';
stone.textContent = 'stone';

body.append(scissor, paper, stone);


const choices = document.querySelectorAll('button');

const displayHumanScore = document.createElement('div');
const displayComputerScore = document.createElement('div');

displayComputerScore.textContent = `Computer Score: ${computerScore}`;
displayHumanScore.textContent = `Human Score: ${humanScore}`;
body.append(displayComputerScore, displayHumanScore)


choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const div = document.createElement('div');
        body.append(div);
        div.append(playRound(choice.textContent, getComputerChoice()));
        displayComputerScore.textContent = `Computer Score: ${computerScore}`;
        displayHumanScore.textContent = `Human Score: ${humanScore}`;
        if (humanScore === 5){
            body.append('Human won!');
        }
        else if (computerScore === 5){
            body.append('Computer Won!');
        }
    })
});

