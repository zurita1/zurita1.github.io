window.addEventListener("load",init);

function añade() {
    var elemento = document.createElement("li");
    var texto = document.createTextNode("Texto para introducir en lista");
    elemento.appendChild(texto);
                
    var lista = document.getElementById("lista");
    lista.appendChild(elemento);
                
}

function init(){
    document.getElementById("button").addEventListener("click",añade);
}