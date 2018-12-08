{
  let nombreE;
  let cifE;
  let direccionE;
  let telefonoE;
  let nombreC;
  let cifC;
  let direccionC;
  let telefonoC;

  function init() {
    guardarE = document.getElementById("guardarE");
    limpiarE = document.getElementById("limpiarE"); 
    nombreE = document.getElementById("nombreE");
    cifE = document.getElementById("cifE");
    direccionE = document.getElementById("direccionE");
    telefonoE = document.getElementById("telefonoE");
    errorE=document.getElementById("errorE");

    guardarC = document.getElementById("guardarC");
    limpiarC = document.getElementById("limpiarC");
    nombreC = document.getElementById("nombreC");
    cifC = document.getElementById("cifC");
    direccionC = document.getElementById("direccionC");
    telefonoC = document.getElementById("telefonoC");
    errorC=document.getElementById("errorC");
    
    guardarE.addEventListener("click", guardarEm);
    limpiarE.addEventListener("click", limpiarEm);
    guardarC.addEventListener("click", guardarCl);
    limpiarC.addEventListener("click", limpiarCl);

    fecha = document.getElementById("fecha");

    factura=document.getElementById("factura");
    factura.addEventListener("click", crearFactura);
  }
  function guardarEm(){
    errorE.textContent="";
    try {
      return new Empresa(nombreE.value, cifE.value, direccionE.value, telefonoE.value);      
    } catch (e) {
      errorE.textContent = e.message;
    }
  }

  function limpiarEm(){
    nombreE.value="";
    cifE.value="";
    direccionE.value="";
    telefonoE.value=""; 
  }

  function guardarCl(){
    errorC.textContent = "";
    try {
      return new cliente(nombreC.value,direccionC.value, telefonoC.value,cifC.value);
    } catch (e) {
      errorC.textContent = e.message;
    }
  };

  function limpiarCl(){
    nombreC.value = "";
    cifC.value= "";
    direccionC.value = "";
    telefonoC.value = "";
  }

  function crearFactura () {
    let factura = new Factura(fecha.value, guardarEm(), guardarCl(), irpf.value, re.value, textObservaciones.value);
    console.log(factura);
    muestraTotal.innerHTML = `Total (EUROS) ${factura.total}`;
  };
  window.addEventListener("load",init)
}