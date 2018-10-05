{
    window.addEventListener("load",init);

    function muestraOculta() {
        id=this.id.split('_')[1];

        var elemento = document.getElementById('contenidos_'+id);
        var enlace = document.getElementById('enlace_'+id);
        
        if(elemento.style.display == "" || elemento.style.display == "block") {
            elemento.style.display = "none";
            enlace.innerHTML = 'Mostrar contenidos';
        }
        else {
            elemento.style.display = "block";
            enlace.innerHTML = 'Ocultar contenidos';
        }
    }
    function init(){

        let enlaces= document.getElementsByTagName('a');

        for(i=0;i<enlaces.length;i++){
            enlaces[i].addEventListener("click",muestraOculta);
        }       
    }
}