$(document).ready(function() {
    $("#formularioRegistro").submit(function(e) {
        e.preventDefault();
  
        var nombre = $("#nombre").val();
        var apellidoPaterno = $("#apellidoPaterno").val();
        var apellidoMaterno = $("#apellidoMaterno").val();
        var correoElectronico = $("#correoElectronico").val();
        var contrasena = $("#contrasena").val();
        var confirmarContrasena = $("#confirmarContrasena").val();
        var isValid = true;
        
        // Regex para solo letras y espacios
        var regexLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

        // Validación de nombre
        if (nombre.length < 3 || !regexLetras.test(nombre)) {
            $("#nombre").next(".error").text("El nombre debe tener al menos 3 caracteres y solo letras").show();
            isValid = false;
        } else {
            $("#nombre").next(".error").hide();
        }

        // Validación de apellido paterno
        if (apellidoPaterno.length < 3 || !regexLetras.test(apellidoPaterno)) {
            $("#apellidoPaterno").next(".error").text("El apellido paterno debe tener al menos 3 caracteres y solo letras").show();
            isValid = false;
        } else {
            $("#apellidoPaterno").next(".error").hide();
        }

        // Validación de apellido materno
        if (apellidoMaterno.length < 3 || !regexLetras.test(apellidoMaterno)) {
            $("#apellidoMaterno").next(".error").text("El apellido materno debe tener al menos 3 caracteres y solo letras").show();
            isValid = false;
        } else {
            $("#apellidoMaterno").next(".error").hide();
        }

        // Validación de correo electrónico (básica)
        var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexCorreo.test(correoElectronico)) {
            $("#correoElectronico").next(".error").text("El correo electrónico no es válido").show();
            isValid = false;
        } else {
            $("#correoElectronico").next(".error").hide();
        }

        // Validación de contraseña
        if (contrasena.length < 6) {
            $("#contrasena").next(".error").text("La contraseña debe tener al menos 6 caracteres").show();
            isValid = false;
        } else {
            $("#contrasena").next(".error").hide();
        }

        // Validación de confirmación de contraseña
        if (confirmarContrasena !== contrasena) {
            $("#confirmarContrasena").next(".error").text("Las contraseñas no coinciden").show();
            isValid = false;
        } else {
            $("#confirmarContrasena").next(".error").hide();
        }

        // Enviar el formulario si todas las validaciones son correctas
        if (isValid) {
            alert("Formulario enviado con éxito");
            this.submit();
        }
    });
});





$(document).ready(function(){
    // Inicia el carrusel
    $('#carouselExampleIndicators').carousel();

    // Intervalo de tiempo entre cada cambio de diapositiva (en milisegundos)
    var intervalo = 3000; // 3 segundos

    // Función para avanzar al siguiente slide después de un tiempo determinado
    function avanzarSlide() {
        $('#carouselExampleIndicators').carousel('next');
    }

    // Establece el intervalo de tiempo para avanzar al siguiente slide
    setInterval(avanzarSlide, intervalo);
});

// Función para cerrar el pop-up
function cerrarPopup() {
    var popupOverlay = document.getElementById('popupOverlay');
    popupOverlay.style.display = 'none';
  }
  
  // Mostrar el pop-up después de un retraso de 2 segundos
  setTimeout(function() {
    var popupOverlay = document.getElementById('popupOverlay');
    popupOverlay.style.display = 'flex';
  }, 2000);

  
  
  // Función para mostrar el mensaje de que el producto se ha agregado al carrito
  function mostrarMensaje() {
    alert('El producto se ha agregado al carrito');
  }
  
  // Función para agregar al carrito y mostrar el mensaje
  function agregarAlCarrito() {
    mostrarMensaje();
  }
  

  function mostrarMensaje() {
    var mensaje = document.createElement("div");
    mensaje.textContent = "El producto se ha agregado al carrito";
    mensaje.classList.add("mensaje-agregado");
    document.body.appendChild(mensaje);
    setTimeout(function() {
      mensaje.remove();
    }, 2000);
  }
  