{  
    function init(){
        document.getElementById("adopta").addEventListener("click",abrirGato);
    }
    function abrirGato(){
        window.open("lindoGatito.html","_SELF")
    }
    window.addEventListener('load',init);
}