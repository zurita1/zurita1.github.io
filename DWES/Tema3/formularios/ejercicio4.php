<html lang="es">
   <head>
       <title>+++</title>
       <meta charset="UTF-8" />
       <style>.error{color:red;} body{background-color: ;}
         h1{text-align: center;}
       </style>
   </head>
   <body>

<?php
/**
* Script para sumar una serie de números. El número de números a sumar será introducido en un
* formulario.
* @author Rafael García Zurita
* @version 1.0
*/


 if(isset($_POST['code'])){ // Si se pulsa el botón ver código, lo muestra.
   showCode(__FILE__);
 }

 $num= '';
 /**
 * Dibuja el número de cuadros de texto introducidos por parámetro.
 * @param int (cant)
 */
 
 
 function drawInputs($cant){
         echo '<form method="post">
            <h3>Sumandos</h3>';
            for ($i=1; $i <= $cant; $i++) {
              echo '<input type="text" name="'.$i.'"><br>';
            }

  /* Guardo la cantidad de números en un input oculto porque la variable se
  * pierde al enviar para luego poder usarla.
  */
        echo '
            <input type= "hidden" name="cantInput" value='.$cant.'/>
            <input type= "submit" name="sumar" value="Sumar">
          </form>';
 }



 echo '<form method="post">
          <h3>+ + +</h3>
          <label>Cantidad de números a sumar:</label>
          <select name="cantidad">';
          for ($i=1; $i < 10; $i++) {
            echo '<option value='.$i.'>'.$i.'</option>';
            $num= $i;
          }

    echo '</select>
          <br>
          <input type="submit" name="submit" value="Enviar">
        </form>';



  if(isset($_POST['submit'])){

    drawInputs($_POST['cantidad']);

  }
    $suma=0;
  if(!isset($_POST['submit']) && isset($_POST['sumar'])){
    for ($i=1; $i <= $_POST["cantInput"]; $i++) { //Uso la variable que guardé
      $suma= $suma+$_POST[$i];                     // en el input oculto.
    }
    echo '<h4>RESULTADO: '.$suma.'</h4><br>';
  }
  else{
    
  }



?>
   </body>
</html>