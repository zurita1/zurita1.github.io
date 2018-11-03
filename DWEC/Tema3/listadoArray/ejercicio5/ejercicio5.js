{
    function init(){     
        array();
    }

    let array = function () {
        let array = [];
        for (let i = 0; i < arguments.length; i++){
            array[i]=arguments[i];  
            console.log(arguments[i]);
        }
        return array;
    }
    window.addEventListener("load", init);
}
