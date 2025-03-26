// Detectar el evento cuando el cursor está sobre el botón
const boton = document.querySelector('.index-boton');
let timer;
let easterEggActivated = false; // Variable para asegurar que solo se active una vez
let clickCount = 0; // Contador de clics

// Función para obtener una posición aleatoria dentro de la pantalla
function obtenerPosicionAleatoria() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    let randomX = Math.random() * (screenWidth - 200); // Evita que la imagen se salga de los bordes
    let randomY = Math.random() * (screenHeight - 200);
    
    return { x: randomX, y: randomY };
}

// Función para mostrar el Easter Egg
function mostrarEasterEgg() {
    const easterEggContainer = document.getElementById('easter-egg-container');
    const easterEggImage = document.getElementById('easter-egg-image');
    const body = document.body;

    // Mostrar la imagen y activar la animación
    easterEggContainer.style.display = 'block';
    body.classList.add('easter-egg-active');

    // Posicionar la imagen en un lugar aleatorio al iniciar
    let nuevaPosicion = obtenerPosicionAleatoria();
    easterEggContainer.style.left = `${nuevaPosicion.x}px`;
    easterEggContainer.style.top = `${nuevaPosicion.y}px`;

    // Detectar el fin de cada ciclo de la animación y cambiar la posición
    easterEggImage.addEventListener("animationiteration", function () {
        let nuevaPosicion = obtenerPosicionAleatoria();
        easterEggContainer.style.left = `${nuevaPosicion.x}px`;
        easterEggContainer.style.top = `${nuevaPosicion.y}px`;
    });
}

// Función para ocultar el Easter Egg después de 3 clics
function ocultarEasterEgg() {
    const easterEggContainer = document.getElementById('easter-egg-container');
    const body = document.body;

    // Ocultar la imagen y detener la animación
    easterEggContainer.style.display = 'none';
    body.classList.remove('easter-egg-active');
    clickCount = 0; // Resetear el contador de clics
}

// Detectar clics en cualquier parte de la pantalla
document.body.addEventListener('click', () => {
    if (clickCount < 3) {
        clickCount++; // Incrementar el contador de clics

        // Si llega a 3 clics, ocultamos el Easter Egg
        if (clickCount === 3) {
            ocultarEasterEgg();
        }
    }
});

// Detener la acción si el cursor sale antes de los 5 segundos
boton.addEventListener('mouseenter', () => {
    timer = setTimeout(mostrarEasterEgg, 2000); // Esperar 2 segundos
});

boton.addEventListener('mouseleave', () => {
    clearTimeout(timer); // Limpiar el temporizador si el cursor sale antes del tiempo establecido
});

/*
EL ACTUAL

// Detectar el evento cuando el cursor está sobre el botón
const boton = document.querySelector('.index-boton');
let timer;
let easterEggActivated = false; // Variable para asegurar que solo se active una vez
let clickCount = 0; // Contador de clics

// Función para obtener una posición aleatoria dentro de la pantalla
function obtenerPosicionAleatoria() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    let randomX = Math.random() * (screenWidth - 200); // Evita que la imagen se salga de los bordes
    let randomY = Math.random() * (screenHeight - 200);
    
    return { x: randomX, y: randomY };
}

// Función para mostrar el Easter Egg
function mostrarEasterEgg() {
    const easterEggContainer = document.getElementById('easter-egg-container');
    const easterEggImage = document.getElementById('easter-egg-image');
    const body = document.body;

    // Mostrar la imagen y activar la animación
    easterEggContainer.style.display = 'block';
    body.classList.add('easter-egg-active');

    // Posicionar la imagen en un lugar aleatorio al iniciar
    let nuevaPosicion = obtenerPosicionAleatoria();
    easterEggContainer.style.left = `${nuevaPosicion.x}px`;
    easterEggContainer.style.top = `${nuevaPosicion.y}px`;

    // Detectar el fin de cada ciclo de la animación y cambiar la posición
    easterEggImage.addEventListener("animationiteration", function () {
        let nuevaPosicion = obtenerPosicionAleatoria();
        easterEggContainer.style.left = `${nuevaPosicion.x}px`;
        easterEggContainer.style.top = `${nuevaPosicion.y}px`;
    });
}

// Función para ocultar el Easter Egg después de 3 clics
function ocultarEasterEgg() {
    const easterEggContainer = document.getElementById('easter-egg-container');
    const body = document.body;

    // Ocultar la imagen y detener la animación
    easterEggContainer.style.display = 'none';
    body.classList.remove('easter-egg-active');
    clickCount = 0; // Resetear el contador de clics
}

// Detectar clics en cualquier parte de la pantalla
document.body.addEventListener('click', () => {
    if (clickCount < 3) {
        clickCount++; // Incrementar el contador de clics

        // Si llega a 3 clics, ocultamos el Easter Egg
        if (clickCount === 3) {
            ocultarEasterEgg();
        }
    }
});

// Detener la acción si el cursor sale antes de los 5 segundos
boton.addEventListener('mouseenter', () => {
    timer = setTimeout(mostrarEasterEgg, 2000); // Esperar 2 segundos
});

boton.addEventListener('mouseleave', () => {
    clearTimeout(timer); // Limpiar el temporizador si el cursor sale antes del tiempo establecido
});
*/

/*
EL ANTERIOR POR SI ACASO, PERO ESE ESTA BIEN

// Detectar el evento cuando el cursor está sobre el botón
const boton = document.querySelector('.index-boton');
let timer;
let easterEggActivated = false; // Variable para asegurar que solo se active una vez
let clickCount = 0; // Contador de clics

// Función para mostrar el Easter Egg
function mostrarEasterEgg() {
    const easterEggContainer = document.getElementById('easter-egg-container');
    const easterEggImage = document.getElementById('easter-egg-image');
    const body = document.body;

    // Mostrar la imagen y activar la animación
    easterEggContainer.style.display = 'block';
    body.classList.add('easter-egg-active');
}

// Función para ocultar el Easter Egg después de 3 clics
function ocultarEasterEgg() {
    const easterEggContainer = document.getElementById('easter-egg-container');
    const body = document.body;

    // Ocultar la imagen y detener la animación
    easterEggContainer.style.display = 'none';
    body.classList.remove('easter-egg-active');
    clickCount = 0; // Resetear el contador de clics
}

// Detectar clics en cualquier parte de la pantalla
document.body.addEventListener('click', () => {
    if (clickCount < 3) {
        clickCount++; // Incrementar el contador de clics

        // Si llega a 3 clics, ocultamos el Easter Egg
        if (clickCount === 3) {
            ocultarEasterEgg();
        }
    }
});

// Detener la acción si el cursor sale antes de los 5 segundos
boton.addEventListener('mouseenter', () => {
    timer = setTimeout(mostrarEasterEgg, 2000); // Esperar 5 segundos
});

boton.addEventListener('mouseleave', () => {
    clearTimeout(timer); // Limpiar el temporizador si el cursor sale antes de 5 segundos
});

*/