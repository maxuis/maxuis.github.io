document.addEventListener('DOMContentLoaded', () => {    
    const TableroJuego = document.getElementById('Tablero-Juego');
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    // Menus
    const MenuInicio = document.getElementById('Menu-Inicio');
    const MenuModo = document.getElementById('Modo-Juego')
    const MenuJuego = document.getElementById('Juego');
    const MenuAjustes = document.getElementById('Menu-Ajustes');    
    // Botones Inicio
    const BotonJugar = document.getElementById('Boton-Jugar'); 
    // Botones Modo
    const BotonPC = document.getElementById('Boton-PC');
    const BotonMovil = document.getElementById('Boton-Movil');     
    // Botones Juego
    const BotonResetear = document.getElementById('Boton-Resetear');
    const BotonAjustes = document.getElementById('Boton-Ajustes');
    // Botones Ajustes
    const BotonRegresar = document.getElementById('Boton-Regresar');
    const BotonMusica =  document.getElementById('Boton-Musica');
    const BotonInicio = document.getElementById('Boton-Inicio');              
    let Cartas = [];
    let CartasVolteadas = [];
    let CartasEncontradas = 0;
    let UltimaCartaVolteada = false;
    let GiroActivado = false;
    let MusicaActiva = false;
    let JuegoIniciado = false;
    let ModoJuego = "Nada"
    let IndiceMenu = 0;
    const ValorCartas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let cardSet = ValorCartas.concat(ValorCartas);
    const Musicas = [
        new Audio('Sonidos/Sonido1.mp3'),
        new Audio('Sonidos/Sonido2.mp3'),
        new Audio('Sonidos/Sonido3.mp3'),
        new Audio('Sonidos/Sonido4.mp3'),
        new Audio('Sonidos/Sonido5.mp3')
    ];    

    // API de Vibracion
    function Vibrar(duration) {
        if (navigator.vibrate) {
            navigator.vibrate(duration);
        }
    }

    function Giroscopio_Movil(){
        if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', event => {
                const rotation = event.gamma;
                if (rotation !== null) {
                    document.querySelectorAll('.card').forEach(card => {
                        card.style.transform = `rotateY(${rotation}deg)`;                        
                    });
                }
            });
        } else {
            alert('DeviceOrientationEvent no está soportado en este dispositivo/navegador.');
        }
    }

    function ReproducirMusica() {
        // Verificar si la música está habilitada
        if (MusicaActiva) {
            // Si la música está habilitada, reproducir sonido aleatorio
            const randomIndex = Math.floor(Math.random() * Musicas.length);
            const sound = Musicas[randomIndex];
            sound.play();
            sound.onended = () => {
                // Si el sonido termina, verificar si la música aún está habilitada antes de reproducir otro sonido
                if (MusicaActiva) {
                    ReproducirMusica();
                }
            };
        }
    }     
    
    function SonidoBoton() {
        const clickSound = new Audio('Sonidos/Sonido6.mp3');
        clickSound.play();
    }   

    function BarajarCarta(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function InvertirCarta(card, value) {
        SonidoBoton();        
        if (CartasVolteadas.length < 2 && !card.classList.contains('flipped')) {
            card.classList.add('flipped');
            CartasVolteadas.push({ card, value });
            Vibrar(200);

            if (CartasVolteadas.length === 2) {
                if (CartasVolteadas[0].value === CartasVolteadas[1].value) {
                    CartasEncontradas++;
                    CartasVolteadas = [];
                    SonidoBoton();                    
                } else {
                    setTimeout(() => {
                        SonidoBoton();  
                        Vibrar(250);
                        CartasVolteadas.forEach(item => item.card.classList.remove('flipped'));
                        CartasVolteadas = [];
                    }, 1000);
                }
            }
        }
    } 

    function CrearCarta(value) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="front"></div>
            <div class="back">${value}</div>
        `;
        // Modo pcc solo requiere clik
        if (ModoJuego === "MODO PC"){            
            card.addEventListener('click', () => InvertirCarta(card, value));            
        }
        // Modo Movil requiere giroscopio
        if (ModoJuego === "MODO MOVIL"){  
            if (isMobile) {
                card.forEach(card => {
                    card.addEventListener('touchstart', () => {
                        card.classList.add('white');
                    });
                });
                
                function handleOrientation(event) {
                    const gamma = event.gamma; 
                    const beta = event.beta;   
                    const alpha = event.alpha;                 
                    if ((Math.abs(gamma) > 20) || (Math.abs(beta) > 20) || (Math.abs(alpha) > 20)) {                        
                        const cardToFlip = Array.from(cartas).find(carta => !carta.classList.contains('flipped'));
                        if (cardToFlip) {
                            InvertirCarta(cardToFlip, value);
                        }
                    }
                } 

                if (window.DeviceOrientationEvent) {
                    window.addEventListener('deviceorientation', handleOrientation, true);
                } else {
                    console.log("DeviceOrientationEvent is not supported");
                }
            }                                               
        }
        return card;
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
        if (JuegoIniciado === false){            
            BarajarCarta(cardSet);
            Cartas = cardSet.map(value => CrearCarta(value));
            Cartas.forEach(card => TableroJuego.appendChild(card));
            JuegoIniciado = true;  // Empezar Juego        
        }                           
    }

    function ManejoMenus(IndiceMenu){
        switch(IndiceMenu){
            case 0:
                MenuInicio.style.display = 'block' // 0
                MenuModo.style.display = 'none' // 1
                MenuJuego.style.display = 'none' // 2
                MenuAjustes.style.display = 'none' // 3                               
                break;
            case 1:
                MenuInicio.style.display = 'none' // 0
                MenuModo.style.display = 'block' // 1
                MenuJuego.style.display = 'none' // 2
                MenuAjustes.style.display = 'none' // 3
                IniciarJuego();
                break;
            case 2:
                MenuInicio.style.display = 'none' // 0
                MenuModo.style.display = 'none' // 1
                MenuJuego.style.display = 'block' // 2
                MenuAjustes.style.display = 'none' // 3
                break;
            case 3:
                MenuInicio.style.display = 'none' // 0
                MenuModo.style.display = 'none' // 1
                MenuJuego.style.display = 'none' // 2
                MenuAjustes.style.display = 'block' // 3
                break;
            case 4:
                MenuInicio.style.display = 'none' // 0
                MenuModo.style.display = 'none' // 1
                MenuJuego.style.display = 'none' // 2
                MenuAjustes.style.display = 'none' // 3
                break;
        }
    }

    BotonJugar.addEventListener('click', () => {  
        SonidoBoton();      
        ManejoMenus(1);
    });

    BotonPC.addEventListener('click', () => {  
        ModoJuego = "MODO PC"   
        SonidoBoton();
        ManejoMenus(2);
        
    });
 
    BotonMovil.addEventListener('click', () => {  
        ModoJuego = "MODO MOVIL"  
        if (!GiroActivado) {
            let confirmacion = confirm('¿Deseas permitir el uso del giroscopio para girar las cartas del jueugo?');
            if (confirmacion) {
                GiroActivado = true;                
                alert('El uso del giroscopio ha sido habilitado.'); 
                ManejoMenus(2);                  
            } else {
                alert('Has rechazado el uso del giroscopio... Regresando a Inicio');                
                ManejoMenus(0);
            }
        } else {
            GiroActivado = false;
            BotonGirosCopio.textContent = 'Girar Imagen No';
            alert('El uso del giroscopio ha sido deshabilitado. No se puede juugar en modo Movil... Regresando a Inicio');            
            ManejoMenus(0);
        } 
        SonidoBoton();                   
    });
    
    BotonResetear.addEventListener('click', () => {
        SonidoBoton();        
        JuegoIniciado = false;  // El juego se reinicia antes de poder volver a iniciarlo.
        ResetearJuego();
    });

    BotonAjustes.addEventListener('click', () =>{
        SonidoBoton();
        if (ModoJuego === "MODO PC"){
            ManejoMenus(3);
        }
        if (ModoJuego === "MODO MOVIL"){
            ManejoMenus(4);
        }
    })

    BotonRegresar.addEventListener('click', () => {
        SonidoBoton();
        ManejoMenus(2);
    })

    BotonMusica.addEventListener('click', () => {          
        SonidoBoton();
        if (MusicaActiva === true) {
            // Si la música está activada, detenerla            
            BotonMusica.textContent = 'Musica >> NO';
            MusicaActiva = false;            
            ReproducirMusica();
        } else {
            // Si la música está desactivada, reproducirla            
            BotonMusica.textContent = 'Musica >> SI';
            MusicaActiva = true;            
            ReproducirMusica();
        }
    });    

    BotonInicio.addEventListener('click', () => {
        SonidoBoton();
        MusicaActiva = false;        
        BotonMusica.textContent = 'Musica';
        ResetearJuego();
        JuegoIniciado = false;
        ManejoMenus(0);
    })
});
