{
    function iniciar() {
        document.getElementById("height").innerText = "Height: "+window.outerHeight;
        document.getElementById("width").innerText = "Width: "+window.outerWidth;
    }
    window.addEventListener("load", iniciar);
}