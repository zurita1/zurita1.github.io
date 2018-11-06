{
    function init() {
        info=document.getElementById("info");
        comprobar();        
    }
    function comprobar() {
        let fechaNacimiento =new Date("1998/12/04");
        try {
            info.innerHTML=calcularEdad(fechaNacimiento);
        } catch (e) {
            info.innerHTML = e;
        }
    }
    function calcularEdad(fecha) {
        let hoy = new Date();
        let fechaNacimiento = new Date(Date.parse(fecha));
        if (isNaN(fechaNacimiento))
            throw "La fecha de nacimiento es incorrecta";
        else if (fechaNacimiento > hoy)
            throw "La fecha de nacimiento no puede ser posterior al día de hoy";
        let dia = hoy.getDate() - fechaNacimiento.getDate();
        let mes = hoy.getMonth() - fechaNacimiento.getMonth();
        let annios = hoy.getFullYear() - fechaNacimiento.getFullYear();

        if (mes < 0 || (mes == 0 && dia < 0))
            annios--;
        return annios;
    }
window.addEventListener("load", init);
}