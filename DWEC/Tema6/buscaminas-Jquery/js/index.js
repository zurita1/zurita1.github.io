let buscaminas = {
    tablero: [],
    tableroSolucion: [],
    tableroBandera:[],
    filas: 0,
    columnas: 0,
    minas: 0,
    nivel: "",
    //guardo casillas 
    casillaPulsada: [],
    //bandera
    pulsada: [],
 

    init() {
        buscaminas.crearTableros();
        buscaminas.crearMinas();
        buscaminas.mostrar();
    },

    mostrar() {
        console.log("Tablero Descubierto - Pruebas");
        console.table(buscaminas.tableroSolucion);
    },

    picar(x, y) {
        try {
            if(buscaminas.tableroSolucion[x][y]==="x"){
                return false;
            }
                buscaminas.descrubirCeros(x, y);
                buscaminas.actualizaTablero();
                buscaminas.pulsada[x][y] = true;
                buscaminas.casillaPulsada.push(x + "-" + y);

        } catch (e) {
            console.error(e.message);

        }
    },
    marcar(x, y) {
        try {
            if (buscaminas.tableroBandera[x][y] !== "B" && buscaminas.pulsada[x][y] == false) {
                buscaminas.pulsada[x][y] == true;
               buscaminas.tableroBandera[x][y] = "B"
                console.log("true")
                return true;
            } else if (buscaminas.tableroBandera[x][y] === "B") {              
                buscaminas.pulsada[x][y] == false;
                buscaminas.tableroBandera[x][y] = "";
                console.log("false")
                return false;
            }

        } catch (e) {
            console.log(e.message);
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
            buscaminas.pulsada[i]=[];
            buscaminas.tableroBandera[i]=[]
            for (let j = 0; j < buscaminas.columnas; j++) {
                buscaminas.tablero[i][j] = 0;
                buscaminas.tableroSolucion[i][j] = 0;
                buscaminas.pulsada[i][j] = false;
                buscaminas.tableroBandera[i][j] = "";
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
        if (buscaminas.pulsada[x][y] === false) {
            buscaminas.pulsada[x][y] = true;
            if (buscaminas.tableroSolucion[x][y] === 0) {
                for (let j = Math.max(x - 1, 0); j <= Math.min(x + 1, buscaminas.filas - 1); j++)
                    for (let k = Math.max(y - 1, 0); k <= Math.min(y + 1, buscaminas.columnas - 1); k++) {
                        buscaminas.pulsada[x][y] = true;
                        buscaminas.casillaPulsada.push(j + "-" + k);
                        buscaminas.descrubirCeros(j, k);
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

