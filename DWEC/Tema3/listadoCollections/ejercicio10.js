{
    function init() {
        b = new WeakSet([{}, {}]);
        o = {}; 
        a = new WeakSet([o, o]);
        console.log(b);
        console.log(a);
        console.log("WeakSet (a) contiene dos objetos, distinta referencia en memoria");
        console.log("WeakSet (b) contiene solo un objeto, misma referencia en memoria")
    }
    window.addEventListener("load", init);
}