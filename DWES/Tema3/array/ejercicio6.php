<?php
    /**
     * Rafael García Zurita
     * Description: Un restaurante dispone de una carta de 3 primero, 5 segundos y 3 postres. Almacenar
     * información incluyendo img y mostrar los menús disponibles. Mostrar el precio del menú
     * suponiendo que éste se calcula sumando el precio de cada uno de los platos incluidos y con un
     * descuento del 20 %.
     */

?>

<!DOCTYPE html>
<html lang=es>
<head> 
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restaurante</title>
    <meta name="keywords" content="HTML,CSS,XML,JavaScript">

    <script src="codigo.js" type ="text/javascript"></script>
    </head>
<body>

    <h1>Restaurante: 3 primero, 5 segundos y 3 postres.</h1>
    <h2>Francisco Ramírez </h2>

    <noscript><h1>Se requiere javascript</h1></noscript>

    <a href="../../servidor/Tema-3/restaurante.php?codigo" target ="_blank">Ver código</a>

    <?php

    $menu = array(
        "primero" => array(
            array("nombre" => "Crema de champiñones y pollo al romero", "img" => "img/plato1.jpg", "precio" => 15),
            array("nombre" => "Tortilla de la huerta", "img" => "img/plato2.jpg", "precio" => 16),
            array("nombre" => "Pasta fresca carbonara", "img" => "img/plato3.jpg", "precio" => 15.5),
        ),

        "segundo" => array(
            array("nombre" => "Pollo con setas y ajos frescos", "img" => "img/segundo1.jpg", "precio" => 13.5),
            array("nombre" => "Bacalao al pil-pil con puerro crujiente", "img" => "img/segundo2.jpg", "precio" => 15.5),
            array("nombre" => "Empanadillas de pollos", "img" => "img/segundo3.jpg", "precio" => 14),
            array("nombre" => "Merluza con alioli de azafrán", "img" => "img/segundo4.jpg", "precio" => 13),
            array("nombre" => "Crepes con gambas y pollo", "img" => "img/segundo5.jpg", "precio" => 18),
        ),

        "postre" => array(
            array("nombre" => "Mousse de chocolate y nata", "img" => "img/postre1.jpg", "precio" => 7),
            array("nombre" => "Pastelitos de mora", "img" => "img/postre2.jpg", "precio" => 6),
            array("nombre" => "Flan de huevo", "img" => "img/postre3.jpg", "precio" => 6.5),
        )
    );

    $contador = 0;

    echo "<table> 
    <tr>
    <td >Menu numero</td> 
    <td >Primer plato</td>
    <td >foto</td>
    <td >Precio</td>
    <td >Segundo plato</td>
    <td >foto</td>
    <td>Precio</td>
    <td>Postre</td>
    <td>foto</td>
    <td>Precio</td>
    <td>Total (20% desc.)</td>
    </tr>";

    $contadorMenu = 1;
    //3 bucles anidados para crear los menus con cada producto.
    for ($i = 0; $i < count($menu["primero"]); $i++) {
 
        for ($j = 0; $j < count($menu["segundo"]); $j++) {
            for ($k = 0; $k < count($menu["postre"]); $k++) {

                $precioP = $menu["primero"][$i]["precio"];
                $precioS = $menu["segundo"][$j]["precio"];
                $precioL = $menu["postre"][$k]["precio"];

                $rutaP = $menu["primero"][$i]["img"];
                $rutaS = $menu["segundo"][$j]["img"];
                $rutaL = $menu["primero"][$k]["img"];

                $total = ($precioP + $precioS + $precioL) - ((($precioP + $precioS + $precioL) * 20) / 100);

                //Cada pasada es una fila.
                echo "<td>" . $contadorMenu . "</td>";
                echo "<td>" . $menu["primero"][$i]["nombre"] . "</td>";
                echo "<td> <img src='$rutaP'></td>";
                echo "<td>" . $precioP . "€</td>";

                echo "<td >" . $menu["segundo"][$j]["nombre"] . "</td>";
                echo "<td><img src='$rutaS'></td>";
                echo "<td>" . $precioS . "€</td>";

                echo "<td>" . $menu["postre"][$k]["nombre"] . "</td>";
                echo "<td><img src='$rutaL'></td>";
                echo "<td>" . $precioL . "€</td>";

                echo "<td>$total" . "€</td>";
                echo "</tr>";

                $contadorMenu++;
            }
        }
        echo "</tr>";
    }

    echo "</table>";
    ?>
    

</body>
</html>