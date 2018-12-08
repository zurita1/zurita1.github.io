{

    let nombre;
    let edad;
    let raza;
    let peso;
    let muerto;

    function Gato(nombre="Garfield",edad=1,raza="persa",peso=5){
        this.nombre=nombre;
        this.edad=edad;
        this.raza=raza;
        this.peso=peso;
        this.muerto=false;
    }

    Gato.prototype.jugar = function(){
        (this.peso>1)?this.peso--:this.muerto=true;
    }
    Gato.prototype.comer= function(){
        (this.peso<15)?this.peso++:this.muerto=true;
    }
    Gato.prototype.getNombre = function(){
        return this.nombre;
    }
    Gato.prototype.getRaza = function(){
        return this.raza;
    }
    Gato.prototype.getEdad = function(){
        return this.edad;
    }

    Gato.prototype.getPeso = function(){
        return this.peso;
    }
    Gato.prototype.getMuerto = function(){
        return this.muerto;
    }



}