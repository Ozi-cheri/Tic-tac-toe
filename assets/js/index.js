   // Html Elements
const cells = document.querySelectorAll(".cell");
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
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame(){
    // Event Listeners
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    positionText.textContent = `${currentPlayer}'s turn`;
    running = true;
}
// Funtions
function cellClicked(){
    const cellIndex = this.getAttribute("data-cell-index");


if (options[cellIndex] != ""|| !running){
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
   // Game Elements
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    positionText.textContent = `${currentPlayer}'s turn`;
}
function checkWinner(){
    let roundWon = false;
   // Check Winners
for(let i = 0; i < winConditions.length; i++){
    const condition = winConditions[i];
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];

    if(cellA == "" || cellB == "" || cellC == ""){
        continue;
    }
    if(cellA == cellB && cellB == cellC){
        roundWon = true;
        break;
    }
 }

 if(roundWon){
    positionText.textContent = `${currentPlayer} wins!`;
    running = false;
 } 
 else if(!options.includes("")){
    positionText.textContent = `Draw`;
    running = false;
 }
 else{
    changePlayer();
 }
} 
   // Restart Button
function restartGame(){
    currentPlayer = "X";
    options = ["","","","","","" ,"","","",];
    positionText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}