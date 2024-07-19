document.addEventListener("DOMContentLoaded", function () { // Ejecuta la función cuando el DOM se haya cargado completamente
    // Inicializar el carrito en localStorage si no existe
    if (!localStorage.getItem("carrito")) { // Verifica si no hay un carrito en localStorage
        localStorage.setItem("carrito", JSON.stringify([])); // Si no existe, crea un carrito vacío
    }

    // Función para agregar un producto al carrito
    window.agregarAlCarrito = function (nombre, descripcion, precio, imagen) { // Define una función global para agregar productos al carrito
        let carrito = JSON.parse(localStorage.getItem("carrito")); // Obtiene el carrito del localStorage y lo convierte a un objeto JavaScript
        let producto = { nombre: nombre, descripcion: descripcion, precio: precio, imagen: imagen }; // Crea un objeto producto con la información proporcionada
        carrito.push(producto); // Agrega el producto al carrito
        localStorage.setItem("carrito", JSON.stringify(carrito)); // Guarda el carrito actualizado en el localStorage
        mostrarCarrito(); // Muestra el carrito actualizado
        actualizarCantidadCarrito(); // Actualiza la cantidad de productos en el carrito en el navbar
        mostrarMensaje("Producto agregado al carrito"); // Muestra un mensaje de confirmación
    };

    // Función para eliminar un producto del carrito con confirmación
    window.eliminarDelCarrito = function (index) { // Define una función global para eliminar productos del carrito
        let carrito = JSON.parse(localStorage.getItem("carrito")); // Obtiene el carrito del localStorage y lo convierte a un objeto JavaScript
        let productoEliminado = carrito[index]; // Obtiene el producto que se va a eliminar

        if (confirm(`¿Estás seguro de que quieres eliminar "${productoEliminado.nombre}" del carrito?`)) { // Muestra una confirmación al usuario
            // Si el usuario confirma, eliminar el producto del carrito
            carrito.splice(index, 1); // Elimina el producto del carrito usando el índice
            localStorage.setItem("carrito", JSON.stringify(carrito)); // Guarda el carrito actualizado en el localStorage
            mostrarCarrito(); // Muestra el carrito actualizado
            actualizarCantidadCarrito(); // Actualiza la cantidad de productos en el carrito en el navbar
            mostrarMensaje(`Se eliminó "${productoEliminado.nombre}" del carrito.`); // Muestra un mensaje de confirmación
        } else {
            // Si el usuario cancela, no hacer nada
            return; // No hace nada si el usuario cancela la confirmación
        }
    };

    // Función para mostrar el carrito en el modal
    window.mostrarCarrito = function () { // Define una función global para mostrar el carrito
        let carrito = JSON.parse(localStorage.getItem("carrito")); // Obtiene el carrito del localStorage y lo convierte a un objeto JavaScript
        let carritoContainer = document.getElementById("carritoContainer"); // Obtiene el contenedor del carrito en el DOM
        carritoContainer.innerHTML = ""; // Limpia el contenido del contenedor del carrito

        if (carrito.length === 0) { // Verifica si el carrito está vacío
            carritoContainer.innerHTML = "<p>El carrito está vacío.</p>"; // Muestra un mensaje si el carrito está vacío
        } else {
            carrito.forEach(function (producto, index) { // Itera sobre cada producto en el carrito
                let item = document.createElement("div"); // Crea un nuevo div para el producto
                item.className = "carrito-item mb-2 d-flex align-items-center"; // Asigna clases al div del producto
                item.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="img-thumbnail me-2" style="width: 50px; height: 50px;"> <!-- Imagen del producto -->
                    <div>
                        <h5>${producto.nombre}</h5> <!-- Nombre del producto -->
                        <p>${producto.descripcion}</p> <!-- Descripción del producto -->
                        <p><strong>Precio: $${producto.precio.toLocaleString()} CLP</strong></p> <!-- Precio del producto -->
                        <button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(${index})">Eliminar</button> <!-- Botón para eliminar el producto del carrito -->
                    </div>
                `;
                carritoContainer.appendChild(item); // Agrega el div del producto al contenedor del carrito
            });
        }
        calcularTotalCarrito(); // Calcula el total del carrito
    };

    // Función para actualizar la cantidad de productos en el carrito en el navbar
    function actualizarCantidadCarrito() { // Define una función para actualizar la cantidad de productos en el carrito
        let carrito = JSON.parse(localStorage.getItem("carrito")); // Obtiene el carrito del localStorage y lo convierte a un objeto JavaScript
        document.getElementById("carritoCantidad").innerText = carrito.length; // Actualiza el texto de la insignia del carrito en el navbar con la cantidad de productos
    }

    // Función para calcular el total del carrito
    function calcularTotalCarrito() { // Define una función para calcular el total del carrito
        let carrito = JSON.parse(localStorage.getItem("carrito")); // Obtiene el carrito del localStorage y lo convierte a un objeto JavaScript
        let total = carrito.reduce((acc, producto) => acc + producto.precio, 0); // Calcula el total sumando los precios de todos los productos en el carrito
        document.getElementById("totalCarrito").innerText = total.toLocaleString(); // Actualiza el texto del total del carrito en el modal
    }

    // Función para mostrar un mensaje en la página
    function mostrarMensaje(mensaje) { // Define una función para mostrar mensajes en la página
        let mensajeDiv = document.createElement("div"); // Crea un nuevo div para el mensaje
        mensajeDiv.className = "alert alert-success mt-3"; // Asigna clases al div del mensaje
        mensajeDiv.setAttribute("role", "alert"); // Asigna el rol de alerta al div del mensaje
        mensajeDiv.innerText = mensaje; // Establece el texto del mensaje
        document.body.appendChild(mensajeDiv); // Agrega el div del mensaje al cuerpo del documento

        // Ocultar el mensaje después de unos segundos
        setTimeout(function () { // Establece un temporizador para ocultar el mensaje
            mensajeDiv.remove(); // Elimina el div del mensaje del DOM
        }, 3000); // 3000 milisegundos = 3 segundos
    }

    // Mostrar carrito cuando se abre el modal
    document.getElementById('carritoModal').addEventListener('show.bs.modal', mostrarCarrito); // Añade un evento para mostrar el carrito cuando se abre el modal

    // Mostrar cantidad inicial de productos en el carrito
    actualizarCantidadCarrito(); // Actualiza la cantidad inicial de productos en el carrito en el navbar
});
