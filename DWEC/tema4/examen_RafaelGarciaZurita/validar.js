{
    let matI;
    let mat;
    let mensaje;
    
    function init() {
        matI = document.getElementById("matI");
        mat = document.getElementById("mat");      
        document.getElementById("atras").addEventListener("click", atras);
        mensaje = document.getElementById("mensaje");
        boton = document.getElementById("comprobar");
        //boton.addEventListener("click",comprobar);
        matI.addEventListener("blur", comprobar);
    }
    function comprobar() {
        let regex = /(\d{4})\s(([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]){3})$/g;
        let valor = regex.exec(matI.value);
        console.log(valor);
        try {
            regex.exec(matI.value);
            if (regex.test(matI.value)) {
                matI.value = "";
                mensaje.innerHTML = "";
                [matricula, numeros, letras, ] = valor;
                mat.innerHTML = "Numeros: "+numeros+"<br> Letras: "+letras+" <br> Matricula:" +matricula; 
            } else {
                throw "Error. Formato correcto: 9373 CDB";
            }
        } catch (e) {
            mensaje.innerHTML = e;
        }
    }
    function atras(event) {
        event.preventDefault();
        history.back();
    }
    window.addEventListener("load", init);
}