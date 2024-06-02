document.addEventListener('DOMContentLoaded', () => {
    const gameModeScreen = document.getElementById('game-mode');
    const gameBoardScreen = document.getElementById('game-board');
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    const resetButton = document.getElementById('reset');    
    const pvcButton = document.getElementById('pvc');
    const BotonMusica = document.getElementById('Musica');
    const Musicas = [
        new Audio('Sonidos/Sonido1.mp3'),
        new Audio('Sonidos/Sonido2.mp3'),
        new Audio('Sonidos/Sonido3.mp3'),
        new Audio('Sonidos/Sonido4.mp3'),
        new Audio('Sonidos/Sonido5.mp3')
    ];
    
    let MusicaActiva = false;
    let currentPlayer = 'X';    
    let boardState = Array(9).fill(null);    

    function ReproducirSonidoAleatorio() {
        // Verificar si la música está habilitada
        if (MusicaActiva) {
            // Si la música está habilitada, reproducir sonido aleatorio
            const randomIndex = Math.floor(Math.random() * Musicas.length);
            const sound = Musicas[randomIndex];
            sound.play();
            sound.onended = () => {
                // Si el sonido termina, verificar si la música aún está habilitada antes de reproducir otro sonido
                if (MusicaActiva) {
                    ReproducirSonidoAleatorio();
                }
            };
        }
    } 
    
    function ReproducirSonidoBoton() {
        const clickSound = new Audio('Sonidos/Sonido6.mp3');
        clickSound.play();
    } 

    BotonMusica.addEventListener('click', () => {
        ReproducirSonidoBoton();
        if (MusicaActiva) {
            // Si la música está activada, detenerla            
            BotonMusica.textContent = 'Musica NO';
            MusicaActiva = false;            
            ReproducirSonidoAleatorio();
        } else {
            // Si la música está desactivada, reproducirla            
            BotonMusica.textContent = 'Musica SI';
            MusicaActiva = true;            
            ReproducirSonidoAleatorio();
        }
    });
    pvcButton.addEventListener('click', () => {
        ReproducirSonidoBoton();
        gameMode = 'pvc';
        startGame();
    });

    resetButton.addEventListener('click', () => {
        ReproducirSonidoBoton();        
        resetGame();
    });    

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
        ReproducirSonidoBoton();
        const index = cell.dataset.index;
        if (boardState[index] || checkWinner()) return;

        boardState[index] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.classList.add('disabled');

        if (checkWinner()) {
            setTimeout(() => alert(`EL JUGADOR ( ${currentPlayer} ) OBTIENE VICTORIA!`), 100);
            return;
        }

        if (boardState.every(cell => cell)) {
            setTimeout(() => alert(`¡EMPATE!`), 100);
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
            setTimeout(() => alert(`EL JUGADOR ( ${currentPlayer} ) OBTIENE VICTORIA!`), 100);
            return;
        }

        if (boardState.every(cell => cell)) {
            setTimeout(() => alert(`¡EMPATE!`), 100);
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
