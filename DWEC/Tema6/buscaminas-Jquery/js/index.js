
    let buscaminas = {
        tableroDescubierto: [],
        tableroDescubiertoCopia: [], 
        tableroJugable: [],
        tableroCasillaPulsada: [],

        filas: 0,
        columnas: 0,
        minas: 0,
        nivel:"",
        casillaPulsada:[],

        init() {
            buscaminas.generarTableros();
            buscaminas.generaMinas();
            buscaminas.mostrar();
        },
        
        mostrar() {
            console.log("Tablero Descubierto - Pruebas");
            console.table(buscaminas.tableroDescubierto);

            console.log("Tablero Jugablehola");
            console.table(buscaminas.tableroJugable);
        },

        picar(x, y) {
            
            try {

                if (buscaminas.tableroDescubierto[x][y] === "x") {
                    throw new Error("Boooooooom!!!");
                }
                else if (buscaminas.tableroCasillaPulsada[x][y] === "c-pulsada")
                    throw new Error("La casilla ya está pulsada");
                else {
                    buscaminas.descrubirCeros(x, y);
                    buscaminas.tableroCasillaPulsada[x][y] = "c-pulsada";
                   
                    buscaminas.actualizaTablero();
                    console.clear();
                    console.log("Tablero Jugable");
                    console.table(buscaminas.tableroJugable);
                    //En caso de no quedar casillas por levantar se indica que se ha ganado el juego.
                    //buscaminas.compruebaVictoria();
                }
            } catch (e) {
                //Nueva partida
                console.error(e.message);

            }
        },
        marcar(x, y) {
            try {
                //Sino hay bandera y no está descubierta, coloco bandera
                if (buscaminas.tableroCasillaPulsada[x][y] !== "c-pulsada" && buscaminas.tableroJugable[x][y] !== "🏴") {
                    buscaminas.tableroJugable[x][y] = "🏴";
                    console.clear();
                    console.log("Tablero Jugable");
                    console.table(buscaminas.tableroJugable);
                } else if (buscaminas.tableroCasillaPulsada[x][y] === "c-pulsada")
                    throw new Error("La bandera no se puede colocar");
                //Sino  está descubierta y tiene bandera, la elimino.
                else if (buscaminas.tableroCasillaPulsada[x][y] !== "c-pulsada" && buscaminas.tableroJugable[x][y] === "🏴") {
                    buscaminas.tableroJugable[x][y] = "❑";
                    console.clear();
                    console.log("Tablero Jugable");
                    console.table(buscaminas.tableroJugable);
                }
                buscaminas.compruebaVictoriaBandera();
            } catch (e) {
                //Muestro el mensaje de error
                console.log(e.message);
            }
        },

        casillasPulsadas() {
            let contador = 0;
            for (let i = 0; i < buscaminas.filas; i++) {
                for (let j = 0; j < buscaminas.columnas; j++) {
                    //Obtengo las casillas con un bucle anidado.
                    if (buscaminas.tableroCasillaPulsada[i][j] === "c-pulsada")
                        contador++;
                }
            }
            return contador;
        },

        casillasPulsadasVictoria() {
            let contador = 0;
            for (let i = 0; i < buscaminas.filas; i++) {
                for (let j = 0; j < buscaminas.columnas; j++) {
                    if (buscaminas.tableroDescubierto[i][j] !== "0")
                        contador++;
                }
            }
            return contador;
        },

        compruebaVictoria() {
            //Capturo el mensaje de victoria en un error
            try {
                if (buscaminas.casillasPulsadas() === buscaminas.casillasPulsadasVictoria())
                    throw new Error("Bravo (aplausos)");
            } catch (e) {
                buscaminas.deseaContinuar(e.message)
            }
        },
        compruebaVictoriaBandera() {
            //Creo un contador que se acumula si hay bandera encima de bombas
            let contador = 0;
            for (let i = 0; i < buscaminas.filas; i++) {
                for (let j = 0; j < buscaminas.columnas; j++) {
                    if (buscaminas.tableroJugable[i][j] === "🏴" && buscaminas.tableroDescubierto[i][j] === "x")
                        contador++;
                }
            }
            try {
                //Si el número de contador es el mismo que de minas, he ganado
                if (contador === buscaminas.minas)
                    throw new Error("He ganado con banderas o.o");
            } catch (e) {
                buscaminas.deseaContinuar(e.message);
            }

        },

        pedirNivel(dificultad) {
            switch (dificultad) {
                case "facil":
                  buscaminas.filas = 8;
                  buscaminas.columnas = 8;
                  buscaminas.minas = 10;
                  buscaminas.numBanderas = 10;
                  break;
                case "intermedio":
                  buscaminas.filas = 16;
                  buscaminas.columnas = 16;
                  buscaminas.minas = 40;
                  buscaminas.numBanderas = 40;
                  break;
                case "experto":
                  buscaminas.filas = 20;
                  buscaminas.columnas = 24;
                  buscaminas.minas = 99;
                  buscaminas.numBanderas = 99;
                  break;
                default:
                  break;
              }
            },
        
        deseaContinuar(str) {
            let continua = "";
            do {
                continua = prompt(str + ", ¿Desea continuar? (s/n)");
            } while (continua.toLowerCase() === "s" && continua.toLowerCase() === "n");
            if (continua.toLowerCase() === "s")
                buscaminas.init();
            else
                return console.log("Hasta luego");
        },
        generarTableros() {
            for (let i = 0; i < buscaminas.filas; i++) {
                buscaminas.tableroDescubierto[i] = [];
                buscaminas.tableroJugable[i] = [];
                buscaminas.tableroDescubiertoCopia[i] = [];
                buscaminas.tableroCasillaPulsada[i] = [];
                for (let j = 0; j < buscaminas.columnas; j++) {
                    //Relleno de 0 todos, menos el jugable, el usuario no puede verlo
                    buscaminas.tableroDescubierto[i][j] = 0;
                    buscaminas.tableroJugable[i][j] = "❑";
                    buscaminas.tableroDescubiertoCopia[i][j] = 0;
                    buscaminas.tableroCasillaPulsada[i][j] = 0;
                }
            }
        },
        generaMinas() {

            for (let i = 0; i < buscaminas.minas; i++) {
                let fila = Math.floor(Math.random() * (buscaminas.filas - 1 - 0)) + 0;
                let columna = Math.floor(Math.random() * (buscaminas.columnas - 1 - 0)) + 0;

                while (buscaminas.tableroDescubierto[fila][columna] === "x") {
                    fila = Math.floor(Math.random() * (buscaminas.filas - 1 - 0)) + 0;
                    columna = Math.floor(Math.random() * (buscaminas.columnas - 1 - 0)) + 0;
                }
                buscaminas.tableroDescubierto[fila][columna] = "x";
                buscaminas.tableroDescubiertoCopia[fila][columna] = "x";

                for (let j = Math.max(fila - 1, 0); j <= Math.min(fila + 1, buscaminas.filas - 1); j++)
                    for (let k = Math.max(columna - 1, 0); k <= Math.min(columna + 1, buscaminas.columnas - 1); k++)
                        if (buscaminas.tableroDescubierto[j][k] !== "x")
                            buscaminas.tableroDescubierto[j][k] += 1;
            }
        },

        descrubirCeros(x, y) {
            if (buscaminas.tableroDescubiertoCopia[x][y] === 0) {
                buscaminas.tableroDescubiertoCopia[x][y] = -1;
                if (buscaminas.tableroDescubierto[x][y] === 0) {
                    for (let j = Math.max(x - 1, 0); j <= Math.min(x + 1, buscaminas.filas - 1); j++)
                        for (let k = Math.max(y - 1, 0); k <= Math.min(y + 1, buscaminas.columnas - 1); k++) {
                            buscaminas.tableroCasillaPulsada[j][k] = "c-pulsada";
                            buscaminas.descrubirCeros(j, k);
                        }
                }
            }
        },

        actualizaTablero() {
            for (let i = 0; i < buscaminas.filas; i++) {
                for (let j = 0; j < buscaminas.columnas; j++) {
                    if (buscaminas.tableroCasillaPulsada[i][j] === "c-pulsada")
                        buscaminas.casillaPulsada.push(i + "-" + j);
                        buscaminas.tableroJugable[i][j] = buscaminas.tableroDescubierto[i][j];
                }
            }
        }
    };
