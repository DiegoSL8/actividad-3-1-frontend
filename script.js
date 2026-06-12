// Funciones de validación independientes para poder reutilizarlas

const validarNombre = () => {
    if (DOM.inputNombre.value.trim() === '') {
        UI.mostrarError(DOM.inputNombre, DOM.errorNombre, 'El nombre es obligatorio.');
        return false; // Retorna false si hay error
    } else {
        UI.limpiarError(DOM.inputNombre, DOM.errorNombre);
        return true;  // Retorna true si está correcto
    }
};

const validarCorreo = () => {
    const regexCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (DOM.inputCorreo.value.trim() === '') {
        UI.mostrarError(DOM.inputCorreo, DOM.errorCorreo, 'El correo electrónico es obligatorio.');
        return false;
    } else if (!regexCorreo.test(DOM.inputCorreo.value.trim())) {
        UI.mostrarError(DOM.inputCorreo, DOM.errorCorreo, 'Ingresa un formato válido (ej: nombre@dominio.com).');
        return false;
    } else {
        UI.limpiarError(DOM.inputCorreo, DOM.errorCorreo);
        return true;
    }
};

const validarMensaje = () => {
    if (DOM.inputMensaje.value.trim() === '') {
        UI.mostrarError(DOM.inputMensaje, DOM.errorMensaje, 'El mensaje no puede estar vacío.');
        return false;
    } else {
        UI.limpiarError(DOM.inputMensaje, DOM.errorMensaje);
        return true;
    }
};

// --- EVENTOS EN TIEMPO REAL ---
// El evento 'input' se dispara cada vez que el valor del campo cambia (al teclear).
DOM.inputNombre.addEventListener('input', validarNombre);
DOM.inputCorreo.addEventListener('input', validarCorreo);
DOM.inputMensaje.addEventListener('input', validarMensaje);


// --- EVENTO SUBMIT (Envío del formulario) ---
DOM.formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); // Evita que la página se recargue
    
    // Ejecutamos todas las validaciones a la vez al momento de enviar
    const nombreValido = validarNombre();
    const correoValido = validarCorreo();
    const mensajeValido = validarMensaje();

    // Si TODAS son verdaderas (true), mostramos el éxito
    if (nombreValido && correoValido && mensajeValido) {
        UI.mostrarExito();
    } else {
        UI.ocultarExito();
    }
});