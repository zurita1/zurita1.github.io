{   
    function iniciar() {
        document.getElementById("bajarL").addEventListener("click",bajaL);
        document.getElementById("subirL").addEventListener("click",subeL);
        document.getElementById("bajarP").addEventListener("click",bajaP);
        document.getElementById("subirP").addEventListener("click",subeP);
        document.getElementById("final").addEventListener("click",f);
        document.getElementById("principio").addEventListener("click",p);
    }
    function bajaL(){
        scroll(scrollX,scrollY+5);
    }
    function subeL(){
        scroll(scrollX,scrollY-5);
    }
    function bajaP(){
        scroll(scrollX,scrollY+innerHeight);
    }
    function subeP(){
        scroll(scrollX,scrollY-innerHeight);
    }
    function f(){
        scroll(scrollX,scrollY+document.body.scrollHeight);
    }
    function p(){
        scroll(scrollX,scrollY-document.body.scrollHeight);
    }
    window.addEventListener("load", iniciar);
}