function init() {
    $('button').click(function () {
        id = $(this).prop("id");
        opciones=[];
        descripciones= new Map;
        $.getJSON(id + ".json", function (data) {
            opciones.push("<select>");
            opciones.push("<option> Selecciona una opción</option>");
            
            $.each(data, function (key,valor) {
                opciones.push("<option>" + key + "</option>");
                descripciones.set(key,valor)
                console.log(descripciones)
                console.log(key)
                console.log(valor)
            });
            opciones.push("</select>");
            $("#informacion").html(opciones.join(""))
           
            $("select").change(function () {
                $selecionado=$(this).val();
                console.log($selecionado)
                console.log(descripciones.get($selecionado));
                $("#descripcion").html(descripciones.get($selecionado));
            });

        });
    });
}
$(init)