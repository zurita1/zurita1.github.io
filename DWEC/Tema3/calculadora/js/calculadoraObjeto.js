{
let calculadora = {
    botones: ["CE", "DEL", "%", "+", "7", "8", "9", "-", "4", "5", "6", "x", "1", "2", "3", "/", "0", "+-", ",", "="],
    elemento:0,
    input:0,
    contador: 0,
    nuevo: true,
    numero: 0,
    numero2: 0,
    sumar:false,
    restar:false,
    multiplicar:false,
    dividir:false,
    inputText:0
}

    function iniciar() {
        cbotones();
        calculadora.inputText = document.getElementById("inputText");
        let botones = document.getElementsByTagName("input");
        for (let i = 0; i < botones.length; i++) {
            botones[i].addEventListener("click", funcionalidad);
        }
    }

    function cbotones() {
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
                input.value = botones[contador++];
                input.className = "button";
                elemento.appendChild(input);
            }
            contenido.appendChild(elemento);
        }
        document.body.appendChild(contenido);
    }

    function funcionalidad() {
        let valor = this.value;
        switch (valor) {
            case "0":
                if (nuevo) {
                    inputText.value = valor;
                    nuevo = false;
                } else if (inputText.value != 0 || inputText.value.length == 0 || inputText.value.includes("."))
                    inputText.value += valor;
                break;
            case "1":
                if (inputText.value == 0 && inputText.value.length <= 1 || nuevo)
                    inputText.value = valor;
                else
                    inputText.value += valor;
                nuevo = false;
                break;
            case "2":
                if (inputText.value == 0 && inputText.value.length <= 1 || nuevo)
                    inputText.value = valor;
                else
                    inputText.value += valor;
                nuevo = false;
                break;
            case "3":
                if (inputText.value == 0 && inputText.value.length <= 1 || nuevo)
                    inputText.value = valor;
                else
                    inputText.value += valor;
                nuevo = false;
                break;
            case "4":
                if (inputText.value == 0 && inputText.value.length <= 1 || nuevo)
                    inputText.value = valor;
                else
                    inputText.value += valor;
                nuevo = false;
                break;
            case "5":
                if (inputText.value == 0 && inputText.value.length <= 1 || nuevo)
                    inputText.value = valor;
                else
                    inputText.value += valor;
                nuevo = false;
                break;
            case "6":
                if (inputText.value == 0 && inputText.value.length <= 1 || nuevo)
                    inputText.value = valor;
                else
                    inputText.value += valor;
                nuevo = false;
                break;
            case "7":
                if (inputText.value == 0 && inputText.value.length <= 1 || nuevo)
                    inputText.value = valor;
                else
                    inputText.value += valor;
                nuevo = false;
                break;
            case "8":
                if (inputText.value == 0 && inputText.value.length <= 1 || nuevo)
                    inputText.value = valor;
                else
                    inputText.value += valor;
                nuevo = false;
                break;
            case "9":
                if (inputText.value == 0 && inputText.value.length <= 1 || nuevo)
                    inputText.value = valor;
                else
                    inputText.value += valor;
                nuevo = false;
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
                numero = inputText.value;
                sumar = true;
                restar = false;
                multiplicar = false;
                dividir = false;
                nuevo = true;
                break;
            case "-":
                numero = inputText.value;
                sumar = false;
                restar = true;
                multiplicar = false;
                dividir = false;
                nuevo = true;
                break;
            case "x":
                numero = inputText.value;
                sumar = false;
                restar = false;
                multiplicar = true;
                dividir = false;
                nuevo = true;
                break;
            case "/":
                numero = inputText.value;
                sumar = false;
                restar = false;
                multiplicar = false;
                dividir = true;
                nuevo = true;
                break;
            case "=":
                if ((sumar || restar || multiplicar || dividir) && !nuevo) {
                    numero2 = inputText.value;
                    operacion();
                }
        }
    }

    function operacion() {
        if (sumar) {
            inputText.value = parseFloat(numero) + parseFloat(numero2);
            sumar = false;
        } else if (restar) {
            inputText.value = numero - numero2;
            restar = false;
        } else if (multiplicar) {
            inputText.value = numero * numero2;
            multiplicar = false;
        } else {
            inputText.value = numero / numero2;
            dividir = false;
        }
        numero = 0;
        numero2 = 0;
    }

    window.addEventListener("load", iniciar);

}