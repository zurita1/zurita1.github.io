{
    let matI;
    let matricula;
    let mensaje;
    let set = new Set();
    let concesionario;
    let fecha;
    const regex = /(\d{4})\s(([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]){3})$/gi;

    function init() {
        document.getElementById("eliminar").addEventListener("click", eliminar);
        concesionario = document.getElementById("concesionario");
        document.getElementById("annadir").addEventListener("click", annadir);
        matI = document.getElementById("matI");
        document.getElementById("atras").addEventListener("click", atras);
        mensaje = document.getElementById("mensaje");
        crearContador();
        ultimoCoche();
    }

    function crearContador() {
        if (localStorage.getItem("contador") == null) {
            localStorage.setItem("contador", 0);
        }
    }

    function atras(event) {
        event.preventDefault();
        history.back();
    }
    function eliminar() {
        let matricula = matI.value.trim();
        let coche = eliminar2(matricula);
        if (set.delete(coche)) {
            mensaje.innerHTML = "Coche eliminado con exito";
            mostrarConcesionario();
        } else {
            mensaje.innerHTML = "No existe esa matricula en el concesionario";
        }

    }
    function annadir() {
       // [matricula, , ,]= regex.exec(matI.value);
        try {            
            [matricula, , ,] =regex.exec(matI.value);
            mensaje.innerHTML = "";
            let matriculaMayuscula=matricula.trim().toUpperCase();
            if (existeEnConcesionario(matriculaMayuscula)) {
                mensaje.innerHTML = " Esa matricula ya existe en este concesionario";
            } else {
                fecha = new Date().toLocaleString();
                set.add([matriculaMayuscula, fecha]);                   
            }
            matI.value = "";           
        } catch (e) {
            mensaje.innerHTML = "Matricula invalida";
        } finally{
            mostrarConcesionario();
        }
    }

    function limpiarConcesionario() {
        concesionario.innerHTML = "";
    }

    function mostrarConcesionario() {
        limpiarConcesionario();
        cambiarUltimoCoche();
        set.forEach((value) => {
            concesionario.innerHTML += "<br>" + value[0] + "<br>" + value[1];
        });        
    }
    function existeEnConcesionario(matricula) {
        let existe = false;
        set.forEach((value) => {
            if (value[0] == matricula) {
                existe = true;
            }
        });
        return existe;
    }
    function eliminar2(matricula) {
        let coche;
        set.forEach((value) => {
            if (value[0] === matricula) {
                coche = value;
            }
        });
        return coche;
    }
    function cambiarUltimoCoche() {
        console.log(fecha);        
        ultimaFecha=fecha;
        localStorage.setItem("contador", ultimaFecha);
        cuenta = localStorage.getItem("contador");
        concesionario.innerHTML += "Tu ultimo coche fue añadido a las: " + cuenta;
    }
    function ultimoCoche(){
        cuenta = localStorage.getItem("contador");
        concesionario.innerHTML += "Tu ultimo coche fue añadido a las: " + cuenta;
    }
    window.addEventListener("load", init);
}