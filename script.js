console.log("Hello! I want to play a game...")

let humanScore = 0;
let computerScore = 0;


let getCompChoice = () => {
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


let playRound = (humanChoice) => {
    //once a button is selected, run the computer choice function
    const compChoice = getCompChoice();

      // Log the human choice
      console.log(`The human has selected: ${humanChoice}`);
      
    //draw?
    if (humanChoice === compChoice) {
        console.log('Draw! Play again!');
        document.getElementById("result").textContent = `Draw! Both selected ${humanChoice}. Play again!`;
    } else if (
        (humanChoice === 'Rock' && compChoice === 'Scissor') ||
        (humanChoice === 'Paper' && compChoice === 'Rock') ||
        (humanChoice === 'Scissors' && compChoice === 'Paper')
    ) {
        //increment the score and counter if someone wins
        humanScore++;
        //only increment the round count if there is a winner
        totalRounds++
        console.log(`You won! ${humanChoice} beats ${compChoice}`);
        document.getElementById("result").textContent = `You won! ${humanChoice} beats ${compChoice}`;
    } else {
        computerScore++;
        totalRounds++
        console.warn(`You lost! ${compChoice} beats ${humanChoice}`);
        document.getElementById("result").textContent = `You lost! ${compChoice} beats ${humanChoice} `;

    }

    document.getElementById('score').textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

const disableButtons = () => {
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => {
        button.disabled = true;
        button.style.cursor = 'not-allowed';
        button.style.opacity = '0.6';
    });
};


let totalRounds = computerScore + humanScore

let getHumanChoice = (event) => {
    // Check if the clicked element is a button
    if (event.target.tagName === 'BUTTON') {
        // Retrieve the ID of the clicked button
        const humanChoice = event.target.textContent;
        playRound(humanChoice);
        //if the round count is less than 5, keep playing
        if (totalRounds === 5) {
            let winner = ''

            if (computerScore > humanScore) {
                winner = "Computer";
            } else {
                winner = "Human";
            }
            //show the winner
            document.getElementById('winner').textContent = `The Winner is: ${winner}`;
            console.log('Game over');

            //reset the score counter
            humanScore = 0;
            computerScore = 0;

            // Reset the totalRounds counter
            totalRounds = 0;

            // disable the buttons to prevent further play
            disableButtons();

        }
    }
};

const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', getHumanChoice);
