{
    
    function iniciar() {
        document.addEventListener("scroll",contenido);
        
    }
    function contenido(){
        let informacion = document.getElementById("informacion");
        informacion.innerHTML = "window.scrollX= " + window.scrollX + "<br>";
        informacion.innerHTML += "window.scrollY= " + window.scrollY + "<br>";
        informacion.innerHTML += "window.scrollbars= " + window.scrollbars.visible;
    }
    window.addEventListener("load", iniciar);
}
