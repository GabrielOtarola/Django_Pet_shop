$(document).ready(function() { // Ejecuta la función cuando el DOM se haya cargado completamente
    $("#formularioRegistro").submit(function(e) { // Añade un evento de submit al formulario con el ID 'formularioRegistro'
        e.preventDefault(); // Previene el comportamiento por defecto del formulario (envío)
  
        var nombre = $("#nombre").val(); // Obtiene el valor del campo 'nombre'
        var apellidoPaterno = $("#apellidoPaterno").val(); // Obtiene el valor del campo 'apellidoPaterno'
        var apellidoMaterno = $("#apellidoMaterno").val(); // Obtiene el valor del campo 'apellidoMaterno'
        var correoElectronico = $("#correoElectronico").val(); // Obtiene el valor del campo 'correoElectronico'
        var contrasena = $("#contrasena").val(); // Obtiene el valor del campo 'contrasena'
        var confirmarContrasena = $("#confirmarContrasena").val(); // Obtiene el valor del campo 'confirmarContrasena'
        var isValid = true; // Variable para rastrear si el formulario es válido
        
        // Regex para solo letras y espacios
        var regexLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

        // Validación de nombre
        if (nombre.length < 3 || !regexLetras.test(nombre)) { // Verifica que el nombre tenga al menos 3 caracteres y solo letras
            $("#nombre").next(".error").text("El nombre debe tener al menos 3 caracteres y solo letras").show(); // Muestra un mensaje de error
            isValid = false; // Marca el formulario como inválido
        } else {
            $("#nombre").next(".error").hide(); // Oculta el mensaje de error
        }

        // Validación de apellido paterno
        if (apellidoPaterno.length < 3 || !regexLetras.test(apellidoPaterno)) { // Verifica que el apellido paterno tenga al menos 3 caracteres y solo letras
            $("#apellidoPaterno").next(".error").text("El apellido paterno debe tener al menos 3 caracteres y solo letras").show(); // Muestra un mensaje de error
            isValid = false; // Marca el formulario como inválido
        } else {
            $("#apellidoPaterno").next(".error").hide(); // Oculta el mensaje de error
        }

        // Validación de apellido materno
        if (apellidoMaterno.length < 3 || !regexLetras.test(apellidoMaterno)) { // Verifica que el apellido materno tenga al menos 3 caracteres y solo letras
            $("#apellidoMaterno").next(".error").text("El apellido materno debe tener al menos 3 caracteres y solo letras").show(); // Muestra un mensaje de error
            isValid = false; // Marca el formulario como inválido
        } else {
            $("#apellidoMaterno").next(".error").hide(); // Oculta el mensaje de error
        }

        // Validación de correo electrónico (básica)
        var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexCorreo.test(correoElectronico)) { // Verifica si el correo electrónico es válido
            $("#correoElectronico").next(".error").text("El correo electrónico no es válido").show(); // Muestra un mensaje de error
            isValid = false; // Marca el formulario como inválido
        } else {
            $("#correoElectronico").next(".error").hide(); // Oculta el mensaje de error
        }

        // Validación de contraseña
        if (contrasena.length < 6) { // Verifica que la contraseña tenga al menos 6 caracteres
            $("#contrasena").next(".error").text("La contraseña debe tener al menos 6 caracteres").show(); // Muestra un mensaje de error
            isValid = false; // Marca el formulario como inválido
        } else {
            $("#contrasena").next(".error").hide(); // Oculta el mensaje de error
        }

        // Validación de confirmación de contraseña
        if (confirmarContrasena !== contrasena) { // Verifica si las contraseñas coinciden
            $("#confirmarContrasena").next(".error").text("Las contraseñas no coinciden").show(); // Muestra un mensaje de error
            isValid = false; // Marca el formulario como inválido
        } else {
            $("#confirmarContrasena").next(".error").hide(); // Oculta el mensaje de error
        }

        // Enviar el formulario si todas las validaciones son correctas
        if (isValid) { // Si el formulario es válido
            alert("Formulario enviado con éxito"); // Muestra una alerta de éxito
            this.submit(); // Envía el formulario
        }
    });
});

$(document).ready(function(){
    // Inicia el carrusel
    $('#carouselExampleIndicators').carousel(); // Inicializa el carrusel con el ID 'carouselExampleIndicators'

    // Intervalo de tiempo entre cada cambio de diapositiva (en milisegundos)
    var intervalo = 3000; // 3 segundos

    // Función para avanzar al siguiente slide después de un tiempo determinado
    function avanzarSlide() {
        $('#carouselExampleIndicators').carousel('next'); // Avanza al siguiente slide del carrusel
    }

    // Establece el intervalo de tiempo para avanzar al siguiente slide
    setInterval(avanzarSlide, intervalo); // Ejecuta 'avanzarSlide' cada 3 segundos
});

// Función para cerrar el pop-up
function cerrarPopup() {
    var popupOverlay = document.getElementById('popupOverlay'); // Obtiene el elemento con el ID 'popupOverlay'
    popupOverlay.style.display = 'none'; // Oculta el elemento cambiando su estilo display a 'none'
}
  
// Mostrar el pop-up después de un retraso de 2 segundos
setTimeout(function() {
    var popupOverlay = document.getElementById('popupOverlay'); // Obtiene el elemento con el ID 'popupOverlay'
    popupOverlay.style.display = 'flex'; // Muestra el elemento cambiando su estilo display a 'flex'
}, 2000); // 2000 milisegundos = 2 segundos



  

  