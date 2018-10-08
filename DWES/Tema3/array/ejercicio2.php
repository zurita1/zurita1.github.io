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
    <title>Tablero de barcos</title>
    <meta name="keywords" content="HTML,CSS,XML,JavaScript">
    <script src="codigo.js" type ="text/javascript"></script>
    </head>
<body>
    <h1>Tablero de barcos</h1>

    <?php
    $letra = array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L" ,"M", "N");

    echo "<table style='border: 5px solid; '>";


    echo "<td></td>";

    //Muestra la fila de números del 1 al 10.
    for ($i = 0; $i <= 14; $i++) {
        echo "<td style='border: 1px solid;'>" . $i . "</td>";
    }


    for ($i = 0; $i < count($letra); $i++) {
        echo "<tr>";
        echo "<td style='border: 1px solid; '>" . $letra[$i] . "</td>";
        for ($j = 0; $j <= 14; $j++) {
            echo "<td>" . $letra[$i] . $j . "</td>";
        }
        echo "</tr>";
    }

    echo "</table>"
    ?>

</body>
</html>