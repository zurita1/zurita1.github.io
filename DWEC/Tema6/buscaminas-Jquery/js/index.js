let buscaminas = {
    tablero: [],
    tableroSolucion: [],
    tableroBandera: [],
    casillasResultanteA: [],
    filas: 0,
    columnas: 0,
    minas: 0,
    nivel: "",
    //guardo casillas 
    casillaPulsada: [],
    casillaVacia: [],
    casillasResultante: 0,
    //bandera
    pulsada: [],
    sumarBanderas: 0,


    init() {
        buscaminas.crearTableros();
        buscaminas.crearMinas();
        buscaminas.mostrar();
    },
    reiniciar() {
        buscaminas.filas = 0;
        buscaminas.columnas = 0;
        buscaminas.minas = 0;
        buscaminas.numBanderas = 0;
    },
    mostrar() {
        console.log("Tablero Descubierto - Pruebas");
        console.table(buscaminas.tableroSolucion);
    },

    picar(x, y) {
        try {
            if (buscaminas.tableroSolucion[x][y] === "x") {
                return buscaminasGui.descubrirMinas();
            }
            buscaminas.descrubirCeros(x, y);
            buscaminas.pulsada[x][y] = true;
            buscaminas.actualizaTablero();
            buscaminas.casillaPulsada.push(x + "-" + y);
            buscaminas.comprobarVictoria();
        } catch (e) {
            console.error(e.message);

        }
    },
    marcar(x, y) {
        try {
            if (buscaminas.tableroBandera[x][y] !== "B" && buscaminas.pulsada[x][y] == false) {
                buscaminas.tableroBandera[x][y] = "B"
                return true;
            } else if (buscaminas.tableroBandera[x][y] === "B") {
                buscaminas.tableroBandera[x][y] = "";
                return false;
            }

        } catch (e) {
            console.log(e.message);
        }
    },
    despejar(i, z) {
        buscaminas.casillaVacia = [];
        buscaminas.sumarBanderas = 0;
        if (buscaminas.contarBanderas(i, z) === buscaminas.tablero[i][z]) {
            for (let j = Math.max(i - 1, 0); j <= Math.min(i + 1, buscaminas.filas - 1); j++)
                for (let k = Math.max(z - 1, 0); k <= Math.min(z + 1, buscaminas.columnas - 1); k++) {
                    if (buscaminas.tableroBandera[j][k] !== "B")
                        buscaminas.picar(j, k);
                }
        } else {
            for (let j = Math.max(i - 1, 0); j <= Math.min(i + 1, buscaminas.filas - 1); j++) {
                for (let k = Math.max(z - 1, 0); k <= Math.min(z + 1, buscaminas.columnas - 1); k++) {
                    if (buscaminas.tableroBandera[j][k] !== "B" && buscaminas.pulsada[j][k] == false) {
                        buscaminas.casillaVacia.push(j + "-" + k);
                    }
                }
            }
        }
    },
    contarBanderas(i, z) {
        for (let j = Math.max(i - 1, 0); j <= Math.min(i + 1, buscaminas.filas - 1); j++) {
            for (let k = Math.max(z - 1, 0); k <= Math.min(z + 1, buscaminas.columnas - 1); k++) {
                if (buscaminas.tableroBandera[j][k] === "B") {
                    buscaminas.sumarBanderas++;
                }
            }
        }
        console.log(buscaminas.sumarBanderas);
        return buscaminas.sumarBanderas;
    },
    comprobarVictoria() {
        if (buscaminas.casillasTotales() === buscaminas.casillasAbiertas()) {
            return true;
        }
    },
    casillasTotales() {
        let casilla = 0;
        for (let i = 0; i < buscaminas.columnas; i++) {
            for (let j = 0; j < buscaminas.filas; j++) {
                if (buscaminas.tableroSolucion[i][j] !== "x") {
                    casilla++;
                }
            }
        }
        return casilla;
    },
    casillasAbiertas() {
        let casilla = 0;
        for (let i = 0; i < buscaminas.columnas; i++) {
            for (let j = 0; j < buscaminas.filas; j++) {
                if (buscaminas.pulsada[i][j] === true) {
                    casilla++;
                }
            }
        }
        return casilla;
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
                buscaminas.columnas = 20;
                buscaminas.minas = 99;
                buscaminas.numBanderas = 99;
                break;
            default:
                break;
        }
    },

    crearTableros() {
        for (let i = 0; i < buscaminas.filas; i++) {
            buscaminas.tablero[i] = [];
            buscaminas.tableroSolucion[i] = [];
            buscaminas.pulsada[i] = [];
            buscaminas.tableroBandera[i] = [];
            buscaminas.casillasResultanteA[i] = [];
            for (let j = 0; j < buscaminas.columnas; j++) {
                buscaminas.tablero[i][j] = 0;
                buscaminas.tableroSolucion[i][j] = 0;
                buscaminas.pulsada[i][j] = false;
                buscaminas.tableroBandera[i][j] = "";
                buscaminas.casillasResultanteA[i][j] = false
            }
        }
    },

    crearMinas() {
        for (let i = 0; i < buscaminas.minas; i++) {
            let fila = Math.floor(Math.random() * (buscaminas.filas - 1 - 0)) + 0;
            let columna = Math.floor(Math.random() * (buscaminas.columnas - 1 - 0)) + 0;

            while (buscaminas.tableroSolucion[fila][columna] === "x") {
                fila = Math.floor(Math.random() * (buscaminas.filas - 1 - 0)) + 0;
                columna = Math.floor(Math.random() * (buscaminas.columnas - 1 - 0)) + 0;
            }
            buscaminas.tableroSolucion[fila][columna] = "x";

            for (let j = Math.max(fila - 1, 0); j <= Math.min(fila + 1, buscaminas.filas - 1); j++)
                for (let k = Math.max(columna - 1, 0); k <= Math.min(columna + 1, buscaminas.columnas - 1); k++)
                    if (buscaminas.tableroSolucion[j][k] !== "x")
                        buscaminas.tableroSolucion[j][k] += 1;
        }
    },

    descrubirCeros(x, y) {
        if (buscaminas.tableroSolucion[x][y] === 0) {

            for (let j = Math.max(x - 1, 0); j <= Math.min(x + 1, buscaminas.filas - 1); j++)
                for (let k = Math.max(y - 1, 0); k <= Math.min(y + 1, buscaminas.columnas - 1); k++) {
                    if (buscaminas.pulsada[j][k] === false) {
                        buscaminas.pulsada[j][k] = true;
                        buscaminas.casillaPulsada.push(j + "-" + k);
                        buscaminas.picar(j, k);
                    }
                }

        }
    },
    actualizaTablero() {
        for (let i = 0; i < buscaminas.filas; i++) {
            for (let j = 0; j < buscaminas.columnas; j++) {
                if (buscaminas.pulsada[i][j] == true) {
                    buscaminas.tablero[i][j] = buscaminas.tableroSolucion[i][j];
                }
            }
        }
    }
};

