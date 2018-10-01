document.getElementById("mensaje").innerHTML=palindromo("La ruta nos aporto otro paso natural");
document.getElementById("mensaje1").innerHTML=palindromo("Esta frase no se parece a ningun palindromo");

            function palindromo(cadena) {            
                var cadenaMiniscula = cadena.toLowerCase();                
                var CadenaEspacios = cadenaMiniscula.split("");                
                var cadenaSinEspacios = "";
                for(i in CadenaEspacios) {
                    if(CadenaEspacios[i] != " ") {
                    cadenaSinEspacios += CadenaEspacios[i];
                    }
                }            
                var frase = cadenaSinEspacios.split("");
                var fraseReves = cadenaSinEspacios.split("").reverse();            
                var iguales = true;
                for(i in frase) {
                    if(frase[i] == fraseReves[i]) {
                    }
                    else {
                        iguales = false;
                    }
                }                
                if(iguales) {
                return "La cadena : " +cadena+ ", es un palíndromo";
                }
                else {
                    return "La cadena : " +cadena+ ", no es un palíndromo";
                }
            }            