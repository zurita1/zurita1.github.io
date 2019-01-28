function init() {
   $("#elegirNivel").change(buscaminasGui.iniciarJuego);
};

let buscaminasGui = {
   iniciarJuego() {
      buscaminas.pedirNivel($(this).val());

      buscaminasGui.generarTablero();
   },
   generarTablero() {
      buscaminas.init();
      $("#tablero").css({
         "display": "grid",
         "grid-template-columns": "repeat(" + buscaminas.columnas + ",1fr)",
         "width": buscaminas.columnas * 50 + "px",

      });

      for (let i = 0; i < buscaminas.columnas; i++) {
         for (let j = 0; j < buscaminas.filas; j++) {
            let $div = $("<div></div>");

            $div.prop("id", "" + i + "-" + j + "");
            $div.css({
               "background-color": "black",
               "width": "50px",
               "height": "50px",
               "margin": "3px"
            })
            $div.click(function () {
               buscaminasGui.picar(i, j)
            });
            $("#tablero").append($div);
            console.log($div);
         }
      }
   },
   picar(i, j) {
      if (buscaminas.tableroJugable[i][j] === "🏴")
         return true; //Salgo si es una bandera.
      if (buscaminas.tableroJugable[i][j] === "x")
         buscaminasGui.descubrirMinas()
      else
         buscaminas.picar(i, j);
         buscaminasGui.actualizarTablero();

},

   actualizarTablero() {
      for (const coordenada of buscaminas.casillaPulsada) {
         let i = coordenada.split("-")[0];
         let j = coordenada.split("-")[1];
         let $valor = $("#" + i + "-" + j)
         $valor.off();
         if (buscaminas.tableroJugable[i][j] === 0)
            $valor.text("");
         else
            $valor.text(buscaminas.tableroJugable[i][j]);
         $valor.css({
            "background-color": "#CCCCCC",
            "text-align": "center",
            "font-size": "40px"

         }
         )
      }
   },

      descubrirMinas() {
   console.log("hola")
   for (let i = 0; i < buscaminas.filas; i++) {
      for (let j = 0; j < buscaminas.columnas; j++) {

         let $id = $("#" + i + "-" + j)
         $id.prop("disabled", true);
         $id.prop("click", null).off("click");
         if (buscaminas.tableroDescubierto[i][j] === "x") {
            $id.css({
               "background-color": "red",
            });
         }
      }
   }
},
}
$(init);
