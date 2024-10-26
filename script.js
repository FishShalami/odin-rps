console.log("Hello! I want to play a game...")


// get computer choice of options rock, paper or scissor
    // make function with random nnumber generator that picks 1, 2, 3 
    // assigns word choice to number

let getComputerChoice = () => {
    let tempNum = Math.ceil(Math.random() * 3);
    if (tempNum === 1) {
        compChoice = "Rock";
    } else if (tempNum === 2) {
        compChoice = "Paper";
    } else {
        compChoice = "Scissor";
    }

    return compChoice
}

// console.log('The computer chose: ' + getComputerChoice());

// get human choice of rock, paper, or scissor through function

let getHumanChoice = () => {
    huChoice = prompt("Choose either 'Rock', 'Paper', or 'Scissor'", "Rock");
    huChoice = huChoice.charAt(0).toUpperCase() + huChoice.slice(1).toLowerCase();
    return huChoice;
}   

// console.log('The human chose: ' + getHumanChoice())


function playGame() {
    //score tracking will keep tally of who has won
    //Create two new variables named humanScore and computerScore in the global scope.

    let humanScore = 0;
    let computerScore = 0;

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    
    //logic for single round of play
    let playRound = (humanChoice, computerChoice) => {
      
        //draw?
        if (humanChoice === computerChoice) {
            console.log('Draw! Play again!');
        //Rock (1) beats scissor (3) => 13/31 -> combine the words
        //Paper (2) beats rock (1) => 21/12
        //Scissor (3) beats paper (2) => 32/23
        } else if (humanChoice + computerChoice === 'RockScissor' || 
            humanChoice + computerChoice === 'PaperRock' ||
            humanChoice + computerChoice === 'ScissorRock')  {
                humanScore = ++humanScore;
                console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore = ++computerScore;
            console.warn(`You lost! ${computerChoice} beats ${humanChoice}`);
        }
    
        return humanScore;
        return computerScore;
    
    }

    for (let i = 0; i < 5; i++) {
        playRound(humanSelection, computerSelection);
        console.log(`The score is Human: ${humanScore} Computer: ${computerScore}`);
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

    }
    
}

playGame();
