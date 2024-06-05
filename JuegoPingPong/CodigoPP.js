const BotonJugar = document.getElementById('Boton-Jugar'); 
const Juego = document.getElementById('Juego');
const BotonMusica = document.getElementById('Musica');
const canvas = document.getElementById("Juego-Canvas");
const ctx = canvas.getContext("2d");
let JuegoIniciado = false;
canvas.width = 800;
canvas.height = 600;

const AnchoPaleta = 10;
const LargoPaleta = 100;
const RadioPelota = 10;

let MusicaActiva = false;

let JugadorPosY = (canvas.height - LargoPaleta) / 2;
let MaquinaPosY = (canvas.height - LargoPaleta) / 2;
let PelotaX = canvas.width / 2;
let PelotaY = canvas.height / 2;
let PelotaVelX = 5;
let PelotaVelY = 5;
let PuntosJugador = 0;
let PuntosMaquina = 0;
let VelPaletaMaquina = 3;
let Umbral = 25;

const PaletaJugador = {
    x: 0,
    y: JugadorPosY,
    EstadoJugador: "",
    Ancho: AnchoPaleta,
    Alto: LargoPaleta
};

const PaletaMaquina = {
    x: canvas.width - AnchoPaleta,
    y: MaquinaPosY,
    EstadoMaquina: "",
    PosibilidadesMaquina: "",
    Ancho: AnchoPaleta,
    Alto: LargoPaleta
};

const Musicas = [
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


BotonJugar.addEventListener('click', () => {  
    ReproducirSonidoBoton();      
    Menu.style.display = 'none';
    Juego.style.display = 'block';
    JuegoIniciado = true;    
});

function DibujarRectangulo(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

function DibujarCirculo(x, y, r, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
}

function EscribirTexto(text, x, y, color) {
    ctx.fillStyle = color;
    ctx.font = "32px Arial";
    ctx.fillText(text, x, y);
}

function ResetearPelota() {
    ReproducirSonidoBoton();   
    PelotaX = canvas.width / 2;
    PelotaY = canvas.height / 2;
    PelotaVelX = -PelotaVelX;
    PelotaVelY = 5;
}

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

function MEF_Maquina() {
    Posibilidades_Maquina();
    EstadosPosibles_Maquina();
    Estados_Maquina();
}

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
            ReproducirSonidoBoton();
        } else {
            PuntosMaquina++;
            ResetearPelota();
        }
    }

    if (PelotaX + RadioPelota > canvas.width) {
        if (PelotaY > PaletaMaquina.y && PelotaY < PaletaMaquina.y + PaletaMaquina.Alto) {
            PelotaVelX = -PelotaVelX;
            ReproducirSonidoBoton();
        } else {
            PuntosJugador++;
            
            ResetearPelota();
        }
    }
}

function Renderizar() {
    DibujarRectangulo(0, 0, canvas.width, canvas.height, "#000");
    DibujarRectangulo(PaletaJugador.x, PaletaJugador.y, PaletaJugador.Ancho, PaletaJugador.Alto, "#fff");
    DibujarRectangulo(PaletaMaquina.x, PaletaMaquina.y, PaletaMaquina.Ancho, PaletaMaquina.Alto, "#fff");
    DibujarCirculo(PelotaX, PelotaY, RadioPelota, "#fff");
    EscribirTexto(PuntosJugador, canvas.width / 4, 50, "#fff");
    EscribirTexto(PuntosMaquina, 3 * canvas.width / 4, 50, "#fff");
}

function BucleJuego() {
    if (JuegoIniciado){
        Actualizador();
        Renderizar();
    }    
}

canvas.addEventListener("mousemove", function(event) {
    let rect = canvas.getBoundingClientRect();
    let root = document.documentElement;
    PaletaJugador.y = event.clientY - rect.top - LargoPaleta / 2;
});

setInterval(BucleJuego, 1000 / 60);

setInterval(() => {    
    VelPaletaMaquina ++;
    if (VelPaletaMaquina >= 10) {
        VelPaletaMaquina = 3;
    }
}, 1000);