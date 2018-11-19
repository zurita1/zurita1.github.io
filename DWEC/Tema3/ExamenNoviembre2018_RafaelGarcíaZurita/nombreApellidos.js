{
    let nombre;
    let apellidos;
    let dato;
    let mensaje;
    let set;

    function init() {
        nombre = document.getElementById("nombre");
        apellidos = document.getElementById("apellidos");
        dato = document.getElementById("dato");       
        atras = document.getElementById("atras");
        mensaje = document.getElementById("mensaje");
        set = new Set();
        dato.addEventListener("blur", mostrar);
        atras.addEventListener("click", atras);
    }
    function mostrar() {
        let regex = /(\s?[a-zA-Záéíóúñ]+\s?) (\s?[a-zA-Záéíóúñ]+\s?)+,(\s?[a-zA-Záéíóúñ]+\s?)$/g;
        let valor = regex.exec(dato.value);
        try {
            regex.exec(dato.value);
            if (regex.test(dato.value)) {
                dato.value = "";
                mensaje.innerHTML = "";
                [, apellido1, apellido2, nombreV] = valor;
                nombre.innerHTML = "Nombre:" + nombreV;
                apellidos.innerHTML = "Apellido: " + apellido1 + "  " + apellido2;
                //comprobar(nombreV, apellido1, apellido2);
            } else {
                throw "Error. Formato correcto: Cuadrado Perfecto, Anacleto";
            }
        } catch (e) {
            mensaje.innerHTML = e;
        }
    }
    function atras() {
        history.back();
    }
    function comprobar(nombre, apellido1, apellido2) {
        if (set.has(nombre.trim()) && set.has(apellido1.trim()) && set.has(apellido2.trim())) {
            mensaje.innerHTML = "REPETIDO";
        } else {
            set.add(nombreV.trim());
            set.add(apellido1.trim());
            set.add(apellido2.trim());
        }
    }
    window.addEventListener("load", init);
}