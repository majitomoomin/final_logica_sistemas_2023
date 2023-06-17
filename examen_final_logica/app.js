function opcion1(){
    var input_uno = document.getElementById('input_uno').value;
    var input_dos = document.getElementById('input_dos').value;
    var input_tres = document.getElementById('input_tres').value;
    var resultado;
    var resultados;

    if(input_uno < input_tres) {
        resultado = parseInt(input_uno) * parseInt(input_dos) * parseInt(input_tres);
        console.log(resultado);
        resultados = "se esta multiplicando y el resultado es " + resultado;  

    } 
    if (input_dos==0) {
     resultado = parseInt(input_uno) -  parseInt(input_tres);
    }
}

function opcion2(){
    var input_uno = document.getElementById('input_uno').value;
    var input_dos = document.getElementById('input_dos').value;
    var input_tres = document.getElementById('input_tres').value;
    var resultado;
    var resultados;

    if(input_uno < input_tres) {
        resultado = (input_uno) + (input_dos) + (input_tres);
        console.log(resultado);
        resultados = "concatenado" + resultado;  

    } 
   if (input_dos==0) {
        resultado = parseInt(input_uno) -  parseInt(input_tres);
   }
}