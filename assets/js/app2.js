
var texto = document.querySelector("#contador1");
var texto2 = document.querySelector("#contador2");
var texto3 = document.querySelector("#contador3");
let resultado = document.querySelector("#resultado"); 

var  verificador = document.querySelector("#verificador");

verificador.addEventListener("click", function(){
  var resultadoSuma = parseInt(texto.value) + parseInt(texto2.value) + parseInt(texto3.value)
  if(resultadoSuma <= 10){
    resultado.innerHTML = "llevas " + resultadoSuma + " Stikers";
  }else if (resultadoSuma > 10){  
    resultado.innerHTML = "Llevas demasiados Stikers";
  } else {
    resultado.innerHTML = "Faltan ingresar 1 o más Stikers";
  }
});