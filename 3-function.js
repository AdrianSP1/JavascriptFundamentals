//Las funciones son procedimeintos, un conjunto de  sentencias o pasos que realizaran una tarea o calculo con ciertos valores.

//Tenemos dos tipo de funciones en js,
//function Declaration y function Epression

// el nombre reservado de una function y parametros que recibira esa function

function miFuncion() {
    //fucntion declaration Declarativas expresión
    return 3;
}

miFuncion(); // mandamos llmar la funcion

var miFuncion = function(a,b){
    //function Expression(tambien conocida como funciones anónimas)
    return a + b;
}

miFuncion(); // mandamos llamar la variable como funcion


/* ============================= */

function saludarEstudiante(estudiante) {
console.log(`Hola ${estudiante}`); // template strings(Plantillas de cadena de texto)
}

function suma (a,b){
    //esta funcion recibe 2 prarametros que se convierten en un placeholder de valores que se pueden utilizar dentro de la funcion.
    var resultado= a+b;
}

//Return , como regresamos un valor con una function



function suma(a,b) {
    var resultado = a+b;
    return resultado;
}

suma(20, 30)