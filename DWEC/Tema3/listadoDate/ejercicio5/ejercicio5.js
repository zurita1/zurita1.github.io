{
    function init() {
            info = document.getElementById("info");
           comprobarFecha();
        }
    
        function fecha(cadenaFecha){
            let fecha = cadenaFecha;
            if(isNaN(fecha))
                throw "El valor introducido no es una fecha";
            return fecha
        }
    
        function comprobarFecha(){
            try{
                info.innerHTML = fecha(new Date("2018"));
            }catch(e){
                info.innerHTML = e;
            }
        }
    window.addEventListener("load", init);
}