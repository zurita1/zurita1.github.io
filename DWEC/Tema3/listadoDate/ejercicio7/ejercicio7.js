{
    let semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    function init() {
        info=document.getElementById("info");
        dias();
    }
    function dias() {
        let diaSemana;
        let diaSemanaA;
        try {
            diaSemana = calcularDiaSemana(new Date("2018/11/04"));
            diaSemanaA = calcularDiaSemana(new Date());
            info.innerHTML += "El día de la semana es: " + diaSemana;
            info.innerHTML += ",  y el día de la semana actual es: " + diaSemanaA;
        } catch (e) {
            info.innerHTML = e;
        }

    }
    function calcularDiaSemana(fecha) {
        let diaSemana = semana[fecha.getDay()];
        if (diaSemana == undefined)
            throw "No has introducido una fecha válida";
        return diaSemana;
    }
    window.addEventListener("load", init);
}