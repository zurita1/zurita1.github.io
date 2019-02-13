(function ($) {
    jQuery.fn.examen = function () {
        let inputError = [];

        let validator = {
            nombre: [/^[a-zA-Zñúíóáé]{3,}([ ][a-zA-Zñúíóáé]{3,}){0,20}$/, "Mínimo 3 caracteres para el nombre."],
            apellidos: [/^[a-zA-Zñúíóáé]{3,}([ ][a-zA-Zñúíóáé]{3,}){0,20}$/, "Mínimo 3 caracteres para el apellido."],
            email: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/, "Correo inválido. Ejemplo:examen@exm.c"],
            textarea: [/a/, "El contenido no puede estar vacío."]
        }
        function validar(valor, expresion) {
            if (!validator[expresion][0].test(valor))
                return false;
            return true;
        }
        $.extend({
           
        });
        $("input[type=text]").blur(function (event) {
            event.preventDefault();

            let tipo = $(this).attr("tipo");
            let valor = $(this).val();
            if (validar(valor, tipo)) {
                $(this).css({
                    color: "green",
                    border: "1px solid green"
                });
            } else {
                $(this).css({
                    color: "red",
                    border: "1px solid red"
                });
                inputError.push($(this));
            }
        });

        $("input[type=text], textarea").focus(function (event) {
            event.preventDefault();
            $(this).css({
                color: "black",
                border: "2px solid #ffD3D7"
            });
        });

        $("input[type=submit]").click(function (event) {

            console.log("entra")
            event.preventDefault();
            let $inputs = $("input[type=text], textarea");
            $inputs.blur();
            if (inputError.length > 0) {
                console.log("if")
                inputError[0].focus();
            } else {
                console.log("else")
                $.ajax({
                    url: "texto.txt",
                    success: function (mensaje) {
                        $("textarea").text(mensaje);
                    }
                });
            }
        
        });


}  
}) (jQuery);