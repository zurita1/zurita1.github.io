{
    function init() {
        let reg = /adios/g;
        let str = "hola y adios";   
        // Devuelve el índice de la primera coincidencia entre la expresión regular y la cadena de texto proporcionada, si no encuentra devuelve -1.
        console.log(str.search(reg));
    }
    window.addEventListener("load", init);
}