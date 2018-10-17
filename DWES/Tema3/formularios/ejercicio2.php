<?php    
    $nombre="";
    $errorNombre ="";
    $totalError=false;
    $lponerFormulario = true;

    if (isset( $_POST['submit'])) {
        $lponerFormulario = false;    
        $nombre=$_POST['name'];
         
       if(empty($_POST["name"])){
          $errorNombre="El nombre no puede estar vacio";
          $totalError =  true;
          $lponerFormulario = true;  
       }
    } else {
        $lponerFormulario =true

    }        
?>

<!DOCTYPE html>
 <html lang="es">
    <head>
        <title>Currículum Vitae</title>
        <meta charset="UTF-8" />
        <style>.error{color:red;} body{background-color:#A9E2F3 ;}
       
          
        </style>
    </head>
    <body>
        
        <h1>Currículum Vitae</h1>
        <br>
        <br>
        <p><span class="error">Campos requeridos.*</span></p>
             <?php if ($lponerFormulario=true) { ?>
                <form method="post" >
                <h3>Datos personales</h3>
                <br>
                <label>Nombre:</label>
                <input type="text" name="name" value=""> <?php echo $errorNombre; ?>
                <span class="error">*</span>
                <br><br>
                <label>Apellido:</label>
                <input type="text" name="lastname" value="">
                <span class="error">*</span>
                <br><br>
                <label>E-mail:</label>
                <input type="text" name="email" value="">
                <span class="error">*</span>
                <br><br>
                <label>Género:</label>
                <br><br>
                    <input type="radio" name="gender" value="mujer" >Mujer
                    <input type="radio" name="gender" value="varon" >Varón
                    <span class="error">*</span>
                    <br>
                    <br>
                <h3>Datos académicos y laborales</h3>
                <br>
                <label>Formación académica:</label>
                <br>
                <textarea name="formacion" rows="10" cols="60">
                </textarea>
                <br><br>
                <label>Experiencia laboral:</label>
                <br>
                <textarea name="experiencia" rows="10" cols="60">
                </textarea>
                <br>
                <br>
                <h3>Otros datos de interés</h3><br>
                <label>¿Qué ves en la imagen?</label>
                <br>
                <input type="image" width= 250px heith=200px src="./images/psi.jpg">
                <br>
                <textarea name="testPsi" rows="5" cols="40">
                </textarea>
                <br><br>
                <label>Idiomas:</label>
                <br><br>
                <input type="checkbox" name="idioma1" value="Inglés"/>Inglés
                <br><br>
                <label>nivel:</label>
                <select name="levelEng">
                    <option value="b1">b1</option>
                    <option value="b2">b2</option>
                    <option value="c1">c1</option>
                    <option value="c2">c2</option>
                    <option value="nativo">Nativo</option>
                </select><br><br><br>
                <input type="checkbox" name="idioma2" value="Francés"/>Francés
                <br><br><label>nivel:</label>
                <select name="levelFr">
                    <option value="b1">b1</option>
                    <option value="b2">b2</option>
                    <option value="c1">c1</option>
                    <option value="c2">c2</option>
                    <option value="nativo">Nativo</option>
                </select>
                <br><br><br>
                <input type="checkbox" name="idioma3" value="Italiano"/>Italiano
                <br><br><label>nivel:</label>
                <select name="levelIt">
                    <option value="b1">b1</option>
                    <option value="b2">b2</option>
                    <option value="c1">c1</option>
                    <option value="c2">c2</option>
                    <option value="nativo">Nativo</option>
                </select>
                <br>
                <br>
                <br>
                <input type="submit" name="submit" value="Enviar">
                <input type="reset" value="Limpiar">
            <?php
            }
            else{  // 1MOSTYRAFOR
                echo " <h4> Nombre : </h4> ".$nombre;
            }
            ?>
           
          </form>    
        </body>
</html>
