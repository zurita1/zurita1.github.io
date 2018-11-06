{
    function init() {
    let reg = /Adios/i;
    let str = "hola y adios";
    //Devuelve un array con las coincidencias
    console.log(str.match(reg));
    }
    window.addEventListener("load", init);
}