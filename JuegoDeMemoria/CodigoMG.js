document.addEventListener('DOMContentLoaded', () => {    
    // VARIABLES GLOBALES
    const TableroJuego = document.getElementById('Tablero-Juego');    
    // MENUS
    const MenuInicio = document.getElementById('Menu-Inicio'); // Menú de inicio del juego
    const MenuModo = document.getElementById('Modo-Juego'); // Menú de selección de modo de juego
    const MenuJuego = document.getElementById('Juego'); // Menú del juego principal
    const MenuAjustes = document.getElementById('Menu-Ajustes'); // Menú de ajustes

    // BOTONES DE INICIO
    const BotonJugar = document.getElementById('Boton-Jugar'); // Botón para comenzar el juego

    // BOTONES DE MODO
    const BotonPC = document.getElementById('Boton-PC'); // Botón para seleccionar modo PC
    const BotonMovil = document.getElementById('Boton-Movil'); // Botón para seleccionar modo móvil

    // BOTONES DE JUEGO
    const BotonResetear = document.getElementById('Boton-Resetear'); // Botón para reiniciar el juego
    const BotonAjustes = document.getElementById('Boton-Ajustes'); // Botón para acceder a los ajustes

    // BOTONES DE AJUSTES
    const BotonRegresar = document.getElementById('Boton-Regresar'); // Botón para regresar al menú de juego
    const BotonMusica =  document.getElementById('Boton-Musica'); // Botón para activar/desactivar la música
    const BotonInicio = document.getElementById('Boton-Inicio'); // Botón para regresar al inicio del juego

    // VARIABLES DEL JUEGO
    let Cartas = []; // Array de cartas
    let CartasVolteadas = []; // Array de cartas volteadas
    let CartasEncontradas = 0; // Número de cartas encontradas
    let UltimaCartaVolteada = false; // Última carta volteada
    let GiroActivado = false; // Estado del giroscopio
    let MusicaActiva = false; // Estado de la música
    let JuegoIniciado = false; // Estado del juego
    let ModoJuego = "Nada"; // Modo de juego seleccionado
    let IndiceMenu = 0; // Índice del menú seleccionado
    let DisponibilidadGiros = "Nada";
    let CartaSeleccionada = false;

    // Valores de las cartas
    const ValorCartas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    // Set de cartas
    let cardSet = ValorCartas.concat(ValorCartas);
    const Musicas = [
        new Audio('Sonidos/Sonido1.mp3'),
        new Audio('Sonidos/Sonido2.mp3'),
        new Audio('Sonidos/Sonido3.mp3'),
        new Audio('Sonidos/Sonido4.mp3'),
        new Audio('Sonidos/Sonido5.mp3')
    ];

    // Funcion para reproducir sonido de los botones
    function Sonido_Boton() {
        const clickSound = new Audio('Sonidos/Sonido6.mp3');
        clickSound.play();
    } 

    // Funcion para reproducir musica
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

    // API de Vibracion
    function Vibrar(duration) {
        if (navigator.vibrate) {
            navigator.vibrate(duration);
        }
    }    

    // Detección de la orientación del dispositivo
    function DetectarOrientacionEjes(event) {
        const gamma = event.gamma;
        const beta = event.beta;
        const alpha = event.alpha;
        if ((Math.abs(gamma) > 20) || (Math.abs(beta) > 20) || (Math.abs(alpha) > 20)) {
            if (CartasVolteadas.length < 2 && !UltimaCartaVolteada.classList.contains('flipped')) {
                InvertirCarta(UltimaCartaVolteada, UltimaCartaVolteada.dataset.valor);
            }
        }        
    }

    // Añadir evento de orientación del dispositivo
    function Evento_Giroscopio(){
        if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', DetectarOrientacionEjes, true);
        } else {
            console.log("DeviceOrientationEvent no es soportado");
        } 
    } 

    // Función para verificar la presencia del giroscopio
    function verificarGiroscopio() {
        if ('DeviceOrientationEvent' in window) {
            window.addEventListener('deviceorientation', function(event) {
                if (event.alpha !== null || event.beta !== null || event.gamma !== null) {
                    console.log("Giroscopio disponible para las cartas en modo MODO MOVIL");
                    DisponibilidadGiros = "GD";
                    alert("Giroscopio disponible para las cartas en modo MODO MOVIL");
                    // Giroscopio disponible
                    Evento_Giroscopio();
                } else {
                    console.log("Giroscopio no disponible para las cartas en modo MODO MOVIL");
                    DisponibilidadGiros = "GND";
                    alert("Giroscopio no disponible para las cartas en modo MODO MOVIL");
                    // Giroscopio no disponible
                }
            }, { once: true });
        } else {
            DisponibilidadGiros = "GNS";
            alert("Giroscopio no soportado para las cartas en modo MODO MOVIL");
            console.log("DeviceOrientationEvent no soportado para las cartas en modo MODO MOVIL");
            // DeviceOrientationEvent no es soportado
        }
    }

    // Llamar a la función para verificar el giroscopio
    verificarGiroscopio();

    // Función para invertir las cartas
    function InvertirCarta(Carta, Valor) {
        Sonido_Boton();
        if (CartasVolteadas.length < 2 && !Carta.classList.contains('flipped')) {
            Carta.classList.add('flipped');
            CartasVolteadas.push({ card: Carta, value: Valor });
            if (ModoJuego === "MODO MOVIL"){
                Vibrar(200);
            }

            if (CartasVolteadas.length === 2) {
                if (CartasVolteadas[0].value === CartasVolteadas[1].value) {
                    CartasEncontradas++;
                    CartasVolteadas = [];
                    Sonido_Boton();                    
                } else {
                    setTimeout(() => {
                        Sonido_Boton();  
                        if (ModoJuego === "MODO MOVIL"){
                            Vibrar(200);
                        }                                
                        CartasVolteadas.forEach(item => {
                            item.card.style.border = '0px solid red';
                            item.card.classList.remove('flipped');
                        });
                        CartasVolteadas = [];                        
                    }, 1000);
                }
            }
        }              
    }          

    // Funcion para crear las cartas y asignarle las funciones dependiendo de dispositivos
    function CrearCarta(Valor) {
        const Carta = document.createElement('div');
        Carta.classList.add('card');
        Carta.innerHTML = ` 
            <div class="front"></div>
            <div class="back">${Valor}</div>
        `;
        Carta.addEventListener('click', () => {
            Carta.style.border = '1px solid red';
            Carta.style.transform = 'scale(1.0001)';
            Carta.style.transition = 'all 0.2s ease';
            UltimaCartaVolteada = Carta;
            
            switch(ModoJuego){
                case "MODO PC":
                    setTimeout(() => {
                        InvertirCarta(Carta, Valor);
                    }, 200); // Modo PC
                    break;
                case "MODO MOVIL":
                    switch(DisponibilidadGiros){
                        case "GD":
                            // Se puede utilizar el giroscopio
                            break;
                        case "GND":
                            // No se tiene disponible el Giroscopio
                            setTimeout(() => {
                                InvertirCarta(Carta, Valor);
                            }, 200);
                            break;
                        case "GNS":
                            // No se soporta tecnología Giroscopio
                            setTimeout(() => {
                                InvertirCarta(Carta, Valor);
                            }, 200);
                            break;
                    }
                    break;
            }
        });                   
        return Carta;
    }

    // Funcion para mezclar las cartas   
    function Barajar_Carta(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }    

    // Funcion para resetear el Juego
    function Resetear_Juego() {                      
        CartasEncontradas = 0;
        CartasVolteadas = [];
        UltimaCartaVolteada = null;
        Cartas.forEach(card => card.classList.remove('flipped'));
        setTimeout(() => {
            TableroJuego.innerHTML = '';
            if (ModoJuego === "MODO MOVIL"){
                Vibrar(250);
            }
            Iniciar_Juego();
        }, 500);
    }

    // Funcion para inciar el juego
    function Iniciar_Juego() { 
        if (JuegoIniciado === false){            
            Barajar_Carta(cardSet);
            Cartas = cardSet.map(value => CrearCarta(value));
            Cartas.forEach(card => TableroJuego.appendChild(card));
            JuegoIniciado = true;  // Empezar Juego        
        }                           
    }

    // Funcion de navegaccion entre menus
    function Manejo_Menus(IndiceMenu){
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
                Iniciar_Juego();
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
        }
    }

    BotonJugar.addEventListener('click', () => {  
        Sonido_Boton();      
        Manejo_Menus(1);
    });

    BotonPC.addEventListener('click', () => {  
        ModoJuego = "MODO PC"   
        Sonido_Boton();
        Manejo_Menus(2);
        
    });
 
    BotonMovil.addEventListener('click', () => {  
        ModoJuego = "MODO MOVIL"  
        if (!GiroActivado) {
            let confirmacion = confirm('¿Deseas permitir el uso del giroscopio para girar las cartas del juego?');
            if (confirmacion) {
                GiroActivado = true;            
                Manejo_Menus(2);                  
            } else {
                alert('Has rechazado el uso del giroscopio... Regresando a Inicio');                
                Manejo_Menus(0);
            }
        } else {
            GiroActivado = false;
            BotonGirosCopio.textContent = 'Girar Imagen No';
            alert('El uso del giroscopio ha sido deshabilitado. No se puede juugar en modo Movil... Regresando a Inicio');            
            Manejo_Menus(0);
        } 
        Sonido_Boton();                   
    });
    
    BotonResetear.addEventListener('click', () => {
        Sonido_Boton();        
        JuegoIniciado = false;  // El juego se reinicia antes de poder volver a iniciarlo.
        Resetear_Juego();
    });

    BotonAjustes.addEventListener('click', () =>{
        Sonido_Boton();
        if (ModoJuego === "MODO PC"){
            Manejo_Menus(3);
        }
        if (ModoJuego === "MODO MOVIL"){
            Manejo_Menus(3);
        }
    })

    BotonRegresar.addEventListener('click', () => {
        Sonido_Boton();
        Manejo_Menus(2);
    })

    BotonMusica.addEventListener('click', () => {          
        Sonido_Boton();
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
        Sonido_Boton();
        MusicaActiva = false;        
        BotonMusica.textContent = 'Musica';
        Resetear_Juego();
        JuegoIniciado = false;
        Manejo_Menus(0);
    })
});
