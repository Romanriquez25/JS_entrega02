var cambiarBorde = document.querySelector('.contenedor__imagen');
var contador = 0;

cambiarBorde.addEventListener('click', function() {
    if (contador == 0) {
        cambiarBorde.style.border = '2px solid #f00';
        contador++;
    } else {
        cambiarBorde.style.border = 'none';
        contador--;
    }
});


