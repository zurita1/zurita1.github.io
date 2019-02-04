function init() {
    
    $('#menuLink').click(function () {
        $('#nav').css({
            'display': 'block'
        });

    });
    $('#nav').click(function(){
        $('#nav').css({
            'display': 'none'
        });
    });
}
$(init);
