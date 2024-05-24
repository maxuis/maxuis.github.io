document.addEventListener('DOMContentLoaded', () => {
    const ImagenDeFondo = document.getElementById('Imagen-Fondo');
    const Menu = document.getElementById('Menu');
    const Juego = document.getElementById('Juego');
    const BotonJugar = document.getElementById('Boton-Jugar');
    const TableroJuego = document.getElementById('Tablero-Juego');
    const BotonResetear = document.getElementById('Resetear');
    let Cartas = [];
    let CartasVolteadas = [];
    let CartasEncontradas = 0;
    let UltimaCartaVolteada = null;
    let JuegoIniciado = false;
    const BotonMusica = document.getElementById('Musica');
    let MusicaActiva = false;
    const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let cardSet = cardValues.concat(cardValues); // Duplicate each card

    const sounds = [
        new Audio('Sonidos/Sonido1.mp3'),
        new Audio('Sonidos/Sonido2.mp3'),
        new Audio('Sonidos/Sonido3.mp3'),
        new Audio('Sonidos/Sonido4.mp3'),
        new Audio('Sonidos/Sonido5.mp3')
    ];
    function ReproducirSonidoAleatorio() {
        // Verificar si la música está habilitada
        if (MusicaActiva) {
            // Si la música está habilitada, reproducir sonido aleatorio
            const randomIndex = Math.floor(Math.random() * sounds.length);
            const sound = sounds[randomIndex];
            sound.play();
            sound.onended = () => {
                // Si el sonido termina, verificar si la música aún está habilitada antes de reproducir otro sonido
                if (MusicaActiva) {
                    ReproducirSonidoAleatorio();
                }
            };
        }
    }    
    BotonMusica.addEventListener('click', () => {
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

    function BarajarCarta(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function CrearCarta(value) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="front"></div>
            <div class="back">${value}</div>
        `;
        card.addEventListener('click', () => InvertirCarta(card, value));
        return card;
    }

    function InvertirCarta(card, value) {
        if (CartasVolteadas.length < 2 && !card.classList.contains('flipped')) {
            card.classList.add('flipped');
            CartasVolteadas.push({ card, value });
            Vibrar(200);

            if (CartasVolteadas.length === 2) {
                if (CartasVolteadas[0].value === CartasVolteadas[1].value) {
                    CartasEncontradas++;
                    CartasVolteadas = [];                    
                } else {
                    setTimeout(() => {
                        CartasVolteadas.forEach(item => item.card.classList.remove('flipped'));
                        CartasVolteadas = [];
                    }, 1000);
                }
            }
        }
    }    

    function ResetearJuego() {                
        CartasEncontradas = 0;
        CartasVolteadas = [];
        UltimaCartaVolteada = null;
        Cartas.forEach(card => card.classList.remove('flipped'));
        setTimeout(() => {
            TableroJuego.innerHTML = '';
            IniciarJuego();
        }, 500);
    }

    function IniciarJuego() {               
        BarajarCarta(cardSet);
        Cartas = cardSet.map(value => CrearCarta(value));
        Cartas.forEach(card => TableroJuego.appendChild(card));
        JuegoIniciado = true;  // Empezar Juego        
    }

    BotonJugar.addEventListener('click', () => {
        Menu.style.display = 'none';
        Juego.style.display = 'block';
        JuegoIniciado = false;
        IniciarJuego();
    });

    BotonResetear.addEventListener('click', () => {
        JuegoIniciado = false;  // El juego se reinicia antes de poder volver a iniciarlo.
        ResetearJuego();
    });

    // Evento Giroscopio para girar la imagen de fondo
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', event => {
            const rotation = event.gamma; // Rota en base al eje gamma
            if (rotation) {
                ImagenDeFondo.style.transform = `rotate(${rotation}deg)`;
            }
        });
    }

    // API de Vibracion
    function Vibrar(duration) {
        if (navigator.vibrate) {
            navigator.vibrate(duration);
        }
    }    
});
