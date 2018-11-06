{
    function init() {     
            let reg = /Adios/i;        
            let str = "hola y adios";       
            // Devuelve un array con las coincidencias y los grupos si existieran
            console.log(reg.exec(str));
    }
    window.addEventListener("load", init);
}