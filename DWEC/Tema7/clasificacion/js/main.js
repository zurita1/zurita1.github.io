function init() {
    let $descripcion=$("#descripcion");
    let descripciones = new Map();
    $('button').click(function () {
        $descripcion.html("");
        let id = $(this).prop("id");
        let opciones = [];
        
        $.getJSON(id + ".json", function (data) {
            if (id == "desarrolladores") {
                opciones.push("<select id='desarrollador'>");
            } else {
                opciones.push("<select>");
            }
            opciones.push("<option> Selecciona una opción</option>");

            $.each(data, function (key, valor) {
                opciones.push("<option>" + key + "</option>");
                descripciones.set(key, valor)
            });
            opciones.push("</select>");
            $("#informacion").html(opciones.join(""))

            $("select").change(function () {
                let $selecionado = $(this).val();
                let contenido;
                if ($(this).prop("id") == "desarrollador") {
                  contenido=obtenerLenguajes($selecionado);
                } else {             
                    contenido=descripciones.get($selecionado);
                }
                $descripcion.html(contenido);
            });

        });
    });
    function obtenerLenguajes(posicion) {
        let items = [];
        let array = descripciones.get(posicion).split(",");
        array.forEach(element => {
            items.push("<label for="+element+">"+element+"</label><input type='checkbox' id="+element+"><br>");
        });
        return items.join("");
    }
}
$(init)