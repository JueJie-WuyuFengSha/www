
const board = document.getElementById("board");
let currentPlayer = "black";

function createBoard() {
    for (let i = 0; i < 25; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("click", () => handleMove(cell));
        board.appendChild(cell);
    }
}

function handleMove(cell) {
    if (cell.classList.contains("black") || cell.classList.contains("white")) return;
    cell.classList.add(currentPlayer);
    currentPlayer = currentPlayer === "black" ? "white" : "black";
}

createBoard();
