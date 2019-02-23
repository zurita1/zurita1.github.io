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
               "margin": "1px"
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
      if ($final == false) {
         if (buscaminas.tableroBandera[i][j] === "B")
            return true;
         else
            buscaminas.picar(i, j);
         buscaminasGui.actualizarTablero();
      }
   },
   marcar(e, i, j) {
      if ($final == false) {
         if (e.buttons == 2) {
            let $valorM = $("#" + i + "-" + j)
            buscaminasGui.eliminaMenuContextual();

            if (buscaminas.marcar(i, j)) {
               $valorM.css({
                  "background-color": "blue",
               });
            } else {
               if (buscaminas.pulsada[i][j] !== true)
                  $valorM.css({
                     "background-color": "black",
                  });
            }

         }
      }
   },
   despejar(e, i, j) {
      if (e.buttons == 3)
         buscaminas.despejar(i, j)

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
            let $valor = $("#" + i + "-" + j)
            if (buscaminas.tableroSolucion[i][j] === "x") {
               if (buscaminas.tableroBandera !== "B") {
                  $valor.css({
                     "background-color": "red",
                  });
               }
            }
         }
      }
   },
}
$(init);
