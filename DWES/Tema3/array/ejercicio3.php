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
    <title>Notas 2ºDAW</title>
    <meta name="keywords" content="HTML,CSS,XML,JavaScript">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="codigo.js" type ="text/javascript"></script>
    </head>
<body>
    <h1>Notas de los alumnos</h1>
    <?php
    $alumno = array("Jesús Mejias Leiva", "José María Romero Ruiz", "Marcos Gallardo Pérez", "Francisco Ramírez Ruiz", 
    "Mario Navarro Madrid", "Rafael García Zurita", "Guillermo Boquizo Sánchez", "José Manuel Bravo Martínez",
     "Angelo Barbara", "José Rafael Álvarez Espino", "Javier González Guzmán", 
     "Rafael Sojo");
   
    echo "<table style='border: 5px solid; '>";


    echo "<td></td>";

    //1ev 2ev y 3ev
    for ($i = 1; $i <= 3; $i++) {
        echo "<td style='border: 1px solid;'>" . $i . " Ev </td>";
        
    }
    echo "<td style='border: 1px solid;'> Nota final</td>";

    //genero las notas aleatoriamente de 1ev 2ev 3ev y de nota final
    for ($i = 0; $i < count($alumno); $i++) {

        echo "<tr>"; 
        echo "<td style='border: 1px solid; '>" .  $alumno[$i] . "</td>";
        for ($j = 0; $j <= 3; $j++) {
     
            echo "<td>" .  $random = rand(5,10) . "</td>";
           
        }
      
        echo "</tr>";
    }

    echo "</table>"
    ?>
</body>
</html>