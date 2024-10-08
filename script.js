const dice = document.getElementById("dice");
const diceNumber = document.getElementById("dice-number");
const playerTurnDisplay = document.getElementById("player-turn");

let currentPlayer = 1;
let diceValue = 0;

dice.addEventListener("click", () => {
    diceValue = Math.floor(Math.random() * 6) + 1;
    diceNumber.textContent = diceValue;

     currentPlayer = currentPlayer === 1 ? 2 : 1;
    playerTurnDisplay.textContent = `Player ${currentPlayer}'s Turn`;

    });

function createLudoBoard() {
    const board = document.getElementById("ludo-board");
    for (let i = 0; i < 225; i++) {
        const cell = document.createElement("div");
        board.appendChild(cell);
    }
}
window.onload = createLudoBoard;
