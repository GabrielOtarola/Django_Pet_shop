$("#enviar").click(function(){
    $.get("https://huachitos.cl/api/animales/estado/adopcion", 
        function(data){
            $.each(data.data, function(i, item){
                $("#Animales").append("<tr><td>"+item.id+"</td><td>"+item.nombre + "</td><td>"+item.edad +"</td><td>"+item.genero +"</td><td>"+item.desc_fisica +"</td><td class='text-center'><img src='"+item.imagen +"' class='img-fluid'></td></tr>");
            });
        });
});