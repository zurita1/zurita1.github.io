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
    $.fn.examen = function (estilos2Bien,estilos2Mal) {
        let estiloBien = {
          color: "black",
          "background-color": "#A9F5A9",
          border: "2px solid #0B6121"
        }
        let estiloMal={
            color: "red",
            border: "1px solid red",
            "background-color": "#FA5858",
        }
    
        $.extend(estiloBien, estilos2Bien);
        $.extend(estiloMal, estilos2Mal);

               
        let inputError = [];
        $(":input[type='text']",$(this)).blur(function (event) {
            event.preventDefault();
            
            let tipo = $(this).attr("tipo");
            let valor = $(this).val();
            if (tester.validar(valor, tipo)) {
                $(this).css(estiloBien);
            } else {
                $(this).css(estiloMal);
                inputError.push($(this));
            }
        });

        $(":input[type='text']",$(this)).focus(function (event) {
            event.preventDefault();
           
            $(this).css({
                color: "black",
                border: "2px solid "
            });
        });

        $(this).submit(function (event) {
            event.preventDefault();
            let $inputs = $(":input[type='text']",$(this));
            inputError = [];
            $inputs.blur();
            if (inputError.length > 0) {               
                for (let i = 0; i < inputError.length; i++) { 
                    inputError[i].val("");
                }
                
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