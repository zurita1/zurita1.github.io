function Reserva(nombre, email, fecha, hora, noches, personas,edad) {
    this.nombre = nombre;
    this.email = email;
    this.fecha = fecha;
    this.hora = hora;
    this.noches = noches;
    this.personas = personas;
    this.edad = edad;
    this.id = this.uniqueID();
    //this.servicio = servicio;
    //this.edad = edad;
}
Reserva.prototype.uniqueID = (function () {
    let id = 1;
    return function () {
        return id++;
    };
})();
Reserva.prototype.getNombre= function(){
    return this.nombre;
}
Reserva.prototype.getEmail= function(){
    return this.email;
}
Reserva.prototype.getFecha= function(){
    return this.fecha;
}
Reserva.prototype.getNoches= function(){
    return this.noches;
}
Reserva.prototype.getHora= function(){
    return this.hora;
}
Reserva.prototype.getPersonas= function(){
    
    return this.personas;
}

Reserva.prototype.getDiferencia= function(fecha1, fecha2){
    console.log(fecha1)
    console.log(fecha2)
    dia1=fecha1.getTime();
    dia2=fecha2.getTime();
    dife=(dia1-dia2)/(24*60*60*1000);
    if (dife < 0) {
        throw new Error("La fecha no se puede calcular");
    }
    console.log(Math.round(12.8));
    return Math.round(dife);
    
}
Reserva.prototype.mostrar = function () {
    fechaActual= new Date();
    fecha=new Date(this.fecha);
    console.log(fechaActual);
    console.log(fecha);
   let diferencia=this.getDiferencia(fecha,fechaActual);
    contenido="La reserva tiene las siguientes caracteristicas <br> Nombre: "+this.getNombre()
    +"<br> Correo electronico: "+this.getEmail()
    +"<br> Fecha de llegada: "+this.getFecha()
    +"<br> Hora de llegada: "+this.getHora()
    +"<br> Numero de noches: "+this.getNoches()
    +"<br> Numero de personas: "+this.getPersonas()
    +"<br> Edad: "+this.edad
    +"<br> Quedan: "+diferencia;
    let mostrar = window.open('', '', 'witdh=200px; height=300px');
    mostrar.document.open();
    mostrar.document.write(contenido);
    mostrar.document.close();
}