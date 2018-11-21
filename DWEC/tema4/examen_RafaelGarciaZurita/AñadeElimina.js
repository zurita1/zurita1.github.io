{
    let matI;
    let matricula;
    let mensaje;
    let set = new Set();
    let concesionario;
    let fecha;
    const regex = /(\d{4})\s(([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]){3})$/g;

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
        let valor = regex.exec(matI.value);
        limpiarConcesionario();
        try {
            regex.exec(matI.value);
            if (regex.test(matI.value)) {
                matI.value = "";
                mensaje.innerHTML = "";
                [matricula, , ,] = valor;
                if (existeEnConcesionario(matricula.trim())) {
                    mensaje.innerHTML = " Esa matricula ya existe en este concesionario";
                } else {
                    fecha = new Date().toLocaleString();
                    set.add([matricula.trim(), fecha]);
                    
                }
            } else {
                throw "Error en la matricula, antes de introducir compruebala en el validator";
            }
        } catch (e) {
            mensaje.innerHTML = e;
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
            if (value[0] == matricula) {
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