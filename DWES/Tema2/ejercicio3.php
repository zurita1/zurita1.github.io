<?php 
/**
* Carga la fecha de nacimiento en una variable y calcula la edad.
* @author Rafa García Zurita
* @version 1.0
*/
        
        $dia = date('j'); // Variable que recoge el día actual devuelto por el método.
        $mes = date('n'); // Variable que recoge el mes actual devuelto por el método.
        $año = date('Y'); // Variable que recoge el año actual devuelto por el método.

        $DiaCumple = 4;
        $MesCumple = 12;
        $AñoCumple= 1998;
        
        if(($MesCumple == $mes) && ($DiaCumple > $dia)){ // Si es el mismo mes, pero no ha                                                             //llegado el día restamos 1 año.
            $año= ($año-1);           
        }

        if($MesCumple > $mes){ // Si no ha llegado el mes, restamos 1 año.
             $año= ($año-1);
        }

        $edad = ($año - $AñoCumple);
        echo "Según tu cumpleaños, la edad es " . $edad . " años.";
    
?>