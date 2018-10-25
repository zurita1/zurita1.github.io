{

    function iniciar() {
        document.getElementById("ventana").addEventListener('click', nuevaVentana);
    }

    function nuevaVentana() {
        let ventana = open("", "Ventana credada mediante botón", "width=300,height=200,top=0,left=0")
        let contenido = `<!--Ejemplo de Apariencia de ventanas-->
            <!DOCTYPE html>
            <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>Ejemplo de apariencia de ventanas</title>
                    <script type="text/javascript" src="js/propiedades.js"></script>
                </head>
                <body>
                    <noscript>
                        <p>ERROR</p>
                    </noscript>
                    <p>Se han utilizado las siguientes propiedades</p>
                    <ul>
                        <li id="height"></li>
                        <li id="width"></li>
                    </ul>
                </body>
            </html>`

        ventana.document.open();
        ventana.document.write(contenido);
        ventana.document.close();
    }

    window.addEventListener("load", iniciar);
}