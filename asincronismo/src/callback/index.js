//funcion suma de dos elementos
function sum(num1, num2){
    return num1 + num2;
}
//funcion que recibe como argumento la funcion sum callback
function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(85, 6, sum)); //ejecuto la funcion calc con los dos parametros y los suma

function date(callback){//callback que muestra la fecha con 3 segundos de diferencia setTimeout 3000
    console.log(new Date);
    setTimeout(function(){
        let date = new Date;
        callback(date);
    }, 3000)

}

function printDate(dateNow){// funcion que imprime la fecha actual
    console.log(dateNow);
}

date(printDate)

