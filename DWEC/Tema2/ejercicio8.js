            let numero = prompt("Introduce un número entero y te dire si es par o impar");                
            let resultado = parImpar(numero);
            
            document.getElementById('mensaje').innerHTML=" El número "+numero+" es "+resultado; 
            
            function parImpar(numero) {
                if(numero % 2 == 0) {
                    return "par";
                }
                else {
                    return "impar";
                }
            }