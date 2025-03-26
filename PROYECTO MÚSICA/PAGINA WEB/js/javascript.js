// Definimos constantes necesarias
const PORT = 3000; // Puerto donde correrá nuestro servidor
const nombre_coleccion = "Songs"; // Nombre de la colección que queremos recuperar

// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {
    const busquedapornombre = document.getElementById("busquedapornombre"); // Input de búsqueda por nombre
    const busquedaporemail = document.getElementById("busquedaporemail"); // Input de búsqueda por email
    const busquedaporhobbie = document.getElementById("busquedaporhobbie"); // Input de búsqueda por hobby
    const botonbuscarpornombre = document.getElementById("botonbuscarpornombre"); // Botón para buscar por nombre
    const botonbuscarporemail = document.getElementById("botonbuscarporemail"); // Botón para buscar por email
    const botonbuscarporhobbie = document.getElementById("botonbuscarporhobbie"); // Botón para buscar por hobby
    const botonbuscartodo = document.getElementById("botonbuscartodo");// Botón para mostrar todos los usuarios
    const mensajesalida = document.getElementById("mensajesalida"); // Contenedor donde se mostrarán los resultados

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
    } else if (filtro === "hobbies") {
        let hobbiesArray = valor.split(",").map(h => h.trim());
        url += `?hobbies=${encodeURIComponent(JSON.stringify(hobbiesArray))}`; // Búsqueda por múltiples hobbies
    }

// Realizamos la petición al servidor con Fetch
const response = await fetch(url);
const usuarios = await response.json(); // Convertimos la respuesta a JSON

// Mostramos los usuarios en la página
mostrarUsuarios(usuarios);
} catch (error) {
console.error("Error consultando usuarios:", error); // Mostramos el error en la consola
mensajesalida.innerHTML = `<p>Error consultando usuarios: ${error}</p>`; // Mostramos mensaje de error en la interfaz
}
}

/**
* Muestra los usuarios obtenidos en la página web
* @param {Array<usuario>} usuarios - Lista de usuarios a mostrar
* @returns
*/
function mostrarUsuarios(usuarios) {
mensajesalida.innerHTML = ""; // Limpiamos el contenedor de resultados

// Si no hay usuarios encontrados, mostramos un mensaje
if (usuarios.length === 0) {
mensajesalida.innerHTML = "<p>No se encontraron usuarios.</p>";

return;
}

// Recorremos la lista de usuarios y creamos un div para cada uno
usuarios.forEach(usuario => {
let div = document.createElement("div");
div.classList.add("grid-item"); // Clase CSS para el estilo del grid
div.innerHTML = `<p><strong><u>Nombre:</u></strong> <span>${usuario.nombre}</span></p>
<p><strong><u>Email:</u></strong> <span>${usuario.email}</span></p>
<p><strong><u>Edad:</u></strong> <span>${usuario.edad}</span></p>
<p><strong><u>Ciudad:</u></strong> <span>${usuario.ciudad}</span></p>
<p><strong><u>Hobbies:</u></strong> <span>${usuario.hobbies ? usuario.hobbies.join(", ") : "N/A"}</span></p>`;
 mensajesalida.appendChild(div); // Agregamos el div al contenedor de salida
});
}

// Eventos de búsqueda
botonbuscarpornombre.addEventListener("click", () => consultarUsuarios("nombre", busquedapornombre.value.trim())); // Buscar por nombre
botonbuscarporemail.addEventListener("click", () => consultarUsuarios("email", busquedaporemail.value.trim())); // Buscar por email
botonbuscarporhobbie.addEventListener("click", () => consultarUsuarios("hobbies", busquedaporhobbie.value.trim())); // Buscar por hobbies
botonbuscartodo.addEventListener("click", () => consultarUsuarios()); // Mostrar todos los usuarios
});