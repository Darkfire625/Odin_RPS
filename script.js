// write JS code here
let max = 3;
function computerPlay(max) {
    let choice;
    choice = Math.floor(Math.random() * max);
    if(choice === 0) {
        choice = "rock";
        return choice;
    }
    else if(choice === 1) {
        choice = "paper";
        return choice;
    }
    else {
        choice = "scissor";
        return choice;
    }
}

let playerSelection, compSelection;
let playerRecord = 0, compRecord = 0;
function playRound(compSelection, playerSelection) {
    if(compSelection === "rock" && playerSelection === "rock") {
        return 0;
    }
    else if(compSelection === "rock" && playerSelection === "paper") {
        return ++playerRecord;
    }
     else if(compSelection === "rock" && playerSelection === "scissor") {
        return ++compRecord;
    }
    else if(compSelection === "paper" && playerSelection === "rock") {
        return ++compRecord;
    }
    else if(compSelection === "paper" && playerSelection === "paper") {
        return 0;
    }
    else if(compSelection === "paper" && playerSelection === "scissor") {
        return ++playerRecord;
    }
    else if(compSelection === "scissor" && playerSelection === "rock") {
        return ++playerRecord;
    }
    else if(compSelection === "scissor" && playerSelection === "paper") {
        return ++compRecord;
    }
    else if(compSelection === "scissor" && playerSelection === "scissor") {
        return 0;
    }
    else {
        return alert("Error!");
    }
}

const body = document.body;

const compRecordTitle = document.createElement('div');
body.appendChild(compRecordTitle);
compRecordTitle.textContent = 'Computer Record';

const displayCompRecord = document.createElement('div');
body.appendChild(displayCompRecord);
displayCompRecord.textContent = 0;

const playerRecordTitle = document.createElement('div');
body.appendChild(playerRecordTitle);
playerRecordTitle.textContent = 'Player Record';

const displayPlayerRecord = document.createElement('div');
body.appendChild(displayPlayerRecord);
displayPlayerRecord.textContent = 0;

const resultTitle = document.createElement('div');
body.appendChild(resultTitle);
resultTitle.textContent = 'Result';

const result = document.createElement('div');
body.appendChild(result);
 

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        compSelection = computerPlay(max);
        compSelection = compSelection.toLowerCase();
        playerSelection = button.id;
        playerSelection = playerSelection.toLowerCase();
        if(compRecord < 5 || playerRecord < 5) {
            playRound(compSelection, playerSelection);
            displayCompRecord.textContent = compRecord;
            displayPlayerRecord.textContent = playerRecord;
            sumRecord = compRecord + playerRecord;
            if(compRecord ===5 || playerRecord === 5) {
                if(compRecord > playerRecord){
                    result.textContent = "Computer Wins!";
                }
                else if(compRecord < playerRecord) {
                    result.textContent = "You Win!";
                }
                else if(compRecord === playerRecord){
                    result.textContent = "Tie!";
                }
            }
        }
    });
});
