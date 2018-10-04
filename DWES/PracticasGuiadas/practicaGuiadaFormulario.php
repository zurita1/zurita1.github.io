<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
    
<?php
$msgErrorNombre = "";
$msgErrorApellidos = "";
$lformValido=true;
if (isset($_POST['enviar'])) {
    $vNombre = $_POST['nombre'];
    $vApellidos = $_POST['apellidos'];
    if (empty($vNombre)) {
        $msgErrorNombre = "Nombre requerido";
        $lformValido = false;
    }
    if (empty($vApellidos)) {
        $msgErrorApellidos = "Apellidos requeridos";
        $lformValido = false;
    }
} else {
    $vNombre = '';
    $vApellidos = '';
}

if (!isset($_POST['enviar']) || !$lformValido) {
    ?>
    <form method="post" action="
    <?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
    <p>Nombre: <input type="text" name = "nombre" value="<?php echo $vNombre ?>" require="true"><?php echo $msgErrorNombre ?></p>
    <p>Apellidos: <input type="text" name = "apellidos" value="<?php echo $vApellidos ?>"><?php echo $msgErrorApellidos ?></p>
    <?php

} else {
    echo $_POST['nombre'];
    echo '<br/>';
    echo $_POST['apellidos'];
   // echo clearData($_POST['nombre']);
   // echo clearData($_POST['apellidos']);
}
?>
    <input type="submit" name="enviar" value="Enviar">

    </body>
</html>