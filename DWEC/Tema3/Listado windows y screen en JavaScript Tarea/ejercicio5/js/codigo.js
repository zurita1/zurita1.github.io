{
    function iniciar() {
        let reloj = document.getElementById("reloj");
        setInterval(mostrar,1000);
    }
    function mostrar(){
        let date = new Date();
        let h = new String(date.getHours());
        let min = new String(date.getMinutes());
        let seg = new String(date.getSeconds());
        
        if (seg.length == 1) 
        seg = "0" + seg;
                
        if (min.length == 1) 
            min = "0" + min;

        if (h.length == 1) 
            h = "0" + h;
       
        reloj.innerHTML = h + ":" + min + ":" + seg;
    }
    window.addEventListener("load", iniciar);
}