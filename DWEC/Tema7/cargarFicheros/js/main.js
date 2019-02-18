
function init() {
    let mensaje;
    $("#cargar").click(function () {
        ruta = $("#ruta").val();
        $.get({
            url:ruta,
            cache: "false",
            error: function () {
                mensaje = "No Inicializada";
                $("#estados").html(mensaje);
            },
            success: function (data) {
                mensaje += ", Éxito"
                $("#estados").html(mensaje);
                $("#fichero").html(data);
            },
            complete: function () {
                mensaje += ", Completada"
                $("#estados").html(mensaje);
            },
            beforeSend: function () {
                mensaje = "Antes de enviar";
                $("#estados").html(mensaje);
            }
        });

    });
}
$(init)