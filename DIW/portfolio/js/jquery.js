function init() {
    $contar=0;

    $('#menuLink').click(function () {
        $contar++;
        if($contar<2){
            $('#nav').css({
                'display': 'block'            
            });
        }else{
            $contar=0;
            $('#nav').css({
                'display': 'none'            
            });
        }

    });
    $('#nav').click(function(){
        $('#nav').css({
            'display': 'none'
        });
    });
    $(document).scroll(function(){
        $contar=0;
        $('#nav').css({
            'display': 'none'
        });
    });

}
$(init);
