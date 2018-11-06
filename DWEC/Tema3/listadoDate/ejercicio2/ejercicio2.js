{
    function init() {
        document.getElementById("hora").innerHTML = +Date.now();
    }
    window.addEventListener("load", init);
}