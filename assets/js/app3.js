

// Obtener el elemento select
var selectElement1 = document.getElementById("miSelect");
var selectElement2 = document.getElementById("miSelect2");
var selectElement3 = document.getElementById("miSelect3");

selectElement1.onchange = function() {
  var seleccion1 = selectElement1.value; // Obtener el valor seleccionado
  console.log( seleccion1);
};

selectElement2.onchange = function() {
    var seleccion2 = selectElement2.value; // Obtener el valor seleccionado
    console.log( seleccion2);
    };

selectElement3.onchange = function() {
        var seleccion3 = selectElement3.value; // Obtener el valor seleccionado
        console.log( seleccion3);
        }   


var validador = document.querySelector("#validador");

validador.addEventListener("click", function(){
    var seleccion1 = selectElement1.value; // Obtener el valor seleccionado
    var seleccion2 = selectElement2.value; // Obtener el valor seleccionado
    var seleccion3 = selectElement3.value; // Obtener el valor seleccionado
    var resultado = document.querySelector("#resultado");
    if (seleccion1 == "9" && seleccion2 == "1" && seleccion3 == "1"){
        resultado.innerHTML = "Password 1 correcto";
    } else if (seleccion1 == "7" && seleccion2 == "1" && seleccion3 == "4"){
        resultado.innerHTML = "Password 2 correcto";
    }else{
        resultado.innerHTML = "Password incorrecto";
    }
});