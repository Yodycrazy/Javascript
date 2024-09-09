const canciones = ["Bruno.mp3", "Adventure.mp3", "Billie.mp3"];
let indiceActual = 0;

const cargarSonido = function (fuente) {
    const sonido = document.createElement("audio");
    sonido.src = fuente;
    sonido.setAttribute("preload", "auto");
    return sonido;
};

const actualizarSonido = () => {
    sonido.src = canciones[indiceActual];
};

const sonido = cargarSonido(canciones[indiceActual]);

const $botonReproducir = document.querySelector("#btnReproducir");
const $botonPausar = document.querySelector("#btnPausar");
const $botonSiguiente = document.querySelector("#btnSiguiente");
const $botonAtras = document.querySelector("#btnAtras");
const $botonReiniciar = document.querySelector("#btnReiniciar");

$botonReproducir.onclick = () => {
    sonido.play();
};

$botonPausar.onclick = () => {
    sonido.pause();
};

$botonSiguiente.onclick = () => {
    indiceActual = (indiceActual + 1) % canciones.length;
    actualizarSonido();
    sonido.play();
};

$botonAtras.onclick = () => {
    indiceActual = (indiceActual - 1 + canciones.length) % canciones.length;
    actualizarSonido();
    sonido.play();
};

$botonReiniciar.onclick = () => {
    indiceActual = 0;
    actualizarSonido();
    sonido.play();
};

const $listaCanciones = document.querySelector("#listaCanciones");
canciones.forEach((cancion, index) => {
    const $item = document.createElement("li");
    $item.textContent = `${index + 1}. ${cancion}`;
    $listaCanciones.appendChild($item);
});
