//Hoisting es cuando las declaraciones de variables y funciones se procesan antes de ejecutar cualquier codigo, al momento de que se genere el hoisting, las funciones se declaran primero, y despues las varibles.

//Ejemplo cuando se corre el siguiente codigo "undefined"

console.log(SayMyName);

var SayMyName="Adrian";
//Lo que pasa con el hoisting

var SayMyName=undefined;

console.log(SayMyName+"Im hoisting");

SayMyName= "Adrian";

// === Hoisting con functions ===

hey();
function hey(){
    console.log('Hola'+SayMyName)
};

var SayMyName ='Adrian'

////Lo que pasa con el hoisting
function hey(){
    //La funcion se ceclara hasta arriba, y despues se declaran las variables.
    console.log('Hola ' + SayMyName);
};

var SayMyName;

hey();

SayMyName = 'Adrian'