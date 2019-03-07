<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: text/html; charset=utf-8');
$arrayAlumnos = array(
    'José Manuel Bravo',
    'Guillermo Boquizo',
    'Rafa Garcia Zurita',
    'Francisco Ramírez',
    'José María Romero',
    'Jesús Mejías',
    'Rafael Sojo',
    'Javier González',
    'Marcos Gallardo',
    'Mario Navarro',
    'José Rafael Álvarez',
    'Angelo Barbara',
);

function getNombres($arrayAlumnos, $consulta){

    $arrayAlumnosResultado = array();
    foreach ($arrayAlumnos as $key => $alumno) {
        if (preg_match('/^' . $consulta . '/i', $alumno)) {
            $arrayAlumnosResultado[] = $alumno;
        }
    }

    if (sizeof($arrayAlumnosResultado) == 0) {
        $arrayAlumnosResultado[] = 'No hay coincidencias';
    }

  
    return $arrayAlumnosResultado;
}

echo implode("<br>",getNombres($arrayAlumnos, $_POST['texto']));
