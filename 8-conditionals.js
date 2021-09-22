//Esto nos ayudara para poder hacer decisiones.

var isUser = true;

if(isUser){
    //Con el if validamos que la condicion se true.
    console.log('Tiene acceso al contenido');
}

// else

var isUser= false;

if(isUser){
    console.log('Tiene acceso al contenido');
} else {
    console.log('Tienes que crear una cuenta para poder acceder al conteido');
}

//Ejemplo de como se utiliza el else if

var age = 18;
var action;

if(age === 18){
    action='Puede votar, sera su 1ra votacion'
} else if(age > 18) {
    action = 'Puede votar'
} else{//call back
    action = 'Aun no puede votar'
}

console.log(action);

/* ================================================================ */ 

// Operador ternario

var number= 1;
var outcome;

if(number === 1){
    outcome = 'Si son un 1';
}else{
    outcome='No soy un 1';
}

condition ? true : false;

var number = 1;
var outcome= number === 1 ? 'Si soy un 1':' No soy un 1';

console.log(outcome);

// ==============================
