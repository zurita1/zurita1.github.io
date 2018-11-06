{  
    function init() {
        info=document.getElementById("info");
        info.innerHTML=calcularHastaFinDeAnno();
    }
    function calcularHastaFinDeAnno(){
        let annioActual = new Date().getFullYear();
        let fechaActual = new Date().getTime();
        let finDeAnnio = new Date(annioActual,11,31).getTime();
        let resul = finDeAnnio - fechaActual;
        return Math.round(resul/(1000*60*60*24));
    }
window.addEventListener("load", init);
}