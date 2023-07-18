const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `${player}`;
    computerText.textContent = `${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        computer = "Pierre";
        break;
      case 2:
        computer = "Feuille";
        break;
      case 3:
        computer = "Ciseaux";
        break;
    }
}

function checkWinner(){
    if(player == computer){
      return "Egalité!";
    }
    else if(computer == "Pierre"){
      return (player == "Feuille") ? "You Win!" : "You Lose!"
    }
    else if(computer == "Feuille"){
      return (player == "Ciseaux") ? "You Win!" : "You Lose!"
    }
    else if(computer == "Ciseaux"){
      return (player == "Pierre") ? "You Win!" : "You Lose!"
    }
}
