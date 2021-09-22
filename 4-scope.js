/*Ejemplo del univeros, un sismea solar, y un planeta*/

//Scope es igual a, donde buscar por cosas(estás cosas son las varibles), el Scope es el alcance que tienen las varibles, depende de donde las declaremos y las mandamos llmar si tendremos acceso a ellas o no.

//Hay dos tipos de Scope, Scope Global y Scope Local.
// =================

//Ejemplo de lo que es un Scope Global

var miNombre= "Adrian"

function nombre(){
    miNombre= "Perepepe"
    return miNombre;
}

nombre();

console.log(miNombre);

//Ejemplo de lo que es un Scope Local, el Scope local pasa la momento de crear una funcion, esto genera un ambito diferente al global, al cual no se podra tener acceso desde el ambito global.

var miNombre= "Adrian"

function nombre(){
    var miApellido ="Perez";
    return miNombre+" "+ miApellido
}

nombre();
console.log(miNombre);
console.log(miApellido);

//  Ejemplos de como puede crear error el tema del scope. 


//Ejemplo 1 como podemos evitar reescribir el valor de una variable gracias al scope
var miNombre="Adrian"

function nombre(usuario){
    miNombre=usuario;
    console.log(miNombre);
}

nombre("Juan Carlos");
console.log(`Hola ${miNombre}, como estas ?`);



//Ejemplo2, como podemos evitar reescribir el valor de una variable gracias al scope,

var miNombre= "Adrian"

function nombre(usuario){
    var miNombre= usuario;
    console.log(miNombre)
}
nombre("Juan carlos");
console.log(`Hola${miNombre}, como estas?`);

//Ejemplo3 como si creamos un scopelocal, y mandmos llamar la varible fuera de la funcion, nos puede crear un problema.

function nombre(usuario) {
    var miNombre = usuario;
    console.log(miNombre);
}

nombre("Juan Carlos");

console.log(`Hola${miNombre}, como estas?`)