
function init() {
    let mensaje;
    let estados=  $("#estados");
    $("#cargar").click(function () {
        let ruta = $("#ruta").val();
        $.get({
            method: "GET",
            url:ruta,
            cache: "false",
            error: function () {
                mensaje = "No Inicializada";
                estados.html(mensaje);
            },
            success: function (data) {
                mensaje += ", Éxito"
                estados.html(mensaje);
                $("#fichero").text(data);
            },
            complete: function () {
                mensaje += ", Completada"
                estados.html(mensaje);
            },
            beforeSend: function () {
                mensaje = "Antes de enviar";
                estados.html(mensaje);
            }
        });

    });
}
$(init)