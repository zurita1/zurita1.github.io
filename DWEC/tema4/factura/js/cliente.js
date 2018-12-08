let regexNIF = new RegExp("^([\\d]{8})[-\\s]*([A-Z(^IÑOU)])$");
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

function cliente(nombre, direccion, telefono, dni) {
    this.setNombre(nombre);
    this.setDireccion(direccion);
    this.setTelefono(telefono);
    this.setDNI(dni);
}
cliente.prototype.setNombre = function (nombre) {
    if (nombre == "")
        throw new Error("El nombre del cliente no puede estar vac\u00EDo");
    this.nombre = nombre;
}
cliente.prototype.setDireccion = function (direccion) {
    if (direccion == "")
        throw new Error("La direcci\u00F3n del cliente no puede estar vac\u00EDa");
    this.direccion = direccion;
}
cliente.prototype.setTelefono = function (telefono) {
    if (telefono == "")
        throw new Error("El tel\u00E9fono del cliente no puede estar vac\u00EDo");
    this.telefono = telefono;
}
cliente.prototype.setDNI = function(dni){
    this.dni = dni;
}
