{
    function init() {
        document.getElementById("info").innerHTML = calcularHastaFinDeAnno();
    }
    function calcularHastaFinDeAnno() {
        let annioActual = new Date().getFullYear();
        console.log(annioActual);
        let fechaActual = new Date().getTime();
        console.log(fechaActual);
        let finDeAnnio = new Date(annioActual, 11, 31).getTime();
        console.log(finDeAnnio);
        let resul = finDeAnnio - fechaActual;
        return Math.round(resul / (1000 * 60 * 60 * 24));
    }
    window.addEventListener("load", init);
}