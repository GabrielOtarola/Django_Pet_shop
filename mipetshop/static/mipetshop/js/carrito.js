document.addEventListener("DOMContentLoaded", function () {
    // Inicializar el carrito en localStorage si no existe
    if (!localStorage.getItem("carrito")) {
        localStorage.setItem("carrito", JSON.stringify([]));
    }

    // Función para agregar un producto al carrito
    window.agregarAlCarrito = function (nombre, descripcion) {
        let carrito = JSON.parse(localStorage.getItem("carrito"));
        let producto = { nombre: nombre, descripcion: descripcion };
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        mostrarCarrito();
        actualizarCantidadCarrito();
        mostrarMensaje("Producto agregado al carrito");
    };

    // Función para eliminar un producto del carrito con confirmación
    window.eliminarDelCarrito = function (index) {
        let carrito = JSON.parse(localStorage.getItem("carrito"));
        let productoEliminado = carrito[index];

        if (confirm(`¿Estás seguro de que quieres eliminar "${productoEliminado.nombre}" del carrito?`)) {
            // Si el usuario confirma, eliminar el producto del carrito
            carrito.splice(index, 1);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            mostrarCarrito();
            actualizarCantidadCarrito();
            mostrarMensaje(`Se eliminó "${productoEliminado.nombre}" del carrito.`);
        } else {
            // Si el usuario cancela, no hacer nada
            return;
        }
    };

    // Función para mostrar el carrito en el modal
    window.mostrarCarrito = function () {
        let carrito = JSON.parse(localStorage.getItem("carrito"));
        let carritoContainer = document.getElementById("carritoContainer");
        carritoContainer.innerHTML = "";

        if (carrito.length === 0) {
            carritoContainer.innerHTML = "<p>El carrito está vacío.</p>";
        } else {
            carrito.forEach(function (producto, index) {
                let item = document.createElement("div");
                item.className = "carrito-item mb-2";
                item.innerHTML = `<h5>${producto.nombre}</h5><p>${producto.descripcion}</p><button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(${index})">Eliminar</button>`;
                carritoContainer.appendChild(item);
            });
        }
    };

    // Función para actualizar la cantidad de productos en el carrito en el navbar
    function actualizarCantidadCarrito() {
        let carrito = JSON.parse(localStorage.getItem("carrito"));
        document.getElementById("carritoCantidad").innerText = carrito.length;
    }

    // Función para mostrar un mensaje en la página
    function mostrarMensaje(mensaje) {
        let mensajeDiv = document.createElement("div");
        mensajeDiv.className = "alert alert-success mt-3";
        mensajeDiv.setAttribute("role", "alert");
        mensajeDiv.innerText = mensaje;
        document.body.appendChild(mensajeDiv);

        // Ocultar el mensaje después de unos segundos
        setTimeout(function () {
            mensajeDiv.remove();
        }, 3000); // 3000 milisegundos = 3 segundos
    }

    // Mostrar carrito cuando se abre el modal
    document.getElementById('carritoModal').addEventListener('show.bs.modal', mostrarCarrito);

    // Mostrar cantidad inicial de productos en el carrito
    actualizarCantidadCarrito();
});
