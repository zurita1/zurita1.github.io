{
    let nombre;
    let email;
    let fecha;
    let hora;
    let noches;
    let personas;
    let enombre;
    let eemail;
    let efecha;
    let ehora;
    let enoches;
    let epersonas;
    let error;
    let edad1;
    let edad2;
    let edad3;
    let desayuno;
    let almuerzo;
    let cena;
    
    function init() {
        nombre = document.getElementById("nombre");
        email = document.getElementById("email");
        fecha = document.getElementById("fecha");
        hora = document.getElementById("hora");
        noches = document.getElementById("noches");
        personas = document.getElementById("personas");
        
     
      edad1 = document.getElementById('edad1');
      edad2 = document.getElementById('edad2');
      edad3 = document.getElementById('edad3');
      desayuno = document.getElementById('desayuno');
      almuerzo = document.getElementById('almuerzo');
      cena = document.getElementById('cena');

     

        enombre = document.getElementById("enombre");
        eemail = document.getElementById("eemail");
        efecha = document.getElementById("efecha");
        ehora = document.getElementById("ehora");
        enoches = document.getElementById("enoches");
        epersonas = document.getElementById("epersonas");

        document.getElementById("enviar").addEventListener("click", mostrar);

        nombre.addEventListener("blur", validarTodos.bind(null, nombre, enombre));
        email.addEventListener("blur", validarTodos.bind(null, email, eemail));
        fecha.addEventListener("blur", validarTodos.bind(null, fecha, efecha));
        hora.addEventListener("blur", validarTodos.bind(null, hora, ehora));
        noches.addEventListener("blur", validarTodos.bind(null, noches, enoches));
        personas.addEventListener("blur", validarTodos.bind(null, personas, epersonas));

    }
    patrones = {
        nombre: [/^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/,
            "El nombre debe tener al menos tres carácteres y un apellido."],
        email: [/^[^áéíóúÁÉÍÓÚ ()<>@,;:"\[\]\.ç%&]+@[^áéíóúÁÉÍÓÚ ()<>@,;:"\[\]\.ç%&]+.[^áéíóúÁÉÍÓÚ ()<>@,;:"\[\]\.ç%&]{2,4}$/,
            "Introduce un email con formato válido: xxx@xxx.xxx"],
        fecha: [/^(\d{2}[\/ -]){2}\d{4}$/,
            "Debes introducir una fecha con formato válido: 12-22-2015"],
        hora: [/\d\d[:]\d\d$/,
            "La hora es errónea. Ejemplo: 11:40"]
    };
    function validarEdad() {
        if (edad1.checked)
            return edad1.value;
        else if (edad2.checked)
            return edad2.value;
        else
            return edad3.value;
    }

    function validarComida() {
        if (desayuno.checked)
            return desayuno.value;
        else if (almuerzo.checked)
            return almuerzo.value;
        else if (cena.checked)
            return cena.value;
        return "No hay comidas";
    }

    function validarTodos(input, error) {
        console.log(input)
        if (input.value == "") {
            error.innerHTML = "El campo no puede estar vacio";
        } else
            error.innerHTML = "";
    }
    function mostrar() {
        try{
        chekeaNombre();
        chekeaEmail();
        chekeaFecha();
        chekeaHora();
        if (eemail.innerHTML=="" && efecha.innerHTML=="" && enombre.innerHTML=="" && nombre.value!="" && email.value!="" && fecha.value!="" && hora.value!="" && noches.value!="" && personas.value!="") {
            let reserva = new Reserva(nombre.value, email.value, fecha.value, hora.value, noches.value,validarComida(),validarEdad());
            reserva.mostrar();
        }
        } catch (e) {
           efecha.textContent = e.message;
        }

    }
    function chekeaHora(){
        if (!patrones.hora[0].test(hora.value)) {
            ehora.innerHTML = patrones.hora[1];
            return error;
        }
        enombre.innerHTML = "";
    }
    function chekeaNombre() {
        if (!patrones.nombre[0].test(nombre.value)) {
            enombre.innerHTML = patrones.nombre[1];
            return error;
        }
        enombre.innerHTML = "";
    }
    function chekeaEmail() {
        if (!patrones.email[0].test(email.value)) {
            eemail.innerHTML = patrones.email[1];
            return error;
        }
        eemail.innerHTML = "";
    }
    function chekeaFecha() {
        if (!patrones.fecha[0].test(fecha.value)) {
            efecha.innerHTML = patrones.fecha[1];
            return error;
        }
        efecha.innerHTML = "";
    }
    window.addEventListener("load", init);
}