// La lógica pura conectada al DOM

DOM.formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    
    let formularioValido = true;

    // A) Validación del Nombre
    if (DOM.inputNombre.value.trim() === '') {
        UI.mostrarError(DOM.inputNombre, DOM.errorNombre, 'El nombre es obligatorio.');
        formularioValido = false;
    } else {
        UI.limpiarError(DOM.inputNombre, DOM.errorNombre);
    }

    // B) Validación del Correo (Regex puro)
    const regexCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (DOM.inputCorreo.value.trim() === '') {
        UI.mostrarError(DOM.inputCorreo, DOM.errorCorreo, 'El correo electrónico es obligatorio.');
        formularioValido = false;
    } else if (!regexCorreo.test(DOM.inputCorreo.value.trim())) {
        UI.mostrarError(DOM.inputCorreo, DOM.errorCorreo, 'Ingresa un formato de correo válido (ej: nombre@dominio.com).');
        formularioValido = false;
    } else {
        UI.limpiarError(DOM.inputCorreo, DOM.errorCorreo);
    }

    // C) Validación del Mensaje
    if (DOM.inputMensaje.value.trim() === '') {
        UI.mostrarError(DOM.inputMensaje, DOM.errorMensaje, 'El mensaje no puede estar vacío.');
        formularioValido = false;
    } else {
        UI.limpiarError(DOM.inputMensaje, DOM.errorMensaje);
    }

    // --- DECISIÓN FINAL ---
    if (formularioValido) {
        UI.mostrarExito();
    } else {
        UI.ocultarExito();
    }
});