// Variables globales
const BotonJugar = document.getElementById('Boton-Jugar'); 
const Juego = document.getElementById('Juego');
const BotonMusica = document.getElementById('Musica');
const canvas = document.getElementById("Juego-Canvas");
const ctx = canvas.getContext("2d");
const EstadoJuego = document.getElementById('Estados-Juego');
let JuegoIniciado = false;
let tocando = false;
canvas.width = 900;
canvas.height = 600;

const AnchoPaleta = 10;
const LargoPaleta = 100;
const RadioPelota = 10;

const NumerosDeHackeo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let MusicaActiva = false;
let Tiempo = 5000
let JugadorPosY = (canvas.height - LargoPaleta) / 2;
let MaquinaPosY = (canvas.height - LargoPaleta) / 2;
let PelotaX = canvas.width / 2;
let PelotaY = canvas.height / 2;
let PelotaVelX = 5;
let PelotaVelY = 5;
let PuntosJugador = 0;
let VelPaletaJugador = 0.2;
let PuntosMaquina = 0;
let VelPaletaMaquina = 7;
let Umbral = 15;

// La paleta Jugador con sus propiedades
const PaletaJugador = {
    x: 0,
    y: JugadorPosY,
    EstadoJugador: "",
    Ancho: AnchoPaleta,
    Alto: LargoPaleta
};

// La paleta Maquina con sus propiedades
const PaletaMaquina = {
    x: canvas.width - AnchoPaleta,
    y: MaquinaPosY,
    EstadoMaquina: "",
    PosibilidadesMaquina: "",
    Ancho: AnchoPaleta,
    Alto: LargoPaleta
};

// Array de sonidos de musica
const Musicas = [
    new Audio('Sonidos/Sonido1.mp3'),
    new Audio('Sonidos/Sonido2.mp3'),
    new Audio('Sonidos/Sonido3.mp3'),
    new Audio('Sonidos/Sonido4.mp3'),
    new Audio('Sonidos/Sonido5.mp3')
];

// funcion que se ejecuta cuando la musica esta activada
function Reproduccir_Musica() {
    // Verificar si la música está habilitada
    if (MusicaActiva) {
        // Si la música está habilitada, reproducir sonido aleatorio
        const randomIndex = Math.floor(Math.random() * Musicas.length);
        const sound = Musicas[randomIndex];
        sound.play();
        sound.onended = () => {
            // Si el sonido termina, verificar si la música aún está habilitada antes de reproducir otro sonido
            if (MusicaActiva) {
                Reproduccir_Musica();
            }
        };
    }
} 

// Funcion para añadir musica a los botones
function Sonido_Boton() {
    const clickSound = new Audio('Sonidos/Sonido6.mp3');
    clickSound.play();
}

// Funcion para añadir musica al juego
BotonMusica.addEventListener('click', () => {
    Sonido_Boton();
    if (MusicaActiva) {
        // Si la música está activada, detenerla            
        BotonMusica.textContent = 'Musica NO';
        MusicaActiva = false;            
        Reproduccir_Musica();
    } else {
        // Si la música está desactivada, reproducirla            
        BotonMusica.textContent = 'Musica SI';
        MusicaActiva = true;            
        Reproduccir_Musica();
    }
});

// Boton jugar para iniciar el juego
BotonJugar.addEventListener('click', () => {  
    Sonido_Boton();      
    Menu.style.display = 'none';
    Juego.style.display = 'block';
    JuegoIniciado = true;    
});

// Funcion de dibujar rectangulo de las paletas
function Dibujar_Rectangulo(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

// Funcion para dibujar circulo de la pelota
function Dibujar_Circulo(x, y, r, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
}

// Funcion para escribir texto
function Escribir_Texto(text, x, y, color) {
    ctx.fillStyle = color;
    ctx.font = "32px Arial";
    ctx.fillText(text, x, y);
}

// Funcion para resetear pelota
function Resetear_Pelota() {
    Sonido_Boton();   
    PelotaX = canvas.width / 2;
    PelotaY = canvas.height / 2;
    PelotaVelX = -PelotaVelX;
    PelotaVelY = 5;
}

// Funcion para deccidir a quien hackear
function Quien_Hackear(){
    return Math.floor(Math.random() * NumerosDeHackeo.length);
}

// Funcion de diferentes estados del juego
function Estados_Juego(){
    let IndiceDeHackeo = Quien_Hackear();
    let TurnoHackear = NumerosDeHackeo[IndiceDeHackeo];
    switch (TurnoHackear) {
        case 0:
            PelotaVelX = 10;
            PelotaVelY = 10;            
            VelPaletaJugador = 0.2;
            VelPaletaMaquina = 7;
            Umbral = 15;
            EstadoJuego.textContent = "Estado: Pelota Acelerada I"
            break;
        case 1:
            PelotaVelX = 1;
            PelotaVelY = 1;            
            VelPaletaJugador = 0.2;
            VelPaletaMaquina = 7;
            Umbral = 15;
            EstadoJuego.textContent = "Estado: Pelota Relentizada I";
            break;
        case 2:
            VelPaletaMaquina = 0;
            PelotaVelX = 5;
            PelotaVelY = 5;
            VelPaletaJugador = 0.2;
            Umbral = 15;
            EstadoJuego.textContent = "Estado: Maquina Sellada";
            break;
        case 3:
            VelPaletaMaquina = 10;
            PelotaVelX = 5;
            PelotaVelY = 5;
            VelPaletaJugador = 0.2;
            Umbral = 10;
            EstadoJuego.textContent = "Estado: Maquina Acelerada I";
            break;
        case 4:
            VelPaletaMaquina = 1;
            PelotaVelX = 5;
            PelotaVelY = 5;
            VelPaletaJugador = 0.2;
            Umbral = 15;
            EstadoJuego.textContent = "Estado: Maquina Relentizada I";
            break;
        case 5:
            VelPaletaJugador = 0.5;
            PelotaVelX = 5;
            PelotaVelY = 5;
            VelPaletaMaquina = 7;
            Umbral = 15;
            EstadoJuego.textContent = "Estado: Jugador Acelerado";
            break;
        case 6:
            VelPaletaJugador = 0.05;
            PelotaVelX = 5;
            PelotaVelY = 5;
            VelPaletaMaquina = 7;
            Umbral = 15;
            EstadoJuego.textContent = "Estado: Jugador Relentizado";
            break;
        case 7:
            VelPaletaJugador = 0;
            PelotaVelX = 5;
            PelotaVelY = 5;            
            VelPaletaMaquina = 7;
            Umbral = 15;
            EstadoJuego.textContent = "Estado: Jugador Sellado";            
            break;
        case 8:            
            PelotaVelX = 5;
            PelotaVelY = 5;            
            VelPaletaJugador = 0.2;            
            VelPaletaMaquina = 7;
            Umbral = 15;
            EstadoJuego.textContent = "Estado: Estable";
            break;
        case 9:            
            PelotaVelX = 15;
            PelotaVelY = 15;            
            VelPaletaJugador = 0.2;            
            VelPaletaMaquina = 7;
            Umbral = 15;
            setTimeout(() => {
                if ((PuntosJugador >= PuntosMaquina) || (PuntosJugador <= PuntosMaquina)){
                    PelotaVelX = 20; PelotaVelY = 20;
                }
            }, 500);
            EstadoJuego.textContent = "Estado: Pelota Acelerada II";            
            break; 
        case 10:
            PelotaVelX = 25;
            PelotaVelY = 25;
            VelPaletaJugador = 0.2;            
            VelPaletaMaquina = 7;
            Umbral = 15;
            setTimeout(() => {
                if ((PuntosJugador >= PuntosMaquina) || (PuntosJugador <= PuntosMaquina)){
                    PelotaVelX = 30; PelotaVelY = 30;
                }
                setTimeout(() => {
                    if ((PuntosJugador >= PuntosMaquina) || (PuntosJugador <= PuntosMaquina)){
                        PelotaVelX = 35; PelotaVelY = 35;
                    }                    
                }, 600);
            }, 300);
            EstadoJuego.textContent = "Estado del Juego: Pelota Acelerada III";
            break;

    }
}

// Funcion que determina las posibilidades de la MEF
function Posibilidades_Maquina() {
    let PaletaCentralMaquina = PaletaMaquina.y + (PaletaMaquina.Alto / 2);
    let Diferencia = PelotaY - PaletaCentralMaquina;

    if (Diferencia > Umbral) {
        PaletaMaquina.PosibilidadesMaquina = "ATAJABLE +";
    } else if (Diferencia < -Umbral) {
        PaletaMaquina.PosibilidadesMaquina = "ATAJABLE -";
    } else {
        PaletaMaquina.PosibilidadesMaquina = "INATAJABLE";
    }
}

// Funcion de posibilidades que desencadenan estados
function EstadosPosibles_Maquina() {
    switch (PaletaMaquina.PosibilidadesMaquina) {
        case "ATAJABLE +":
            PaletaMaquina.EstadoMaquina = "SUBIR";
            break;
        case "ATAJABLE -":
            PaletaMaquina.EstadoMaquina = "BAJAR";
            break;
        case "INATAJABLE":
            PaletaMaquina.EstadoMaquina = "QUIETO";
            break;
    }
}

// Funcion de los estados de la MEF
function Estados_Maquina() {
    switch (PaletaMaquina.EstadoMaquina) {
        case "SUBIR":
            PaletaMaquina.y += VelPaletaMaquina;
            break;
        case "BAJAR":
            PaletaMaquina.y -= VelPaletaMaquina;
            break;
        case "QUIETO":
            // NADA
            break;
    }
}

// Funcion de la MEF 
function MEF_Maquina() {
    Posibilidades_Maquina();
    EstadosPosibles_Maquina();
    Estados_Maquina();
}

// Funcion de renderizar los objetos de juego
function Actualizador() {
    PelotaX += PelotaVelX;
    PelotaY += PelotaVelY;

    if (PelotaY + RadioPelota > canvas.height || PelotaY - RadioPelota < 0) {
        PelotaVelY = -PelotaVelY;
    }

    MEF_Maquina();

    if (PelotaX - RadioPelota < 0) {
        if (PelotaY > PaletaJugador.y && PelotaY < PaletaJugador.y + PaletaJugador.Alto) {
            PelotaVelX = -PelotaVelX;
            Sonido_Boton();
        } else {
            PuntosMaquina++;
            Resetear_Pelota();
        }
    }

    if (PelotaX + RadioPelota > canvas.width) {
        if (PelotaY > PaletaMaquina.y && PelotaY < PaletaMaquina.y + PaletaMaquina.Alto) {
            PelotaVelX = -PelotaVelX;
            Sonido_Boton();
        } else {
            PuntosJugador++;
            
            Resetear_Pelota();
        }
    }
}

// Funcion para renderizar los objetos de juego
function Renderizar() {
    Dibujar_Rectangulo(0, 0, canvas.width, canvas.height, "#00000080");
    Dibujar_Rectangulo(PaletaJugador.x, PaletaJugador.y, PaletaJugador.Ancho, PaletaJugador.Alto, "#0001FF");
    Dibujar_Rectangulo(PaletaMaquina.x, PaletaMaquina.y, PaletaMaquina.Ancho, PaletaMaquina.Alto, "#FF0000");
    Dibujar_Circulo(PelotaX, PelotaY, RadioPelota, "#00FF00");
    Escribir_Texto(PuntosJugador, canvas.width / 4, 50, "#7100FF");
    Escribir_Texto(PuntosMaquina, 3 * canvas.width / 4, 50, "#FF4700");
}

// Funcion del bucle del juego
function BucleJuego() {
    if (JuegoIniciado){
        Actualizador();
        Renderizar();
    }    
}

// Funcion para dibujar la paleta en móviles
function actualizarPosicionPaleta(touch) {
    let rect = canvas.getBoundingClientRect();
    let nuevaY = touch.clientY - rect.top - LargoPaleta / 2;
    
    // Interpolación lineal para suavizar el movimiento de la paleta
    PaletaJugador.y += (nuevaY - PaletaJugador.y) * VelPaletaJugador;
}

// Evento para detectar cuando se presiona la pantalla en dispositivos móviles
canvas.addEventListener("touchstart", function(event) {
    tocando = true;
    actualizarPosicionPaleta(event.touches[0]);
    event.preventDefault(); // Previene comportamientos predeterminados, como el scroll
});

// Evento para detectar cuando se mueve el dedo en la pantalla en dispositivos móviles
canvas.addEventListener("touchmove", function(event) {
    if (tocando) {
        actualizarPosicionPaleta(event.touches[0]);
    }
    event.preventDefault(); // Previene comportamientos predeterminados, como el scroll
});

// Evento para detectar cuando se suelta la pantalla en dispositivos móviles
canvas.addEventListener("touchend", function(event) {
    tocando = false;
    event.preventDefault(); // Previene comportamientos predeterminados, como el scroll
});

// Evento para detectar cuando se cancela la interacción táctil en dispositivos móviles
canvas.addEventListener("touchcancel", function(event) {
    tocando = false;
    event.preventDefault(); // Previene comportamientos predeterminados, como el scroll
});

// Evento para detectar cuando se mueve el mouse en computadoras
canvas.addEventListener("mousemove", function(event) {
    let rect = canvas.getBoundingClientRect();
    let nuevaY = event.clientY - rect.top - LargoPaleta / 2;
    
    // Interpolación lineal para suavizar el movimiento de la paleta
    PaletaJugador.y += (nuevaY - PaletaJugador.y) * VelPaletaJugador;
});

setInterval(BucleJuego, 1000 / 60);

// Funcion para alterar el tiempo de Hackeos
function GenerarTiempoAletorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;    
}

// Generar un Hackeo o normalizar el juego
setInterval(() => {        
    Tiempo = GenerarTiempoAletorio(3500, 7500);
    Estados_Juego();
}, Tiempo);
