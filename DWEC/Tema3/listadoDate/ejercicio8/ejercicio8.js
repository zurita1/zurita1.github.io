{
    function init() {
        info = document.getElementById("info");
        año();
    }
    
    function año() {
        try {
            if(esBisiesto(new Date("2019/11/09")))
                info.innerHTML = "El año es bisiesto";
            else
                info.innerHTML = "El año no es bisiesto";
        } catch (e) {
            info.innerHTML = e;
        }
    }   
    function esBisiesto(cadenaFecha) {
        let fecha = new Date(cadenaFecha);
        if (isNaN(fecha))
            throw "El valor introducido no es una fecha válida";       
        let annio = fecha.getFullYear();
        if(annio % 4 == 0 && annio % 100 != 0)
            return true;
        else if(annio % 400 == 0)
            return true;
        return false; 
    }
    window.addEventListener("load", init);
}