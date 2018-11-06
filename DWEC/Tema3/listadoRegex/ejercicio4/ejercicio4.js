{
    function init() {
        let reg = /\w/i;
        // Devuelve la expresión regular sin banderas
        console.log(reg.source);   
        // Devuelve la expresión regular, con todasmsun banderas, con la sintaxis con la que está escrita
        console.log(reg.toString());
    }
    window.addEventListener("load", init);
}