<?php
    /**
     * Rafael Garcia Zurita
     */
?>

<!DOCTYPE html>
<html lang=es>
<head> 
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meses del año con Array</title>
    <meta name="keywords" content="HTML,CSS,XML,JavaScript">
    <script src="codigo.js" type ="text/javascript"></script>
    </head>
<body>
    <h1>Meses del año con array</h1>
    <h2>Francisco Ramírez </h2>
    <noscript><h1>Se requiere javascript</h1></noscript>
    <?php

    $meses = array('enero','febrero','marzo','abril','mayo','junio','julio',
    'agosto','septiembre','octubre','noviembre','diciembre');

    for ($i = 0; $i < count($meses); $i++) {

        echo "<tr>"; 
        echo "<td style='border: 1px solid; '>" .  $meses[$i] . "</br></td>";

    }
    ?>

</body>
</html>