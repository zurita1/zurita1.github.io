{
    let minas;
    let columnas;
    let filas;
    let nivel;
    let tablero = [];
    let x;
    let y;
    let valor;
    let body;
    let input;

    function init() {
        body = document.getElementsByTagName('body')[0];
        nivel = parseInt(prompt("Elige tu dificultad del 1 al 3 (si es menos de 1, se asignara este y si es mayor de tres se asignara este)"));
        elegirNivel();
        crearTablero()
        añadirMinas();
        console.log(tablero);
        crearTableroVisual();
       
    }
    function crearTableroVisual() {
        contenedor = document.createElement('div');
        body.appendChild(contenedor);       
        for (let i = 0; i < filas; i++) {
            for (let j = 0; j < columnas; j++) {
                input=document.createElement('input');               
                input.type = 'button';
                input.value = "";
                input.valor= tablero[i][j];
                input.style.width = 50 +"px";
                input.style.height = 50+ 'px';               
                input.addEventListener("click", () => funcionalidad(i, j));
                tablero[i][j]=input;
                contenedor.appendChild(input);
            }
           saltoLinea=document.createElement("br");
            contenedor.appendChild(saltoLinea);
        }
    }
    function funcionalidad(i,j){
           tablero[i][j].value=tablero[i][j].valor;
    }
    function crearTablero() {
        for (let i = 0; i < filas; i++) {
            tablero[i] = [];
            for (let j = 0; j < columnas; j++)
                tablero[i][j] = 0;
        }
    }
    function elegirNivel() {
        if (nivel <= 1) {
            minas = 10;
            filas = 8;
            columnas = 8;
        }
        else if (nivel == 2) {
            minas = 40;
            columnas = 16;
            filas = 16;
        }
        else {
            minas = 99;
            columnas = 25;
            filas = 30;
        }
    }
    function añadirMinas() {
        for (let i = 0; i < minas; i++) {
            x = Math.floor(Math.random()*filas);
            y = Math.floor(Math.random()*columnas);
            tablero[x][y] = 9;
            for (let j = Math.max(x - 1, 0); j <= Math.min(x + 1, filas - 1); j++)
                for (let k = Math.max(y - 1, 0); k <= Math.min(y + 1, columnas - 1); k++)
                    if (tablero[j][k] !== 9)
                        tablero[j][k]+=1;
        }
    }
    window.addEventListener("load", init)
}