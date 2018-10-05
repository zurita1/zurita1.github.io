<?php 
/**
*
* @package       Ejericicios Basicos
* @author        Rafa García Zurita
*/
  
   
?>
<!DOCTYPE html>
<html lang=es>
<head> 
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estación del Año</title>
    <meta name="keywords" content="HTML,CSS,XML,JavaScript">
    <script src="codigo.js" type ="text/javascript"></script>
    </head>
<body>

    <h1>Estación del año</h1>
    <?php
  
    $mes = date("n");
    $dia = date("j");

    switch ($mes){
        case 1:
        case 2:
            $estacion = "invierno";
            break;

        case 4:
        case 5:
            $estacion = "primavera";
            break;

        case 7:
        case 8:
            $estacion = "verano";
            break;

        case 10:
        case 11:
            $estacion = "otonio";
            break;

        case 3:
            if ($dia < 21)
                $estacion = "invierno";
            else
                $estacion = "primavera";
            break;

        case 6:
            if ($dia < 21)
                $estacion = "primavera";
            else
                $estacion = "verano";
            break;

        case 9:
            if ($dia < 23)
                $estacion = "verano";
            else
                $estacion = "otonio";
            break;

        case 12:
            if ($dia < 21)
                $estacion = "otonio";
            else
                $estacion = "invierno";
            break;
    }
 
    $img =  $estacion . ".jpg";

    echo "<img src=\"".$img."\" style='width: 1200px; height: 500px; margin: 10px auto; display: block'>";

    ?>
 
</body>
</html>