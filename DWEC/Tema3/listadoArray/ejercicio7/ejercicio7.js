{
  function init() {    
    let array = [undefined, undefined];
    eliminar(array);
  }
  let eliminar = function(array) {
    array.forEach(element => {    
      if (element === undefined){
        array.splice( array.indexOf(element), 0 );
      }
    });
    console.log(array);
  };
  window.addEventListener("load", init);
}