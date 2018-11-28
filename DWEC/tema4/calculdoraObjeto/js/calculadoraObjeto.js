{
    let inputText;

    function init() {
        calculadora.cbotones();
        inputText = document.getElementById("inputText");
        let botones = document.getElementsByTagName("input");
        for (let i = 0; i < botones.length; i++) {
            botones[i].addEventListener("click", calculadora.funcionalidad);
        }
    }

    let calculadora = {
        botones: ["CE", "DEL", "%", "+", "7", "8", "9", "-", "4", "5", "6", "x", "1", "2", "3", "/", "0", "+-", ",", "="],
        contador: 0,
        nuevo: true,
        numero: 0,
        numero2: 0,
        sumar: false,
        restar: false,
        multiplicar: false,
        dividir: false,

        cbotones: function () {
            let contenido = document.createElement("div");
            contenido.className = "calculadora";
            elemento = document.createElement("div");
            input = document.createElement("input");
            input.type = "text";
            input.id = "inputText";
            input.className = "texto";
            elemento.appendChild(input);
            contenido.appendChild(elemento);
            for (let i = 0; i < 5; i++) {
                elemento = document.createElement("div");
                for (let j = 0; j < 4; j++) {
                    input = document.createElement("input");
                    input.type = "button";
                    input.value = calculadora.botones[calculadora.contador++];
                    input.className = "button";
                    elemento.appendChild(input);
                }
                contenido.appendChild(elemento);
            }
            document.body.appendChild(contenido);
        },
        funcionalidad: function () {
            let valor = this.value;
            switch (valor) {
                case "0":
                    if (calculadora.nuevo) {
                        inputText.value = valor;
                        calculadora.nuevo = false;
                    } else if (inputText.value != 0 || inputText.value.length == 0 || inputText.value.includes("."))
                        inputText.value += valor;
                    break;
                case "1":
                    if (inputText.value == 0 && inputText.value.length <= 1 || calculadora.nuevo)
                        inputText.value = valor;
                    else
                        inputText.value += valor;
                    calculadora.nuevo = false;
                    break;
                case "2":
                    if (inputText.value == 0 && inputText.value.length <= 1 || calculadora.nuevo)
                        inputText.value = valor;
                    else
                        inputText.value += valor;
                    calculadora.nuevo = false;
                    break;
                case "3":
                    if (inputText.value == 0 && inputText.value.length <= 1 || calculadora.nuevo)
                        inputText.value = valor;
                    else
                        inputText.value += valor;
                    calculadora.nuevo = false;
                    break;
                case "4":
                    if (inputText.value == 0 && inputText.value.length <= 1 || calculadora.nuevo)
                        inputText.value = valor;
                    else
                        inputText.value += valor;
                    calculadora.nuevo = false;
                    break;
                case "5":
                    if (inputText.value == 0 && inputText.value.length <= 1 || calculadora.nuevo)
                        inputText.value = valor;
                    else
                        inputText.value += valor;
                    calculadora.nuevo = false;
                    break;
                case "6":
                    if (inputText.value == 0 && inputText.value.length <= 1 || calculadora.nuevo)
                        inputText.value = valor;
                    else
                        inputText.value += valor;
                    calculadora.nuevo = false;
                    break;
                case "7":
                    if (inputText.value == 0 && inputText.value.length <= 1 || calculadora.nuevo)
                        inputText.value = valor;
                    else
                        inputText.value += valor;
                    calculadora.nuevo = false;
                    break;
                case "8":
                    if (inputText.value == 0 && inputText.value.length <= 1 || calculadora.nuevo)
                        inputText.value = valor;
                    else
                        inputText.value += valor;
                    calculadora.nuevo = false;
                    break;
                case "9":
                    if (inputText.value == 0 && inputText.value.length <= 1 || calculadora.nuevo)
                        inputText.value = valor;
                    else
                        inputText.value += valor;
                    calculadora.nuevo = false;
                    break;
                case "+-":
                    if (inputText.value > 0)
                        inputText.value = -Math.abs(inputText.value);
                    else
                        inputText.value = Math.abs(inputText.value);
                    break;
                case "DEL":
                    inputText.value = inputText.value.substring(0, inputText.value.length - 1);
                    break;
                case ",":
                    if (!inputText.value.includes("."))
                        inputText.value += ".";
                    break;
                case "CE":
                    inputText.value = 0;
                case "+":
                    calculadora.numero = inputText.value;
                    calculadora.sumar = true;
                    calculadora.restar = false;
                    calculadora.multiplicar = false;
                    calculadora.dividir = false;
                    calculadora.nuevo = true;
                    break;
                case "-":
                    calculadora.numero = inputText.value;
                    calculadora.sumar = false;
                    calculadora.restar = true;
                    calculadora.multiplicar = false;
                    calculadora.dividir = false;
                    calculadora.nuevo = true;
                    break;
                case "x":
                    calculadora.numero = inputText.value;
                    calculadora.sumar = false;
                    calculadora.restar = false;
                    calculadora.multiplicar = true;
                    calculadora.dividir = false;
                    calculadora.nuevo = true;
                    break;
                case "/":
                    calculadora.numero = inputText.value;
                    calculadora.sumar = false;
                    calculadora.restar = false;
                    calculadora.multiplicar = false;
                    calculadora.dividir = true;
                    calculadora.nuevo = true;
                    break;
                case "=":
                    if ((calculadora.sumar || calculadora.restar || calculadora.multiplicar || calculadora.dividir) && !calculadora.nuevo) {
                        calculadora.numero2 = inputText.value;
                        calculadora.operacion();
                    }
            }
        },
        operacion: function () {
            if (calculadora.sumar) {
                inputText.value = parseFloat(calculadora.numero) + parseFloat(calculadora.numero2);
                calculadora.sumar = false;
            } else if (calculadora.restar) {
                inputText.value = calculadora.numero - calculadora.numero2;
                calculadora.restar = false;
            } else if (calculadora.multiplicar) {
                inputText.value = calculadora.numero * calculadora.numero2;
                calculadora.multiplicar = false;
            } else {
                inputText.value = calculadora.numero / calculadora.numero2;
                calculadora.dividir = false;
            }
            calculadora.numero = 0;
            calculadora.numero2 = 0;
        }
    }
    window.addEventListener("load", init);
}