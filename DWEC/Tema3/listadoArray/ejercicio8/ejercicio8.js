{
    function init() {
        let array = [1, 2, 3, 4, 5, 6, 7];
        metodos(array);
    }
    let metodos = function (array) {
        array.forEach(element => {
            console.log(element);
        });     
        console.log("every() => " + array.every(element => element > 1)); 
        console.log("some() => " + array.some(element => element > 1));    
        console.log("filter() => " + array.filter(element => element > 1));
    };
    window.addEventListener("load", init);
}