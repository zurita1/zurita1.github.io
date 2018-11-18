{
    let cont
    function init(){  
        cont = document.getElementById("cont");
        contador(); 
        document.getElementById("resetear").addEventListener("click",resetear);
        document.getElementById("atras").addEventListener("click",function(){
            history.back();
        })
    }
    
    function contador(){
        crear();
        sumar();
        mostrar();
    }

    function crear(){
        if(localStorage.getItem("contador") == null){
            localStorage.setItem("contador",0);
        }
    }

    function sumar(){
        let valor = localStorage.getItem("contador");
        valor++;
        localStorage.setItem("contador",valor);
    }

    function resetear(){
            localStorage.setItem("contador",0);
            cont.innerHTML = "RESETEADO";
    }

    function mostrar(){
        let contador = localStorage.getItem("contador");
        if(contador ==1){
            cont.innerHTML = "Bienvenido a mi humilde morada. Esta es la primera vez que entras. Espero que vuelvas";
        }
        else if(contador ==2){
            cont.innerHTML = "Hola de nuevo. Ya estás aquí por segunda vez. ¿Volveremos a vernos?";
        }
        else if(contador >=3){
            cont.innerHTML = "Ya empiezas a ser pesado. Esta es la vez número "+contador+" que entras. Sigue con tus cosas";
        }
    }
    window.addEventListener("load",init);
}