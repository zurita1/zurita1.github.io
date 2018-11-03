{
    function init(){
        let a = ["primero", "segundo","tercero"];
        mostrar();
    }
    function mostrar() {
        console.log(0 in a);
        console.log("segundo" in a);
        console.log("length" in a);
    }
    window.addEventListener("load", init);
}