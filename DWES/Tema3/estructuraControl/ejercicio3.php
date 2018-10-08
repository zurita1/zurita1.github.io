<?php 
/**
*
* @package       Ejericicios Basicos
* @author        Rafa García Zurita
*/
for ($tabla=1; $tabla<=10 ; $tabla++) { 
    echo "<h2> Tabla del " . $tabla . "</h2>";

    for ($i=1; $i <= 10; $i++) { 
        echo $tabla . " x " . $i . " = " . ($tabla*$i) . "</br>";
    }
}
   
?>