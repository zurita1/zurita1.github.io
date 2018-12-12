{

    let iNombre, eNombre, iDni, eDni, iEmail, eEmail, iFeNac, eFeNac, iTel, eTel, iCC, eCC, iWeb, eWeb, validar;
    let error = false;

    let letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    patrones = {
        nombre: [/^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/,
            "El nombre debe tener al menos tres carácteres y un apellido."],
        dni: [/^([\d]{8})[-\\ ]?([A-Z[^IÑOU])$/,
            "Introduce un dni con formato válido: 00000000X", "Letra incorrecta"],
        cc: [/[\d]{20}/,
            "La CC debe tener 20 dígitos"],
        email: [/^[^áéíóúÁÉÍÓÚ ()<>@,;:"\[\]\.ç%&]+@[^áéíóúÁÉÍÓÚ ()<>@,;:"\[\]\.ç%&]+.[^áéíóúÁÉÍÓÚ ()<>@,;:"\[\]\.ç%&]{2,4}$/,
            "Introduce un email con formato válido: xxx@xxx.xxx"],
        web: [/^((http|https)\:\/\/)?([a-z0-9]+\.)+[a-z]{2,4}$/,
            "Debes introducir una web con formato correcto: www.misitio.com - https://www.misitio.com - http://www.misitio.com - ftp://www.misitio.com"],
        tel: [/^(6|7|9)[/\d]{8}$/,
            "Debes introducir un número con formato correcto: 666666666 - 766666666 - 966666666"],
        FeNac: [/^(\d{2}[\/ -]){2}\d{4}$/,
            "Debes introducir una fecha con formato válido: 12/02/2015 - 12 02 2015 - 12-02-2015"]
    };

    function init() {
        iNombre = document.getElementById("iNombre");
        eNombre = document.getElementById("eNombre");
        iNombre.addEventListener("blur", validarNombre);

        iDni = document.getElementById("iDni");
        eDni = document.getElementById("eDni");
        iDni.addEventListener("blur", validarDni);

        iEmail = document.getElementById("iEmail");
        eEmail = document.getElementById("eEmail");
        iEmail.addEventListener("blur", validarEmail);

        iFeNac = document.getElementById("iFeNac");
        eFeNac = document.getElementById("eFeNac");
        iFeNac.addEventListener("blur", validarFechaNac);

        iTel = document.getElementById("iTel");
        eTel = document.getElementById("eTel");
        iTel.addEventListener("blur", validarTlf);

        iCC = document.getElementById("iCC");
        eCC = document.getElementById("eCC");
        iCC.addEventListener("blur", validarCc);

        iWeb = document.getElementById("iWeb");
        eWeb = document.getElementById("eWeb");
        iWeb.addEventListener("blur", validarWeb);

        info = document.getElementById("info");

        valido = document.getElementById("valido");
        validar = document.getElementById("validar");
        validar.addEventListener("click", validarTodo);
    }

    function validarDni() {
        if (!patrones.dni[0].test(iDni.value)) {
            error = true;
            eDni.innerHTML = patrones.dni[1];
        } else {
            let arrayDNI = patrones.dni[0].exec(iDni.value);
            let numDNI = arrayDNI[1];
            let letraDNI = arrayDNI[2];
            if (letrasDNI[numDNI % 23] != letraDNI) {
                eDni.innerHTML = patrones.dni[2];

            }
            else {
                error = false;
                eDni.innerHTML = "";
            }

        }
    }

    function validarNombre() {
        if (!patrones.nombre[0].test(iNombre.value)) {
            error = true;
            eNombre.innerHTML = patrones.nombre[1];
        } else {
            error = false;
            eNombre.innerHTML = "";
        }

    }

    function validarEmail() {
        if (!patrones.email[0].test(iEmail.value)) {
            error = true;
            eEmail.innerHTML = patrones.email[1];
        }
        else {
            error = false;
            eEmail.innerHTML = "";
        }

    }

    function validarFechaNac() {
        if (!patrones.FeNac[0].test(iFeNac.value)) {
            error = true;
            eFeNac.innerHTML = patrones.FeNac[1];
        }
        else {
            error = true;
            eFeNac.innerHTML = "";
        }

    }

    function validarTlf() {
        if (!patrones.tel[0].test(iTel.value)) {
            error = true;
            eTel.innerHTML = patrones.tel[1];
        }
        else {
            error = false;
            eTel.innerHTML = "";
        }

    }

    function validarCc() {
        if (!patrones.cc[0].test(iCC.value)) {
            error = true;
            eCC.innerHTML = patrones.cc[1];
        } else {
            error = false;
            eCC.innerHTML = "";
        }

    }

    function validarWeb() {
        if (!patrones.web[0].test(iWeb.value)) {
            error = true;
            eWeb.innerHTML = patrones.web[1];
        } else {
            error = false;
            eWeb.innerHTML = "";
        }

    }

    function validarTodo() {

        if (error == true || iNombre == iDni == iEmail == iFeNac == iTel == iCC == iWeb == '') {
            info.innerHTML = "Hay datos incorrectos, revisa el formulario";
            valido.innerHTML = "";
        
        } else if(error == false){
            info.innerHTML = "";
            valido.innerHTML = "Todos los datos son correctos.";
        }
    }
    window.addEventListener("load", init);
}