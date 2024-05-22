document.addEventListener('DOMContentLoaded', () => {
    const gameModeScreen = document.getElementById('game-mode');
    const gameBoardScreen = document.getElementById('game-board');
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    const resetButton = document.getElementById('reset');
    const pvpButton = document.getElementById('pvp');
    const pvcButton = document.getElementById('pvc');

    let currentPlayer = 'X';
    let gameMode = 'pvp';
    let boardState = Array(9).fill(null);

    pvpButton.addEventListener('click', () => {
        gameMode = 'pvp';
        startGame();
    });

    pvcButton.addEventListener('click', () => {
        gameMode = 'pvc';
        startGame();
    });

    resetButton.addEventListener('click', resetGame);

    cells.forEach(cell => {
        cell.addEventListener('click', () => handleCellClick(cell));
    });

    function startGame() {
        gameModeScreen.style.display = 'none';
        gameBoardScreen.style.display = 'block';
        resetGame();
    }

    function resetGame() {
        currentPlayer = 'X';
        boardState.fill(null);
        cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('disabled');
        });
    }

    function handleCellClick(cell) {
        const index = cell.dataset.index;
        if (boardState[index] || checkWinner()) return;

        boardState[index] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.classList.add('disabled');

        if (checkWinner()) {
            setTimeout(() => alert(`${currentPlayer} wins!`), 100);
            return;
        }

        if (boardState.every(cell => cell)) {
            setTimeout(() => alert(`It's a tie!`), 100);
            return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

        if (gameMode === 'pvc' && currentPlayer === 'O') {
            computerMove();
        }
    }

    function computerMove() {
        const emptyCells = boardState.map((val, index) => val === null ? index : null).filter(val => val !== null);
        const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        boardState[randomIndex] = currentPlayer;
        cells[randomIndex].textContent = currentPlayer;
        cells[randomIndex].classList.add('disabled');

        if (checkWinner()) {
            setTimeout(() => alert(`${currentPlayer} wins!`), 100);
            return;
        }

        if (boardState.every(cell => cell)) {
            setTimeout(() => alert(`It's a tie!`), 100);
            return;
        }

        currentPlayer = 'X';
    }

    function checkWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        return winPatterns.some(pattern => {
            const [a, b, c] = pattern;
            return boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c];
        });
    }
});