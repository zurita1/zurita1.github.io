{
    function init() {
        //new Date(): Devuelve la fecha actual.
        console.log(new Date());
        //new Date(milisegundos): Devuelve la fecha pasándole los milisegundos desde las 00:00:00 UTC del 1 de enero de 1970. Ejemplo 0 milisegundos
        console.log(new Date(0));
        informacion.innerHTML +=  "+new Date(0)+"<br/>";
        informacion.innerHTML += "new Date(cadenaFecha): Devuelve la fecha pasandole una fecha en formato reconocible por Date.parse. Ejemplo 01/01/2019: "+new Date("01/01/2019")+"<br/>";
        informacion.innerHTML += "new Date(año_num,mes_num,dia_num[,hor_num,min_num,seg_num,mils_num]): Devuelve la fecha pasándole enteros que representan las partes de una hora completa. Ejemplo año 2019 mes 0: "+new Date(2019,0)+"<br/>";
    }

    window.addEventListener("load", iniciar);
}

    }
    window.addEventListener("load", init);
}