<?php
    /**
    * Proyecto verbos irregulares
    *
    * @author Rafael García Zurita
    * @version 1.0
    */
?>
<head>
    <meta charset="utf-8">
    <script src="http://code.responsivevoice.org/responsivevoice.js"></script>
    <script>
    let reproducirAudio = function(verbo){
        responsiveVoice.speak(verbo, "UK English Female", {volume: 90});
    }
    </script>
    <style type="text/css" media="screen">
        #container{margin: auto; text-align: center;}
        table{ margin: 0 auto; }
        th,td{ border: 1px solid black; color: black; padding: 10px; text-align: center;}
        h1{ text-align: center; }
        .ajustes{ width: 500px; text-align: left; margin: 80px auto; }
        fieldset{ padding: 20px; }
    </style>
</head>
<h1>Verbos irregulares</h1>
<div id="container">
    <?php
    $arrayVerbos = array(
        array("infinitivo"=>"arise","pasado"=>"arose","participio"=>"arisen","traduccion"=>"Elevarse"),
        array("infinitivo"=>"awake","pasado"=>"awoke","participio"=>"awoken","traduccion"=>"Despertar"),
        array("infinitivo"=>"bear","pasado"=>"bore","participio"=>"born","traduccion"=>"Soportar"),
        array("infinitivo"=>"beat","pasado"=>"beat","participio"=>"beaten","traduccion"=>"golpear"),
        array("infinitivo"=>"become","pasado"=>"became","participio"=>"become","traduccion"=>"Hacerse"),
        array("infinitivo"=>"begin","pasado"=>"began","participio"=>"begun","traduccion"=>"Empezar"),
        array("infinitivo"=>"bend","pasado"=>"bent","participio"=>"bent","traduccion"=>"Doblar"),
        array("infinitivo"=>"bet","pasado"=>"bet","participio"=>"bet","traduccion"=>"Apostar"),
        array("infinitivo"=>"bind","pasado"=>"bound","participio"=>"bound","traduccion"=>"Atar"),
        array("infinitivo"=>"bite","pasado"=>"bit","participio"=>"bitten","traduccion"=>"Morder"),
        array("infinitivo"=>"blow","pasado"=>"blew","participio"=>"blown","traduccion"=>"Soplar"),
        array("infinitivo"=>"break","pasado"=>"broke","participio"=>"broken","traduccion"=>"Quebrar"),
        array("infinitivo"=>"bring","pasado"=>"brought","participio"=>"brought","traduccion"=>"Traer"),
        array("infinitivo"=>"build","pasado"=>"built","participio"=>"built","traduccion"=>"Construir"),
        array("infinitivo"=>"burn","pasado"=>"burnt","participio"=>"burnt","traduccion"=>"Quemar"),
        array("infinitivo"=>"burst","pasado"=>"burst","participio"=>"burst","traduccion"=>"Romper"),
        array("infinitivo"=>"buy","pasado"=>"bought","participio"=>"bought","traduccion"=>"Comprar"),
        array("infinitivo"=>"catch","pasado"=>"caught","participio"=>"caught","traduccion"=>"Coger"),
        array("infinitivo"=>"choose","pasado"=>"chose","participio"=>"chosen","traduccion"=>"Escoger"),
        array("infinitivo"=>"cling","pasado"=>"clung","participio"=>"clung","traduccion"=>"Asirse"),
        array("infinitivo"=>"come","pasado"=>"came","participio"=>"come","traduccion"=>"Venir"),
        array("infinitivo"=>"cost","pasado"=>"cost","participio"=>"cost","traduccion"=>"Costar"),
        array("infinitivo"=>"creep","pasado"=>"crept","participio"=>"crept","traduccion"=>"Arrastrarse"),
        array("infinitivo"=>"cut","pasado"=>"cut","participio"=>"cut","traduccion"=>"Cortar"),
        array("infinitivo"=>"deal","pasado"=>"dealt","participio"=>"dealt","traduccion"=>"Tratar"),
        array("infinitivo"=>"dig","pasado"=>"dug","participio"=>"dug","traduccion"=>"Cavar"),
        array("infinitivo"=>"do","pasado"=>"did","participio"=>"done","traduccion"=>"Hacer"),
        array("infinitivo"=>"draw","pasado"=>"drew","participio"=>"drawn","traduccion"=>"Tirar"),
        array("infinitivo"=>"drink","pasado"=>"drank","participio"=>"drunk","traduccion"=>"Beber"),
        array("infinitivo"=>"drive","pasado"=>"drove","participio"=>"driven","traduccion"=>"conducir"),
        array("infinitivo"=>"fall","pasado"=>"fell","participio"=>"fallen","traduccion"=>"Caer"),
        array("infinitivo"=>"feed","pasado"=>"fed","participio"=>"fed","traduccion"=>"Alimentar"),
        array("infinitivo"=>"feel","pasado"=>"felt","participio"=>"felt","traduccion"=>"Sentir"),
        array("infinitivo"=>"fight","pasado"=>"fought","participio"=>"fought","traduccion"=>"Pelear"),
        array("infinitivo"=>"find","pasado"=>"found","participio"=>"found","traduccion"=>"Encontrar"),
        array("infinitivo"=>"find out","pasado"=>"found out","participio"=>"found out","traduccion"=>"Averiguar"),
        array("infinitivo"=>"flee","pasado"=>"fled","participio"=>"fled","traduccion"=>"Escapar"),
        array("infinitivo"=>"fly","pasado"=>"flew","participio"=>"flown","traduccion"=>"Volar"),
        array("infinitivo"=>"forbid","pasado"=>"forbade","participio"=>"forbidden","traduccion"=>"Prohibir"),
        array("infinitivo"=>"foresee","pasado"=>"foresaw","participio"=>"foreseen","traduccion"=>"prevenir"),
        array("infinitivo"=>"forget","pasado"=>"forgot","participio"=>"forgotten","traduccion"=>"Olvidar"),
        array("infinitivo"=>"forgive","pasado"=>"forgave","participio"=>"forgiven","traduccion"=>"Perdonar"),
        array("infinitivo"=>"freeze","pasado"=>"froze","participio"=>"frozen","traduccion"=>"Congelar"),
        array("infinitivo"=>"get","pasado"=>"got","participio"=>"got (ten)","traduccion"=>"Lograr"),
        array("infinitivo"=>"give","pasado"=>"gave","participio"=>"given","traduccion"=>"Dar"),
        array("infinitivo"=>"go","pasado"=>"went","participio"=>"gone","traduccion"=>"funcionar"),
        array("infinitivo"=>"grind","pasado"=>"ground","participio"=>"ground","traduccion"=>"Moler"),
        array("infinitivo"=>"grow","pasado"=>"grew","participio"=>"grown","traduccion"=>"Crecer"),
        array("infinitivo"=>"hang","pasado"=>"hung","participio"=>"hung","traduccion"=>"Colgar"),
        array("infinitivo"=>"have","pasado"=>"had","participio"=>"had","traduccion"=>"Tener"),
        array("infinitivo"=>"hear","pasado"=>"heard","participio"=>"heard","traduccion"=>"OÃƒÂ­r"),
        array("infinitivo"=>"hide","pasado"=>"hid","participio"=>"hid (den)","traduccion"=>"Ocultar"),
        array("infinitivo"=>"hit","pasado"=>"hit","participio"=>"hit","traduccion"=>"Pegar"),
        array("infinitivo"=>"hold","pasado"=>"held","participio"=>"held","traduccion"=>"Sostener"),
        array("infinitivo"=>"hurt","pasado"=>"hurt","participio"=>"hurt","traduccion"=>"Herir"),
        array("infinitivo"=>"keep","pasado"=>"kept","participio"=>"kept","traduccion"=>"Mantener"),
        array("infinitivo"=>"know","pasado"=>"knew","participio"=>"known","traduccion"=>"Conocer"),
        array("infinitivo"=>"lay","pasado"=>"laid","participio"=>"laid","traduccion"=>"Poner"),
        array("infinitivo"=>"lead","pasado"=>"led","participio"=>"led","traduccion"=>"Guiar"),
        array("infinitivo"=>"lean","pasado"=>"leant","participio"=>"leant","traduccion"=>"Inclinar"),
        array("infinitivo"=>"learn","pasado"=>"learnt","participio"=>"learnt","traduccion"=>"Aprender"),
        array("infinitivo"=>"leave","pasado"=>"left","participio"=>"left","traduccion"=>"Partir"),
        array("infinitivo"=>"lend","pasado"=>"lent","participio"=>"lent","traduccion"=>"Prestar"),
        array("infinitivo"=>"let","pasado"=>"let","participio"=>"let","traduccion"=>"Permitir"),
        array("infinitivo"=>"lie","pasado"=>"lay","participio"=>"lain","traduccion"=>"Tenderse"),
        array("infinitivo"=>"light","pasado"=>"lit","participio"=>"lit","traduccion"=>"Alumbrar"),
        array("infinitivo"=>"lose","pasado"=>"lost","participio"=>"lost","traduccion"=>"Perder"),
        array("infinitivo"=>"make","pasado"=>"made","participio"=>"made","traduccion"=>"Hacer"),
        array("infinitivo"=>"mean","pasado"=>"meant","participio"=>"meant","traduccion"=>"Significar"),
        array("infinitivo"=>"meet","pasado"=>"met","participio"=>"met","traduccion"=>"Encontrar"),
        array("infinitivo"=>"melt","pasado"=>"melted","participio"=>"molten (old)","traduccion"=>"Derretir"),
        array("infinitivo"=>"mistake","pasado"=>"mistook","participio"=>"mistaken","traduccion"=>"Equivocarse"),
        array("infinitivo"=>"misunderstand","pasado"=>"misunderstood","participio"=>"misunderstood","traduccion"=>"mal entender"),
        array("infinitivo"=>"overcome","pasado"=>"overcame","participio"=>"overcome","traduccion"=>"Vencer"),
        array("infinitivo"=>"pay","pasado"=>"paid","participio"=>"paid","traduccion"=>"Pagar"),
        array("infinitivo"=>"put","pasado"=>"put","participio"=>"put","traduccion"=>"Poner"),
        array("infinitivo"=>"read","pasado"=>"read","participio"=>"read","traduccion"=>"Leer"),
        array("infinitivo"=>"rebuild","pasado"=>"rebuilt","participio"=>"rebuilt","traduccion"=>"Reconstruir"),
        array("infinitivo"=>"rid","pasado"=>"rid","participio"=>"rid","traduccion"=>"Librarse"),
        array("infinitivo"=>"ride","pasado"=>"rode","participio"=>"ridden","traduccion"=>"Rodar"),
        array("infinitivo"=>"ring","pasado"=>"rang","participio"=>"rung","traduccion"=>"Tocar"),
        array("infinitivo"=>"rise","pasado"=>"rose","participio"=>"risen","traduccion"=>"Ascender"),
        array("infinitivo"=>"run","pasado"=>"ran","participio"=>"run","traduccion"=>"Correr"),
        array("infinitivo"=>"saw","pasado"=>"sawed","participio"=>"sawn","traduccion"=>"serrar"),
        array("infinitivo"=>"say","pasado"=>"said","participio"=>"said","traduccion"=>"Decir"),
        array("infinitivo"=>"see","pasado"=>"saw","participio"=>"seen","traduccion"=>"Ver"),
        array("infinitivo"=>"seek","pasado"=>"sought","participio"=>"sought","traduccion"=>"Buscar"),
        array("infinitivo"=>"sell","pasado"=>"sold","participio"=>"sold","traduccion"=>"Vender"),
        array("infinitivo"=>"send","pasado"=>"sent","participio"=>"sent","traduccion"=>"Enviar"),
        array("infinitivo"=>"set","pasado"=>"set","participio"=>"set","traduccion"=>"Instalar"),
        array("infinitivo"=>"shake","pasado"=>"shook","participio"=>"shaken","traduccion"=>"Sacudir"),
        array("infinitivo"=>"shed","pasado"=>"shed","participio"=>"shed","traduccion"=>"Derramar"),
        array("infinitivo"=>"shine","pasado"=>"shone","participio"=>"shone","traduccion"=>"Brillar"),
        array("infinitivo"=>"shoot","pasado"=>"shot","participio"=>"shot","traduccion"=>"Disparar"),
        array("infinitivo"=>"show","pasado"=>"showed","participio"=>"shown","traduccion"=>"Mostrar"),
        array("infinitivo"=>"shrink","pasado"=>"shrank","participio"=>"shrunk","traduccion"=>"Encoger"),
        array("infinitivo"=>"shut","pasado"=>"shut","participio"=>"shut","traduccion"=>"Cerrar"),
        array("infinitivo"=>"sing","pasado"=>"sang","participio"=>"sung","traduccion"=>"Cantar"),
        array("infinitivo"=>"sink","pasado"=>"sank","participio"=>"sunk","traduccion"=>"Hundir"),
        array("infinitivo"=>"sit","pasado"=>"sat","participio"=>"sat","traduccion"=>"Sentarse"),
        array("infinitivo"=>"sleep","pasado"=>"slept","participio"=>"slept","traduccion"=>"Dormir"),
        array("infinitivo"=>"slide","pasado"=>"slid","participio"=>"slid(den)","traduccion"=>"Resbalar"),
        array("infinitivo"=>"smell","pasado"=>"smelt","participio"=>"smelt","traduccion"=>"Oler"),
        array("infinitivo"=>"speak","pasado"=>"spoke","participio"=>"spoken","traduccion"=>"Hablar"),
        array("infinitivo"=>"speed","pasado"=>"sped","participio"=>"sped","traduccion"=>"Acelerar"),
        array("infinitivo"=>"spend","pasado"=>"spent","participio"=>"spent","traduccion"=>"Gastar"),
        array("infinitivo"=>"spill","pasado"=>"spilt","participio"=>"spilt","traduccion"=>"Derramar"),
        array("infinitivo"=>"spin","pasado"=>"spun","participio"=>"spun","traduccion"=>"Tornear"),
        array("infinitivo"=>"split","pasado"=>"split","participio"=>"split","traduccion"=>"Partir"),
        array("infinitivo"=>"spoil","pasado"=>"spoilt","participio"=>"spoilt","traduccion"=>"Deteriorar"),
        array("infinitivo"=>"spread","pasado"=>"spread","participio"=>"spread","traduccion"=>"Extender"),
        array("infinitivo"=>"spring","pasado"=>"sprang","participio"=>"sprung","traduccion"=>"Saltar"),
        array("infinitivo"=>"stand","pasado"=>"stood","participio"=>"stood","traduccion"=>"Pararse"),
        array("infinitivo"=>"steal","pasado"=>"stole","participio"=>"stolen","traduccion"=>"Robar"),
        array("infinitivo"=>"stick","pasado"=>"stuck","participio"=>"stuck","traduccion"=>"Pegar"),
        array("infinitivo"=>"stink","pasado"=>"stank","participio"=>"stunk","traduccion"=>"apestar"),
        array("infinitivo"=>"strike","pasado"=>"struck","participio"=>"struck","traduccion"=>"Golpear"),
        array("infinitivo"=>"swell","pasado"=>"swelled","participio"=>"swollen","traduccion"=>"Hinchar"),
        array("infinitivo"=>"swim","pasado"=>"swam","participio"=>"swum","traduccion"=>"Nadar"),
        array("infinitivo"=>"swing","pasado"=>"swung","participio"=>"swung","traduccion"=>"Balancearse"),
        array("infinitivo"=>"take","pasado"=>"took","participio"=>"taken","traduccion"=>"Tomar"),
        array("infinitivo"=>"teach","pasado"=>"taught","participio"=>"taught","traduccion"=>"EnseÃ±ar"),
        array("infinitivo"=>"tear","pasado"=>"tore","participio"=>"torn","traduccion"=>"Romper"),
        array("infinitivo"=>"tell","pasado"=>"told","participio"=>"told","traduccion"=>"Decir"),
        array("infinitivo"=>"think","pasado"=>"thought","participio"=>"thought","traduccion"=>"Pensar"),
        array("infinitivo"=>"throw","pasado"=>"threw","participio"=>"thrown","traduccion"=>"Lanzar"),
        array("infinitivo"=>"thrust","pasado"=>"thrust","participio"=>"thrust","traduccion"=>"empujar"),
        array("infinitivo"=>"undergo","pasado"=>"underwent","participio"=>"undergone","traduccion"=>"Sufrir"),
        array("infinitivo"=>"understand","pasado"=>"understood","participio"=>"understood","traduccion"=>"Comprender"),
        array("infinitivo"=>"undertake","pasado"=>"undertook","participio"=>"undertaken","traduccion"=>"Emprender"),
        array("infinitivo"=>"undo","pasado"=>"undid","participio"=>"undone","traduccion"=>"Desarmar"),
        array("infinitivo"=>"wake","pasado"=>"woke","participio"=>"woken","traduccion"=>"Despertar"),
        array("infinitivo"=>"wear","pasado"=>"Wore","participio"=>"worn","traduccion"=>"usar"),
        array("infinitivo"=>"win","pasado"=>"Won","participio"=>"won","traduccion"=>"Ganar"),
        array("infinitivo"=>"wind","pasado"=>"Wound","participio"=>"wound","traduccion"=>"Enroscar"),
        array("infinitivo"=>"withdraw","pasado"=>"Withdrew","participio"=>"withdrawn","traduccion"=>"Retirar"),
        array("infinitivo"=>"withstand","pasado"=>"Withstood","participio"=>"withstood","traduccion"=>"Resistir")
    );

    $tiempoVerbal = "";   
    $n_huecos = 0;       
    $n_aciertos = 0;    
    $background = "";  
    $inputs = "";  //Almacena los inputs del usuario en los huecos
    $auxVbos = array(); //Array auxiliar que almacena los verbos que ya han salido
    $auxTiempos = array(); //Array auxiliar que almacena los tiempos que ya han salido
    // Constantes color de fondo segÃºn acierte o no
    define("ROJO", "rgb(255, 0, 0);");
    define("VERDE", "rgb(0, 255, 0);");

    function definirNumHuecos($dificultad){
        switch ($dificultad) {
            case 'facil':
                $n_huecos = 1;
                break;
            case 'media':
                $n_huecos = 2;
                break;            
            default:
                $n_huecos = 3;
                break;
        }
        return $n_huecos;
    }

    function definirTiempoVerbal($puntero){
        switch ($puntero) {   
            case 0:
                $tiempoVerbal = "infinitivo";
                break;
            case 1:
                $tiempoVerbal = "pasado";
                break;
            case 2:
                $tiempoVerbal = "participio";
                break;
            default:
                $tiempoVerbal = "traduccion";
                break;
        }
        return $tiempoVerbal;
    }

    if (isset($_POST["ajustes"])) {

        $n_huecos = definirNumHuecos($_POST["dificultad"]);

        if($_POST["numeroVerbos"]) {
            for ($i = 0; $i < $_POST["numeroVerbos"]; $i++) {
                for ($j = 0; $j < $n_huecos; $j++) {
                    do {
                        $aleatorioTiempo = rand(0, 3);  
                    } while (in_array($aleatorioTiempo, $auxTiempos));
                    $auxTiempos[$j] = $aleatorioTiempo;    
                }
                do {
                    $aleatorioVerbo = rand(0, count($arrayVerbos) - 1); 
                } while (in_array($aleatorioVerbo, $auxVbos));  
                $auxVbos[$aleatorioVerbo] = $auxTiempos; 

            }
        }
    }

    echo "<form method='post' action=''>";

    if ((!isset($_GET["id"]) and !isset($_POST["ajustes"]) and !isset($_POST["comprobar"]) and !isset($_POST["corregir"]))) {
        echo "
        <div class=ajustes><fieldset>
            <legend>AJUSTES</legend><label>Dificultad</label>
            <select name='dificultad'>
                <option value='facil'>FÃ¡cil</option>
                <option value='media'>Media</option>
                <option value='dificil'>DifÃ­cil</option>
            </select><br><br><br>
            <label>NÃºmero de verbos a mostrar</label>
            <input type='number' name='numeroVerbos' min='1' max='127' value='1'><br><br>
            <br><input type='submit' name='ajustes' value='Aceptar'></fieldset></div>";
    }

    if (isset($_POST["comprobar"]) or isset($_POST["corregir"])) {
        $auxVbos = $_POST["valores"];
    }

    if ((isset($_POST["comprobar"]) or isset($_POST["ajustes"]) or isset($_POST["corregir"]))) {

        echo "<table><tr><th>Infinitivo</th><th>pasado</th><th>Participio</th><th>TraducciÃ³n</th><th>Escuchar</th></tr>";

    
        foreach ($auxVbos as $key => $value) {

            echo "<tr>";
            for ($j = 0; $j < 5; $j++) {  

                if (isset($_POST["comprobar"])) {
                    $tiempoVerbal = definirTiempoVerbal($j);
                    $vExiste = array_key_exists($j, $value);  
                    if ($vExiste) { 
                        $valorUsuario = $value[$j]; 
                        if (strtolower($valorUsuario) == strtolower($arrayVerbos[$key][$tiempoVerbal])) { 
                            $background = VERDE;  
                            $n_aciertos++;    
                        } else {    
                            $background = ROJO;  
                        }
                        $inputs = $valorUsuario;    
                    }
                } else if (isset($_POST["corregir"])) {  
                    $tiempoVerbal = definirTiempoVerbal($j);
                    $vExiste = array_key_exists($j, $value);  
                    $inputs = $arrayVerbos[$key][$tiempoVerbal];
                } else { 
                    $vExiste = in_array($j, $value);
                }

                if ($vExiste) {  
                    echo "<td><input type='text' name='valores[$key][$j]' value='$inputs' style='background: $background; '></td>";

                } else {    
                    switch ($j) {   
                        case 0:
                            echo "<td>".$arrayVerbos[$key]["infinitivo"]."</td>";
                            break;
                        case 1:
                            echo "<td>".$arrayVerbos[$key]["pasado"]."</td>";
                            break;
                        case 2:
                            echo "<td>".$arrayVerbos[$key]["participio"]."</td>";
                            break;
                        case 3:
                            echo "<td>".$arrayVerbos[$key]["traduccion"]."</td>";
                            break;
                        default:
                            $mensaje = $arrayVerbos[$key]["infinitivo"] .",". $arrayVerbos[$key]["pasado"].",".$arrayVerbos[$key]["participio"];
                            echo "<td><a href='#' onclick=reproducirAudio('$mensaje');>Audio</a></td>";
                            break;
                    }

                }
            }
            echo "</tr>";
        }
        echo "</table>";

        if (isset($_POST["comprobar"])) {
            echo "Has acertado " . $n_aciertos . " veces!<br/>";
        }

        echo "<input type='submit' name='comprobar' value='Comprobar resultados'> 
              <input type='submit' name='corregir' value='SoluciÃ³n'><br>
              <input type='submit' name='volver' value='Volver'></form><br><br></div>";
    }



    ?>
<a href="../">Volver al Ã­ndice de ejercicios</a>