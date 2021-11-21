let jugador = document.getElementById("player");
let puntaje = 0;
let tiempo = 30;
let sound = new Audio("src/audio/moneda.mp3");

jugador.addEventListener("mouseover", () => {

    sound.play();

    let positionTop = Math.round(Math.random() * 400);
    let positionLeft = Math.round(Math.random() * 700);

    jugador.style.top = `${positionTop}px`;
    jugador.style.left = `${positionLeft}px`;

    puntaje++;

    document.getElementById("puntaje").innerHTML = `Puntaje: ${puntaje}`;

});

setInterval(() => {
    
    tiempo--;

    document.getElementById("time").innerHTML = `Tiempo: ${tiempo}`;

    if (tiempo == -1) {

        alert(`Felicidades !!! \nTu puntaje en este juego ha sido de: ${puntaje} puntos`);
        location.reload();

    }

}, 1000);