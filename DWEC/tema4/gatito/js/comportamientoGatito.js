{
    let img;
    let nombre;
    let edad;
    let raza;
    let peso;
    let estado;
    let gato;

    function init() {
        img = document.getElementById("img");
        nombre = document.getElementById("nombre");
        edad = document.getElementById("edad");
        raza = document.getElementById("raza");
        peso = document.getElementById("peso");
        estado = document.getElementById("estado");

        introducirNombre = document.getElementById("introducirNombre");
        introducirNombre.addEventListener("blur", crearGato);
        introducirEdad = document.getElementById("introducirEdad");
        introducirEdad.addEventListener("blur", crearGato);
        introducirRaza = document.getElementById("introducirRaza");
        introducirRaza.addEventListener("blur", crearGato);
        introducirPeso = document.getElementById("introducirPeso");
        introducirPeso.addEventListener("blur", crearGato);

        document.getElementById("jugar").addEventListener('click', jugar);
        document.getElementById("comer").addEventListener('click', comer);
        document.getElementById("dormir").addEventListener('click', dormir);


    }

    function crearGato() {
        gato = new Gato(introducirNombre.value, introducirEdad.value, introducirRaza.value, introducirPeso.value);
        actualizar();
    };

    function actualizar() {
        if (introducirNombre.value != "" && introducirEdad.value != "" && introducirRaza.value != "" && introducirPeso.value != "") {
            introducirNombre.value = "";
            introducirEdad.value = "";
            introducirRaza.value = "";
            introducirPeso.value = "";
            introducirNombre.style.display = 'none';
            introducirEdad.style.display = 'none';
            introducirRaza.style.display = 'none';
            introducirPeso.style.display = 'none';
        }
        nombre.innerHTML = "<b>Nombre:</b>  " + gato.getNombre();
        raza.innerHTML = "<b>Raza:</b> " + gato.getRaza();
        peso.innerHTML = "<b>Peso:</b> " + gato.getPeso() + " kg";
        edad.innerHTML = "<b>Edad:</b> " + gato.getEdad() + " años";
    }

    function jugar() {
        gato.jugar();
        actualizar();
        img.src = "img/jugar.jpg";
        img.style.width = "400px";
        comprobarVida();
    }

    function comer() {
        gato.comer();
        actualizar();
        img.src = "img/comer.jpg";
        img.style.width = "400px";
        comprobarVida();
    }

    function dormir() {
        (gato.getMuerto()) ? "" : img.src = "img/dormir.jpg";
        img.style.width = "400px";
    }

    function comprobarVida() {
        if (gato.getMuerto()) {
            img.src = "img/muerto.jpg"
            nombre.innerHTML = "<b>Nombre:</b>  ???"
            edad.innerHTML = '<b>Fecha de Nacimiento:</b> ???'
            raza.innerHTML = '<b>Raza:</b> ???'
            peso.innerHTML = "<b>Peso:</b> ??? kg";
            estado.innerHTML = "<h3>" + gato.getNombre() + " ha muerto!!!! </h3>"
            inputNuevoGato = estado.appendChild(document.createElement('input'));
            inputNuevoGato.type = "button";
            inputNuevoGato.value = "Adopta otro gato";
            inputNuevoGato.style.fontSize = "30px";
            inputNuevoGato.addEventListener('click', () => (window.open("lindoGatito.html", "_SELF")));
        }
    }

    window.addEventListener('load', init)

}