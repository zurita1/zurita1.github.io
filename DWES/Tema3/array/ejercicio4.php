<?php
    /**
     *Rafael Garcia Zurita
     */  
?>

<!DOCTYPE html>
<html lang=es>
<head> 
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verbos irregulares</title>
    <meta name="keywords" content="HTML,CSS,XML,JavaScript">

    <script src="codigo.js" type ="text/javascript"></script>
    </head>
<body>
    <h1>Verbos irregulares</h1>

    <noscript><h1>Se requiere javascript</h1></noscript>

    <?php

    $verbo = array(
        //Castellano, inglés, pasado simple, participio
        array("ser/estar", " be", "was/were", "been"),
        array("ganarle (a alguien)", "beat ", "beat", "beaten"),
        array("empezar", "begin", "began", "begun"),
        array("doblar", "bend", "bent", "bent"),
        array("Morder", "bite", "bit", "bitten"),
        array("soplar", "blow", "blew", "blown"),
        array("romper", "break", "broke", "broken"),
        array("llevar/traer", "bring", "brought", "brought"),
        array("construir", "build", "built", "built"),
        array("comprar", "buy", "bought", "bought"),
        array("coger", "catch", "caught", "caught"),
        array("Elegir", "choose", "chose", "chosen"),
        array("venir", "come", "came", "come"),
        array("costar", "cost", "cost", "cost"),
        array("hacer", "do", "did", "done"),
        array("dibujar", "draw", "drew", "drawn"),
        array("soñar", "dream", "dreamed/dreamt", "dreamed/dreamt"),
        array("conducir", "drive", "drove", "driven"),
        array("beber", "drink", "drank", "drunk"),
        array("comer", "eat", "ate", "eaten"),
        array("caer", "fall", "fell", "fallen"),
        array("sentir", "feel", "felt", "felt"),
        array("luchar", "fight", "fought", "fought"),
        array("encontrar", "find", "found", "found"),
        array("volar", "fly", "flew", "flown"),
        array("olvidar", "forget", "forgot", "forgotten"),
        array("perdonar", "forgive", "forgave", "forgiven"),
        array("conseguir", "get", "got", "gotten"),
        array("golpear", "hit", "hit", "hit"),
        array("guardar", "keep", "kept", "kept"),
        array("perder", "lose", "lost", "lost"),
        array("pagar", "pay", "paid", "paid"),
        array("leer", "read", "read" ,"read"),
        array("levantar", "rise", "rose" ,"risen"),
        array("correr", "run", "ran" ,"run"),
        array("hablar", "speak", "spoke" ,"spoken"),
        array("escribir", "write", "wrote" ,"written"),   
    );

    //Muestro la fila de la tabla.

    echo " <table style='border: 1px solid;'>
        <tr> <td>Castellano</td> <td>Infinitivo</td> <td>Pasado Simple</td>  <td>Participio</td>
        </tr>";

    //bucle for para recorrer el array.
    for ($i=0; $i < count($verbo); $i++) { 
        echo "</tr>";
        for ($j=0; $j <=3 ; $j++) { 
            echo "<td>" . $verbo[$i][$j] . "</td>";
        }
    }
    echo"</table>";

    ?>
</body>
</html>