{
    let top = 0;
    function iniciar (){
        let button = document.getElementById("button").addEventListener('click', ventanas);
    }
    function ventanas () {
        for(let i = 0; i < 5; i++){
            let nuevaVentana = window.open('', '', 'width=200,height=200,top='+(top += 10) +',left='+top+'');
            nuevaVentana.document.write(
                `<html>
                    <head>
                        <title>Ventana ${i} </title>
                    </head>
                    <body>
                        <p>Ventana ${i} </p>
                        <input type=\"button\" id=\"button\" value=\"Cerrar\" onclick=window.close();>
                    </body>
                </html>`);
                nuevaVentana.document.close();  
        }
      
    }
    window.addEventListener("load", iniciar);
}