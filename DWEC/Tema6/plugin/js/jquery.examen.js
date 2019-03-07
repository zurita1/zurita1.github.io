(function ($) {
    let validator = {
        nombre: [/^[a-zA-Zñúíóáé]{3,}([ ][a-zA-Zñúíóáé]{3,}){0,20}$/, "Mínimo 3 caracteres para el nombre."],
        apellidos: [/^[a-zA-Zñúíóáé]{3,}([ ][a-zA-Zñúíóáé]{3,}){0,20}$/, "Mínimo 3 caracteres para el apellido."],
        email: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/, "Correo inválido. Ejemplo:examen@exm.c"],
        textarea: [/a/, "El contenido no puede estar vacío."],
    

    }
    let tester={
        validar(valor, expresion) {
            if (!validator[expresion][0].test(valor))
                return false;
            return true;
        }
    }
    $.fn.examen = function (estilos2) {
        let estilos = {
          color: "black",
          "background-color": "#A9F5A9",
          border: "2px solid #0B6121"
        };
    
        $.extend(estilos, estilos2);
               
        let inputError = [];
        $("input[type=text]").blur(function (event) {
            event.preventDefault();
            
            let tipo = $(this).attr("tipo");
            let valor = $(this).val();
            if (tester.validar(valor, tipo)) {
                $(this).css(estilos);
            } else {
                $(this).css({
                    color: "red",
                    border: "1px solid red",
                    "background-color": "#FA5858",
                });
                inputError.push($(this));
            }
        });

        $("input[type=text], textarea").focus(function (event) {
            event.preventDefault();
           
            $(this).css({
                color: "black",
                border: "2px solid "
            });
        });

        $("input[type=submit]").click(function (event) {
            event.preventDefault();
            let $inputs = $("input[type=text], textarea");
            inputError = [];
            $inputs.blur();
            if (inputError.length > 0) {
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
        return this;

}  
}) (jQuery);