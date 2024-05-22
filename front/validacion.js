document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById('formulario');
    
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        let errores = 0;

        // Limpia todos los mensajes de error
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(function(el) {
            el.textContent = '';
        });

        // Validación del nombre
        const nombre = document.getElementById('firstname').value;
        if (nombre.trim() === '') {
            document.getElementById('error-nombre').textContent = 'Por favor ingrese su nombre';
            errores++;
        }

        // Validación del apellido
        const apellido = document.getElementById('lastname').value;
        if (apellido.trim() === '') {
            document.getElementById('error-apellido').textContent = 'Por favor ingrese su apellido';
            errores++;
        }

        // Validación del email
        const email = document.getElementById('email').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() === '') {
            document.getElementById('error-email').textContent = 'Por favor ingrese su email';
            errores++;
        } else if (!emailRegex.test(email)) {
            document.getElementById('error-email').textContent = 'Por favor ingrese un email válido';
            errores++;
        }

        // Validación del teléfono
        const telefono = document.getElementById('telefono').value;
        const telefonoRegex = /^\d{10}$/;
        if (telefono.trim() === '') {
            document.getElementById('error-telefono').textContent = 'Por favor ingrese su número de teléfono';
            errores++;
        } else if (!telefonoRegex.test(telefono)) {
            document.getElementById('error-telefono').textContent = 'Por favor ingrese un número de teléfono válido (10 dígitos)';
            errores++;
        }

        // Validación de la sección de interés
        const interes = document.getElementById('interes').value;
        if (interes === 'default') {
            document.getElementById('error-interes').textContent = 'Por favor seleccione una sección de interés';
            errores++;
        }

        // Validación de los términos y condiciones
        const acepto = document.getElementById('acepto').checked;
        if (!acepto) {
            document.getElementById('error-acepto').textContent = 'Debe aceptar los términos y condiciones';
            errores++;
        }

        // Mostrar mensaje general si hay errores
        if (errores > 0) {
            document.getElementById('error-general').textContent = 'Por favor corrija los errores en el formulario';
        } else {
            document.getElementById('error-general').textContent = '';
            formulario.reset(); // Limpia los campos del formulario
            alert("Formulario enviado exitosamente");
        }
    });
});