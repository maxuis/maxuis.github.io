document.addEventListener('DOMContentLoaded', () => {
    const ImagenDeFondo = document.getElementById('Imagen-Fondo');
    const MenuInicio = document.getElementById('Menu-Inicio');
    const Juego = document.getElementById('Juego');
    const MenuAjustes = document.getElementById('Menu-Ajustes');
    const TableroJuego = document.getElementById('Tablero-Juego');
    const BotonJugar = document.getElementById('Boton-Jugar');    
    const BotonResetear = document.getElementById('Boton-Resetear');
    const BotonMusica = document.getElementById('Musica');
    const BotonGiros = document.getElementById('Boton-Giros');    
    const BotonAjustes = document.getElementById('Boton-Ajustes');  
    const BotonRegresarJuego = document.getElementById('Regresar-Juego');  
    let Cartas = [];
    let CartasVolteadas = [];
    let CartasEncontradas = 0;
    let UltimaCartaVolteada = null;
    let JuegoIniciado = false;
    let GiroActivado = false;
    let MusicaActiva = false;
    const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let cardSet = cardValues.concat(cardValues);
    const Musicas = [
        new Audio('Sonidos/Sonido1.mp3'),
        new Audio('Sonidos/Sonido2.mp3'),
        new Audio('Sonidos/Sonido3.mp3'),
        new Audio('Sonidos/Sonido4.mp3'),
        new Audio('Sonidos/Sonido5.mp3')
    ];

    if (JuegoIniciado === false){
        MenuAjustes.style.display = 'none';
    }

    // API de Vibracion
    function Vibrar(duration) {
        if (navigator.vibrate) {
            navigator.vibrate(duration);
        }
    }

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
        ReproducirSonidoBoton();
        if (CartasVolteadas.length < 2 && !card.classList.contains('flipped')) {
            card.classList.add('flipped');
            CartasVolteadas.push({ card, value });
            Vibrar(200);

            if (CartasVolteadas.length === 2) {
                if (CartasVolteadas[0].value === CartasVolteadas[1].value) {
                    CartasEncontradas++;
                    CartasVolteadas = [];
                    ReproducirSonidoBoton();                    
                } else {
                    setTimeout(() => {
                        ReproducirSonidoBoton();  
                        Vibrar(250);
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
            Vibrar(250);
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
        ReproducirSonidoBoton();      
        MenuInicio.style.display = 'none';
        Juego.style.display = 'block';
        MenuAjustes.style.display = 'none';
        JuegoIniciado = false;
        IniciarJuego();
    });

    BotonResetear.addEventListener('click', () => {
        ReproducirSonidoBoton();        
        JuegoIniciado = false;  // El juego se reinicia antes de poder volver a iniciarlo.
        ResetearJuego();
    });

    BotonAjustes.addEventListener('click', () =>{
        ReproducirSonidoBoton();
        MenuInicio.style.display = 'none';
        Juego.style.display = 'none';
        MenuAjustes.style.display = 'block';
    })

    BotonRegresarJuego.addEventListener('click', () => {
        ReproducirSonidoBoton();
        MenuInicio.style.display = 'none';
        Juego.style.display = 'block';
        MenuAjustes.style.display = 'none';
    })
    
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

    BotonGiros.addEventListener('click', () => {
        if (!GiroActivado) {
            let confirmacion = confirm('¿Deseas permitir el uso del giroscopio para girar la imagen de fondo?');
            if (confirmacion) {
                GiroActivado = true;
                BotonGiros.textContent = 'Girar Imagen Sí';
                alert('El uso del giroscopio ha sido habilitado.');                
            } else {
                alert('Has rechazado el uso del giroscopio.');
            }
        } else {
            GiroActivado = false;
            BotonGiros.textContent = 'Girar Imagen No';
            alert('El uso del giroscopio ha sido deshabilitado.');
        }
    });    
    
    function Giroscopio_Activado() {
        // Evento Giroscopio para girar la imagen de fondo
        if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', event => {
                if (GiroActivado) {
                    const rotation = event.gamma; // Rota en base al eje gamma (Y)
                    console.log(`Gamma rotation: ${rotation}`);
                    if (rotation !== null) {
                        ImagenDeFondo.style.transform = `rotate(${rotation}deg)`;
                    }
                }
            });
        } else {
            alert('DeviceOrientationEvent no está soportado en este dispositivo/navegador.');
        };  
    }
    Giroscopio_Activado();
});
