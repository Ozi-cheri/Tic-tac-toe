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
function cellClicked(){
    const cellIndex = this.getAttribute(cellIndex);
    if(options[cellIndex] != "" || !running){
        return;
    }
    updateCell(this, cellIndex);
    checkWinner();

}
function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;

}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    positionText.textContent = 

}
function checkWinner(){

}
function restartGame(){
    
}