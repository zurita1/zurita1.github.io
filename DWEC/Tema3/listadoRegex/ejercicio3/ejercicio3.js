{
    function init() {
        let reg = /\w/i;
        // Devuelve las banderas que usa la expresión regular
        console.log(reg.flags);    
        // no funciona en ningún navegador
        console.log(reg.options);
    }
    window.addEventListener("load", init);
}