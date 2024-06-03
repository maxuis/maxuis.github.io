document.addEventListener('DOMContentLoaded', () => {
    const TableroJuego = document.getElementById('Tablero-Juego');
    // Menus
    const MenuInicio = document.getElementById('Menu-Inicio');
    const MenuModo = document.getElementById('Modo-Juego')
    const MenuJuego = document.getElementById('Juego');
    const MenuAjustesPC = document.getElementById('Menu-Ajustes-PC');
    const MenuAjustesMovil = document.getElementById('Menu-Ajustes-Movil');
    // Botones
    const BotonJugar = document.getElementById('Boton-Jugar'); 
    const BotonPC = document.getElementById('Boton-PC');
    const BotonMovil = document.getElementById('Boton-Movil');     
    const BotonResetear = document.getElementById('Boton-Resetear');
    const BotonAjustes = document.getElementById('Boton-Ajustes');
    // Botones Ajustes pc
    const BotonRegresarJuegoPC = document.getElementById('Boton-Regresar-Juego-PC');  
    const BotonMusicaPC = document.getElementById('Musica-PC');
    const BotonInicioPC = document.getElementById('Boton-Inicio-PC');     
    // Botones Ajustes Movil
    const BotonRegresarJuegoM = document.getElementById('Boton-Regresar-Juego-M');  
    const BotonMusicaM = document.getElementById('Musica-M');
    const BotonInicioM = document.getElementById('Boton-Inicio-M'); 
    const BotonGiros = document.getElementById('Boton-Giros'); 
    let Cartas = [];
    let CartasVolteadas = [];
    let CartasEncontradas = 0;
    let UltimaCartaVolteada = false;
    let GiroActivado = false;
    let MusicaActiva = false;
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

    function ManejoMenus(IndiceMenu){
        switch(IndiceMenu){
            case 0:
                MenuInicio.style.display = 'block' // 0
                MenuModo.style.display = 'none' // 1
                MenuJuego.style.display = 'none' // 2
                MenuAjustesPC.style.display = 'none' // 3
                MenuAjustesMovil.style.display = 'none' //4
                break;
            case 1:
                MenuInicio.style.display = 'none' // 0
                MenuModo.style.display = 'block' // 1
                MenuJuego.style.display = 'none' // 2
                MenuAjustesPC.style.display = 'none' // 3
                MenuAjustesMovil.style.display = 'none' //4
                break;
            case 2:
                MenuInicio.style.display = 'none' // 0
                MenuModo.style.display = 'none' // 1
                MenuJuego.style.display = 'block' // 2
                MenuAjustesPC.style.display = 'none' // 3
                MenuAjustesMovil.style.display = 'none' //4
                break;
            case 3:
                MenuInicio.style.display = 'none' // 0
                MenuModo.style.display = 'none' // 1
                MenuJuego.style.display = 'none' // 2
                MenuAjustesPC.style.display = 'block' // 3
                MenuAjustesMovil.style.display = 'none' //4
                break;
            case 4:
                MenuInicio.style.display = 'none' // 0
                MenuModo.style.display = 'none' // 1
                MenuJuego.style.display = 'none' // 2
                MenuAjustesPC.style.display = 'none' // 3
                MenuAjustesMovil.style.display = 'block' //4
                break;
        }
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
        if (ModoJuego === "MODO PC"){
            card.addEventListener('click', () => InvertirCarta(card, value));
        }
        if (ModoJuego === "MODO MOVIL"){
            Giroscopio_Movil();
        }
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
        ManejoMenus(1);
    });

    BotonPC.addEventListener('click', () => {  
        ModoJuego = "MODO PC"   
        ReproducirSonidoBoton();
        ManejoMenus(2);
        IniciarJuego();
    });
    
    BotonMovil.addEventListener('click', () => {  
        ModoJuego = "MODO MOVIL"   
        ReproducirSonidoBoton();      
        ManejoMenus(2);
        IniciarJuego();
    });
    
    BotonResetear.addEventListener('click', () => {
        ReproducirSonidoBoton();        
        JuegoIniciado = false;  // El juego se reinicia antes de poder volver a iniciarlo.
        ResetearJuego();
    });

    BotonAjustes.addEventListener('click', () =>{
        ReproducirSonidoBoton();
        if (ModoJuego === "MODO PC"){
            ManejoMenus(3);
        }
        if (ModoJuego === "MODO MOVIL"){
            ManejoMenus(4);
        }
    })

    BotonRegresarJuegoPC.addEventListener('click', () => {
        ReproducirSonidoBoton();
        ManejoMenus(1);
    })
    
    BotonMusicaPC.addEventListener('click', () => {
        ReproducirSonidoBoton();
        if (MusicaActiva) {
            // Si la música está activada, detenerla            
            BotonMusicaPC.textContent = 'Musica NO';
            MusicaActiva = false;            
            ReproducirSonidoAleatorio();
        } else {
            // Si la música está desactivada, reproducirla            
            BotonMusicaPC.textContent = 'Musica SI';
            MusicaActiva = true;            
            ReproducirSonidoAleatorio();
        }
    });

    BotonInicioPC.addEventListener('click', () => {
        ReproducirSonidoBoton();
        MusicaActiva = false;
        BotonMusicaPC.textContent = 'Musica'
        ManejoMenus(0);
        ResetearJuego();
    })

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
});
