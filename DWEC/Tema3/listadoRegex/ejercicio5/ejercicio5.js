{
    function init() {
        let reg = /\w/i;
        // índice en el que se inicia la siguiente coincidencia.
        console.log(reg.lastIndex);
    }
    window.addEventListener("load", init);
}