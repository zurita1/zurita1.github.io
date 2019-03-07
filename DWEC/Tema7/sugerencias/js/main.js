function init() {
    $('#input').on('input', buscar);
    $sugerencia=$('#sugerencias')
    function buscar() {
        let valor =  this.value;
            
        if (valor.length == 0) {
            $sugerencia.html('');
            return;
        }

        $.ajax({
            type: "POST",
            url: 'http://cpd.iesgrancapitan.org:9119/~qgzura/alumnos.php',
            data: { 'texto': valor },
        }).done(function (data) {
            $sugerencia.html(data);
        });

    }
}
$(init)