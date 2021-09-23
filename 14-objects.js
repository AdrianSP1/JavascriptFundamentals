//Un objeto es una coleccion de propiedades, y una propiedad es una asociacion de key(nombre, o clave) y valores.

var object = {}; //Object Literal Syntax

var myCar ={
    brand:"Toyota",//key - value
    model:"Corolla",
    year:2020,
    carDetails: function(){ //Metodo de un objeto(una funcion dentro de un objeto)
        return `Car ${this.model}${this.year}`;
    }
};;

myCar.year
myCar.model

myCar.carDetails();

//Funcion constructora

function car(brand, model, year){//Creas una funcion con los parametros que va a escribir,
    this.brand= brand;//utilizamos el "this" para asignar valores a las propiedades del objeto
    this.model= model;
    this.year=year
}

var newCar= new car("Tesla","Model 3",2020)