{
    function init() {
        let array = [1, 2, 3, 4, 5];
        let prueba = {
             texto: "prueba"
        };
        comprobar();
    }

    function comprobar() {
        console.log(Array.isArray(prueba));
        console.log(Array.isArray(array));
    }
    window.addEventListener("load", init);
}