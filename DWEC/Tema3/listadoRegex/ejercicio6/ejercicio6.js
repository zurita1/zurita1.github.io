{
    function init() {
        let reg = /adios/g;
        // Es una propiedad estática de solo lectura para expresiones regulares que contiene los caracteres de la última coincidencia.
        // No la soportan todos los navegadores
        console.log(reg.lastMatch);
    }
    window.addEventListener("load", init);
}