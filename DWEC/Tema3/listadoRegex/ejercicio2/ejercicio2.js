{
    function init() {
        let reg = /\w/g;
        //encontrar varias coincidencias
        console.log(reg.global);
        //no hacer caso a mayusculas ni minusculas
        console.log(reg.ignoreCase);
        //cocincidencia multilinea
        console.log(reg.multiline);
    }
    window.addEventListener("load", init);
  }