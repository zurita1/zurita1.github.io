{
    function init() {
        //new Date(): Devuelve la fecha actual.
        console.log(new Date());
        //new Date(milisegundos): Devuelve la fecha pasándole los milisegundos desde las 00:00:00 UTC del 1 de enero de 1970. Ejemplo 0 milisegundos
        console.log(new Date(0));
        //new Date(cadenaFecha): Devuelve la fecha pasandole una fecha en formato reconocible por Date.parse.
        console.log(new Date("04/12/1998"));
        //new Date(año_num,mes_num,dia_num[,hor_num,min_num,seg_num,mils_num]): Devuelve la fecha pasándole enteros que representan las partes de una hora completa. 
         console.log(new Date(2019,0));
    }
    window.addEventListener("load", init);
}