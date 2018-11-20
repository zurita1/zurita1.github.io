{
    let matI;
    let mensaje;
    let set;
    let concesionario;
    let fecha;

    function init() {
        set = new Set();
        document.getElementById("eliminar").addEventListener("click", eliminar);
        concesionario = document.getElementById("concesionario");
        document.getElementById("annadir").addEventListener("click", annadir);
        matI = document.getElementById("matI");
        document.getElementById("atras").addEventListener("click", atras);
        mensaje = document.getElementById("mensaje");
        crearContador();
    }

    function crearContador(){
        if(localStorage.getItem("contador") == null){
            localStorage.setItem("contador",0);
        }
    }
   
    function atras(event) {
        event.preventDefault();
        history.back();
    }
    function eliminar() {
        if (set.has(matricula.trim())) {
            set.clear(matricula.trim());
            mensaje.innerHTML = "Coche eliminado con exito"
        } else {
            mensaje.innerHTML = "No existe esa matricula en el concesionario"
        }
    }
    function annadir() {
        let regex = /(\d{4})\s(([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]){3})$/g;
        let valor = regex.exec(matI.value);
        console.log(valor);
        concesionario.innerHTML = "";
        try {
            regex.exec(matI.value);
            if (regex.test(matI.value)) {
                matI.value = "";
                mensaje.innerHTML = "";
                [matricula, numeros, letras,] = valor;
                if (set.has(matricula.trim())) {
                    mensaje.innerHTML = " Esa matricula ya existe en este concesionario";
                } else {
                    set.add(matricula.trim());
                    fecha = new Date();
                    cochesAnnadidos();                   
                    set.forEach((value) => {
                            concesionario.innerHTML += "<br>" + value + "<br>" + fecha;                                                 
                    });
                }
            } else {
                throw "Error en la matricula, antes de introducir compruebala en el validator";
            }
        } catch (e) {
            mensaje.innerHTML = e;
        }
    }
    function cochesAnnadidos(){
        let contar = localStorage.getItem("contador");
        contar++;
        localStorage.setItem("contador",contar);
        cuenta=localStorage.getItem("contador");
        concesionario.innerHTML +="Llevas en total de coches añadidos: "+cuenta;
    }
    window.addEventListener("load", init);
}