{
  function init() {    
    console.log("-- addSpeed --");
    addSpeed("push");
    addSpeed("unshift");
    addSpeed("direct");

    console.log("-- deleteSpeed --");
    deleteSpeed("pop");
    deleteSpeed("shift");
    deleteSpeed("direct");
  }
  let addSpeed = function(operation) {
    let array = [];
    let d1 = performance.now();
    for (let i = 0; i < 100; i++) {
      switch (operation) {
        case "push":
          array.push(i);
          break;
        case "unshift":
          array.unshift(i);
          break;
        case "direct":
          array[i] = i;
          break;
      }      
    }
    let d2 = performance.now();
    console.log(operation + " => " + (d2 - d1));    
  };
  let deleteSpeed = function(operation) {
    let array = [];
    // llenamos el array
    for (let i = 0; i < 100; i++) {
      array.push(i);
    }
    let d1 = performance.now();
    for (let k = 0; k < array.length; k++) {
      switch (operation) {
        case "pop":
          array.pop();
          break;
        case "shift":
          array.shift();
          break;
        case "direct":
          array[k] = "";
          break;
      }      
    }
    let d2 = performance.now();
    console.log(operation + " => " + (d2 - d1));   
  };
  window.addEventListener("load", init);
}