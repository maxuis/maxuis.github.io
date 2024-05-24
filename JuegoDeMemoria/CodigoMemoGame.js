document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    const game = document.getElementById('game');
    const playButton = document.getElementById('play-button');
    const gameBoard = document.getElementById('game-board');
    const resetButton = document.getElementById('reset');
    let cards = [];
    let flippedCards = [];
    let matches = 0;
    let lastFlippedCard = null;
    let gameStarted = false;

    const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let cardSet = cardValues.concat(cardValues); // Duplicate each card

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function createCard(value) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="front"></div>
            <div class="back">${value}</div>
        `;
        card.addEventListener('click', () => flipCard(card, value));
        return card;
    }

    function flipCard(card, value) {
        if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
            card.classList.add('flipped');
            flippedCards.push({ card, value });
            vibrate(200);

            if (flippedCards.length === 2) {
                if (flippedCards[0].value === flippedCards[1].value) {
                    matches++;
                    flippedCards = [];
                    if (matches === cardValues.length) {
                        showNotification('You won!', 'Congratulations, you matched all pairs!');
                    }
                } else {
                    setTimeout(() => {
                        flippedCards.forEach(item => item.card.classList.remove('flipped'));
                        flippedCards = [];
                    }, 1000);
                }
            }
        }
    }

    function resetGame() {
        matches = 0;
        flippedCards = [];
        lastFlippedCard = null;
        cards.forEach(card => card.classList.remove('flipped'));
        setTimeout(() => {
            gameBoard.innerHTML = '';
            initGame();
        }, 500);
    }

    function initGame() {
        shuffle(cardSet);
        cards = cardSet.map(value => createCard(value));
        cards.forEach(card => gameBoard.appendChild(card));
        gameStarted = true;  // The game starts here
    }

    playButton.addEventListener('click', () => {
        menu.style.display = 'none';
        game.style.display = 'block';
        gameStarted = false;
        initGame();
    });

    resetButton.addEventListener('click', () => {
        gameStarted = false;  // The game has to be reset before it can be started again
        resetGame();
    });

    // Gyroscope event listener
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', event => {
            if (gameStarted) {
                if (lastFlippedCard && Math.abs(event.gamma) > 20) {
                    flipCard(lastFlippedCard.card, lastFlippedCard.value);
                    lastFlippedCard = null;
                } else if (!lastFlippedCard && flippedCards.length < 2) {
                    const card = cards.find(c => !c.classList.contains('flipped'));
                    if (card) {
                        lastFlippedCard = { card, value: card.querySelector('.back').textContent };
                        card.classList.add('flipped');
                        vibrate(200);
                    }
                }
            }
        });
    }

    // Vibration API
    function vibrate(duration) {
        if (navigator.vibrate) {
            navigator.vibrate(duration);
        }
    }

    // Push Notifications
    function showNotification(title, body) {
        if (Notification.permission === 'granted') {
            navigator.serviceWorker.getRegistration().then(reg => {
                reg.showNotification(title, {
                    body,
                    icon: 'icon.png'
                });
                vibrate(500);
            });
        }
    }

    if ('Notification' in window && navigator.serviceWorker) {
        navigator.serviceWorker.register('service-worker.js').then(reg => {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    showNotification('Welcome', 'Memory Game is ready to play!');
                }
            });
        });
    }
});