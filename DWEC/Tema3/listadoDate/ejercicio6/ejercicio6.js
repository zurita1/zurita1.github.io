{
    function init() {
        info = document.getElementById("info");
        mostrarInformacion()
    }    
    function mostrarInformacion() {
        try {
            info.innerHTML = incrementaDias(3,new Date("2018/12/04"))                
        } catch (e) {
            info.innerHTML = e;
        }
    }
    function incrementaDias(dias, cadenaFecha) {
        let fecha = new Date(cadenaFecha);
        if (isNaN(fecha))
            throw "El valor introducido no es una fecha";

        fecha.setDate(fecha.getDate() + parseInt(dias));
        return fecha;
    }
    window.addEventListener("load", init);
}