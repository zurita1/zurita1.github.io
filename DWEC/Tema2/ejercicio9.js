        document.getElementById("mensaje").innerHTML=mayusculasMinusculas("LA GATA TENIA DOS GATITOS");
           document.getElementById("mensaje1").innerHTML=mayusculasMinusculas("Me llamo rafa");

            function mayusculasMinusculas(cadena) {                
                // Comprobar mayúsculas y minúsculas
                if(cadena == cadena.toUpperCase()) {
                   return "La cadena: " +cadena+ " está formada sólo por mayúsculas";
                }
                else if(cadena == cadena.toLowerCase()) {
                    return "La cadena : " +cadena+ ", está formada sólo por minúsculas";
                }
                else {
                    return "La cadena : " +cadena+ ", está formada por mayúsculas y minúsculas";
                }
            }