// Definimos constantes necesarias
const PORT = 3000; // Puerto donde correrá nuestro servidor
const nombre_coleccion = "Songs"; // Nombre de la colección que queremos recuperar

// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {
    const busquedapornombre = document.getElementById("buscarNombre"); // Input de búsqueda por nombre
    const busquedaporautor = document.getElementById("buscarAutor"); // Input de búsqueda por email
    const busquedaporfecha = document.getElementById("buscarFecha"); // Input de búsqueda 
    const botonbuscarporduracion = document.getElementById("buscarDuracion"); // Botón para buscar por nombre
    const botonbuscartodo = document.getElementById("buscarTodo");// Botón para mostrar todos los usuarios
    const mensajesalida = document.getElementById("songsbox"); // Contenedor donde se mostrarán los resultados

/** 
* Función para consultar usuarios en el servidor. Si no se pasa ningún filtro devuelve todos los usuarios.
* @param {string} filtro - Filtro que queremos aplicar a la búsqueda
* @param {string} valor - Valor del filtro
*/
async function consultarUsuarios(filtro = "todos", valor = "") {
    try {
        let url = `http://localhost:${PORT}/${nombre_coleccion}`; // URL base de la API

    // Si se ha indicado un filtro, lo agregamos a la URL con parámetros de consulta
    if (filtro === "nombre") {
        url += `?nombre=${encodeURIComponent(valor)}`; // Búsqueda por nombre
    } else if (filtro === "autor") {
        url += `?autor=${encodeURIComponent(valor)}`; // Búsqueda por autor
    } else if (filtro === "duracion") {
        url += `?duracion=${encodeURIComponent(valor)}`; // Búsqueda por duracion
    } else if (filtro === "fechaLanzamiento") {
        url += `?fechaLanzamiento=${encodeURIComponent(valor)}`; // Búsqueda por fechaLanzamiento
    }

// Realizamos la petición al servidor con Fetch
const response = await fetch(url);
const canciones = await response.json(); // Convertimos la respuesta a JSON

// Mostramos los usuarios en la página
mostrarCanciones(canciones);
} catch (error) {
console.error("Error consultando usuarios:", error); // Mostramos el error en la consola
mensajesalida.innerHTML = `<p>Error consultando usuarios: ${error}</p>`; // Mostramos mensaje de error en la interfaz
}
}

/**
* Muestra los usuarios obtenidos en la página web
* @param {Array<Songs>} canciones - Lista de canciones a mostrar
* @returns
*/
function mostrarCanciones(canciones) {
mensajesalida.innerHTML = ""; // Limpiamos el contenedor de resultados

// Si no hay usuarios encontrados, mostramos un mensaje
if (canciones.length === 0) {
mensajesalida.innerHTML = "<p>No se encontraron usuarios.</p>";

return;
}
/*

                <div class="song">
                    <h3 class="TituloCancion">Troblemaker</h3>
                    <div class="contenidoSong">
                        <img class="imgBuscador" src="../images/imagen.png" alt="Foto">
                        <div class="info">
                            <p class="parr">🎤 Olly Murs</p>
                            <p class="parr">⏱️ 3:05</p>
                            <p class="parr">🎹 2012</p>
                        </div>
                    </div>
                </div>


*/

// Recorremos la lista de usuarios y creamos un div para cada uno
canciones.forEach(canciones => {
let div = document.createElement("div");
div.classList.add("song");
const cajaMain = document.getElementById("songsbox");
div.classList.add("grid-item"); // Clase CSS para el estilo del grid
div.innerHTML = `<h3 class="TituloCancion"><span>${canciones.nombre}</span></h3>
<div class="contenidoSong">
    <img class="imgBuscador" src="../images/imagen.png" alt="Foto">
    <div class="info">
        <p class="parr">🎤 <span>${canciones.autor}</span></p>
        <p class="parr">⏱️ <span>${canciones.duracion}</span></p>
        <p class="parr">🎹 <span>${canciones.fechaLanzamiento}</span></p>
    </div>
</div>`;
 cajaMain.appendChild(div);
 mensajesalida.appendChild(div); // Agregamos el div al contenedor de salida
});
}

// Eventos de búsqueda
busquedapornombre.addEventListener("click", () => consultarUsuarios("nombre", busquedapornombre.value.trim())); // Buscar por nombre
busquedaporautor.addEventListener("click", () => consultarUsuarios("autor", busquedaporautor.value.trim())); // Buscar por
busquedaporfecha.addEventListener("click", () => consultarUsuarios("fechaLanzamiento", busquedaporfecha.value.trim())); // 
botonbuscarporduracion.addEventListener("click", () => consultarUsuarios("duracion", botonbuscarporduracion.value.trim())); // 
botonbuscartodo.addEventListener("click", () => consultarUsuarios()); // Mostrar todos los usuarios
});