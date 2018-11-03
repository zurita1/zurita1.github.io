{
    function init(){
        argumentos();
    }
    let argumentos = function() {
        let numeros = [1,2,3,4,5];
        numeros.forEach((element, index, array) => {
            console.log(element, index, array);           
        });
    }
    window.addEventListener("load", init);
}