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
    let IndiceMenu = 0; // Índice del menú 
    let PosibilidadGiros = "NNN"    

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

    // API de Vibracion
    function Vibrar(duration) {
        if (navigator.vibrate) {
            navigator.vibrate(duration);
        }
    }  
    
    function InvertirCarta(Carta, Valor) {
        SonidoBoton();
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
                    SonidoBoton();                    
                } else {
                    setTimeout(() => {
                        SonidoBoton();  
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

    // Función para verificar la presencia del giroscopio
    function verificarGiroscopio() {
        if ('DeviceOrientationEvent' in window) {
            window.addEventListener('deviceorientation', function(event) {
                if (event.alpha !== null || event.beta !== null || event.gamma !== null) {
                    console.log("Giroscopio disponible");
                    PosibilidadGiros = "GIROSCOPIO DISPONIBLE"
                    // Giroscopio disponible, puedes activar tu lógica aquí
                } else {
                    console.log("Giroscopio no disponible");
                    PosibilidadGiros = "GIROSCOPIO NO DISPONIBLE"
                    // Giroscopio no disponible, manejar adecuadamente
                }
            }, { once: true });
        } else {
            console.log("DeviceOrientationEvent no soportado");
            PosibilidadGiros = "GIROSCOPIO NO SOPORTADO"
            // DeviceOrientationEvent no es soportado, manejar adecuadamente
        }
    }

    // Llamar a la función para verificar el giroscopio
    verificarGiroscopio();

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

    if (ModoJuego === "MODO MOVIL"){
        Evento_Giroscopio();
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

    function CrearCarta(Valor) {
        const Carta = document.createElement('div');
        Carta.classList.add('card');
        Carta.innerHTML = ` 
            <div class="front"></div>
            <div class="back">${Valor}</div>
        `;
        Carta.addEventListener('click', () => {
            Carta.style.border = '1px solid red';
            Carta.style.transform = 'scale(1.001)';
            Carta.style.transition = 'all 0.2s ease';
            if (ModoJuego === "MODO PC"){
                setTimeout(() => {
                    InvertirCarta(Carta, Valor);
                }, 200); // Modo PC
            }
            if (ModoJuego === "MODO MOVIL"){                
                switch (PosibilidadGiros){
                    case "GIROSCOPIO DISPONIBLE":
                        // Se puede utilizar el giroscopio
                        break;  
                        // En caso de que el giroscopio no esté disponible por el tipo de celular                      
                    case "GIROSCOPIO NO DISPONIBLE":
                        setTimeout(() => {
                            InvertirCarta(Carta, Valor);
                        }, 200);
                        break;
                    case "GIROSCOPIO NO SOPORTADO":
                        alert("No soporta giroscopio")
                        ManejoMenus(1);
                        break;
                }

            }            
        });                   
        return Carta;
    }       

    function ResetearJuego() {
        Debug.textContent = "Reseteado";
        CartasEncontradas = 0;
        CartasVolteadas = [];
        UltimaCartaVolteada = null;
        Cartas.forEach(card => card.classList.remove('flipped'));
        setTimeout(() => {
            TableroJuego.innerHTML = '';
            if (ModoJuego === "MODO MOVIL"){
                Debug.textContent = "Vibrar";
                Vibrar(250);
            }
            IniciarJuego();
            Debug.textContent = "Iniciar Juego";
        }, 500);
    }

    function IniciarJuego() { 
        Debug.textContent = "";
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
            alert('El uso del giroscopio ha sido deshabilitado. No se puede jugar en modo Movil... Regresando a Inicio');            
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
            ManejoMenus(3);
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
