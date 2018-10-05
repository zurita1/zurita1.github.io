<?php

/**
* Carga en variables mes y año e indica el número de días del mes.
* @author Rafa García Zurita
* @version 1.0
*/

    $mes = 9;
    $año = 2017;
    $dia = 1;

    if($mes == 2){
        if($año %4 == 0 && $año % 100 !=0 || año % 400 == 0){
            $dia= 29;
        }else{
            $dia = 28;
        }
    } else{
        if($mes == 1 || $mes == 3 || $mes == 5 || $mes == 7|| $mes == 8 || $mes == 10 || $mes ==12){
            $dia= 31;
        } else{
            $dia= 30;
        }
    }
    echo "El mes tiene " . $dia . " días";
   
?>