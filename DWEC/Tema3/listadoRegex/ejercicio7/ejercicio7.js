{
    function init() {
        let reg = /Adios/i
        let str = "adios";    
        // Propiedad para comprobar si se cumple la expresion regular, devuelve true o false
        console.log(reg.test(str));

    }
    window.addEventListener("load", init);
}