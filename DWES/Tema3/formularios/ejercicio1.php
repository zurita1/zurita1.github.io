<?php

/**
 * Dado un mes y un año, mostrar el calendario del mes. Marcar el día actual en verde y los festivos en rojo.
 * @license http://opensource.org/licenses/gpl-license.php  GNU Public License
 * @author Rafael García Zurita
 */
$arrayMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
    <form method="post" >
    <input name="anno" type="number" required/>
    <select name="mes">
        <?php
        foreach ($arrayMeses as $numeroMes => $mes) {
            echo "<option value=" . ($numeroMes + 1) . ">" . $mes . "</option>";
        }
        ?>
    </select>
    <input type="submit" name="enviar" value="Enviar"/>

    </form>
    <?php 
    if (!isset($_POST['enviar']) || !isset($_POST['anno']) || !isset($_POST['mes'])) return;
    $anno = $_POST['anno'];
    $numeroMes = $_POST['mes'];
    $mes = $arrayMeses[$numeroMes - 1];
    $diasMes = cal_days_in_month(CAL_GREGORIAN, $numeroMes, $anno);
    $primerDiaMes = strtotime($anno . "-" . $numeroMes . "-01");
    $dia = date('N', $primerDiaMes);
    echo $mes;
    echo "<table border=2px;><tr>";
    echo "<td>Lunes</td>";
    echo "<td>Martes</td>";
    echo "<td>Miércoles</td>";
    echo "<td>Jueves</td>";
    echo "<td>Viernes</td>";
    echo "<td>Sábado</td>";
    echo "<td>Domingo</td></tr>";
    echo "<tr>";
    $columnas = 0;
    for ($j = 1; $j < $dia; $j++) {
        echo "<td style=background-color:grey;></td>";
        $columnas++;
    }
    for ($i = 1; $i < 35; $i++) {
        $columnas++;
        if ($columnas % 7 == 0)
            echo "<td style=background-color:red;>$i</td>";
        else
            echo "<td>$i</td>";
        if ($columnas % 7 == 0)
            echo "</tr>";
        if ($i >= $diasMes)
            break;

    }

    echo "</tr>";
    echo "</table>";

    ?>
</body>
</html>

