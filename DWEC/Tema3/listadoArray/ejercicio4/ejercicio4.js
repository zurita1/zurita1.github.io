{
    function init(){
        array(7);
    }
    let array = function (dimen) {
        let p = document.getElementById("cont");
        let array = [];
        for (let i = 0; i < dimen; i++) {
            array[i] = i;
        }
        p.innerHTML = "Array:  [" + array + "]";
    }    
        window.addEventListener("load", init);
}