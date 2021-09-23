//Un array es una estructura de datoas, es un objeto tipo lista de alto nivel.

//Los arrays son objetos de tipo lista cuyo prototipo tiene metodos para realizar operacions de recorrido y mutacion.

var fruits = []; // Array Literal Syntax

var fruits=["Apple","Banana","Cherry","Strawberry"];
console.log(fruits);
console.log(fruits.length) //length es una propiedad del array

//Acceder(por indice) a un elemento del Array
console.log(fruits[0]); //Los Arrays inician en "0"


// === Metodos para mutar arrays ===

//.push();

var latest= fruits.push("Grape"); //Este metodo añidira "Grape" al final del array
console.log(fruits)

//.pop();

var latest= fruits.pop("Grape"); //Este metodo eliminara "Grape" del final del array
console.log(fruits)

//unshift()

var latest= fruits.unshift("Grape"); //Este metodo añade "Grape"al inicio del array
console.log(fruits)

//shift();

var latest= fruits.shift("Apple");
//Elimina "Apple" del inicio
console.log(fruits)

// .indexOf();

var position = fruits.indexOf("Banana");//te dara la posicion de ese item en el array
console.log(fruits);

