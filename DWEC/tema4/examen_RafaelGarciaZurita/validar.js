{
    let matI;
    let mat;
    let mensaje;
    const regex = /(\d{4})\s(([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]){3})$/gi;
    
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
       
        let valor = regex.exec(matI.value);
        try {
            regex.exec(matI.value);
            if (regex.test(matI.value)) {
                matI.value = "";
                mensaje.innerHTML = "";
                [matricula, numeros, letras, ] = valor;
                mat.innerHTML = "Numeros: "+numeros+"<br> Letras: "+letras.trim().toUpperCase()+" <br> Matricula:" +matricula.trim().toUpperCase(); 
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