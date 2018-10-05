<?php
    /**
     * User: Rafael García Zurita
     * Description: Paleta de colores
     */
?>
<!DOCTYPE html>
<html lang=es>
<head> 
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paleta de colores</title>
    <meta name="keywords" content="HTML,CSS,XML,JavaScript">
    <script src="codigo.js" type ="text/javascript"></script>
    </head>
<body>
    <noscript><h1>Se requiere javascript</h1></noscript>

    <h1>PaletaColores</h1>
    <?php

    //Creamos una tabla para almacenarlos
    //los colores tienen 3 combinaciones con RGB
    $color = "";
    echo "<table style='margin: 0 auto;  border-spacing: 4px'>";
    for ($i = 0; $i < 300; $i += 100) {
        for ($j = 0; $j < 300; $j += 100) {

            echo "<tr>";

            for ($k = 0; $k < 300; $k += 10) {
                $color = "rgb($i,$j,$k)";
                $hex = "#";
                $hex .= dechex($i);
                $hex .= dechex($j);
                $hex .= dechex($k);
                echo "<td style=\"background-color:$color\">$hex</td>";
               
            }
    echo "</tr>";
        }
    }

    echo "</table>";
    
    ?>
</body>
</html>