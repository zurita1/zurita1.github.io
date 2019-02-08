$final = false;

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
         "margin": "auto",

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

            })

            $div.mousedown(function (e) {
               buscaminasGui.marcar(e, i, j);
            })

            $div.mousedown(function (e) {
               buscaminasGui.despejar(e, i, j);
            })



            $("#tablero").append($div);
            //console.log($div);
         }
      }
   },
   picar(i, j) {
      if (buscaminas.tablero[i][j] === "B")
         return true;
      if (buscaminas.tableroSolucion[i][j] === "x")
         buscaminasGui.descubrirMinas()
      else
         buscaminas.picar(i, j);
      buscaminasGui.actualizarTablero();

   },
   marcar(e, i, j) {
      if ($final == false) {
         if (e.which == 3) {
            let $valorM = $("#" + i + "-" + j)
            buscaminasGui.eliminaMenuContextual();

            if (buscaminas.marcar(i, j)) {
               console.log("entra")
               $valorM.css({
                  "background-color": "blue",
               });
            } else {
               $valorM.css({
                  "background-color": "black",
               });
            }

         }
      }
   },
   despejar() {
   
   
   },
   eliminaMenuContextual() {
      $("#tablero").contextmenu(function (event) {
         event.preventDefault();
      })
   },

   actualizarTablero() {
      for (const coordenada of buscaminas.casillaPulsada) {
         let i = coordenada.split("-")[0];
         let j = coordenada.split("-")[1];
         let $valor = $("#" + i + "-" + j)
         $valor.off();
         if (buscaminas.tableroSolucion[i][j] === 0)
            $valor.text("");
         else
            $valor.text(buscaminas.tableroSolucion[i][j]);
         $valor.css({
            "background-color": "#CCCCCC",
            "text-align": "center",
            "font-size": "40px"

         }
         )
      }
   },

   descubrirMinas() {
      $final = true;
      for (let i = 0; i < buscaminas.filas; i++) {
         for (let j = 0; j < buscaminas.columnas; j++) {

            let $id = $("#" + i + "-" + j);
            $id.unbind("click");
            if (buscaminas.tableroSolucion[i][j] === "x") {
               $id.css({
                  "background-color": "red",
               });
            }
         }
      }
   },
}
$(init);
