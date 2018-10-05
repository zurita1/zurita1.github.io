window.addEventListener('load', init)

function moverRaton(e) {
    document.getElementById('infoRaton').innerHTML = '<h1>Ratón</h1> </br> x: '+ e.pageX + ' </br> Y: '+ e.pageY;
}

function pulsaTecla(e) {
    document.getElementById('infoTeclado').innerHTML ='<h1>Teclado</h1> </br> Tecla ' + e.key+ ' </br> Caracter ' + e.keyCode;
}


function init() {
    window.addEventListener("mousemove", moverRaton);
    window.addEventListener("keypress", pulsaTecla);
}