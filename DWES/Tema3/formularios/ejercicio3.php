<html lang="es">
   <head>
       <title>Mostrar países</title>
       <meta charset="UTF-8" />
       <style>.error{color:red;} body{background-color: ;}
         fieldset{background-color: white; width: 50%; margin: 0 auto; color: black;}
         h1{text-align: center;}
       </style>
   </head>
   <body>

<?php
/**
* Utilizando el array de continentes y países, crea un script que lea en un formulario un continente
* y nos muestre sus países con sus capitales y banderas.
* @author Rafael Garcia Zurita
* @version 1.0
*/

 


 if(isset($_POST['code'])){ // Si se pulsa el botón ver código, lo muestra.
   showCode(__FILE__);
 }

 $america = array(
   array(
     "pais"=> "Argentina",
     "capital"=> "Buenos Aires",
     "bandera"=> "<img width= 140 px; height= 100 px; src='../images/argentina.png'>"
   ),

   array(
     "pais"=> "Colombia",
     "capital"=> "Bogotá",
     "bandera"=> "<img width= 140 px; height= 100 px; src='../images/colombia.jpeg'>"
   ),

   array(
     "pais"=> "Chile",
     "capital"=> "Santiago de Chile",
     "bandera"=> "<img width= 140 px; height= 100 px; src='../images/chile.png'>"
   ),

   array(
     "pais"=> "México",
     "capital"=> "Ciudad de México",
     "bandera"=> "<img width= 140 px; height= 100 px; src='../images/mexico.png'>"
   ),
 );

 /**
 * Array que almacena los paises de Europa
 */
 $europa = array(

   array(
     "pais"=> "Bélgica",
     "capital"=> "Bruselas",
     "bandera"=> "<img width= 140 px; height= 100 px; src='../images/belgica.jpg'>"
   ),

   array(
     "pais"=> "Bielorrusia",
     "capital"=> "Minsk",
     "bandera"=> "<img width= 140 px; height= 100 px; src='../images/bielorrusia.png'>"
   ),

   array(
     "pais"=> "Bulgaria",
     "capital"=> "Sofía",
     "bandera"=> "<img width= 140 px; height= 100 px; src='../images/bulgaria.png'>"
   ),

   array(
     "pais"=> "España",
     "capital"=> "Madrid",
     "bandera"=> "<img width= 140 px; height= 100 px; src='../images/españa.png'>"
   ),
 );

 /**
 * Array que almacena los paises de África
 */
 $africa = array(

   array(
     "pais"=> "Angola",
     "capital"=> "Luanda",
     "bandera"=> "<img width= 140 px; height= 100 px; src='../images/angola.png'>"
   ),

   array(
     "pais"=> "Argelia",
     "capital"=> "Argel",
     "bandera"=> "<img width= 140 px; height= 100 px; src='../images/argelia.png'>"
   ),

   array(
     "pais"=> "Benín",
     "capital"=> "Porto Novo",
     "bandera"=> "<img width= 140 px; height= 100 px; src='../images/benin.png'>"
   ),

   array(
     "pais"=> "Botsuana",
     "capital"=> "Gaborone",
     "bandera"=> "<img width= 140 px; height= 100 px; src='../images/botsuana.png'>"
   ),
 );

 /**
 * Array que almacena los paises de Asia
 */
 $asia = array(

   array(
     "pais"=> "China",
     "capital"=> "Pekín",
     "bandera"=> "<img width= 140 px; height= 100 px; src='../images/china.png'>"
   ),

   array(
     "pais"=> "Japón",
     "capital"=> "Kioto",
     "bandera"=> "<img width= 140 px; height= 100 px; src='../images/japon.png'>"
   ),

   array(
     "pais"=> "India",
     "capital"=> "Nueva Delhi",
     "bandera"=> "<img width= 140 px; height= 100 px; src='../images/india.png'>"
   ),

   array(
     "pais"=> "Mongolia",
     "capital"=> "Ulán Bator",
     "bandera"=> "<img width= 140 px; height= 100 px; src='../images/mongolia.jpg'>"
   ),
 );

 /**
 * Recorre el array introducido por parámetro y muestra sus valores en una tabla.
 * @param array (continent)
 * @param string (name)
 */
function printCountries($continent,$name){
    echo "<br/>CONTINENTE: ".$name."<br/><br/>";
    echo '<table style="border:1px solid black; text-align: center">';

    foreach ($continent as $value) {

       echo '<tr><td style="border:1px solid black;">'.$value["pais"].'</td>
         <td style="border:1px solid black;">'.$value["capital"].'</td>
           <td style="border:1px solid black;">'.$value["bandera"].
             '</td></tr>';

           }echo '</table>';
 }

 ?>  
 
         <form method="post" >
              <h3>Países y banderas</h3>
              <label>Continente:</label>
              <select name="continente">
                <option value="america">América</option>
                <option value="africa">África</option>
                <option value="asia">Asia</option>
                <option value="europa">Europa</option>
              </select>
                <br>
              
              <input type="submit" name="submit" value="Enviar">
              
            </form>

            <?php
            // Si se ha pulsado el botón enviar, muestra los datos.
               if(isset($_POST['submit'])){
                    echo "<h2>Mostrando paises y banderas..</h2>";
                    if($_POST['continente']=="africa"){
                      printCountries($africa,"África");
                    }
                    if($_POST['continente']=="america"){
                      printCountries($america,"América");
                    }

                    if($_POST['continente']=="asia"){
                       printCountries($asia,"Asia");
                    }

                    if($_POST['continente']=="europa"){
                      printCountries($europa,"Europa");
                    }

              }


?>
   </body>
</html>