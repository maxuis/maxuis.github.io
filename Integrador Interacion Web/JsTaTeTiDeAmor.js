document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const cells = document.querySelectorAll(".cell");
    const restartButton = document.getElementById("restartButton");
    let currentPlayer = "X";
    let gameActive = true;
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleCellClick(event) {
        const cell = event.target;
        const cellIndex = parseInt(cell.getAttribute("data-index"));

        if (cell.textContent !== "" || !gameActive || currentPlayer !== "X") {
            return;
        }

        cell.textContent = currentPlayer;
        checkWinner();
        currentPlayer = "O";
        if (gameActive) {
            setTimeout(machineMove, 500); // Delay for machine move
        }
    }

    function machineMove() {
        const availableCells = Array.from(cells).filter(cell => cell.textContent === "");
        if (availableCells.length === 0 || !gameActive) {
            return;
        }

        const randomIndex = Math.floor(Math.random() * availableCells.length);
        availableCells[randomIndex].textContent = "O";
        checkWinner();
        currentPlayer = "X";
    }

    function checkWinner() {
        let roundWon = false;

        for (let i = 0; i < winningConditions.length; i++) {
            const [a, b, c] = winningConditions[i];
            const cellA = cells[a].textContent;
            const cellB = cells[b].textContent;
            const cellC = cells[c].textContent;

            if (cellA === "" || cellB === "" || cellC === "") {
                continue;
            }

            if (cellA === cellB && cellB === cellC) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            alert(`Player ${currentPlayer} wins!`);
            gameActive = false;
            return;
        }

        const roundDraw = [...cells].every(cell => cell.textContent !== "");
        if (roundDraw) {
            alert("Draw!");
            gameActive = false;
        }
    }

    function restartGame() {
        currentPlayer = "X";
        gameActive = true;
        cells.forEach(cell => cell.textContent = "");
    }

    cells.forEach(cell => cell.addEventListener("click", handleCellClick));
    restartButton.addEventListener("click", restartGame);
});