
<?php 
/**
* 
* @author Rafael García Zurita
* @version 1.0
*/        
        $role = 'Alumno';
        $link ='';

        switch ($role){

            case 'Profesor':
            $link1 = '<a href="#">Editar notas</a>';
            $link2 = '<a href="#">Corregir tareas</a>';
            $link3 = '<a href="#">Añadir recurso</a>';
            break;

            case 'Alumno':
            $link1 = '<a href="#">Ver notas</a>';
            $link2 = '<a href="#">Ver horario</a>';
            $link3 = '<a href="#">Recursos</a>';
            break;

            case 'Padre'|| 'Madre' || 'Tutor':
            $link1 = '<a href="#">Ver notas</a>';
            $link2 = '<a href="#">Comunicaciones</a>';
            $link3 = '<a href="#">Recomendaciones</a>';
            break;
        }

        echo 'Bienvenid@, ¿qué desea? <br>';
        echo '<ul><li>'.$link1.'</li><li>'.$link2.'</li><li>'.$link3.'</li></ul>';
?>
</body>
</html>
