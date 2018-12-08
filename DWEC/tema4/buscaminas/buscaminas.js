{
    let minas;
    let columnas;
    let filas;
    let tablero = [];
    let x;
    let y;
    let valor;
    let body;
    let input;
    let facil = 1;
    let intermedio = 2;
    let dificil = 3;

    function init() {
        body = document.getElementsByTagName('body')[0];
        document.getElementById("facil").addEventListener("click", function () { elegirNivel(facil); });
        document.getElementById("intermedio").addEventListener("click", function () { elegirNivel(intermedio); });
        document.getElementById("dificil").addEventListener("click", function () { elegirNivel(dificil); });
    }
    function crearTableroVisual() {
        contenedor = document.createElement('div');
        body.appendChild(contenedor);
        for (let i = 0; i < filas; i++) {
            for (let j = 0; j < columnas; j++) {
                input = document.createElement('input');
                input.type = 'button';
                input.value = "";
                input.valor = tablero[i][j];
                input.style.width = 50 + "px";
                input.style.height = 50 + 'px';
                input.addEventListener("click", () => funcionalidad(i, j));
                tablero[i][j] = input;
                contenedor.appendChild(input);
            }
            saltoLinea = document.createElement("br");
            contenedor.appendChild(saltoLinea);
        }
    }
    function funcionalidad(i, j) {
        tablero[i][j].value = tablero[i][j].valor;
        comprueba(i, j);
    }
    function comprueba(i, j) {
        if(tablero[i][j].value == 0){
            for (let z = Math.max(i - 1, 0); z <= Math.min(i + 1, filas - 1); z++){
                for (let x = Math.max(j - 1, 0); x <= Math.min(j + 1, columnas - 1); x++){
                    if (tablero[z][x].valor != 9){                        
                        tablero[z][x].value =tablero[z][x].valor;
                        comprueba(z,x);
                    }
                }
            }
        }
        if (tablero[i][j].value == 9) {
            tablero[i][j].style.backgroundImage = "url(img/mina.png)";
            tablero[i][j].style.backgroundSize = "cover";
            tablero[i][j].value = "";
            for (let r = 0; r < filas; r++) {
                for (let k = 0; k < columnas; k++) {
                    tablero[r][k].disabled = 'true';
                }
            }
            for (let q = 0; q < filas; q++) {
                for (let w = 0; w < columnas; w++) {
                    if (tablero[q][w].valor == 9) {
                        tablero[q][w].style.backgroundImage = "url(img/mina.png)";
                        tablero[q][w].style.backgroundSize = "cover";
                        tablero[q][w].value = "";
                    }
                }
            }
        }
    }
    function crearTablero() {
        console.log(filas);
        for (let i = 0; i < filas; i++) {
            tablero[i] = [];
            for (let j = 0; j < columnas; j++)
                tablero[i][j] = 0;
        }
    }
    function elegirNivel(nivel) {
        console.log(nivel);
        if (nivel == 1) {
            console.log("entrando");
            minas = 10;
            filas = 8;
            columnas = 8;
            console.log(minas);
        }
        else if (nivel == 2) {
            minas = 40;
            columnas = 16;
            filas = 16;
        }
        else if (nivel == 3) {
            minas = 99;
            columnas = 25;
            filas = 30;
        }
        crearTablero();
        añadirMinas();
        console.log(tablero);
        crearTableroVisual();
    }
    function añadirMinas() {
        for (let i = 0; i < minas; i++) {
            x = Math.floor(Math.random() * filas);
            y = Math.floor(Math.random() * columnas);
            tablero[x][y] = 9;
            for (let j = Math.max(x - 1, 0); j <= Math.min(x + 1, filas - 1); j++)
                for (let k = Math.max(y - 1, 0); k <= Math.min(y + 1, columnas - 1); k++)
                    if (tablero[j][k] !== 9)
                        tablero[j][k] += 1;
        }
    }
    window.addEventListener("load", init)
}