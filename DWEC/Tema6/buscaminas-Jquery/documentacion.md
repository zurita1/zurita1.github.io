
Dentro de la fuction [picar()](https://github.com/zurita1/zurita1.github.io/blob/master/DWEC/Tema6/buscaminas-Jquery/js/main.js#L61), saltara un efecto cuando se gane o se pierda. 
El efecto que saldrá cuando se gane es el siguiente: 

```javascript
    $("#textoFinal").text("¡Has Ganado!");
        setTimeout(function () {
           $('#muestraFinal').show("puff");
        }, 200);
```
Para que esto ocurra primero comprueba si se ha ganado. 
Si comprobarVictoria  me devuelve un true, quiere decir que casillasTotales del tablero y casillasAbiertas son iguales.

```javascript
      if (buscaminas.comprobarVictoria()) {
          $final = true;
          $("#textoFinal").text("¡Has Ganado!");
          setTimeout(function () {
            $('#muestraFinal').show("puff");
         }, 200);
      }
```



Para perder habra que picar una mina en el tablero, cuando se pique en una mina se llama la function [descubrirMinas()](https://github.com/zurita1/zurita1.github.io/blob/master/DWEC/Tema6/buscaminas-Jquery/js/main.js#L142) y este metodo tendra el efecto de perder.
En la primera parte de esta function,  muestro el mensaje has perdio, y en la parte de abajo recorro el tablero y le aplico un efecto a cada mina.
```javascript
    descubrirMinas() {
      $("#textoFinal").text("¡Has perdido!");
      setTimeout(function () {
         $('#muestraFinal').show("puff");
      }, 200);
      $final = true;
      let contador = 0; 
      for (let i = 0; i < buscaminas.filas(); i++) {
         for (let j = 0; j < buscaminas.columnas(); j++) {
            let $valor = $("#" + i + "-" + j)
            if (buscaminas.tableroSolucion[i][j] === "x") {
               contador += 100;
               if (buscaminas.tableroBandera !== "B") {  
                  setTimeout(function () {
                     $valor.css({
                        "background": "red",
                        "transform": "rotate(1000deg)",
                        "transition-duration": "2s"
                     }).animate({
                        height: "50px",
                        width: "50px"
                     }, 1000);
                  }, contador);
               }
            }
         }
      }
```




Si pulsamo el boton derecho del raton se podra poner banderas, y estas banderas se abriran con su correspodiente efecto jQuery, todo esto se ejecutara en la function [marcar()](https://github.com/zurita1/zurita1.github.io/blob/master/DWEC/Tema6/buscaminas-Jquery/js/main.js#L77).
 La primera parte es para colocar una bandera y la segunda parte es para quitarla.
```javascript
        if (buscaminas.marcar(i, j)) {
               $valorM.css({
                  "background-color": "blue",
               }).fadeOut("slow", "linear", function () {
                  $(this).fadeIn(700);
               });
            } else {
               if (buscaminas.pulsada[i][j] !== true)
                  $valorM.css({
                     "background-color": "black",
                  }).fadeOut("fast", function () {
                     $(this).fadeIn(400);
                  });
            }
```
 
 
 
 
 Tambien habra un efecto si presionamos con los dos botones a la vez, este efecto se ejecutar en la function [despejar()](https://github.com/zurita1/zurita1.github.io/blob/master/DWEC/Tema6/buscaminas-Jquery/js/main.js#L101).
 Este efecto sera para cuando la function despejar no pique en las casillas por no tener las banderas suficientes colodas alrededor de la casilla que efectuamos el doble click.
 ```javascript
       despejar(e, i, j) {
        if (e.buttons == 3) {          
         buscaminas.despejar(i, j);
         if (buscaminas.casillaVacia.size> 0) {
            for (const coordenada of buscaminas.casillaVacia ){
               $("#" + coordenada).css({
               }).fadeOut(200, function () {
                  $("#" + coordenada).fadeIn(200);
               });
            }
            
         }
      }
```
     

Y el ultimo efecto sera cada vez que actualicemos el tablero picando una casilla o despejandola.
[actualizarTablero()](https://github.com/zurita1/zurita1.github.io/blob/master/DWEC/Tema6/buscaminas-Jquery/js/main.js#L122)
```javascript
    actualizarTablero() {
      for (const coordenada of buscaminas.casillaPulsada) {
         let i = coordenada.split("-")[0];
         let j = coordenada.split("-")[1];
         let $valor = $("#" + i + "-" + j)
         if (buscaminas.tableroSolucion[i][j] === 0)
            $valor.text("");
         else
            $valor.text(buscaminas.tableroSolucion[i][j]);
         $valor.css({
            "background-color": "#CCCCCC",
            "text-align": "center",
            "font-size": "40px",
            "transform": " rotateX(360deg)",
            "transition-duration": "1s"
         });
      }
     },
```


