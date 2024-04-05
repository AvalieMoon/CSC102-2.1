const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choicebutton = document.querySelectorAll(".choicebutton");
let player;
let computer;
let result;

choicebutton.forEach(button => button.addEventListener("Click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){
    
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1:
            computer = "Rock"
            break;
        case 2:
            Computer = "Paper"
            break;
        case 3:
            computer = "Scissors"
            break;
    }
}

function checkWinner(){
    if(player == computer){
        return "Draw!";
    }
    else if(computer == "Rock"){
        return (player == Paper) ? "You Win!" : "You Lose!"
    }
    else if(computer == "Paper"){
        return (player == Scissors) ? "You Win!" : "You Lose!"
    }    
    else if(computer == "Scissors"){
        return (player == Rock) ? "You Win!" : "You Lose!"
    }    
}