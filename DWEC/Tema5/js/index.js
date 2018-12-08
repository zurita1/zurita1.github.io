{
    let canvas;
    let arrayColores = [
        "#bbdefb", "#eeffff", "#8aacc8",
        "#90caf9", "#c3fdff", "#5d99c6",
        "#1565c0", "#1565c0", "#003c8f"
    ];

    let coloresAleatorios;
    function init() {
        canvas = Array.from(document.getElementsByTagName("canvas"));

        canvas.forEach(element => {
            element.addEventListener(element.getAttribute("id"), ev => {
                coloresAleatorios = Math.floor(Math.random() * arrayColores.length);
                dibujarCanvas(element, coloresAleatorios, ev.offsetX, ev.offsetY, ev.button, ev.buttons);
            });
            dibujarCanvas(element);
        });

    }
    function dibujarCanvas(canvas, coloresAleatorios, x, y, button, buttons) {

        if (canvas.getContext) {
            let contexto = canvas.getContext('2d');
            if (arguments.length === 1)
                contexto.fillStyle = "#5d99c6";
             else 
                contexto.fillStyle = arrayColores[coloresAleatorios];
            
            contexto.fillRect(0, 0, 300, 150);
            contexto.fillStyle = "black";
            contexto.fillText(canvas.getAttribute("id"), 10, 20);

            if (arguments.length > 1) {
                contexto.fillText("x --> " + x, 100, 40);
                contexto.fillText("y --> " + y, 100, 70);
                contexto.fillText("button --> " + button, 100, 100);
                contexto.fillText("buttons --> " + buttons, 100, 130);
            }
        }
    }
    window.addEventListener("load", init);
}