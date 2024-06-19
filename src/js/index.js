const cell = document.querySelectorAll(".cell");
const positionText = document.querySelector("#positionText");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let options = ["","","","","","","","","",];
let currentPlayer = "X";
let running = false;

function initializeGame(){
    cell.forEach(cell => cell.addEventListener("click", ))
        restartBtn.addEventListener("click", restartGame)
        positionText.textContent = $;{currentPlayer}' turn' ;
        running = true
        
}
