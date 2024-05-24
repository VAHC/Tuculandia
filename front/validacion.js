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
        const nombre = document.getElementById('nombre').value;
        if (nombre.trim() === '') {
            document.getElementById('error-nombre').textContent = 'Por favor ingrese su nombre';
            errores++;
        }

        // Validación del apellido
        const apellido = document.getElementById('apellido').value;
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


// document.addEventListener('DOMContentLoaded', () => {
// // Seleccionar el formulario por su ID
// const formulario = document.querySelector("formulario");

// // Función para limpiar las validaciones anteriores
// const clearValidations = () => {
//     // Seleccionar todos los campos de entrada y elementos de error
//     const inputs = document.querySelectorAll("input");
//     const errorElements = document.querySelectorAll(".error");

//     // Iterar sobre los campos de entrada y elementos de error y limpiarlos
//     inputs.forEach(input => {
//         input.classList.remove('error');
//         // Verificar si el elemento hermano siguiente existe antes de acceder a su propiedad textContent
//         // No todos los inputs tienen a continuacion un div class error.
//         const nextSibling = input.nextElementSibling;
//         if (nextSibling !== null && nextSibling.classList.contains('error')) {
//             nextSibling.textContent = '';
//         }
//     });

//     errorElements.forEach(errorElement => {
//         errorElement.textContent = '';
//     });
// }

// // Función para validar el formulario
// const validarFormulario = (event) => {
//     // Prevenir el comportamiento predeterminado de envío del formulario
//     event.preventDefault();
//     // Limpiar las validaciones anteriores
//     clearValidations();

//     // Obtener referencias a los campos del formulario
//     const firstname = document.querySelector("#nombre");
//     const lastname = document.querySelector("#apellido");
//     const email = document.querySelector("#email");
//     const telefono = document.querySelector("#telefono");
//     const acepto = document.querySelector("#acepto");

//     let validation = true;
//     // Validar el campo firstname
//     if(!nombre.value.trim()){
//         // alert("Los campos Nombre, Apellido, Email, Telefono, Términos son obligatorios")
//         firstname.classList.add('error')
//         document.querySelector("#error-nombre").textContent='Debe completar el campo Nombre';
//         validation=false;
//     }
//     // Validar el campo lastname
//     if(!apellido.value.trim()){
//         // alert("Los campos Nombre, Apellido, Email, Telefono, Términos son obligatorios")
//         document.querySelector("#error-apellido").textContent='Debe completar el campo Apellido';
//         lastname.classList.add('error')
//         validation=false;
//     }
//     // Validar el campo email
//     if(!email.value.trim()){
//         // alert("Los campos Nombre, Apellido, Email, Telefono, Términos son obligatorios")
//         document.querySelector("#error-email").textContent='Debe completar el campo Email';
//         email.classList.add('error')
//         validation=false;
//     }
//     // Validar telefono
//     if(!telefono.value.trim()){
//         // alert("Los campos Nombre, Apellido, Email, Telefono, Términos son obligatorios")
//         document.querySelector("#error-telefono").textContent='Debe completar el campo Telefono';
//         telefono.classList.add('error')
//         validation=false;
//     }
//     // Validar de términos y condiciones
//     if(!acepto.checked){
//         // alert("Los campos Nombre, Apellido, Email, Telefono, Términos on obligatorios")
//         document.querySelector("#error-acepto").textContent='Debe aceptar los términos y condiciones';
//         acepto.classList.add('error')
//         validation=false;
//     }
//     // Si no hay errores de validación, enviar el formulario
//     if(validation){
//         formulario.submit()
//     }
// }

// formulario.addEventListener('submit',validarFormulario);
// });