import { binaryToGray, grayToBinary } from './traductor.js'
// Obtener los elementos del DOM
const opcionesDropdown = document.getElementById('opciones');
const textoInput = document.getElementById('texto');
const salidaTextarea = document.getElementById('salida');


// Asignar un evento al cambio de la opción seleccionada o el texto ingresado
opcionesDropdown.addEventListener('change', () => {
    // Limpiar la casilla "texto"
    textoInput.value = '';
    mostrarSalida();
});
textoInput.addEventListener('input', mostrarSalida);

// Función para mostrar la salida en el textarea
function mostrarSalida() {

    // Obtener el valor seleccionado en el desplegable
    const opcionSeleccionada = opcionesDropdown.value;
    let textoIngresado;
    // Procesar la salida según la opción seleccionada
    let salida = '';

    switch (opcionSeleccionada) {
        case 'opcion1':
            textoIngresado = binaryToGray(textoInput.value);
            salida = `${textoIngresado}`;
            if (textoIngresado === -1) {
                salida = "";
            }
            break;
        case 'opcion2':
            textoIngresado = grayToBinary(textoInput.value);
            salida = `${textoIngresado}`;
            break;
        default:
            salida = 'Seleccione una opción';
            break;
    }

    // Mostrar la salida en el textarea
    salidaTextarea.value = salida;
}

