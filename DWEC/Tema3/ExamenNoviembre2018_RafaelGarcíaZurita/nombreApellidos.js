{
    const regexNombre = new RegExp("");

    function init() {
        collectionNombres = new Set();
        datos = document.getElementById("introduce").addEventListener("focus", mostrar);       
        error = document.getElementById("Error");
        nombre = document.getElementById("nombre");
        apellidos = document.getElementById("apellidos");
        document.getElementById("atras").addEventListener("click",function(){
            history.back();
        })
    }
    window.addEventListener("load", init);
}