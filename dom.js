// 1. Objeto que almacena todas las referencias al DOM
const DOM = {
    formulario: document.getElementById('contactoForm'),
    inputNombre: document.getElementById('nombre'),
    inputCorreo: document.getElementById('correo'),
    inputMensaje: document.getElementById('mensaje'),
    
    errorNombre: document.getElementById('errorNombre'),
    errorCorreo: document.getElementById('errorCorreo'),
    errorMensaje: document.getElementById('errorMensaje'),
    mensajeExito: document.getElementById('mensajeExito'),
    
    // Referencias para la nueva funcionalidad
    infoTexto: document.getElementById('infoTexto'),
    btnResaltar: document.getElementById('btnResaltar')
};

// 2. Funciones para manipular la Interfaz de Usuario (UI)
const UI = {
    mostrarError: (input, errorSpan, mensaje) => {
        input.classList.add('input-error');
        errorSpan.textContent = mensaje;
    },
    limpiarError: (input, errorSpan) => {
        input.classList.remove('input-error');
        errorSpan.textContent = '';
    },
    mostrarExito: () => {
        DOM.mensajeExito.textContent = '¡Gracias por contactarnos papu! Nos pondremos en contacto contigo pronto.';
        DOM.mensajeExito.classList.remove('oculto');
        DOM.formulario.reset();
        
        setTimeout(() => {
            DOM.mensajeExito.classList.add('oculto');
        }, 5000);
    },
    ocultarExito: () => {
        DOM.mensajeExito.classList.add('oculto');
    }
};

// 3. NUEVA FUNCIONALIDAD: Manejador de evento click
// Esto demuestra el uso de textContent y toggle de clases.
DOM.btnResaltar.addEventListener('click', () => {
    // Alternamos una clase CSS que crearemos luego
    DOM.infoTexto.classList.toggle('texto-resaltado');
    
    // Cambiamos el texto del párrafo y del botón dinámicamente
    if (DOM.infoTexto.classList.contains('texto-resaltado')) {
        DOM.infoTexto.textContent = '¡Atención! Todos los campos son obligatorios. Revisa bien el formato de tu correo.';
        DOM.btnResaltar.textContent = 'Quitar informacion extra';
    } else {
        DOM.infoTexto.textContent = 'Completa el formulario para enviarnos tu consulta.';
        DOM.btnResaltar.textContent = 'Mostrar mas Información';
    }
});