$("#enviar").click(function(){ // Añade un evento de click al elemento con el ID 'enviar'
    $.get("https://huachitos.cl/api/animales/estado/adopcion",  // Realiza una solicitud GET a la URL especificada
        function(data){ // Función que se ejecuta cuando se recibe la respuesta de la solicitud GET
            $.each(data.data, function(i, item){ // Itera sobre cada elemento en 'data.data'
                $("#Animales").append("<tr><td>"+item.id+"</td><td>"+item.nombre + "</td><td>"+item.edad +"</td><td>"+item.genero +"</td><td>"+item.desc_fisica +"</td><td class='text-center'><img src='"+item.imagen +"' class='img-fluid'></td></tr>"); // Añade una nueva fila a la tabla con los datos del animal
            });
        });
});