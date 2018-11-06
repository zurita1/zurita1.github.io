{
    function init() {
        info = document.getElementById("info");
        comprobarFecha();
    }
   
    function comprobarFecha() {
        if (esFecha(new Date(1995,11,17)))
            info.innerHTML = "Has introducido una fecha correcta";
        else
            info.innerHTML = "No has introducido una fecha correcta";
    }
    function esFecha(fecha) {
        return isNaN(new Date(fecha)) ? false : true;
    }

window.addEventListener("load", init);
}